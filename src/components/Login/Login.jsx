import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Nav } from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://cfood.obereg.net:5000/auth/login", {login:data.email,password:data.password})
      .then(res=>{ 
        if (res.data.role=="provider"){
          navigate('/offers')
        }
        if (res.data.role=="user"){
          navigate('/homePageLover')// i have to change to food lover reservation
        }
        
      })
      .catch(err=>console.log(err))
  }
    


  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          {...register("email",{ required: true })}
          type="email"
          placeholder="Enter email"
        />
        {errors.email && errors.email.type === "required" && (
          <span className="text-danger"> Email is required</span>
        )}
      </Form.Group>
      <Form.Group>
        {errors.email && errors.email.type === "required" && (
          <span className="text-danger"> Email is required</span>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        {errors.password && errors.password.type === "required" && (
          <span className="text-danger"> Password is required</span>
        )}
      </Form.Group>
      <Form.Group controlId="userType">
        <Form.Label>Login as</Form.Label>
        <Form.Control as="select" {...register("userType", { required: true })} >
          <option value="Food provider"> Food provider</option>
          <option value="Food lover">Food lover</option>
          </Form.Control>
        {errors.userType && errors.userType.type === "required" && (
        <span className="text-danger"> user type is required</span>
      )}
      </Form.Group>



      <Button variant="primary" type="submit">
        Login
      </Button>
      <p>
        <br></br>
        if you do not have an account{" "}
        <Nav.Link href="/register" className="text-center">
          Register
        </Nav.Link>
      </p>
    </Form>
  );
};

export default Login;
