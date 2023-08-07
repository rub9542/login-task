import React from 'react'
import login from '../../assets/login.png';
import posts from '../../assets/posts.png'
import { useHistory } from "react-router-dom";

export default function Homepage() {
  const history = useHistory();

  return (
    <div className="homepage">
      <div className="heading">Please select a page</div>
      <div className="btn-section">
        <div
          className="btn submit-btn pointer"
          onClick={() => history.push("/login")}
        >
          <img src={login} />
        </div>
        <div
          className="btn submit-btn pointer"
          onClick={() => history.push("/posts")}
        >
          <img src={posts} />
        </div>
        {/* <div
          className="add-btn cancel-btn pointer"
        //   onClick={() => history.push("/")}
        >
          Cancel
        </div> */}
      </div>
    </div>
  );
}
