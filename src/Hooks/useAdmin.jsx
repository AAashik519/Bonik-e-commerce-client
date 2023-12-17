import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useAdmin = () => {
  const {user}= useAuth()

  const {data:isAdmin , isPending:isAdminLogin}= useQuery({
    queryKey :[user?.email , 'isAdmin'],
    queryFn : async ()=>{
        const res = await axios.get(`http://localhost:5000//user/admin/${user.email}`)
        console.log(res.data);
        return res.data?.admin
    }
  })
}

export default useAdmin