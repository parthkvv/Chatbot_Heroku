import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, InputAdornment, Tab, Tabs, TextField, Typography } from '@mui/material';
import { toggle } from '../../actions/IRActions';

export const CTabs = ({tabs}) => {
    const [value, setValue] = React.useState(0);
    const dispatch=useDispatch();
    const states={
      0:true,
      1:false
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(toggle());
    };
    // console.log(tabs);
  return <>
    <Tabs sx={{backgroundColor:'rgb(70,70,70)',width:'fit-content',marginLeft:'auto',borderRadius:'1em',marginBottom:'1em'}} value={value} onChange={handleChange} aria-label="icon tabs example">
            {tabs.map((e,k)=>{
                return(<Tab key={k} icon={e}/>)
            })}
    </Tabs>
  </>;
};
