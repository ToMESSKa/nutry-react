// import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
// import { Form, Input, Button, Checkbox, Layout } from 'antd';
// import axios from "axios";
// import AppFooter from "../../footer/AppFooter";



// function Login() {
//     const [credentials, setCredentials] = useState({
//         username: "",
//         password: "",
//     });


//     const onFinish = (values) => {
//         console.log('Success:', values);
//     };

//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };


//     const sendCredentials = () => {
//         console.log(credentials);
//         axios.post("http://localhost:8080/signin", credentials).then((response) => {
//             console.log(credentials);
//             localStorage.setItem("token", response.data.token);
//             // localStorage.clear();
//             console.log(response);
//             console.log(localStorage.getItem("token"));
//         })
//     };

//     const handleInputChange = (event) => {
//         setCredentials({ ...credentials, [event.target.name]: event.target.value })
//         console.log(credentials);
//         console.log(event.target.name);
//         console.log(event.target.value);
//     };

//     return (
//       <div className="landing">
//         <Layout>
//           <Row>
//             <Logo />
//           </Row>
//           <Row>
//             <Brand />
//           </Row>
//           <Row>
//             <Col span={16} offset={5}>
//               <Col-8></Col-8>
//               <Col-8>
//               <Form
//           name="basic"
//           labelCol={{ span: 3 }}
//           wrapperCol={{ span: 5 }}
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item
//             label="Username"
//             name="username"
//             onChange={handleInputChange}
//             rules={[{ required: true, message: "Please input your username!" }]}
//           >
//             <Input name="username" />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             onChange={handleInputChange}
//             rules={[{ required: true, message: "Please input your password!" }]}
//           >
//             <Input.Password name="password" />
//           </Form.Item>

//           <Form.Item wrapperCol={{ offset: 4, span: 4 }}>
//             <Button type="primary" htmlType="submit" onClick={sendCredentials}>
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//         </Col-8>
//             </Col>
//           </Row>
//           <AppFooter />
//         </Layout>
        
//       </div>
//     );
// }
// export default Login;

