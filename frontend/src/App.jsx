import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/error/Error";
import Wallet from "./CrowdFunding/wallet/Wallet";
import Fund from "./CrowdFunding/fund/Fund";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Report from "./pages/Report";
import Crowdfunding from "./pages/Crowdfunding";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ConnectWallet from "./pages/ConnectWallet";
import JoinOrganization from "./pages/JoinOrganization";
import ChatUi from "./pages/chat/ChatUi"
import Location from "./components/location/Location";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/chat" element={<ChatUi />} />
          <Route path="/joinorg" element={<JoinOrganization />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/location" element={<Location/>}/>
          <Route path="/crowdfunding" element={<Crowdfunding />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<Error />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
