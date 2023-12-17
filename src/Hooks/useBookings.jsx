import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useBookings = () => {
    const {user}= useAuth()
 

    const { data :bookings=[] , refetch } =  useQuery({
        queryKey:['booking', user?.email ],
        queryFn: async ()=>{
         const res = await axios.get(`http://localhost:5000/add-cart?email=${user.email}`)
         return res.data
        }
    })
    console.log('bookings',bookings);

    return [bookings ,refetch]


    // console.log(bookings);
}

export default useBookings