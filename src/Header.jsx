import { NavLink } from "react-router-dom";
import { useGlobalHook } from "./Contexts";
const Header = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
    fontSize: "30px",
    textDecoration: "none",
  });
  const { api } = useGlobalHook();
  const totalDoneTodo = api.filter((cur) => {
    return cur.isCompleted;
  });
  const totalOpenTodo = api.filter((cur) => {
    return !cur.isCompleted;
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "black",
        color: "white",
        padding: "20px 0",
        textDecoration: "none",
      }}
    >
      <NavLink to="/" style={getActiveStyle}>
        Home
      </NavLink>
      <NavLink to="/donetodos" style={getActiveStyle}>
        DoneTodos ({totalDoneTodo.length})
      </NavLink>
      <NavLink to="/opentodos" style={getActiveStyle}>
        OpenTodos ({totalOpenTodo.length})
      </NavLink>
    </div>
  );
};

export default Header;
