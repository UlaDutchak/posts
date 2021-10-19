import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className="spinner-border loader" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </div>
  );
};
