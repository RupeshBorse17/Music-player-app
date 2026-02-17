// // // import React from "react";
// // // import "../../css/auth/Auth.css";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import {clearError,logout} from "../../redux/slices/authSlice";
// // // import {closeAuthModal,openAuthModal} from "../../redux/slices/UI_Slices";

// // // import Modal from "../Common/Modal";
// // // import Signup from "./Signup";
// // // import Login from "./Login";


// // // const Auth = () => {

// // //   const dispatch = useDispatch();
// // //   const {isAuthenticated} = useSelector((state)=>state.auth);

// // //   const {authMode} = useSelector((state)=>state.ui);




// // //   return (


// // //     <>

// // //       <div className="auth-container">

// // //         {isAuthenticated ? (
// // //           <button className="auth-btn logout"
// // //           onClick={()=>dispatch(logout())}
// // //           >Logout</button>
// // //         ) : (
// // //             <>

// // //             <button className="auth-btn signup" onClick={()=>{
// // //               dispatch(clearError());
// // //               dispatch(openAuthModal("signup"));
// // //             }}>Signup</button>
            
// // //             <button className="auth-btn login">Login</button>
// // //             </>
// // //         )}
// // //       </div>

// // //         <Modal

// // //           onClose={()=>{
// // //             dispatch(closeAuthModal());
// // //             dispatch(clearError());
// // //           }}

// // //           >

// // //             {authMode === "signup" && <Signup/>}
// // //             {(authMode === "login" || authMode === "forgot") && 
// // //             <Login/>
            
// // //             }
// // //         </Modal>
// // //     </>



   
// // //   );
// // // };


// // // export default Auth;


// // // import React from "react";
// // // import "../../css/auth/Auth.css";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { clearError, logout } from "../../redux/slices/authSlice";
// // // import { closeAuthModal, openAuthModal } from "../../redux/slices/UI_Slices";

// // // import Modal from "../Common/Modal";
// // // import Signup from "./Signup";
// // // import Login from "./Login";

// // // const Auth = () => {
// // //   const dispatch = useDispatch();

// // //   const { isAuthenticated } = useSelector((state) => state.auth);
// // //   const { authMode } = useSelector((state) => state.ui); // ✅ must be UI

// // //   return (
// // //     <>
// // //       <div className="auth-container">
// // //         {isAuthenticated ? (
// // //           <button
// // //             className="auth-btn logout"
// // //             onClick={() => dispatch(logout())}
// // //           >
// // //             Logout
// // //           </button>
// // //         ) : (
// // //           <>
// // //             <button
// // //               className="auth-btn signup"
// // //               onClick={() => {
// // //                 dispatch(clearError());
// // //                 dispatch(openAuthModal("signup"));
// // //               }}
// // //             >
// // //               Signup
// // //             </button>

// // //             <button
// // //               className="auth-btn login"
// // //               onClick={() => {
// // //                 dispatch(clearError());
// // //                 dispatch(openAuthModal("login"));
// // //               }}
// // //             >
// // //               Login
// // //             </button>
// // //           </>
// // //         )}
// // //       </div>

// // //       <Modal
// // //         onClose={() => {
// // //           dispatch(closeAuthModal());
// // //           dispatch(clearError());
// // //         }}
// // //       >
// // //         {authMode === "signup" && <Signup />}
// // //         {(authMode === "login" || authMode === "forgot") && <Login />}
// // //       </Modal>
// // //     </>
// // //   );
// // // };

// // // export default Auth;


// // import React from "react";
// // import "../../css/auth/Auth.css";
// // import { useDispatch, useSelector } from "react-redux";
// // import { clearError, logout } from "../../redux/slices/authSlice";
// // import { closeAuthModal, openAuthModal } from "../../redux/slices/UI_Slices";

// // import Modal from "../Common/Modal";
// // import Signup from "./Signup";
// // import Login from "./Login";

// // const Auth = () => {
// //   const dispatch = useDispatch();

// //   const { isAuthenticated } = useSelector((state) => state.auth);
// //   const { authMode } = useSelector((state) => state.ui);

