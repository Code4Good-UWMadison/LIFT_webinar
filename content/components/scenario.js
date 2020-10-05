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

class Scenario extends Component {
  randomnizer(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  constructor(props) {
    super(props);
    this.state = {
      unpaidForfeitures: 0,
      cntTickets: 0,
      ticket: "brake light",
      cntNoRent: 0,
      cntNoChildcare: 0,
      scene: "0",
      hourlyWage: 7.25,
      hoursWork: 30,
      monthlyIncome: 941.78,
      monthlyExpenses: {
        total: 900,
        rent: 600,
        childcare: 200,
        groceries: 100,
        currFine: 0
      }
    };
  }

  restart = () => {
    this.setState({
      unpaidForfeitures: 0,
      ticket: "brake light",
      cntTickets: 0,
      cntNoRent: 0,
      cntNoChildcare: 0,
      scene: "0",
      monthlyIncome: 941.78,
      monthlyExpenses: {
        total: 900,
        rent: 600,
        childcare: 200,
        groceries: 100,
        currFine: 0
      }
    });
  };

  scene1 = () => {
    const newTotal = this.state.monthlyExpenses.rent + this.state.monthlyExpenses.childcare + this.state.monthlyExpenses.groceries + 150
    
    this.setState({
      scene: "2A3",      
      cntTickets: this.state.cntTickets + 1,
      monthlyExpenses: {
        currFine: 150,
        total: newTotal,
      },
    })
  };

  partialRent = () => {
    const newCntNoRent = this.state.cntNoRent + 1;
    var newScene = "";
    if(newCntNoRent == 1 && this.state.cntTickets == 2){
      newScene = "brokenLightNoSuspension";
    }
    else{
      newScene = "2A3A4";
    }
    
    this.setState({
      scene: newScene,
      cntNoRent: newCntNoRent,
      ticket: "speeding"
    });

  };

  partialChildCare = () => {
    const newNoChildcare = this.state.cntNoChildcare + 1;
    var newScene = "";
    if((this.state.cntTickets == 1) &&( newNoChildcare == 1) ){
      newScene = "2A3A4";
    }
    else{
      newScene = "unpaidChildCare"
    }
    this.setState({
      scene: newScene,
      //unpaidForfeitures: newunpaidForfeitures,
      cntNoChildcare: newNoChildcare
    });
  };

  paySpeedTicket = () => {
    const newTotal = 1100  //TODO: make it general

    this.setState({
      scene: "2A3",      
      cntTickets: this.state.cntTickets + 1,
      monthlyExpenses: {
        currFine: 200,
        total: newTotal
      },
    })
  };

  eviction = () => {
    this.setState({ scene: "2A3A4A5A6" });
  };

  payTicketNoExpenses = () => {
    this.setState({
      scene: "2A3A4A5",
      cntTickets: this.state.cntTickets + 1
    });
  };

  brokenLight = () => {
    this.setState({
      scene: "2A3A4"
    });
  };
  ignoreSuspension = () => {
    this.setState({
      scene: "ignoreSuspension"
    });

  };

  stopDriving = () => {
    this.setState({ scene: "stopDriving" });
  };
  missWorkcontestTicket = () => {
    const newMonthlyIncome = this.state.monthlyIncome - (this.state.hourlyWage * 6)

    this.setState({
      scene: "2B3",
      monthlyIncome: newMonthlyIncome
    });
  }
  missWorkcontestSpeedingTicket = () => {
    const newMonthlyIncome = this.state.monthlyIncome - (this.state.hourlyWage * 6)
    this.setState({
      scene: "2A3A4B5",
      monthlyIncome: newMonthlyIncome,
      ticket: "speeding",
    });
  }
  ignoreBrakeTicket = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1
    this.setState({
      scene: "brakeTicketUnpaid",
      unpaidForfeitures: newunpaidForfeitures,
      ticket: "brake light",
    });

  };

  fixBrakeLight = () =>{
    const mechanicFee = 45;
    const newMonthlyIncome = this.state.monthlyIncome - (this.state.hourlyWage * 3) - mechanicFee;
    this.setState({
      scene:"fixedLight",
      monthlyIncome: newMonthlyIncome,
    
    });
  };

  ignoreSpeedingTicket = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1;
    var newScene = "";
    if(newunpaidForfeitures == 2){
      newScene = "SpeedingLicenseSuspended";
    }
    else{
      newScene = "brokenLightNoSuspension";
    }

