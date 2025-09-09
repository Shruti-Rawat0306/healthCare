/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    const{speciality}=useParams()
    const [filterDoc,setFilterDoc]=useState([])
    const [showFilter,setShowFilter]=useState(false)

    const {doctors}=useContext(AppContext)
    const applyFilter=()=>{
        if(speciality){
            setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
        }else{
            setFilterDoc(doctors)
        }
    }
     useEffect(()=>{
        applyFilter()
     },[ doctors, speciality])
    const navigate=useNavigate()

    
  return (
  <div className="px-4 py-8">
    <p className="text-gray-600">
      Browse Doctors by Speciality
    </p>
    <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      <button className={`py-1 border rounded text-sm transition-all sm:hidden ${showFilter ?'bg-purple-700 text-white':''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={()=>speciality==='General physician'?navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=== "General physician" ? "bg-indigo-100 text-black":""}`}>General physician</p>
            <p onClick={()=>speciality==='Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality=== "Gynecologist" ? "bg-indigo-100 text-black":""}` }>Gynecologist</p>
            <p onClick={()=>speciality==='Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality=== "Dermatologist" ? "bg-indigo-100 text-black":""}`}>Dermatologist</p>
            <p onClick={()=>speciality==='Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality=== "Pediatricians" ? "bg-indigo-100 text-black":""}`}>Pediatricians</p>
            <p onClick={()=>speciality==='Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality=== "Neurologist" ? "bg-indigo-100 text-black":""}`}>Neurologist</p>
            <p onClick={()=>speciality==='Gastroenterologist'?navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality=== "Gastroenterologist" ? "bg-indigo-100 text-black":""}`}>Gastroenterologist</p>
        </div>
        <div>
              {/* Cards container */} 
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
      {filterDoc.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(`/appointment/${item._id}`)}
          className="max-w-xs w-full bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
        >
          {/* Doctor image */}
          <img
            className="w-full h-48 object-cover bg-gray-100 object-top"
            src={item.image}
            alt={item.name} 
          />

          {/* Doctor details */}
          <div className="p-4">
            <div className={`flex items-center ${item.available ? ' text-green-500' : 'text-gray-500'} gap-2 text-sm mb-1 `}>
                <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
            <p className="text-lg font-semibold text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-600">{item.speciality}</p>
          </div>
        </div>
      ))}
    
        </div>
    </div>
    </div>
    </div>
);

}

export default Doctors