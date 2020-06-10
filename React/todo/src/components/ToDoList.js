import React from 'react';
import ToDoListItem from './ToDoListItem';
import AddToList from './AddToList';



export default class ToDoList extends React.Component{

    state = {
        toDoList: ["Code", "Eat", "Sleep", "Repeat"]
    }

    addItem = (newItem) => {
        var newArr = this.state.toDoList
        newArr.push(newItem)
        this.setState({toDoList: newArr})
    }

    deleteItem = (index) => {
        var newArr = this.state.toDoList
        newArr.splice(index, 1)
        this.setState({toDoList: newArr})
    }

    render(){     
        var listItems = this.state.toDoList.map((listItem, index)=>{
            return <ToDoListItem item={listItem} id={index} onDelete={this.deleteItem}></ToDoListItem>
        })
        listItems = listItems.concat(<br></br>)
        return listItems.concat(<AddToList onAdd={this.addItem}></AddToList>);
    }

}