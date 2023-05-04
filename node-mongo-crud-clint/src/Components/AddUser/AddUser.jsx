import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState({});

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h2> Please add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="type your name"
        />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="type your address"
        />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="type your email"
        />
        <input
          onBlur={handleInputBlur}
          type="password"
          name="FakePassword"
          placeholder="type your password"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
