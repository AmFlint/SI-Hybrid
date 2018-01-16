import React, { Component } from 'react';
import './test.scss'
import {
  Navigator
} from 'react-onsenui';
import {bindActionCreators} from "redux";
import {hello} from "../actions/homeActions";
import {connect} from "react-redux";

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);


class App extends Component {

  componentDidMount() {
    const { hello } = this.props;
    hello();
  }

  render() {
      const {homeMessage} = this.props;
      // <Navigator
      //   renderPage={renderPage}
      //   initialRoute={{component: MainPage, key: 'MAIN_PAGE'}}
      //>
      return (
          <h1>{ homeMessage }</h1>
      )
  };
}



function mapStateToProps(state) {
    return {
      homeMessage : state.home.message
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hello
    }, dispatch
)}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
