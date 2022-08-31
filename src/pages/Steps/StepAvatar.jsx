import { Avatar, Button, Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPFP } from '../../actions/profileActions';
export const StepAvatar = ({onNext}) => {
  const [pfp, setpfp] = useState("");
  const name=useSelector((state)=>state.Profile.Name);
  const dispatch=useDispatch();
  const handleChange=(e)=>{
      const file=e.target.files[0];
      const reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend=()=>{
        // console.log(reader.result);
        setpfp(reader.result);
      }
  }
  const onSubmit=()=>{
    dispatch(setPFP(pfp));
    onNext();
  }
  return <>
    <Typography variant='h6' align='center'>🙉Okay,{name}!</Typography>
    <Typography variant='string' align='center'>How's this photo</Typography>
    <Box sx={{display:'flex',justifyContent:'center',width:'100%'}}>
      <Avatar alt="Remy Sharp" src={pfp} sx={{height:'4em',width:'4em',border:'#0077FF solid 0.2em'}} />
    </Box>
    {/* <Button>
      <Typography variant="string" sx={{color:'#0077FF'}}>Choose a different Photo <Input type="file" sx={{display:'hidden'}}/>
      </Typography>
    </Button> */}
     <input
    style={{ display: "none" }}
    id="contained-button-file"
    type="file"
    onChange={handleChange}
  />
  <label htmlFor="contained-button-file">
    <Link to="" variant="outlined" component="span">
      <Typography variant="string" sx={{color:'#0077FF'}}>Choose a different Photo
      </Typography>
    </Link>
  </label>
    <Button variant='filled' id='button' onClick={onSubmit}>Next <ArrowRightAltIcon/></Button>
  </>;
};
