import React from 'react';
import '../../components/Shared/Styles/Button.css';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { StepPhoneEmail } from '../Steps/StepPhoneEmail';
import { StepUsername } from '../Steps/StepUsername';
import { StepOtp } from '../Steps/StepOtp';
import { StepAvatar } from '../Steps/StepAvatar';
import { StepName } from '../Steps/StepName';
import { useState } from 'react';
import { CTabs } from '../../components/Shared/Tabs';
import Box from '@mui/material/Box';
import { MsgBox } from '../../components/Shared/MsgBox/MsgBox';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './Register.css';
import { StepRegister } from '../Steps/StepRegister';

export const Register = () => {
    let history = useHistory();
    const [step, setstep] = useState(0);
    const onNext=()=>{
        setstep((step+1));
    }
    const steps={
        0:{component:StepName,    ext:<></>},
        1:{component:StepAvatar,  ext:<></>},
        2:{component:StepUsername,ext:<></>},
        3:{component:StepRegister,ext:<></>},
    }

    const Step=steps[step];
    console.log(Step.ext);
  return <>
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <MsgBox extra={Step.ext}>
            <Step.component onNext={onNext}/>
        </MsgBox>
    </Box>
  </>;
};
