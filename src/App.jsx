import { useState } from "react";
import Meteorology from "./Meteorology.jsx";

function App() {
  const [page, setPage] = useState();

  return (
    <>
      {/* <div>{page === "weather" && <Meteorology />}</div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${page === "weather" ? "active" : ""}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // 防止跳轉
                    setPage("weather");
                  }}
                >
                  氣象
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default App;
