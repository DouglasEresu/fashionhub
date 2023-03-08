import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
const schema = yup.object().shape({
  email: yup.string().email().required("*This field is required."),
  password: yup.string().required("*This field is required.")
  .min(8,"*Password is too short - should be atleast 8 characters"),
});

  const [loginError, setLoginError] = useState();
  const { emailLogin, handleSubmit, errors } = useForm({ resolver: yupResolver(schema), })
    let auth = getAuth();
    let googleProvider = new GoogleAuthProvider()
  const [formData, setFormData] = useState({
    email: "",  
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
     signInWithPopup(auth, googleProvider)
    .then((response) =>{
        console.log(response.user)
      
    });
    emailLogin({ email: formData.email, password: formData.password }).catch((e) => {
      setLoginError(e.message)
    });
}
  

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}>

        {errors && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.email.message}
        </span>
      )}

      <TextField id="standard-basic" label="Standard" variant="standard" 
      name="email"
        value={formData.email}
        placeholder="Email"
        error={errors}
        onChange={handleChange}
      />
        
      
      <TextField id="standard-basic" label="Standard" variant="standard" 
      name="password"
        value={formData.password}
        placeholder="Password"
        type="password"
        error={errors}
        onChange={handleChange}
      />   
      {errors && (
        <span style={{ color: "red", martinTop: 4, fontSize: 14 }}>
          {errors.password.message}

        </span>
      )}
      <Button type='submit' variant="contained">Submit</Button>
      {loginError && (
        <span style={{
          color: "red",
          marginTop: -10,
          fontSize: 14,
          marginBottom: 10,
        }}>
          {loginError}
        </span>
      )}
      <span style={{ width: "100", height: 1, color: "#f6f6f655" }}>
        <Link href="/forgot-password">Forgot Password?</Link>
      </span>
      {/* Social Media Buttons */}
      <hr style={{ width: "100%", height: 1, color: "#f6f6f655" }} />
      <span
        style={{
          textAlign: "center",
          marginTop: -35,
          padding: 15,
          backgroundColor: "white",
          display: "flex",
          alignSelf: "center",
          width: "max-content",
          fontWeigth: "500",
        }}>
        Sign in with Google
        <div style={{ display: "flex" }}>
          <GoogleIcon
            style={{ marginRight: 20 }}
            icon="google"
            // onClick={googleAuth}
          >
            Google
          </GoogleIcon>
          {/* <FacebookIcon icon="facebook">Facebook</FacebookIcon> */}

        </div>
      </span>
      </form>
    </div>
    
  );
};

export default Login;