import { setName,setPFP,setUsername } from "../actions/profileActions";


var data = {};
  
  export const Profile = (state=data, action) => {
  
      switch(action.type){
          case "SET_PFP": 
            return {...state,PFP:action.PFP}
          case "SET_USERNAME": 
            return {...state,Username:action.username}
          case "SET_NAME": 
            return {...state,Name:action.name}
          case "UNSET_PROFILE": 
            return {...state,Name:"",Username:"",PFP:""}
          default: return state;
      }
  };
  