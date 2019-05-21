import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store';
import * as actions from './store/actions';


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.changeInputState = this.changeInputState.bind(this);
        this.changeStore = this.changeStore.bind(this);
        this.submitBtnClick = this.submitBtnClick.bind(this);
        this.delCurListItem = this.delCurListItem.bind(this);
        //5--sunscribe the newState and change the current state
        store.subscribe(this.changeStore)
    }
    render() {
        return (
            <div style={ {margin:'10px'} }>
                <Input 
                    style={ {width:'300px',margin:'0 10px 10px 0'} }
                    placeholder='input info'
                    value={this.state.inputValue}
                    onChange={this.changeInputState}
                />
                <Button type='primary' onClick={this.submitBtnClick}>submit</Button>

                <List
                    style={ {width:'300px',margin:'0 10px 10px 0'} }
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={()=>this.delCurListItem(index)}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
    changeStore(){
        this.setState(store.getState());
    }
    changeInputState(e){
        //1--create an action
        const action = actions.changeInputAction(e.target.value);
       //2--dispatch
       store.dispatch(action);
    }
    submitBtnClick(){
        store.dispatch(actions.addItemAction());
    }
    delCurListItem(index){
        store.dispatch(actions.delItemAction(index))
    }
}

export default TodoList;