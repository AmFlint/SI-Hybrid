import React, { Component } from 'react';
import '../styles/main.scss'
import {
  Navigator
} from 'react-onsenui';
import {bindActionCreators} from "redux";
import {hello} from "../actions/homeActions";
import {connect} from "react-redux";
import BottomBar from "./BottomBar";


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
          <main style={{margin : 0, padding : 0}}>
            <BottomBar />
          </main>

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
