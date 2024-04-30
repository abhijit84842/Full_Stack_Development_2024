import { redirect } from 'next/navigation'
import React from 'react'

const UserDetails = () => {
  redirect("/login")      // it will redirect in login section if anyone want to access my website url
  return (
    <div><h1>All Users Details are here..</h1></div>
  )
}

export default UserDetails