import React from 'react';//rafc
import {connect} from 'react-redux';
import {addToDo} from '../../Action/index';
import { Form, Input,  Button } from 'antd';
import './todo.css';
import 'antd/dist/antd.css';
export const Addtodo = (props) => {
   

    const addtodo =(event) =>{
        console.log("clicked")
        event.preventDefault()
        let input= event.target.userinput.value
        let user =event.target.usertext.value
            console.log(input);
            console.log(user);
            props.dispatch(addToDo(input,user))
            event.target.userinput.value="";
            event.target.usertext.value="";
    }
    return (
        <div>
            {/* <form onSubmit={addtodo}>
                <input type="text" name="userinput"/>
                <button>Submit</button>
            </form> */}
            <h1>To do List</h1>
  <br />
  <form className="form" onSubmit={addtodo} >
      <Form.Item
    name={['username']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="userinput" autoComplete="off"/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea name="usertext" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 3 }}>
      <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </form>
        </div>
    )
}
export default connect()(Addtodo);
