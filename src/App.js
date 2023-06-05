import { Route, Routes } from "react-router-dom";
import { ForgotPassword, Home, Login, Register } from "./pages";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element = {<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
