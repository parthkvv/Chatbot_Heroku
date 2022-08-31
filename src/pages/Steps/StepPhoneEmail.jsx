import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Button, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {useDispatch, useSelector} from 'react-redux';
import { setOtpSender } from '../../actions/IRActions';
export const StepPhoneEmail = ({onNext}) => { 
    const dispatch=useDispatch();
    const isPhone=useSelector((state)=> state.iR.isPhone);
    const onSubmit=()=>{
        if(isPhone){
            console.log("Phone OTP");
            const phone=document.getElementById('phone').value.toString();
            dispatch(setOtpSender(phone));
        }
        else{
            const email=document.getElementById('email').value.toString();
            dispatch(setOtpSender(email));
            console.log("Email OTP");
        }
        onNext();
    }
    // console.log(isPhone);
    return <>
            {!isPhone ? <Email/>:<Phone/>}
            <Button variant='filled' id='button' onClick={onSubmit}>Next <ArrowRightAltIcon/></Button>
            <Typography variant="string" align="center">We would recommend using Email for OTP, as it has higher success rates .By entering your number/email, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</Typography>
    </>;
};

const Email= ()=>{
    return <>
        <Box sx={{display:'flex'}}>
                <EmailIcon sx={{marginRight:'0.5em',color:'#0077FF'}}/> 
                <Typography>Enter Your Email</Typography> 
            </Box>
            <TextField
                id='email'
                className='TF'
                sx={{color:"white"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><EmailIcon sx={{color:'white'}}/></InputAdornment>,
                }}
                variant="outlined"
                placeholder='Email'
                onInput = {(e) =>{
                    
                }}
                />
    </>
}

const Phone= ()=>{
    return <>
        <Box sx={{display:'flex'}}>
                <LocalPhoneIcon sx={{marginRight:'0.5em',color:'#0077FF'}}/> 
                <Typography>Enter Your Phone Number</Typography> 
            </Box>
            <TextField
                className='TF'
                id='phone'
                sx={{color:"white"}}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><PhoneIphoneIcon sx={{color:'white'}}/></InputAdornment>,
                }}
                variant="outlined"
                placeholder='Phone Number'
                type={'number'}
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                }}
                />
    </>
}
