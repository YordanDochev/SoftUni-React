import { Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"

import AuthContext from "./contexts/authContext"
import * as authService from './services/authService'
import Path from "./utils/pathNames"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import CreateGame from "./components/create-game/CreateGame"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/details/GameDetails"





function App() {
    const [auth, setAuth] = useState({});
    const navigate = useNavigate();

    const loginSubmitHanlder = async (values) => {
        const result = await authService.login(values.email, values.password)

        setAuth(result)

        navigate(Path.Home)
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password)
        console.log(result);
        setAuth(result)

        navigate(Path.Home)
    }

    const values = {
        loginSubmitHanlder,
        registerSubmitHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <div id="box">
            <AuthContext.Provider value={values}>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/games/create" element={<CreateGame />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/game/:gameId/details" element={<GameDetails />} />
                </Routes>
            </AuthContext.Provider>
        </div>
    )
}

export default App
