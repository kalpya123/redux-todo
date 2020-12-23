import React from 'react'
import {connect} from 'react-redux';
import {DELETEToDo} from '../../src/Action/index';
import { Button } from 'antd';
import { List} from 'antd';

import 'antd/dist/antd.css';
export const list = (props) => {
    return (
        <List>
            {props.todo.map((todo,index) =>(
                <List.Item key={index}>{todo.message}  {todo.user} <Button type="primary" onClick={() => props.dispatch(DELETEToDo(todo.id))} danger>Delete</Button><br /></List.Item>
            ))}
        </List>
    )
}
const mapStateToProps =(state) =>({
 todo:state.todo.data,
})
export default connect(mapStateToProps)(list);