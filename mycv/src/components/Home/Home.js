import React, { Component } from 'react';
import Course from './Course';

class Home extends Component {
    render() {
        return (
            <div className="row row-offcanvas row-offcanvas-right">
                <div className="col-xs-12 col-sm-9">
                    <p className="pull-right visible-xs">
                        <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
                    </p>
                    <div className="jumbotron">
                        <h1>Kay.info</h1>
                        <p>Khoa hoc lap trinh ReactJS tai QuocTuan.Info.</p>
                    </div>
                    <div className="row">
                        <Course>Lap trinh PHP</Course>
                        <Course>Lap trinh ASP</Course>
                        <Course>Lap trinh Java</Course>
                        <Course>Lap trinh Python</Course>
                        <Course>Lap trinh Android</Course>
                        <Course>Lap trinh Angular</Course>
                    </div>
                </div>

                <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
                    <div className="list-group">
                        <a href className="list-group-item active">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                        <a href className="list-group-item">Link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;