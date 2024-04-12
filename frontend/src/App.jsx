import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Report from "./pages/Report"
import Crowdfunding from "./pages/Crowdfunding"
import NavBar from "./components/navbar/NavBar"
import ProtectedRoute from './components/ProtectedRoute';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<Signin />} />
      <Route path='/sign-up' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/crowdfunding' element={<Crowdfunding />} />
      <Route path='/report' element={<Report />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
