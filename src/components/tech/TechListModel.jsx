import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  const [techs, setTech] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTech();
    // eslint-disable-next-line
  }, []);

  const getTech = async () => {
    setLoading(true);
    const res = await fetch('/tech');
    const data = await res.json();
    setTech(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technitian List</h4>
        <ul className="collection">
          {!loading &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
