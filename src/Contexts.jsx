import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "./Database";
const context = createContext();
const Contexts = ({ children }) => {
  const [api, setApi] = useState([]);
  const fetchingData = async () => {
    const { data } = await fakeFetch("https://example.com/api/todos");
    setApi(data.todos);
  };
  // mark as done function
  const markAsDone = (ids) => {
    const filteringOnmark = api.map((cur) => {
      return cur.id == ids ? { ...cur, isCompleted: true } : cur;
    });

    setApi(filteringOnmark);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <context.Provider value={{ api, markAsDone }}>{children}</context.Provider>
  );
};
// custom hook for global access
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
