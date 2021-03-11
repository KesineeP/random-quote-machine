import React, { useState, useEffect } from 'react'
import { FaTwitterSquare } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import { FaTumblrSquare } from 'react-icons/fa';


const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNumber = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNumber];

                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            })
    }
    const handleClick = () => {
        getQuote();
    }
    return (
        <div id="quote-box">
            <span id="text">
                <p className="text">
                    <FaQuoteLeft style={{ fontSize: "3rem", paddingRight: '10px' }} />
                    {quote}
                    <FaQuoteRight style={{ fontSize: "1.5rem", paddingLeft: '5px' }} />
                </p>
            </span>
            <div id="author">
                <p>-{author}</p>
            </div>
            <div id="buttons">
                <div id="social-media">
                    <a href="https://twitter.com/intent/tweet" target="_blankid" id="tweet-quote">
                        <FaTwitterSquare />
                    </a>
                    <a href="#" id="tweet-quote">
                        <FaTumblrSquare />
                    </a>
                </div>
                <button onClick={() => handleClick()} id="new-quote">
                    New quote
                    </button>
            </div>
        </div>

    )
}



export default Quotes

