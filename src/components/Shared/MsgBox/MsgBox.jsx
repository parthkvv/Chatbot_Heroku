import React from 'react';
import './MsgBox.css';
import Box from '@mui/material/Box';

export const MsgBox = (props) => {
  return <>
        <Box className="cont">
            {props.extra}
            <Box className="banner" style={props.style}>
                {props.children}
            </Box>
        </Box>
  </>;
};
