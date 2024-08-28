import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#4c527b";
      showAlert("Darkmode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={ <TextForm
          heading="Try TextUtils - Word counter Character Counter"
          mode={mode}
          showAlert={showAlert}
        />}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
