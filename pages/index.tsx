
import ReactPageScroller from 'react-page-scroller';

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
        <ReactPageScroller>
          <Landing />
          <Proposition />
          <Values />
          <Partnerships />
        </ReactPageScroller>

      </main>
    </>

  )
}
