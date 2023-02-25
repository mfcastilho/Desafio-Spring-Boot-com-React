import { BrowserRouter, Routes,Route} from "react-router-dom";
import AuthAccountPage from "./authAccountPage/AuthAccountPage";
import AuthPasswordPage from "./authPasswordPage/AuthPasswordPage";
import UserPanel from "./userPanel/UserPanel";

const RoutesApp = ()=>(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthAccountPage/>}/>
      <Route path="/password" element={<AuthPasswordPage/>}/>
      <Route path="/userPanel" element={<UserPanel/>}/>
    </Routes>
  </BrowserRouter>
)
  


export default RoutesApp;