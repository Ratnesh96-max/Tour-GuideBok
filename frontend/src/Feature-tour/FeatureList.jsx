import React from "react";
import TourCard from "../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../util/config";

const FeaturedTourList = () => {
  const { data: featuredTours } = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTour`
  );
  console.log(featuredTours);
  return (
    <>
      {featuredTours?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
