import React, { useEffect } from "react";
import { useState } from "react";
import InputCustom from "../../Shared/Input/InputCustome";
import './Register.css'; 
import { useSelector, useDispatch } from "react-redux";
import {addUserInfo} from "../../Store/slices/formSlice"


function Register() {
  const dispatch = useDispatch();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const [userInfoErrs, setUserInfoErrors] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
    imageErr: null,
  });

  useEffect(() => {
    if (
      !userInfoErrs.nameErr &&
      !userInfoErrs.emailErr &&
      !userInfoErrs.passwordErr &&
      !userInfoErrs.confirmPasswordErr &&
      !userInfoErrs.imageErr &&
      isFormSubmitted
    ) {
      console.log("request ur api");
      dispatch(addUserInfo(userInfo));
    }
  }, [userInfoErrs, isFormSubmitted, dispatch ,userInfo]);

  
  // const handleChange(e) =>{
  //   switch (e.target.name){
  //     case "name":
  //       setUserInfo({
  //      ...userInfo,
  //         name: e.target.value,
  //       });
  //       break;
  //     case "email":
  //       setUserInfo({
  //      ...userInfo,
  //         email: e.target.value,
  //       });
  //       break;
  //     case "password":
  //       setUserInfo({
  //      ...userInfo,
  //         password: e.target.value,
  //       });
  //       break;
  //     case "confirmPassword":
  //       setUserInfo({
    //      ...userInfo,
    //         confirmPassword: e.target.value,
    //       });
    //       break;
    //     case "image":
    //       setUserInfo({
      //      ...userInfo,
      //         image: e.target.files[0],
      //       });
      //       break;
      //     default:
      //       break;
      //   }
      // }
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
          ...userInfo,
          [name]: value,
        });
      };
      const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserInfo({
      ...userInfo,
      image: file,
    });
  };

  const validateForm = () => {
    setUserInfoErrors({
      nameErr: !userInfo.name
        ? "Name is required"
        : userInfo.name.trim() === ""
        ? "Name should not contain spaces "
        : userInfo.name.includes(" ")
        ? "Name should not contain spaces "
        : "",
      emailErr: !userInfo.email
        ? "Email is required"
        : !userInfo.email.trim().match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
        ? "Invalid Email Address"
        : "",
      passwordErr: !userInfo.password
        ? "Password is required"
        : userInfo.password.length < 8
        ? "Password should be at least 8 characters"
        : userInfo.password.length > 12
        ? "Password should be at most 12 characters"
        : "",
      confirmPasswordErr: !userInfo.confirmPassword
        ? "Confirm Password is required"
        : userInfo.confirmPassword !== userInfo.password
        ? "Passwords do not match"
        : "",
      imageErr: !userInfo.image ? "Image is required" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    validateForm();
  };

  return (
    <div className="container">
      <h3 className="register-title text-center mt-4">Register</h3>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <form onSubmit={handleSubmit}>
            <InputCustom
              label="Name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              handleChange={handleChange}
              error={userInfoErrs.nameErr}
            />
            <InputCustom
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              handleChange={handleChange}
              error={userInfoErrs.emailErr}
            />
            <InputCustom
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
              handleChange={handleChange}
              error={userInfoErrs.passwordErr}
            />
            <InputCustom
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Re-type Your Password"
              handleChange={handleChange}
              error={userInfoErrs.confirmPasswordErr}
            />
            <div className="mb-3">
              <label className="form-label">Upload Image:</label>
              <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
              {userInfoErrs.imageErr && <div className="text-danger mt-1">{userInfoErrs.imageErr}</div>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
