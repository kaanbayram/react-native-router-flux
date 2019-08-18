import React, { Component } from "react";
import { TouchableOpacity,View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

export default class GorevList extends Component{
    render() {
        return (
          <Container>
            <Content>
              <List>
                <ListItem noIndent style={{ backgroundColor: "#cde1f9" }}>
                  <Left>
                    <Text>Dışarda Dızla</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                 <Left>
                    <Text>OKul</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem>
                  <Left>
                    <Text>GYM e git</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
        );
      }
    };