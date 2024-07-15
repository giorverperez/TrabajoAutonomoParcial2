import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SliderBar from './components/sliderbar';
import Usuarios  from "./components/Usuarios";
import Espacios from "./components/espacios";
import Vehiculos from "./components/vehiculo";
import Reservas from './components/reserva';
const App = () => {
    return (
        <Router>
            <div className="d-flex">
                <SliderBar />
                <div className="flex-grow-1 p-3">
                    <Routes>
                        <Route path="/usuarios" element={<Usuarios />} />
                        <Route path="/vehiculos" element={<Vehiculos />} />
                        <Route path="/reservas" element={<Reservas />} />
                        <Route path="/espacios" element={<Espacios />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;