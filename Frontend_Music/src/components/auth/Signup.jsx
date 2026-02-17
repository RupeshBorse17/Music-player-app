import React, { useState } from "react";
import Input from "../Common/input";
import { useDispatch, useSelector } from "react-redux";
import { clearError, setError, setLoading, setUser } from "../../redux/slices/authSlice";
import { closeAuthModal, switchAuthModal } from "../../redux/slices/UI_Slices";
import { CiUser } from "react-icons/ci";
import axios from "axios";
import "../../css/auth/Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  // Form States
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Avatar States
  const [previewImage, setPreviewImage] = useState("");
  const [base64Image, setBase64Image] = useState("");

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreviewImage(reader.result);
      setBase64Image(reader.result);
    };
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());

    if (!fullname || !email || !password) {
      dispatch(setError("Please fill all fields"));
      return;
    }

    dispatch(setLoading(true));

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/signup`, {
        name: fullname,
        email,
        password,
        avatar: base64Image ? base64Image : undefined,
      });

      const data = res.data || {};

      dispatch(setUser({
        user: data.user,
        token: data.token,
      }));

      localStorage.setItem("token", data.token);
      dispatch(closeAuthModal());
      console.log("Signup Successful");
    } catch (error) {
      const serverMessage = error.response?.data?.message || error.message;
      dispatch(setError(serverMessage || "Signup Failed. Please try again"));
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-title">Create an Account</div>
      <p className="signup-subtitle">Join us today by entering your details</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Profile Image */}
        <div className="profile-image-container">
          {previewImage ? (
            <img src={previewImage} alt="avatar" className="profile-image" />
          ) : (
            <div className="profile-placeholder">
              <CiUser size={40} />
            </div>
          )}

          <label className="image-upload-icon">
            📷
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </label>
        </div>

        {/* Inputs */}
        <Input
          label="Name"
          type="text"
          value={fullname}
          placeholder="Enter your name"
          onChange={(e) => setFullname(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Switch to Login */}
        <span
          className="forgot-link"
          onClick={() => {
            dispatch(clearError());
            dispatch(switchAuthModal("Login"));
          }}
        >
          Already have an account?
        </span>

        {/* Error Message */}
        {error && <div className="signup-error">{error}</div>}

        {/* Submit Button */}
        <div className="signup-actions">
          <button className="signup-btn-submit" type="submit" disabled={isLoading}>
            <span>{isLoading ? "Signing Up..." : "Signup"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;



