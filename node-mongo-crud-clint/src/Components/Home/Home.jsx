import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUser, setDisplayUser] = useState(users);
  const handleDelete = (user) => {
    const agree = window.confirm(`are you ready to delete :${user.name}`);
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("user deleted SuccessFully");
            const remainingUsers = displayUser.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUser(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h2> total users {displayUser.length}</h2>
      <div>
        {displayUser.map((user) => (
          <div key={user._id} className="userCard">
            <h2>name:{user.name} </h2>
            <h3>Address: {user.address}</h3>
             <h3>Email: {user.email}</h3>
            <Link to={`/update/${user._id}`}><button>Update User</button></Link>
            <button onClick={() => handleDelete(user)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
