import { SpeechProvider } from "@speechly/react-client";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./context/Context";
import "./index.css";

ReactDOM.render(
  <Provider>
    <SpeechProvider appId={process.env.REACT_APP_SP_ID}>
      <App />
    </SpeechProvider>
  </Provider>,
  document.getElementById("root")
);
