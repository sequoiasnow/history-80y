declare function require(name:string): string

import * as React from 'react'
import { Page } from '../../Page'
import { Grid, Col, Row } from '../../Grid'
import { TextBox } from '../../TextBox'
import { Background } from '../../Background'
import { ReadMore } from '../../ReadMore'

const Slide1: React.SFC<{ onReadMore?: () => void }> = ({ onReadMore }) => (
  <Grid>
    <Col width={4}>
      <Row height={1}>
        <Grid>
          <Col width={3}>
            <TextBox size={3} subTitle="Tanichigi ">
              <i>“The word ‘peaceful’ is used to make everything acceptable. The atomic bomb is the destroyer of peace”</i>
            </TextBox>
          </Col>
          <Col width={1}>
            <TextBox>
              <ReadMore onClick={onReadMore} />
            </TextBox>
          </Col>
        </Grid>
      </Row>
      <Row height={3}>
        <Grid>
          <Col width={2}>
            <Row height={4} img={require('./image1.jpg')} />
          </Col>
          <Col width={2}>
            <Row height={4} img={require('./image2.jpg')} />
          </Col>
        </Grid>
      </Row>
    </Col>
  </Grid>
)

const Overlay1 = () => (
  <div>
    <p>
      
      Taniguchi Sumiteru: sixteen years old at the time of the bombing in Nagasaki, was working the night shift at Michino-o- Post Office. Mother passed away at the age of 1, father had to leave to work after as a train engineer. Was left under the care of his grandparents along with his older brother and sister. Worked at age 14 to provide the extra income, was small.(32-33). At the time of the blast, Taniguchi was on the northern side of the explosion. Taniguchi was riding his bike making deliveries. A mile from the hypocenter, Taniguchi was thrown to the ground by the shaking of the ground caused by the bomb. Children who were previously playing now laid died on the ground. Taniguchi right hand was seared black, from his fingertips to his shoulders the skin of his left arm was melted and hanging. His left leg was badly burned, not feeling any pain he felt his back. His black was covered with charred, melted skin, and with black slimy. “I did not feel any pain, and there was not a single drop of blood”, he stated. Wanting to survive, Taniguchi walked until he collapsed closed to a factory and a woman came to his aid. She cut off his hanging skin and applied machine oil on his back from lack of medical treatment. He was soon carried by men up to a hill and stayed there under the burning sun and heat waves for the rest of the day. Taniguchi grandfather spent a week looking for him until they were finally reunited, they both went by train to Ishaya where Taniguchi received aid. Within a week his back began to rot and would fall off, he began to experience pain and his wounds began to bleed. Taniguchi and other Nagasaki families received financial and physical support from the Wartime Casualties Care Law until October, they would then have to pay their own expenses.
    </p> 
    <p>After the war, in the early 1950s Taniguchi tried to live a normal life. He had a strong anger for both Japan and the United States. Shame of his scars, Taniguchi would cover them with clothes until a company-sponsored swimming outing. For the first time, and enjoyed by a co-worker he took off his shirt but covered himself with a towel because he felt embarrassed. He wanted his them to know about the atomic bomb and about the war. Taniguchi would shortly begin to tell his story to strangers and had his first public speaking engagement was at the invitation of the Japan. His survival began to mean something to him “at the moment, I realized that I must live on behalf of those who died unwillingly”. Joining two groups and later becoming the Nagasaki Atomic Bomb Youth Association in 1956, members were children or teenagers at the time of the bombing. Taniguchi had a privatized company Dendenkousha (Nippon Telegraph and Telephone Public Corporation), his company offered medical benefits for workers who were injured while at work at the time of the atomic bombing. Taniguchi had to provide that his injuries were caused by the bombing, he went to the Omura National Hospital, where he was located, to find his records. He found his records at a storage area, his records were the only hibakusha records found in the hospital. In 1960, doctors extracted a skin cancer growth in his back. He has later diagnosed with chronic blood disorder, his tumor was finally removed after numerous surgeries.</p>
    <p> Taniguchi goes to major cities and around the country to promote no more nuclear weapons. At the age of 85, Taniguchi suffers from constant pain, and many health problems. His post-bedsore in his chest are deep that his heartbeat is visible. He has nearly lost vision from one eye. Although retired, Taniguchi helps survivors understand the law and help them to receive help benefits from the government, claiming the law is hard to understand. Taniguchi continues to have anger towards Japan for attacking Pearl Harbor and for never satisfactorily apologizing.
    </p>
      <img src={require('./image1.jpg')} />
      <img src={require('./image2.jpg')} />
    <p>The above images are of Taniguchi Sumiteru, the photo to the left was the current photo of Sumiteru. There are visible skin burn scars and on his heartbeat will is visible as well. The photo to the right was taken during one of his talks holding a photo of himself days after the blast. </p>
    <p>On August 9, 1945 16 year old Taniguchi Sumiteru was riding his bike to make a delivery. A mile from the hypocenter, Taniguchi was thrown to the ground by the shaking of the ground caused by the bomb. Taniguchi right hand was seared black, from his fingertips to his shoulders the skin of his left arm was melted and hanging. His left leg was badly burned, not feeling any pain he felt his back. His black was covered with charred, melted skin, and with black slimy. “I did not feel any pain, and there was not a single drop of blood”, he stated. His grandfather found him a week after the blast, both traveled by train to Ishya. There Taniguchi was received aid. Within a week his back began to rot and would fall off, he began to experience pain and his wounds began to bleed. Taniguchi and other Nagasaki families received financial and physical support from the Wartime Casualties Care Law until October, they would then have to pay their own expenses. Five years after the blast, Taniguchi tried to live a normal life but he had a strong anger for both Japan and the United States. Until a company-sponsors swimming outing was the first time Taniguchi did not cover his scars, but eventually hide his scars with his towel. His survival began to mean something to him “at the moment, I realized that I must live on behalf of those who died unwillingly”. Joining two groups and later becoming the Nagasaki Atomic Bomb Youth Association in 1956, members were children or teenagers at the time of the bombing. Trying to find proof his scars were caused by the attack bomb in Nagasaki, Taniguchi went back to Omura National Hospital to find his records. He was the only hibakusha records found in the hospital. It is suspected the hospital destroyed records or moved them around Japan.  In 1960, doctors extracted a skin cancer growth in his back. He has later diagnosed with chronic blood disorder, his tumor was finally removed after numerous surgeries. At the age of 85, Taniguchi suffers from constant pain, and many health problems. His post-bedsore in his chest are deep that his heartbeat is visible. He has nearly lost vision from one eye. Taniguchi continues to have anger towards Japan for attacking Pearl Harbor and for never satisfactorily apologizing.
    </p>
    <p>
      Capt. Shields Warren of the Navy Medical Corps declared in a meeting of the American Association for Cancer Research in Atlantic City, people from Hiroshima and Nagasaki must be studied for many years to determine the range of the atomic bombing on their blood is resistant to disease and if they have the ability to have children. Warren and his group found immediate effects on radiation injuries. It was found that people died three weeks from the blast, their deaths were caused by hemorrhage. This was happened from radiation damage to certain cells of the bone marrow. “those with serious bone marrow damage who weathered the first few weeks developed anemia later with red blood cells counts in some dropping to as low as 1,000,000 or less which is less than one-fourth the normal”. The death rates would have been different if people were given repeated blood transfusions and penicillin to control the infections during the period of white blood cell anemia. 
    </p>
    <p>
      Park Cha Jom(the a-bomb disease I didn't know) parents were from Korea but her father was forced to live in Japan. Narrator was born in Japan, and lived in Hiroshima with parents and 5 other siblings. She went to nursing school and was working as a nurse assistant at the time of the bomb. She saw when the bomb was coming down from the sky but first thought it was an airplane. She was knocked out from the impact of the hit and was shortly awaken by a soldier saying fire was heading their direction. Her head was bloody, the left leg was swollen and also bloody. She was taken to the pier with other injured, and had not heard from family until several days when her sister came looking for her. One of her sisters was missing, the family wanted three months until the narrator and her parents returned to Korea. In Korea they were discriminated by families members and people that noticed or knew they had come back to Korea after the atomic bombing in Hiroshima. Many Koreans would call them “oay nom” meaning Japanese dog, years later she married twice. The first marriage failed possibly from her being a victim of the atomic bombs and felt terrible from the remakes she would receive from her husband and his family. While in her second marriage, her husband knew she was suffering from a disease and was in Hiroshima at the time of the bombing, her marriage failed due to the constant diseases she would be suffering and felt that she couldn’t stay with her husband anymore. The narrator eventually found out the disease she was suffering from was A-bomb disease. Her two children from her second marriage also fell victims from A-Bomb disease. Many survivors were dying from this disease, the Japanese government took no action. The narrator volunteers at the A-Bomb Association were they visit homes of patients. She demands the Japanese government appropriately compensate Korean victims of the A-bomb. 
    </p>
    <p>
      Park Cha Jom(the a-bomb disease I didn't know) parents were from Korea but her father was forced to live in Japan. She went to nursing school and was working as a nurse assistant at the time of the bomb. She saw when the bomb was coming down from the sky but first thought it was an airplane. Her head was bloody, the left leg was swollen and also bloody. She was awaken by soldiers and was taken to a pier with other injured. One of her sister was missing, after three months her parents and herself moved to Korea. There they were discriminated by families members and people that noticed or knew they had come back to Korea after the atomic bombing in Hiroshima. Many Koreans would call them “oay nom” meaning Japanese dog. Throughout her life she was constantly suffering from an unknown diseases, causing her to have two failed marriages. The narrator eventually found out the disease she was suffering from was A-bomb disease. Her two children from her second marriage also fell victims from A-Bomb disease. Many survivors were dying from this disease, the Japanese government took no action.</p>
    
  </div>
)

const Slide2 = () => (
  <Grid>
    <Col width={4}>
      <Row height={1}>
        <TextBox>
          woman was underneath a concrete block, she cried for help. Four or five people came to her aid but were not able to lift it off of her. They asked for forgiveness and left her there (3)8:30am
        </TextBox>
      </Row>
      <Row height={3} img={require('./image5.jpg')} />
    </Col>
  </Grid> 
)

const Slide3 = () => (
  <Grid>
    <Col width={2}>
      <Row height={2} img={require('./image3.jpg')} />
      <Row height={2}>
        <TextBox>
          mother, possibly dead, entire back was burn but no injuries in the front. Had a baby on her breast, sucking milk out of them. Can be said that she was on top of the body so it wouldn’t get hurt, baby was unburned. Mother was unconscious and viewer was scared she’ll die soon and the milk will stop and baby would die. Aug. 7 3:30pm
        </TextBox>
      </Row>
    </Col>
    <Col width={2}>
      <Row height={2}>
        <TextBox>
          Kazuo Akiyama age 66) survivors of the A-bomb were badly burned all over bodies. They were naked and their skin had come off, they suffered pain through the burns. Wander looking for parents, children, and spouses.
        </TextBox>
      </Row>
      <Row height={2} img={require('./image4.jpg')} />
    </Col>
  </Grid> 
)

export const monicaData = [
  {
    color: '#EC644B',
    content: Slide1,
    overlay: Overlay1
  },
  {
    color: '#663399',
    content: Slide2
  },
  {
    color: '#87D37C',
    content: Slide3
  }
]
