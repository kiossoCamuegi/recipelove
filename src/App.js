import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFounded from "./NotFounded";

 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFounded />} />
      </Routes>
    </Router>
  );
}

export default App;
