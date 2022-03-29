import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import "./components/message.css";
import ItemList from "./components/ItemList";

function App() {
  const [messages, setMessage] = useState([]);

  const createMessage = (newMessage) => {
    setMessage([...messages, newMessage]);
  };

  useEffect(() => {
    if (messages.length > 0) {
      let lastMsg = messages[messages.length - 1];
      let robotMsg = {
        id: Date.now(),
        author: "Робот",
        textMessage:
          "Здравствуйте, " +
          lastMsg.author +
          ". Это сообщение отправлено роботом.",
      };
      if (lastMsg.author !== "Робот") {
        setTimeout(() => {
          setMessage([...messages, robotMsg]);
        }, 1500);
      }
    }
  }, [messages]);

  return (

    <div className="App" style={{
      width: 300
      , border: '2px solid #1565c0', padding: 15, borderRadius: 10
    }}>
      <header>
        <div className="App-header">
          {messages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </div>
      </header>
      <Form create={createMessage} />
      <ItemList />




    </div>
  );
}



export default App;
