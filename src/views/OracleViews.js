import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Oracle">
        <h2>Oracle</h2>
        {content}
      </div>
    );
  }
}
//=====================


exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Do you want to deploy the contract？
        <br />
        <br />
        <button
          onClick={() => parent.deployBuy()}
        >
        Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying</div>
    );
  }
}

exports.WaitingForAttachers = class extends React.Component {
  async copyToClipborad(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for players...
        <br />Please send them the contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipborad(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}


//======================================================

exports.getlove = class extends React.Component {
  render() {
    const {time,parent} = this.props;
    const {love} = this.state || {};
    // const {love,career,fortune} = this.state
    return (
      <div>
        This is the time that player choose to pray：{time}
        <br />
        Please predict the LOVE of the player！
        <br />
        <br />
        LOVE：<input
          type='number'
          onChange={(e) => this.setState({love:e.currentTarget.value})}
        /> <button 
        disabled={!love}
        onClick={() => parent.setlove(this.state.love)}>Rate</button>
        <br />
      </div>
    );
  }
}


exports.getcarrer = class extends React.Component {
  render() {
    const {time,parent} = this.props;
    const {carrer} = this.state || {};
    // const {carrergetcarrer,carrergetcarrer,carrergetcarrer} = this.state
    return (
      <div>
        This is the time that player choose to pray：{time}
        <br />
        Please predict the CAREER of the player！
        <br />
        <br />
        CAREER：<input
          type='number'
          onChange={(e) => this.setState({carrer:e.currentTarget.value})}
        /> <button 
        disabled={!carrer}
        onClick={() => parent.setcarrer(this.state.carrer)}>Rate</button>
        <br />
      </div>
    );
  }
}


exports.getfortune = class extends React.Component {
    render() {
      const {time,parent} = this.props;
      const {fortune} = this.state || {};
      // const {fortune,fortune,fortune} = this.state
      return (
        <div>
          This is the time that player choose to pray：{time}
          <br />
          Please predict the FORTUNE of the player！
          <br />
          <br />
          FORTUNE: <input
            type='number'
            onChange={(e) => this.setState({fortune:e.currentTarget.value})}
          /> <button 
          disabled={!fortune}
          onClick={() => parent.setfortune(this.state.fortune)}>Rate</button>
          <br />
        </div>
      );
    }
  }

exports.getTimeOracle = class extends React.Component {
  render() {
    const {time} = this.props;
    return (
      <div>
        This is the time that player choose to pray：{time}
        <br />
      </div>
    );
  }
}













export default exports;