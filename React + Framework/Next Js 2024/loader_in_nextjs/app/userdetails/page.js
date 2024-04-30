"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import UserInfo from "./userinfo/page";



const UserDetails = () => {

  const [userData,setUserData]=useState([])

  const callApi = async () => {
    let res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    console.log(data.users)
    setUserData(data.users)
    
  };
  
  useEffect(()=>{
    callApi()
  },[])

  return (
    <div>
      <h1>All user details are here..</h1>
      <Link href="/">Back to Home Page</Link>
      {
        userData.map((list)=>(
          <UserInfo key={list.id} list={list}/>
        ))
      }
    </div>
  );
};

export default UserDetails;
