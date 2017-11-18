import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { logOut } from '../actions/users';
import styles from '../css/components/navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui';

const cx = classNames.bind(styles);

const Navigation = ({ user, logOut }) => {
    return (
        <Tabs>
            <Tab value={0} label="about" component={Link} to={'/about'} />
            <Tab value={1} label="second" component={Link}  to={'/dashboard'}/>
        </Tabs>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logOut })(Navigation);
