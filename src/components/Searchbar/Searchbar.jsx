import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class SearchBar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = { query: '' };

    handleChange = event => {
        this.setState({ query: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <header>
                <form>
                    <button>
                        <span></span>
                    </button>
                    <input 
                        className={styles.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}

export default SearchBar;