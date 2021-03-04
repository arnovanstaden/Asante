
// Components
import Head from "../Components/Head";
import Landing from "../Components/Landing";
import Proposition from "../Components/Proposition";
import Values from "../Components/Values";
import Partnerships from "../Components/Partnerships";
import Quote from "../Components/Quote";
import Approach from "../Components/Approach";
import Offering from "../Components/Offering";
import Contact from "../Components/Contact";

// Styles
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Landing />
        <Proposition />
        <Values />
        <Quote
          index={1}
          text="If you want to go fast, go alone. If you want to go far, go together."
          source="- African Proverb -"
        />
        <Partnerships />
        <Quote
          index={2}
          text="The highest level of charity is that whereby the donor gives the recipient the wherewithal to become self-supporting."
          source="- Maimonides -"
        />
        <Approach />
        <Offering />
        <Quote
          index={3}
          text="Education is the most powerful weapon which you can use to change the world."
          source="- Nelson Mandela -"
        />
        <Contact />
      </main>
    </>

  )
}
