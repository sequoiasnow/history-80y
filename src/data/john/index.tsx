declare function require(name:string): string

import * as React from 'react'
import { Page } from '../../Page'
import { Grid, Col, Row } from '../../Grid'
import { TextBox } from '../../TextBox'
import { Background } from '../../Background'
import { ReadMore } from '../../ReadMore'

const TitleSlide = () => (
  <TextBox size={3} subTitle="- Diane Mayr, Nagasaki World Haiki Festival" center> 
    <p>The sun cannot know</p>
    <p>The smudge on the ground</p>
    <p>Once had a name.</p>
  </TextBox>
)

const Overlay1 = () => (
  <div>
    <p>
      Art is a reaction, a reaction meant to capture a feeling. To capture this feeling the artists uses every tool and trick to create thoughts in those who interact with art. But without meaning, most art falls to the wayside as trivial. It is when art is coupled with a message that the art gains purpose, a voice reaching out of the work to say something important, something the artist feels should be said to all. Many times, these invocative works come from experience, an event or series of events that shapes who the artist is. For any artist present in Hiroshima on August 6th  1945, a roaring fireball of an event cemented itself as a muse for those trying to capture the awe of untold death and destruction. 
    </p>
    <p>
      But the Atomic Bomb became more than just an image. For many artists, the Atomic Bomb became a tool for peace. This stain on the world opened dialog about how far gone the war industry was, many saw the very concept of the bomb to be a tipping point in the history of warfare, one that we could never step down from. Resentment, never found on such an international scale spread across the globe as a response to this excessive use of force.
    </p>
    <p>
      In Japan, the Atomic Bomb was received as expected, with outcries of horror and calls for the end of the war immediately. This pain was captured in many ways, but one of the most impactful is not the art of adults, but the art of children present.
    </p>
    <p>
      These works capture a loss of innocence, the exact moment where the harsh realities of war changed these children. These works were received by the world with shock. Never before had a weapon threatened the existence of so many. The art also brings to light the victimized children, a horror of war so religiously avoided that a new wave of images like this had the power to shift the paradigm. These images hold the message of despair that these children felt.
    </p>
    <p>
      Atomic art also found roots in America, the instigator of this destruction. While many soldiers and scholars argue that the loss of life would have been greater in a mainland attack, the fact that the bombs took thousands of lives in an instant stirred the concerns of those in the states. For artists, it became a mission to bring the message of peace from the ashes of the bomb. Many artists, such as Eugene Von Bruenchenhein sought to bring the bomb to life in the eyes of the American public.
    </p>
  </div>
)

const Slide1: React.SFC<{ onReadMore?: () => void }> = ({ onReadMore }) => (
  <Grid>
    <Col width={2}>
      <Row height={2} img={require('./1.jpg')} />
      <Row height={2} img={require('./2.jpg')} />
    </Col> 
    <Col width={2}>
      <Row height={2}>
        <TextBox>
          <p> Art is a reaction, a reaction meant to capture a feeling. To capture this feeling the artists uses every tool and trick to create thoughts in those who interact with art. But without meaning, most art falls to the wayside as trivial. It is when art is coupled with a message that the art gains purpose, a voice reaching out of the work to say something important, something the artist feels should be said to all.</p>
          <ReadMore onClick={onReadMore} />
        </TextBox>
      </Row>
      <Row height={2} img={require('./3.jpg')} />
    </Col>
  </Grid>
)

const Slide2: React.SFC<{ onReadMore?: () => void }> = ({ onReadMore }) => (
  <Grid>
    <Col width={2}>
      <Row height={2} img={require('./4.jpg')} />
      <Row height={2}>
        <TextBox>
          <i>“Von Bruenchenhein did not shrink back in terror at the sight of monsters that were in all colors of hell and looked like escapees from a nightmare. He made portraits of the monsters as though he considered them to be every bit as beautiful as the full-thighed Venuses that Rubens painted”. </i>
          <ReadMore onClick={onReadMore} />
        </TextBox>
      </Row>
    </Col>
    <Col width={2}>
      <Row height={2} img={require('./5.jpg')} />
      <Row height={2} img={require('./6.jpg')} />
    </Col> 
  </Grid>
)

const Overlay2 = () => (
  <div>
    <p>
      While the Atomic Bomb shined through as a predominate symbol in painting and drawing, perhaps the best commentary of the A-bomb comes from films.
    </p>
    <p>
      Godzilla became a fast favorite in Japan, with the film itself being a hidden commentary on the potential dangers of just the bombs after effects. Rampant destruction is the only word to describe the nuclear-charged horrors of the atomic lizard’s terror across japan. The director, Ishirō Honda, stated in an interview that “If Godzilla had been a dinosaur or some other animal, he would have been killed by just one cannonball. But if he were equal to an atomic bomb, we wouldn't know what to do. So, I took the characteristics of an atomic bomb and applied them to Godzilla…”. In doing such he embodies the atomic bomb as a monster, something to fear beyond all else. This was the sentiments at the time, that nothing could stop the destruction of the atom
    </p>
    <p>But some of the best commentary on the bomb was made after the initial turmoil of Hiroshima and Nagasaki. Disarmament and General resent to the bomb grew to an all-time high during the cold war, where the thought of nuclear strike was just an everyday phenomenon. For Stanley Kubrick, the A-bomb became something so dark that it transcended into comedy. The film looks to show the ridiculous nature of mutually assured destruction. While the film also comments on the time-period and the cold war, the main driving force is this 200-megaton death stick that has the power to turn the world upside-down. Kubrick looked to give America a new way to think about the bomb and just exactly what can go wrong. Dr.Strangelove was received warmly by the American people, hopefully creating a seed of doubt about the safety associated with the use and deployment of nuclear weapons.    
    </p>
  </div>
)

const Slide3 = () => (
  <Background img={require('./7.jpg')}>
    <TextBox size={1} full>
      Altogether, and along with countless others, these works capture the mindset of a time period. Horror, fear, ridiculous situations of world ending proportions are all part of the message that the bomb itself is a danger to humanity as we know it. Whether it's giant lizards or face melting loved ones, these images seek to educate the world on the mistake of using nuclear weapons on our fellow humans. Through art these people are able to tell their stories across the globe, reacting out 
    </TextBox>
  </Background>
)

const Slide4 = () => (
  <Background img={require('./8.jpg')} />
)

export const johnData = [
  {
    color: 'black',
    content: TitleSlide 
  },
  {
    color: '#9a5cb4',
    content: Slide1,
    overlay: Overlay1
  },
  {
    color: 'rgb(22, 160, 133)',
    content: Slide2,
    overlay: Overlay2
  },
  {
    color: 'rgb(189, 195, 199)',
    content: Slide3
  },
  {
    color: '#094b22',
    content: Slide4
  },
] 
