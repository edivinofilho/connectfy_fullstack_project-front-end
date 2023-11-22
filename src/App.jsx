import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const { loading} = useContext(UserContext)
  return (
    <div>
      <div>{loading ? <p>Loading...</p> : <RoutesMain />}</div>
      <GlobalStyle />
      <ResetStyle />
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
}

export default App;
