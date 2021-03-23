import React, { Component } from 'react';

class Voice extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    document.head.appendChild(script);

    const script2 = document.createElement('script');
    script2.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/915932/articulate.min.js';
    document.head.appendChild(script2);
  }

  speak(e) {
    $().articulate('replace', '§', 'section');
    if (e.target.innerText === 'Speak') {
      $('#text').articulate('speak');
      e.target.innerText = 'Stop';
    } else {
      $().articulate('stop');
      e.target.innerText = 'Speak';
    }
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={e => { this.speak(e) }}>Speak</button>
      </React.Fragment>
    );
  }
}

export default Voice;
