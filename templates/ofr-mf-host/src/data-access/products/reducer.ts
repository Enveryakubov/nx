const initialState = {
  currentProgram: null,
};

const reducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'test':
      return {
        ...state,
        currentProgram: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
