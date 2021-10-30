import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/error";
import Loading from "../components/loading";
import Success from "../components/success";
import { loginUser } from "../redux/actions/userActions";
const LoginScreen = () => {
  const loginState = useSelector((state) => state.loginUser);
  const { loading, success, error } = loginState;
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function logIn() {
    const user = {
      email,
      password,
    };
    dispatch(loginUser(user));
    setEmail(" ").trim();
    setPassword("").trim();
  }
  return (
    <div>
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mt-5 mb-3 text-left shadow p-3 mb-5 bg-white rounded">
            {loading && <Loading />}
            {error && <Error error="Invalid Cridential" />}
            <h2 className="text-center" style={{ fontSize: "30px" }}>
              Login
            </h2>
            <div>
              <input
                required
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3 form-control"
              />
              <input
                required
                type="password"
                placeholder="password"
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="btn mt-3 mb-3" onClick={logIn}>
                LogIn
              </button>
              <br />
              <a className="mt-2" style={{ color: "black" }} href="/register">
                Click here to Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
