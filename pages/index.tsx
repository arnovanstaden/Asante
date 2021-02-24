
import ReactPageScroller from 'react-page-scroller';

// Components
import Head from "../Components/Head";
import Landing from "../Components/Landing";
import ValueProposition from "../Components/ValueProposition";



// Styles
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <ReactPageScroller>
          <Landing />
          <ValueProposition />
        </ReactPageScroller>

      </main>
    </>

  )
}
