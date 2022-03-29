import React, { useState } from "react";
import "./form.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Form = ({ create }) => {
  const [message, setMessage] = useState({
    author: "",
    textMessage: "",
  });

  const addNewMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      ...message,
      id: Date.now(),
    };

    setTimeout(() => {
      create(newMessage);
      window.scrollTo(500, document.body.scrollHeight, { behavior: "smooth" });
    }, 1);
    setMessage({ author: message.author, textMessage: "" });
  };
  return (
    <div className="wrap">
      <form className="form">
        <div className="form-control">
          <TextField sx={{ width: 300 }} id="outlined-basic" label="Ваше имя" variant="outlined"
            onChange={(e) => setMessage({ ...message, author: e.target.value })}
            type="text"

            value={message.author}
          />
        </div>
        <div className="form-control">
          <TextField sx={{ width: 300 }}
            id="outlined-multiline-static"
            label="Текст сообщения"
            
            multiline
            rows={4}
            
            onChange={(e) =>
              setMessage({ ...message, textMessage: e.target.value })
            }

            value={message.textMessage}
          />
        </div>
        <div className="msg-btn">
          <Button variant="contained" onClick={addNewMessage}>Отправить</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
