import React from "react";
import { useState } from "react";
import Dashboard from "./dashboard";
import { useNavigate } from "react-router-dom"

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f9fc",
    fontFamily: "'Arial', sans-serif",
  },
  card: {
    maxWidth: "400px",
    width: "100%",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  error:{
    color: "red"
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  footer: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#888",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

const Login = ({ title, description }) => {
 const [email , setEmail ]  = useState("")
 const [password, setPassword] = useState("")
 const [error, setError] = useState("")
 const [isLoading, setLoading] = useState(false)
 const navigate = useNavigate();

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = styles.button.backgroundColor;
  };
  const handleLogin = async  (e)=>{
    e.preventDefault();
    setLoading(true)
    setError("")
    try{
    const response = await fetch('https://dev.dhanxpert.com/API/api/admin/login',{
  method: "POST",
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email:email,
    password:password
  })

})
const data = await response.json()
console.log(data,"reponsee")

if(data.status){
  localStorage.setItem("accessToken", data.accessToken );
  localStorage.setItem("name", data.userData.fullName );
// Retrieve
  navigate("/dashboard")

  alert("You are logged in")

}else{
  setError(data.message)
}

    } catch (error){
    setError("Something went wrong")

    } finally{
      setLoading(false)

    }
  }
console.log(email)
  return (
   
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            style={styles.button}
            disabled={isLoading}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Login
          </button>
          {isLoading? "please wait..." :"login"}
        </form>
        {error && <p style={styles.error}>{error}</p>}
        <p style={styles.footer}>
          Don't have an account?{" "}
          {/* <a href="#" style={styles.link}>
            Sign Up
          </a> */}
        </p>
      </div>
    </div>
  );
};

export default Login;
