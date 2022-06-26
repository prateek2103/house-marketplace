import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getDoc, serverTimestamp, setDoc, doc } from "firebase/firestore";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";
import { db } from "../firebase.config";

function OAuth() {
  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      //if user does not exists add it
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Not authorized with google");
    }
  };

  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/signup" ? "up" : "in"} with </p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img src={googleIcon} alt="google" className="socialIconImg" />
      </button>
    </div>
  );
}

export default OAuth;
