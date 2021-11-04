'reach 0.1';

export const main = Reach.App(() => {


  const Player = {
    ...hasConsoleLogger,
    ...hasRandom,
    informTimeout: Fun([], Null),
  };

  const Oracle = Participant('Oracle', {
  });

  const Buyer = {
    ...Player,
    getPersonalInfo: Fun([], Bytes(64)),
    getWords: Fun([Bytes(64), UInt], Bytes(64)),
    getScore: Fun([], UInt),
    showChatInfo: Fun([Bytes(64)], Null),
    getChatInfo: Fun([], Bytes(64)),
    // showDialog: Fun([Array(Bytes(64), 64)], Null),
    showScore:Fun([UInt],Null),
    showPersonalInfo: Fun([Bytes(64)],Null)
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
    owner1: Address,
    owner2: Address,
  });

  deploy();
  Oracle.publish();
  commit();

  
  // SecBuyer.interact.log('Fir:Im starting')

  SecBuyer.only(() => {
    const personal_info_fir = declassify(interact.getPersonalInfo())
  })
  SecBuyer.publish(personal_info_fir)

  commit()

  // FirBuyer.interact.log('Fir:Im starting')


  FirBuyer.only(() => {
    const personal_info_sec = declassify(interact.getPersonalInfo())
  })
  FirBuyer.publish(personal_info_sec)
  commit()

  SecBuyer.only(() => {
    interact.showPersonalInfo(personal_info_sec)
  })

  FirBuyer.only(() => {
    interact.showPersonalInfo(personal_info_fir)
  })
  Oracle.publish()


  const k = "                                                                ";
  const [timeRemaining_one, keepGoing_one] = makeDeadline(180);
  const [prevWords, idx] =
    parallelReduce([k, 0])
      .invariant(balance() == 0)
      .while(keepGoing_one() && idx < 20)
      .case(FirBuyer,
        (() => {
          // interact.showDialog()
          const words = declassify(interact.getWords(prevWords, idx))
          return ({
            msg: words
          });
        }),
        ((words) => {
          return [words, idx + 1];
        })
      )
      .case(SecBuyer,
        (() => {
          // interact.showDialog(dialog)
          const words = declassify(interact.getWords(prevWords, idx))
          return ({

            msg: words
          });
        }),
        ((words) => {
          return [words, idx + 1];
        })
      )
      .timeout(timeRemaining_one(), () => {Oracle.publish(); return [prevWords, idx] });

  vNFT.owner1.set(FirBuyer);
  vNFT.owner2.set(SecBuyer);

  commit()


  exit();


})