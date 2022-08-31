import React, { useEffect, useRef, useState } from 'react';
import {useWebRTC} from '../../hooks/usewebRTC';
import { Avatar, Badge, Box, Button, IconButton, Input, Typography } from '@mui/material';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'
import MicIcon from '@mui/icons-material/Mic';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PanToolIcon from '@mui/icons-material/PanTool';
import MicOffIcon from '@mui/icons-material/MicOff';
import { getRoom } from '../../http';

export const Room = () => {
    const [Room, setRoom] = useState({})
    const [isMuted, setMuted] = useState(false);
    const user=useSelector((state)=>state.iR.user);
    user.profile=useSelector((state)=>state.Profile);
    const {id:roomId}=useParams();
    //  
    let { clients, provideRef, handleMute }=useWebRTC(roomId,user);
    //  
    let history=useHistory();
    const handleManualLeave = () => {
        history.push('/rooms')
    };
    useEffect(() => {
        handleMute(isMuted, user._id);
    }, [isMuted]);
    useEffect(async () => {
         
        const fetchRoom = async () => {
             
            const { data } = await getRoom(roomId);
            setRoom((prev) => data);
        };
        await fetchRoom(roomId);
    },[]);
    const handleMuteClick = (clientId) => {
         
         
        if (clientId === user._id) {
             
            setMuted((prev) => !prev);
            console.log(isMuted);
        }
    };

  return <>
      <Box sx={{display:'flex',justifyContent:'space-between',padding:'1em 3em'}}>
        <Box sx={{display:'flex'}}>
            <Typography>
            <IconButton onClick={handleManualLeave} sx={{color:'white'}}>
                <ArrowBackIcon/>
            </IconButton>
                All Voice Rooms
            </Typography>
        </Box>
        <Box sx={{display:'flex'}}>
        <IconButton sx={{color:'white'}}>
            <PanToolIcon/>
        </IconButton>
        <IconButton onClick={handleManualLeave} sx={{color:'white'}}>
            <ExitToAppIcon/>
        </IconButton>
        </Box>
      </Box>
      <Box sx={{padding:'3em',backgroundColor:'#1D1D1D',height:'calc(100vh - 13em)'}}>
      <Box sx={{padding:'1em 0',display:'flex'}}>
      {
          clients.map((client)=>{
              return(
                  <Box sx={{padding:'1em'}} key={client.id}>
                    <Box sx={{marginBottom:'1.5em'}}>
                    <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        // <SmallAvata alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <IconButton onClick={() =>handleMuteClick(client._id)} sx={{borderRadius:'51%',backgroundColor:'white',padding:'0.1em'}}>
                            {isMuted ? <MicIcon sx={{color:'black'}} />:<MicOffIcon sx={{color:'black'}} />}
                        </IconButton>
                    }
                    >
                        <Avatar src={client.profile.PFP} sx={{height:'3em',width:'3em'}}/>
                        <audio autoPlay ref={(instance)=>{provideRef(instance,client.id)}}></audio>
                    </Badge>
                    </Box>
                    <Typography>{client.profile.Name}</Typography>
                  </Box>
              )
            })
        }
        </Box>
        <Typography>Others in the room</Typography>
        </Box>
    </>;
};

// ref={(instance)=>{provideRef(instance,client.id)}}