import React, { Component } from 'react'
import './App.css'
import TitleBar from './TitleBar/TitleBar'
import BookViewer from './BookViewer/BookViewer'
import Footer from './Footer/Footer'

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

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber
        tempBookNumber--
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1
        }
        this.setState({
            bookNumber: tempBookNumber
        })
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber
        tempBookNumber++
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0
        }
        this.setState({
            bookNumber: tempBookNumber
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook ={this.goToNextBook} previousBook ={this.goToPreviousBook} />
                <Footer />
            </div>
        )
    }
}

export default App