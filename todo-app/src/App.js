import Header from "./components/todos/header";
import Main from "./components/todos/main";
import Footer from "./components/todos/footer";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);
  return (
    <div className="App">
        <section className="todoapp">
            <Header todos={todos} addTodo={setTodos} />
            <Main todos={todos} setTodos={setTodos} />      
            <Footer/> 
        </section>
      
    </div>
  );
}

export default App;
