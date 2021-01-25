import React from 'react';

export default class Search extends React.Component {

    state = { searchString: '' };

    handleSearch = () => {
        this.props.onSearch(this.state.searchString)
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <form className="form-group"  onSubmit={(e) => { e.preventDefault(); }}>
                    <input
                        id='search-input'
                        type='text'
                        className='form-control'
                        placeholder='Search'
                        style={{ padding: 20, margin: 10 }}
                        onChange={(text) => { this.setState({ searchString: text.target.value }, () => {this.handleSearch()});}}
                    />
                </form>
            </div>
        )
    }



}