import "./App.css";
import { React } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ScanMe from "./pages/ScanMe";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/scanme" element={<ScanMe />} />
      </Routes>
    </div>
  );
}

export default App;
