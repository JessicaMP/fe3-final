import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer";
import ApiService from "../services/api";

const CharStates = createContext();
const favs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  list: [],
  favs,
  theme: false,
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await ApiService.getUsers()
      dispatch({type: "GET_CHARS", payload: data });
    }
    fetchData();
  }, []);

  return (
    <CharStates.Provider value={{ state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);
