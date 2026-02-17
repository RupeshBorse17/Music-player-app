



// import React, { useState } from "react";
// import Input from "../Common/input";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   clearError,
//   setError,
//   setLoading,
//   setUser,
//   closeAuthModal,
// } from "../../redux/slices/authSlice";
// import { switchAuthModal } from "../../redux/slices/UI_Slices";
// import "../../css/auth/Login.css";

// import axios from "axios";
// import validator from "validator";

// const Login = () => {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   // forgot password states
//   const [forgotEmail, setforgotEmail] = useState("");
//   const [forgotMsg, setforgotMsg] = useState("");

//   const dispatch = useDispatch();

//   const { isLoading, error } = useSelector((state) => state.auth);
//   const { authMode } = useSelector((state) => state.ui);

//   // ✅ FIXED (must match "forgot")
//   const isforgot = authMode === "forgot";

//   // ---------------- LOGIN ----------------
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     dispatch(clearError());

//     if (!validator.isEmail(email)) {
//       dispatch(setError("Please enter a valid email address"));
//       return;
//     }

//     if (!password) {
//       dispatch(setError("Please enter your password"));
//       return;
//     }

//     dispatch(setLoading(true));

//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
//         {
//           email,
//           password,
//         }
//       );

//       const data = res.data || {};

//       dispatch(
//         setUser({
//           user: data.user,
//           token: data.token,
//         })
//       );

//       localStorage.setItem("Token", data.token);

//       dispatch(closeAuthModal());

//       console.log("Login successful");
//     } catch (error) {
//       const serverMessage =
//         error?.response?.data?.message || error?.response?.data?.error;

//       dispatch(setError(serverMessage || "Login Failed"));
//     }
//   };

//   // ---------------- FORGOT PASSWORD ----------------
//   const handleForgotpassword = async () => {
//     if (!forgotEmail) {
//       setforgotMsg("Please enter your email ❌");
//       return;
//     }

//     if (!validator.isEmail(forgotEmail)) {
//       setforgotMsg("Please enter a valid email address ❌");
//       return;
//     }

//     try {
//       setforgotMsg("Sending reset link... ⏳");

//       await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/auth/forgot-password`,
//         {
//           email: forgotEmail,
//         }
//       );

//       setforgotMsg("Reset link sent! Check your Email 📧✅");
//     } catch (error) {
//       setforgotMsg(
//         error?.response?.data?.message || "Failed to send reset email ❌"
//       );
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <h3 className="login-title">
//         {isforgot ? "Forgot Password" : "Welcome Back"}
//       </h3>

//       <p className="login-subtitle">
//         {isforgot
//           ? "Enter your registered email to reset password"
//           : "Please enter your details to login"}
//       </p>

//       <form className="login-form" onSubmit={handleLogin}>
//         {/* ---------------- LOGIN FORM ---------------- */}
//         {!isforgot && (
//           <>
//             <Input
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//               label={"Email Address"}
//               placeholder={"xyz@gmail.com"}
//               type="email"
//             />

//             <Input
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               label="Password"
//               placeholder={"Min 8 Character"}
//               type="password"
//             />
//           </>
//         )}

//         {/* ---------------- FORGOT PASSWORD UI ---------------- */}
//         <div className="forgot-wrapper">
//           {!isforgot ? (
//             <>
//               <span
//                 className="forgot-link"
//                 onClick={() => {
//                   dispatch(clearError());
//                   dispatch(switchAuthModal("forgot"));
//                 }}
//               >
//                 Forgot password?
//               </span>

//               <span
//                 className="forgot-link"
//                 onClick={() => {
//                   dispatch(clearError());
//                   dispatch(switchAuthModal("signup")); // ✅ FIXED
//                 }}
//               >
//                 Don't have an account? Sign up
//               </span>
//             </>
//           ) : (
//             <div className="forgot-box">
//               <Input
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your registered email"
//                 value={forgotEmail}
//                 onChange={(e) => setforgotEmail(e.target.value)}
//               />

//               {forgotMsg && <p className="forgot-msg">{forgotMsg}</p>}

//               <button
//                 type="button"
//                 className="forgot-btn"
//                 onClick={handleForgotpassword}
//               >
//                 Send the Reset Link
//               </button>

//               {/* Back to Login */}
//               <span
//                 className="forgot-link"
//                 onClick={() => {
//                   setforgotMsg("");
//                   dispatch(clearError());
//                   dispatch(switchAuthModal("Login"));
//                 }}
//               >
//                 Back to Login 🔙
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="login-error">{error}</div>}

//         {/* Submit Button */}
//         {!isforgot && (
//           <button
//             type="submit"
//             className="login-submit-btn"
//             disabled={isLoading}
//           >
//             <span>{isLoading ? "Logging in..." : "Login"}</span>
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import Input from "../Common/input";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   clearError,
//   setError,
//   setLoading,
//   setUser,
//   closeAuthModal,
// } from "../../redux/slices/authSlice";
// import { switchAuthModal } from "../../redux/slices/UI_Slices";
// import "../../css/auth/Login.css";

