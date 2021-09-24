'reach 0.1';

export const main = Reach.App(() => {


  const Player = {
    ...hasRandom,
    informTimeout: Fun([], Null),
  };

  const Oracle = Participant('Oracle', {
    ...Player,
  });

  const Buyer = {
    ...Player,
    informPledged: Fun([UInt, UInt], Null),
    getPersonalInfo: Fun([], Bytes(64)),
    getWords: Fun([], Bytes(64)),
    getScore: Fun([], UInt),
    showChatInfo: Fun([Bytes(64)], Null),
    getChatInfo: Fun([], Bytes(64)),
    // showDialog: Fun([Array(Bytes(64), 64)], Null),
    showScore:Fun([UInt],Null)
  };

  const FirBuyer = Participant('FirBuyer',
    {
      ...Buyer
    }
  )

  const SecBuyer = Participant('SecBuyer',
    {
      ...Buyer
    }
  )

  deploy()


    const fee = 100;

Oracle.pay(fee*2)
commit()

FirBuyer.only(() => {
    const _score_fir = interact.getScore();
    const [_commitmemt_fir, _salt_fir] = makeCommitment(interact, _score_fir);
    const commitmemt_fir = declassify(_commitmemt_fir)
  })
  FirBuyer.publish(commitmemt_fir)
  commit()


  unknowable(SecBuyer, FirBuyer(_score_fir, _salt_fir))

  SecBuyer.only(() => {
    const score_sec = declassify(interact.getScore());
  })
  SecBuyer.publish(score_sec)
  commit()

  FirBuyer.only(() => {
    const [salt_fir, score_fir] = declassify([_salt_fir, _score_fir])
  })
  FirBuyer.publish(salt_fir, score_fir);
  checkCommitment(commitmemt_fir, salt_fir, score_fir)

  
  if (score_fir >= 8 && score_sec >= 8) {
    commit()
    FirBuyer.only(() => {
      const chatInfo_fir = declassify(interact.getChatInfo())
    })
    FirBuyer.publish(chatInfo_fir)
    commit()

    SecBuyer.only(() => {
      const chatInfo_sec = declassify(interact.getChatInfo())
      interact.showChatInfo(chatInfo_fir);
    })
    SecBuyer.publish(chatInfo_sec)
    commit()

    FirBuyer.only(() => {
      interact.showChatInfo(chatInfo_sec);
    })
    FirBuyer.publish()
    

  }
  if (score_fir <= 10 && score_sec <= 10 && balance() >= 20) {
    commit()

    SecBuyer.only(() => {
      interact.showScore(score_fir);
    })
    SecBuyer.publish()
    commit()

    FirBuyer.only(() => {
      interact.showScore(score_sec);
    })
    FirBuyer.publish()

    transfer(score_fir).to(SecBuyer)
    transfer(score_sec).to(FirBuyer)
  }

  /////

transfer(balance()).to(Oracle)
// commit();


commit()

exit();

})