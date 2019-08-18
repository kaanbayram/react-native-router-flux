import React, { Component } from "react";
import { Container, Content, Header, Card, CardItem, Text, Body } from "native-base";

export default class CardItemBordered extends Component {
  render() {
    return (
      <Container style={{ marginTop:70 }}>
        {/* <Content padder> */}
          <Card>
            <CardItem header bordered style={{marginTop:10}}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered style={{marginTop:80}}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        {/* </Content> */}
      </Container>
    );
  }
}