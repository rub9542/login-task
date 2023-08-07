import logo from "./logo.svg";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { addList } from "./redux/actions";
import { useEffect } from "react";
import ActionAreaCard from "./Components/Cards";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Posts from "./Components/Posts";
import Page from "./Components/Page";
import AddPost from "./Components/AddPost";
import Homepage from "./Components/Homepage";
import LoginContent from "./Components/LoginContent";
function App() {
  const users = useSelector((state) => state.users.usersList);

  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
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
      dispatch(addList(apiData));
      // Process the data as needed
    } catch (error) {
      // Handle the error, e.g., display an error message
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {/* <div className="cover-page"></div> */}

      <Router>
        {/* <div> */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        {/* <Switch> */}
        {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/login" component={LoginContent} />

        <Route exact path="/post-info" component={Page} />
        <Route exact path="/add-post" component={AddPost} />

        {/* </Switch> */}
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
