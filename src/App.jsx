import { useState } from "react";
import { List } from "./components/List";
function App() {
  const [list, setList] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleCreateNewNameList() {
    event.preventDefault();

    setList([...list, {firstName, lastName}])

    setFirstName('')
    setLastName('');
  }

  function getFirstNamePerson() {
    setFirstName(event.target.value);
  }

  function getLastNamePerson() {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Lista de Convidados</h1>

      <form onSubmit={handleCreateNewNameList}>
        <div className="input-group mb-3">
          <span className="input-group-text">First Name:</span>
          <input name="firstName" type="text" className="form-control" onChange={getFirstNamePerson} value={firstName} />
          <span className="input-group-text">Last Name:</span>
          <input name="lastName" type="text" className="form-control" onChange={getLastNamePerson} value={lastName} />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" className="btn btn-success">Cadastrar</button>
        </div>
        
      </form>

      <List list={list}/>
    </div>
  );
}

export default App;
