import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { Nav } from 'react-bootstrap';



const Register = ()=>{

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
  <Form onSubmit={handleSubmit(onSubmit)} className='p-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control {...register("email", { required: true })}type="email" placeholder="Enter email" />
        
        {errors.email && errors.email.type === "required" && (
        <span className='text-danger'> Email is required</span>
      )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control {...register("password", { required: true })} type="password" placeholder="Password" />
        {errors.password && errors.password.type === "required" && (
        <span className="text-danger"> Password is required</span>
      )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control {...register("name", { required: true })} type="text" placeholder="Name" />
        {errors.name && errors.name.type === "required" && (
        <span className="text-danger"> Name is required</span>
      )}
      </Form.Group>
     
      <Button variant="primary" type="submit">
      Register
      </Button>
      <p>already have an account <Nav.Link href="/login" className="text-center">
            Login
          </Nav.Link></p>
    </Form>
    )
}
export default Register