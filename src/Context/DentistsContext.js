import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const DentistStates = createContext();

const DentistsContext = ({ children }) => {
  const [dentists, setDentists] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios(url)
      setDentists(data);
    }
    fetchData();
  }, []);

  return (
    <DentistStates.Provider value={{ dentists }}>
      {children}
    </DentistStates.Provider>
  );
};
export default DentistsContext;

export const useDentistStates = () => useContext(DentistStates);
