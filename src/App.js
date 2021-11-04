import React from 'react';
import AppViews from './views/AppViews';
import FirBuyerViews from './views/FirBuyerViews';
import SecBuyerViews from './views/SecBuyerViews';
import OracleViews from './views/OracleViews';
import { renderView } from './views/render';
import './index.css';
import * as buy from './reach/build/buy.main.mjs';
import * as pair from './reach/build/pair.main.mjs';
import * as rate from './reach/build/rate.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib('CFX');
const { standardUnit } = reach;
const defaults = { defaultFundAmt: '100', standardUnit };
reach.setProviderByName('TestNet');


class App extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = { view: 'ConnectAccount', ...defaults };
    }
    async componentDidMount() {
        const now = await reach.getNetworkTime();
        reach.setQueryLowerBound(reach.sub(now, 500));
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({ acc, bal });
        try {
            const faucet = await reach.getFaucet();
            this.setState({ view: 'FundAccount', faucet });
        } catch (e) {
            this.setState({ view: 'DeployerOrAttacher' });
        }
    }
    async fundAccount(fundAmount) {
        await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({ view: 'DeployerOrAttacher' });
    }
    async skipFundAccount() { this.setState({ view: 'DeployerOrAttacher' }); }


    selectOracle() { this.setState({ view: 'Wrapper', ContentView: Oracle, name: '星空：相遇之缘' }); }
    selectFirBuyer() { this.setState({ view: 'Wrapper', ContentView: FirBuyer, name: '星空：相遇之缘' }); }
    selectSecBuyer() { this.setState({ view: 'Wrapper', ContentView: SecBuyer, name: '星空：相遇之缘' }); }

    render() { return renderView(this, AppViews); }
}


class Player extends React.Component {
    random() { return reach.hasRandom.random(); }
    informTimeout() { this.setState({ view: 'Timeout' }); }
    async showOwner(address, id, love, career, fortune) {
        const owner = reach.formatAddress(address);
        const id1 = id.toString()
        const love1 = love.toString()
        const career1 = career.toString()
        const fortune1 = fortune.toString()
        console.log(owner, id1, love1, career1, fortune1)
        this.setState({ view: 'showNFT', owner, id1, love1, career1, fortune1 })
    }

    async getTime(time) { this.setState({ view: 'getTime', time: time }); }
    waiting() { this.setState({ view: 'Waiting' }) }

    goodbye() { this.setState({ view: 'Done' }) }
}


class Oracle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'Deploy' };
    }

    async deployBuy() {
        this.setState({ view: 'Deploying' });

        const ctcBuy= this.props.acc.deploy(buy)
        const ctcPair= this.props.acc.deploy(pair)
        const ctcRate= this.props.acc.deploy(rate)

        const infos = {
            info1: await ctcBuy.getInfo(),
            info2: await ctcPair.getInfo(),
            info3: await ctcRate.getInfo()
        };

        this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
        const ctcInfoStr = JSON.stringify(infos, null, 2);
        this.setState({ view: 'WaitingForAttachers', ctcInfoStr });
        await buy.Oracle(ctcBuy, this);
        // await pair.Oracle(this.state.ctcPair, this);
        await rate.Oracle(ctcRate, this);
    }


    render() { return renderView(this, OracleViews); }
    async getTime(time) { this.setState({ view: 'getTimeOracle', time: time }); }

    async get_love() {
        const love = await new Promise(resolveLove => {
            this.setState({ view: 'getlove', time: this.state.time, resolveLove })
        });

        return love
    }
    setlove(love) { console.log(love); this.state.resolveLove(love); }

    async get_career() {
        const career = await new Promise(resolveCareer => {
            this.setState({ view: 'getcarrer', time: this.state.time, resolveCareer })
        });
        console.log(career)
        return career
    }
    setcarrer(career) { this.state.resolveCareer(career) }

    async get_fortune() {
        const fortune = await new Promise(resolveFortune => {
            this.setState({ view: 'getfortune', time: this.state.time, resolveFortune })
        });
        console.log(fortune)
        return fortune
    }
    setfortune(fortune) { this.setState({ view: 'Waiting' }); this.state.resolveFortune(fortune) }

}

//=============================================================================================


class FirBuyer extends Player {
    constructor(props) {
        super(props);
        this.state = { view: 'Attach' };
    }
    async attachBuy(ctcInfoStr) {
        const ctc = this.props.acc.attach(buy, JSON.parse(ctcInfoStr).info1);
        const ctc1 = this.props.acc.attach(pair, JSON.parse(ctcInfoStr).info2);
        const ctc2 = this.props.acc.attach(rate, JSON.parse(ctcInfoStr).info3)
        this.setState({ view: 'Attaching' });
        await buy.FirBuyer(ctc, this);
        await pair.FirBuyer(ctc1, this);
        await rate.FirBuyer(ctc2, this);
    }

    async showNFT() {
        const owner1 = this.state.ctc.getViews().vNFT.owner1()
        const love1 = this.state.ctc.getViews().vNFT.love1()
        const career1 = this.state.ctc.getViews().vNFT.career1()
        const fortune1 = this.state.ctc.getViews().vNFT.fortune1()

        console.log(owner1, love1, career1, fortune1)
        this.setState({ view: 'showNFT', owner1, love1, career1, fortune1 })
    }


    async showPersonalInfo(personalInfo) {
        const PInfo = personalInfo.toString()
        console.log(PInfo);
        this.setState({ view: 'showPersonalInfo', PInfo })
    }

