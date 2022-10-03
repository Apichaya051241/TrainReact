
import React, { Component } from 'react'
import './../../styles/styles.scss'
import AdminHeader from './admin.header';
import AdminSidebar from './admin.sidebar';
import AdminContent from './admin.content';
import PropTypes from "prop-types";

class AdminHoc extends Component {
    render() {
        return (
            <div className="wrapper">
                <AdminHeader/>
                <AdminSidebar/>
                <AdminContent 
                title={this.props.contentTitle}
                titleButtun={this.props.contentTitleButton}>
                    {this.props.children}
                </AdminContent>
            </div>
        )
    }
}


AdminHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element
};

export default AdminHoc