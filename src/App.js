import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Leads from "./module/leadOverview/Leads";
import LeadDetail from "./module/leadDetail/LeadDetail";

export default function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light" expand="lg">
        <div className="px-3 d-flex">
          <Navbar.Brand as={Link} to="/">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/leads">Leads</Nav.Link>
              <Nav.Link as={Link} to="/lead-detail/12">Lead Detail</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="mt-4 px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/lead-detail/:id" element={<LeadDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
