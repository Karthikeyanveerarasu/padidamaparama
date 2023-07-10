import { useState } from "react";
const Contact = () => {
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [comment, SetComment] = useState("");

  return (
    <div class="container mt-3">
      <div class="callback d-flex flex-column align-items-center justify-content-center">
        <div class="heading d-flex flex-column align-items-center justify-content-center">
          <span class="fas fa-headphones"></span>
          <p class="h-1 mt-3">Get a Call Back</p>
          <p class="p-1 fs-6 mt-3 text-center">
            Leave your phone number.we will call back
          </p>
        </div>
        <div class="d-md-flex">
          <div class="row">
            <div class="col-md-5 col-12 me-md-4">
              <input class="form-control" type="text" placeholder="Your Name" />
            </div>
            <div class="col-md-5 col-12 ms-md-1">
              <input class="form-control" type="text" placeholder="Phone No" />
            </div>
          </div>
          <div class="btn btn-primary btn-dark">Submit</div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
