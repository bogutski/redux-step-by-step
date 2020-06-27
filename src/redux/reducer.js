const initialState = {
  todos: [
    {
      title: 'First todo',
      done: true,
    }, {
      title: 'Second todo',
      done: false,
    }
  ]
};

const todo = (state = initialState, action) => {
  switch (action.type) {

    case 'TODO_ADD':
      return {
        ...state,
        todos: [...state.todos, { title: action.payload, done: false }]
      };

    default:
      return state;
  }
};

export default todo;
