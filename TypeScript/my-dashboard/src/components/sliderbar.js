import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SliderBar = () => {
    return (
        <div className="d-flex flex-column vh-100 bg-light border-end shadow-sm">
            <div className="p-3 bg-primary text-white text-center">
                <h4>Menu</h4>
            </div>
            <Nav className="flex-column p-3">
                <Nav.Item className="mb-2">
                    <Link to="/usuarios" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-people-fill me-2"></i> 
                        <span>Usuarios</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link to="/vehiculos" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-car-front-fill me-2"></i> 
                        <span>Vehículos</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link to="/reservas" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-calendar-check-fill me-2"></i> 
                        <span>Reservas</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link to="/espacios" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-building me-2"></i> 
                        <span>Espacios</span>
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default SliderBar;