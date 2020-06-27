import React, { useState } from 'react';
import { connect } from 'react-redux';

function App(props) {

  const [todo, setTodo] = useState('');
  console.log(props);

  const addTodo = () => {
    props.addTodo(todo);
    setTodo('');
  };

  return (
    <div className="App">
      React app

      <ul>
        {
          props.todos.map(el => <li key={el.title}>{el.title}</li>)
        }
      </ul>


      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>

    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch({ type: 'TODO_ADD', payload: todo })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
