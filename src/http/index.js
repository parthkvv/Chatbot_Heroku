import axios from "axios";

const api=axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    withCredentials:true,
    headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
    }
})
// List of endpoints

export const sendOtp=async (data)=>{return await api.post('/api/send-otp',data)}
export const verifyOtp=async (data)=>{return await api.post('/api/verify-otp',data)}
export const activate=async (data)=>{return await api.post('/api/activate',data)}
export const logout=async ()=>{return await api.post('/api/logout')}
export const createRoom=async (data)=>{return await api.post('/api/rooms',data)}
export const getRooms=async ()=>{return api.get('/api/rooms')}
export const getRoom=async (roomId)=>{return api.get(`/api/rooms/${roomId}`)}


// Intercepters
api.interceptors.response.use((config)=>{
        // console.log(config);
        return config
    },
    async (error)=>{
        // console.log(error);
        const origReq=error.config;
        if(error.response.status=== 401 && origReq && !origReq._isRetry)
        {
            origReq._isRetry=true;
            try {
                const response=await axios.get(`${process.env.REACT_APP_BASE_URL}/api/refresh`,{
                    withCredentials:true
                });
                return api.request(origReq)
            } catch (error) {
                console.error(error);
            }
        }
        throw error;
    });

export default api;