// import axios from "axios";
// import validator from "validator";

// const Login = () => {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   // forgot password states
//   const [forgotEmail, setforgotEmail] = useState("");
//   const [forgotMsg, setforgotMsg] = useState("");

//   const dispatch = useDispatch();

//   const { isLoading, error } = useSelector((state) => state.auth);
//   const { authMode } = useSelector((state) => state.ui);

//   const isforgot = authMode === "forgot";

//   // ---------------- LOGIN ----------------
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // ✅ CHANGE 1: Clear old error before starting login
//     dispatch(clearError());

//     if (!validator.isEmail(email)) {
//       dispatch(setError("Please enter a valid email address"));
//       return;
//     }

//     if (!password) {
//       dispatch(setError("Please enter your password"));
//       return;
//     }

//     dispatch(setLoading(true));

//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
//         {
//           email,
//           password,
//         }
//       );

//       const data = res.data || {};

//       console.log("LOGIN RESPONSE DATA:", data);

//       dispatch(
//         setUser({
//           user: data.user,
//           token: data.token,
//         })
//       );

//       localStorage.setItem("Token", data.token);

//       // ✅ CHANGE 2: Stop loading after success
//       dispatch(setLoading(false));

//       // ✅ CHANGE 3: Clear error after success (important)
//       dispatch(clearError());

//       dispatch(closeAuthModal());

//       console.log("Login successful");
//     } catch (error) {
//       const serverMessage =
//         error?.response?.data?.message || error?.response?.data?.error;

//       dispatch(setError(serverMessage || "Login Failed"));

//       // ✅ CHANGE 4: Stop loading even when error happens
//       dispatch(setLoading(false));
//     }
//   };

//   // ---------------- FORGOT PASSWORD ----------------
//   const handleForgotpassword = async () => {
//     if (!forgotEmail) {
//       setforgotMsg("Please enter your email ❌");
//       return;
//     }

//     if (!validator.isEmail(forgotEmail)) {
//       setforgotMsg("Please enter a valid email address ❌");
//       return;
//     }

//     try {
//       setforgotMsg("Sending reset link... ⏳");

//       await axios.post(
//         `${import.meta.env.VITE_BASE_URL}/api/auth/forgot-password`,
//         {
//           email: forgotEmail,
//         }
//       );

//       setforgotMsg("Reset link sent! Check your Email 📧✅");
//     } catch (error) {
//       setforgotMsg(
//         error?.response?.data?.message || "Failed to send reset email ❌"
//       );
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <h3 className="login-title">
//         {isforgot ? "Forgot Password" : "Welcome Back"}
//       </h3>

//       <p className="login-subtitle">
//         {isforgot
//           ? "Enter your registered email to reset password"
//           : "Please enter your details to login"}
//       </p>

//       <form className="login-form" onSubmit={handleLogin}>
//         {/* ---------------- LOGIN FORM ---------------- */}
//         {!isforgot && (
//           <>
//             <Input
//               value={email}
//               onChange={(e) => setemail(e.target.value)}
//               label={"Email Address"}
//               placeholder={"xyz@gmail.com"}
//               type="email"
//               autoComplete="email"
//             />

//             <Input
//               value={password}
//               onChange={(e) => setpassword(e.target.value)}
//               label="Password"
//               placeholder={"Min 8 Character"}
//               type="password"
//               autoComplete="current-password"
//             />
//           </>
//         )}

//         {/* ---------------- FORGOT PASSWORD UI ---------------- */}
//         <div className="forgot-wrapper">
//           {!isforgot ? (
//             <>
//               <span
//                 className="forgot-link"
//                 onClick={() => {
//                   dispatch(clearError());
//                   dispatch(switchAuthModal("forgot"));
//                 }}
//               >
//                 Forgot password?
//               </span>

//               <span
//                 className="forgot-link"
//                 onClick={() => {
//                   dispatch(clearError());

//                   // ✅ CHANGE 5: signup link should open signup not forgot
//                   dispatch(switchAuthModal("signup"));
//                 }}
//               >
//                 Don't have an account? Sign up
//               </span>
//             </>
//           ) : (
//             <div className="forgot-box">
//               <Input
//                 label="Email"
//                 type="email"
//                 placeholder="Enter your registered email"
//                 value={forgotEmail}
//                 onChange={(e) => setforgotEmail(e.target.value)}
//                 autoComplete="email"
//               />

//               {forgotMsg && <p className="forgot-msg">{forgotMsg}</p>}

//               <button
//                 type="button"
//                 className="forgot-btn"
//                 onClick={handleForgotpassword}
//               >
//                 Send the Reset Link
//               </button>

//               {/* Back to Login */}
//               <span
//                 className="forgot-link"
//                 onClick={() => {
//                   setforgotMsg("");
//                   dispatch(clearError());

