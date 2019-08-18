import React, {Component} from 'react';
import {Platform,AppRegistry,StyleSheet,Image,Text,TouchableOpacity,View} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';

const ComponentLeft = () => {
return(
  <View style={styles.left}>
  <TouchableOpacity style={{justifyContent:'center', flexDirection: 'row'}}>
  <Image
  source={require('../img/back.png')}
  style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
  />
  </TouchableOpacity>
  </View>
  );
};
//<Text style={{ color: 'black', }}>Back</Text>
const ComponentCenter = () => {
return(
  <View style={styles.center}>
  <TouchableOpacity>
  <Image
  source={require('../img/home.jpg')}
  style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
  />
  </TouchableOpacity>
  </View>
  );
};

const ComponentRight = () => {

return(
  <View style={styles.right}>
  <TouchableOpacity>
  <Text style={{ color: 'black', }}>Right</Text>
  </TouchableOpacity>
  </View>
  );
};


const Header = () => {
  return(
    <NavigationBar
      componentLeft     = { () =>  <ComponentLeft />   }
      componentCenter   = { () =>  <ComponentCenter /> }
      componentRight    = { () =>  <ComponentRight />  }
      navigationBarStyle= {{ backgroundColor: '#ffffff' }}
      statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#ffffff' }}
    />
  );
};

const styles ={

  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end'
  },
  center: {
    flex:1,
  },
};

export { Header };
