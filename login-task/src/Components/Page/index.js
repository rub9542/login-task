import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import arrow from '../../assets/arrow.png'
export default function Page() {
  const userData = useSelector((state) => state.users.userData);
  const history = useHistory();

  return (
    <div className="page-info">
      <div
        className="add-btn pointer"
        onClick={() => history.push("/posts")}
      >
       <img src={arrow}/> Back
      </div>
      <div className="page-heading">{userData.title}</div>
      <div className="page-desc">{userData.body}</div>
    </div>
  );
}
