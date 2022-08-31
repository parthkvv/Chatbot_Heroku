import React, { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from "axios";
import {setName,setPFP,setUsername} from '../actions/profileActions';
import {setUser,setAuth} from '../actions/IRActions';

function useLoading() {
    const [Loading, setLoading] = useState(true);
    const dispatch=useDispatch();
    useEffect(() => {
      (async ()=>{
          try{
              axios.defaults.withCredentials = true;
              const {data} =await axios.get(`${process.env.REACT_APP_BASE_URL}/api/refresh`,{
                withCredentials:true,
                crossDomain: true
            });
            console.log("hehehe",data);
            dispatch(setUser(data.user));
            dispatch(setAuth());
            dispatch(setName(data.profile.name));
            dispatch(setUsername(data.profile.username));
            dispatch(setPFP(data.profile.pfp));
            setLoading(false);
          }
          catch(e){
              console.error(e);
              setLoading(false);
          }
      })();
    },[]);
    
    return {Loading};
}

export default useLoading;
