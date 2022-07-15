import styled from "styled-components";
import {mobile} from "../responsive";
// import { Link } from '@mui/material';
import {Button,Link} from '@mui/material';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-vector/abstract-background_53876-43362.jpg?w=2000")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  border: 2px ;
 
  
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align:center;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <br/>
       <center>New User? <Link>CREATE A NEW ACCOUNT</Link></center> 
        <br/>
        <Form>
          <b>Username</b>
          <Input placeholder="Username" />
          <b> Password</b>
          <Input placeholder="Password" />
          <Button>Sign In</Button>
          <Link style={{textAlign: 'right'}}>Forgot Password?</Link>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
