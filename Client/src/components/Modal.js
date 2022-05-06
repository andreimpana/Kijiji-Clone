import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                <h1>Create Ad</h1>
                <form className='ui form' style={{"paddingLeft":"25px", "paddingRight":"25px", "paddingBottom" : "25px"}}>
                    <div className='field'>
                        <label>Title</label>
                        <input type="text" name="Title" placeholder="Title"></input>
                    </div>

                    <div className='field'>
                        <label>Price</label>
                        <input type="text" name="Price" placeholder="Price"></input>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;