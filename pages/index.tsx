
import ReactPageScroller from 'react-page-scroller';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

// Components
import Head from "../Components/Head";
import Landing from "../Components/Landing";
import Proposition from "../Components/Proposition";
import Values from "../Components/Values";
import Partnerships from "../Components/Partnerships";

// Styles
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        {/* <ScrollContainer>
          <ScrollPage page={0}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <MediumText>Let't me show you scroll animation 😀</MediumText>
            </Animator>
          </ScrollPage>
          <ScrollContainer> */}
        {/* <ReactPageScroller> */}
        <Landing />
        <Proposition />
        <Values />
        <Partnerships />
        {/* </ReactPageScroller> */}

      </main>
    </>

  )
}
