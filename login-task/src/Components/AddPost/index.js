import React, { useState } from "react";
import TextareaDecorators from "./TextField";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Msgdisplay from "./Msgdisplay";
// import { Snackbar } from '@mui/material';
// import MessageSnackbar from './Sanckbar';
import { useHistory } from "react-router-dom";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const getHome = () => {
    setMsg("");
    history.push("/posts");
  };
  async function postData(dataToSend) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type
            // Add other headers if needed
          },
          body: JSON.stringify(dataToSend), // Convert data to JSON string
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error posting data:", error);
      throw error; // Rethrow the error to handle it at the caller level
    }
  }

  // Usage
  async function sendData() {
    try {
      const dataToSend = {
        title: title,
        description: desc,
      };

      const apiResponse = await postData(dataToSend);
      // console.log("API response:", apiResponse);
      setMsg("Post Added Successfully");
      setTimeout(() => getHome(), 3000);
      // Process the API response as needed
    } catch (error) {
      // Handle the error, e.g., display an error message
      console.error("Error:", error);
    }
  }

  // sendData();

  return (
    <div className="add-page">
      <div className="add-field">
        <div className="add-heading">Title</div>
        <Stack spacing={2}>
          <Input
            placeholder="Enter Title"
            variant="soft"
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              "--Input-radius": "0px",
              borderBottom: "2px solid",
              borderColor: "neutral.outlinedBorder",
              "&:hover": {
                borderColor: "neutral.outlinedHoverBorder",
              },
              "&::before": {
                border: "1px solid var(--Input-focusedHighlight)",
                transform: "scaleX(0)",
                left: 0,
                right: 0,
                bottom: "-2px",
                top: "unset",
                transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                borderRadius: 0,
              },
              "&:focus-within::before": {
                transform: "scaleX(1)",
              },
            }}
          />
        </Stack>
      </div>
      <div className="add-field">
        <div className="add-heading">Description</div>
        <TextareaDecorators onChange={(e) => setDesc(e)} />
      </div>
      <div className="btn-section">
        <div className="add-btn submit-btn pointer" onClick={() => sendData()}>
          Submit
        </div>
        <div className="add-btn cancel-btn pointer" onClick={() => history.push("/posts")}>
          Cancel
        </div>
      </div>
      {msg !== "" && <Msgdisplay msg={msg} />}
      {/* <Snackbar/> */}
      {/* <MessageSnackbar msg={msg}  /> */}
    </div>
  );
}
