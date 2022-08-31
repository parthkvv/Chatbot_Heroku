import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
export const StepVerification = ({onNext}) => {
  let isAuth=useSelector((state)=> state.iR.Auth);
  setTimeout(()=>{
    if(!isAuth)
    onNext();},2100);
  return <>
    <Box sx={{ display: 'flex',alignItems:'center',height:'100%',paddingBottom:'6em' }}>
      <CircularProgress />
    <Typography variant='h6' align='center'>Verification In Progress</Typography>
    </Box>
  </>;
};
