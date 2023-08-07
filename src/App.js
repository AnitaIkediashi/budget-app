import { Route, Routes} from "react-router-dom";
import { Dashboard, ForgotPassword, Home, Login, Register } from "./pages";
import { UserProvider } from "./context/UserAuth";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </UserProvider>
  );
}

export default App;
