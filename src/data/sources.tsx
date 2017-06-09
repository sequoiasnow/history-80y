declare function require(name:string): string

import * as React from 'react'
import { Page } from '../Page'
import { Grid, Col, Row } from '../Grid'
import { TextBox } from '../TextBox'
import { Background } from '../Background'
import { ReadMore } from '../ReadMore'

export const sourceSlide = {
  color: '#8c8c8c',
  content: (props: { onReadMore?: () => void }) => (
    <Grid>
      <Col width={2}>
        <Row height={2}>
          <TextBox size={1} subTitle="- Robert Oppenheimer">
            <i>The atomic bomb made the prospect of future war unendurable. It has led us up those last few steps to the mountain pass; and beyond there is a different country. </i>
          </TextBox>
        </Row>
        <Row height={2}>
          <TextBox size={1} subTitle="- Harry Truman">
            <i>The atom bomb was no 'great decision.' It was merely another powerful weapon in the arsenal of righteousness. </i>
          </TextBox>
        </Row>
      </Col>
      <Col width={2}>
        <Row height={2}>
          <TextBox size={1} subTitle="- Albert Einstein">
            <i>The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one. </i>
          </TextBox>
        </Row>
        <Row height={2}>
          <TextBox>
            <ReadMore onClick={props.onReadMore} text="Sources" />
          </TextBox>
        </Row>
      </Col>
    </Grid>
  ),
  overlay: () => (
    <div>
      <p>
        "Manhattan Project." The Manhattan Project (2010): n. pag. Energy.gov. United States Department of Energy, Jan. 2010. Web.
      </p>
      <p>
        Einstein, Albert. "Einstein Letter." Letter to F. D. Roosevelt. 2 Aug. 1939. MS. N.p.
      </p>
      <p>
        "Oppenheimer's Farewell Speech." Atomic Heritage Foundation. The Atomic Heritage Foundation, n.d. Web. 
      </p>
      <p>Shapiro, Jerome F. Atomic Bomb Cinema: The Apocalyptic Imagination on Film. New York: Routledge, 2002. </p>
      <p>Mackintosh, Paul St John., Maki Sugiyama, and KenzaburoÌ Oe. Nip the Buds, Shoot the Kids. London: Picador, 1996. </p>
      <p> Nakazawa, Keiji. Barefoot Gen. San Francisco, CA: Last Gasp, 2016.</p>
      <p> Mizuki, Shigeru. Onward Towards Our Noble Deaths. Barnes & Noble. Kodansha, n.d. Web. 02 June 2017.</p>
      <p>Maruki, Iri and Toshi. Hiroshima Panels. 1946-1976. Mural. Maruki Gallery for the Hiroshima Panels, Hiki Hills.
      </p>
      <p>
        Southard, Susan. Nagasaki: Life After Nuclear War. Penguin Books. New York. 2016
      </p>
      <p>
        A-bombed effects studied” The Science News-letter. Vol. 49, No. 12 (Mar. 23, 1946). P.179-180
        https://www.jstor.org/stable/pdf/3922593.pdf?refreqid=excelsior%3A1b9db7175b00c02b341409cb76e07d41 May 26, 2017
      </p>
      <p>Atomic Bomb Survivors. Unforgettable Fire. Japan Broadcasting Corporation. 1996</p>
      <p>Christy, Alan, and Alice Yang. "Silences" World War 2 Memoirs. University of California,		 Santa Cruz, Santa Cruz, CA. 5 May 2017. Lecture.</p>
      <p>United States. Military. Air Force. Third Report of the Commanding General of the Army Air		 Forces to the Secretary of War. By Henry Harley Arnold. Baltimore, MD:	</p>
      <p>Long, Doug. "Military Views About Dropping the Atomic Bomb." Colorado.edu.		</p>
      <p>University of Colorado, Boulder., 2010. Web. 05 June 2017.
      </p>
      <p>Fussell, Paul. "Thank God for the Atom Bomb." Canvas.ucsc.edu. Summit Books, 1988, 02		 Apr. 2017. Web. 03 June 2017.</p>
      <p>Wilson, Ward. "The Bomb Didn't Beat Japan, Stalin Did." Foreignpolicy.com. FP Magazine, 		30 May 2013. Web. 05 June 2017.</p>
      <p>Christy, Alan, and Alice Yang. "Bomb Surrender." World War 2 Memoirs. University of			 California, Santa Cruz, Santa Cruz, CA. 3 May 2017. Lecture.</p>
      <p> 
        Crane, Conrad C. “Evolution of U.S. Strategic Bombing of Urban Areas.” The Historian 50, no. 1(1987) 14-39. http://www.jstor.org/stable/24446944.</p>
      
      <p>Palchikoff Drago, Kaleria, and Melissa Block. "Seeing the Horror of Hiroshima." KQED Public Media (audio blog), August 5, 2005. Accessed June 4, 2017. http://www.npr.org/templates/story/story.php?storyId=4787714.</p>
      
      <p>Palchikoff, Nikolay. "The Nuclear August of 1945." The New York Times. August 05, 2001. Accessed June 1, 2017. http://www.nytimes.com/2001/08/06/opinion/the-nuclear-august-of-1945.html.</p>
      
      <p>U.S. Government. “The United States Strategic Bombing Surveys (European War) (Pacific War.)” Internet Archives, Accessed May 29, 2017. http://archive.org/details/unitedstatesstra00cent.</p>
      
      <p>"US Strategic Bombing Survey of Hiroshima Aftermath." Youtube. May 5, 2014. Accessed June 4, 2017. https://www.youtube.com/watch?v=L8Ku7tawAPk.</p>

    </div>
  )
}
