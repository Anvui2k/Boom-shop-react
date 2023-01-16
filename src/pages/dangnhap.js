import React from "react";
import { Link } from "react-router-dom";
function Dangnhap() {
  return (
    <>
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-sm-8 col-lg-5">
            <div class="card bg-black">
              <div class="card-header bg-dark text-white">
                <h4 class="card-title mb-0">
                  <i class="bi-grid-3x3-gap-fill"></i> Login
                </h4>
              </div>
              <div class="card-body bg-white rounded-bottom">
                <form id="form-login">
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-3 col-form-label">
                      User name
                    </label>
                    <div class="col-sm">
                      <input type="text" class="form-control" id="inputName" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-3 col-form-label">
                      Password
                    </label>
                    <div class="col-sm">
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="offset-sm-3 col-auto">
                      <button type="submit" class="btn btn-dark" id="btnAdmin">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dangnhap;
