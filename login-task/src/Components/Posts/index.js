import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActionAreaCard from "../Cards";
import "../../App.scss";
import { addUserData } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Plus from "../../assets/Plus";
import SizeDropdown from "../Dropdown";
import Pagination from "../Pagination";
import arrow from "../../assets/arrow.png";

export default function Posts() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const [size, setSize] = useState(10);
  const [limit, setLimit] = useState({ min: 1, max: 10 });

  const [userIndex, setUserIndex] = useState("");
  const users = useSelector((state) => state.users.usersList);

  const userData = useSelector((state) => state.users.userData);
  const history = useHistory();

  async function fetchData() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${userIndex}`
      ); // Replace with your API URL
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow the error to handle it at the caller level
    }
  }

  // Usage
  async function getData() {
    try {
      const apiData = await fetchData();
      // console.log("API user data:", apiData);
      dispatch(addUserData(apiData));
      // Process the data as needed
    } catch (error) {
      // Handle the error, e.g., display an error message
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getData();
    if (userIndex !== "") {
      history.push("/post-info");
    }
  }, [userIndex]);

  useEffect(() => {
    setLimit({ min: 1, max: size });
    setCurrentPage(1);
  }, [size]);

  useEffect(() => {
    let userLen = users.length;
    let currPage = size * currentPage;
    setLimit({ min: currPage - (size - 1), max: currPage });
  }, [currentPage]);

  return (
    <div className="card-page">
      <div className="add-btn back pointer" onClick={() => history.push("/")}>
        <img src={arrow} /> Back
      </div>
      <div
        className="add-btn pointer"
        onClick={() => history.push("/add-post")}
      >
        <Plus /> Add post
      </div>
      <SizeDropdown value={size} onSelect={(e) => setSize(e)} />
      {users.map((item, index) => {
        if (index >= limit.min && index <= limit.max) {
          return (
            <ActionAreaCard
              onClick={(e) => setUserIndex(e)}
              body={item}
              key={index}
            />
          );
        }
      })}{" "}
      <Pagination
        setPage={(e) => setCurrentPage(e)}
        currPage={currentPage}
        size={size}
        totalItems={users.length}
      />
    </div>
  );
}
