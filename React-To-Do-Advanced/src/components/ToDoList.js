import React from 'react';
import ToDo from './ToDo'
import AddToList from './AddToList'
import ToDoListItem from './ToDoListItem'
import Search from './Search';

const InitialState = {
    toDoList: [new ToDo('Code', true), new ToDo('Eat', false), new ToDo('Sleep', false), new ToDo('Repeat', false)],
    searchString: ''
}

export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        // Retrieve the last state
        this.state = localStorage.getItem('listState') ? JSON.parse(localStorage.getItem('listState')) : InitialState;
        this.state.searchString = ''
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.saveTheState);
        document.getElementById('search-input').focus()
    }

    saveTheState = () => {
        localStorage.setItem('listState', JSON.stringify(this.state));
    }

    addItem = (newItem) => {
        var newArr = this.state.toDoList
        newArr.push(newItem)
        this.setState({ toDoList: newArr })
    }

    editItem = (editString, id) => {
        var newArr = this.state.toDoList
        var newToDoItem =  this.state.toDoList[id]
        newToDoItem.toDo = editString
        newArr[id] = newToDoItem
        this.setState({ toDoList: newArr })
    }

    deleteItem = (index) => {
        var newArr = this.state.toDoList
        newArr.splice(index, 1)
        this.setState({ toDoList: newArr })
    }

    handleCheckBox = (index) => {
        var newArr = this.state.toDoList
        newArr[index].isCompleted = !newArr[index].isCompleted
        this.setState({ toDoList: newArr })
    }

    onTopClick = (index) => {
        var toTop = this.state.toDoList[index]
        var newArr = this.state.toDoList
        newArr.splice(index, 1)
        newArr.unshift(toTop)
        this.setState({ toDoList: newArr })
    }

    onBottomClick = (index) => {
        var toTop = this.state.toDoList[index]
        var newArr = this.state.toDoList
        newArr.splice(index, 1)
        newArr.push(toTop)
        this.setState({ toDoList: newArr })
    }

    onUpClick = (index) => {
        if (index === 0) {
            return
        }
        else {
            var newArr = this.state.toDoList
            var temp = newArr[index - 1]
            newArr[index - 1] = newArr[index]
            newArr[index] = temp
            this.setState({ toDoList: newArr })
        }
    }

    onDownClick = (index) => {
        if (index === this.state.toDoList.length - 1) {
            return
        }
        else {
            var newArr = this.state.toDoList
            var temp = newArr[index + 1]
            newArr[index + 1] = newArr[index]
            newArr[index] = temp
            this.setState({ toDoList: newArr })
        }
    }

    handleSearch = (str) => {
        this.setState({searchString: str})
        console.log("Search String is:" + str)
    }


    render() {

        var listItems = []

        if(this.state.searchString === ''){
            listItems = this.state.toDoList.map((listItem, index) => {
                return <ToDoListItem {...listItem} id={index}
                    editItem={this.editItem}
                    onDelete={this.deleteItem} onCheckBoxChange={this.handleCheckBox}
                    onTopClick={this.onTopClick} onBottomClick={this.onBottomClick}
                    onUpClick={this.onUpClick} onDownClick={this.onDownClick}></ToDoListItem>
            })
        }
        else{
        listItems = this.state.toDoList.filter(listItem => listItem.toDo.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1).map((listItem, index) => {
            return <ToDoListItem {...listItem} id={index}
                editItem={this.editItem}
                onDelete={this.deleteItem} onCheckBoxChange={this.handleCheckBox}
                onTopClick={this.onTopClick} onBottomClick={this.onBottomClick}
                onUpClick={this.onUpClick} onDownClick={this.onDownClick}></ToDoListItem>
        })
        }

        return (<div id='ToDoList'>
            <div id='SearchForm'><Search onSearch={this.handleSearch}></Search></div>
            <div id='ListItems'>{listItems}</div>
            <br></br>
            <div id='AddToListForm'><AddToList onAdd={this.addItem}></AddToList></div>
        </div>
        )
    }

}
