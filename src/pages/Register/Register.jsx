import MainLayout from "../../layouts/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { object, string } from "yup";

export default function Register() {
  const loginFormik = useFormik({
    validateOnMount: true,
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema:object({
        username: string().email().required(),
        password: string().min(8).required(),

       }),
    // validate: (values) => {
    //   const errors = {};
    //   if (!values.username.includes("@gmail.com")) {
    //     errors.username = "Email not Valid";
    //   }
    //   if (values.password.length < 8) {
    //     errors.password = "Password not Valid";
    //   }
    //   console.log(loginFormik);
    //   return errors;
    // },
    // onSubmit: (values) => {
    //   console.log("On Submit data", values);
    //   loginFormik.resetForm();
    // },
  });

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setUserInfo((prev) => ({ ...prev, [name]: value }));
  //     console.log(userInfo);
  //   };

  return (
    <MainLayout>
      <Container>
        <Row className="justify-content-center py-4 my-5">
          <Col xs lg="6">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  {...loginFormik.getFieldProps("username")}
                  type="email"
                  placeholder="Enter email"
                  //   onKeyUp={handleChange}
                  //   name="username"
                />
                {loginFormik.touched.username &&
                  loginFormik.errors.username && (
                    <span className="text-danger">
                      {loginFormik.errors.username}
                    </span>
                  )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...loginFormik.getFieldProps("password")}
                  type="password"
                  placeholder="Password"
                  //   onKeyUp={handleChange}
                  //   name="password"
                />
                {loginFormik.touched.password &&
                  loginFormik.errors.password && (
                    <span className="text-danger">
                      {loginFormik.errors.password}
                    </span>
                  )}
              </Form.Group>

              <Button 
              disabled={!loginFormik.isValid}
              onClick={loginFormik.handleSubmit}
              variant="primary" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
}
