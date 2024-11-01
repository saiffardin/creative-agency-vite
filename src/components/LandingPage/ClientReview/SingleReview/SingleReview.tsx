import "./SingleReview.css";

import { Card } from "react-bootstrap";
import { ReviewType } from "../types";

interface Props {
  review: ReviewType;
}

const SingleReview = (props: Props) => {
  const { photoURL, name, company, description } = props.review;
  // console.log('img: ',photoURL);

  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <div className="d-flex m-2 p-2">
        <img className="customer-img" src={photoURL} alt="review" />
        <div className="customer-info p-2">
          <h5>{name}</h5>
          <p className="mb-0">{company}</p>
        </div>
      </div>
      <Card.Body>
        <Card.Text className="text-black-50">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleReview;
