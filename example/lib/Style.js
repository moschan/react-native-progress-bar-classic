'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

var Style = StyleSheet.create({
  flexBox: {
    flex: 1,
    flexDirection: 'row',
  },
  progressBar: {
    overflow: 'hidden',
    height: 20,
    borderWidth: 2,
    borderColor: 'rgb(0, 122, 255)',
    borderRadius: 10,
    marginBottom: 5,
  },
  progressBar_left: {
    backgroundColor: '#62aeff',
  },
  progressBar_right: {
    backgroundColor: '#fff',
  },
  progressBar_mes: {
    position: 'absolute',
    right: 0,
    paddingRight: 5,
    // lineHeight: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  progressBar__balloon: {
    position: 'absolute',
    padding: 3,
    right: -15,
    backgroundColor: '#62aeff',
    borderRadius: 2,
    paddingRight: 5,
    flexDirection: 'row',
  },
  progressBar__balloonArrow: {
    position: 'absolute',
    bottom: -10,
    right: 0,
    backgroundColor: '#62aeff',
    borderRadius: 30,
    width:30,
    height:30,
  },
  progressBar__val: {
    // textAlign: 'center',
    color: '#fff',
    // lineHeight: 30,
  },
  progressBar__balloonVal: {
    textAlign: 'center',
    color: '#fff',
    // lineHeight: 30,
  },
  labelWrap: {
    position: 'absolute',
    top: 0,
    left: .2,
  },
  label: {
    color: 'rgb(0, 122, 255)',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    textAlign: 'center'
  }
});
module.exports = Style

