import { useDispatch } from 'react-redux';
import axios from "axios";
import { requestedURL } from "../Utils.js"; //requestedURL humne Utils.js ke under bnaya hy
import '../style.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { loginStudent } from '../Store/StudentSlice';
function Login(){
    const [student,setStudent] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getData = (event)=>{
        const {name,value} = event.target;
        setStudent({
            ...student,
            [name]:value
        })

    }
    const handleSubmit = async(event)=>{ 
        //create to api calling statement 
  try{
    event.preventDefault();
   //  /login or backend me studentrouter.js ka route same hone chaheye
    const result = await axios.post(requestedURL+'/login',student); //student me jo data hy use pass kare ge
  console.log("Result:",result);
  if(result.status ==201)
    navigate("/viewStudents")
// dispatch(loginStudent(student));

  }catch(error){
    console.log("Arrer occurd in login.js file :" , error);
    
  }
      }
return(<>
<center>
<h1>Login From</h1>
<form action="" onSubmit={handleSubmit}> 
<input
    type="email"
    name="email"
    placeholder="Enter Email"
    onChange={getData}
    /><br/>
    <input
    type="password"
    name="password"
    placeholder="Enter Password"
    onChange={getData}
    /><br/>
     <input
    type="submit"
    value={"Submit"}
    /><br/>
    </form>
    </center>
    </>)
}
export default Login;