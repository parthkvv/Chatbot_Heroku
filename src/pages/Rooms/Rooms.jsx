import { Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChatRoomCard from '../../components/Shared/ChatRoomCard/ChatRoomCard';
import SearchIcon from '@mui/icons-material/Search';
import './Rooms.css'
import {getRooms} from '../../http/index';
import CRDB from '../../components/Shared/CreateRoomDialogueBox.jsx/CRDB';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
export const Rooms = () => {
    const [open, setopen] = useState(false);
    const [Rooms, setRooms] = useState([]);
    let history=useHistory();
    useEffect(async ()=>{
        // console.log("nonono",process.env.REACT_APP_BASE_URL); 
        getRooms()
        .then((res)=>{
            console.log(res.data);
            setRooms(res.data);
            console.log(Rooms);
        })
    },[]);

    const opeN=()=>{
        setopen(true);
    }
    const close=()=>{
        setopen(false);
    }

    return <>
        <Box className="FeedBox">
            <Box className="HeaderBox">
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                    <Typography variant="h5" sx={{marginRight:'1em',marginBottom:'0.5em'}}>All Voice Rooms</Typography>
                    <TextField
                    id='search'
                    sx={{color:"white !important"}}
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><IconButton sx={{color:'white'}}><SearchIcon/></IconButton></InputAdornment>,
                    }}
                    />
                </Box>
                <Box sx={{display:'flex',flexWrap:'wrap'}}>
                    <Button onClick={opeN} variant="contained" sx={{backgroundColor:'#20BD5F',borderRadius:'2em',minWidth:'5em'}}>Create Room</Button>
                </Box>
                <CRDB open={open} onClose={close}/>
            </Box>
            <Box className="Feed">
                {Rooms.map((room)=>{
                   return <ChatRoomCard data={room}/>;
                })}
            </Box>
        </Box>
    </>;
};
