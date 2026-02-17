// // import React, { useState } from 'react'
// // import "../../css/auth/input.css";
// // import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';



// // const Input = ({ label, type, placeholder, value, onChange, showpassword }) => {

// //     const [showPassword,setShowPassword] = useState(false);
// //     const toggleShowPassword = () =>{
// //         setShowPassword(!showPassword);
// //     };
// //   return (
// //     <div className="input-wrapper">

// //         <label>{label}</label>
// //         <div className="input-container">
            
// //             <input

// //                 type={
// //                     type === "password" ? (showpassword ? "text" : "password") : type
// //                 }
// //                 placeholder={placeholder}
// //                 value={value}
// //                 onChange={(e)=>onChange(e)}
// //                 className="input-feild"
// //              />

// //              {type === "password" && (
// //                 <>

// //                     <button type="button" className="input-eye-btn"></button>
// //                         {showPassword ? (<FaRegEye size={22} onClick={()=>toggleShowPassword()}/>) : (
// //                             <FaRegEyeSlash size={32} onClick={()=>toggleShowPassword()}/>
// //                         )}
                
// //                 </>
// //              )}
// //         </div>
      
// //     </div>
// //   )
// // }

// // export default Input

// import React, { useState } from "react";
// import "../../css/auth/input.css";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// const Input = ({ label, type, placeholder, value, onChange }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="input-wrapper">
//       <label>{label}</label>

//       <div className="input-container">
//         <input
//           type={type === "password" ? (showPassword ? "text" : "password") : type}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           className="input-feild"
//         />

//         {type === "password" && (
//           <button
//             type="button"
//             className="input-eye-btn"
//             onClick={toggleShowPassword}
//           >
//             {showPassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={22} />}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Input;

import React, { useState } from "react";
import "../../css/auth/input.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ label, type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-wrapper">
      <label>{label}</label>

      <div className="input-container">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input-field"
        />

        {type === "password" && (
          <button
            type="button"
            className="input-eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={22} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
