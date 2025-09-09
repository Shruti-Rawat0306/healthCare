 import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

 const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)
   return (
     <div className='min-h-screen bg-white border-right'>
        {
            aToken && <ul className='text-[#515151] mt-5'>
                <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-purple-700' : ''}`}
 to={'/admin-dashboard'}>
                    <img src={assets.home_icon}/>
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>

                 <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-purple-700' : ''}`}
 to={'/all-appointments'}>
                    <img src={assets.appointment_icon}/>
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>

                 <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-purple-700' : ''}`}
 to={'/add-doctor'}>
                    <img src={assets.add_icon}/>
                    <p className='hidden md:block'>Add Doctors</p>
                </NavLink>

                 <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-purple-700' : ''}`}
 to={'/doctor-list'}>
                    <img src={assets.people_icon}/>
                    <p className='hidden md:block'>Doctor lists</p>
                </NavLink>
            </ul>
        }
         {
            dToken && <ul className='text-[#515151] mt-5'>
                <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-purple-700' : ''}`}
 to={'/doctor-dashboard'}>
                    <img src={assets.home_icon}/>
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>

                 <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-purple-700' : ''}`}
 to={'/doctor-appointments'}>
                    <img src={assets.appointment_icon}/>
                    <p className='hidden md:block'>Appointments</p>
                </NavLink>
                 <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-purple-700' : ''}`}
 to={'/doctor-profile'}>
                    <img src={assets.people_icon}/>
                    <p className='hidden md:block'>Doctor Profile</p>
                </NavLink>
            </ul>
        }
     </div>
   )
 }
 
 export default Sidebar