import Data from "./Data";
import AddData from "./Adduser";
import { Edit } from "./editUser";
import { Delete } from "./DeleteUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={  <Data/>} />
        <Route path="/AddData" element={  <AddData/>} />
        <Route path="/Edit" element={  <Edit/>} />
        <Route path="/Delete" element={  <Delete/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
