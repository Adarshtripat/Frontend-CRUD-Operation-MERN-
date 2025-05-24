import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    students : [],
    selectedStudent : {},
    index: -1,       //-1 matlab new record or uske alaba jo hoga vo existing record hy  //update karne par aap ke form ko kayse pata chale ga ki ye form ko add karna hy ya update karna hy 
    loginStatus: false,
    navShow:"home"  

}
const studentSlice = createSlice({
    name: 'StudentSlice',
    initialState,
    //inko data store se mile ga
    reducers:{
          addStudent:(state,action)=>{
            console.log(action);
            
            if(state.index==-1){
                state.students = [...state.students,action.payload]
            }else{
                state.students.splice(state.index,1,action.payload);
                state.index = -1;
            }
            console.log(state.students);
            
          },
         loginStudent:(state,action)=>{
            // console.log(action);
            // console.log(state.students.length)
            const res = state.students.filter((stud)=>{
                return stud.email==action.payload.email && stud.password == action.payload.password     //return ho ke ye res me jaye ga
            })
            if(res.length!=0){
                state.loginStatus = true;
                state.navShow = "login";  //login likhne se aghar hum login kare to hamara navbar change ho jana chaheye
            }else{
                state.loginStatus=false;
            }
         },
         updateStudent:(state,action)=>{
            console.log(action);
            
         state.selectedStudent = action.payload.stud;
          state.index =  action.payload.index;
         },
         deleteStudent:(state,action)=>{
            state.students.splice(action.payload,1)
         },
         logoutStudent:(state)=>{
            state.loginStatus = false;
            state.navShow = "Home";
         }
    }
});
//action object uper ke sare function ko hold karta hy
        
export const {addStudent,loginStudent,updateStudent,deleteStudent,logoutStudent} = studentSlice.actions;
export default studentSlice.reducer;
