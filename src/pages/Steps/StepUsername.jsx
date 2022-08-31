import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useDispatch } from 'react-redux';
import { setUsername } from '../../actions/profileActions';
export const StepUsername = ({onNext}) => {
  const [uname, setuname] = useState("");
  const dispatch=useDispatch();
  const handleChange=(e)=>{
      setuname(e.target.value);
  }
  const onSubmit=()=>{
    dispatch(setUsername(uname));
    onNext();
  }
  return <>
    <Typography variant='h6' align='center'>😎Pick a username</Typography>
    <TextField 
    variant="outlined" className='TF'onInput={handleChange} 
    InputProps={{
      startAdornment: <InputAdornment position="start">@</InputAdornment>,
    }}
    placeholder='Username'/>
    <Typography variant='string' align='center'>Username can be used for the login</Typography>
    <Button variant='filled' id='button' onClick={onSubmit}>Next <ArrowRightAltIcon/></Button>
  </>;
};
