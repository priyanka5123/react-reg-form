import Form from './form'
import Navbar from './NavBar'
import UsersTable from './UsersTable';
import './App.css'

function App() {
  const users = [
      { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
      { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" },
      { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice@example.com" },
    ];

  return (
    <>
      <Navbar/>
      <Form/>
      <UsersTable users={users}/>
    </>
  )
}

export default App
