import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Box } from '@mui/system';
import { Checkbox, DialogContent, FormControlLabel, IconButton, InputAdornment, Radio, RadioGroup, TextField } from '@mui/material';
import './CRDB.css';
import { useState } from 'react';
import { createRoom } from '../../../http';
import {useHistory} from 'react-router-dom';

export default function CRDB(props) {
  const { onClose, open } = props;
  const [RoomType, setRoomType] = useState(null);
  const [RoomTitle, setRoomTitle] = useState("");
  let history=useHistory();
  const checking=(e)=>{
      setRoomType(e.target.value);
      console.log("RoomType",RoomType);
  }

  const titleSet=(e)=>{
    setRoomTitle(e.target.value);
  }

  const submit=()=>{
      if(RoomType!=null && RoomTitle.length>0)
      createRoom({roomType:RoomType,topic:RoomTitle})
      .then((res)=>{
        console.log(res);
        onClose();
        history.push(`/room/${res.data._id}`)
      })
  }
  return (
    <Dialog onClose={onClose} open={open}>
        <DialogContent sx={{backgroundColor:'#1d1d1d',color:'white'}}>
            <Box sx={{padding:'1.2em',backgroundColor:'#1d1d1d'}}>
                <Typography variant="h6">Enter the Topic To be discussed</Typography>
                <TextField
                    fullWidth
                    onChange={titleSet}
                    id="roomName"
                    sx={{margin:'1.5em 0'}}
                    variant="outlined"
                    placeholder='Room Name'
                />
                <Typography variant="h6">Room Type</Typography>
                <Box sx={{backgroundColor:'#5a5a5a',width:'fit-content',borderRadius:'1em'}}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{padding:'1em'}}
                        >
                    <FormControlLabel onChange={checking} value="Public" control={<Radio icon={<PublicIcon/>} checkedIcon={<PublicIcon/>}/>} label="Public"/>
                    <FormControlLabel onChange={checking} value="People" control={<Radio icon={<PeopleAltIcon/>} checkedIcon={<PeopleAltIcon/>} />} label="People" />
                    <FormControlLabel onChange={checking} value="Private" control={<Radio icon={<LockIcon/>} checkedIcon={<LockIcon/>} />} label="Private" />
                    </RadioGroup>
                </Box>
            </Box>
            <Typography variant="body2" align='center'>Start a room, open to everyone</Typography>
            <center>
                <Button variant="contained" onClick={submit} sx={{marginTop:'1em',backgroundColor:'#20BD5F',borderRadius:'2em',minWidth:'5em'}}>📢Let's Go</Button>
            </center>
        </DialogContent>
    </Dialog>
  );
}
