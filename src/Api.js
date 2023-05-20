import React, { useState } from "react";
import axios from "axios";

const Api = () => {
  const [userData, setUserData] = useState([]);
  const fetchUsersData = async () => {
    const url = "http://localhost:8000/users";
    const res = await axios.get(url);
    setUserData(res.data);
  };
  return (
    <>
      <h3>Api Page</h3>
      <button onClick={fetchUsersData}>Fetch Data</button>
      <div>
        {userData.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </div>
    </>
  );
};

export default Api;
