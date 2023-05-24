import "./App.css";
import "./Pages/med.css";
import React, { useState, useEffect } from 'react';
import Header from "./Component/Header";
import About from "./Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Component/Dashboard";
import MyList from "./Pages/MyList/MyList";
import FAQ from "./Pages/FQA/FAQ";
import QuestionForm from "./Pages/FQA/QuestionForm";
import Identifier from "./Pages/Identifier/Identifier";
import MainNews from "./Pages/News/MainNews";
import MedicineCompare from "./Pages/MedCompare/MedicineCompare";
import BMI from "./Pages/MedCompare/BMI";
import DrugSearch from "./Pages/DrugCondition/DrugSearch";
import Logout from "./Pages/Auth/Logout";
import Database from "./Component/Database";
import Axios from 'axios';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  
  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');

    if (storedLoggedInStatus === 'true' && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user.username);
    // Store login status in local storage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', user.username);
  };

  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    // Clear login status from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };
    // Send login status and username with every Axios request
    Axios.defaults.headers.common['isLoggedIn'] = isLoggedIn;
    Axios.defaults.headers.common['username'] = username;

  return (

    <div className="background">
      <Router>
      <Header
          title="PharmaGuide"
          isLoggedIn={isLoggedIn}
          username={username}
          handleLogout={handleLogout}
        />        <Routes>
          <Route index path="/" element={<Dashboard isLoggedIn={isLoggedIn}/>}></Route>
          <Route  path="/about" element={<About />}></Route>
          <Route  path="/login" element={<Login handleLogin={handleLogin} />}></Route>
          <Route  path="/logout" element={<Logout handleLogout={handleLogout}/>}></Route>          
          <Route  path="/signup" element={<Signup />}></Route>
          <Route  path="/MedicineCompare" element={<MedicineCompare />}></Route>
          <Route  path="/MyList" element={<MyList/>}></Route>
          <Route path="/FAQ" element={<FAQ isLoggedIn={isLoggedIn}/>}></Route>
          <Route path="/QuestionForm" element={<QuestionForm/>}></Route>
          <Route path= "/Identifier" element={<Identifier/>}></Route>
          <Route path="/MainNews" element={<MainNews/>}></Route>
          <Route path="/BMI" element={<BMI/>}></Route>
          <Route path="/DrugSearch" element={<DrugSearch/>}></Route>
          <Route path="/Database" element={<Database/>}></Route>







        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
