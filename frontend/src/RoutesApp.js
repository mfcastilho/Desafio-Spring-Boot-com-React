import { BrowserRouter, Routes,Route} from "react-router-dom";
import AuthAccountPage from "./authAccountPage/AuthAccountPage";
import AuthPasswordPage from "./authPasswordPage/AuthPasswordPage";
import UserPanel from "./userPanel/UserPanel";
import DepositPage from "./depositPage/DepositPage";
import TransferPage from "./transferPage/TransferPage";

const RoutesApp = ()=>(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthAccountPage/>}/>
      <Route path="/password" element={<AuthPasswordPage/>}/>
      <Route path="/userPanel" element={<UserPanel/>}/>
      <Route path="/userPanel/depositos" element={<DepositPage/>} />
      <Route path="/userPanel/saques" element={<DepositPage/>} />
      <Route path="/userPanel/transferencias" element={<TransferPage/>} />
    </Routes>
  </BrowserRouter>
)
  


export default RoutesApp;