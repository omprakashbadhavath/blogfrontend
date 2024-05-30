import "./Signin.css";
import { useForm } from "react-hook-form";
import {useDispatch,useSelector}  from 'react-redux';
import { userAuthorLoginThunk } from "../../redux/slices/userAuthorSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Signin() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let dispatch=useDispatch()
  let {loginUserStatus,currentUser,errorOccurred,errMsg}=useSelector(state=>state.userAuthoruserAuthorLoginReducer)
  let navigate=useNavigate()
 

  function onSignInFormSubmit(userCred) {
    console.log(userCred)
    dispatch(userAuthorLoginThunk(userCred))
  }
  useEffect(() => {
    if (loginUserStatus) {
      if (currentUser.userType === "user") {
        navigate("/user-profile");
      }
      if (currentUser.userType === "author") {
        navigate("/author-profile");
      }
    }
  }, [loginUserStatus]);

 

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Signin</h2>
            </div>
            <div className="card-body">
            {errorOccurred === true && (
                <p className="text-center" style={{ color: "var(--crimson)" }}>
                  {errMsg}
                </p>
              )}
            
              <form onSubmit={handleSubmit(onSignInFormSubmit)}>
                {/* radio */}
                <div className="mb-4">
                  <label
                    htmlFor="user"
                    className="form-check-label me-3"
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--light-dark-grey)",
                    }}
                  >
                    Login as
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="author"
                      value="author"
                      {...register("userType")}
                    />
                    <label htmlFor="author" className="form-check-label">
                      Author
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="user"
                      value="user"
                      {...register("userType")}
                    />
                    <label htmlFor="user" className="form-check-label">
                      User
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    {...register("username")}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register("password")}
                  />
                </div>

                <div className="text-end ">
                  <button type="submit" className="text-info">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
