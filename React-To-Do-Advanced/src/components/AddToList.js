import React from 'react';
import ToDo from './ToDo';

export default class AddToList extends React.Component {

    state = { newItem: '' };

    handleSubmit = () => {
        document.getElementById('add-to-list-form').reset()

        if (this.state.newItem === '') alert('You should enter a new to do item.')
        else {
            var newToDoItem = new ToDo(this.state.newItem, false)
            this.props.onAdd(newToDoItem)
            document.getElementById('add-to-list-input').focus()
        }
        this.setState({ newItem: '' })
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                <form className='form-group' id='add-to-list-form' onSubmit={(e) => { e.preventDefault(); this.handleSubmit() }}>
                    <input
                        id='add-to-list-input'
                        type='text'
                        className='form-control'
                        placeholder='Enter Item'
                        style={{ padding: 20, margin: 10 }}
                        onChange={(text) => { this.setState({ newItem: text.target.value }) }}
                    />
                    <div className='text-center'>
                        <button type='button' className='btn btn-primary btn-sm' onClick={() => { this.handleSubmit() }}>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}