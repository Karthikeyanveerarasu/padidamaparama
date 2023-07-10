import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Project from "../Project";
const Contactpage = () => {
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [comment, SetComment] = useState("");

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage:
            'url("https://c1.wallpaperflare.com/preview/523/376/1002/paper-hand-business-card.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "80%",
          margin: "auto",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
        }}
      >
        <h3 class="display-2 m text-dark text-uppercase">Contact us</h3>
      </div>
      <section id="contact" class="container mt-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="img-fluid">
                <div
                  class="bg-image p-3 text-center shadow-1-strong rounded text-white"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1556014633-e65544133b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmRpbmclMjBhbG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80')"
                  }}
                >
                  <div className="my-3">
                    <Fade left>
                      {" "}
                      <h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="18"
                          fill="currentColor"
                          class="bi bi-telephone"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
                        </svg>
                        <span>Mobile</span>
                      </h5>
                    </Fade>{" "}
                    <p className="my-4 text-center">04324 272155, 270755</p>
                  </div>
                  <div className="my-5">
                    <Fade left>
                      {" "}
                      <h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="18"
                          fill="currentColor"
                          class="bi bi-envelope"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        <span>Email Id</span>
                      </h5>{" "}
                    </Fade>
                    <p className="my-4 text-center">principal@mkce.ac.in</p>
                  </div>
                  <div className="my-5">
                    <Fade left>
                      {" "}
                      <h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="20"
                          fill="currentColor"
                          class="bi bi-geo-alt"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span>Address</span>
                      </h5>
                    </Fade>
                    <p className="my-4 text-center">
                      M.Kumarasamy College of Engineering,Karur
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.791826924626!2d78.04587737404037!3d11.054228589111911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2c5940c36779%3A0x638aea1962e8ae96!2sM.Kumarasamy%20College%20of%20Engineering%2C%20Autonomous%20(Accredited%20with%20A%20grade%20by%20NAAC)!5e0!3m2!1sen!2sin!4v1688657150279!5m2!1sen!2sin"
                  title="Google Map"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
        <div class="mt-4">
          <Project />
        </div>
        <div class="mt-4">
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Contactpage;