// //   return (
// //     <>
// //       <div className="auth-container">
// //         {isAuthenticated ? (
// //           <button
// //             className="auth-btn logout"
// //             onClick={() => dispatch(logout())}
// //           >
// //             Logout
// //           </button>
// //         ) : (
// //           <>
// //             <button
// //               className="auth-btn signup"
// //               onClick={() => {
// //                 dispatch(clearError());
// //                 dispatch(openAuthModal("signup"));
// //               }}
// //             >
// //               Signup
// //             </button>

// //             <button
// //               className="auth-btn login"
// //               onClick={() => {
// //                 dispatch(clearError());
// //                 dispatch(openAuthModal("login"));
// //               }}
// //             >
// //               Login
// //             </button>
// //           </>
// //         )}
// //       </div>

// //       {/* Modal should open only when authMode is not null */}
// //       {authMode && (
// //         <Modal
// //           onClose={() => {
// //             dispatch(closeAuthModal());
// //             dispatch(clearError());
// //           }}
// //         >
// //           {authMode === "signup" && <Signup />}
// //           {(authMode === "login" || authMode === "forgot") && <Login />}
// //         </Modal>
// //       )}
// //     </>
// //   );
// // };

// // export default Auth;


// import React from "react";
// import "../../css/auth/Auth.css";
// import { useDispatch, useSelector } from "react-redux";
// import { clearError, logout } from "../../redux/slices/authSlice";
// import { closeAuthModal, openAuthModal } from "../../redux/slices/UI_Slices";

// import Modal from "../Common/Modal";
// import Signup from "./Signup";
// import Login from "./Login";

// const Auth = () => {
//   const dispatch = useDispatch();

//   const { isAuthenticated } = useSelector((state) => state.auth);
//   const { authMode } = useSelector((state) => state.ui);

//   return (
//     <>
//       <div className="auth-container">
//         {isAuthenticated ? (
//           <button className="auth-btn logout" onClick={() => dispatch(logout())}>
//             Logout
//           </button>
//         ) : (
//           <>
//             <button
//               className="auth-btn signup"
//               onClick={() => {
//                 dispatch(clearError());
//                 dispatch(openAuthModal("signup"));
//               }}
//             >
//               Signup
//             </button>

//             <button
//               className="auth-btn login"
//               onClick={() => {
//                 dispatch(clearError());
//                 dispatch(openAuthModal("login"));
//               }}
//             >
//               Login
//             </button>
//           </>
//         )}
//       </div>

//       {/* ✅ Modal will open only when authMode is set */}
//       {authMode && (
//         <Modal
//           onClose={() => {
//             dispatch(closeAuthModal());
//             dispatch(clearError());
//           }}
//         >
//           {authMode === "signup" && <Signup />}
//           {(authMode === "login" || authMode === "forgot") && <Login />}
//         </Modal>
//       )}
//     </>
//   );
// };

// export default Auth;

import React from "react";
import "../../css/auth/Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { clearError, logout } from "../../redux/slices/authSlice";
import { closeAuthModal, openAuthModal } from "../../redux/slices/UI_Slices";

import Modal from "../Common/Modal";
import Signup from "./Signup";
import Login from "./Login";

const Auth = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { authMode } = useSelector((state) => state.ui);

  return (
    <>
      <div className="auth-container">
        {isAuthenticated ? (
          <button className="auth-btn logout" onClick={() => dispatch(logout())}>
            Logout
          </button>
        ) : (
          <>
            <button
              className="auth-btn signup"
              onClick={() => {
                dispatch(clearError());
                dispatch(openAuthModal("signup"));
              }}
            >
              Signup
            </button>

            <button
              className="auth-btn login"
              onClick={() => {
                dispatch(clearError());
                dispatch(openAuthModal("login"));
              }}
            >
              Login
            </button>
          </>
        )}
      </div>

      {/* ✅ Modal will open only when authMode is set */}
      {authMode && (
        <Modal
          onClose={() => {
            dispatch(closeAuthModal());
            dispatch(clearError());
          }}
        >
          {authMode === "signup" && <Signup />}
          {(authMode === "login" || authMode === "forgot") && <Login />}
        </Modal>
      )}
    </>
  );
};

export default Auth;

