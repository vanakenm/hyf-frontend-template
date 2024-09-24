import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { Nav } from 'react-bootstrap';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Register = ()=>{
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    if (data.userType=='Food lover'){

      axios.post("http://cfood.obereg.net:5000/auth/register/user", data)
      .then(res=>{ 
        if (res.data.id){
          navigate('/login')
        }
        console.log(res.data)
      })
      .catch(err=>console.log(err))

    }else{
      axios.post("http://cfood.obereg.net:5000/auth/register/provider", data)
      .then(res=>{
        if (res.data.id){
          navigate('/login')
        }
        console.log(res.data) 
      }
       )
      .catch(err=>console.log(err))
    }
    console.log(data)

   
  }

  return (
  <Form onSubmit={handleSubmit(onSubmit)} className='form-container'>
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

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control {...register("address")}type="text" placeholder="Enter address" />
        
      </Form.Group>


      <Form.Group controlId="userType">
        <Form.Label>Register as</Form.Label>
        <Form.Control as="select" {...register("userType", { required: true })} >
          <option value="Food provider"> Food provider</option>
          <option value="Food lover">Food lover</option>

          
        </Form.Control>
        {errors.userType && errors.userType.type === "required" && (
        <span className="text-danger"> user type is required</span>
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
export default Register;
