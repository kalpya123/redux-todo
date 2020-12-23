import { Form, Input,  Button } from 'antd';
import 'antd/dist/antd.css';


const homepage  =() =>{
    const layout = {
        labelCol: {
          span: 7,
        },
        wrapperCol: {
          span: 10,
        },
      };
  
      return(
   <div>
  <h1>To do List</h1>
  <br />
  <Form {...layout} name="nest-messages">
      <Form.Item
    name={['username']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea  />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    
   </div>
    )
}
export default homepage;

