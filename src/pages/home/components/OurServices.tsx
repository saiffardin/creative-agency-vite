import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "@components/ProductCard";
import { useGetServices } from "@hooks/useGetServices";

const OurServices = () => {
  const { allServices, getAllServices } = useGetServices();

  // const history = useHistory();
  const navigate = useNavigate();

  const serviceClicked = (title: string | undefined) => {
    console.log("serviceClicked:", title);
    // Todo :: protected route

    navigate("/dashboard/order");

    // history.push({
    //     pathname: '/dashboard/order',
    //     service: title
    // });
  };

  useEffect(() => {
    getAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="OurTeam"
      className="services-div d-flex flex-column align-items-center"
    >
      <h1 className="text-center">
        Provide awesome <span>services</span>
      </h1>

      <div className="my-3 container d-flex justify-content-center flex-wrap">
        {allServices.length < 1 ? (
          <h1>Loading...</h1>
        ) : (
          allServices.map((service, indx) => (
            <ProductCard
              key={indx}
              containerClassNames="single-service-div"
              onCardClick={() => serviceClicked(service.title)}
              imgUrl={`data:image/png;base64,${service.img.imgType}`}
              imgClassNames="comp-img"
              title={service.title}
              description={service.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OurServices;
