import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routers";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
