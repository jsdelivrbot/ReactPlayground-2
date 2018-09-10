import React, { Component } from 'react';

// functional component
// const SearchBar = () => {
//     return <input />; // React.CreateElement...
// };

// ES6
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { search_term: '' };
    }

    render() {
        // onChange is a property of input
        return (
            <div className="search-bar">
                <input 
                    value={this.state.search_term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({search_term: term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar; // babel turns browser-unsupported grammar to ES5