//                   // ✅ CHANGE 6: Back to login should switch to "Login"
//                   dispatch(switchAuthModal("Login"));
//                 }}
//               >
//                 Back to Login 🔙
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Error Message */}
//         {error && <div className="login-error">{error}</div>}

//         {/* Submit Button */}
//         {!isforgot && (
//           <button
//             type="submit"
//             className="login-submit-btn"
//             disabled={isLoading}
//           >
//             <span>{isLoading ? "Logging in..." : "Login"}</span>
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import Input from "../Common/input";
import { useSelector, useDispatch } from "react-redux";
import {
  clearError,
  setError,
  setLoading,
  setUser,
  closeAuthModal,
} from "../../redux/slices/authSlice";
import { switchAuthModal } from "../../redux/slices/UI_Slices";
import "../../css/auth/Login.css";

import axios from "axios";
import validator from "validator";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // forgot password states
  const [forgotEmail, setforgotEmail] = useState("");
  const [forgotMsg, setforgotMsg] = useState("");

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.auth);
  const { authMode } = useSelector((state) => state.ui);

  const isForgot = authMode === "forgot";

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(clearError());

    if (!validator.isEmail(email)) {
      dispatch(setError("Please enter a valid email address"));
      return;
    }

    if (!password) {
      dispatch(setError("Please enter your password"));
      return;
    }

    dispatch(setLoading(true));

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );

      const data = res.data;

      dispatch(
        setUser({
          user: data.user,
          token: data.token,
        })
      );

      localStorage.setItem("Token", data.token);

      dispatch(setLoading(false));
      dispatch(clearError());
      dispatch(closeAuthModal());
    } catch (error) {
      const serverMessage =
        error?.response?.data?.message || error?.response?.data?.error;

      dispatch(setError(serverMessage || "Login Failed"));
      dispatch(setLoading(false));
    }
  };

  // ---------------- FORGOT PASSWORD ----------------
  const handleForgotpassword = async () => {
    if (!forgotEmail) {
      setforgotMsg("Please enter your email ❌");
      return;
    }

    if (!validator.isEmail(forgotEmail)) {
      setforgotMsg("Please enter a valid email address ❌");
      return;
    }

    try {
      setforgotMsg("Sending reset link... ⏳");

      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/forgot-password`,
        {
          email: forgotEmail,
        }
      );

      setforgotMsg("Reset link sent! Check your Email 📧✅");
    } catch (error) {
      setforgotMsg(
        error?.response?.data?.message || "Failed to send reset email ❌"
      );
    }
  };

  return (
    <div className="login-wrapper">
      <h3 className="login-title">
        {isForgot ? "Forgot Password" : "Welcome Back"}
      </h3>

      <p className="login-subtitle">
        {isForgot
          ? "Enter your registered email to reset password"
          : "Please enter your details to login"}
      </p>

      <form className="login-form" onSubmit={handleLogin}>
        {/* ---------------- LOGIN FORM ---------------- */}
        {!isForgot && (
          <>
            <Input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              label="Email Address"
              placeholder="xyz@gmail.com"
              type="email"
              autoComplete="email"
            />

            <Input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              label="Password"
              placeholder="Min 8 Character"
              type="password"
              autoComplete="current-password"
            />
          </>
        )}

        {/* ---------------- FORGOT PASSWORD UI ---------------- */}
        <div className="forgot-wrapper">
          {!isForgot ? (
            <>
              <span
                className="forgot-link"
                onClick={() => {
                  dispatch(clearError());
                  dispatch(switchAuthModal("forgot"));
                }}
              >
                Forgot password?
              </span>

              <span
                className="forgot-link"
                onClick={() => {
                  dispatch(clearError());
                  dispatch(switchAuthModal("signup"));
                }}
              >
                Don't have an account? Sign up
              </span>
            </>
          ) : (
            <div className="forgot-box">
              <Input
                label="Email"
                type="email"
                placeholder="Enter your registered email"
                value={forgotEmail}
                onChange={(e) => setforgotEmail(e.target.value)}
                autoComplete="email"
              />

              {forgotMsg && <p className="forgot-msg">{forgotMsg}</p>}

              <button
                type="button"
                className="forgot-btn"
                onClick={handleForgotpassword}
              >
                Send the Reset Link
              </button>

              <span
                className="forgot-link"
                onClick={() => {
                  setforgotMsg("");
                  dispatch(clearError());
                  dispatch(switchAuthModal("login")); // ✅ FIXED (lowercase)
                }}
              >
                Back to Login 🔙
              </span>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && <div className="login-error">{error}</div>}

        {/* Submit Button */}
        {!isForgot && (
          <button
            type="submit"
            className="login-submit-btn"
            disabled={isLoading}
          >
            <span>{isLoading ? "Logging in..." : "Login"}</span>
          </button>
        )}
      </form>
    </div>
   
  );
};

export default Login;

