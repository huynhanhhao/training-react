import React, { Component } from 'react';

class Item extends Component {

    render() {
        return (
            <div className="item col-xs-4 col-lg-4">
                    <div className="thumbnail">
                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff"/>
                        <div className="caption">
                            <h4 className="group inner list-group-item-heading">
                                {this.props.children}
                            </h4>
                            <p className="group inner list-group-item-text">
                                Khoa hoc lap trinh Website bang PHP &amp; MySQL chi cung cap cho cac ban cac kiem thuc la chinh. Ket thuc khoa
                            </p>
                            <div className="row">
                                <div className="col-xs-12 col-md-8">
                                    <p className="lead">
                                        1.800.000 VND
                                    </p>
                                </div>
                                <div className="col-xs-12 col-md-4">
                                    <a className="btn btn-success" href="http://www.jquery2dotnet.com">Chi tiet</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Item;