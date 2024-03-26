import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Favourites = function () {
  const dispatch = useDispatch();
  const favouritesList = useSelector((state) => state.favourites.content);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto">
          <ul>
            {favouritesList.map((company, i) => {
              return (
                <li key={i} className="my-4">
                  <Button
                    className="me-2"
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: i,
                      });
                    }}
                  >
                    <FaTrash className="d-block" />
                  </Button>
                  <Link to={`/${company.company_name}`}>
                    <span>{company.company_name}</span>
                  </Link>
                  <span>{" - " + company.title}</span>
                </li>
              );
            })}
          </ul>
        </Col>
        <Row>
          <Col sm={10} className="fw-bold mx-auto">
            TOTALE: {favouritesList.length}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Favourites;
