import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleService from "./SingleService/SingleService";
import { ServiceType } from "./types";

import "./Services.css";

const Services = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const [allServices, setAllServices] = useState<ServiceType[]>([]);

  useEffect(() => {
    fetch("https://render-creative-agency-server.onrender.com/loadAll")
      .then((response) => response.json())
      .then((data) => {
        // console.log('length: ', allServices.length);
        setAllServices(data);
        console.log(data);
      });
  }, []);

  const serviceClicked = (title: string | undefined) => {
    console.log("serviceClicked:", title);
    // Todo :: protected route

    navigate("/dashboard/order");

    // history.push({
    //     pathname: '/dashboard/order',
    //     service: title
    // });
  };

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
          allServices.map((service) => (
            <SingleService
              service={service}
              key={service._id}
              serviceClicked={() => serviceClicked(service?.title)}
            ></SingleService>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
