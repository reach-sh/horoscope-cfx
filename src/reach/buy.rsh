'reach 0.1';

export const main = Reach.App(() => {


  const Player = {
    ...hasRandom,
    showOwner: Fun([Address, UInt, UInt, UInt, UInt], Null),
    informTimeout: Fun([], Null),
    getTime: Fun([Bytes(64)], Null),
  };

  const Oracle = Participant('Oracle', {
    ...Player,
    get_love: Fun([], UInt),
    get_career: Fun([], UInt),
    get_fortune: Fun([], UInt),

  });

  const Buyer = {
    ...Player,
    buyNFT: Fun([], Bytes(64)),
    generat_id: Fun([], UInt),
    showNFT: Fun([], Null),
    getPersonalInfo: Fun([], Bytes(64)),
    getWords: Fun([], Bytes(64)),
    getScore: Fun([], UInt),
    showChatInfo: Fun([Bytes(64)], Null),
    getChatInfo: Fun([], Bytes(64))
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

  const vNFT = View('NFT', {
    // id: UInt,
    owner1: Address,
    love1: UInt,
    career1: UInt,
    fortune1: UInt,

    owner2: Address,
    love2: UInt,
    career2: UInt,
    fortune2: UInt,

  });


  deploy();
  Oracle.publish();
  commit();

  const informTimeout = () => {
    each([Oracle, FirBuyer, SecBuyer], () => {
      interact.informTimeout();
    })
  }



  FirBuyer.only(() => {
    const generated_time_fir = declassify(interact.buyNFT());
    const generated_id_fir = declassify(interact.generat_id());
    interact.getTime(generated_time_fir);
  })

  const fee = 100;

  FirBuyer.pay(fee).publish(generated_time_fir, generated_id_fir)
  commit();




  Oracle.only(() => {
    interact.getTime(generated_time_fir);
    const attr_love_fir = declassify(interact.get_love());
    const attr_carrer_fir = declassify(interact.get_career());
    const attr_fortune_fir = declassify(interact.get_fortune());
  });

  Oracle.publish(attr_love_fir, attr_carrer_fir, attr_fortune_fir)
  vNFT.owner1.set(FirBuyer);
  vNFT.love1.set(attr_love_fir);
  vNFT.career1.set(attr_carrer_fir);
  vNFT.fortune1.set(attr_fortune_fir);


  commit();


  SecBuyer.only(() => {
    const generated_time_sec = declassify(interact.buyNFT());
    const generated_id_sec = declassify(interact.generat_id());
    interact.getTime(generated_time_sec);
  })

  SecBuyer.pay(fee).publish(generated_time_sec, generated_id_sec).timeout(200, () => { closeTo(FirBuyer, informTimeout) })
  commit();


  Oracle.only(() => {
    interact.getTime(generated_time_fir);
    const attr_love_sec = declassify(interact.get_love());
    const attr_carrer_sec = declassify(interact.get_career());
    const attr_fortune_sec = declassify(interact.get_fortune());

  });

  Oracle.publish(attr_love_sec, attr_carrer_sec, attr_fortune_sec)
  vNFT.owner2.set(SecBuyer);
  vNFT.love2.set(attr_love_sec);
  vNFT.career2.set(attr_carrer_sec);
  vNFT.fortune2.set(attr_fortune_sec);


  commit();


  FirBuyer.only(() => {
    interact.showOwner(FirBuyer, generated_id_fir,attr_love_fir,attr_carrer_fir,attr_fortune_fir)
  })
  FirBuyer.publish()
  commit()


  SecBuyer.only(() => {
    interact.showOwner(SecBuyer, generated_id_sec,attr_love_sec,attr_carrer_sec,attr_fortune_sec)
  })
  SecBuyer.publish()
  
  transfer(balance()).to(Oracle)

  commit()

  exit();
})

