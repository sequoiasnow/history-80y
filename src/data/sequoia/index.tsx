declare function require(name:string): string

import * as React from 'react'
import { Page } from '../../Page'
import { Grid, Col, Row } from '../../Grid'
import { TextBox } from '../../TextBox'
import { Background } from '../../Background'
import { ReadMore } from '../../ReadMore'

const TitleSlide = () => (
  <TextBox size={10} 
           subTitle="Sequoia Snow, Monica Pizano, Daphne White, John Harris, Miles Dalton"
           center>
    The Atomic Bomb
  </TextBox>
)

const Slide1 = () => (
  <Grid>
    <Col width={2}> 
      <Row height={3} img={require('./einstein.jpg')}/>
      <Row height={1}>
        <TextBox size={3}>
          <p>
            “It may be possible to set up a nuclear chain reaction”
          </p>
        </TextBox>
      </Row> 
    </Col>
    <Col width={2}>
      <Row height={2}>
        <TextBox size={1}>
          <p>
            The Manhattan Project marked one of the first research projects which was scientifically driven, and would become the origin of the scientific communities influence in weapons development throughout the cold war. It is notable that the Manhattan project could not exist without Albert Einstein and the discovery of fission by Lise Meitner and Otto Frisch.
          </p>
        </TextBox>
      </Row> 
      <Row height={2} img={require('./oppenheimer.jpg')}/>
    </Col>
  </Grid>
)

const Slide2 = () => (
  <div>
    <Background img="">
      <Grid>
        <Col width={2}>
          <Row height={2} img={require('./einsteinletter.jpg')}/>
          <Row height={2} img={require('./uraniumcomittee.jpg')}/>
        </Col>
        <Col width={2}> 
          <Row height={2} img={require('./roosevelt.jpg')} />
          <Row height={2} img={require('./szilard.jpg')}/>
        </Col>
      </Grid>
    </Background>
    <TextBox size={1} full>
      <p>
        Albert Einstein’s letter to President Roosevelt remained one of Einstein’s greatest struggles until his death. It is in this letter that the greatest physicist in the twentieth century argues that the Atomic Bomb is a credible threat from Germany. That it must be countered, and should it be necessary used to prevent and Axis victory. It was the theory Einstein developed and proved, E = MC^2 , which hinted at the possibility of a nuclear bomb, at it was his letter to Roosevelt which prompted interest into what would become the Manhattan Project. It is this impact, and the subsequent shaping of the cold war that led Time magazine to name Albert Einstein the most influential person in the twentieth century.
      </p>
    </TextBox>
  </div> 
)

const Slide3: React.SFC<{ onReadMore?: () => void }> = ({ onReadMore }) => (
  <div>
    <Background img={require('./trinity.jpg')} />
    <TextBox full>
      <ReadMore onClick={onReadMore}/>
    </TextBox>
  </div>
)

const Overlay = () => (
  <h1>
    <h1>The Manhatten Project</h1>
    <p>
      The Manhattan Project was centered around two primary issues, attaining fissionable material and creating a device that could cause a chain reaction with that material. The first proved the most difficult of the two to perform in any quantity. Like much of the Manhattan project, there was the issue of turning bleeding edge scientific discoveries into practical industrial projects. Originally there were four proposed methods of Uranium refinement studied by the so called Uranium Committee set up by the president after the Einstein letter. This morphed into the National Defense Research Committee which was a purely scientific body without military attachment. It was during this time that Glenn Seaborg identified the element plutonium as a possible alternative to Ernest Lawrence’s work on Uranium. In 1940 the United States was given intelligence concerning fission by the British in the so-called MAUD report which confirmed some assumptions about a sustainable fission reaction in Uranium-235. Furthermore it illustrated that the discovery of fission had occurred three years earlier in Germany, a discovery which prompted increased urgency in the project.
    </p>
    <p>
      It is at this point important to note that the German’s were at the time pursuing an Atom Bomb project of their own, under the guidance of the Werner Heisenberg. While Hitler discontinued interest in the project after learning of the required time and funding, it is notable that some later research and atomic occurred by the German scientists working on this project. Heisenberg’s own uncertainty principle was of paramount importance in creating the atomic bomb. 
    </p>
    <p>
      After the MAUD report, the research into nuclear weapons was transferred to the military under the direction Colonel Leslie Groves, who was given the rank of Brigadier General after receiving the project. This was the beginning of the Manhattan Project in its colloquial sense. At the time much land was bought for the creation of a scientific development community in Los Alamos headed by Robert Oppenheimer as well as a Uranium refinery plant in Oak Ridge Tennessee. The goal of Oak Ridge was the development of enriched uranium-235 as well as plutonium, the former coming from an electromagnetic method devised by Lawrence. It was during this time that 15,000 tons of silver bullion from the United States Treasury was melted down for wires due to a shortage of copper. 
    </p>
  </h1>
)


export const sequoiaData = [
  { color: '#f19b2c',
    content: TitleSlide 
  },
  { 
    color: '#282c34',
    content: Slide1
  },
  {
    color: '#f1ab4c',
    content: Slide2
  },
  {
    color: 'rgb(231, 76, 60)',
    content: Slide3,
    overlay: Overlay
  }
]
