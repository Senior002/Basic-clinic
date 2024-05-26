import React, { useState } from "react";
import './loginPage.css'
import Doctors from "../../doctor.json"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigator = useNavigate()
    const [user , setUser] = useState({
        login : "",
        parol : ""
    })
    const login = ()=>{
        let result = Doctors.find((item)=> item.parol == user.parol && item.login == user.login )
        if(result){
            localStorage.setItem("user" , result)
            navigator("/home")
        }else{
            alert("login/parol hato")
        }
    }
    const changeHandler = (e) =>{
        setUser({...user , [e.target.name] : e.target.value})
    }
    console.log(login);
    
    return(
        <>
            <div className="logOut">
                <div className="home_login">
                    <div class="form-check form-switch check_log">
                        <h6 className="check_doctor">Doctor</h6>
                        <input class="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" />
                    </div>
                    <h1 className="log">Log in</h1>
                   <input type="text" className="form-control contr" id="" placeholder="Login..." 
                    name="login"
                    value={user.login}
                    onChange={changeHandler}
                    /> <br />
                    <input type="password" className="form-control contr" placeholder="Password..." id="" 
                    name="parol"
                    value={user.parol}
                    onChange={changeHandler}
                    />
                    <button className="btn btn-primary p-3 but" onClick={login}>Bajarildi</button>
                </div>
            </div>
        </>
    )
}

export default Login