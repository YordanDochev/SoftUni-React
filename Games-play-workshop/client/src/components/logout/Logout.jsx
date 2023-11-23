import { useContext, useEffect } from "react";

import * as authService from '../../services/authService'
import { useNavigate } from "react-router-dom";
import Path from "../../utils/pathNames";
import AuthContext from "../../contexts/authContext";

export default function Logout(){
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext)
    useEffect(()=>{
        authService.logout()
            .then(()=> {

                logoutHandler()
                navigate(Path.Home)
            })
            .catch(()=> navigate(Path.Home))
    },[])

    return null;
}