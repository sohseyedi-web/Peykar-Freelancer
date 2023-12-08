import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from './pages/Auth';
import Owner from './pages/Owner';
import FreeLancer from './pages/FreeLancer';
import NotFound from './pages/NotFound';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/join" element={<Auth/>}/>
        <Route path="/owner" element={<Owner/>}/>
        <Route path="/freelancer" element={<FreeLancer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
