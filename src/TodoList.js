import React, { Component } from 'react';
import * as actions from './store/actions';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';

const TodoList =(props)=> {
    return (
        <div style={ {margin:'10px'} }>
            <Input 
                style={ {width:'300px',margin:'0 10px 10px 0'} }
                placeholder='input info'
                value={props.inputValue}
                onChange={props.changeInputState}
            />
            <Button type='primary' onClick={props.submitBtnClick}>submit</Button>

            <List
                style={ {width:'300px',margin:'0 10px 10px 0'} }
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={()=>props.delCurListItem(index)}>{item}</List.Item>
                )}
            />
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeInputState(e){
            //1--create an action
            const action = actions.changeInputAction(e.target.value);
            //2--dispatch
            dispatch(action);
        },
        submitBtnClick(){
            dispatch(actions.addItemAction());
        },
        delCurListItem(index){
            dispatch(actions.delItemAction(index))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);


