import {useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import  { Typography  } from '@mui/material' 
import {MdLocationOn} from 'react-icons/md'
import axios from 'axios';
import{useNavigate } from 'react-router-dom'
import RepoGithup from './RepoGithup';
const Profile = () => {
  const navigate = useNavigate()
    const userProfile = useSelector(state => state.username.username);
    const [userProfileSearch , setUserProfileSearch] = useState([])
    const funUserProfile = async ()=>{
        const {data} = await axios.get(`https://api.github.com/users/${userProfile}`);
        return setUserProfileSearch(data) 
    }
    useEffect(()=>{
        funUserProfile()
    },[userProfile]);
    console.log(userProfileSearch);
    const funUserProfileStart = ()=>(
        userProfileSearch.length == 0? '' :  
        <>
        <div className="row  line align-items-center">
          <div className="col-md-4">
          <img src={userProfileSearch.avatar_url} className='img'  loading='lazy' />
            <Typography gutterBottom variant="h5" component="div">
              {userProfileSearch.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <MdLocationOn />  {userProfileSearch.location}
            </Typography>
          </div>
          <div className="col-md-6">
            <h4>Bio</h4>
            <Typography variant="body2" color="text.secondary">
                {userProfileSearch.bio === undefined ?  'Lorem ipsum dolor sit amet consectetur adipisicing elit........................................' : userProfileSearch.bio}
            </Typography>
            <a href={userProfileSearch.html_url} target="_blank" rel="noopener noreferrer">Visit Github Profile</a><br />
            <span>Username :</span>{userProfileSearch.login}
          </div>
        </div>

        <ul className="d-flex listed-unstyle justify-content-md
        -center mt-md-4">
          <li className='btn btn-danger btn-sm'>Followers : {userProfileSearch.followers}</li>
          <li className='btn btn-success btn-sm'>Following : {userProfileSearch.following}</li>
          <li className='btn btn-primary btn-sm'>Public Repos : {userProfileSearch.public_repos}</li>
          <li className='btn btn-secondary btn-sm'>Public Gists : {userProfileSearch.public_gists} </li>
        </ul>
            <RepoGithup />
            </>
    )
  return (
    <>
    <button className='btn btn-danger btn-sm' onClick={()=> navigate('/')}>Back To Search</button>
    {funUserProfileStart()}
    </>
  )
}

export default Profile