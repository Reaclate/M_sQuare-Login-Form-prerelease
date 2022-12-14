import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import { Google, Facebook, Instagram } from "react-bootstrap-icons";

//bootstrap CDN links - CSS
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Image,
} from "react-bootstrap";

import SideImg from "./assets/Images/logo-transparent.png";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  function Formval(e){
    e.preventDefault();
    const defemail = "msquare@gmail.com";
    const defpassword = "msquarepass";

    if(email === defemail && password === defpassword){
      setLoggedin(true);
      alert("Login Successful");
      window.location.href = "/";
    }
    else{
      setLoggedin(false);
      alert("Login Failed, The given Email and Password isnot correct. Please Try Again");
    }
  }

  return (
    <>
      <Container className="text-center mt-4 shadow-lg p-3 mb-5 bg-white rounded">
        <div className="bg-danger text-white d-block rounded py-3">
        Default Email = "msquare@gmail.com"  &  Default Password = "msquarepass"
        </div>
        <Row>
          <Col sm="12" className="mb-3 mt-2">
            <Image src={SideImg} alt="Side" responsive />
          </Col>
        </Row>

        <Row>
          <Col sm="12" className="mb-4">
            <h3 className="text-decoration-underline"> Login </h3>
          </Col>
        </Row>

        <Row>
          <Form onSubmit={Formval}>
            <Col sm="4" className="m-auto mb-3">
              <InputGroup className="my-4">
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              <InputGroup className="mb-5">
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>

              <Button type="submit" size="md" style={{ width: "100%" }}>
                {" "}
                Login{" "}
              </Button>
            </Col>
          </Form>

          <Col sm="4" className="m-auto mb-5">
            <span className="mx-5">
              Don't have any account?
              <a href="yes" className="text-decoration-none">
                {" "}
                Signup
              </a>
            </span>
            <a href="yes" className="text-decoration-none ms-5">
              {" "}
              Forgot Password?{" "}
            </a>
          </Col>
        </Row>

        <Row>
          <span>Or login using: </span>
          <Col sm="2" className="m-auto mt-3">
            <a href="yes">
              <Google className="me-3 my-2" size="20px" />
            </a>
            <a href="yes">
              <Facebook className="me-3 my-2" size="20px" />
            </a>
            <a href="yes">
              <Instagram className="my-2" size="20px" />
            </a>
          </Col>
        </Row>

        <Row>
          <Col sm="4" className="m-auto mt-3"></Col>
        </Row>
      </Container>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Login />);
