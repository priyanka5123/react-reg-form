import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import Form from "./form";
import UsersTable from "./UsersTable";

function App() {
  const [users, setUsers] = useState([
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" },
  ]);  
  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  return (
    <>
      <NavBar />

      <div className="d-flex justify-content-center">
        <div className="w-100 px-3" style={{ maxWidth: "900px" }}>
          <Routes>
            <Route path="/" element={
              <>
              <Form addUser={addUser} />
              </>} />
            <Route path="/users" element={<UsersTable users={users} />} />
            <Route
              path="/about"
              element={<h2 className="text-center mt-4">About Page</h2>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
