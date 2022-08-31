import { Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box } from '@mui/system';
import {useDispatch, useSelector} from 'react-redux';
import { sendOtp,verifyOtp} from '../../http';
import { setAuth,setUser } from '../../actions/IRActions';
export const StepOtp = ({onNext}) => {
  const sender=useSelector((state)=> state.iR.Sender);
  const isPhone=useSelector((state)=> state.iR.isPhone);
  const ACTION=isPhone?"phone":"email";
  const dispatch=useDispatch();
  const [OTP, setOTP] = useState(null);
  const [Hash, setHash] = useState(null);
  useEffect(()=>{
      // sendOtp({"phone":sender})
      let payload=isPhone?{"phone":sender}:{"email":sender};
      console.log(process.env.REACT_APP_BASE_URL);
      sendOtp(payload)
        .then((res)=> {console.log(res);setHash(res.data.hash);console.log(Hash);})
        .catch(err => console.error(err));
  },[])
  const OD=(e) =>{
    // console.log(e.target.value.length);
    if(e.target.value.length>0)
    {
      e.target.value = e.target.value.toString().slice(0,4);
      setOTP(e.target.value)
      console.log(OTP);
    }
  }

  const onSubmit=async()=>{
    let payload=isPhone?{"otp":OTP,"hash":Hash,"phone":sender}:{"otp":OTP,"hash":Hash,"email":sender};
    console.log(payload);
    verifyOtp(payload)
        .then((res)=>{
          onNext();
          console.log(res);
          setTimeout(()=>{dispatch(setAuth());
            dispatch(setUser(res.data.user));
          }, 2000);
        })
        .catch(err =>{
          onNext();
          console.error(err)
        });

  }
  return <>
    <Typography variant='h6' align="center">🔒 Enter The Code We Just Texted You</Typography>
    <Box className='otpTF' sx={{display:'flex'}}>
      <TextField className='TF' variant='outlined' onInput = {OD}/>
    </Box>
    <Button variant='filled' id='button' onClick={onSubmit}>Next <ArrowRightAltIcon/></Button>
  </>;
};
