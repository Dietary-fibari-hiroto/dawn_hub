import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ScrollReset from "./hooks/ScrollReset";
import AssemblyRoutes from "./routes/AssemblyRoutes";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollReset />
        <AssemblyRoutes />
      </Router>
    </div>
  );
}

export default App;
