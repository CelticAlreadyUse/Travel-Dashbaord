import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MainLayouts from "./layouts/MainLayouts";
import DashboardLayouts from "./layouts/DashboardLayouts";
function App() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home></Home>}></Route>
      </Route>
    <Route element={<DashboardLayouts/>}>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Route>
    </Routes>
  );
}

export default App;
