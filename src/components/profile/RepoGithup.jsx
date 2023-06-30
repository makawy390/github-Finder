import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import  {Grid } from '@mui/material' 
const RepoGithup = () => {
    const reposProfile = useSelector(state => state.username.username);
    const [repo , setRepo] = useState([]);
    const funSearchUsernameRepo = async ()=>{
        const {data} = await axios.get(`https://api.github.com/users/${reposProfile}/repos`);
        return setRepo(data) 
    }
    useEffect(()=>{
        funSearchUsernameRepo();
    },[reposProfile]);
    const fliterationRepo =  repo.map(({clone_url , id , name})=> (
        <Grid item xs="auto" key={id}>
          
                    <li className='list'> <a href={clone_url} target='_blank'>{name} </a></li>
        </Grid>
    ))
  return (
    <>

                    <Grid container spacing={3}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                {fliterationRepo}
                </Grid>
    </>
  )
}

export default RepoGithup;