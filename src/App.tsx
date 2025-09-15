import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./layout/Sidebar/Sidebar";
import { Chat } from "./pages/Chat";
import galaxy2 from "./assets/backgrounds/Galaxy 2.png";
import miniStars from "./assets/backgrounds/Mini Stars.png";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen relative">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </main>
        <div className="absolute top-0 left-0 -z-10 bg-background w-screen h-full">
          <img
            src={miniStars}
            alt=""
            className="absolute left-0 opacity-50 w-screen top-1/2 -translate-y-1/2"
          />
          <img
            src={galaxy2}
            alt=""
            className="absolute left-0 mix-blend-luminosity w-screen top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
