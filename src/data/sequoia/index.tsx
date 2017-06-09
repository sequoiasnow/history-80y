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
      <Row height={2} img={require('./einstein.jpg')}/>
      <Row height={2} img={require('./oppenheimer.jpg')} />
    </Col>
    <Col width={2}>
      <TextBox size={1}>
        <p>
          The Atomic Bomb. It is a force of terror, to some a liberator from near death, to others the delivery of the same fate. The impact of this device, the “gadget” that shaped the twentieth century can not be overstated. Never before in history has mankind possessed the power to destroy the very planet upon which we live. But where did this device come from, from great and terrible deeds of soldiers and war minded conquerors, no. It came from figures once thought inconsequential, a patent clerk working hard to keep his family afloat, who dappled in physics, Albert Einstein. It came from one of the first renowned female physicists Lise Meitner who happened to discuss a topic with her nephew Otto Frisch while escaping the Nazis. It came from a scientist who had such severe allergies he was sent to a remote island where he came up with the uncertainty principle that is the cornerstone of quantum mechanics, Werner Heisenberg. It came from a host of people, seemingly insignificant at the time, who came to reshape the world with the creation of one device.
        </p>
      </TextBox>
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
  <div>
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
    <p>
      At this point that the Manhattan project devolved into an issue of logistics and construction, while the racetracks for enriching uranium were constructed, and often overhauled do to new findings or existing difficulties. The plutonium pile was moved to the Oak Ridge facility to take advantage of existing plants that could be transferred from some the of the failed accelerators. There is much that can be said of the industry present in this development, the thousands who worked to build and monitor equipment, yet the most important work of the time occurred not at the heart of industry but development in Los Alamos. </p>
    <p>
      It was at Los Alamos that the first scientists were killed by radioactive poisoning. It was at Los Alamos that it was almost decided to stop the atom bomb development for fear of igniting the atmosphere and destroying the world. And it was at Los Alamos that the manhattan project was completed and “the gadget” developed to be detonated in New Mexico. It was also at this point that the scientists of the project presented opposing viewpoints on the use of the bomb were first presented, namely by Lawrence and Salizard.
    </p>
    <p>
      Oppenheimer was famously quoted saying “I have become death, the destroyer of worlds” upon the detonation of the atomic bomb at Trinity New Mexico, a title which haunted him in the years that followed. Like so many of the nuclear scientist he struggled with the guilt of the victims of the atomic bomb, as well as the fear, ever present at the time, that because of his work the world could face complete annihilation. Albert Einstein famously stated “I made one great mistake in my life – when I signed the letter to President Roosevelt recommending the Atomic Bombs be made.” In Oppenheimer's farewell speech to the scientists of Los Alamos he warns of the need for a new diplomacy, of a world without war because the cost of conflict is now to high. It is clear that the impact of the bomb changed many of his views of the world, as it did many scientists. The stark reminder of the possibility of a nuclear holocaust and ever present cloud that hung over the success of the Manhattan project, a project that won a war and began another. 
    </p>
  </div>
)


export const sequoiaData = [
  { color: '#ef4836',
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
