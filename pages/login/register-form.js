/*eslint-disable*/
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import { SignupSchema } from "../Validation/formValidation";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {app} from '../../config/firebaseConfig'

const Signup = () => {
  //  const navigate = useNavigate()
    let auth = getAuth();

  const formik =useFormik({
      initialValues:{
          firstName:'',
          lastName:'',
          email:'',
          password:''
      },
      onSubmit: (values) => {
        console.log(values)
         createUserWithEmailAndPassword(auth, values.email,
        values.password)
        .then((response) =>{
        console.log(response.user)
      alert(`user has signed up`)
    })
    .catch((err) => {
        alert(err.message)
    });
      },
  
  
  });
 // eslint-disable-next-line
    // validationSchema:{SignupSchema}

   
  
  

  return (
    <div className="signup">
      
      <form onSubmit={formik.handleSubmit}>
        <div>
            <TextField
            required
            id="outlined-required"
            label="Required"
            type='text'
            name="firstName"
            placeholder="First Name"
            onChange= {formik.handleChange}
            onBlur ={formik.handleBlur}
            value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName.required}</p> : null}
        </div>
        <div>
            <br/>
            <TextField
            required
            id="outlined-required"
            label="Required"
            name="lastName"
            placeholder="Last Name"
            type='text'
            onChange= {formik.handleChange}
            onBlur ={formik.handleBlur}
            value={formik.values.lastName}
            />
             {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName.required}</p> : null}
        </div>
        <div>
            <br/>
            <TextField 
            required
          id="outlined-required"
          label="Required"
            variant="standard"
            name="email"
            placeholder="Email"
            onChange= {formik.handleChange}
            onBlur ={formik.handleBlur}
            value={formik.values.email}
            />
             {formik.touched.email &&formik.errors.email? <p>{formik.errors.email.required}</p> : null}
        </div>
        <div>
            <br/>
            <TextField 
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            variant="standard"
            onChange= {formik.handleChange}
            onBlur ={formik.handleBlur}
            value={formik.values.password}
            />
             {formik.touched.password && formik.errors.password ? <p>{formik.errors.password.required}</p> : null}
        </div>

      <Stack  spacing={2} direction="row">
        <Button type="submit"variant="contained">Submit</Button>
      </Stack>
    
        </form>
    </div>
  );
};

export default Signup;


// import Button from '@mui/material/Button';
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from 'yup';
// import { Input } from '@mui/material';
// // import Button from "@/components/Button";
// // import googleAuth from "firebase/google-auth";

//     const signupSchema = yup.object().shape({
//         firstName: yup.string()
//           .min(2, 'Too Short!')
//           .max(50, 'Too Long!')
//           .required('Required'),
//         lastName: yup.string()
//           .min(2, 'Too Short!')
//           .max(50, 'Too Long!')
//           .required('Required'),
    
//         email:yup.string()
//         .email("invalid email address")
//         .required("Required"),
    
//         password: yup.string('Enter your password')
//         .min(8, 'Password should be of minimum 8 characters length')
//         .required('Password is required'),
    
//   });

// const Signup = () => {

//   const [signUpError, setSignUpError] = useState();
//   const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(signupSchema), });


//   const onSubmit = (data) => {
//     emailSignup({ firstName:data.firstName, lastName:data.lastName, email: data.email, password: data.password }).catch((e) =>
//       setSignUpError(e.message));
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}
//       style={{ display: "flex", flexDirection: "column" }}>
//       <Input
//         name="firstName"
//         register={register}
//         placeholder="First name"
//         error={errors.email}
//       />
//       {errors.FirstName && (
//         <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
//           {errors.FirstName.message}
//         </span>
//       )}
//        <Input
//         name="lastName"
//         register={register}
//         placeholder="Last name"
//         error={errors.email}
//       />
//       {errors.lastName && (
//         <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
//           {errors.lastName.message}
//         </span>
//       )}
//        <Input
//         name="email"
//         register={register}
//         placeholder="Email"
//         error={errors.email}
//       />
//       {errors.email && (
//         <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
//           {errors.email.message}
//         </span>
//       )}
//        <Input
//         name="email"
//         register={register}
//         placeholder="Email"
//         error={errors.email}
//       />
//       <Input
//         name="password"
//         register={register}
//         placeholder="placeholder"
//         type="Password"
//         error={errors.password}
//       />
//       {errors.password && (
//         <span style={{ color: "red", martinTop: 4, fontSize: 14 }}>
//           {errors.password.message}

//         </span>
//       )}
//       <Button type="submit">Register</Button>
//       {signUpError && (
//         <span style={{
//           color: "red",
//           marginTop: -10,
//           fontSize: 14,
//           marginBottom: 10,
//         }}>
//           {signUpError}
//         </span>
//       )}
//     </form>
//   );
// }
//   ;

// export default Signup;


