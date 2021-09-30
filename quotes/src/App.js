import './css/App.scss';
import React from 'react';

const _url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const _twitterUrl = 'https://twitter.com/intent/tweet?text='

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: '',
      quoteAuthor: '',
      twitterUrl: _twitterUrl,
      color: ''
    };
    this.getQuote();
    this.getQuote = this.getQuote.bind(this);
    this.handleGetQuote = this.handleGetQuote.bind(this);
    this.changeColor = this.changeColor.bind(this);
  };

  componentWillMount() {
    this.changeColor();
  }

  getQuote() {
    fetch(_url)
      .then((resp) => resp.json())
      .then((obj) => obj.quotes)
      .then((data) => {
        const index = Math.floor(Math.random() * data.length);
        this.setState({
          quoteText: data[index].quote,
          quoteAuthor: data[index].author,
          twitterUrl: _twitterUrl + encodeURIComponent(data[index].quote + " -" + data[index].author)
        });
      });
  };

  changeColor() {
    let randColor = colors[Math.floor(Math.random() * colors.length)]
    while (randColor === this.state.color) {
      randColor = colors[Math.floor(Math.random() * colors.length)]
    }
    this.setState({
      color: randColor,
    })
    document.body.style.backgroundColor = randColor;
  }

  handleGetQuote() {
    this.getQuote();
    this.changeColor();
  };

  render() {
    return (
      <div id="quote-box" >
        <div className="quote-text">
          <span id="text" style={{ color: this.state.color }}>{this.state.quoteText}</span>
        </div>
        <div className="quote-author">
          <p id="author" style={{ color: this.state.color }}><em>{this.state.quoteAuthor}</em></p>
        </div>
        <div className="buttons">
          <button onClick={this.handleGetQuote} class="button" id="new-quote" style={{ backgroundColor: this.state.color }}>New quote</button>
          <a class="button" id="tweet-quote" href={this.state.twitterUrl} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: this.state.color }}><i class="fa fa-twitter"></i></a>
        </div>
      </div >

    );
  }

}

export default App;
