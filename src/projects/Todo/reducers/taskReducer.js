const taskReducer = (state, action) => {
    switch (action.type) {
        case 'add':
          if(action.body.length < 1) return state;
          return [...state, {id: new Date(), done: false, body: action.body}];
        case 'delete':
          return state.filter(el => el.id !== action.id);
        case 'done':
          return state.map(el => el.id === action.id ? { ...el, done: !el.done } : el);
        default:
          return state;
    }
}

export default taskReducer;