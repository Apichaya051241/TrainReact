import React from "react";
import { connect } from "react-redux";
import Header from "../src/components/header.component";

import axios from "axios";

class Index extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    const res = await axios.get(
      "http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods"
    );    
    return { data: res.data.youtubes };
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.data.map(item=> (
          <div>{item.title}</div>
        ))}
      </div>
    );
  }
}

export default connect()(Index);
