import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./components/pages/Home"
import { Photos } from "./components/photos"
import { Psd } from "./components/psd"
import { Vector } from "./components/vector"
import { Videos } from "./components/videos"
export function App(){
    return (
        //Rotas
        <Router>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/photos" element = {<Photos/>}/>
            <Route path="/psd" element = {<Psd/>}/>
            <Route path="/vector" element = {<Vector/>}/>
            <Route path="/videos" element = {<Videos/>}/>
            
        </Routes>
        
        </Router>
    )
}
//npm i react-router-dom