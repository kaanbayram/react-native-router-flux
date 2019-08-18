import React, {Component} from 'react';
import {Platform,AppRegistry,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';

const Name = (props) => {
  const { viewStyle,textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.Baslik}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    // backgroundColor: 'red',
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    },

  textStyle: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export {Name};
