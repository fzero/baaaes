import React, { Component } from "react";

class BlockchainExplorer extends Component {
  render() {
    return (
      <main className="componentContainer">
        <section className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            error dolor consequuntur, natus eum itaque harum fugit perspiciatis
            nobis id aperiam sed architecto et esse perferendis nisi dolorem
            voluptas repellat.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Beatae, error dolor consequuntur, natus eum itaque
            harum fugit perspiciatis nobis id aperiam sed architecto et esse
            perferendis nisi dolorem voluptas repellat.
          </p>
        </section>

        <section className="component">
          <h3>Blockchain Transactions</h3>
          <div>
            <h5>Bought</h5>
            <div>
              <p>Cost:</p>
              <p>Spent:</p>
              <p>Sender Address</p>
              <p>Recieving Address</p>
            </div>
          </div>

          <div>
            <h5>Sold</h5>
            <div>
              <p>Cost:</p>
              <p>Spent:</p>
              <p>Sender Address</p>
              <p>Recieving Address</p>
            </div>
          </div>
          <button
            className="buttonBackwards"
            onClick={this.props.pageBackwards}
          >
            <i className="fas fa-arrow-left" />
            Previous
          </button>
          <button className="buttonForwards" onClick={this.props.pageForwards}>
            Next
            <i className="fas fa-arrow-right" />
          </button>
        </section>
      </main>
    );
  }
}

export default BlockchainExplorer;
