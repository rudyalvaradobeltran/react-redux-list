import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

const AppBar = ({suggestions, findSuggestions, findResults, history}) => {
    const [text, setText] = useState('');

    const onChangeText = (text) => {
        setText(text);
        findSuggestions(text);
    }

    const onChangeSelection = (text) => {
        setText(text);
        findResults(text);
        history.push('/results');
    }

    return (
        <div>
            <Page 
                suggestions={suggestions}
                onChangeText={onChangeText} 
                onChangeSelection={onChangeSelection} 
                text={text} />
        </div>
    )
}

AppBar.propTypes = {
    suggestions: PropTypes.array.isRequired,
    findSuggestions: PropTypes.func.isRequired,
    findResults: PropTypes.func.isRequired,
    history: PropTypes.any.isRequired
};

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions
    };
};

const mapDispatchToProps = {
    findSuggestions,
    findResults
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBar));
