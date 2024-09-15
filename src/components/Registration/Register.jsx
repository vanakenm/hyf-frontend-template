import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Nav } from "react-bootstrap";
import "./register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)} className="p-4 register-style">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter email"
          />

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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-danger"> Name is required</span>
          )}
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>Choose Group Type</Form.Label>
          <Form.Check
            aria-label="Provider"
            name="food"
            type="radio"
            label="Provider"
          />
          <Form.Check
            aria-label="Collector"
            name="food"
            type="radio"
            label="Collector"
          />
        </Form.Group> */}
        <br></br>

        <Button variant="primary" type="submit">
          Register
        </Button>
        <p>
          <br></br>
          already have an account{" "}
          <Nav.Link href="/login" className="text-center">
            Login
          </Nav.Link>
        </p>
      </Form>
    </div>
  );
};
export default Register;
