import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/app.action'


class Header extends Component {
  render() {
    return (
      <div>
        <span onClick={()=>this.props.loadData()}>Header lek {this.props.appReducer.count}</span>
      </div>
    )
  }
}


const mapStateToProps = ({appReducer}) => ({
  appReducer
});


export default connect(mapStateToProps, actions)(Header)
