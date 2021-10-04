import React, { Component } from 'react'
import './App.css'
import TitleBar from './TitleBar/TitleBar'

class App extends Component{
    constructor(props){
        super(props)
        this.books = [
            {title: "Grokking Algorithms", author: "Aditya Bhargava"},
            {title: "Cracking the Coding Interview", author: "Gayle Laakmann"},
            {title: "The Algorithm Design Manual", author: "Steven Skiena"},
        ]
        this.state = {
            bookNumber: 0
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <div className="col-md-4">
                    {/* Button for previous book */}
                </div>
                <div className="col-md-4">
                    {/* Displays Book */}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                </div>
                <div className="col-md-4">
                    {/* Button for next book */}
                </div>
            </div>
        )
    }
}

export default App