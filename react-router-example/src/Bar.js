import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body, Tab, Tabs, TabHeading,Text } from "native-base";
import { TouchableOpacity } from 'react-native';
import Tab1 from './Tab1';

export default class HeaderNoShadow extends Component {
  render() {
    return (
      <Container>
        <Header  noShadow style={styles.bar}>
          <Left>
            <TouchableOpacity>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{ marginLeft:40 }}>Main Menu</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </Header>
        <Tabs style={{marginTop:45, backgroundColor:'black'}}>
          <Tab heading={ <TabHeading style={{backgroundColor:'black'}}><Text>Camera</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'black'}}><Text>No Icon</Text></TabHeading>}>
            {/* <Tab2 /> */}
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:'black'}}><Icon name="apps" /></TabHeading>}>
            {/* <Tab3 /> */}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = {
    bar: {
        backgroundColor: 'black',
    },
};