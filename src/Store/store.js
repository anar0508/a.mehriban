import React, {createContext, useReducer} from 'react';

const initialState = {isFull: false};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'TOGGLE_FULL_PHOTO':
        return { ...state, isFull: !state.isFull, previousPage: action.payload};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }