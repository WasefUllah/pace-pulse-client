import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyMarathonList = () => {
  const [marathons, setMarathons] = useState([]);
  const { user } = useContext(AuthContext);
  axios(`http://localhost:3000/allmarathons?email=${user.email}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <div>My marathon list</div>;
};

export default MyMarathonList;
