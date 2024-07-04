import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddPatient from './pages/AddPatient';
import ViewPatients from './pages/ViewPatients';
import AddMedicine from './pages/AddMedicine';
import UpdateMedicine from './pages/UpdateMedicine';
import DeleteMedicine from './pages/DeleteMedicine';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/add-patient" element={<AddPatient />} />
            <Route path="/view-patients" element={<ViewPatients />} />
            <Route path="/add-medicine" element={<AddMedicine />} />
            <Route path="/update-medicine" element={<UpdateMedicine />} />
            <Route path="/delete-medicine" element={<DeleteMedicine />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
