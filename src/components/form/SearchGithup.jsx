import {useState } from 'react';
import './search.css'
import { useDispatch} from 'react-redux'
import  {  TextField  } from '@mui/material' 
import { WriteUsername } from '../../rtk/reducer/sliceUsername';
import Profile from '../profile/Profile';
import RepoGithup from '../profile/RepoGithup';
import SimpleProfile from '../profile/SimpleProfile';
const SearchGithup = () => {
    const [value , setValue] = useState("")
    const dispatch = useDispatch()
    const handelUesr = (e)=>{
        setValue(e.target.value)        
    }
    const clickHandeler = ()=>{
        dispatch(WriteUsername(value))
        setValue('')
    }
    
  return (
        
    <div className="row">
            <div className="col-sm-12">
              <div className="row">
<div className="col-md-10">
<TextField fullWidth color='warning' id="standard-basic" label="Search Users" variant="outlined" value={value} onChange={(e)=> handelUesr(e)} />

</div>
<div className="col-md-2 ">
<button className='btns mt' onClick={()=> clickHandeler()}>search</button>
</div>
              </div>
          </div>        
           <div className='col-sm-12'>
{/* <Profile /> */}
<SimpleProfile/>
            </div>
            <div className='col-sm-12'>

                {/* <RepoGithup/> */}
                
                
            </div>
            </div>
        
  )
}

export default SearchGithup