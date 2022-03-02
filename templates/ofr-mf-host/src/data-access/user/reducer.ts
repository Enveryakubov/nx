const initialState = {
  personalInfo: null,
};

const reducer = (state = initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'info':
      return {
        ...state,
        personalInfo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
