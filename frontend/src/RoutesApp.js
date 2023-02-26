import { BrowserRouter, Routes,Route} from "react-router-dom";
import AuthAccountPage from "./authAccountPage/AuthAccountPage";
import AuthPasswordPage from "./authPasswordPage/AuthPasswordPage";
import UserPanel from "./userPanel/UserPanel";
import DepositPage from "./depositPage/DepositPage";
import WithdrawPage from "./withdrawPage/WithdrawPage";
import TransferPage from "./transferPage/TransferPage";
import PixTransferPage from "./pixTransferPage/PixTransferPage";
import TedTransferPage from "./tedTransferPage/TedTransferPage";
import DocTransferPage from "./docTransferPage/DocTransferPage";


const RoutesApp = ()=>(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthAccountPage/>}/>
      <Route path="/password" element={<AuthPasswordPage/>}/>
      <Route path="/userPanel" element={<UserPanel/>}/>
      <Route path="/userPanel/depositos" element={<DepositPage/>} />
      <Route path="/userPanel/saques" element={<WithdrawPage/>} />
      <Route path="/userPanel/transferencias" element={<TransferPage/>} />
      <Route path="/userPanel/transferencias/pix" element={<PixTransferPage/>} />
      <Route path="/userPanel/transferencias/ted" element={<TedTransferPage/>} />
      <Route path="/userPanel/transferencias/doc" element={<DocTransferPage/>} />
    </Routes>
  </BrowserRouter>
)
  


export default RoutesApp;