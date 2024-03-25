import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesIndicator from "./components/FavouritesIndicator";
import Favourites from "./components/Favourites";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <FavouritesIndicator />
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
