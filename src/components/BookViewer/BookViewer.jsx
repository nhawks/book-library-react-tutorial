import React from 'react';
import Book from '../Book/Book';

const BookViewer  = (props) => {
    return ( 
        <div className="row row-space">
            <div className="col-md-4">
                {/* Button for previous book */}
                <button onClick={props.previousBook}>Previous Book</button>
            </div>
            <div className="col-md-4">
                {/* Displays Book */}
                <Book book={props.book} />
            </div>
            <div className="col-md-4">
                {/* Button for next book */}
                <button onClick={props.nextBook}>Next Book</button>
            </div>
        </div>
    );
}
 
export default BookViewer