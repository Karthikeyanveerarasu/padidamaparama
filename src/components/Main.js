import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "./HomeStyles.css";
export default function Main() {
  const [code, SetCode] = useState("");
  const navigate = useNavigate();
  const validate = () => {
    if (code === "2023") {
      localStorage.setItem("isAuth", "true");
      navigate("/home");
    }
  };
  return (
    <>
      <div className="container  d-flex align-items-center justify-content-center vh-100">
        <div className="card main">
          <div className="card-body">
            <div className="text-center">
              <svg
                id="logo-16"
                width="60"
                height="50"
                viewBox="0 0 109 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
                  class="ccompli1"
                  fill="#FFD200"
                ></path>{" "}
                <path
                  d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
                  class="ccompli2"
                  fill="#06E07F"
                ></path>{" "}
                <path
                  d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
                  class="ccustom"
                  fill="#E3073C"
                ></path>{" "}
                <path
                  d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
                  class="ccustom"
                  fill="#1F84EF"
                ></path>{" "}
              </svg>
              <span className="mx-2 fs-4">Dream Max</span>
              <div className="w-100 d-flex justify-content-center">
                <div style={{ width: "80%" }}>
                  <div class="alert alert-danger mt-4" role="alert">
                    This website is Password Protected !
                  </div>
                </div>
              </div>

              <p class="text-center mt-4">Enter the passcode to Enter :</p>

              <div className="w-100 d-flex justify-content-center mt-3">
                <div className="w-50 ">
                  <input
                    type="text"
                    placeholder="passcode"
                    onChange={(e) => SetCode(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-dark px-4 py-2 mt-3" onClick={validate}>
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
