import React, { useState, useEffect } from 'react';
import LogsIltem from './LogsIltem';
import Preloader from '../layout/Preloader';

const Logs = () => {
  const [loading, setLoading] = useState();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {loading ? (
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

export default Logs;
