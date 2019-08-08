import React, { useState, useEffect } from 'react';

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

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <li>
          <p className="center">No logs to show...</p>
        </li>
      ) : (
        logs.map(log => <li key={log.id}>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
