import { useState } from "react";
import '../style.css'
import { useDispatch } from "react-redux";
import { addStudent } from "../Store/StudentSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { requestedURL } from "../Utils"; //requestedURL humne Utils.js ke under bnaya hy

function AddStudent(){
    const [student,setStudent] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = (event)=>{
      const {name,value} = event.target;
      setStudent({
        ...student,
        [name]:value
      });
    }
    const handleSubmit = async(event)=>{ 
      //create to api calling statement 
try{
  event.preventDefault();
  //requestedURL matlab ki aap ko ies url me data ko vejna hy
  const result = await axios.post(requestedURL+'/addStudent',student); //student me jo data hy use pass kare ge
console.log("Result:",result);
if(result.status ==201)
navigate('/loginStudent');

}catch(error){
  console.log("Arrer occurd in AddStudent.js file :" , error);
  
}
    }
    return(<>
    <center>
    <h1>Add Student From</h1>
    <form action='' onSubmit={handleSubmit} method="post" >
    <input
    type="text"
    name="username"
    placeholder="Enter UserName"
    onChange={getData}
    /><br/>
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
    type="text"
    name="address"
    placeholder="Enter Address"
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
export default AddStudent;