    this.setState({
      scene: newScene,
      unpaidForfeitures: newunpaidForfeitures,
      ticket: "speeding"
    });
  }
    ;


  render() {
    const scene = this.state.scene;

    let main;

    switch (scene) {
      case "0":
        main = (
          <div>
            <button style={styles.button} onClick={this.restart}>
              Restart
            </button>
            <div style={styles.txt} id="text">
              <div>
                You are 27 years old and a single parent of a 3-year-old child. Every Monday through Friday
               you drive to work, at a restaurant where you earn ${this.state.hourlyWage}/hour. You are only able
               to work from 11am-5pm because the restaurant does not open until 11am and you need to pick
               up your child from daycare by 5:30pm. Working {this.state.hoursWork} hours/week, your monthly gross income is ${this.state.monthlyIncome}.

              </div>
              <div>Your total monthly expenses are ${this.state.monthlyExpenses.total}:</div>
              <div>
                {this.state.monthlyExpenses.rent} for rent<br></br>
                {this.state.monthlyExpenses.childcare} for childcare<br></br>
                {this.state.monthlyExpenses.groceries} for groceries<br></br>
              </div>
              <br></br>
              On your way to work, you get pulled over for a broken brake light in violation of Wis. Stat. § 347.14. You are issued a traffic citation with a
               forfeiture of $150 under Wis. Stat. § 347.30(2). What do you do?</div>
            <div style={styles.rows}>
              <button style={styles.button} onClick={this.scene1}>
                Pay off the $150 ticket this month but postpone fixing your brake light.
              </button>
              <button style={styles.button} onClick={this.missWorkcontestTicket}>
                Miss a day of work to go to court, without a lawyer, and try to get rid of the {this.state.ticket} ticket.
              </button>
              <button style={styles.button} onClick={this.ignoreBrakeTicket}>
                Ignore the {this.state.ticket} ticket for now, hopefully you can pay it off later.
              </button>
            </div>
          </div>
        );
        break;
      case "2A3":
        main = (
          <div style={styles.txt} id="text">
            {' '}
            {this.state.scene}
            You paid off your ticket, that means that your monthly expenses were ${this.state.monthlyExpenses.total} (your normal monthly expenses of
              ${this.state.monthlyExpenses.total} + ${this.state.monthlyExpenses.currFine} for your brake light ticket).
              This means that you were short on your monthly expenses.
              What do you do?
            <div>
              <button style={styles.button} onClick={this.partialRent}>
                Pay your normal expenses but just some of your rent.
            </button>
              <button style={styles.button} onClick={this.partialChildCare}>
                Pay your normal expenses but just some of your childcare.
            </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
            </button>
            </div>
          </div>
        );
        break;

        case "fixedLight":
        main = ( 
        <div style={styles.txt} id="text">
        {' '}
        {this.state.scene}
        After missing work for court, missing work for the mechanic, and paying the mechanic, you only took home ${this.state.monthlyIncome} this month. You are short on your $900 monthly expenses. What do you do?
        <div>
          <button style={styles.button} onClick={this.partialRent}>
            Pay your normal expenses but just some of your rent.
        </button>
          <button style={styles.button} onClick={this.partialChildCare}>
            Pay your normal expenses but just some of your childcare.
        </button>
          <button style={styles.button} onClick={this.restart}>
            Restart
        </button>
        </div>
      </div>

        );
        break;  
        case "brakeTicketUnpaid":
          main = (
            <div style={styles.txt} id="text">
              {' '}
              {this.state.scene}
              You have not paid off your brake light ticket, but you paid all your normal monthly expenses. But you get pulled over again for speeding in violation of Wis. Stat. § 346.57(2). You are issued a traffic citation with a forfeiture of $200 under Wis. Stat. § 346.60(3). What do you do?
              <div>
                <button style={styles.button} onClick={this.paySpeedTicket}>
                Pay off the $200 speeding ticket this month.
              </button>
                <button style={styles.button} onClick={this.missWorkcontestSpeedingTicket}>
                Miss a day of work to go to court, without a lawyer, and contest the speeding ticket.
              </button>
              <button style={styles.button} onClick={this.ignoreSpeedingTicket}>
              Ignore the ticket, hopefully you can pay it off later.              
              </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
              </button>
              </div>
            </div>
          );
          break;

      case "SpeedingLicenseSuspended":
        main = (
          <div style={styles.txt} id="text">
            {' '}
            {this.state.scene}
            You have an unpaid forfeiture for speeding. Your driver’s license is suspended for one year from the date of your speeding conviction. What do you do?
            <div>
              <button style={styles.button} onClick={this.ignoreSuspension}>
                Keep driving and ignore the suspension.
            </button>
              <button style={styles.button} onClick={this.stopDriving}>
                Stop driving until you can get your license back.
            </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
            </button>
            </div>
          </div>

        )
        break;
      case "2B3":
        //if(this.state.unpaidForfeitures == 1)
        if (this.state.ticket == "speeding") {
          main = (
            <div style={styles.txt} id="text">
              {' '}
            2B3
            You missed a day of work and went to court without a lawyer. The judge gave you a point reduction but
            did not reduce your forfeiture amount. Because you missed a day of work, your monthly income is only $898.28. What do you do?

              <button style={styles.button} onClick={this.paySpeedTicket}>
                Pay the speeding ticket, making you short for your other monthly expenses.
            </button>
              <button style={styles.button} onClick={this.ignoreSpeedingTicket}>
                Ignore the speeding ticket and pay your normal monthly expenses.
            </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
            </button>

            </div>
          );
        }
        else {
          main = (
            <div style={styles.txt} id="text">
              {' '}
              {this.state.scene}
            You missed a day of work and went to court without a lawyer. The judge agreed to stay the brake light ticket and dismiss it if you show proof
            that you repaired your brake light within 30 days. Because you missed work, your monthly income is only $898.28. You call some mechanics and the
            cheapest you can get your brake light fixed is $45. The mechanic is not open on the weekend, and you’ll miss half your shift (3 hours) to get your
            brake light fixed. What do you do?
              <div>
                <button style={styles.button} onClick={this.brokenLight}>
                  Don’t fix your brake light, you can’t afford to keep missing work, and don’t pay the ticket. Your monthly income was $898.28. You borrow a bit of money
                  and pay all of your ${this.state.monthlyExpenses.total} monthly expenses.
                </button>
                <button style={styles.button} onClick={this.fixBrakeLight}>
                  Schedule a mechanic and miss half your shift. You spent $45 on this service, but now your brake light ticket will be dismissed.
            </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
            </button>
              </div>
            </div>
          );
        }
        break;

      case "2A3A4":
        if (this.state.cntNoRent != 2) {
          main = (
            <div style={styles.txt} id="text">
              {this.state.scene}
              You get pulled over again for speeding in violation of Wis. Stat. § 346.57(2). You are issued a traffic citation with a forfeiture of $200 under Wis. Stat. § 346.60(3). What do you do?
              <div style={styles.rows}>
                <button style={styles.button} onClick={this.paySpeedTicket}>
                  Pay off the $200 ticket this month.
                </button>
                <button style={styles.button} onClick={this.missWorkcontestSpeedingTicket}>
                  Miss a day of work to go to court, without a lawyer, and try to get rid of the speeding ticket.
                </button>
                <button style={styles.button} onClick={this.ignoreSpeedingTicket}>
                  Ignore the speeding ticket for now, hopefully you can pay it off later.
                </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }
        else {
          main = (
            <div style={styles.txt} id="text">
              You have now paid only a portion of your rent two months in a row ($450/$600 last month and $400/$600 this month). Your landlord gives you an eviction notice. What do you do?
              <button style={styles.button}>
                Seek legal help. If you are evicted, you will not be able to find another apartment.
              </button>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }
        break;

      case "2A3A4A5":
        main = (
          <div style={styles.txt} id="text">
            {this.state.scene}
              You paid off your ticket, that means that your monthly expenses were ${this.state.monthlyExpenses.total} (your normal monthly expenses of
              ${this.state.monthlyExpenses.total - this.state.monthlyExpenses.fine} + ${this.state.monthlyExpenses.fine} for your {this.state} ticket).
              This means that you were short on your monthly expenses.
              What do you do?
            <div>
              <button style={styles.button} onClick={this.partialRent}>
                Pay your normal expenses but just some of your rent.
              </button>
              <button style={styles.button} onClick={this.partialChildCare}>
                Pay your normal expenses but just some of your childcare, you cannot afford to pay your $200 childcare.
              </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;

      // case "2A3A4B5":
      //   main = (
      //     <div style={styles.txt} id="text">
      //         You missed a day of work and went to court without a lawyer. The judge gave you a point reduction but did not reduce your forfeiture amount.
      //          Because you missed a day of work, your monthly income is only ${this.state.monthlyIncome}. What do you do?
      //       <div>
      //         <button style={styles.button} onClick={this.payTicketNoExpenses}>
      //         Pay the speeding ticket, making you short for your other monthly expenses.
      //         </button>
      //         <button style={styles.button} onClick={this.ignoreTicket}>
      //         Ignore the speeding ticket and pay your normal monthly expenses.
      //         </button>
      //         <button style={styles.button} onClick={this.restart}>
      //           Restart
      //         </button>
      //       </div>
      //     </div>
      //   );
      //   break;

      case "unpaidChildCare":
        if(this.state.cntNoChildcare != 2){
          main = (
            
            <div style={styles.txt} id="text">
              {this.state.scene}
              {this.state.cntNoChildcare}
              {this.state.cntTickets}
            Your childcare provider warns you that you need to makeup this month’s payment within two weeks or you can no longer bring your child. You have no way to catch up, and so you quit your job and stay home with your child. Now your income is gone. What do you do?
              <button style={styles.button}>
                Seek legal help. If you cannot pay your rent, you risk eviction.
            </button>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
              </button>{' '}
              </div>
            
          </div>  
          );
        }
        else if (this.state.unpaidForfeitures == 2) {
          main = (
            <div style={styles.txt} id="text">
              {this.state.scene}
            Your childcare provider warns you that you need to makeup this month’s payment within two weeks or you can no longer bring your child. You have no way to catch up, and so you quit your job and stay home with your child. Now your income is gone. What do you do?
              <button style={styles.button}>
                Seek legal help. If you cannot pay your rent, you risk eviction.
            </button>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
              </button>{' '}
              </div>
            </div>
          );
        }
        else {
          main = (
            <div style = {styles.txt} id = "text">
              {this.state.scene}
              This is the second month in a row that you have missed parts of your childcare payment (last month you paid $50/$200, this month you paid $0/$200). Your childcare provider tells you to stop bringing your child until you make up the full $350 you owe. What do you do?
              <button style={styles.button}>
                Seek legal help. Without childcare, you cannot work. You need income.
            </button>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
              </button>{' '}
              </div>
            </div>
          );    
        }
        break;
      case "2A3A4B5":
        if (this.state.unpaidForfeitures != 2) {
          main = (
            <div style={styles.txt} id="text">
              2A3A4B5
              You missed a day of work and went to court without a lawyer. The judge gave you a point reduction but did not reduce your
              forfeiture amount. Because you missed a day of work, your monthly income is only $898.28. What do you do?
              <div>
                <button style={styles.button} onClick={this.paySpeedTicket}>
                  Pay the speeding ticket, making you short for your other monthly expenses.
                </button>
                <button style={styles.button} onClick={this.partialChildCare}>
                  Pay your normal expenses but you cannot afford to pay your $200 childcare.
                </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }
        else {
          main = (

            <div style={styles.txt} id="text">
              <div>{this.state.scene}</div>
                You have two unpaid forfeitures, one for the broken brake light and another for speeding. Your driver’s license is suspended for one year from the date of your speeding conviction. What do you do?
              <div>
                <button style={styles.button} onClick={this.ignoreSuspension}>
                  Keep driving and ignore the suspension.
                </button>
                <button style={styles.button} onClick={this.stopDriving}>
                  Stop driving until you can get your license back.
                </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }
        break;

      // case "firstBrakeSecSpeed":
      //   main = (
      //     <div style={styles.txt} id="text">
      //       The same police officer who pulled you over for a broken brake light pulls you over again because it is still broken. 
      //       You receive a ticket for the broken brake light and another for driving without a license under Wis. Stat. § 343.05(3)(a) with a forfeiture of $300.
      //        What do you do?

      //        <button style={styles.button} >
      //           Seek legal help. The forfeitures are becoming insurmountable, and you need to drive to work. 
      //         </button>
      //         <button style={styles.button} onClick={this.restart}>
      //           Restart
      //         </button>  
      //     </div>
      //   )  
      case "brokenLightNoSuspension":
        main = (
          <div style={styles.txt} id="text">
            
            The same police officer who pulled you over for a broken brake light pulls you over again because it is still broken. You are issued a traffic citation with a forfeiture of $150 under Wis. Stat. § 347.30(2). What do you do?  
            <div>
              <button style={styles.button} >
              Seek help. You don’t know how to pay all these forfeitures.
              </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
      break;
      case "ignoreSuspension":
        main = (
          <div style={styles.txt} id="text">
            The same police officer who pulled you over for a broken brake light pulls you over again because it is still broken.
            You receive a ticket for the broken brake light and another for driving without a license under Wis. Stat. § 343.05(3)(a) with a forfeiture of $300. What do you do?
            <div>
              <button style={styles.button} >
                Seek legal help. The forfeitures are becoming insurmountable, and you need to drive to work.
              </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;

      case "stopDriving":
        main = (
          <div style={styles.txt} id="text">
            Without driving, you cannot get to work, and you are worried you’ll be evicted if you keep paying rent. What do you do?
            <div>
              <button style={styles.button} >
                Seek legal help. The forfeitures are becoming insurmountable, and you need to drive to work.
              </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );

        break;
    }


    return (
      <div style={styles.rect} id="game">
        {main}
      </div>
    );
  }
}

export default Scenario;
