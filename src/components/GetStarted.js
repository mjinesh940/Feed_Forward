import React from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .card-hover:hover {
            background-color: #f0f0ff;
            transform: scale(1.05);
            transition: transform 0.3s, background-color 0.3s;
          }
        `}
      </style>
      <div className="container-fluid text-center bg-warning-subtle" style={{ minHeight: "100vh" }}>
        <div className="row py-5">
          <div className="col py-3">
            <h1>WHAT ARE YOU UPTO?</h1>
          </div>
        </div>
        <div className="row py-3 px-5">
          <div className="col-lg-4 col-md-6 my-2 cursor-pointer d-flex">
            <div
              onClick={() => {
                localStorage.setItem("who", "Donor");
                navigate("/signup");
              }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle card-hover"
              style={{ cursor: "pointer"}}
            >
              <div className="card-header bg-light-subtle"><b>Organization/Donor</b></div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-shop"></i>
                </h5>
                <p className="card-text">For donating the food</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div
              onClick={() => {
                localStorage.setItem("who", "Delivery Person");
                navigate("/signup");
              }}
              className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle card-hover"
              style={{ cursor: "pointer" }}
            >
              <div className="card-header bg-light-subtle"><b>Delivery Person</b></div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-person-circle"></i>
                </h5>
                <p className="card-text">
                  For Delivering the donated food.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-2">
            <div className="card h-100 w-75 text-bg-light mb-3 m-auto bg-light-subtle card-hover">
              <div className="card-header bg-light-subtle"><b>Delivery status</b> (coming soon...)</div>
              <div className="card-body">
                <h5 className="card-title">
                  <i className="bi bi-cart-plus"></i>
                </h5>
                <p className="card-text">
                  For checking the delivery details status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
