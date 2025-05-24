import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";    //data le ke ana hy update karne ke leye useSeector ka use kare ge
import { addStudent } from "../Store/StudentSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { requestedURL } from "../Utils";

function UpdateStudentFrom(){
    const [student,setStudent] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const studentData = useSelector(state=>state.student.selectedStudent)

    //useEffect ke help se form me purana data set karba diya ki aghar vo nya data nhe ve lekhata to vo purana data asatis dede
    useEffect(()=>{     
      setStudent(studentData)
    },[studentData])
    
    const getData = (event)=>{
        const {name,value} = event.target;
        setStudent({
          ...student,
          [name]:value
        });
      }
     const handleUpdate =async(event)=>{
        event.preventDefault();   //ise likhne se submit karne par load nhe hoga page 
      const result = await axios.post(requestedURL+'/updateStudent',student)
      console.log("Result:",result);  
        // dispatch(addStudent(student)); 
        if(result.status==201)
        navigate('/viewStudents')  
     }
return(<>
<center>
    <h1>Update Student From</h1>
    <form action=''onSubmit={handleUpdate}>
    <input
    type="text"
    name="username"
    defaultValue={studentData.username}
    placeholder="Enter UserName"
    onChange={getData}
    /><br/>
    <input
    type="email"
    name="email"
    readOnly
    defaultValue={studentData.email}
    placeholder="Enter Email"
    onChange={getData}
    /><br/>
    <input
    type="text"
    name="password"
    defaultValue={studentData.password}
    placeholder="Enter Password"
    onChange={getData}
    /><br/>
    <input
    type="text"
    name="address"
    defaultValue={studentData.address}
    placeholder="Enter Address"
    onChange={getData}
    /><br/>
    <input
    type="submit"
    value={"Update"}
    /><br/>
    </form>
    </center>
</>)
}
export default UpdateStudentFrom;