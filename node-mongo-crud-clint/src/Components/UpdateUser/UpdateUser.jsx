import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = (event) => {
      event.preventDefault();
    //   console.log(user);
    fetch(`http://localhost:5000/users/${storedUser._id}`,{
        method : "PUT",
        headers :{
            "content-type":"application/json"
        },
        body : JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(data =>{
        if (data.modifiedCount>0){
            alert('user Updated successfully')
            
        }
        // console.log(data);
    })
  

    };
    const handleInputChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...user };
      newUser[field] = value;
      setUser(newUser);
    };
    return (
        <div>
            <h2>please update : {storedUser.name}</h2>

            <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          type="text"
          defaultValue={storedUser.name}
          name="name"
          placeholder="type your name"
        />
        <input
          onChange={handleInputChange}
          type="text"
          defaultValue={storedUser.address}
          name="address"
          placeholder="type your address"
        />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          defaultValue={storedUser.email}
          placeholder="type your email"
        />
       
        
        <button type="submit">Update User</button>
      </form>
            
        </div>
    );
};

export default UpdateUser;