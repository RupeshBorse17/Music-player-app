import React,{useState} from 'react'
import axios from "axios";
import "../../css/auth/ResetPassword.css";
import {useNavigate,useParams} from "react-router-dom";
import Input from "../Common/input";






const ResetPassword = () => {


    const {token} = useParams();
    const navigate = useNavigate();
    const[password,setPassword] = useState("");
    const[status,setstatus] = useState("");
    const [message,setmessage] = useState("");
    const [loading,setloading] = useState(false);


    const handleReset = async()=>{
        if(!password || password.length < 6){
            setstatus("erro");
            setmessage("password must be atleast 6 Characters");
            return;
        }

        try{
            setloading(true);
            setstatus("info");
            setmessage("Reseting Password");

            await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/reset-password/${token}`,
                {password},
            );

            setstatus("success");
            setmessage("password reset successfully! redirecting...");
            setTimeout(()=>navigate("/"),2000);
        }
        catch(error){

            setstatus("error");
            setmessage(error?.response?.data?.message || "Reset failed.Try again");
        }
        finally{
            setloading(false);
        }
    }





  return (




    <div className="reset-wrapper">
        <h3 className="reset-title"></h3>      
        <p className="reset-subtitle"></p>  

        <div className="reset-form">
            <Input
                label="New Password"
                type="password"
                placeholder="Enter new Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            
            />

            {status === "error" && <div className="reset-error">{message}</div>}
            
            {status === "success" && <div className="reset-success">{message}</div>}

            <button className="reset-submit-btn" onClick={handleReset} disabled={loading}><span>{loading ? "Resetting..." : "Reset Password"}</span></button>

        </div>
    </div>
  )
}

export default ResetPassword
