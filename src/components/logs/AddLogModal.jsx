import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addLog} from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOption from '../tech/TechSelectOption';


const AddLogModal = ({addLog}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and tech' });
    } else {

    const newLog = {
      message,
      attention,
      tech,
      date: new Date()
    }
    addLog(newLog);
    M.toast({ html: `Add new log wiht ${tech}` });

    }
    //Clear Fields
    setMessage('');
    setAttention('');
    setTech('');
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="">Select tech</option>
              <TechSelectOption/>
            </select>
          </div>
        </div>
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="field-in"
                name="attention"
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Need Attention</span>
            </label>
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect blue waves-light btn"
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%'
};

export default connect(null,{ addLog })(AddLogModal);
