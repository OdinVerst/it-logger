import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {searchLog} from '../../actions/logActions'

const SearchNavbar = ({searchLog}) => {
  const text = useRef('');

  const onChange = ()=>{ 
    searchLog(text.current.value);
  }

  return (
    <nav className="blue" style={{ marginBottom: '1em' }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search Logs..." onChange={onChange} ref={text} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, {searchLog})(SearchNavbar);
