import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogsIltem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = ()=> {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  }

  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal" onClick={()=> setCurrent(log)}
        className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">{`IDs: # ${log.id}`}</span> last updated by{' '}
        <span className="black-text">{log.tech}</span> on{' '}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>
      <a href="#!" onClick={onDelete} className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

LogsIltem.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect(null, { deleteLog , setCurrent })(LogsIltem);
