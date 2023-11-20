import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";


function App() {
  const { loading} = useContext(UserContext)
  return (
    <div>
      <div>{loading ? <p>Loading...</p> : <RoutesMain />}</div>
      <GlobalStyle />
      <ResetStyle />
    </div>
  );
}

export default App;
