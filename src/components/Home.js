import Footer from "./Footer";
import "./HomeStyles.css";
import Navbar from "./Navbar";
import React from "react";
import "./Tech.css";
import { useEffect } from "react";
import { useLottie } from "lottie-react";
import Comp from "../animation/Comp.json";
import Service from "./Service";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Company from "./Company";
import Project from "../Project";
function Home() {
  const options = {
    animationData: Comp,
    loop: true
  };
  const { View } = useLottie(options);
  const navigate = useNavigate();
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "3cf485f7d8a649db4d55506b3594b428d",
        popupWidget: true,
        automaticChatOpenOnNavigation: true
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="container mt-4">
          <div class="row">
            <div class="col-md-12 col-lg-7 col-sm-12  mt-2">
              <div class="text-center ">
                <div class="mt-3">
                  <h3 class="banner_title mt-5">Laugh, Learn, Repeat</h3>
                  <p class="mt-4">
                    Welcome to our learning website, where knowledge and growth
                    intertwine. Our platform offers a vast array of educational
                    resources, empowering you to expand your horizons and
                    acquire new skills. But that's not all! We also provide
                    exciting freelancing opportunities, allowing you to apply
                    your newfound expertise and earn while doing what you love.
                    Join our vibrant community of learners and professionals,
                    where collaboration and innovation thrive.
                  </p>
                  <button
                    class="btn btn-dark mt-4"
                    onClick={() => navigate("/tech")}
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
            <div class="d-md-block  col-md-12  col-lg-5 col-sm-12">
              <div class="text-center lottie-animation ">{View}</div>
            </div>
          </div>
        </div>
        <div class="container" id="service">
          <Service />
        </div>
      </div>
      <div className="mt-4">
        <Company />
      </div>
      <div class="mt-4">
        <div class="text-center">
          <h3 class="banner_title mt-5">Let&apos;s connect</h3>
        </div>
        <Contact />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Home;
