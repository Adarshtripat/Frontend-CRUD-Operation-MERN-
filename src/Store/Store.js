import {configureStore} from '@reduxjs/toolkit'
import StudentSlice from './StudentSlice.js';
export default configureStore({
    reducer:{
        student: StudentSlice
    }
})