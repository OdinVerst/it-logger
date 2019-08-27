import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTechs } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first and last names' });
    }
    addTechs({
      firstName,
      lastName
    });
    M.toast({ html: `${firstName} ${lastName} added as tech` });

    //Clear Fields
    setFirstName('');
    setLastName('');
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technitial</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
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

export default connect(null, {addTechs})(AddTechModal);
