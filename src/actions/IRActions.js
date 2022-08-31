export const setOtpSender = (data)=>{
    return(
        {
            type:"SET_OTPSENDER",
            sender:data
        }
    )
}
export const setUser = (data)=>{
    return(
        {
            type:"SET_USER",
            user:data
        }
    )
}
export const setAuth = ()=>{
    return(
        {
            type:"SET_AUTH",
        }
    )
}
export const logout = ()=>{
    return(
        {
            type:"LOGOUT_USER",
        }
    )
}

export const toggle = (index)=>{
    return(
        {
            type:"TOGGLE"
        }
    )
}