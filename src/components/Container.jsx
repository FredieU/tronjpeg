import React from 'react';
import Panel from './Panel/Panel';
import imageLoader from '../services/imgLoader';

const Container = () => (
  <main className="container">
    {imageLoader().map((path, index) => {
      console.log(path);
      return <Panel imgSrc={path} key={index} />;
    })}
  </main>
);

export default Container;
