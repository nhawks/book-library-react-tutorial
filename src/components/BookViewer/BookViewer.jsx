import React from 'react';

const BookViewer  = (props) => {
    return ( 
        <div className="row row-space">
                    <div className="col-md-4">
                        {/* Button for previous book */}
                        <button onClick={props.previousBook}>Previous Book</button>
                    </div>
                    <div className="col-md-4">
                        {/* Displays Book */}
                        <h1>{props.book.title}</h1>
                        <h4>{props.book.author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/* Button for next book */}
                        <button onClick={props.nextBook}>Next Book</button>
                    </div>
                </div>
     );
}
 
export default BookViewer