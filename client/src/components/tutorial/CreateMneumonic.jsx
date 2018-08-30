import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateMneumonic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <h3>Mnemonic Phrase Description</h3>
          <p>
            A Mnemonic Phrase, also known as a "seed phrase" or "seed recovery
            phrase", is a randomly generated list of words which store all the
            information needed to recover a Crypto-Wallet. In the event where a
            User's computer breaks, or their hard-drive is corrupted, the
            Mnemonic Phrase can be used to recover the wallet. Anyone who
            discovers your mnemonic phrase can use it to access your wallet and
            potentially steal everything within it.
          </p>
          <h4>How it works</h4>
          <p>
            Crypto-Wallet software contains a list of words from a dictionary,
            each corresponding to an assigned number. The Mnemonic Phrase would
            be converted into a number that then can be used to access the
            wallet. BIP39, the mnemonic phrase generator, contains 2048 words,
            and creates 12 words for the phrase. There would be 2048^2 or
            4,194,304 different possible combinations, which would be
            approximately 128 bits of security.
          </p>
          <p>
            Warning: Forgetting this Phrase could result in the loss of your
            wallet and everything it contains.
          </p>
          <p>
            DO NOT overestimate your ability to memorize this phrase, please
            write it down on a piece of paper instead, and store it in a secure
            location.
          </p>
        </section>

        <section className="component">
          <h3>Mnemonic Phrase</h3>
          <textarea name="mnemonic-phrase-box" placeholder="" />
          <label>
            *Do not copy, please write it down
          </label>
          <Link to={'/register'}>Previous</Link>
          <Link to={'/confirmmneumonic'}>Next</Link>
        </section>
      </main>
    );
  }
}

export default CreateMneumonic;
