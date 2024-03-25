import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FavouritesIndicator from "./FavouritesIndicator";
const Favourites = function () {
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5"></Col>
      </Row>
    </Container>
  );
};

export default Favourites;
