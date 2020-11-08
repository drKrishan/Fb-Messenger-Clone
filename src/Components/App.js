import { FormControl, InputLabel, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import db from "../firebase";
import "../StyleSheets/App.css";
import firebase from "firebase";
import Message from "./Message";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      );
  }, []);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  console.log(messages);
  return (
    <div className="app">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello Dev Krish Programmers 🚀!</h1>
      <h2> Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
