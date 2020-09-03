import React, { createContext, useReducer } from "react";

const initialState = {
  isFull: !sessionStorage.getItem("isFull")
    ? false
    : JSON.parse(sessionStorage.getItem("isFull")),
  isSlidesActive: !sessionStorage.getItem("isSlidesActive")
    ? false
    : JSON.parse(sessionStorage.getItem("isSlidesActive")),
  previousPage: !sessionStorage.getItem("previousPage")
    ? {}
    : JSON.parse(sessionStorage.getItem("previousPage")),
  photos: !sessionStorage.getItem("photos")
    ? {}
    : JSON.parse(sessionStorage.getItem("photos")),
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "TOGGLE_FULL_PHOTO":
        sessionStorage.setItem("isFull", JSON.stringify(!state.isFull));
        sessionStorage.setItem("previousPage", JSON.stringify(action.payload));
        return {
          ...state,
          isFull: !state.isFull,
          previousPage: action.payload,
        };
      case "NEXT_FULL_PHOTO":
        sessionStorage.setItem("previousPage", JSON.stringify(action.payload));
        return { ...state, previousPage: action.payload };
      case "GET_PHOTOS":
        sessionStorage.setItem("photos", JSON.stringify(action.payload));
        return { ...state, photos: action.payload };
      case "START_SLIDES":
        sessionStorage.setItem("isSlidesActive", JSON.stringify(true));
        sessionStorage.setItem("previousPage", JSON.stringify(action.payload));
        return { ...state, isSlidesActive: true, previousPage: action.payload };
      case "END_SLIDES":
        sessionStorage.setItem("isSlidesActive", JSON.stringify(false));
        sessionStorage.setItem("previousPage", JSON.stringify(action.payload));
        return {
          ...state,
          isSlidesActive: false,
          previousPage: action.payload,
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
