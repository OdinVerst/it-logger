import React, { useState, useEffect } from 'react';

const Logs = () => {
  const [loading, setLoading] = useState();
  const [logs, setLogs] = useState();

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return <div />;
};

export default Logs;
