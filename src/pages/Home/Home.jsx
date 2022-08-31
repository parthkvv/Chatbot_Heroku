import React from 'react';
import '../../components/Shared/Styles/Button.css';
import { useHistory } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { MsgBox } from '../../components/Shared/MsgBox/MsgBox';

export const Home = () => {
    let history = useHistory();
    const reg = ()=>{
        history.push('/authenticate');
    }
  return <>
        <MsgBox>
            <Typography variant="h6" align="center">👋 Welcome to ChatClub!</Typography>
            <Typography variant="body2" align='center'>We’re working hard to get ChatClubRoom ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</Typography>
            <Button variant="contained" id="button" onClick={reg}>Let's Go!<ArrowRightAltIcon/> </Button>
            <Link to='/authenticate'>
                <Typography variant="subtitle2" align='center' sx={{color:'#0077FF'}}>Have an invite text? Sign In</Typography>
            </Link>
        </MsgBox>
  </>;
};
