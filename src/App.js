import { Route, Routes } from "react-router-dom";
import { Dashboard, ForgotPassword, Home, Login, Register } from "./pages";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element = {<ForgotPassword />} />
        <Route path="/dashboard" element = {<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
