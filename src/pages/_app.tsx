//aproveitar estrutura previa
//component fica em torno de toda aplicacao
//tudo que for repetir em todas paginas fica no app
import { ChallengeContextProvider } from "../contexts/ChallengeContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeContextProvider>
        <Component {...pageProps} />;
    </ChallengeContextProvider>
  );
}

export default MyApp;
