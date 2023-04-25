import Home from "./Home";
import DoneTodos from "./DoneTodos";
import OpenTodos from "./OpenTodos";
import Error from "./Error";
import SinglePage from "./SinglePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donetodos" element={<DoneTodos />} />
          <Route path="/opentodos" element={<OpenTodos />} />
          <Route path="/about/:id" element={<SinglePage />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
