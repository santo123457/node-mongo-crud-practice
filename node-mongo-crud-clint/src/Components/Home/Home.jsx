import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const users =useLoaderData();
  const [displayUser,setDisplayUser] = useState(users);
  const handleDelete =(user)=>{
    const agree = window.confirm(`are you ready to delete :${user.name}`);
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`,{
        method :"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deleteCount >0){
          alert('user deleted SuccessFully')
        }
      })
    }
  }
  return <div>
      <h2> total users {displayUser.length}</h2>
      <div>
        {
          displayUser.map(user=><p key={user._id}>name:{user.name} Address: {user.address}  Email: {user.email}   <button onClick={()=>handleDelete(user)}>X</button></p>)
        }
      </div>

  </div>;
};

export default Home;
