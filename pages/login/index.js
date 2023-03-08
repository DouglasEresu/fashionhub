/*eslint-disable*/
import React, { useState } from "react";
import { useRouter } from "next/router";
import Login from "./login-form";
import Signup from "./register-form";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import app from '../../config/firebaseConfig'
import Navstyles from '../../styles/Nav.module.css'
import styles from '../../styles/CategoryCard.module.css'

const LoginPage = () => {
  const [page, setPage] = useState("login");
  const router = useRouter();
  let auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      typeof window !== "undefined" && router.push("/");
    }
  });
  return (
    <div className={styles.container}>
      <a className={Navstyles.logo}>Fashion Hub</a>
      <div className={styles.content}>
        <div className={styles.switchContainer}>
          {page === "login" ? <Login /> : <Signup/>}
          <button
            className={styles.switchButton}
            onClick={() => setPage("login")}
            style={{ backgroundColor: page === "login" ? "white" : "#f6f6f6" }}
          >Login</button>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
