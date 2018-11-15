import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="well well-sm">
                <h3><strong>Lien he</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <iframe title="This is a unique title" src=""></iframe>
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Get in touch</strong></h4>
                        
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="" placeholder="E-mail" />
                            </div>
                            <div class="form-group">
                                <input type="tel" class="form-control" id="" placeholder="Phone" />
                            </div>
                            <div class="form-group">
                                <textarea className="form-control" row={3} placeholder="Message" defaultValue={""} />
                            </div>
                        
                            <button type="submit" class="btn btn-default" name="button">
                                <i className="fa fa-paper-plane-o" aria-hidden="true"/>Submit
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;