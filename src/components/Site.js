import React from 'react';
import 'header';
import 'question';
import 'answer';


class Site extends React.Component {
  render() {
    return (
      <div>
          <header />   
          <question />
          <answer />
      </div>
    );
  }
}

export default Site;