import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { activate } from '../../http';
import {setUser} from '../../actions/IRActions';
import { useDispatch, useSelector } from 'react-redux';
import {setName,setPFP,setUsername} from '../../actions/profileActions';
import { useHistory } from 'react-router-dom';

export const StepRegister = ({onNext}) => {
  let history = useHistory();
  const pfp=useSelector((state)=> state.Profile.PFP);
  const name=useSelector((state)=> state.Profile.Name);
  const username=useSelector((state)=> state.Profile.Username);
  const dispatch=useDispatch(); 
  useEffect(() => {
    activate({pfp,name,username})
    .then((res)=>{
      dispatch(setUser(res.data.user));
      dispatch(setName(res.data.profile.name));
      dispatch(setUsername(res.data.profile.username));
      dispatch(setPFP(res.data.profile.pfp));
      console.log(res);
      history.push('/rooms');
    })
    .catch(e => console.error(e));
  }, []);
  
  return <>
    <Box sx={{ display: 'flex',alignItems:'center',height:'100%',paddingBottom:'6em' }}>
      <CircularProgress />
    <Typography variant='h6' align='center' sx={{marginLeft:'1em'}}>Creating Your Profile</Typography>
    </Box>
  </>;
};
