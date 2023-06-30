import {configureStore} from '@reduxjs/toolkit';
import sliceUsername from '../reducer/sliceUsername';

 const store =configureStore ({
    reducer  : {
        username : sliceUsername
    }
})

export default store;