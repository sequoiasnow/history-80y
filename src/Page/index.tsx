import * as React from 'react'
import './styles.scss'

export interface PageProps {
  title: string,
  textColor?: string, 
  logo?: React.ReactNode,
  description?: string
  selected?: boolean
}

export const Page: React.SFC<PageProps> = (props) => (
  <article className="page">
    <header className="page__title">
      <span>{props.title}</span>
    </header>
    <section className="page__content">
      {props.children}
    </section>
    {props.logo && <footer className="page__icon">{props.logo}</footer>}
  </article>
)
