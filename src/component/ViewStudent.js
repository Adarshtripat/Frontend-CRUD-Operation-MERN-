import { useDispatch, useSelector } from "react-redux"; //useSelector se data store se get kar lege
import { deleteStudent, updateStudent } from "../Store/StudentSlice";
import { useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
import { requestedURL } from "../Utils.js";
import axios from "axios";
function ViewStudent(){
    // const students = useSelector(state=> state.student.students);
    const [students,setStudents] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate();
     useEffect(()=>{
       async function fetchStudent(){
        try{
           const students = await axios.get(requestedURL+'/viewStudents')// /viewStudents or backend me studentrouter ka route same hone chaheye
           console.log("Student:",students.data.studentList);
           
           setStudents(students.data.studentList)
        }catch(error){
            console.log("Error occored in viewStudent.js file",error);
            
        }
       }
       fetchStudent();
     },[students]);
    //update part
    const handleUpdate = (obj)=>{
        dispatch(updateStudent(obj));
        navigate('/updateStudentFrom')
    }
    //delete part
    const deleteStudent = async(email)=>{
        try{
          const res =  await axios.post(requestedURL+'/delete',{email:email})
            console.log("res in UI", res);
            if(res.status==201)
                //delete hone ke bad vo relode karne ke leye
                //window.location.reload();
                 navigate('/viewStudents');
            
        }catch(error){
            console.log("error in delete part:",error);
            
        }
    }
    return(<>
            <h1>Student List</h1>
            <table border={'1'} cellSpacing={'0'} cellPadding={'10'}>
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th colSpan={'2'}>Action</th>
                </tr>
                </thead>
                
               {
                 students.map((stud,index)=>{
                        return (<tbody>
                        <tr>
                            <td>{index+1}</td>
                            <td>{stud.username}</td> 
                            <td>{stud.email}</td>
                            <td>{stud.address}</td>
                            <td><button onClick = {()=>{handleUpdate({stud,index})}}>Update</button></td>
                            {/* <td><button onClick={()=>{dispatch(deleteStudent(index))}} >Delete</button></td> */}
                            <td><button onClick={()=>{deleteStudent(stud.email)}} >Delete</button></td>

                         </tr></tbody>)
                         
                    })
                    
                }
            </table>
    </>)
}
export default ViewStudent;
