import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AssemblyRoutes from "./routes/AssemblyRoutes"

function App() {
  return (
    <Router> {/* この部分でRouterを使っている */}
      <div className="App">
        <AssemblyRoutes />
      </div>
    </Router>
  );
}

export default App;
