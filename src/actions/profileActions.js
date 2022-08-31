export const setPFP = (data)=>{
    return(
        {
            type:"SET_PFP",
            PFP:data
        }
    )
}
export const setUsername = (data)=>{
    return(
        {
            type:"SET_USERNAME",
            username:data
        }
    )
}
export const setName = (data)=>{
    return(
        {
            type:"SET_NAME",
            name:data
        }
    )
}
export const unsetProfile = (data)=>{
    return(
        {
            type:"UNSET_PROFILE",
        }
    )
}