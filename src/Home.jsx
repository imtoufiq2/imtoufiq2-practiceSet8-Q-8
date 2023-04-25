import { useGlobalHook } from "./Contexts";

const Home = () => {
  const { api, markAsDone } = useGlobalHook();

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }}>Home</h1>
      {api.map((cur) => {
        return (
          <div
            key={cur.title}
            style={{ textDecoration: cur.isCompleted ? "line-through" : "" }}
          >
            <h1>{cur.title}</h1>
            <p>Description : {cur.description}</p>
            <h3>Status : {cur.isCompleted ? "Done" : "Open"}</h3>
            <button
              onClick={() => markAsDone(cur.id)}
              disabled={cur.isCompleted}
            >
              Mark As Done
            </button>
            <br /> <br />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
