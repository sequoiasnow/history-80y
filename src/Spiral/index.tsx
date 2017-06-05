import * as React from 'react'
import { Page, PageProps } from '../Page'
import { cn } from '../lib/cn'
import { setColors } from '../colors'

import * as $ from 'jquery'
import 'jquery-mousewheel' 

import './styles.scss'

/**
 * The golden ratio
 */
const aspect = 0.6180339887;

/**
 * The Spiral contains a series of pages it will
 * show in spiral manner.
 */
export interface SpiralProps {
  pages: PageProps[]
}

interface SpiralState {
  angle: number,
  touchStart: {
    x: number,
    y: number
  }
}

/**
 * The Spiral creates a series of 
 */
export class Spiral extends React.Component<SpiralProps, SpiralState> {
  protected _spiral: HTMLElement
  
  /**
   * Add scroll and navigation effects for the duration of the component
   * lifecycle.
   */ 
  componentDidMount() {
    $(window).mousewheel(this._onWheel)
    $(window).on('scroll', () => false)
    document.body.addEventListener('touchstart', this._onTouchStart)
    document.body.addEventListener('touchmove', this._onTouchMove)
    document.body.addEventListener('touchend', this._onTouchEnd)
    document.body.addEventListener('keyup', this._onKeyDown)
  } 

  /**
   * Move the component forward a slide.
   */
  private _move(angle?: number): void {
    let deg = angle
    if ( angle === undefined ) {
      // Find the closest 90deg angle. 
      if ( (-this.state.angle % 90) < 45 ) {
        deg = Math.floor(-this.state.angle / 90) * -90
      } else {
        deg = Math.ceil(-this.state.angle / 90) * -90
      }
    }

    if ( deg > 0 ) deg = 0
    if ( deg < -90 * (this.props.pages.length - 1)) deg = -90 * (this.props.pages.length - 1)
    
    console.log(`Lets go to ${deg}`)
    cancelAnimationFrame(this._animationId)
    this._animationId = requestAnimationFrame(() => this._animate(deg))
  }

  private _animationId: number
  private _animate(toAngle: number): FrameRequestCallback {
    // If we want to turn at 200deg/sec, requestAnimationFrame is roughly 60frames per sec.
    const speed = 360 / 60
    const { angle } = this.state

    // Check if we've already arrived (angle - speed ) < toAngle < (angle + speed)
    if ( (angle - speed) < toAngle && (angle + speed) > toAngle ) {
      this.setState({ angle: toAngle })
      cancelAnimationFrame(this._animationId)
      return
    }
    
    // Move towards the destination, P from PID
    this.setState({
      angle: toAngle > angle ? angle + speed : angle - speed 
    })
    this._animationId = requestAnimationFrame(() => this._animate(toAngle))
  }

  /**
   * Handle keydown events for navigation.
   */
  private _onKeyDown(e: KeyboardEvent): void {
    if ( e.keyCode == 39 || e.keyCode == 38 ) {
      this._move((Math.round(-this.state.angle / 90)  + 1)* -90)
    } else if ( e.keyCode == 37 || e.keyCode == 40 ) {
      this._move((Math.round(-this.state.angle / 90)  - 1) * -90) 
    }
  }

  /**
   * When the touch begins from jquery, start listening to the movement.
   */
  private _onTouchStart(e: TouchEvent): void {
    const touch = e.touches[0] || e.changedTouches[0]
    this.setState({ touchStart: {
      x: touch.pageX,
      y: touch.pageY
    }})
    cancelAnimationFrame(this._animationId)
  }
  
  private _onTouchMove(e: TouchEvent): void {
    e.preventDefault()
    const touch = e.touches[0] || e.changedTouches[0]
    const { touchStart } = this.state
    const moved = Math.sqrt(
      Math.pow(touch.pageX - touchStart.x, 2) +
      Math.pow(touch.pageY - touchStart.y, 2)
    )
    const speed = 0.1
    this.setState({
      angle: this.state.angle + speed * moved
    })
  } 

  private _onTouchEnd(e: TouchEvent): void {
    this._move()
  }
  
  /**
   * In direct tandom to the actual actions of the scroller, adjustes both the 
   * magnification and the index.
   */
  private _onWheel(e: JQueryMousewheel.JQueryMousewheelEventObject): void {
    e.preventDefault() 
    const speed = 0.1 
    this.setState({
      angle: this.state.angle + speed * e.deltaY 
    })
    clearTimeout(this.normalizeTimeout)
    this.normalizeTimeout = setTimeout(() => this._move(), 100)
  }

  /**
   * The timeout for the normalize function.
   */
  private normalizeTimeout: number
  
  constructor(props: SpiralProps) {
    super(props)
    this.state = { angle: 0, touchStart: { x: 0, y: 0 } }
    this._onWheel = this._onWheel.bind(this)
    this._move = this._move.bind(this)
    this._animate = this._animate.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this)
    this._onTouchStart = this._onTouchStart.bind(this)
    this._onTouchMove = this._onTouchMove.bind(this)
    this._onTouchEnd = this._onTouchEnd.bind(this)
  }

  public render() {
    // Which spiral have we currently selected.
    const { angle } = this.state
    const scale = Math.pow(aspect, angle / 90)
    const index = Math.floor(angle / -90)
    const transform = `rotate(${angle}deg) scale(${scale}) translate3d(0px, 0px, 0px)`
    return (
      <div>
        <section className="spiral">
          <div className="spiral__container" style={{transform}}>
            {this.props.pages.map((page: PageProps, i: number) => {
               const scale = Math.pow(aspect, i)
               const angle = `${90 * i}deg`
               const style = {
                 transform: `scale(${scale}) rotate(${angle}) translate3d(0px, 0px, 0px)`,
                 display: (-90 * (i + 1) > this.state.angle) ? 'none' : 'block'
               }
               
               return (
                 <div className={cn('spiral__elem', { 'spiral__elem--selected': i == index})}
                      style={style}
                      key={i}
                      onClick={i == index ? null : () => this._move(i * -90)}>
                   <div className="elem__content">
                     <Page title={page.title} description={page.description} />
                   </div>
                 </div>
               )
             })} 
          </div>
        </section>
        <div className="spiral__overlay" />
      </div>
    )
  }
}
