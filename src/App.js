import React from 'react';
import { connect } from 'react-redux';

function App(props) {

  console.log(props);

  return (
    <div className="App">
      React app

      <ul>
        {
          props.todos.map(el => <li key={el.title}>{el.title}</li>)
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(App);
