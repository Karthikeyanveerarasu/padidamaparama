import { BiHappy } from "react-icons/bi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";
import { useState } from "react";
export default function Project() {
  const [counter, setcounter] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setcounter(true)}
        onExit={() => setcounter(false)}
      >
        <div class="container">
          <div class="row">
            <div class="four col-md-3 shadow">
              <div class="counter-box">
                <BiHappy className="fs-1" />
                <span class="counter mt-3">
                  {counter && (
                    <CountUp start={0} end={1000} duration={2} delay={0} />
                  )}
                  +
                </span>
                <p className="text-center">Happy Customers</p>
              </div>
            </div>
            <div class="four col-md-3 shadow">
              <div class="counter-box">
                <FaUsers className="fs-1" />
                <span class="counter mt-3">
                  {counter && (
                    <CountUp start={0} end={3200} duration={2} delay={0} />
                  )}
                  +
                </span>
                <p className="text-center">Registered Members</p>
              </div>
            </div>
            <div class="four col-md-3 shadow">
              <div class="counter-box">
                <FaShoppingCart className="fs-1" />
                <span class="counter mt-3">
                  {counter && (
                    <CountUp start={0} end={50} duration={2} delay={0} />
                  )}
                  +
                </span>
                <p className="text-center">Available Courses</p>
              </div>
            </div>
            <div class="four col-md-3 shadow">
              <div class="counter-box">
                <MdCloudDone className="fs-1" />
                <span class="counter mt-3">
                  {counter && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  +
                </span>

                <p className="text-center">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
