import React from 'react'
import Data from '../quotes.json'


let txt= JSON.stringify(Data)
let parse = JSON.parse(txt)
let quotes = Object.values(parse).flat()
let full = []
for(let i=0; i<quotes.length; i++){
    full.push(Object.values(quotes[i]))
}
let quote = []
let author = []
for(let i=0; i<full.length; i++){
    quote.push(full[i][0])
    author.push(full[i][1])
}

class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            index: ''
            }
        this.rando = this.rando.bind(this);
    }
    rando(){
        this.setState({
            index: Math.floor(Math.random()*full.length)
        })
    }
    render(){
    const q = quote[this.state.index]
    const a = author[this.state.index]
    return(
        <div id="quote-box">
            <br />
            <h1 id="title"><u>Random Quote Generator</u></h1>
            <h2 id="text"><i>{q}</i></h2>
            <h2 id="author"><u>{a}</u></h2>
            <br />
            <button id="new-quote" onClick={this.rando}><i>Click For New Quote</i></button>
            <br /><br />
           
            <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
        </div>
    )
    }
}
export default Quote  