import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./pages/page";
import Home from "./pages/Home";
import Background from "./pages/Background";

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/page" element={<Page/>}/>
        <Route path="/background" element={<Background/>}/>
      </Routes>
    </Router>
  )
}