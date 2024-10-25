// import React from 'react';
// import { Form, Input, Button, Row, Col } from 'antd';
// import styles from './login.module.css';
// import { useToast } from '../../contexts/ToastContext';
// import { useNavigate } from "react-router-dom";
// import {login} from "../../services/authService"
// const Index = () => {
//   const notify = useToast(); // Sử dụng hook để lấy notify
//   const navigate=useNavigate();
//   const onFinish = async (values) => {
//     const isLogin=await login(values);
// //   notify("Đăng nhập thành công!", "success");
//     console.log('Received values of form: ', values);
//   if(isLogin){
//     notify("Đăng nhập thành công!", "success");
//     navigate("/")
//   } 
//   };

//   return (
    
//     <Row justify="center" align="middle" style={{ height: '100vh' }}>
//       <Col>
//         <Form
//           name="login"
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           className={styles.loginForm} // Sử dụng CSS Modules
//         >
//           <h2 className={styles.title}>Login</h2>

//           <Form.Item
//             name="email"
//             rules={[{ required: true, message: 'Please input your email!' }]}
//           >
//             <Input placeholder="Email" />
//           </Form.Item>

//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: 'Please input your password!' }]}
//           >
//             <Input.Password placeholder="Password" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit" block>
//               Login
//             </Button>
//           </Form.Item>
//         </Form>
//       </Col>
//     </Row>
//   );
// };

// export default Index;
import React, { useEffect, useState } from 'react';
import { db,auth,app,database } from '../../utils/constants/firebase'; // Nhập db từ firebase.js
import { collection, getDocs } from "firebase/firestore"; // Nhập các phương thức cần thiết từ Firestore
import { ref, onValue } from 'firebase/database';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const customerId = '38b3eff8baf56627478ec76a704e9b52';
  const userId = 'e6658bb23e0779f02a1b399731b725fb';

  useEffect(() => {
      // Kiểm tra xem có customerId và userId không
      if (customerId && userId) {
          const messagesRef = ref(database, `${customerId}/users/${userId}/messages`);

          // Lắng nghe sự kiện thay đổi của tin nhắn
          onValue(messagesRef, (snapshot) => {
              const data = snapshot.val();
              console.log(data)
              if (data) {
                  const messageList = Object.keys(data).map(key => ({
                      id: key,
                      ...data[key],
                  }));
                  setMessages(messageList);
              }
          });
      }
  }, [customerId, userId]);

  return (
      <div>
          <h2>Danh sách tin nhắn</h2>
          <ul>
          <div>
          <h2>Danh sách tin nhắn (JSON)</h2>
          <pre>{JSON.stringify(messages, null, 2)}</pre> {/* Hiển thị danh sách tin nhắn dưới dạng JSON */}
      </div>
          </ul>
      </div>
  );
};

export default Index;