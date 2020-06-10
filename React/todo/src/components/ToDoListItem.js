import React from 'react';

export default class ToDoListItem extends React.Component{

    render(){
        return <li 
                style={{display: 'flex', justifyContent: 'flex-end'}}
                className="list-group-item" key={this.props.id} id={this.props.id}>{this.props.id + 1}. {this.props.item}
                <button type="button" className="btn btn-danger btn-sm" style={{ marginLeft: "auto" }} onClick={()=>{this.props.onDelete(this.props.id)}}>X</button>
            </li>
    }
    
}
