import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/error";
import Loading from "../components/loading";
import Success from "../components/success";
import { registerUser } from "../redux/actions/userActions";
const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerState = useSelector((state) => state.registerRequest);
  const { error, loading, success } = registerState;
  const [cpassword, setCpassword] = useState("");
  function register() {
    if (password !== cpassword) alert("Password doesn't match");
    else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
      setName(" ");
      setEmail(" ");
      setPassword("");
      setCpassword("");
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 mb-4 text-left shadow p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User successfully Registerd" />}
          {error && <Error error="Something went wrong" />}
          <h2 className="text-center" style={{ fontSize: "30px" }}>
            Register
          </h2>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-3 form-control"
            />
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
            <input
              required
              type="password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Confirm Password"
              className="form-control"
            />
            <button className="btn mt-3 mb-4" onClick={register}>
              Register
            </button>
            <a className="mt-3" style={{ color: "black" }} href="/login">
              Click here to LogIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
