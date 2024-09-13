import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer";

const CharStates = createContext();
const favs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  list: [],
  favs,
  theme: true,
};

const Context = ({ children }) => {
  // const [dentists, setDentists] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios(url)
      dispatch({type: "GET_CHARS", payload: data });
    }
    fetchData();
  }, []);

  return (
    <CharStates.Provider value={{ ...state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);
