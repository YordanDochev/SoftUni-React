import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import CreateGame from "./components/create-game/CreateGame"
import Login from "./components/login/Login"
import Register from "./components/register/Register"

import {Routes,Route} from "react-router-dom"


function App() {

    return (
        <div id="box">
            <Header/>
            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/catalog" element={<Catalog/>}/>
                <Route path ="/games/create" element={<CreateGame/>}/>
                <Route path ="/login" element={<Login/>}/>
                <Route path ="/register" element={<Register/>}/>
            </Routes>
            
        </div>
    )
}

export default App
