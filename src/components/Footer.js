import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Footer() {
  const [email, SetEmail] = useState("");
  const notify = () => toast.success("Thanks for subscribing");
  const err = () => toast.error("enter a valid data");
  const subscribe = () => {
    if (
      email !== "" &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      notify();
      SetEmail("");
    } else {
      err();
    }
  };
  return (
    <footer className="mt-4 bg-dark text-center text-white">
      <div className="p-4 pb-0">
        <Toaster />
        <section>
          <form>
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Subscribe for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-outline-light mb-4"
                  onClick={subscribe}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">© 2023 Dream max</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
