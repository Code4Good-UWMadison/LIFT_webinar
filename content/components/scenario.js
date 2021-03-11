import React, { Component } from 'react';
import { Link } from 'gatsby';
//import xlsxFile from 'read-excel-file';
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
  randomnizer(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  constructor(props) {
    super(props);
    this.state = {
      currentCase: '',
      unpaidForfeitures: 0,
      cntTickets: 0,
      ticket: 'brake light',
      cntNoRent: 0,
      cntNoChildcare: 0,
      scene: '0',
      hourlyWage: 7.25,
      hoursWork: 30,
      fixBrakeLight: 'false',
      ignoredBrakeTicket: 'false',
      monthlyIncome: 941.78,
      monthlyExpenses: {
        total: 900,
        rent: 600,
        childcare: 200,
        groceries: 100,
        currFine: 0,
      },
    };
  }

  restart = () => {
    this.setState({
      currentCase: '',
      unpaidForfeitures: 0,
      ticket: 'brake light',
      cntTickets: 0,
      cntNoRent: 0,
      cntNoChildcare: 0,
      scene: '0',
      fixBrakeLight: 'false',
      ignoredBrakeTicket: 'false',
      monthlyIncome: 941.78,
      monthlyExpenses: {
        total: 900,
        rent: 600,
        childcare: 200,
        groceries: 100,
        currFine: 0,
      },
    });
  };

  //method handler when user chooses to pay ticket, but postpone fixing light in the first choice
  scene1 = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1;
    const newTotal =
      this.state.monthlyExpenses.rent +
      this.state.monthlyExpenses.childcare +
      this.state.monthlyExpenses.groceries +
      150;

    this.setState({
      currentCase: '2A3',
      scene: '2A3',
      cntTickets: this.state.cntTickets + 1,
      monthlyExpenses: {
        currFine: 150,
        total: newTotal,
        //unpaidForfeitures: newunpaidForfeitures,
      },
    });
  };

  //The user chooses to pay all monthly expenses, but only partial rent
  partialRent = () => {
    const newCntNoRent = this.state.cntNoRent + 1;
    var newScene = '';
    const newCurrCase = this.state.currentCase + 'A6';
    if (newCurrCase == '2B3A4A5A6') {
      newScene = 'partialRentEvictionWarning';
    } else if (newCntNoRent == 1 && this.state.cntTickets == 2) {
      if (this.state.fixBrakeLight == 'true') {
        newScene = 'partialRentEvictionWarning';
      } else if (this.state.ignoredBrakeTicket == 'true') {
        newScene = 'unpaidBrakeTickeUnpaidRent';
      } else {
        newScene = 'brokenLightNoSuspension';
      }
    } else {
      newScene = '2A3A4';
    }

    this.setState({
      currentCase: newCurrCase,
      scene: newScene,
      cntNoRent: newCntNoRent,
      ticket: 'speeding',
    });
  };

  //The user chooses to pay all monthly expenses, but only partial childcare
  partialChildCare = () => {
    const newNoChildcare = this.state.cntNoChildcare + 1;
    var newScene = '';
    if (this.state.ignoredBrakeTicket == 'true') {
      if (this.state.unpaidForfeitures == 1) {
        newScene = 'unpaidBrakeTickeUnpaidChildCare';
      } else {
        newScene = 'unpaidChildCare';
      }
    } else if (this.state.cntTickets == 1 && newNoChildcare == 1) {
      newScene = '2A3A4';
    } else {
      newScene = 'unpaidChildCare';
    }
    this.setState({
      scene: newScene,
      //unpaidForfeitures: newunpaidForfeitures,
      cntNoChildcare: newNoChildcare,
    });
  };

  //The user chooses to pay off the speeding ticket
  paySpeedTicket = () => {
    const newTotal = 1100;
    this.setState({
      currentCase: this.state.currentCase + 'A5',
      scene: '2A3',
      cntTickets: this.state.cntTickets + 1,
      monthlyExpenses: {
        currFine: 200,
        total: newTotal,
        ticket: 'speeding',
      },
    });
  };

  //The user chooses to pay off the ticket for broken light, but doesn't fix it
  payTicketIgnoreFixing = () => {
    this.setState({
      scene: 'payBrakeLightTicket',
      ticket: 'brake light',
    });
  };

  //Handler for when user pays partial rent, leading to an eviction warning from the landlord
  partialRentEvictionWarning = () => {
    const newCntNoRent = this.state.cntNoRent + 1;
    this.setState({
      cntNoRent: newCntNoRent,
      scene: 'partialRentEvictionWarning',
    });
  };
  eviction = () => {
    this.setState({ scene: '2A3A4A5A6' });
  };

  // //
  // payTicketNoExpenses = () => {
  //   const newCntTickets = this.state.cntTickets + 1;
  //   this.setState({
  //     scene: '2A3A4A5',
  //     cntTickets: newCntTickets,
  //   });
  // };

  //Handler for when user doesn't fix broken light, nor pays his ticket. Only pays monthly expenses
  brokenLight = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1;
    this.setState({
      currentCase: this.state.currentCase + 'A4',
      scene: '2A3A4',
      unpaidForfeitures: newunpaidForfeitures,
    });
  };

  //Handler for when user gets a second ticket due to a broken brake light
  secBrokenLight = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1;

    this.setState({
      unpaidForfeitures: newunpaidForfeitures,
      scene: 'secBrokenLight',
    });
  };

  //Handler for when user ignores driving license suspension and continues to drive
  ignoreSuspension = () => {
    this.setState({
      scene: 'ignoreSuspension',
    });
  };

  //Handler for when user stops driving due to suspension
  stopDriving = () => {
    this.setState({ scene: 'stopDriving' });
  };

  //when user misses work to contest brake light ticket
  missWorkcontestTicket = () => {
    const newMonthlyIncome = this.state.monthlyIncome - this.state.hourlyWage * 6;
    const newCntTickets = this.state.cntTickets + 1;
    this.setState({
      currentCase: '2B3',
      scene: '2B3',
      monthlyIncome: newMonthlyIncome,
      cntTickets: newCntTickets,
    });
  };

  //when user misses work to contest the ticket for speeding
  missWorkcontestSpeedingTicket = () => {
    const newMonthlyIncome = this.state.monthlyIncome - this.state.hourlyWage * 6;
    this.setState({
      scene: '2A3A4B5',
      monthlyIncome: newMonthlyIncome,
      ticket: 'speeding',
    });
  };

  //when user ignores the ticket he got for the broken brake light
  ignoreBrakeTicket = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1;
    const newCntTickets = this.state.cntTickets + 1;
    this.setState({
      scene: 'brakeTicketUnpaid',
      unpaidForfeitures: newunpaidForfeitures,
      ticket: 'speeding',
      ignoredBrakeTicket: 'true',
      cntTickets: newCntTickets,
    });
  };

  //user chooses to fix the brake light, so the brake light ticket dismissed, but misses work
  fixBrakeLight = () => {
    const mechanicFee = 45;
    const newMonthlyIncome = this.state.monthlyIncome - this.state.hourlyWage * 3 - mechanicFee;
    this.setState({
      scene: 'fixedLight',
      monthlyIncome: newMonthlyIncome,
      fixBrakeLight: 'true',
    });
  };

  //ignore both the broken light ticket, then the speeding ticket
  twoCthreeC = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1;
    this.setState({
      scene: 'SpeedingLicenseSuspended',
      ticket: 'speeding',
      unpaidForfeitures: newunpaidForfeitures,
    });
  };

  //user needs to seek help due to surmounting forfeitures
  getHelp = () => {
    this.setState({
      scene: 'getHelp',
    });
  };

  //Ignore the ticket user got for speeding
  ignoreSpeedingTicket = () => {
    const newunpaidForfeitures = this.state.unpaidForfeitures + 1;
    var newScene = '';
    const newCurrCase = this.state.currentCase + 'C5';
    if (newCurrCase == '2B3A4C5') {
      newScene = 'SpeedingLicenseSuspended';
    } else if (this.state.ticket == 'speeding' || this.state.fixBrakeLight == 'true') {
      newScene = 'SpeedingLicenseSuspended';
    } else {
      newScene = 'brokenLightNoSuspension';
    }

    this.setState({
      currentCase: newCurrCase,
      scene: newScene,
      unpaidForfeitures: newunpaidForfeitures,
      ticket: 'speeding',
    });
  };

  render() {
    const scene = this.state.scene;
    console.log('scene: ' + this.state.scene + ' currentCase: ' + this.state.currentCase);
    let main;

    switch (scene) {
      case '0':
        main = (
          <div>
            <button style={styles.button} onClick={this.restart}>
              Restart
            </button>
            <div style={styles.txt} id="text">
              <div>
                You are 27 years old and a single parent of a 3-year-old child. Every Monday through
                Friday you drive to work, at a restaurant where you earn $7.25/hour. You are only
                able to work from 11am-5pm because the restaurant does not open until 11am and you
                need to pick up your child from daycare by 5:30pm. Working 30 hours/week, your
                monthly gross income is $941.78.
              </div>
              <div>Your total monthly expenses are ${this.state.monthlyExpenses.total}:</div>
              <div>
                {this.state.monthlyExpenses.rent} for rent<br></br>
                {this.state.monthlyExpenses.childcare} for childcare<br></br>
                {this.state.monthlyExpenses.groceries} for groceries<br></br>
              </div>
              <br></br>
              On your way to work, you get pulled over for a broken brake light in violation of Wis.
              Stat. § 347.14. You are issued a traffic citation with a forfeiture of $150 under Wis.
              Stat. § 347.30(2). What do you do?
            </div>
            <div style={styles.rows}>
              <button style={styles.button} onClick={this.scene1}>
                Pay off the $150 ticket this month but postpone fixing your brake light.
              </button>
              <button style={styles.button} onClick={this.missWorkcontestTicket}>
                Miss a day of work to go to court, without a lawyer, and try to get rid of the{' '}
                {this.state.ticket} ticket.
              </button>
              <button style={styles.button} onClick={this.ignoreBrakeTicket}>
                Ignore the {this.state.ticket} ticket for now, hopefully you can pay it off later.
              </button>
            </div>
          </div>
        );
        break;
      case '2A3':
        let monthlyExpenses =
          this.state.monthlyExpenses.total - this.state.monthlyExpenses.currFine;
        main = (
          <div style={styles.txt} id="text">
            {' '}
            You paid off your ticket, that means that your monthly expenses were $
            {this.state.monthlyExpenses.total} (your normal monthly expenses of ${monthlyExpenses} +
            ${this.state.monthlyExpenses.currFine} for your {this.state.ticket} ticket). This means
            that you were short on your monthly expenses. What do you do?
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

      case 'fixedLight':
        main = (
          <div style={styles.txt} id="text">
            {' '}
            After missing work for court, missing work for the mechanic, and paying the mechanic,
            you only took home ${this.state.monthlyIncome} this month. You are short on your $900
            monthly expenses. What do you do?
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

      case 'payBrakeLightTicket':
        main = (
          <div style={styles.txt} id="text">
            {' '}
            By paying the ticket, you will be short on your normal monthly expenses. What do you do?
            <div>
              <button style={styles.button} onClick={this.partialRentEvictionWarning}>
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
      case 'partialRentEvictionWarning':
        main = (
          <div style={styles.txt} id="text">
            {' '}
            Your landlord warns you that if you miss rent again, he’ll serve an eviction notice.
            What do you do?{' '}
            <div>
              <button style={styles.button}>
                <Link to="../conclusion">
                  Seek help. You don’t know how to catch up on rent, and you can’t risk being
                  evicted.
                </Link>
              </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;
      case 'brakeTicketUnpaid':
        main = (
          <div style={styles.txt} id="text">
            {' '}
            You have not paid off your brake light ticket, but you paid all your normal monthly
            expenses. But you get pulled over again for speeding in violation of Wis. Stat. §
            346.57(2). You are issued a traffic citation with a forfeiture of $200 under Wis. Stat.
            § 346.60(3). What do you do?
            <div>
              <button style={styles.button} onClick={this.paySpeedTicket}>
                Pay off the $200 speeding ticket this month.
              </button>
              <button style={styles.button} onClick={this.missWorkcontestSpeedingTicket}>
                Miss a day of work to go to court, without a lawyer, and contest the speeding
                ticket.
              </button>
              <button style={styles.button} onClick={this.twoCthreeC}>
                Ignore the ticket, hopefully you can pay it off later.
              </button>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );

        break;

      case 'SpeedingLicenseSuspended':
        if (this.state.unpaidForfeitures == 1 && this.state.currentCase != '2B3A4C5') {
          main = (
            <div style={styles.txt} id="text">
              You have an unpaid forfeiture for speeding. Your driver’s license is suspended for one
              year from the date of your speeding conviction. What do you do?
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
        } else {
          main = (
            <div style={styles.txt} id="text">
              You have two unpaid forfeitures, one for the broken brake light and another for
              speeding. Your driver’s license is suspended for one year from the date of your
              speeding conviction. What do you do?
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
      case '2B3':
        //if(this.state.unpaidForfeitures == 1)
        if (this.state.ticket == 'speeding') {
          main = (
            <div style={styles.txt} id="text">
              {' '}
              2B3 You missed a day of work and went to court without a lawyer. The judge gave you a
              point reduction but did not reduce your forfeiture amount. Because you missed a day of
              work, your monthly income is only $898.28. What do you do?
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
        } else {
          main = (
            <div style={styles.txt} id="text">
              {' '}
              You missed a day of work and went to court without a lawyer. The judge agreed to stay
              the brake light ticket and dismiss it if you show proof that you repaired your brake
              light within 30 days. Because you missed work, your monthly income is only $898.28.
              You call some mechanics and the cheapest you can get your brake light fixed is $45.
              The mechanic is not open on the weekend, and you’ll miss half your shift (3 hours) to
              get your brake light fixed. What do you do?
              <div>
                <button style={styles.button} onClick={this.brokenLight}>
                  Don’t fix your brake light, you can’t afford to keep missing work, and don’t pay
                  the ticket. Your monthly income was $898.28. You borrow a bit of money and pay all
                  of your ${this.state.monthlyExpenses.total} monthly expenses.
                </button>
                <button style={styles.button} onClick={this.fixBrakeLight}>
                  Schedule a mechanic and miss half your shift. You spent $45 on this service, but
                  now your brake light ticket will be dismissed.
                </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }
        break;
      case 'unpaidBrakeTickeUnpaidRent':
        main = (
          <div style={styles.txt} id="text">
            The same police officer who pulled you over for a broken brake light pulls you over
            again because it is still broken. You are issued a traffic citation with a forfeiture of
            $150 under Wis. Stat. § 347.30(2). What do you do?
            <div style={styles.rows}>
              {/* <button style={styles.button}>
                Seek help. You don’t know how to pay all these forfeitures.
            </button>*/}
              <Link to="../conclusion">
                Seek help. You don’t know how to pay all these forfeitures.
              </Link>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );

        break;
      case 'unpaidBrakeTickeUnpaidChildCare':
        if (this.state.cntNoChildcare == 1) {
          main = (
            <div style={styles.txt} id="text">
              The same police officer who pulled you over for a broken brake light pulls you over
              again because it is still broken. You are issued a traffic citation with a forfeiture
              of $150 under Wis. Stat. § 347.30(2). What do you do?
              <div style={styles.rows}>
                <button style={styles.button} onClick={this.payTicketIgnoreFixing}>
                  Pay off the $150 ticket, making you short on your normal monthly expenses.
                </button>
                <Link to="../conclusion">
                  Seek help. You don’t know how to pay all these forfeitures.
                </Link>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        } else {
          main = (
            <div style={styles.txt} id="text">
              Your childcare provider warns you that you need to makeup this month’s payment within
              two weeks or you can no longer bring your child. Unfortunately, you are not able to
              increase your hours at work, and you have no way to makeup these costs. You have to
              stop taking your child to daycare. What do you do?
              {/* <button style={styles.button}>
                Seek legal help. If you are evicted, you will not be able to find another apartment.
              </button> */}
              <Link to="../conclusion">
                Seek legal help. If you are evicted, you will not be able to find another apartment.
              </Link>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }
        break;
      case '2A3A4':
        if (this.state.cntNoRent != 2) {
          main = (
            <div style={styles.txt} id="text">
              {/* {this.state.scene}
              {this.state.unpaidForfeitures}
              <div>{this.state.cntTickets}</div> */}
              You get pulled over again for speeding in violation of Wis. Stat. § 346.57(2). You are
              issued a traffic citation with a forfeiture of $200 under Wis. Stat. § 346.60(3). What
              do you do?
              <div style={styles.rows}>
                <button style={styles.button} onClick={this.paySpeedTicket}>
                  Pay off the $200 ticket this month.
                </button>
                <button style={styles.button} onClick={this.missWorkcontestSpeedingTicket}>
                  Miss a day of work to go to court, without a lawyer, and try to get rid of the
                  speeding ticket.
                </button>
                <button style={styles.button} onClick={this.ignoreSpeedingTicket}>
                  Ignore the speeding ticket for now, hopefully you can pay it off later.
                </button>
                <div>
                  <button style={styles.button} onClick={this.restart}>
                    Restart
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          main = (
            <div style={styles.txt} id="text">
              You have now paid only a portion of your rent two months in a row. Your landlord gives
              you an eviction notice. What do you do?<br></br>
              <Link to="../conclusion">
                Seek legal help. If you are evicted, you will not be able to find another apartment.
              </Link>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }
        break;

      case '2A3A4A5':
        main = (
          <div style={styles.txt} id="text">
            You paid off your ticket, that means that your monthly expenses were $
            {this.state.monthlyExpenses.total} (your normal monthly expenses of $
            {this.state.monthlyExpenses.total - this.state.monthlyExpenses.fine} + $
            {this.state.monthlyExpenses.fine} for your {this.state} ticket). This means that you
            were short on your monthly expenses. What do you do?
            <div>
              <button style={styles.button} onClick={this.partialRent}>
                Pay your normal expenses but just some of your rent.
              </button>
              <button style={styles.button} onClick={this.partialChildCare}>
                Pay your normal expenses but just some of your childcare, you cannot afford to pay
                your $200 childcare.
              </button>
              <br></br>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;

      case 'unpaidChildCare':
        if (this.state.cntNoChildcare != 2) {
          main = (
            <div style={styles.txt} id="text">
              Your childcare provider warns you that you need to makeup this month’s payment within
              two weeks or you can no longer bring your child. You have no way to catch up, and so
              you quit your job and stay home with your child. Now your income is gone. What do you
              do?
              <div>
                {/*<button style={styles.button}>
                  Seek help. Without childcare, you cannot work. You need income.
                </button>*/}
                <Link to="../conclusion">
                  Seek help. Without childcare, you cannot work. You need income.
                </Link>
                <br></br>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>{' '}
              </div>
            </div>
          );
        } else if (this.state.unpaidForfeitures == 2) {
          main = (
            <div style={styles.txt} id="text">
              Your childcare provider warns you that you need to makeup this month’s payment within
              two weeks or you can no longer bring your child. You have no way to catch up, and so
              you quit your job and stay home with your child. Now your income is gone. What do you
              do?
              {/*<button style={styles.button}>
                  Seek help. Without childcare, you cannot work. You need income.
                </button>*/}
              <Link to="../conclusion">
                Seek help. Without childcare, you cannot work. You need income.
              </Link>
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
              This is the second month in a row that you have missed parts of your childcare
              payment. Your childcare provider tells you to stop bringing your child until you make
              up the full $350 you owe. What do you do?
              {/*<button style={styles.button}>
                  Seek help. Without childcare, you cannot work. You need income.
                </button>*/}
              <Link to="../conclusion">
                Seek help. Without childcare, you cannot work. You need income.
              </Link>
              <div>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>{' '}
              </div>
            </div>
          );
        }
        break;
      case '2A3A4B5':
        if (this.state.unpaidForfeitures != 2) {
          main = (
            <div style={styles.txt} id="text">
              You missed a day of work and went to court without a lawyer. The judge gave you a
              point reduction but did not reduce your forfeiture amount. Because you missed a day of
              work, your monthly income is only $898.28. What do you do?
              <div>
                <button style={styles.button} onClick={this.paySpeedTicket}>
                  Pay the speeding ticket, making you short for your other monthly expenses.
                </button>
                <button style={styles.button} onClick={this.ignoreSpeedingTicket}>
                  Ignore the ticket and pay your normal monthly expenses.
                </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        } else {
          main = (
            <div style={styles.txt} id="text">
              You have two unpaid forfeitures, one for the broken brake light and another for
              speeding. Your driver’s license is suspended for one year from the date of your
              speeding conviction. What do you do?
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

      case 'brokenLightNoSuspension':
        if (this.state.unpaidForfeitures != 1) {
          main = (
            <div style={styles.txt} id="text">
              The same police officer who pulled you over for a broken brake light pulls you over
              again because it is still broken. You are issued another traffic citation with a
              forfeiture of $150 under Wis. Stat. § 347.30(2). What do you do?
              <div>
                {/*<button style={styles.button}>

                  Seek help. You don’t know how to pay all these forfeitures.
                </button>*/}
                <Link to="../conclusion">
                  Seek help. You don’t know how to pay all these forfeitures.
                </Link>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        } else {
          main = (
            <div style={styles.txt} id="text">
              The same police officer who pulled you over for a broken brake light pulls you over
              again because it is still broken. You are issued another traffic citation with a
              forfeiture of $150 under Wis. Stat. § 347.30(2). What do you do?
              <div>
                <button style={styles.button} onClick={this.payTicketIgnoreFixing}>
                  Pay off the $150 ticket this month but continue to postpone fixing your brake
                  light.{' '}
                </button>
                <button style={styles.button} onClick={this.secBrokenLight}>
                  Fix your brake light for $45, missing half your shift at work, but ignore the
                  brake light ticket for now.{' '}
                </button>
                <button style={styles.button} onClick={this.secBrokenLight}>
                  Ignore the ticket for now, hopefully you can pay it off later, and postpone fixing
                  your brake light.
                </button>
                <button style={styles.button} onClick={this.restart}>
                  Restart
                </button>
              </div>
            </div>
          );
        }

        break;
      case 'secBrokenLight':
        main = (
          <div style={styles.txt} id="text">
            You have two unpaid forfeitures, one for speeding and another for the second broken
            brake light violation. Your driver’s license is suspended for one year from the date of
            your broken brake light conviction. What do you do?
            <div>
              {/* <button style={styles.button}>
                Seek legal help. The forfeitures are becoming insurmountable, and and you need your
                license back to drive to work.
              </button> */}
              <Link to="../conclusion">
                Seek legal help. The forfeitures are becoming insurmountable, and and you need your
                license back to drive to work.
              </Link>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;
      case 'ignoreSuspension':
        main = (
          <div style={styles.txt} id="text">
            The same police officer who pulled you over for a broken brake light pulls you over
            again because it is still broken. You receive a ticket for the broken brake light and
            another for driving without a license under Wis. Stat. § 343.05(3)(a) with a forfeiture
            of $300. What do you do?
            <div>
              {/* <button style={styles.button}>
                Seek legal help. The forfeitures are becoming insurmountable, and you need to drive
                to work.
              </button> */}
              <Link to="../conclusion">
                Seek legal help. The forfeitures are becoming insurmountable, and you need to drive
                to work.
              </Link>

              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;

      case 'getHelp':
        main = (
          <div style={styles.txt} id="text">
            {''}
            conclusion message
            <div>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );
        break;

      case 'stopDriving':
        main = (
          <div style={styles.txt} id="text">
            Without driving, you cannot get to work, and you are worried you’ll be evicted if you
            don't pay rent. What do you do?
            <div>
              {/* <button style={styles.button}>
                Seek legal help. The forfeitures are becoming insurmountable, and you need to drive
                to work.
              </button> */}
              <Link to="../conclusion">
                Seek legal help. The forfeitures are becoming insurmountable, and you need to drive
                to work.
              </Link>
              <button style={styles.button} onClick={this.restart}>
                Restart
              </button>
            </div>
          </div>
        );

        break;
    }

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
