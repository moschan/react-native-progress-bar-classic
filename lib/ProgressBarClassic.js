/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import Style from './Style.js'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
} = React;

var ProgressBarClassic = React.createClass({
  getInitialState() {
    return {
      progress: 0,
      init_animation: false,
    };
  },

  getDefaultProps: function() {
    return {
      progress: 0,
    };
  },

  componentDidMount() {
    LayoutAnimation.spring();
    setTimeout(()=>{
      this.setState({progress: this.props.progress})
    }, 0)
  },

  componentWillReceiveProps(nextProps) {
    this.setState({progress: nextProps.progress})
  },

  componentWillUpdate() {
    LayoutAnimation.spring();
  },

  render: function() {
    var value = false
    var valueBalloon = false
    var marginBalloon = 0

    switch (this.props.valueStyle) {
      case 'baloon':
        valueBalloon = (
          <View style={Style.flexBox}>
            <View style={[{flex:this.state.progress}]}>
              <View style={Style.progressBar__balloon}>
                <View style={Style.progressBar__balloonArrow}></View>
                <Text style={Style.progressBar__balloonVal}>{this.state.progress}%</Text>
              </View>
            </View>
            <View style={[{flex:100 - this.state.progress}]}></View>
          </View>
        )
        marginBalloon = 30

        break;
      case 'none':
        break;
      default:
        value = (
          <View style={Style.progressBar_mes}>
            <Text style={Style.progressBar__val}>{this.state.progress}%</Text>
          </View>
        )
        break;
    }

    var chart = (
      <View>
        {valueBalloon}
        <View style={[Style.flexBox, Style.progressBar, {marginTop: marginBalloon}]}>
          <View style={[Style.progressBar_left, {flex:this.state.progress}]}>
            {value}
          </View>
          <View style={[Style.progressBar_right, {flex:100 - this.state.progress}]}></View>
        </View>

      </View>
    );
    return chart;
  }
});

module.exports = ProgressBarClassic

