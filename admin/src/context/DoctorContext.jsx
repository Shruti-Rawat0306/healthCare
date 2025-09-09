import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const DoctorContext = createContext();

const DoctorContextProvider=(props)=>{
 const backendUrl = import.meta.env.VITE_BACKEND_URL


 const [dToken,setDToken]=useState(localStorage.getItem('dToken')?localStorage.getItem('dToken'):'')
  const [appointments , setAppointments]=useState([])
  const [dashData,setDashData]=useState(false)
  const [profileData,setProfileData]=useState(false)
 const getAppointments = async ()=>{
   try {
      const{data} = await axios.get(backendUrl + '/api/doctor/appointments',{headers:{dToken}})
      if(data.success){
         setAppointments(data.appointments)
         console.log(data.appointments)
      }
   } catch (error) {
      console.log(error)
      toast.error(error.message)
   }
 }
//complete appointment by doctor in doc panel
const completeAppointment = async (appointmentId)=>{
         try {
            const {data}=await axios.post(backendUrl + '/api/doctor/complete-appointment',{appointmentId},{headers:{dToken}})
            if(data.success){
               toast.success(data.message)
                  getAppointments()
               
            }else{
               toast.error(data.message)
            }

         } catch (error) {
             console.log(error)
      toast.error(error.message)
         }
}


//cancel appointment by doctor in doc panel
const cancelAppointment = async (appointmentId)=>{
         try {
            const {data}=await axios.post(backendUrl + '/api/doctor/cancel-appointment',{appointmentId},{headers:{dToken}})
            if(data.success){
               toast.success(data.message)
                  getAppointments()
               
            }else{
               toast.error(data.message)
            }

         } catch (error) {
             console.log(error)
      toast.error(error.message)
         }
}

//get dash data 
const getDashData =async()=>{
   try {
      
   const{ data }= await axios.get(backendUrl +'/api/doctor/dashboard',{headers:{dToken}})
    console.log("Dashboard Data Response:", data); // ✅ debug log 
   if(data.success){
         setDashData(data.dashData)
         console.log(data.dashData)
      }else{
         toast.error(data.message)
      }

   } catch (error) {
       console.log(error)
      toast.error(error.message)
      
   }
}

//get profile to doctor panel
const getProfileData = async ()=>{
   try {
      const {data}=await axios.get(backendUrl +'/api/doctor/profile',{headers:{dToken}})
      if(data.success){
         setProfileData(data.profileData)
      }
   } catch (error) {
           console.log(error)
      toast.error(error.message)
   }
}

   const value={

            dToken,setDToken,
            backendUrl,appointments,setAppointments,
            getAppointments,completeAppointment,cancelAppointment,
            dashData,setDashData,getDashData,
            setProfileData,profileData,getProfileData

    }
    return (
       <DoctorContext.Provider value={value}>  
        {props.children}
       </DoctorContext.Provider>
    )
}
export default DoctorContextProvider