import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import LogsIltem from './LogsIltem';
import Preloader from '../layout/Preloader';
import {getLogs} from '../../actions/logActions';
import PropTypes from 'prop-types';

const Logs = ({log: {loading, logs}, getLogs}) => {

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {loading || logs === null ? (
        <Preloader />
      ) : logs.length === 0 ? (
        <li>
          <p className="center">No logs to show...</p>
        </li>
      ) : (
        logs.map(log => <LogsIltem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, {getLogs})(Logs);
