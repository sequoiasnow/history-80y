declare function require(name:string): string

import * as React from 'react'
import { Page } from '../../Page'
import { Grid, Col, Row } from '../../Grid'
import { TextBox } from '../../TextBox'
import { Background } from '../../Background'
import { ReadMore } from '../../ReadMore'

const TitleSlide: React.SFC<{ onReadMore?: () => void }> = ({ onReadMore }) => (
  <div>
    <Background img={require('./image1.png')} />
    <TextBox full size={1}>
      <h1>What is the U.S. Strategic Bombing Survey?</h1>
        
      <p>The USSBS was originally created in 1944 to conduct objective, official studies of the attacks on Germany and their physical consequences. Officially created in November of ‘44, the Secretary of War and President Roosevelt established the board with intentions based on warfare in Europe. Not until years after Pearl Harbor, in August of 1945, a new board was ordered by President Truman under the USSBS to study aerial warfare against Japan and throughout the Pacific. </p>

      <ReadMore onClick={onReadMore} /> 
    </TextBox>
  </div>
)

const TitleOverlay = () => (
  <div>
    <h1>What is the U.S. Strategic Bombing Survey?</h1>
              
    <p>The USSBS was originally created in 1944 to conduct objective, official studies of the attacks on Germany and their physical consequences. Officially created in November of ‘44, the Secretary of War and President Roosevelt established the board with intentions based on warfare in Europe. Not until years after Pearl Harbor, in August of 1945, a new board was ordered by President Truman under the USSBS to study aerial warfare against Japan and throughout the Pacific. </p>
    
    <p> The introduction to the original summary report emphasizes that the survey is not a written history of the war, nor a statement of victory, in order to claim a completely objective and unbiased report. As we examine more closely the timelines of the conduction of the survey and the production and planning of the bombs, the survey seems to be of greatest purpose to study the effects of the atomic bombs in Hiroshima and Nagasaki, as well as justify them in a greater written history. Following sections will analyze two specific content sections throughout the report that justify the atomic bombs most frequently: “The Effects of the Atomic Bombs”, and in the conclusion, “The Uniqueness of the Pacific War”, and “The Impact of Atomic Bombs on the Role of Airpower”. </p>
    
    <h2> Survey Operation</h2>
    
    <p>During the survey process, the operation headquarters were located in Tokyo. There were also sub-headquarters in Nagoya, Osaka, Hiroshima, and Nagasaki, as well as further travel and dispersal by groups throughout Japan, the Pacific island, and mainland Asia. </p>
    
    <p>The officials of the Survey in Japan, who are all civilians, included: Chairman Franklin D’Olier, Vice Chairmen Paul H. Nitze and Henry C. Alexander, Directors Harry L. Bowman, J. Kenneth Galbraith, Rensis Likert, Frank A. McNamee, Jr., Fred Searls, Jr., Monroe E. Spaght, Dr. Louis R. Thompson, and Theodore P. Wright, and Secretary Walter Wilds.</p>
    
    <p>In order to complete the report, the survey required evidence from 300 civilians, 350 officers, and 500 enlisted men. The military personnel recruited for the study comprised of 60% Army and 40% Navy, both of which supplied and assisted the survey with people, resources, transportation, as well as other information and intelligence. </p>
    
    <h2> Comparing European and Pacific War Reports </h2>
    
    <p>Because the air warfare reports for the European War obviously did not include the effects of the atomic bomb, these two reports (European and Pacific) are completely different. There are certain (often vague) objectives addressed in the “first” report, the European War report summary, that are referenced in the Pacific War summary report, the second of the two. President Truman ordered the founding of the board for the Pacific War survey primarily to assess the effects of the atomic bombs on Hiroshima and Nagasaki. While both consider other aspects and forms of aerial warfare, such as raids and geographic calculations of destruction/casualties in correlation to local hospital and transportation locations, the reports still detach from one another because the incentives to create them differ very much despite the mutual focus on WWII military strategy and efficacy by the U.S.</p>
    
    <p> An academic article titled, “The Evolution of U.S. Strategic Bombing of Urban Areas”, details the changes and differences between European and Japanese American air warfare throughout WWII. Often in reference to the American Air Force (AAF), Conrad C. Crane, a military academic who focuses on strategic warfare, complicates and analyzes many ways the U.S. validated their decisions with both firebombs and even the atomic bomb. He explains that a predisposing willingness to kill civilians before warfare begins can lead to indiscrimination between casualties. Crane states, “The decision to firebomb, like that to drop the atomic bomb, may have been made on the assumption that using everything available would lead to eventual victory” (Crane, 16). Military necessity becomes a central term and question throughout the article while considering the shifts between strategies in Europe and Japan throughout the 1940s. </p>
    
    
    <h2>“The Effects of the Atomic Bombs” - Survey Report Section</h2>
    
    <p>Although the incentives to conduct the Pacific War survey rested on foundations of nuclear warfare and the atomic bombs, only six pages of the report summary are dedicated to the effects of the atomic bombs. This section introduces the bomb with a series of questions to follow, the most obvious question of military effectiveness of the bomb already being answered by mass destruction. Very bluntly, the chapter states: “One hundred thousand people were killed, 6 square miles or over 50 percent of the built-up areas of the two cities were destroyed” (U.S. Gov’t, 96). Because of the apparently obvious answers of the bombs’ capabilities, the survey focused most of its attention to questions of the physical, economic, and morale effects of the use of atomic weapons in the two cities. </p>
    
    <p>The section continues on to list off the similarities and consistencies between the many eyewitness accounts considered in the survey. Once this is skimmed over briefly, the section spends most of its pages on the details of the physical process of human annihilation by the radiation of the atomic bombs. After these details, a statement follows that would later be proven untrue by the Lucky Dragon in 1954. </p>
    
    <p>The above description mentions all the categories of the destructive action by the atomic-bomb explosions at Hiroshima and Nagasaki . There were no other types of action. Nothing was vaporized or disintegrated; vegetation is growing again immediately under the center of the explosions; there are no indications that radio-activity continued after the explosion to a sufficient degree to harm human beings (U.S. Gov’t, 99). </p>
    
    <p>The U.S. government at this time was likely aware of the longer-term effects of radioactive fallout via air and water wind drift from Hiroshima and Nagasaki. This section of the report summary exemplifies the U.S. government’s willingness to neglect a realistic assessment of the damage caused by nuclear warfare in order to continue the production and testing of these technologies. </p>
    
    <h2>  Civilian Surveys and International Connections: </h2>

    <p>Kaleria Palchikoff Drago (Civilian Interview Conducted for Survey) and brother Nikolay Palchikoff (U.S. Army intelligence member during Pacific War) </p> 
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/L8Ku7tawAPk"></iframe>
    
    (Video: "US Strategic Bombing Survey of Hiroshima Aftermath." Youtube. May 5, 2014. Accessed June 4, 2017. https://www.youtube.com/watch?v=L8Ku7tawAPk.)
    
    <p>Kaleria Palchikoff Drago lived in Hiroshima at the time of the bomb. As a Russian-born, Japanese citizen, she was able to conduct an interview in English for the purposes of the survey. Kaleria’s family lived further from the epicentre location of the bombing and so survived. In the interview, Palchikoff explains her series of events as her family visited a military hospital and assisted with critically injured and dying patients. The interview includes gruesome details of the physical horrors of bomb victims, and the devastated city surrounding them. Because Kaleria lived in Japan but was not ethnically Japanese, her interview found consistencies with report intentions to generalize about the Japanese. </p>
    
    <p>Interestingly, Kaleria’s brother Nikolay Palchikoff moved to the United States before WWII to attend school, and enlisted in the U.S. Army after Pearl Harbor. Nikolay was age 16 when he moved to the U.S., age 18 during his enlistment after Pearl Harbor, and age 21 when he returned to Hiroshima. He traveled from his station in the Philippines to Japan for the Army in order to ensure that the Japanese correctly upheld the conditions of surrender. Nikolay also witnessed severe brutality and complete destruction of Hiroshima in the land and the people of the city. He vowed to never return to Japan again after this visit, and remained in the Army as a nationalistic believer in the American justification of the bombing due to new and reports such as the USSBS first published in 1946. </p>
    
    <p>After Nikolay returned to the United States with his family, he remained in the U.S. Army. It was not until years later that the Army reserves called him to attend an emergency drill. When he realized that the drill only served to further justify nuclear warfare, rather than actually prepare soldiers and citizens from the complete destruction he witnessed in Hiroshima before, he quit the army (Palchikoff, 2). This personal reevaluation of American propaganda and censorship brought Palchikoff to a state where he felt a sense of agency to bring this perspective to international levels. After vowing never to return to Japan in 1945, Palchikoff returned twice, and the second time in 1995 on the 50th anniversary of the bomb. He shared his stories with several Japanese citizens as he walked from Kobe to Hiroshima, and he also spoke at a conference during his visit where he apologized for his actions (Ibid.). </p>
    
    <p>Even when there are civilians such as Kaleria Palchikoff Drago who seem like a perfect palette to reinforce the objectives that the U.S. government wanted to portray in the USSBS, when one examines circumstances with a closer lens, the peripheral details become obvious. Her brother Nikolay’s involvement in WWII and eventual rejection of U.S. propaganda and atomic bomb justification reveals a very different narrative that the U.S. government actively avoided during the process of the survey report.</p>
    
    <h2>Impacts on U.S. Postwar Perspectives on the Use of Atomic Bombs </h2>
    
    <p>Federal government information and reports strongly impact U.S. citizen postwar perspectives in the 20 years following the end of the war and use of atomic weapons. Following the end of WWII, the government continued to produce and test atomic weapons in competition with the USSR. While citizens are an obvious and primary audience targeted by these reports, they bring forth an even stronger influence in military spheres and segments. Many soldiers stationed throughout Europe and the Pacific during the war witnessed questionable violence, especially those committed on civilian populations. After the dropping of both atomic bombs and subsequent Japanese surrender, the survey and report functioned to justify and continue the production of nuclear warfare technologies. </p>
    
    <p> An important concluding argument in the report, titled “Strength as a force for peace”, confidently demands that the United States maintain military strength and security (intelligence) to prevent any more war. Clearly, this argument could not be sustained in our contemporary political climate with various ongoing global conflicts with U.S. involvement. The conclusion argues in this section that, “The Japanese would never have attacked Pearl Harbor had they not correctly assessed the weakness of our defenses in the Pacific and had they not incorrectly assessed the fighting determination of the United States when attacked” (U.S. Gov’t, 119-120). While the conclusion argues that this is, “by no mean intended as a recommendation for a race in arms with other nations”, it is just that (ibid.). The summary of the report constantly inserts these justifications that point away from later Cold War developments, even though this is the obvious narrative following WWII and further nuclear weapon developments. This notion of modern imperialism following the war is very important to analyze under the lense of the surveys and reports by the U.S. in Japan immediately before and after the atomic atrocities committed to Hiroshima and Nagasaki.</p>
  </div>
)

export const daphneData = [
  {
    color: '#5ab3b4',
    content: TitleSlide,
    overlay: TitleOverlay
  }
]
