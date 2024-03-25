import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const FavouritesIndicator = function () {
  const favouritesLength = useSelector((state) => state.favourites.content.length);

  const navigate = useNavigate();
  return (
    <div>
      <Button className="d-flex align-items-center gap-2" onClick={() => navigate("/favourites")}>
        <FaStar />
        <span>{favouritesLength}</span>
      </Button>
    </div>
  );
};

export default FavouritesIndicator;
