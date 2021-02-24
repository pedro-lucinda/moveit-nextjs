//aproveitar estrutura previa
//component fica em torno de toda aplicacao
//tudo que for repetir em todas paginas fica no app

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
