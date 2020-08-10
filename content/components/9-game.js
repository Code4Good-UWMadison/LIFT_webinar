import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
    height: 30,
    margin: 5,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
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

class Game1 extends Component {
  randomnizer(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  constructor(props) {
    super(props);
    this.state = { scene: 0, money: this.randomnizer(100) };
  }

  restart = () => {
    this.setState({
      money: this.randomnizer(100),
      scene: 0,
    });
  };

  scene1 = () => {
    this.setState({ scene: 1 });
  };

  scene2 = () => {
    this.setState({ scene: 2 });
  };

  scene3 = () => {
    this.setState({ scene: 3 });
  };

  scene4 = () => {
    this.setState({ scene: 4 });
  };

  render() {
    const scene = this.state.scene;

    let main;

    switch (scene) {
      case 0:
        main = (
          <div>
            <button style={styles.button} onClick={this.restart}>
              Restart
            </button>
            <div style={styles.txt} id="text">
              <div>
                You have {this.state.money} dollars. Now you receive a ticket of 80 dollars.
              </div>
              <div>Your options are:</div>
            </div>
            <div style={styles.row}>
              <button style={styles.button} disabled={this.state.money < 80} onClick={this.scene1}>
                Pay the bill
              </button>
              <button style={styles.button} onClick={this.scene2}>
                Seek a payment plan
              </button>
              <button style={styles.button} onClick={this.scene3}>
                Seek a modification of the judgment
              </button>
              <button style={styles.button} onClick={this.scene4}>
                Wait for expiration
              </button>
            </div>
          </div>
        );
        break;
      case 1:
        main = (
          <div style={styles.txt} id="text">
            {' '}
            You are lucky that you have enough money to pay the ticket. You can restart to try other
            scenarios.
            <div>You can restart to try other scenarios.</div>
            <div>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;
      case 2:
        main = (
          <div style={styles.txt} id="text">
            You need to seek a payment plan to pay off the forfeiture over time because you may not
            be able to pay the bill at one time. You can restart to try other scenarios.
            <div>You can restart to try other scenarios.</div>
            <div>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>{' '}
            </div>
          </div>
        );
        break;
      case 3:
        main = (
          <div style={styles.txt} id="text">
            You want to change the judgement because you may not be able to pay the bill. You need
            to include an affidavit and justification for the request. Legal assistance from
            friendly volunteers will be helpful.
            <div>You can restart to try other scenarios.</div>
            <div>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>{' '}
            </div>
          </div>
        );
        break;
      case 4:
        if (this.state.money < 60) {
          main = (
            <div style={styles.txt} id="text">
              You choose to wait for expiration. It may take a few months or even years. Also, as
              you have less than 60 dollars and cannot afford to pay DMV's $60 license fee, you
              still cannot get your license back.
              <div>You can restart to try other scenarios.</div>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>{' '}
              </div>
            </div>
          );
        } else {
          main = (
            <div style={styles.txt} id="text">
              You choose to wait for expiration. It may take a few months or even years. Also, you
              need to pay DMV's $60 license fee to retrieve your license.
              <div>You can restart to try other scenarios.</div>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>{' '}
              </div>
            </div>
          );
        }
        break;
    }

    return (
      <div style={styles.rect} id="game">
        {main}
      </div>
    );
  }
}

export default Game1;
