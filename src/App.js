import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginSignup from "./LoginSignup";
import Home from "./Home";

const App = () =>{
    return(
        <Routes>
        <Route path="/" element={<LoginSignup/>} />
        <Route path="home" element={<Home/>} />
        </Routes> 
    )
}
export default App;