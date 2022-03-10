import Message from "./components/Message";

function App() {
  const text = 'Какой-то текст описанный в константе, который мы прокидываем через пропсы в компоненту \'Message\' и стилизуем. DevTools так-же установлен в chrome'
  const name = 'гость'
  return (
    <div className="App">
      <p>Привет, {name}</p>
      <Message text={text} />

    </div>
  );
}

export default App;
