import { useEffect, useState } from "react";
import SingleReview from "./SingleReview/SingleReview";
import { ReviewType } from "./types";
import "./ClientReview.css";

const ClientReview = () => {
  const [allReviews, setAllReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    fetch("https://render-creative-agency-server.onrender.com/loadAllReviews")
      .then((response) => response.json())
      .then((data) => {
        setAllReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <main className="mt-5 ClientReview-div d-flex flex-column align-items-center">
      <h1 className="my-5 text-center">
        Clients <span>Feedback</span>
      </h1>

      <section className="mt-5 d-flex justify-content-center flex-wrap">
        {allReviews.map((review) => (
          <SingleReview review={review} key={review._id}></SingleReview>
        ))}
      </section>
    </main>
  );
};

export default ClientReview;
