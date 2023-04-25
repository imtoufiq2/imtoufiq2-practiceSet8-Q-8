import { useParams } from "react-router-dom";
import { useGlobalHook } from "./Contexts";

const SinglePage = () => {
  const { api } = useGlobalHook();
  const { id: ids } = useParams();
  const filteringData = api.filter((cur) => {
    return cur.id == ids;
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textDecoration: "underline" }}>Todo Description</h1>
      {filteringData.map((cur) => {
        return (
          <div key={cur.title}>
            <h1>{cur.title}</h1>
            <p>Description : {cur.description}</p>
            <h3>Status : {cur.isCompleted ? "Done" : "Open"}</h3>
            <br /> <br />
          </div>
        );
      })}
    </div>
  );
};

export default SinglePage;
