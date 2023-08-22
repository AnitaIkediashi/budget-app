import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect } from "react";
// import Avtr from "../../assets/images/blank-profile.png";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserAuth";
import { useState } from "react";

const Theme = ({
  darkMode,
  toggleDarkMode,
  open,
  handleOpen,
  // photoUrl,
  // setPhotoUrl,
}) => {

  const [photoURL, setPhotoURL] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [photo, setPhoto] = useState(null)

  const onChangeImage = (e) => {
    if(e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
    
  };
  // console.log(photo)

  const { upload, user } = useContext(UserContext);
  // console.log(user)
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    if (!photo) {
      toast.error("Upload an image");
    }
    upload(photo, user, setLoading);
    
  };

  useEffect(() => {
    if (user?.photoURL) {
      // console.log(user);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  return (
    <>
      <div className="flex items-center gap-6 ">
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <MoonIcon className="w-6 " style={{ color: "white" }} />
          ) : (
            <SunIcon className="w-6" />
          )}
        </button>

        <img
          src={photoURL}
          alt="blank profile pic"
          className="w-12 rounded-full drop-shadow-lg lg:drop-shadow-md cursor-pointer"
          onClick={handleOpen}
        />
      </div>

      <aside
        className={
          open ? "show_input hide_input dark:bg-slate-500" : "show_input"
        }
      >
        {/* input file */}
        <input
          type="file"
          name=""
          id=""
          className="block mb-2 dark:text-white"
          accept="image/*"
          onChange={onChangeImage}
        />
        {/* button */}
        <button
          className="bg-color-green-200 capitalize px-5 py-2 rounded-lg text-dull-white font-semibold dark:bg-color-green-300"
          disabled={loading || !photo}
          onClick={handleUpload}
        >
          upload
        </button>
      </aside>
    </>
  );
};

export default Theme;
