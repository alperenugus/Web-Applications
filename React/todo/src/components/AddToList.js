import React from 'react';

export default class AddToList extends React.Component {

    state = { newItem: '' };

    handleSubmit = () => {
        if(this.state.newItem === '') alert("You should enter a new to do item.")
        else{
            this.props.onAdd(this.state.newItem)
        }
        this.setState({newItem: ''})
    }

    render() {
        return (
            <div className="d-flex justify-content-center">            
                <form className="form-group" onSubmit={(e) => {e.preventDefault(); this.handleSubmit()}}>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Item'
                    style={{padding:20, margin:10}}
                    onChange={(text) => {this.setState({newItem: text.target.value})}}
                />
                <div className="text-center">
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => {this.handleSubmit()}}>Add</button>
                </div>
                </form>
            </div>
        )
    }
}