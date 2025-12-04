import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ListFavorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const favoriteIds = Object.keys(favorites).filter((id) => favorites[id]);
  const starred = useSelector((state) => state.favorites[data._id]);
  const favoriteJobs = data.filter((job) => favoriteIds.includes(job._id));

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 text-center">
          <h1 className="display-1">Favorites!</h1>
          <Link to="/">Go Back</Link>
        </Col>

        <Col xs={10} className="mx-auto">
          {favoriteJobs.length === 0 && <p>No favorites yet!</p>}
          {favoriteJobs.map((job) => (
            <div key={job._id}>
              <button
                className="fs-4 border-0 bg-transparent"
                onClick={() => {
                  dispatch({
                    type: "set_favorite",
                    payload: job._id,
                  });
                }}>
                {starred ? "☆" : "★"}
              </button>
              {job.title} — {job.company_name}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ListFavorites;
