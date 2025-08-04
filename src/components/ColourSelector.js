import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { classname, label, background } = config;

  return (
    <button
      className={classname}
      data-testid={key}
      onClick={() => selectNextBackground({ background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
