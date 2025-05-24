import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"; //useSelector store se data le ke ane ka kam karta hy
import { Link } from "react-router-dom";
import { logoutStudent } from "../Store/StudentSlice"; 
function Navbar(){
    const [menuItem,setManuItem]=useState();
    const dispatch = useDispatch();
    const navShow = useSelector(state=>state.student.navShow);
    useEffect(()=>{  //jab jab hum apne navbar ko change karbana chahete hy tub tub hum ise chalana chahete hy
        if(navShow=="home"){
            setManuItem(<div style={{backgroundColor:"black",color:"white",padding:"10px",fontSize:"20px"}}>
            <Link style={{color:'white',textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link style={{color:'white',textDecoration:"none"}} to='/loginStudent'>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link style={{color:'white',textDecoration:"none"}} to='/addStudent'>Add Student</Link>
            </div>);
        }else if(navShow=="login"){
            setManuItem(<div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
            <Link style={{color:'white',textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link style={{color:'white',textDecoration:"none"}} to='/viewStudents'>View Students</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link style={{color:'white',textDecoration:"none"}} to='/logout'onClick={dispatch(logoutStudent())}>logout</Link>
            </div>);
           
        }

    },[navShow]);
    return(<>
    {menuItem}
    </>);
}
export default Navbar;