import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Loading from "./Loading";

const Users = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const { data } = await axios.get("https://api.github.com/users");
    setData(data);
    setLoading(true);
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return <>{loading ? data.map((ele) => <Cards data={ele} />) : <Loading />}</>;
};

export default Users;
