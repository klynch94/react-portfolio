import React, {useState} from "react";

export default function () {
    const[state, setState] = useState({
        subject: "",
        message: ""
    })
    const handleOnChange = event => {
         const {name, value} = event.target
         setState({
             ...state,
             [name]: value
         });
        console.log(value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(state.subject, state.message)
        window.location.href= "mailto:lynch.kieran1@gmail.com?subject="+state.subject+"&body="+state.message
    }
    return (

        <form className="container mt-5 shadow align-items-center" style={{width: "40%", backgroundColor: "white", height: "50vh"}}>
            <div className="row">
                <div className="col-md-12">
                    <label className="mt-5">Subject</label>
                    <input className="form-control" name="subject" value={state.subject} onChange={handleOnChange} ></input>
                    <label className="mt-3">Message</label>
                    <textarea className="form-control" name="message" value={state.message} onChange={handleOnChange} style={{height: "20vh", resize: "none"}}></textarea>
                </div>
            </div>
            <button className="mt-3 btn btn-info" onClick={handleSubmit}>
                <i className="far fa-paper-plane mr-2"></i>
                Send Email
            </button>
        </form>
    )
}
