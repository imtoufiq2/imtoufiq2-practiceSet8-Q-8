import { useGlobalHook } from "./Contexts";
import { NavLink } from "react-router-dom";
const DoneTodos = () => {
  const { api } = useGlobalHook();
  const totalOpenTodo = api.filter((cur) => {
    return cur.isCompleted;
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }}>
        Done Todos - <span>{totalOpenTodo.length}</span>
      </h1>
      {api.map((cur) => {
        return (
          cur.isCompleted && (
            <div key={cur.title}>
              <h1>{cur.title}</h1>
              <p>Description : {cur.description}</p>
              <NavLink to={`/about/${cur.id}`}>
                <button>Expnad Todo</button>
              </NavLink>
              <br /> <br />
            </div>
          )
        );
      })}
    </div>
  );
};

export default DoneTodos;
