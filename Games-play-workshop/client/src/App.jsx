import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/authContext"
import Path from "./utils/pathNames"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import CreateGame from "./components/create-game/CreateGame"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/details/GameDetails"
import Logout from "./components/logout/Logout"
import EditGame from "./components/edit/EditGame"


function App() {
    return (
        <div id="box">
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/games/create" element={<CreateGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/game/:gameId/details" element={<GameDetails />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path={Path.Edit} element={<EditGame />} />
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
