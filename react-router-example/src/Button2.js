import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class ButtonThemeExample extends Component {
  render() {
    return (
      <Container style={styles.Button}>
        <Button dark style={styles.Button}><Text> Görev Oluştur </Text></Button>
        <Button dark style={styles.Button2}><Text> Görev Oluştur </Text></Button>
      </Container>
    );
  }
}

const styles={
  Button: {
        marginTop:100,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
  Button2: {
    marginTop:10,
    marginLeft: 110,
  }
};