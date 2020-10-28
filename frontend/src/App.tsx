import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikl6RTZ0OElTd3VYbi05ZGhsekRnZyJ9.eyJpc3MiOiJodHRwczovL2Rldi0yenliOWMxei51cy5hdXRoMC5jb20vIiwic3ViIjoieDdoNEhVRWpDRU11cVlWUWY5VFI5cUVDMlgzMzNpcW5AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZXhhbXBsZS5jb20iLCJpYXQiOjE2MDM4NTUxNTcsImV4cCI6MTYwMzk0MTU1NywiYXpwIjoieDdoNEhVRWpDRU11cVlWUWY5VFI5cUVDMlgzMzNpcW4iLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.TOrFQ2JBntIsI5vjOyBjrf-ve5-6LUjJzcLcQvqwpjLoxjU1SxpgStPy94iYm4ubLJUgQzlVz_xZJ6XCMPWWjHhthIuLno56dJDvXjC4jEi74ALyFbUuT5rRZwZOpo-tBrkd5lVnFE8mqvoLxKh_yDh07K6zmp_fMhZ8MWUFN8TI6TKjNSBYMVS7B5fzLNuscYT_KRtuSNIUd_YulS7EO4DpCjqsOsVpERoG8VKcA4TQIgnTDrzH7EVTnmuz8_nvYW7OnK4xHJVlvY-u9JYLv10icMWxRujdoOVTIOu4eZEQU7MrJisBgNUW8XCXD79GXRGhXDsFGRc12_HeNg7yng";

function App() {
  const a = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/api/users", config)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    a();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
