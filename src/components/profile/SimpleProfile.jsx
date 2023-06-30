import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const SimpleProfile = () => {
    const userProfile = useSelector(state => state.username.username);
    const [userProfileSearch , setUserProfileSearch] = useState([])
    const funUserProfile = async ()=>{
        const {data} = await axios.get(`https://api.github.com/users/${userProfile}`);
        return setUserProfileSearch(data) 
    }
    useEffect(()=>{
        funUserProfile()
    },[userProfile]);

  return (
    <>
    {userProfileSearch.length === 0? "" : 
        <div className="row">
        <div className="col-md-3">
    <div class="card mt-4">
  <img src={userProfileSearch.avatar_url} className='img'  loading='lazy' />
  <div class="card-body">
    <h5 class="card-title"> {userProfileSearch.name}</h5>
    <NavLink to={`/user/${userProfile}`} className='btn btn-primary btn-sm btn-more'>More</NavLink>  

  </div>
</div>
        </div>
    </div> 
    }
    </>
   
  )
}

export default SimpleProfile