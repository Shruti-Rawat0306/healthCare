import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {
const navigate=useNavigate() 
    
   const {doctors}=useContext(AppContext)
    const [relDoc,setRelDocs]=useState([])
    
useEffect(()=>{
if(doctors.length > 0 && speciality){
    const doctorsData=doctors.filter((doc=>doc.speciality === speciality && doc._id !== docId))
    setRelDocs(doctorsData)
}
},[doctors,speciality,docId])

  return (
    <div>
         <div className='flex flex-col items-center gap-4 my-16 text-gray-900 px-4 sm:px-0'>
      <h1 className='text-2xl font-medium'>Top Doctors to Book</h1>

      <p className='text-center text-sm max-w-xl'>
        Simply browse through our extensive list of trusted doctors
      </p>

      <div
        className='grid w-full max-w-6xl gap-6 pt-5'
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}
      >
        {relDoc.slice(0,5).map((item, index) => (
          <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
            key={index}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2 bg-white shadow'
          >
            <img className='w-full h-48 object-cover bg-blue-50' src={item.image} alt={item.name} />

            <div className='p-4'>
               <div className={`flex items-center ${item.available ? ' text-green-500' : 'text-gray-500'} gap-2 text-sm mb-1 `}>
                <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'}rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
        More
      </button>
    </div>
    </div>

  )
}

export default RelatedDoctors