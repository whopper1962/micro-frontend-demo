import { Routes, Route } from "react-router-dom";
import SiginIn from "./SiginIn.tsx";
import TenantA from "tenantA/App";
import TenantB from "tenantB/App";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SiginIn />} />
        <Route path="/tenant-a" element={<TenantA />} />
        <Route path="/tenant-b" element={<TenantB />} />
      </Routes>
    </>
  );
}

export default App;
