import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {upadateLog} from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOption from '../tech/TechSelectOption';

const EditLogModal = ({upadateLog, current}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');


  useEffect(()=> {
    if(current){
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech)
    }
  }, [current])

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and tech' });
    }
    const updLog = {
      id: current.id,
      message,
      attention,
      tech,
      date: new Date()
    }

    upadateLog(updLog);
    M.toast({ html: `Log updated by ${tech}` });
    //Clear Fields
    setMessage('');
    setAttention('');
    setTech('');
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              className="browser-default"
              value={tech}
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>Select tech</option>
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
                checked={attention}
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

const mapStateToProps = (state) => ({
  current: state.log.current
});

export default connect(mapStateToProps, {upadateLog})(EditLogModal);
