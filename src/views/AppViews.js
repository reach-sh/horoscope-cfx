import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
             <h1>Destiny of Starry Sky</h1> 
          {content}
        </header>
      </div>
    );
  }
}

//常驻祈愿、相遇之缘、纠缠之缘


exports.ConnectAccount = class extends React.Component {//连接账户
  render() {
    return (
      <div>
        Connecting，
        If the waiting time is too long, try again
      </div>
    )
  }
}


exports.FundAccount = class extends React.Component { //查看余额，请求水管
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}



exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectOracle()}
          >Oracle</button>
          <br /> deploy the contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectFirBuyer()}
          >Player 1</button>
          <br /> Attach to the Deployer's contract.
        </p>
        <p>
          <button
            onClick={() => parent.selectSecBuyer()}
          >Player 2</button>
          <br /> Attach to the Deployer's contract.
        </p>
      </div>
    );
  }
}

export default exports;
