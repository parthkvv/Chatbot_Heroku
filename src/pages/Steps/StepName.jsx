import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../actions/profileActions';
export const StepName = ({onNext}) => {
  const [name, setname] = useState("");
  const dispatch=useDispatch();
  const handleChange=(e)=>{
      setname(e.target.value);
  }
  const onSubmit=()=>{
    dispatch(setName(name));
    onNext();
  }
  return <>
    <Typography variant='h6' align='center'>🤓What's your fullname?</Typography>
    <TextField variant="outlined" className='TF' onInput={handleChange} placeholder='Your Name'/>
    <Typography variant='string' align='center'>People use real names<br/> at codershouse :) </Typography>
    <Button variant='filled' id='button' onClick={onSubmit}>Next <ArrowRightAltIcon/></Button>
  </>;
};
