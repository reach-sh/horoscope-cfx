// Automatically generated with Reach 0.1.3
/* eslint-disable */
export const _version = '0.1.3';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function FirBuyer(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for FirBuyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for FirBuyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn1.data;
  const v20 = txn1.time;
  const v21 = txn1.secs;
  const v17 = txn1.from;
  ;
  const v25 = stdlib.protect(ctc0, await interact.getScore(), {
    at: './src/reach/rate.rsh:48:41:application',
    fs: ['at ./src/reach/rate.rsh:47:14:application call to [unknown function] (defined at: ./src/reach/rate.rsh:47:18:function exp)'],
    msg: 'getScore',
    who: 'FirBuyer'
    });
  const v27 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:60:31:application',
    fs: ['at ./src/reach/rate.rsh:49:56:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./src/reach/rate.rsh:47:14:application call to [unknown function] (defined at: ./src/reach/rate.rsh:47:18:function exp)'],
    msg: 'random',
    who: 'FirBuyer'
    });
  const v28 = stdlib.digest(ctc1, [v27, v25]);
  
  const txn2 = await (ctc.sendrecv({
    args: [v17, v28],
    evt_cnt: 1,
    funcNum: 2,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v31] = txn2.data;
      const v33 = txn2.time;
      const v34 = txn2.secs;
      const v30 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc2],
    waitIfNotPresent: false
    }));
  const [v31] = txn2.data;
  const v33 = txn2.time;
  const v34 = txn2.secs;
  const v30 = txn2.from;
  ;
  const txn3 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v40] = txn3.data;
  const v42 = txn3.time;
  const v43 = txn3.secs;
  const v39 = txn3.from;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v17, v30, v31, v39, v40, v27, v25],
    evt_cnt: 2,
    funcNum: 4,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v48, v49] = txn4.data;
      const v52 = txn4.time;
      const v53 = txn4.secs;
      const v47 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v51 = stdlib.addressEq(v30, v47);
      stdlib.assert(v51, {
        at: './src/reach/rate.rsh:67:12:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v55 = stdlib.digest(ctc1, [v48, v49]);
      const v56 = stdlib.digestEq(v31, v55);
      stdlib.assert(v56, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'FirBuyer'
        });
      const v57 = stdlib.ge(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
      const v58 = stdlib.ge(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
      const v59 = v57 ? v58 : false;
      if (v59) {
        sim_r.isHalt = false;
        }
      else {
        const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
        const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
        const v90 = v88 ? v89 : false;
        const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
        const v93 = v90 ? v92 : false;
        if (v93) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200),
            kind: 'from',
            to: v17,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc5, ctc2, ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [v48, v49] = txn4.data;
  const v52 = txn4.time;
  const v53 = txn4.secs;
  const v47 = txn4.from;
  ;
  const v51 = stdlib.addressEq(v30, v47);
  stdlib.assert(v51, {
    at: './src/reach/rate.rsh:67:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FirBuyer'
    });
  const v55 = stdlib.digest(ctc1, [v48, v49]);
  const v56 = stdlib.digestEq(v31, v55);
  stdlib.assert(v56, {
    at: 'reach standard library:65:17:application',
    fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
    msg: null,
    who: 'FirBuyer'
    });
  const v57 = stdlib.ge(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
  const v58 = stdlib.ge(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
  const v59 = v57 ? v58 : false;
  if (v59) {
    const v63 = stdlib.protect(ctc3, await interact.getChatInfo(), {
      at: './src/reach/rate.rsh:74:59:application',
      fs: ['at ./src/reach/rate.rsh:73:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:73:22:function exp)'],
      msg: 'getChatInfo',
      who: 'FirBuyer'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v17, v30, v39, v40, v49, v63],
      evt_cnt: 1,
      funcNum: 5,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v65] = txn5.data;
        const v68 = txn5.time;
        const v69 = txn5.secs;
        const v64 = txn5.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v67 = stdlib.addressEq(v30, v64);
        stdlib.assert(v67, {
          at: './src/reach/rate.rsh:76:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'FirBuyer'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc5, ctc5, ctc5, ctc0, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    const [v65] = txn5.data;
    const v68 = txn5.time;
    const v69 = txn5.secs;
    const v64 = txn5.from;
    ;
    const v67 = stdlib.addressEq(v30, v64);
    stdlib.assert(v67, {
      at: './src/reach/rate.rsh:76:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'FirBuyer'
      });
    const txn6 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v75] = txn6.data;
    const v78 = txn6.time;
    const v79 = txn6.secs;
    const v74 = txn6.from;
    ;
    const v77 = stdlib.addressEq(v39, v74);
    stdlib.assert(v77, {
      at: './src/reach/rate.rsh:83:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'FirBuyer'
      });
    stdlib.protect(ctc4, await interact.showChatInfo(v75), {
      at: './src/reach/rate.rsh:87:28:application',
      fs: ['at ./src/reach/rate.rsh:86:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:86:22:function exp)'],
      msg: 'showChatInfo',
      who: 'FirBuyer'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v17, v30, v39, v40, v49],
      evt_cnt: 0,
      funcNum: 7,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [] = txn7.data;
        const v86 = txn7.time;
        const v87 = txn7.secs;
        const v83 = txn7.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v85 = stdlib.addressEq(v30, v83);
        stdlib.assert(v85, {
          at: './src/reach/rate.rsh:89:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'FirBuyer'
          });
        const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
        const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
        const v90 = v88 ? v89 : false;
        const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
        const v93 = v90 ? v92 : false;
        if (v93) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200),
            kind: 'from',
            to: v17,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc5, ctc5, ctc5, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const [] = txn7.data;
    const v86 = txn7.time;
    const v87 = txn7.secs;
    const v83 = txn7.from;
    ;
    const v85 = stdlib.addressEq(v30, v83);
    stdlib.assert(v85, {
      at: './src/reach/rate.rsh:89:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'FirBuyer'
      });
    const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v90 = v88 ? v89 : false;
    const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v93 = v90 ? v92 : false;
    if (v93) {
      const txn8 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn8.data;
      const v100 = txn8.time;
      const v101 = txn8.secs;
      const v97 = txn8.from;
      ;
      const v99 = stdlib.addressEq(v39, v97);
      stdlib.assert(v99, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      stdlib.protect(ctc4, await interact.showScore(v40), {
        at: './src/reach/rate.rsh:103:25:application',
        fs: ['at ./src/reach/rate.rsh:102:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:102:22:function exp)'],
        msg: 'showScore',
        who: 'FirBuyer'
        });
      
      const txn9 = await (ctc.sendrecv({
        args: [v17, v30, v39, v40, v49],
        evt_cnt: 0,
        funcNum: 9,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn9) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [] = txn9.data;
          const v108 = txn9.time;
          const v109 = txn9.secs;
          const v105 = txn9.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v107 = stdlib.addressEq(v30, v105);
          stdlib.assert(v107, {
            at: './src/reach/rate.rsh:105:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'FirBuyer'
            });
          const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
          sim_r.txns.push({
            amt: v49,
            kind: 'from',
            to: v39,
            tok: undefined
            });
          const v117 = stdlib.sub(v113, v40);
          sim_r.txns.push({
            amt: v40,
            kind: 'from',
            to: v30,
            tok: undefined
            });
          sim_r.txns.push({
            amt: v117,
            kind: 'from',
            to: v17,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const [] = txn9.data;
      const v108 = txn9.time;
      const v109 = txn9.secs;
      const v105 = txn9.from;
      ;
      const v107 = stdlib.addressEq(v30, v105);
      stdlib.assert(v107, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
      ;
      const v117 = stdlib.sub(v113, v40);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}
    
    
    }
  else {
    const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v90 = v88 ? v89 : false;
    const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v93 = v90 ? v92 : false;
    if (v93) {
      const txn5 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn5.data;
      const v100 = txn5.time;
      const v101 = txn5.secs;
      const v97 = txn5.from;
      ;
      const v99 = stdlib.addressEq(v39, v97);
      stdlib.assert(v99, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      stdlib.protect(ctc4, await interact.showScore(v40), {
        at: './src/reach/rate.rsh:103:25:application',
        fs: ['at ./src/reach/rate.rsh:102:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:102:22:function exp)'],
        msg: 'showScore',
        who: 'FirBuyer'
        });
      
      const txn6 = await (ctc.sendrecv({
        args: [v17, v30, v39, v40, v49],
        evt_cnt: 0,
        funcNum: 11,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [] = txn6.data;
          const v108 = txn6.time;
          const v109 = txn6.secs;
          const v105 = txn6.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v107 = stdlib.addressEq(v30, v105);
          stdlib.assert(v107, {
            at: './src/reach/rate.rsh:105:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'FirBuyer'
            });
          const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
          sim_r.txns.push({
            amt: v49,
            kind: 'from',
            to: v39,
            tok: undefined
            });
          const v117 = stdlib.sub(v113, v40);
          sim_r.txns.push({
            amt: v40,
            kind: 'from',
            to: v30,
            tok: undefined
            });
          sim_r.txns.push({
            amt: v117,
            kind: 'from',
            to: v17,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const [] = txn6.data;
      const v108 = txn6.time;
      const v109 = txn6.secs;
      const v105 = txn6.from;
      ;
      const v107 = stdlib.addressEq(v30, v105);
      stdlib.assert(v107, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
      ;
      const v117 = stdlib.sub(v113, v40);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}}
  
  
  
  
  };
export async function Oracle(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Oracle expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 1,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn1.data;
      const v20 = txn1.time;
      const v21 = txn1.secs;
      const v17 = txn1.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [],
    waitIfNotPresent: false
    }));
  const [] = txn1.data;
  const v20 = txn1.time;
  const v21 = txn1.secs;
  const v17 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v31] = txn2.data;
  const v33 = txn2.time;
  const v34 = txn2.secs;
  const v30 = txn2.from;
  ;
  const txn3 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v40] = txn3.data;
  const v42 = txn3.time;
  const v43 = txn3.secs;
  const v39 = txn3.from;
  ;
  const txn4 = await (ctc.recv({
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v48, v49] = txn4.data;
  const v52 = txn4.time;
  const v53 = txn4.secs;
  const v47 = txn4.from;
  ;
  const v51 = stdlib.addressEq(v30, v47);
  stdlib.assert(v51, {
    at: './src/reach/rate.rsh:67:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Oracle'
    });
  const v55 = stdlib.digest(ctc2, [v48, v49]);
  const v56 = stdlib.digestEq(v31, v55);
  stdlib.assert(v56, {
    at: 'reach standard library:65:17:application',
    fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
    msg: null,
    who: 'Oracle'
    });
  const v57 = stdlib.ge(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
  const v58 = stdlib.ge(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
  const v59 = v57 ? v58 : false;
  if (v59) {
    const txn5 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v65] = txn5.data;
    const v68 = txn5.time;
    const v69 = txn5.secs;
    const v64 = txn5.from;
    ;
    const v67 = stdlib.addressEq(v30, v64);
    stdlib.assert(v67, {
      at: './src/reach/rate.rsh:76:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const txn6 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v75] = txn6.data;
    const v78 = txn6.time;
    const v79 = txn6.secs;
    const v74 = txn6.from;
    ;
    const v77 = stdlib.addressEq(v39, v74);
    stdlib.assert(v77, {
      at: './src/reach/rate.rsh:83:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const txn7 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [] = txn7.data;
    const v86 = txn7.time;
    const v87 = txn7.secs;
    const v83 = txn7.from;
    ;
    const v85 = stdlib.addressEq(v30, v83);
    stdlib.assert(v85, {
      at: './src/reach/rate.rsh:89:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Oracle'
      });
    const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v90 = v88 ? v89 : false;
    const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v93 = v90 ? v92 : false;
    if (v93) {
      const txn8 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn8.data;
      const v100 = txn8.time;
      const v101 = txn8.secs;
      const v97 = txn8.from;
      ;
      const v99 = stdlib.addressEq(v39, v97);
      stdlib.assert(v99, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const txn9 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn9.data;
      const v108 = txn9.time;
      const v109 = txn9.secs;
      const v105 = txn9.from;
      ;
      const v107 = stdlib.addressEq(v30, v105);
      stdlib.assert(v107, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
      ;
      const v117 = stdlib.sub(v113, v40);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}
    
    
    }
  else {
    const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v90 = v88 ? v89 : false;
    const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v93 = v90 ? v92 : false;
    if (v93) {
      const txn5 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 10,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn5.data;
      const v100 = txn5.time;
      const v101 = txn5.secs;
      const v97 = txn5.from;
      ;
      const v99 = stdlib.addressEq(v39, v97);
      stdlib.assert(v99, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const txn6 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 11,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn6.data;
      const v108 = txn6.time;
      const v109 = txn6.secs;
      const v105 = txn6.from;
      ;
      const v107 = stdlib.addressEq(v30, v105);
      stdlib.assert(v107, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Oracle'
        });
      const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
      ;
      const v117 = stdlib.sub(v113, v40);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}}
  
  
  
  
  };
export async function SecBuyer(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Digest;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn1.data;
  const v20 = txn1.time;
  const v21 = txn1.secs;
  const v17 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v31] = txn2.data;
  const v33 = txn2.time;
  const v34 = txn2.secs;
  const v30 = txn2.from;
  ;
  const v38 = stdlib.protect(ctc1, await interact.getScore(), {
    at: './src/reach/rate.rsh:59:51:application',
    fs: ['at ./src/reach/rate.rsh:58:16:application call to [unknown function] (defined at: ./src/reach/rate.rsh:58:20:function exp)'],
    msg: 'getScore',
    who: 'SecBuyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v17, v30, v31, v38],
    evt_cnt: 1,
    funcNum: 3,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v40] = txn3.data;
      const v42 = txn3.time;
      const v43 = txn3.secs;
      const v39 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc5, ctc5, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const [v40] = txn3.data;
  const v42 = txn3.time;
  const v43 = txn3.secs;
  const v39 = txn3.from;
  ;
  const txn4 = await (ctc.recv({
    evt_cnt: 2,
    funcNum: 4,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v48, v49] = txn4.data;
  const v52 = txn4.time;
  const v53 = txn4.secs;
  const v47 = txn4.from;
  ;
  const v51 = stdlib.addressEq(v30, v47);
  stdlib.assert(v51, {
    at: './src/reach/rate.rsh:67:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'SecBuyer'
    });
  const v55 = stdlib.digest(ctc2, [v48, v49]);
  const v56 = stdlib.digestEq(v31, v55);
  stdlib.assert(v56, {
    at: 'reach standard library:65:17:application',
    fs: ['at ./src/reach/rate.rsh:68:18:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
    msg: null,
    who: 'SecBuyer'
    });
  const v57 = stdlib.ge(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:20:decimal', stdlib.UInt_max, 8));
  const v58 = stdlib.ge(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:71:38:decimal', stdlib.UInt_max, 8));
  const v59 = v57 ? v58 : false;
  if (v59) {
    const txn5 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc3],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v65] = txn5.data;
    const v68 = txn5.time;
    const v69 = txn5.secs;
    const v64 = txn5.from;
    ;
    const v67 = stdlib.addressEq(v30, v64);
    stdlib.assert(v67, {
      at: './src/reach/rate.rsh:76:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'SecBuyer'
      });
    const v73 = stdlib.protect(ctc3, await interact.getChatInfo(), {
      at: './src/reach/rate.rsh:80:59:application',
      fs: ['at ./src/reach/rate.rsh:79:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:79:22:function exp)'],
      msg: 'getChatInfo',
      who: 'SecBuyer'
      });
    stdlib.protect(ctc4, await interact.showChatInfo(v65), {
      at: './src/reach/rate.rsh:81:28:application',
      fs: ['at ./src/reach/rate.rsh:79:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:79:22:function exp)'],
      msg: 'showChatInfo',
      who: 'SecBuyer'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v17, v30, v39, v40, v49, v73],
      evt_cnt: 1,
      funcNum: 6,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v75] = txn6.data;
        const v78 = txn6.time;
        const v79 = txn6.secs;
        const v74 = txn6.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v77 = stdlib.addressEq(v39, v74);
        stdlib.assert(v77, {
          at: './src/reach/rate.rsh:83:14:dot',
          fs: [],
          msg: 'sender correct',
          who: 'SecBuyer'
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc5, ctc5, ctc5, ctc1, ctc1, ctc3],
      waitIfNotPresent: false
      }));
    const [v75] = txn6.data;
    const v78 = txn6.time;
    const v79 = txn6.secs;
    const v74 = txn6.from;
    ;
    const v77 = stdlib.addressEq(v39, v74);
    stdlib.assert(v77, {
      at: './src/reach/rate.rsh:83:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'SecBuyer'
      });
    const txn7 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [] = txn7.data;
    const v86 = txn7.time;
    const v87 = txn7.secs;
    const v83 = txn7.from;
    ;
    const v85 = stdlib.addressEq(v30, v83);
    stdlib.assert(v85, {
      at: './src/reach/rate.rsh:89:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'SecBuyer'
      });
    const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v90 = v88 ? v89 : false;
    const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v93 = v90 ? v92 : false;
    if (v93) {
      stdlib.protect(ctc4, await interact.showScore(v49), {
        at: './src/reach/rate.rsh:97:25:application',
        fs: ['at ./src/reach/rate.rsh:96:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:96:22:function exp)'],
        msg: 'showScore',
        who: 'SecBuyer'
        });
      
      const txn8 = await (ctc.sendrecv({
        args: [v17, v30, v39, v40, v49],
        evt_cnt: 0,
        funcNum: 8,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn8) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [] = txn8.data;
          const v100 = txn8.time;
          const v101 = txn8.secs;
          const v97 = txn8.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v99 = stdlib.addressEq(v39, v97);
          stdlib.assert(v99, {
            at: './src/reach/rate.rsh:99:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'SecBuyer'
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const [] = txn8.data;
      const v100 = txn8.time;
      const v101 = txn8.secs;
      const v97 = txn8.from;
      ;
      const v99 = stdlib.addressEq(v39, v97);
      stdlib.assert(v99, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const txn9 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 9,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn9.data;
      const v108 = txn9.time;
      const v109 = txn9.secs;
      const v105 = txn9.from;
      ;
      const v107 = stdlib.addressEq(v30, v105);
      stdlib.assert(v107, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
      ;
      const v117 = stdlib.sub(v113, v40);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}
    
    
    }
  else {
    const v88 = stdlib.le(v49, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:20:decimal', stdlib.UInt_max, 10));
    const v89 = stdlib.le(v40, stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:39:decimal', stdlib.UInt_max, 10));
    const v90 = v88 ? v89 : false;
    const v92 = stdlib.ge(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), stdlib.checkedBigNumberify('./src/reach/rate.rsh:93:58:decimal', stdlib.UInt_max, 20));
    const v93 = v90 ? v92 : false;
    if (v93) {
      stdlib.protect(ctc4, await interact.showScore(v49), {
        at: './src/reach/rate.rsh:97:25:application',
        fs: ['at ./src/reach/rate.rsh:96:18:application call to [unknown function] (defined at: ./src/reach/rate.rsh:96:22:function exp)'],
        msg: 'showScore',
        who: 'SecBuyer'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v17, v30, v39, v40, v49],
        evt_cnt: 0,
        funcNum: 10,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [] = txn5.data;
          const v100 = txn5.time;
          const v101 = txn5.secs;
          const v97 = txn5.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/rate.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v99 = stdlib.addressEq(v39, v97);
          stdlib.assert(v99, {
            at: './src/reach/rate.rsh:99:14:dot',
            fs: [],
            msg: 'sender correct',
            who: 'SecBuyer'
            });
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc5, ctc5, ctc5, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const [] = txn5.data;
      const v100 = txn5.time;
      const v101 = txn5.secs;
      const v97 = txn5.from;
      ;
      const v99 = stdlib.addressEq(v39, v97);
      stdlib.assert(v99, {
        at: './src/reach/rate.rsh:99:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const txn6 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 11,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn6.data;
      const v108 = txn6.time;
      const v109 = txn6.secs;
      const v105 = txn6.from;
      ;
      const v107 = stdlib.addressEq(v30, v105);
      stdlib.assert(v107, {
        at: './src/reach/rate.rsh:105:14:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const v113 = stdlib.sub(stdlib.checkedBigNumberify('./src/reach/rate.rsh:44:15:application', stdlib.UInt_max, 200), v49);
      ;
      const v117 = stdlib.sub(v113, v40);
      ;
      ;
      return;
      
      }
    else {
      ;
      return;}}
  
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 1
substring 32 64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 0
==
assert
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:44:8:dot"
// "[]"
int 200
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l1:
pop
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 2
dup
int 2
==
bz l2
pop
txna ApplicationArgs 1
dup
len
int 32
==
assert
dup
store 255
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 254
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:52:12:dot"
// "[]"
// compute state in HM_Set 2
byte base64(AAAAAAAAAAI=)
load 255
concat
txn Sender
concat
load 254
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l2:
// Handler 3
dup
int 3
==
bz l3
pop
txna ApplicationArgs 1
dup
len
int 96
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// compute state in HM_Check 2
byte base64(AAAAAAAAAAI=)
load 255
concat
load 254
concat
load 253
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:61:12:dot"
// "[]"
// compute state in HM_Set 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
concat
load 253
concat
txn Sender
concat
load 252
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l3:
// Handler 4
dup
int 4
==
bz l4
pop
txna ApplicationArgs 1
dup
len
int 136
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 128
store 252
dup
substring 128 136
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 250
dup
substring 8 16
btoi
store 249
pop
// compute state in HM_Check 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
concat
load 253
concat
load 252
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:67:12:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:67:12:dot"
// "[]"
load 254
txn Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./src/reach/rate.rsh:68:18:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 253
load 250
itob
load 249
itob
concat
sha256
==
assert
load 249
int 8
>=
load 251
int 8
>=
&&
bz l5
// compute state in HM_Set 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
load 254
concat
load 252
concat
load 251
itob
concat
load 249
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l5:
load 249
int 10
<=
load 251
int 10
<=
&&
int 200
int 20
>=
&&
bz l6
// compute state in HM_Set 11
byte base64(AAAAAAAAAAs=)
load 255
concat
load 254
concat
load 252
concat
load 251
itob
concat
load 249
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l6:
int 200
dup
bz l7
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l7:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l8:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l4:
// Handler 5
dup
int 5
==
bz l9
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 250
pop
// compute state in HM_Check 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:76:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:76:14:dot"
// "[]"
load 254
txn Sender
==
assert
// compute state in HM_Set 5
byte base64(AAAAAAAAAAU=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l9:
// Handler 6
dup
int 6
==
bz l10
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 64
==
assert
dup
store 250
pop
// compute state in HM_Check 5
byte base64(AAAAAAAAAAU=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:83:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:83:14:dot"
// "[]"
load 253
txn Sender
==
assert
// compute state in HM_Set 6
byte base64(AAAAAAAAAAY=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l10:
// Handler 7
dup
int 7
==
bz l11
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 6
byte base64(AAAAAAAAAAY=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:89:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:89:14:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
int 10
<=
load 252
int 10
<=
&&
int 200
int 20
>=
&&
bz l12
// compute state in HM_Set 7
byte base64(AAAAAAAAAAc=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l12:
int 200
dup
bz l13
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l13:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l14:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l11:
// Handler 8
dup
int 8
==
bz l15
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 7
byte base64(AAAAAAAAAAc=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:99:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:99:14:dot"
// "[]"
load 253
txn Sender
==
assert
// compute state in HM_Set 8
byte base64(AAAAAAAAAAg=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l15:
// Handler 9
dup
int 9
==
bz l16
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 8
byte base64(AAAAAAAAAAg=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l17
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l17:
pop
load 252
dup
bz l18
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 254
dig 1
gtxns Receiver
==
assert
l18:
pop
int 200
load 251
-
load 252
-
dup
bz l19
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l19:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l20:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l16:
// Handler 10
dup
int 10
==
bz l21
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 11
byte base64(AAAAAAAAAAs=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:99:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:99:14:dot"
// "[]"
load 253
txn Sender
==
assert
// compute state in HM_Set 12
byte base64(AAAAAAAAAAw=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l21:
// Handler 11
dup
int 11
==
bz l22
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 12
byte base64(AAAAAAAAAAw=)
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
// Just "sender correct"
// "./src/reach/rate.rsh:105:14:dot"
// "[]"
load 254
txn Sender
==
assert
load 251
dup
bz l23
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l23:
pop
load 252
dup
bz l24
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 254
dig 1
gtxns Receiver
==
assert
l24:
pop
int 200
load 251
-
load 252
-
dup
bz l25
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l25:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l26:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l22:
int 0
assert
updateState:
byte base64()
load 1
load 2
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 2
// compute state in HM_Set 0
int 8
bzero
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v48",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v65",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v75",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v31",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v48",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v65",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v75",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v17",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v40",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602091820152815160008183018190528184018190528351808303850181526060909201909352805191012090556113fc806100766000396000f3fe6080604052600436106100a05760003560e01c8063e19e002311610064578063e19e00231461010d578063ec4a86b614610120578063eda1fc6614610133578063eef57c3314610146578063f9c6a23314610159578063fbd10f001461016c57600080fd5b806313df8e75146100ac57806338bad470146100c1578063490f43eb146100d4578063bc0ca2f3146100e7578063bd99eaf8146100fa57600080fd5b366100a757005b600080fd5b6100bf6100ba3660046110cf565b61017f565b005b6100bf6100cf3660046110bd565b610293565b6100bf6100e23660046110bd565b61043c565b6100bf6100f53660046110bd565b61056b565b6100bf6101083660046110a0565b61069a565b6100bf61011b3660046110eb565b6107c9565b6100bf61012e3660046110cf565b610910565b6100bf61014136600461108e565b6109e3565b6100bf6101543660046110bd565b610c2b565b6100bf6101673660046110bd565b610dcb565b6100bf61017a3660046110a0565b610e74565b6040516101bb906101979060019084906020016112f3565b6040516020818303038152906040528051906020012060001c60005414600a610fa3565b600080556040517fa5f01a1b058a95f662c71e336ce18ea5d83050593b062884d22eeb1550df5318906101ef9083906112af565b60405180910390a161020334156009610fa3565b6040805160608101825260008082526020808301829052928201529061022b90830183611051565b6001600160a01b039081168252336020808401918252848101356040808601918252805160029381019390935285518516908301529151909216606083015251608082015260a0015b60408051601f1981840301815291905280516020909101206000555050565b6040516102cf906102ab906006908490602001611340565b6040516020818303038152906040528051906020012060001c600054146019610fa3565b600080556040517f720482d0b0d5461db2ac2fec92728453a3a3e6e149fca4867d10c3bbec9e2b199061030390839061125e565b60405180910390a161031734156017610fa3565b61033c3361032b6040840160208501611051565b6001600160a01b0316146018610fa3565b600a6080820135111561035057600061035a565b600a606082013511155b610365576000610368565b60015b156103f357610375610fcc565b6103826020830183611051565b6001600160a01b0316815261039d6040830160208401611051565b6001600160a01b031660208201526103bb6060830160408401611051565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015251610274906007908390602001611354565b6104006020820182611051565b6040516001600160a01b03919091169060009060c89082818181858883f19350505050158015610434573d6000803e3d6000fd5b506000805533ff5b60405161047890610454906007908490602001611340565b6040516020818303038152906040528051906020012060001c60005414601c610fa3565b600080556040517f67c7593ef3a4d3754ef69dc7f1fa8d8a74b5141349550c9369abd3289e0463d7906104ac90839061125e565b60405180910390a16104c03415601a610fa3565b6104e5336104d46060840160408501611051565b6001600160a01b031614601b610fa3565b6104ed610fcc565b6104fa6020830183611051565b6001600160a01b031681526105156040830160208401611051565b6001600160a01b031660208201526105336060830160408401611051565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015251610274906008908390602001611354565b6040516105a79061058390600b908490602001611340565b6040516020818303038152906040528051906020012060001c600054146022610fa3565b600080556040517f19c885d72fe56e7b48652b1fe5b7722ea0c3f3b5d2168e41801b41814a65af40906105db90839061125e565b60405180910390a16105ef34156020610fa3565b610614336106036060840160408501611051565b6001600160a01b0316146021610fa3565b61061c610fcc565b6106296020830183611051565b6001600160a01b031681526106446040830160208401611051565b6001600160a01b031660208201526106626060830160408401611051565b6001600160a01b031660408083019190915260608084013590830152608080840135908301525161027490600c908390602001611354565b6040516106d6906106b2906004908490602001611340565b6040516020818303038152906040528051906020012060001c600054146013610fa3565b600080556040517fb6af21ca84bd8770be177cf09cb1c271d2d88ee9d76dc7c3db19419da37f6ae79061070a908390611249565b60405180910390a161071e34156011610fa3565b610743336107326040840160208501611051565b6001600160a01b0316146012610fa3565b61074b610fcc565b6107586020830183611051565b6001600160a01b031681526107736040830160208401611051565b6001600160a01b031660208201526107916060830160408401611051565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015251610274906005908390602001611354565b604051610805906107e1906002908490602001611318565b6040516020818303038152906040528051906020012060001c60005414600c610fa3565b600080556040517f779feb3d2475fa8e2db889768998a6a147cd71e9ed1249ab65c7ca922c72b101906108399083906112d7565b60405180910390a161084d3415600b610fa3565b6040805160a081018252600080825260208083018290529282018190526060820181905260808201529061088390830183611051565b6001600160a01b0316815261089e6040830160208401611051565b6001600160a01b039081166020838101918252604085810135818601908152336060808801918252808901356080808a019182528551600397810197909752895189169587019590955295518716908501529051918301919091525190921660a08301525160c082015260e001610274565b61096260006109226020840184611073565b60405160200161093e9291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c600054146008610fa3565b600080556040517f5e47fb10d935e98c9d164e80e2ec67992cd9431bcb564d8c410f734df4b0c8f490610996908390611285565b60405180910390a16109ac60c834146007610fa3565b604080516020810190915260008152338152604080516001602082015282516001600160a01b031691810191909152606001610274565b604051610a1f906109fb90600390849060200161132c565b6040516020818303038152906040528051906020012060001c600054146010610fa3565b600080556040517f5f607290e8e802436cbe69221c2f39679f0aaf6d1a09f3999ab3f837eb20fed590610a53908390611221565b60405180910390a1610a673415600d610fa3565b610a8c33610a7b6040840160208501611051565b6001600160a01b031614600e610fa3565b6040805160a083013560208083019190915260c084013582840152825180830384018152606090920183528151910120610acb9183013514600f610fa3565b600860c08201351015610adf576000610ae9565b6008608082013510155b15610b7457610af6610fcc565b610b036020830183611051565b6001600160a01b03168152610b1e6040830160208401611051565b6001600160a01b03166020820152610b3c6080830160608401611051565b6001600160a01b0316604080830191909152608080840135606084015260c08401359083015251610274906004908390602001611354565b600a60c08201351115610b88576000610b92565b600a608082013511155b610b9d576000610ba0565b60015b156103f357610bad610fcc565b610bba6020830183611051565b6001600160a01b03168152610bd56040830160208401611051565b6001600160a01b03166020820152610bf36080830160608401611051565b6001600160a01b0316604080830191909152608080840135606084015260c0840135908301525161027490600b908390602001611354565b604051610c6790610c43906008908490602001611340565b6040516020818303038152906040528051906020012060001c60005414601f610fa3565b600080556040517fcb203f0dccc17b3671b7dd45c6825d88e6dd99f113adcf3594f0b191f7318c8490610c9b90839061125e565b60405180910390a1610caf3415601d610fa3565b610cd433610cc36040840160208501611051565b6001600160a01b031614601e610fa3565b610ce46060820160408301611051565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f19350505050158015610d1f573d6000803e3d6000fd5b50610d306040820160208301611051565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610d6b573d6000803e3d6000fd5b50610d796020820182611051565b6001600160a01b03166108fc6060830135610d99608085013560c86113a1565b610da391906113a1565b6040518115909202916000818181858888f19350505050158015610434573d6000803e3d6000fd5b604051610e0790610de390600c908490602001611340565b6040516020818303038152906040528051906020012060001c600054146025610fa3565b600080556040517f8f4bf9cf37e03326ba5edcaaf032fed3ba63d0502c18d7b0ace88df4066bff2690610e3b90839061125e565b60405180910390a1610e4f34156023610fa3565b610cd433610e636040840160208501611051565b6001600160a01b0316146024610fa3565b604051610eb090610e8c906005908490602001611340565b6040516020818303038152906040528051906020012060001c600054146016610fa3565b600080556040517fc6ee94b9a36b79d80b27a85d5f728287b349412ac7bcce145d37d9d79ab1a60590610ee4908390611249565b60405180910390a1610ef834156014610fa3565b610f1d33610f0c6060840160408501611051565b6001600160a01b0316146015610fa3565b610f25610fcc565b610f326020830183611051565b6001600160a01b03168152610f4d6040830160208401611051565b6001600160a01b03166020820152610f6b6060830160408401611051565b6001600160a01b0316604080830191909152606080840135908301526080808401359083015251610274906006908390602001611354565b81610fc85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b80356001600160a01b038116811461101157600080fd5b919050565b8035801515811461101157600080fd5b60006108a0828403121561103957600080fd5b50919050565b60006040828403121561103957600080fd5b60006020828403121561106357600080fd5b61106c82610ffa565b9392505050565b60006020828403121561108557600080fd5b61106c82611016565b600060e0828403121561103957600080fd5b60006108a082840312156110b357600080fd5b61106c8383611026565b600060c0828403121561103957600080fd5b6000604082840312156110e157600080fd5b61106c838361103f565b60006080828403121561103957600080fd5b61110782826111d0565b60a0820160a082016000805b604081101561114357823560ff811680821461112d578384fd5b8552506020938401939290920191600101611113565b505050505050565b6001600160a01b038061115d83610ffa565b1683528061116d60208401610ffa565b16602084015250604090810135910152565b6001600160a01b038061119183610ffa565b168352806111a160208401610ffa565b16602084015260408201356040840152806111be60608401610ffa565b16606084015250608090810135910152565b6001600160a01b03806111e283610ffa565b168352806111f260208401610ffa565b1660208401528061120560408401610ffa565b1660408401525060608181013590830152608090810135910152565b60e0810161122f828461117f565b60a083013560a083015260c083013560c083015292915050565b6108a0810161125882846110fd565b92915050565b60c0810161126c82846111d0565b61127860a08401611016565b151560a083015292915050565b6040810161129283611016565b151582526112a260208401611016565b1515602083015292915050565b604081016001600160a01b036112c484610ffa565b1682526020830135602083015292915050565b608081016112e5828461114b565b606092830135919092015290565b828152604081016001600160a01b0361130b84610ffa565b1660208301529392505050565b8281526080810161106c602083018461114b565b82815260c0810161106c602083018461117f565b82815260c0810161106c60208301846111d0565b91825280516001600160a01b03908116602080850191909152820151811660408085019190915282015116606080840191909152810151608080840191909152015160a082015260c00190565b6000828210156113c157634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220b5f431127a4ea00032c948a792138716ae6c12b59ac20926f4908719a190138264736f6c63430008050033`,
  BytecodeLen: 5234,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

