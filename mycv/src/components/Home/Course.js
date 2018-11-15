import React, { Component } from 'react';

class Course extends Component {
    render() {
        return (
            <div className="col-xs-6 col-lg-4">
                <h2>{this.props.children}</h2>
                <p>Khoa hoc lap trinh Website bang PHP &amp; MySQL chi cung cap cho cac ban cac kien thuc la chinh. Ket thuc</p>
                <p><a className="btn btn-default" href role="button">Chi tiet >></a></p>
            </div>
        );
    }
}

export default Course;