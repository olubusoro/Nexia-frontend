import "./App.css";
import Bar from "./Components/Bar";
import Dashboard from "./Pages/Dashboard";
import Task from "./Pages/Task";
import Update from "./Pages/Update";
import Announcement from "./Pages/Announcement";
import Withdraw from "./Pages/Withdraw";
import Referral from "./Pages/Referral";
import Bind from "./Pages/Bind";
import Share from "./Pages/Share"
import Roulette from "./Pages/Roulette"

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Bar />
      <div className="flex-grow">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/task" element={<Task />}>
            <Route path="share" element={<Share />} />
          </Route>
          <Route path="/update" element={<Update />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route>
          <Route path="/withdraw" element={<Withdraw />}/>
            <Route path="/bind" element={<Bind />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
