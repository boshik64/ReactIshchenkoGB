import './Message__style.css'

function Message({text}) {
  return (
    <div className="Message">
      <p>{text}</p>
      <img src="ReactDevtools.png" alt="" />
    </div>
  );
}

export default Message;
