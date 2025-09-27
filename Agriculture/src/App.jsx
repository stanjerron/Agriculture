import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "./components/Frontpage";
import LoginPage from "./components/Loginpage";
import Signuppage from "./components/Signuppage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/Signup" element={<Signuppage/>} />
      
      </Routes>
    </Router>
  )
}
export default App;
