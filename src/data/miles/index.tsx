declare function require(name:string): string

import * as React from 'react'
import { Page } from '../../Page'
import { Grid, Col, Row } from '../../Grid'
import { TextBox } from '../../TextBox'
import { Background } from '../../Background'
import { ReadMore } from '../../ReadMore'

const Overlay = () => (
  <div>
    <p>As a new and powerful weapon unlike any that the world had ever seen the atom bomb elicited strong responses from all around the world. For the countries directly involved in the creation and detonation of the A-bomb, namely the United States and Japan, there were intense feelings and sentiments coming from both sides about whether the bomb was necessary or not. In a United States public opinion poll from October of 1945, only two months after the bombs were dropped, 53.5% of Americans thought the bombs should have been used on two cities and another 23% took it further saying the United States should have used many more bombs before Japan even had the chance to surrender (Christy, May 5th). Only 4.5% of people thought the bombs should not have been used. </p>
    <p>   For Japan, if defeat at the hands of the United States wasn’t humiliating enough the dropping of the atom bomb marked the end of an era for Japan, as their whole societal and political structure was changed after the bomb was dropped. This humiliation had the immediate reaction of hatred from many Japanese citizens and leaders. But slowly, Japan has allied itself with the United States and completely changed their agenda and national outlook. In either case, there were many different opinions coming from both United States and Japanese about whether the use of the atom bomb on Hiroshima and Nagasaki was necessary or not. These opinions depended primarily on one's own position and experience in relation to the war. </p>
    <p>In this section, I will focus on perspectives of military and political leaders from both sides, with a focus on the question: would Japan have still surrendered without the use of the atom bomb?</p>
    <img src={require('./image1.png')} />
    <p>Henry H. Arnold was a five star general of the army during World War 2, and the unofficial general of the air force. Eventually, in 1947 a position was created for him as the general of the Air Force, a position that has never been filled again since his death in 1947. As such, Arnold’s perspective is important as one of the most powerful U.S military leaders during the time of the decision to drop the bomb.</p>
    <p> In The Third Report of the Commanding General of the Army Air Forces to the Secretary of War from November 1945 Arnold wrote about his perspectives concerning the necessity of the atom bomb and the role it played in Japan’s defeat. He wrote that “The harnessing of atomic energy and its application at the climax of the Pacific war have tended to over- shadow a most important point. Even before one of our B-29's dropped its atomic bomb on Hiroshima. Japan's military situation was hopeless” (Arnold, 33).</p>
    <p>
      Arnold believed that Japan had already been defeated even before the atomic bomb was dropped on Hiroshima on August 6 1945. He believed that they were ready to surrender. In his report to the secretary of war, Arnold outlined a map in which he showed the military decimation of Japanese cities from regular air strikes, bombings, and incendiary raids (Arnold, 36). The map estimates the percentage of how much of each city on it was destroyed by regular bombings, and concludes that Hiroshima and Nagasaki were just 2 cities added to a list of over 60. (Map Below, with citation.) Arnold supports his claim with statistics outlining the extent to which Japan was getting raided by Allied military forces, “In 1944 not more than 100 bombers attacked Japan in a single operation. In early August, 1945, 801 superfortresses were attacked in a single operation” (Arnold, 37).
    </p>
    <img src={require('./image3.png')} />
    <p>Henry Arnold was not the only military leader to suggest that the Atomic bomb was not necessarily used out of necessity. In fact, United States military leaders from all different branches had different opinions on why the bomb was used. Navy Admiral Chester Nimitz, for example, stated in an interview with the Washington press in October 1945 that “The Japanese had, in fact, already sued for peace before the atomic age was announced to the world with the destruction of Hiroshima and before the Russian entry into the war.” (Long). The general consensus among American military leaders who had knowledge of the military situation in the Pacific, believed that Japanese surrender would have been inevitable even if the atomic bomb had not been a factor. David Joravsky, an infantryman fighting for the United States during the Pacific war who later became a history professor at Northwestern University argued that the bombs did not need to be dropped on cities (Fussell, 5). While the immediate response of the American public was in support of Truman's decision to drop the bomb, military leaders and those who studied the events leading up to Japanese surrender in the Pacific war believed that the bomb was dropped as an extra show of power by the United States. </p>
    <img src={require('./image2.png')} />
    <p>Emperor Hirohito was seen as divine in Japan during the time of the Pacific war. Japan used this as propaganda to get citizens to resist foreigners in the war. It was one of the main reasons that the United States believed that every man woman and child in Japan was ready to fight til the death, because they believed that Hirohito’s divinity commanded them to die for him. As a divine emperor, Hirohito had full control of his empire. Thus, it was his word that would ultimately decide if Japan was to surrender or not. </p>
    <p>While finally surrendering after the second atomic bomb was dropped on Nagasaki, Hirohito shared his thoughts on the surrender: “regrettably, I think that defeat is inevitable.” (Christy, May 3rd). This decision however, unlike many narratives that have been told in the United States since the war ended, may not have been entirely prompted by the dropping of the atomic bomb. Hirohito also claimed in his surrender that there was a “considerable danger that the Soviet Union would eventually intervene in Japan's affairs” if they did not surrender and focus on repelling the Soviets (Christy, May 3rd). The threat of communism, along with an overpowering military attack from the allies was enough for Japan to surrender as it was, the atomic bombs that were dropped on Hiroshima and Nagasaki only accelerated the process.</p>
    <p>In 1965 historian gar alperovitz argued that “Japan’s leaders had wanted to surrender anyway and likely would have done so before the american invasion planned for nov. 1” (Ward). If anything, the United States was waiting for Hirohito to surrender without causing any more bloodshed to American soldiers. When they believed that he was too prideful to surrender, they decided in one of the more ruthless moves of the war to drop the atomic bomb not only on Japanese military bases and soldiers, but on cities with civilians living in them. The necessity of this act was questionable, with most historical signs and perspectives pointing toward the move being made primarily to show the might of the United States military.</p>
  </div>
)


const Slide1: React.SFC<{ onReadMore?: () => void }> = ({ onReadMore }) => (
  <Grid>
    <Col width={2}>
      <Row height={2}>
        <TextBox size={1}>
          <p>As a new and powerful weapon unlike any that the world had ever seen the atom bomb elicited strong responses from all around the world. For the countries directly involved in the creation and detonation of the A-bomb, namely the United States and Japan, there were intense feelings and sentiments coming from both sides about whether the bomb was necessary or not.</p>
          <ReadMore onClick={onReadMore} />
        </TextBox>
      </Row>
      <Row height={2} img={require('./image1.png')} />
    </Col>
    <Col width={2}>
      <Row height={2} img={require('./image2.png')} />
      <Row height={2} img={require('./image3.png')} />
    </Col>
  </Grid>
)




export const milesData = [
  {
    color: '#EB974E',
    content: Slide1,
    overlay: Overlay
  },
]