    async buyNFT() {
        const time = await new Promise(resolveTime => {
            this.setState({ view: 'buyNFT', resolveTime })
        });
        return time
    }
    setTime(time) { this.setState({ view: 'getTime', time }); this.state.resolveTime(time) }

    async generat_id() {
        const id = reach.randomUInt()._hex;
        console.log(id)
        this.setState({ view: 'generate_id', id })
        return id
    }



    async getPersonalInfo() {
        const personalInfo = await new Promise(resolvePersonalInfo => {
            this.setState({ view: 'getPersonalInfo', resolvePersonalInfo })
        });
        return personalInfo
    }
    setPersonalInfo(personalInfo) { this.setState({ view: 'Waiting' }); this.state.resolvePersonalInfo(personalInfo) }


    async getWords(prevWords, idx) {
        const oldDialog = (this.state && this.state.dialog) || [];
        const dialogArr = oldDialog.split('\n');
        if (idx > 0) { dialogArr[idx - 1] = prevWords; }
        const dialog = dialogArr.join('\n');
        const Words = await new Promise(resolveWords => {
            this.setState({ view: 'getWords', dialog, resolveWords })
        });
        return Words
    }
    setWords(Words) { this.setState({ view: 'Viewdialog' }); this.state.resolveWords(Words) }


    async getScore() {
        const score = await new Promise(resolveScore => {
            this.setState({ view: 'getScore', resolveScore })
        });

        return score
    }
    setscore(score) { this.setState({ view: 'Waiting' }); this.state.resolveScore(score); }

    async showChatInfo(ChatInfo) {
        const chatInfo = ChatInfo.toString()
        this.setState({ view: 'showChatInfo', chatInfo })
    }

    async getChatInfo() {
        const ChatInfo = await new Promise(resolveChatInfo => {
            this.setState({ view: 'getChatInfo', resolveChatInfo })
        });
        return ChatInfo
    }
    setChatInfo(ChatInfo) { this.setState({ view: 'Waiting' }); this.state.resolveChatInfo(ChatInfo) }


    async showScore(Score) {
        const score = Score.toString()
        this.setState({ view: 'showScore', score })
    }


    render() { return renderView(this, FirBuyerViews); }
}


//==========================================================================




class SecBuyer extends Player {
    constructor(props) {
        super(props);
        this.state = { view: 'Attach' };
    }
    async attachBuy(ctcInfoStr) {
        const ctc = this.props.acc.attach(buy, JSON.parse(ctcInfoStr).info1);
        const ctc1 = this.props.acc.attach(pair, JSON.parse(ctcInfoStr).info2);
        const ctc2 = this.props.acc.attach(rate, JSON.parse(ctcInfoStr).info3)
        this.setState({ view: 'Attaching' });
        await buy.SecBuyer(ctc, this);
        await pair.SecBuyer(ctc1, this);
        await rate.SecBuyer(ctc2, this);
    }

    async showNFT() {
        const owner1 = this.state.ctc.getViews().vNFT.owner2()
        const love1 = this.state.ctc.getViews().vNFT.love2()
        const career1 = this.state.ctc.getViews().vNFT.career2()
        const fortune1 = this.state.ctc.getViews().vNFT.fortune2()

        console.log(owner1, love1, career1, fortune1)
        this.setState({ view: 'showNFT', owner1, love1, career1, fortune1 })
    }

    async showPersonalInfo(personalInfo) {
        const PInfo = personalInfo.toString()
        console.log(PInfo);
        this.setState({ view: 'showPersonalInfo', PInfo })
    }

    async buyNFT() {
        const time = await new Promise(resolveTime => {
            this.setState({ view: 'buyNFT', resolveTime })
        });
        return time
    }
    setTime(time) { this.setState({ view: 'getTime', time }); this.state.resolveTime(time) }

    async generat_id() {
        const id = reach.randomUInt()._hex;
        console.log(id)
        this.setState({ view: 'generate_id', id })
        return id
    }

    async getPersonalInfo() {
        const personalInfo = await new Promise(resolvePersonalInfo => {
            this.setState({ view: 'getPersonalInfo', resolvePersonalInfo })
        });
        return personalInfo
    }
    setPersonalInfo(personalInfo) { this.setState({ view: 'Waiting' }); this.state.resolvePersonalInfo(personalInfo) }


    async getWords(Dialog) {
        const dialog = Dialog.join('\n')
        const Words = await new Promise(resolveWords => {
            this.setState({ view: 'getWords', dialog, resolveWords })
        });
        return Words
    }
    setWords(Words, dialog) { this.setState({ view: 'Viewdialog', dialog }); this.state.resolveWords(Words) }

    async getScore() {
        const score = await new Promise(resolveScore => {
            this.setState({ view: 'getScore', resolveScore })
        });

        return score
    }
    setscore(score) { this.setState({ view: 'Waiting' }); this.state.resolveScore(score); }

    async showChatInfo(ChatInfo) {
        const chatInfo = ChatInfo.toString()
        this.setState({ view: 'showChatInfo', chatInfo })
    }

    async getChatInfo() {
        const ChatInfo = await new Promise(resolveChatInfo => {
            this.setState({ view: 'getChatInfo', resolveChatInfo })
        });
        return ChatInfo
    }
    setChatInfo(ChatInfo) { this.setState({ view: 'Waiting' }); this.state.resolveChatInfo(ChatInfo) }

    async showScore(Score) {
        const score = Score.toString()
        this.setState({ view: 'showScore', score })
    }
    render() { return renderView(this, SecBuyerViews); }
}

export default App