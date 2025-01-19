import { useState } from "react";
import { GlobalProvider, useGlobalContext } from "../contexts/GlobalContext";
function HeaderComponent() {
  const { search } = useGlobalContext();
  const [query, setQuery] = useState("");

  function handleInput(e) {
    setQuery(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    search(query)
  }
  return (
    <header>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" id="headNav">BoooBFlix</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="query" id="query" onChange={handleInput} />
            <button className="btn btn-outline-danger" type="search" onClick={handleClick}>Search</button>
          </form>
        </div>
      </nav>
    </header>


  )

}

export default HeaderComponent;
