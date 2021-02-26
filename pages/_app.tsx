import '../styles/global.scss';
import "typeface-nunito";
import "typeface-open-sans";
import "../assets/icons/style.css";
import { useEffect, useState } from "react";

import Loader from "../Components/Loader";


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  });


  return (
    <>
      <Component {...pageProps} />
      {loading ? <Loader /> : null}
    </>
  )
}

export default MyApp
