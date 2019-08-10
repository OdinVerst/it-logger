import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
  const [message, setMessage] = useState('');
  const [attantion, setAttantion] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and tech' });
    }
    console.log('Submit');
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
              type="text"
              name="tech"
              value={tech}
              onChange={e => setTech(e.target.value)}
            >
              <option value="">Select tech</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Jon Doe">Jon Doe</option>
            </select>
          </div>
        </div>
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="field-in"
                name="attantion"
                value={attantion}
                onChange={e => setAttantion(!attantion)}
              />
              <span>Need Attantion</span>
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
export default AddLogModal;
