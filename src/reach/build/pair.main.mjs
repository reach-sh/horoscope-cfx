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
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      "NFT": {
        owner1: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        owner2: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [] = svs;
              stdlib.assert(false, 'illegal view')
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [],
      2: [],
      3: [],
      4: []
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    FirBuyer: ctc0,
    SecBuyer: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v22] = txn1.data;
  const v24 = txn1.time;
  const v25 = txn1.secs;
  const v21 = txn1.from;
  ;
  const v29 = stdlib.protect(ctc0, await interact.getPersonalInfo(), {
    at: './src/reach/pair.rsh:64:66:application',
    fs: ['at ./src/reach/pair.rsh:63:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:63:20:function exp)'],
    msg: 'getPersonalInfo',
    who: 'FirBuyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v21, v29],
    evt_cnt: 1,
    funcNum: 2,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v31] = txn2.data;
      const v33 = txn2.time;
      const v34 = txn2.secs;
      const v30 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const [v31] = txn2.data;
  const v33 = txn2.time;
  const v34 = txn2.secs;
  const v30 = txn2.from;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v21, v30],
    evt_cnt: 0,
    funcNum: 3,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn3.data;
      const v43 = txn3.time;
      const v44 = txn3.secs;
      const v38 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v40 = stdlib.addressEq(v30, v38);
      const v41 = stdlib.addressEq(v21, v38);
      const v42 = v40 ? true : v41;
      stdlib.assert(v42, {
        at: './src/reach/pair.rsh:72:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const [] = txn3.data;
  const v43 = txn3.time;
  const v44 = txn3.secs;
  const v38 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v30, v38);
  const v41 = stdlib.addressEq(v21, v38);
  const v42 = v40 ? true : v41;
  stdlib.assert(v42, {
    at: './src/reach/pair.rsh:72:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FirBuyer'
    });
  stdlib.protect(ctc1, await interact.showPersonalInfo(v22), {
    at: './src/reach/pair.rsh:76:30:application',
    fs: ['at ./src/reach/pair.rsh:75:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:75:20:function exp)'],
    msg: 'showPersonalInfo',
    who: 'FirBuyer'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v21, v30, v43],
    evt_cnt: 0,
    funcNum: 4,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn4.data;
      const v53 = txn4.time;
      const v54 = txn4.secs;
      const v48 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v50 = stdlib.addressEq(v30, v48);
      const v51 = stdlib.addressEq(v21, v48);
      const v52 = v50 ? true : v51;
      stdlib.assert(v52, {
        at: './src/reach/pair.rsh:78:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const v57 = stdlib.add(v43, stdlib.checkedBigNumberify('./src/reach/pair.rsh:82:59:decimal', stdlib.UInt_max, 180));
      const v83 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
      const v84 = v83;
      const v85 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:84:45:decimal', stdlib.UInt_max, 0);
      const v183 = v53;
      const v184 = v43;
      
      if ((() => {
        const v93 = stdlib.gt(v57, v184);
        const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
        const v95 = v93 ? v94 : false;
        
        return v95;})()) {
        const v166 = stdlib.sub(v57, v184);
        const v170 = stdlib.add(v183, v166);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const [] = txn4.data;
  const v53 = txn4.time;
  const v54 = txn4.secs;
  const v48 = txn4.from;
  ;
  const v50 = stdlib.addressEq(v30, v48);
  const v51 = stdlib.addressEq(v21, v48);
  const v52 = v50 ? true : v51;
  stdlib.assert(v52, {
    at: './src/reach/pair.rsh:78:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'FirBuyer'
    });
  const v57 = stdlib.add(v43, stdlib.checkedBigNumberify('./src/reach/pair.rsh:82:59:decimal', stdlib.UInt_max, 180));
  const v83 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
  let v84 = v83;
  let v85 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:84:45:decimal', stdlib.UInt_max, 0);
  let v183 = v53;
  let v184 = v43;
  
  while ((() => {
    const v93 = stdlib.gt(v57, v184);
    const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
    const v95 = v93 ? v94 : false;
    
    return v95;})()) {
    const v166 = stdlib.sub(v57, v184);
    const v170 = stdlib.add(v183, v166);
    const v112 = stdlib.protect(ctc0, await interact.getWords(v84), {
      at: './src/reach/pair.rsh:90:53:application',
      fs: ['at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:88:13:function exp)', 'at ./src/reach/pair.rsh:84:19:application call to "runFirBuyer0" (defined at: ./src/reach/pair.rsh:84:19:function exp)', 'at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)'],
      msg: 'getWords',
      who: 'FirBuyer'
      });
    
    const v123 = ['FirBuyer', v112];
    
    const txn5 = await (ctc.sendrecv({
      args: [v21, v30, v57, v84, v85, v170, v183, v123],
      evt_cnt: 1,
      funcNum: 7,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:12:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v130] = txn5.data;
        const v141 = txn5.time;
        const v142 = txn5.secs;
        const v129 = txn5.from;
        
        let v131;
        switch (v130[0]) {
          case 'FirBuyer': {
            const v132 = v130[1];
            v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:12:decimal', stdlib.UInt_max, 0);
            
            break;
            }
          case 'SecBuyer': {
            const v134 = v130[1];
            v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:12:decimal', stdlib.UInt_max, 0);
            
            break;
            }
          }
        sim_r.txns.push({
          amt: v131,
          kind: 'to',
          tok: undefined
          });
        const v138 = stdlib.addressEq(v30, v129);
        const v139 = stdlib.addressEq(v21, v129);
        const v140 = v138 ? true : v139;
        stdlib.assert(v140, {
          at: './src/reach/pair.rsh:84:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'FirBuyer'
          });
        let v143;
        switch (v130[0]) {
          case 'FirBuyer': {
            const v144 = v130[1];
            const v146 = stdlib.addressEq(v129, v30);
            v143 = v146;
            
            break;
            }
          case 'SecBuyer': {
            const v147 = v130[1];
            const v149 = stdlib.addressEq(v129, v21);
            v143 = v149;
            
            break;
            }
          }
        stdlib.assert(v143, {
          at: './src/reach/pair.rsh:84:19:application',
          fs: [],
          msg: null,
          who: 'FirBuyer'
          });
        switch (v130[0]) {
          case 'FirBuyer': {
            const v150 = v130[1];
            const v154 = stdlib.Array_set(v84, v85, v150);
            const v155 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:96:49:decimal', stdlib.UInt_max, 1));
            const cv84 = v154;
            const cv85 = v155;
            const cv183 = v141;
            const cv184 = v183;
            
            (() => {
              const v84 = cv84;
              const v85 = cv85;
              const v183 = cv183;
              const v184 = cv184;
              
              if ((() => {
                const v93 = stdlib.gt(v57, v184);
                const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
                const v95 = v93 ? v94 : false;
                
                return v95;})()) {
                const v166 = stdlib.sub(v57, v184);
                const v170 = stdlib.add(v183, v166);
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          case 'SecBuyer': {
            const v157 = v130[1];
            const v161 = stdlib.Array_set(v84, v85, v157);
            const v162 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:109:49:decimal', stdlib.UInt_max, 1));
            const cv84 = v161;
            const cv85 = v162;
            const cv183 = v141;
            const cv184 = v183;
            
            (() => {
              const v84 = cv84;
              const v85 = cv85;
              const v183 = cv183;
              const v184 = cv184;
              
              if ((() => {
                const v93 = stdlib.gt(v57, v184);
                const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
                const v95 = v93 ? v94 : false;
                
                return v95;})()) {
                const v166 = stdlib.sub(v57, v184);
                const v170 = stdlib.add(v183, v166);
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v170],
      tys: [ctc3, ctc3, ctc4, ctc5, ctc4, ctc4, ctc4, ctc2],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v21, v30, v57, v84, v85, v170, v183],
        evt_cnt: 0,
        funcNum: 8,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [] = txn6.data;
          const v178 = txn6.time;
          const v179 = txn6.secs;
          const v173 = txn6.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v175 = stdlib.addressEq(v30, v173);
          const v176 = stdlib.addressEq(v21, v173);
          const v177 = v175 ? true : v176;
          stdlib.assert(v177, {
            at: './src/reach/pair.rsh:112:52:dot',
            fs: ['at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)'],
            msg: 'sender correct',
            who: 'FirBuyer'
            });
          const cv84 = v84;
          const cv85 = v85;
          const cv183 = v178;
          const cv184 = v183;
          
          (() => {
            const v84 = cv84;
            const v85 = cv85;
            const v183 = cv183;
            const v184 = cv184;
            
            if ((() => {
              const v93 = stdlib.gt(v57, v184);
              const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
              const v95 = v93 ? v94 : false;
              
              return v95;})()) {
              const v166 = stdlib.sub(v57, v184);
              const v170 = stdlib.add(v183, v166);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc3, ctc3, ctc4, ctc5, ctc4, ctc4, ctc4],
        waitIfNotPresent: false
        }));
      const [] = txn6.data;
      const v178 = txn6.time;
      const v179 = txn6.secs;
      const v173 = txn6.from;
      ;
      const v175 = stdlib.addressEq(v30, v173);
      const v176 = stdlib.addressEq(v21, v173);
      const v177 = v175 ? true : v176;
      stdlib.assert(v177, {
        at: './src/reach/pair.rsh:112:52:dot',
        fs: ['at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)'],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      const cv84 = v84;
      const cv85 = v85;
      const cv183 = v178;
      const cv184 = v183;
      
      v84 = cv84;
      v85 = cv85;
      v183 = cv183;
      v184 = cv184;
      
      continue;
      }
    else {
      const [v130] = txn5.data;
      const v141 = txn5.time;
      const v142 = txn5.secs;
      const v129 = txn5.from;
      let v131;
      switch (v130[0]) {
        case 'FirBuyer': {
          const v132 = v130[1];
          v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:12:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'SecBuyer': {
          const v134 = v130[1];
          v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:12:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        }
      ;
      const v138 = stdlib.addressEq(v30, v129);
      const v139 = stdlib.addressEq(v21, v129);
      const v140 = v138 ? true : v139;
      stdlib.assert(v140, {
        at: './src/reach/pair.rsh:84:19:dot',
        fs: [],
        msg: 'sender correct',
        who: 'FirBuyer'
        });
      let v143;
      switch (v130[0]) {
        case 'FirBuyer': {
          const v144 = v130[1];
          const v146 = stdlib.addressEq(v129, v30);
          v143 = v146;
          
          break;
          }
        case 'SecBuyer': {
          const v147 = v130[1];
          const v149 = stdlib.addressEq(v129, v21);
          v143 = v149;
          
          break;
          }
        }
      stdlib.assert(v143, {
        at: './src/reach/pair.rsh:84:19:application',
        fs: [],
        msg: null,
        who: 'FirBuyer'
        });
      switch (v130[0]) {
        case 'FirBuyer': {
          const v150 = v130[1];
          const v154 = stdlib.Array_set(v84, v85, v150);
          const v155 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:96:49:decimal', stdlib.UInt_max, 1));
          const cv84 = v154;
          const cv85 = v155;
          const cv183 = v141;
          const cv184 = v183;
          
          v84 = cv84;
          v85 = cv85;
          v183 = cv183;
          v184 = cv184;
          
          continue;
          break;
          }
        case 'SecBuyer': {
          const v157 = v130[1];
          const v161 = stdlib.Array_set(v84, v85, v157);
          const v162 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:109:49:decimal', stdlib.UInt_max, 1));
          const cv84 = v161;
          const cv85 = v162;
          const cv183 = v141;
          const cv184 = v183;
          
          v84 = cv84;
          v85 = cv85;
          v183 = cv183;
          v184 = cv184;
          
          continue;
          break;
          }
        }}
    }
  return;
  
  
  
  
  };
export async function SecBuyer(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SecBuyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    FirBuyer: ctc0,
    SecBuyer: ctc0
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 20));
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const v20 = stdlib.protect(ctc0, await interact.getPersonalInfo(), {
    at: './src/reach/pair.rsh:54:66:application',
    fs: ['at ./src/reach/pair.rsh:53:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:53:20:function exp)'],
    msg: 'getPersonalInfo',
    who: 'SecBuyer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v20],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v22] = txn1.data;
      const v24 = txn1.time;
      const v25 = txn1.secs;
      const v21 = txn1.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const [v22] = txn1.data;
  const v24 = txn1.time;
  const v25 = txn1.secs;
  const v21 = txn1.from;
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
  stdlib.protect(ctc1, await interact.showPersonalInfo(v31), {
    at: './src/reach/pair.rsh:70:30:application',
    fs: ['at ./src/reach/pair.rsh:69:16:application call to [unknown function] (defined at: ./src/reach/pair.rsh:69:20:function exp)'],
    msg: 'showPersonalInfo',
    who: 'SecBuyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v21, v30],
    evt_cnt: 0,
    funcNum: 3,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn3.data;
      const v43 = txn3.time;
      const v44 = txn3.secs;
      const v38 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v40 = stdlib.addressEq(v30, v38);
      const v41 = stdlib.addressEq(v21, v38);
      const v42 = v40 ? true : v41;
      stdlib.assert(v42, {
        at: './src/reach/pair.rsh:72:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const [] = txn3.data;
  const v43 = txn3.time;
  const v44 = txn3.secs;
  const v38 = txn3.from;
  ;
  const v40 = stdlib.addressEq(v30, v38);
  const v41 = stdlib.addressEq(v21, v38);
  const v42 = v40 ? true : v41;
  stdlib.assert(v42, {
    at: './src/reach/pair.rsh:72:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'SecBuyer'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v21, v30, v43],
    evt_cnt: 0,
    funcNum: 4,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn4.data;
      const v53 = txn4.time;
      const v54 = txn4.secs;
      const v48 = txn4.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v50 = stdlib.addressEq(v30, v48);
      const v51 = stdlib.addressEq(v21, v48);
      const v52 = v50 ? true : v51;
      stdlib.assert(v52, {
        at: './src/reach/pair.rsh:78:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const v57 = stdlib.add(v43, stdlib.checkedBigNumberify('./src/reach/pair.rsh:82:59:decimal', stdlib.UInt_max, 180));
      const v83 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
      const v84 = v83;
      const v85 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:84:45:decimal', stdlib.UInt_max, 0);
      const v183 = v53;
      const v184 = v43;
      
      if ((() => {
        const v93 = stdlib.gt(v57, v184);
        const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
        const v95 = v93 ? v94 : false;
        
        return v95;})()) {
        const v166 = stdlib.sub(v57, v184);
        const v170 = stdlib.add(v183, v166);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const [] = txn4.data;
  const v53 = txn4.time;
  const v54 = txn4.secs;
  const v48 = txn4.from;
  ;
  const v50 = stdlib.addressEq(v30, v48);
  const v51 = stdlib.addressEq(v21, v48);
  const v52 = v50 ? true : v51;
  stdlib.assert(v52, {
    at: './src/reach/pair.rsh:78:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'SecBuyer'
    });
  const v57 = stdlib.add(v43, stdlib.checkedBigNumberify('./src/reach/pair.rsh:82:59:decimal', stdlib.UInt_max, 180));
  const v83 = ['                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                ', '                                                                '];
  let v84 = v83;
  let v85 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:84:45:decimal', stdlib.UInt_max, 0);
  let v183 = v53;
  let v184 = v43;
  
  while ((() => {
    const v93 = stdlib.gt(v57, v184);
    const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
    const v95 = v93 ? v94 : false;
    
    return v95;})()) {
    const v166 = stdlib.sub(v57, v184);
    const v170 = stdlib.add(v183, v166);
    const v120 = stdlib.protect(ctc0, await interact.getWords(v84), {
      at: './src/reach/pair.rsh:102:53:application',
      fs: ['at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:100:13:function exp)', 'at ./src/reach/pair.rsh:84:19:application call to "runSecBuyer0" (defined at: ./src/reach/pair.rsh:84:19:function exp)', 'at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)'],
      msg: 'getWords',
      who: 'SecBuyer'
      });
    
    const v126 = ['SecBuyer', v120];
    
    const txn5 = await (ctc.sendrecv({
      args: [v21, v30, v57, v84, v85, v170, v183, v126],
      evt_cnt: 1,
      funcNum: 7,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:12:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v130] = txn5.data;
        const v141 = txn5.time;
        const v142 = txn5.secs;
        const v129 = txn5.from;
        
        let v131;
        switch (v130[0]) {
          case 'FirBuyer': {
            const v132 = v130[1];
            v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:12:decimal', stdlib.UInt_max, 0);
            
            break;
            }
          case 'SecBuyer': {
            const v134 = v130[1];
            v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:12:decimal', stdlib.UInt_max, 0);
            
            break;
            }
          }
        sim_r.txns.push({
          amt: v131,
          kind: 'to',
          tok: undefined
          });
        const v138 = stdlib.addressEq(v30, v129);
        const v139 = stdlib.addressEq(v21, v129);
        const v140 = v138 ? true : v139;
        stdlib.assert(v140, {
          at: './src/reach/pair.rsh:84:19:dot',
          fs: [],
          msg: 'sender correct',
          who: 'SecBuyer'
          });
        let v143;
        switch (v130[0]) {
          case 'FirBuyer': {
            const v144 = v130[1];
            const v146 = stdlib.addressEq(v129, v30);
            v143 = v146;
            
            break;
            }
          case 'SecBuyer': {
            const v147 = v130[1];
            const v149 = stdlib.addressEq(v129, v21);
            v143 = v149;
            
            break;
            }
          }
        stdlib.assert(v143, {
          at: './src/reach/pair.rsh:84:19:application',
          fs: [],
          msg: null,
          who: 'SecBuyer'
          });
        switch (v130[0]) {
          case 'FirBuyer': {
            const v150 = v130[1];
            const v154 = stdlib.Array_set(v84, v85, v150);
            const v155 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:96:49:decimal', stdlib.UInt_max, 1));
            const cv84 = v154;
            const cv85 = v155;
            const cv183 = v141;
            const cv184 = v183;
            
            (() => {
              const v84 = cv84;
              const v85 = cv85;
              const v183 = cv183;
              const v184 = cv184;
              
              if ((() => {
                const v93 = stdlib.gt(v57, v184);
                const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
                const v95 = v93 ? v94 : false;
                
                return v95;})()) {
                const v166 = stdlib.sub(v57, v184);
                const v170 = stdlib.add(v183, v166);
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          case 'SecBuyer': {
            const v157 = v130[1];
            const v161 = stdlib.Array_set(v84, v85, v157);
            const v162 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:109:49:decimal', stdlib.UInt_max, 1));
            const cv84 = v161;
            const cv85 = v162;
            const cv183 = v141;
            const cv184 = v183;
            
            (() => {
              const v84 = cv84;
              const v85 = cv85;
              const v183 = cv183;
              const v184 = cv184;
              
              if ((() => {
                const v93 = stdlib.gt(v57, v184);
                const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
                const v95 = v93 ? v94 : false;
                
                return v95;})()) {
                const v166 = stdlib.sub(v57, v184);
                const v170 = stdlib.add(v183, v166);
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v170],
      tys: [ctc3, ctc3, ctc4, ctc5, ctc4, ctc4, ctc4, ctc2],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v21, v30, v57, v84, v85, v170, v183],
        evt_cnt: 0,
        funcNum: 8,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [] = txn6.data;
          const v178 = txn6.time;
          const v179 = txn6.secs;
          const v173 = txn6.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/reach/pair.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v175 = stdlib.addressEq(v30, v173);
          const v176 = stdlib.addressEq(v21, v173);
          const v177 = v175 ? true : v176;
          stdlib.assert(v177, {
            at: './src/reach/pair.rsh:112:52:dot',
            fs: ['at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)'],
            msg: 'sender correct',
            who: 'SecBuyer'
            });
          const cv84 = v84;
          const cv85 = v85;
          const cv183 = v178;
          const cv184 = v183;
          
          (() => {
            const v84 = cv84;
            const v85 = cv85;
            const v183 = cv183;
            const v184 = cv184;
            
            if ((() => {
              const v93 = stdlib.gt(v57, v184);
              const v94 = stdlib.lt(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:86:39:decimal', stdlib.UInt_max, 20));
              const v95 = v93 ? v94 : false;
              
              return v95;})()) {
              const v166 = stdlib.sub(v57, v184);
              const v170 = stdlib.add(v183, v166);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc3, ctc3, ctc4, ctc5, ctc4, ctc4, ctc4],
        waitIfNotPresent: false
        }));
      const [] = txn6.data;
      const v178 = txn6.time;
      const v179 = txn6.secs;
      const v173 = txn6.from;
      ;
      const v175 = stdlib.addressEq(v30, v173);
      const v176 = stdlib.addressEq(v21, v173);
      const v177 = v175 ? true : v176;
      stdlib.assert(v177, {
        at: './src/reach/pair.rsh:112:52:dot',
        fs: ['at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)'],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      const cv84 = v84;
      const cv85 = v85;
      const cv183 = v178;
      const cv184 = v183;
      
      v84 = cv84;
      v85 = cv85;
      v183 = cv183;
      v184 = cv184;
      
      continue;
      }
    else {
      const [v130] = txn5.data;
      const v141 = txn5.time;
      const v142 = txn5.secs;
      const v129 = txn5.from;
      let v131;
      switch (v130[0]) {
        case 'FirBuyer': {
          const v132 = v130[1];
          v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:87:12:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        case 'SecBuyer': {
          const v134 = v130[1];
          v131 = stdlib.checkedBigNumberify('./src/reach/pair.rsh:99:12:decimal', stdlib.UInt_max, 0);
          
          break;
          }
        }
      ;
      const v138 = stdlib.addressEq(v30, v129);
      const v139 = stdlib.addressEq(v21, v129);
      const v140 = v138 ? true : v139;
      stdlib.assert(v140, {
        at: './src/reach/pair.rsh:84:19:dot',
        fs: [],
        msg: 'sender correct',
        who: 'SecBuyer'
        });
      let v143;
      switch (v130[0]) {
        case 'FirBuyer': {
          const v144 = v130[1];
          const v146 = stdlib.addressEq(v129, v30);
          v143 = v146;
          
          break;
          }
        case 'SecBuyer': {
          const v147 = v130[1];
          const v149 = stdlib.addressEq(v129, v21);
          v143 = v149;
          
          break;
          }
        }
      stdlib.assert(v143, {
        at: './src/reach/pair.rsh:84:19:application',
        fs: [],
        msg: null,
        who: 'SecBuyer'
        });
      switch (v130[0]) {
        case 'FirBuyer': {
          const v150 = v130[1];
          const v154 = stdlib.Array_set(v84, v85, v150);
          const v155 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:96:49:decimal', stdlib.UInt_max, 1));
          const cv84 = v154;
          const cv85 = v155;
          const cv183 = v141;
          const cv184 = v183;
          
          v84 = cv84;
          v85 = cv85;
          v183 = cv183;
          v184 = cv184;
          
          continue;
          break;
          }
        case 'SecBuyer': {
          const v157 = v130[1];
          const v161 = stdlib.Array_set(v84, v85, v157);
          const v162 = stdlib.add(v85, stdlib.checkedBigNumberify('./src/reach/pair.rsh:109:49:decimal', stdlib.UInt_max, 1));
          const cv84 = v161;
          const cv85 = v162;
          const cv183 = v141;
          const cv184 = v183;
          
          v84 = cv84;
          v85 = cv85;
          v183 = cv183;
          v184 = cv184;
          
          continue;
          break;
          }
        }}
    }
  return;
  
  
  
  
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
int 64
==
assert
dup
store 255
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/pair.rsh:56:12:dot"
// "[]"
byte base64(AAAAAAAAAAQ=)
int 1
bzero
dig 1
substring 0 8
app_global_put
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
bz l1
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
int 64
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
// "./src/reach/pair.rsh:66:12:dot"
// "[]"
byte base64(AAAAAAAAAAM=)
int 1
bzero
dig 1
substring 0 8
app_global_put
pop
// compute state in HM_Set 2
byte base64(AAAAAAAAAAI=)
load 255
concat
txn Sender
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l1:
// Handler 3
dup
int 3
==
bz l2
pop
txna ApplicationArgs 1
dup
len
int 64
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 2
byte base64(AAAAAAAAAAI=)
load 255
concat
load 254
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/pair.rsh:72:11:dot"
// "[]"
// Just "sender correct"
// "./src/reach/pair.rsh:72:11:dot"
// "[]"
load 254
txn Sender
==
load 255
txn Sender
==
||
assert
byte base64(AAAAAAAAAAI=)
int 1
bzero
dig 1
substring 0 8
app_global_put
pop
// compute state in HM_Set 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
concat
global Round
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l2:
// Handler 4
dup
int 4
==
bz l3
pop
txna ApplicationArgs 1
dup
len
int 72
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
concat
load 253
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./src/reach/pair.rsh:78:11:dot"
// "[]"
// Just "sender correct"
// "./src/reach/pair.rsh:78:11:dot"
// "[]"
load 254
txn Sender
==
load 255
txn Sender
==
||
assert
load 255
load 254
concat
load 253
int 180
+
itob
concat
byte base64(ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAAAAAA==)
global Round
itob
concat
load 253
itob
concat
b loop5
l3:
l4:
l5:
// Handler 7
dup
int 7
==
bz l6
pop
txna ApplicationArgs 1
dup
len
int 1376
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
int 72
int 1352
substring3
store 252
dup
int 1352
int 1360
substring3
btoi
store 251
dup
int 1360
int 1368
substring3
btoi
store 250
dup
int 1368
int 1376
substring3
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 65
==
assert
dup
store 248
pop
// compute state in HM_Check 7
byte base64(AAAAAAAAAAc=)
load 255
concat
load 254
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 1
==
assert
global Round
load 250
<
assert
load 248
int 0
getbyte
int 0
==
bz l8
load 248
substring 1 65
store 246
int 0
store 247
l8:
load 248
int 0
getbyte
int 1
==
bz l9
load 248
substring 1 65
store 246
int 0
store 247
l9:
l7:
// "CheckPay"
// "./src/reach/pair.rsh:84:19:dot"
// "[]"
load 247
dup
bz l10
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
l10:
pop
// Just "sender correct"
// "./src/reach/pair.rsh:84:19:dot"
// "[]"
load 254
txn Sender
==
load 255
txn Sender
==
||
assert
load 248
int 0
getbyte
int 0
==
bz l12
load 248
substring 1 65
store 245
txn Sender
load 254
==
store 246
l12:
load 248
int 0
getbyte
int 1
==
bz l13
load 248
substring 1 65
store 245
txn Sender
load 255
==
store 246
l13:
l11:
// Nothing
// "./src/reach/pair.rsh:84:19:application"
// "[]"
load 246
assert
load 248
int 0
getbyte
int 0
==
bz l15
load 248
substring 1 65
store 245
load 255
load 254
concat
load 253
itob
concat
load 252
int 0
int 64
load 251
*
substring3
load 245
concat
load 252
int 64
dup
load 251
*
+
int 1280
substring3
concat
load 251
int 1
+
itob
concat
global Round
itob
concat
load 249
itob
concat
b loop5
l15:
load 248
int 0
getbyte
int 1
==
bz l16
load 248
substring 1 65
store 245
load 255
load 254
concat
load 253
itob
concat
load 252
int 0
int 64
load 251
*
substring3
load 245
concat
load 252
int 64
dup
load 251
*
+
int 1280
substring3
concat
load 251
int 1
+
itob
concat
global Round
itob
concat
load 249
itob
concat
b loop5
l16:
l14:
l6:
// Handler 8
dup
int 8
==
bz l17
pop
txna ApplicationArgs 1
dup
len
int 1376
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
int 72
int 1352
substring3
store 252
dup
int 1352
int 1360
substring3
btoi
store 251
dup
int 1360
int 1368
substring3
btoi
store 250
dup
int 1368
int 1376
substring3
btoi
store 249
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
itob
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
sha256
load 1
==
assert
global Round
load 250
>=
assert
// "CheckPay"
// "./src/reach/pair.rsh:112:52:dot"
// "[at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)]"
// Just "sender correct"
// "./src/reach/pair.rsh:112:52:dot"
// "[at ./src/reach/pair.rsh:84:19:application call to [unknown function] (defined at: ./src/reach/pair.rsh:84:19:function exp)]"
load 254
txn Sender
==
load 255
txn Sender
==
||
assert
load 255
load 254
concat
load 253
itob
concat
load 252
load 251
itob
concat
global Round
itob
concat
load 249
itob
concat
b loop5
l17:
int 0
assert
loop5:
dup
int 0
int 1280
substring3
store 255
dup
int 1280
int 1288
substring3
btoi
store 254
dup
int 1288
int 1296
substring3
btoi
store 253
dup
int 1296
int 1304
substring3
btoi
store 252
pop
dup
substring 0 32
store 251
dup
substring 32 64
store 250
dup
substring 64 72
btoi
store 249
pop
load 249
load 252
>
load 254
int 20
<
&&
bz l18
load 253
load 249
load 252
-
+
store 248
byte base64(AAAAAAAAAAE=)
int 1
bzero
dig 1
substring 0 8
app_global_put
pop
// compute state in HM_Set 7
byte base64(AAAAAAAAAAc=)
load 251
concat
load 250
concat
load 249
itob
concat
load 255
concat
load 254
itob
concat
load 248
itob
concat
load 253
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l18:
byte base64()
byte base64()
loop6:
pop
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
l19:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
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
int 8
bzero
int 1
bzero
dig 1
substring 0 8
app_global_put
pop
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
  viewKeys: 1,
  viewSize: 8
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
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v22",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
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
                "name": "v21",
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
                "internalType": "uint8[64]",
                "name": "v31",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
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
        "internalType": "struct T13",
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint8[64][20]",
                "name": "v84",
                "type": "uint8[64][20]"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_FirBuyer",
                    "type": "uint8[64]"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_SecBuyer",
                    "type": "uint8[64]"
                  }
                ],
                "internalType": "struct T16",
                "name": "v130",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint8[64][20]",
                "name": "v84",
                "type": "uint8[64][20]"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
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
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "NFT_owner1",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_owner2",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
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
            "components": [
              {
                "internalType": "uint8[64]",
                "name": "v22",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
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
                "name": "v21",
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
                "internalType": "uint8[64]",
                "name": "v31",
                "type": "uint8[64]"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint8[64][20]",
                "name": "v84",
                "type": "uint8[64][20]"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T16",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_FirBuyer",
                    "type": "uint8[64]"
                  },
                  {
                    "internalType": "uint8[64]",
                    "name": "_SecBuyer",
                    "type": "uint8[64]"
                  }
                ],
                "internalType": "struct T16",
                "name": "v130",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
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
                "name": "v21",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v30",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint8[64][20]",
                "name": "v84",
                "type": "uint8[64][20]"
              },
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602080830191909152600060018190558351918201819052919201604051602081830303815290604052600290805190602001906200007a929190620000b6565b506040805160006020820181905291810182905260600160408051601f1981840301815291905280516020909101206000555062000199915050565b828054620000c4906200015c565b90600052602060002090601f016020900481019282620000e8576000855562000133565b82601f106200010357805160ff191683800117855562000133565b8280016001018555821562000133579182015b828111156200013357825182559160200191906001019062000116565b506200014192915062000145565b5090565b5b8082111562000141576000815560010162000146565b600181811c908216806200017157607f821691505b602082108114156200019357634e487b7160e01b600052602260045260246000fd5b50919050565b61463580620001a96000396000f3fe60806040526004361061007f5760003560e01c806355f82f041161004e57806355f82f04146100f9578063b47b6c9c1461010c578063bb6e6a431461011f578063ddf9644d1461013257600080fd5b80633d3329ed1461008b57806346f8ed2a146100a05780634b4174b4146100d157806355f40150146100e457600080fd5b3661008657005b600080fd5b61009e61009936600461415e565b610145565b005b3480156100ac57600080fd5b506100b5610657565b6040516001600160a01b03909116815260200160405180910390f35b61009e6100df366004614184565b610953565b3480156100f057600080fd5b506100b5610a79565b61009e610107366004614184565b610d72565b61009e61011a36600461414c565b610e8d565b61009e61012d3660046141a1565b613917565b61009e610140366004614171565b613aa7565b6040516101819061015d906007908490602001614418565b6040516020818303038152906040528051906020012060001c600054146016613c68565b6000805561018d613e5f565b61019f61a08083013543106017613c68565b7fc63f272b31d56110e56e7022db85b2eafc73750f4eaa2c38f2e8e03137daf175826040516101ce9190614305565b60405180910390a160006101ea61a0e0840161a0c08501614131565b60018111156101fb576101fb6145c5565b141561023657604080516108008181018352909161a0e085019183908390808284376000920182905250602085019390935250508152610292565b600161024a61a0e0840161a0c08501614131565b600181111561025b5761025b6145c5565b141561029257604080516108008181018352909161a8e0850191839083908082843760009201829052506040850193909352505081525b80516102a19034146013613c68565b6102ea336102b560408501602086016140d5565b6001600160a01b0316146102e057336102d160208501856140d5565b6001600160a01b0316146102e3565b60015b6014613c68565b60006102fe61a0e0840161a0c08501614131565b600181111561030f5761030f6145c5565b141561036657604080516108008181018352909161a0e085019183908390808284376000920191909152505050608082015261035160408301602084016140d5565b6001600160a01b0316331460608201526103ca565b600161037a61a0e0840161a0c08501614131565b600181111561038b5761038b6145c5565b14156103ca57604080516108008181018352909161a8e08501918390839080828437600092019190915250505060a082015261035160208301836140d5565b6103d981606001516015613c68565b60006103ed61a0e0840161a0c08501614131565b60018111156103fe576103fe6145c5565b141561053a57604080516108008181018352909161a0e08501918390839080828437600092019190915250505060c0820152610438613ec7565b61044560208401846140d5565b81516001600160a01b03909116905261046460408401602085016140d5565b81516001600160a01b03909116602090910152805160408085013591810191909152805161028081019091526104f2906060850160146000835b828210156104dd57604080516108008181018352909181850287019183908390808284376000920191909152505050815260019091019060200161049e565b50505060c085015161a0608701359150613c8d565b602082015152610508600161a060850135614530565b60208083018051909101919091528051436040909101525161a0a084013560609091015261053581613d01565b505050565b600161054e61a0e0840161a0c08501614131565b600181111561055f5761055f6145c5565b141561065357604080516108008181018352909161a8e08501918390839080828437600092019190915250505060e0820152610599613ec7565b6105a660208401846140d5565b81516001600160a01b0390911690526105c560408401602085016140d5565b81516001600160a01b03909116602090910152805160408085013591810191909152805161028081019091526104f2906060850160146000835b8282101561063e5760408051610800818101835290918185028701918390839080828437600092019190915250505081526001909101906020016105ff565b50505060e085015161a0608701359150613c8d565b5050565b6000600180541415610713576000600280546106729061455f565b80601f016020809104026020016040519081016040528092919081815260200182805461069e9061455f565b80156106eb5780601f106106c0576101008083540402835291602001916106eb565b820191906000526020600020905b8154815290600101906020018083116106ce57829003601f168201915b50505050508060200190518101906107039190614114565b905061071160006007613c68565b505b600260015414156107ce5760006002805461072d9061455f565b80601f01602080910402602001604051908101604052809291908181526020018280546107599061455f565b80156107a65780601f1061077b576101008083540402835291602001916107a6565b820191906000526020600020905b81548152906001019060200180831161078957829003601f168201915b50505050508060200190518101906107be9190614114565b90506107cc60006007613c68565b505b60036001541415610889576000600280546107e89061455f565b80601f01602080910402602001604051908101604052809291908181526020018280546108149061455f565b80156108615780601f1061083657610100808354040283529160200191610861565b820191906000526020600020905b81548152906001019060200180831161084457829003601f168201915b50505050508060200190518101906108799190614114565b905061088760006007613c68565b505b60046001541415610944576000600280546108a39061455f565b80601f01602080910402602001604051908101604052809291908181526020018280546108cf9061455f565b801561091c5780601f106108f15761010080835404028352916020019161091c565b820191906000526020600020905b8154815290600101906020018083116108ff57829003601f168201915b50505050508060200190518101906109349190614114565b905061094260006007613c68565b505b61095060006007613c68565b90565b6109a5600061096560208401846140f7565b6040516020016109819291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c60005414600a613c68565b600080556040517f93936688b5b98d64d7e3b0e700099c0150b1bde4dcfb05e4dc2fbfc6cbe6b717906109d990839061439a565b60405180910390a16109ed34156009613c68565b600460015560408051600060208201819052910160405160208183030381529060405260029080519060200190610a25929190613ef7565b50604080516020810190915260008152338152604080516001602082015282516001600160a01b0316918101919091526060015b60408051601f198184030181529190528051602090910120600055505050565b6000600180541415610b3557600060028054610a949061455f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac09061455f565b8015610b0d5780601f10610ae257610100808354040283529160200191610b0d565b820191906000526020600020905b815481529060010190602001808311610af057829003601f168201915b5050505050806020019051810190610b259190614114565b9050610b3360006008613c68565b505b60026001541415610bf057600060028054610b4f9061455f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7b9061455f565b8015610bc85780601f10610b9d57610100808354040283529160200191610bc8565b820191906000526020600020905b815481529060010190602001808311610bab57829003601f168201915b5050505050806020019051810190610be09190614114565b9050610bee60006008613c68565b505b60036001541415610cab57600060028054610c0a9061455f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c369061455f565b8015610c835780601f10610c5857610100808354040283529160200191610c83565b820191906000526020600020905b815481529060010190602001808311610c6657829003601f168201915b5050505050806020019051810190610c9b9190614114565b9050610ca960006008613c68565b505b60046001541415610d6657600060028054610cc59061455f565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf19061455f565b8015610d3e5780601f10610d1357610100808354040283529160200191610d3e565b820191906000526020600020905b815481529060010190602001808311610d2157829003601f168201915b5050505050806020019051810190610d569190614114565b9050610d6460006008613c68565b505b61095060006008613c68565b604051610dae90610d8a9060019084906020016144e3565b6040516020818303038152906040528051906020012060001c60005414600c613c68565b600080556040517fb7d2e6f4bdc17d722c5366a9b79385e26ceea0bbc84b33b40cf431eb8a877e3190610de29083906143c4565b60405180910390a1610df63415600b613c68565b600360015560408051600060208201819052910160405160208183030381529060405260029080519060200190610e2e929190613ef7565b506040805180820190915260008082526020820152610e5060208401846140d5565b6001600160a01b03908116825233602080840191825260408051600292810192909252845184169082015290519091166060820152608001610a59565b604051610ec990610ea590600390849060200161451c565b6040516020818303038152906040528051906020012060001c600054146012613c68565b60008055610ed5613f7b565b7f70d2b296abd33b76c070189e09dc582c45c91b7f774d79a90cb94b51e55740d882604051610f0491906142da565b60405180910390a1610f1834156010613c68565b610f6133610f2c60408501602086016140d5565b6001600160a01b031614610f575733610f4860208501856140d5565b6001600160a01b031614610f5a565b60015b6011613c68565b60408051610800810182526020808252808201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516000602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516001602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516002602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516003602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516004602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516005602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516006602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516007602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516008602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516009602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600a602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600b602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600c602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600d602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600e602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e08101919091528151600f602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516010602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516011602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516012602090810291909101919091526040805161080081018252828152808301839052908101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081018290526103a081018290526103c081018290526103e08101829052610400810182905261042081018290526104408101829052610460810182905261048081018290526104a081018290526104c081018290526104e08101829052610500810182905261052081018290526105408101829052610560810182905261058081018290526105a081018290526105c081018290526105e08101829052610600810182905261062081018290526106408101829052610660810182905261068081018290526106a081018290526106c081018290526106e08101829052610700810182905261072081018290526107408101829052610760810182905261078081018290526107a081018290526107c081018290526107e081019190915281516013602002015261388f613ec7565b61389c60208401846140d5565b81516001600160a01b0390911690526138bb60408401602085016140d5565b81516001600160a01b039091166020909101526138dd60b46040850135614530565b8151604090810191909152825160208084018051929092528151600091015280514390830152519084013560609091015261053581613d01565b6040516139539061392f906002908490602001614508565b6040516020818303038152906040528051906020012060001c60005414600f613c68565b600080556040517fda22c31a3236619afcaa803ed18166a9ab288cb506989f1c2c4c58260680608c906139879083906143ed565b60405180910390a161399b3415600d613c68565b6139e4336139af60408401602085016140d5565b6001600160a01b0316146139da57336139cb60208401846140d5565b6001600160a01b0316146139dd565b60015b600e613c68565b600260015560408051600060208201819052910160405160208183030381529060405260029080519060200190613a1c929190613ef7565b5060408051606081018252600080825260208083018290529282015290613a45908401846140d5565b6001600160a01b03168152613a6060408401602085016140d5565b6001600160a01b039081166020838101918252436040808601918252805160039381019390935285518516908301529151909216606083015251608082015260a001610a59565b604051613ae390613abf906007908490602001614418565b6040516020818303038152906040528051906020012060001c60005414601a613c68565b60008055613afa61a080820135431015601b613c68565b7fffe00389824baa95670cb495b25e8e664b837e0ad6cebce294c903d0cd547a9381604051613b29919061436e565b60405180910390a1613b3d34156018613c68565b613b8633613b5160408401602085016140d5565b6001600160a01b031614613b7c5733613b6d60208401846140d5565b6001600160a01b031614613b7f565b60015b6019613c68565b613b8e613ec7565b613b9b60208301836140d5565b81516001600160a01b039091169052613bba60408301602084016140d5565b81516001600160a01b03909116602090910152805160408084013591810191909152805161028081019091526060830160146000835b82821015613c2f576040805161080081810183529091818502870191839083908082843760009201919091525050508152600190910190602001613bf0565b5050506020808401805193909352825161a060860135910152508051436040909101525161a0a083013560609091015261065381613d01565b816106535760405163100960cb60e01b81526004810182905260240160405180910390fd5b613c95613f8a565b60005b6014811015613ce157848160148110613cb357613cb36145db565b6020020151828260148110613cca57613cca6145db565b602002015280613cd981614594565b915050613c98565b5081818460148110613cf557613cf56145db565b60200201529392505050565b60408051602081019091526000815260208201516060015182516040015111613d2b576000613d38565b6014826020015160200151105b15613e2e57602082015160600151825160400151613d569190614548565b826020015160400151613d699190614530565b81526001805560408051600060208201819052910160405160208183030381529060405260029080519060200190613da2929190613ef7565b50613dab613fb8565b8351516001600160a01b039081168252845160209081015190911681830152845160409081015181840152818601805151606085015280518301516080850152855160a08501525181015160c084015251613e0b9160079184910161442d565b60408051601f198184030181529190528051602090910120600055506106539050565b60408051808201909152600080825260208201526105358160008080556001819055613e5c9060029061400d565b33ff5b60405180610100016040528060008152602001613e7a61404a565b8152602001613e8761404a565b815260006020820152604001613e9b61404a565b8152602001613ea861404a565b8152602001613eb561404a565b8152602001613ec261404a565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101613ec2614069565b828054613f039061455f565b90600052602060002090601f016020900481019282613f255760008555613f6b565b82601f10613f3e57805160ff1916838001178555613f6b565b82800160010185558215613f6b579182015b82811115613f6b578251825591602001919060010190613f50565b50613f7792915061407c565b5090565b6040518060200160405280613ec25b6040518061028001604052806014905b613fa261404a565b815260200190600190039081613f9a5790505090565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001613ff2613f8a565b81526020016000815260200160008152602001600081525090565b5080546140199061455f565b6000825580601f10614029575050565b601f016020900490600052602060002090810190614047919061407c565b50565b6040518061080001604052806040906020820280368337509192915050565b6040518060800160405280613ff2613f8a565b5b80821115613f77576000815560010161407d565b80356001600160a01b03811681146140a857600080fd5b919050565b8035600281106140a857600080fd5b600061082082840312156140cf57600080fd5b50919050565b6000602082840312156140e757600080fd5b6140f082614091565b9392505050565b60006020828403121561410957600080fd5b81356140f0816145f1565b60006020828403121561412657600080fd5b81516140f0816145f1565b60006020828403121561414357600080fd5b6140f0826140ad565b6000608082840312156140cf57600080fd5b600061b0e082840312156140cf57600080fd5b600061a0e082840312156140cf57600080fd5b6000610820828403121561419757600080fd5b6140f083836140bc565b6000606082840312156140cf57600080fd5b806000805b60408110156141e857823560ff81168082146141d2578384fd5b86525060209485019492909201916001016141b8565b5050505050565b6001600160a01b038061420183614091565b1683528061421160208401614091565b1660208401525060408101356040830152606082016060820160005b60148110156142545761424083836141b3565b61080092830192919091019060010161422d565b50505061a060818101359083015261a080808201359083015261a0a090810135910152565b6001600160a01b038061428b83614091565b1683528061429b60208401614091565b166020840152505050565b6001600160a01b03806142b883614091565b168352806142c860208401614091565b16602084015250604090810135910152565b608081016142e882846142a6565b60608301356142f6816145f1565b80151560608401525092915050565b61b0e0810161431482846141ef565b61a0c06143228185016140ad565b6002811061434057634e487b7160e01b600052602160045260246000fd5b9083015261a0e06143558184018583016141b3565b5061a8e06143678184018286016141b3565b5092915050565b61a0e0810161437d82846141ef565b61a0c08084013561438d816145f1565b1515920191909152919050565b610820810182356143aa816145f1565b151582526143be60208084019085016141b3565b92915050565b61082081016001600160a01b036143da84614091565b1682526143be60208301602085016141b3565b606081016143fb8284614279565b6040830135614409816145f1565b80151560408401525092915050565b82815261a0e081016140f060208301846141ef565b600061a0e082019050838252602060018060a01b03808551168285015281850151604082821681870152808701516060870152606087015192506080860191506000805b60148110156144b557845184835b8581101561449e57825160ff168252918801919088019060010161447f565b505050938501936108009390930192600101614471565b505050505050608083015161a08083015260a083015161a0a083015260c083015161a0c08301529392505050565b828152604081016001600160a01b036144fb84614091565b1660208301529392505050565b828152606081016140f06020830184614279565b828152608081016140f060208301846142a6565b60008219821115614543576145436145af565b500190565b60008282101561455a5761455a6145af565b500390565b600181811c9082168061457357607f821691505b602082108114156140cf57634e487b7160e01b600052602260045260246000fd5b60006000198214156145a8576145a86145af565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b801515811461404757600080fdfea2646970667358221220e3da27c516f88f9b56b264bc424554d983bb1ba74f4941bb7bce95bfedc09b1d64736f6c63430008050033`,
  BytecodeLen: 18398,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    NFT: {
      owner1: `NFT_owner1`,
      owner2: `NFT_owner2`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

