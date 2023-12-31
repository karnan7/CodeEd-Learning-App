import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import CoursePage from "./Pages/CoursePage";
import DetailPage from "./Pages/DetailPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/details/:courseId" element={<DetailPage />} />
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
