// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { CiUser } from "react-icons/ci";

// import { clearError, setLoading, setUser } from "../../redux/slices/authSlice";
// import "../../css/auth/EditProfile.css";
// import Input from "../Common/input";

// const EditProfile = ({ onClose }) => {
//   const dispatch = useDispatch();
//   const { user, token, isLoading, error } = useSelector((state) => state.auth);

//   const [name, setname] = useState(user?.name || "");
//   const [email, setemail] = useState(user?.email || "");

//   const [currentPassword, setCurrentPassword] = useState("");
//   const [newPassword, setnewpassword] = useState("");
//   const [showPasswordfields, setshowpasswordfields] = useState(false);

//   const [prevImage, setprevImage] = useState(user?.avatar || "");
//   const [base64Image, setBase64Image] = useState("");

//   useEffect(() => {
//     if (user) {
//       setname(user.name || "");
//       setemail(user.email || "");
//       setprevImage(user.avatar || "");
//     }
//   }, [user]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => {
//       setprevImage(reader.result);
//       setBase64Image(reader.result);
//     };
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//   };

//   return (
//     <div>
//       <div className="editprofile-wrapper">
//         <h3 className="editprofile-title">Edit Profile</h3>
//         <p>Update your account Details</p>

//         <form className="editprofile-form" onSubmit={handleSubmit}>
//           {!showPasswordfields && (
//             <>
//               <div className="profile-image-container">
//                 {prevImage ? (
//                   <img
//                     src={prevImage}
//                     alt="profile"
//                     className="profile-image"
//                   />
//                 ) : (
//                   <div className="profile-placeholder">
//                     <CiUser size={40} />
//                   </div>
//                 )}

//                 <label className="image-upload-icon">
//                   📷
//                   <input
//                     type="file"
//                     accept="image/*"
//                     hidden
//                     onChange={handleImageChange}
//                   />
//                 </label>

//                 <Input
//                   label={"Name"}
//                   type={"text"}
//                   placeholder={"update your name"}
//                   value={name}
//                   onChange={(e) => setname(e.target.value)}
//                 />

//                 <Input
//                   label={"Email"}
//                   type={"text"}
//                   placeholder={"update your email"}
//                   value={email}
//                   onChange={(e) => setemail(e.target.value)}
//                 />
//               </div>
//             </>
//           )}

//           {showPasswordfields && (
//             <>
//               <Input
//                 label={"current password"}
//                 type={"password"}
//                 placeholder={"Enter current password"}
//                 value={currentPassword}
//                 onChange={(e) => setCurrentPassword(e.target.value)}
//               />

//               <Input
//                 label={"New password"}
//                 type={"password"}
//                 placeholder={"Enter New password"}
//                 value={newPassword}
//                 onChange={(e) => setnewpassword(e.target.value)}
//               />
//             </>
//           )}

//           {error && <div className="editprofile-error">{error}</div>}

//           <button
//             type="button"
//             className="editprofile-password-toggle"
//             onClick={() => setshowpasswordfields(!showPasswordfields)}
//           >
//             {showPasswordfields ? "Cancel Password Change" : "Change Password"}
//           </button>

//           <div className="editprofile-actions">
//             <button
//               type="button"
//               className="editprofile-btn-cancel"
//               onClick={onClose}
//               disabled={isLoading}
//             >
//               Cancel
//             </button>

//             <button type="submit" className="editprofile-btn-submit">
//               {isLoading ? "saving..." : "save Changes"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiUser } from "react-icons/ci";

import "../../css/auth/EditProfile.css";
import Input from "../Common/input";
import { setUser } from "../../redux/slices/authSlice";


const EditProfile = ({ onClose }) => {
  const dispatch = useDispatch();
  const { user, token, isLoading, error } = useSelector((state) => state.auth);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setnewpassword] = useState("");
  const [showPasswordfields, setshowpasswordfields] = useState(false);

  const [prevImage, setprevImage] = useState("");
  const [base64Image, setBase64Image] = useState("");

  useEffect(() => {
    if (user) {
      setname(user.name || "");
      setemail(user.email || "");
      setprevImage(user.avatar || "");
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setprevImage(reader.result);
      setBase64Image(reader.result);
    };
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  dispatch(
    setUser({
      user: {
        ...user,
        name: name,
        email: email,
        avatar: prevImage,
      },
      token: token,
    })
  );

  console.log("Updated Successfully");
};

  return (
    <div className="editprofile-wrapper">
      <h3 className="editprofile-title">Edit Profile</h3>
      <p>Update your account Details</p>

      <form className="editprofile-form" onSubmit={handleSubmit}>
        {!showPasswordfields && (
          <>
            <div className="profile-image-container">
              {prevImage ? (
                <img src={prevImage} alt="profile" className="profile-image" />
              ) : (
                <div className="profile-placeholder">
                  <CiUser size={40} />
                </div>
              )}

              <label className="image-upload-icon">
                📷
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <Input
              label="Name"
              type="text"
              placeholder="update your name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />

            <Input
              label="Email"
              type="text"
              placeholder="update your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </>
        )}

        {showPasswordfields && (
          <>
            <Input
              label="Current Password"
              type="password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <Input
              label="New Password"
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setnewpassword(e.target.value)}
            />
          </>
        )}

        {error && <div className="editprofile-error">{error}</div>}

        <button
          type="button"
          className="editprofile-password-toggle"
          onClick={() => setshowpasswordfields(!showPasswordfields)}
        >
          {showPasswordfields ? "Cancel Password Change" : "Change Password"}
        </button>

        <div className="editprofile-actions">
          <button
            type="button"
            className="editprofile-btn-cancel"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>

          <button type="submit" className="editprofile-btn-submit">
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
