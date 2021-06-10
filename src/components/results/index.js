import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

const Results = ({ results, history }) => {
    return (
        <div>
            <Page 
                results={results}
                goTo={(path) => { 
                    history.push(path);
                }}
            />
        </div>
    )
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
    history: PropTypes.any.isRequired
};

const mapStateToProps = (state) => {
    return {
        results: state.results
    };
};

export default withRouter(connect(mapStateToProps)(Results));
