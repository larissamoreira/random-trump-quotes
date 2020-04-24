import React, { Component } from 'react';
import logo from '../../assets/trump.png';
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: null
        }
    }

    componentDidMount() {
        this.loadQuote()
    }

    loadQuote = () => {
        const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ quote: data.message })
            })
    }

    handleClick = e => {
        e.preventDefault();
        this.loadQuote();
    }

    handleTweetClick = e => {
        e.preventDefault();
        window.open(`https://twitter.com/intent/tweet?hashtags=trumpquotes&related=&text=${this.state.quote}`);
    }

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                    <img src={logo} className="logo" alt="logo" />
                    <h1 className="App-title">That's what trump said</h1>
                </header>
                <h2 className="quote">
                    {this.state.quote}
                </h2>
                <div className="buttons">
                    <button onClick={this.handleClick}>new quote</button>
                    <button onClick={this.handleTweetClick}><i className="fab fa-twitter" aria-hidden="true"></i>tweet</button>
                </div>
            </div>
        );
    }
}

export default App;
