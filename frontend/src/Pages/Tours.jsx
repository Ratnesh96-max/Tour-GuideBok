import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/NewsLetter";
import TourCard from "./../shared/TourCard";
import { Container, Row, Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../util/config";

const Tours = () => {
  const { data: tours } = useFetch(`${BASE_URL}/tours`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (tourCount) {
      const pages = Math.ceil(tourCount / 4);
      setPageCount(pages);
    }
  }, [tourCount]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tours?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour._id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
