import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Main from "./Main";
import User from "./User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/users/:userName" element={<User />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
