import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import CreateAccout from "./pages/CreateAccout";
import Success from "./pages/Success";
import Error from "./pages/Error";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Welcome></Welcome>}></Route>
    <Route path="welcome" element={<Welcome></Welcome>}></Route>
    <Route path="create-account" element={<CreateAccout></CreateAccout>}></Route>
    <Route path="success" element={<Success></Success>}></Route>
    <Route path="error" element={<Error></Error>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
