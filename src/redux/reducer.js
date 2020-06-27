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

    default:
      return state;
  }
};

export default todo;
