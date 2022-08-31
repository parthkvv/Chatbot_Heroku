import {Typography } from '@mui/material';
import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
export const StepError = ({onNext}) => {
  return <>
    <Typography variant='h6' align='center'>🙉Something Went Wrong</Typography>
    <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>
      <ErrorIcon/>
    </Box>
    <Link to="/"><Typography variant="string" sx={{color:'#0077FF'}}>Back to Homepage?</Typography></Link>
  </>;
};
