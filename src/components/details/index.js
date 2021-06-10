import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

const Details = ({ currentItem, history, findCurrentItem, match }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        findCurrentItem(parseInt(match.params.itemId));
        if(Object.keys(currentItem).length === 0) setMounted(true);
        if(Object.keys(currentItem).length === 0 && mounted) history.push('/results');
    }, [findCurrentItem, match.params.itemId, currentItem, mounted, history] );

    return (
        <div>
            <Page 
                currentItem={currentItem}
                goTo={(path) => { 
                    history.push(path);
                }}
            />
        </div>
    )
}

Details.propTypes = {
    currentItem: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
    findCurrentItem: PropTypes.func.isRequired,
    match: PropTypes.any.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem
    };
};

const mapDispatchToProps = {
    findCurrentItem
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));
