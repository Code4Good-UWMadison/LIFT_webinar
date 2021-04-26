import React, { Component } from 'react';
import ID from './ID.js';
import Q from './Q.js';
import N from './N.js';
import A from './A.js';
const styles = {
  rect: {
    minWidth: 500,
    minHeight: 100,
    position: 'relative',
    top: 20,
    //right: 100,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 150, 200, 0.5)',
  },
  button: {
    minWidth: 80,
    height: 'auto',
    margin: 5,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    //alignItems: 'left',
    textAlign: 'left',
    backgroundColor: '#AFEEEE',
  },
  txt: {
    marginLeft: 10,
    marginTop: 20,
    marginBot: 20,
    alignItems: 'center',
  },
  rows: {
    flexDirection: 'row',
  },
};

class Scenario extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "A2",
        index: 0
    };
  }

  switchScene = () => {
    this.setState(prev => ({
        id: this.state.id,
        index: this.state.index+1
    }));
  }

  getIDByIndex = () => {
      return <ID i={this.state.index+1}/>
  }

  restart = () => {
    this.setState(prev => ({
        index: 0
    }));
  };

  render() {
    var main = (
          <div>
            {/*<button onClick={() => this.setState({ index: this.state.index + 1})}>{this.state.index}</button>;*/}
            <button style={styles.button} onClick={this.restart}>Restart</button>

            <div style={styles.txt} id="text">
                  {<Q i={this.state.index}/>}
            </div>

            <div style={styles.rows}>
              <button style={styles.button} onClick={this.switchScene}>
                  <A i={this.state.index} aN={0}/>
              </button>

              <button style={styles.button} onClick={this.switchScene}>
                  <A i={this.state.index} aN={1}/>
              </button>

              <button style={styles.button} onClick={this.switchScene}>
                  <A i={this.state.index} aN={2}/>
              </button>

            </div>
          </div>
        );

    return (
      <div style={styles.rect}>
          <header>
              <h1>Simulation</h1>
          </header>

          {main}
      </div>
    );
  }
}

export default Scenario;

{/*<button style={styles.button} onClick={this.restart}>
  Restart
</button>
<div style={styles.txt} id="text">
      {comp["Question"].replace("\n","")}
</div>

<div style={styles.rows}>
  <button style={styles.button} onClick={this.switchScene(comp["Navigate"][0])}>
      {comp["Answers"][0]}
  </button>

  <button style={styles.button} onClick={this.switchScene(comp["Navigate"][1])}>
      {comp["Answers"][1]}
  </button>

  <button style={styles.button} onClick={this.switchScene(comp["Navigate"][2])}>
      {comp["Answers"][2]}
  </button>

</div>*/
}
