const randomnumber = (state, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return action.value;
    default:
      return state
  }
}

const randomnumbers = (state = [], action) => {
  switch (action.type) {
    case "ADD_NUMBER":
          return [...state, randomnumber(undefined, action)];
    default:
      return state;
  }
};

export default randomnumbers