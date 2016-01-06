/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

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
    };
  },

  componentWillMount() {
    LayoutAnimation.spring();
  },

  componentWillReceiveProps() {
    LayoutAnimation.spring();
  },
  render: function() {
    var chart =  (
      <View>
        <View style={styles.chart}>
          <View style={[styles.chartBar, {flex:this.props.progress}]}>
            <View style={styles.chartBody}>
              <Text>{this.props.progress}%</Text>
            </View>
          </View>
          <View style={[styles.chartBarEmpty, {flex:100 - this.props.progress}]}></View>

        </View>
      </View>
    );
    return chart;
  }
});

var styles = StyleSheet.create({
  chart: {
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'row',
    height: 20,
    borderWidth: 2,
    borderColor: 'rgb(0, 122, 255)',
    borderRadius: 10,
    marginBottom: 5,
  },
  chartBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 122, 255, .6)',
  },
  chartBarEmpty: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  chartBody: {
    position: 'absolute',
    right: 0,
    // lineHeight: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
});

module.exports = ProgressBarClassic

