import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State to hold the token
  const [token, setToken] = useState();


const Json = 
  fetch("/example.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.token);
    setToken(data.token)
  })



  // For Clg data //
  const submit = (data) => {
    
      console.log(data);
      console.log(Json)
  };

  // For Post //
  const PostSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {  //specifying the URL of the resource to which the request will be sent. //
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //  the content of the request body is in JSON format.//
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(token)  //  We're converting the token variable into a JSON string//
    })
      .then(response => response.json()) // This returns a promise that resolves with the JSON representation of the response body.//
      .then(data => console.log('POST response:', data)) // for inspection of data //
      .catch(error => console.error('Error posting data:', error));// This helps with error handling.//
  };

  return (
    <>
    <div className={styles.container}>
      {/* <h1 style={{ paddingRight: "3rem" }}>Login Page</h1> */}

      <form action="#" className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.h1}>
          <h1>LOGIN</h1>
        </div>

        <div>
          <label>Username..</label>
          <input
            className={styles.input}
            type="text"
            placeholder="user"
            name="username"
            {...register("username", {
              required: "username is required",

              validate: (username) => {
                if (!/[A-Z]/.test(username)) {
                  return "Username must contains  one uppercase";
                }
                if (!/[a-z]/.test(username)) {
                  return "Username must contains  one lowercase";
                }
                if (!/[0-9]/.test(username)) {
                  return "Username must contains  one number";
                }
              },
            })}
          />
        </div>
        <p>{errors.username?.message}</p>
        <div>
          <label>Email..</label>
          <input
            className={styles.input}
            type="text"
            placeholder="email"
            name="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter valid Email",
              },
            })}
          />
        </div>
        <p>{errors.email?.message}</p>
        <div>
          <label>Password..</label>
          <input
            className={styles.input}
            type="password"
            placeholder="password"
            name="password"
            {...register("password", {
              required: "password is required",

              validate: (password) => {
                if (!/[A-Z]/.test(password)) {
                  return "Password must contain at least 1 uppercase character";
                }

                if (!/[a-z]/.test(password)) {
                  return "Password must contain at least 1 lowercase character";
                }

                if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                  return "Password must contain at least 1 symbol";
                }
                if (!/\d/.test(password)) {
                  return "Password must contain at least 1 number";
                }
                return true;
              },
            })}
          />
        </div>
        <p>{errors.password?.message}</p>

        <button onClick={PostSubmit}>Submit</button> {/* Pass function reference to onClick */}
      </form>
      {/* <div> {token && <p>{token}</p>}</div> */}
      {/* {token && <p>{token}</p>} */}
    </div>
    {/* <div> {token && <p>{token}</p>}</div> */}
    </>
  );
};

export default Login;