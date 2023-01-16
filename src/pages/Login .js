import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container h-100">
      <div className="row justify-content-center h-100 align-items-center">
        <div className="col-sm-8 col-lg-5">
          <div className="card bg-black">
            <div className="card-header text-white">
              <h4 className="card-title mb-0"><i className="bi-grid-3x3-gap-fill" /> Login</h4>
            </div>
            <div className="card-body bg-white rounded-bottom">
              <form id="form-login"> 
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">User name</label>
                  <div className="col-sm">
                    <input type="text" className="form-control" id="inputName" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm">
                    <input type="password" className="form-control" id="inputPassword" />
                  </div>
                </div>
                <div className="row">
                  <div className="offset-sm-3 col-auto">
                    <button type="submit" className="btn btn-dark" id="btnAdmin">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
