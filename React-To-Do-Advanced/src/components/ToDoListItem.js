import React, {useState} from 'react';

export default class ToDoListItem extends React.Component {

    state = {
        editState: false,
        editString: ''
    }

    handleCheckBox = () => {
        this.props.onCheckBoxChange(this.props.id)
    }

    onTopClick = () => {
        this.props.onTopClick(this.props.id)
    }

    onBottomClick = () => {
        this.props.onBottomClick(this.props.id)
    }

    onUpClick = () => {
        this.props.onUpClick(this.props.id)
    }

    onDownClick = () => {
        this.props.onDownClick(this.props.id)
    }

    onListItemClicked = () => {
        this.setState({editState: true})
    }

    onSaveClicked = () => {
        if(this.state.editString == ''){
            alert('You should enter a new to do item.')
        }else{
            this.props.editItem(this.state.editString, this.props.id)
            this.setState({editState: false, editString:''})
        }

    }

    render() {
        if(!this.state.editState){
            return (
                <div className="d-flex">
                    <div className="p-2">
                        <input type="checkbox" className="form-check-input" checked={this.props.isCompleted} onChange={this.handleCheckBox}></input>
                    </div>
                    <div className="mr-auto p-2">
                        <li className="mr-auto" onClick={this.onListItemClicked} key={this.props.id} id={this.props.id}>{this.props.id + 1}. {this.props.toDo}</li>
                    </div>
                    <div className="p-1">
                        <button type="button" className="btn btn-default" onClick={this.onUpClick}>
                            <svg className="bi bi-arrow-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                                <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 3.707 5.354 6.354a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-1">
                        <button type="button" className="btn btn-default" onClick={this.onDownClick}>
                            <svg className="bi bi-arrow-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                                <path fillRule="evenodd" d="M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-1">
                        <button type="button" className="btn btn-default" onClick={this.onBottomClick}>
                            <svg className="bi bi-arrow-down-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-1">
                        <button type="button" className="btn btn-default" onClick={this.onTopClick}>
                            <svg className="bi bi-arrow-up-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-1">
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => { this.props.onDelete(this.props.id) }}>X</button>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="p-1">
                    <input autoFocus type="text" className="form-control" 
                    id="to-do-list-edit-text" aria-describedby="emailHelp" 
                    placeholder={this.props.toDo} 
                    onChange={(text) => { this.setState({ editString: text.target.value}, this.onListItemClicked())}}
                    onKeyDown={(e) => {if(e.keyCode == 13) this.onSaveClicked()}}></input>
                    <div className="p-1">
                    <button type="button" className="btn btn-primary btn-sm" style={{ marginLeft: "auto" }} onClick={this.onSaveClicked}>Save</button>
                    </div>
                </div>
            ) 
        }
    }
}
