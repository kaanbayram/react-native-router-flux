import React, {Component} from 'react';
import {Platform,AppRegistry,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
import { Button } from './src/Button';
import { CardSection } from './src/CardSection';
import { Header } from './src/Header';
import { Name } from './src/Name';
import Button2  from './src/Button2';
import Bar from './src/Bar';
import Card from './src/Card';
import { Router } from 'react-native-router-flux';
import Router1 from './src/Router1';



type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
      super(props);
      this.state = {
          counter: 0
      }
}


renderButton() {
  return <Button onPress={this.onClick.bind(this)}>Arttır</Button>;
}

  render() {
    return (
      <View style={{flex:1}}>
        {/* <Nativebase /> */}
        <Router1 />
        
        
      </View>
    );
  }

  onClick() {
    this.setState({counter: this.state.counter + 1});
  }
}



