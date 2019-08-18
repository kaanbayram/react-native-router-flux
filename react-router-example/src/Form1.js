import React, { Component } from "react";
import { TouchableOpacity,View } from 'react-native';
import { Container, Header, Content, Textarea, Form, Item, Picker,Icon,Input,Label,Button,Text } from "native-base";
import { Card } from './ortak/Card';
import { CardSection } from './ortak/CardSection';

export default class Form1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }

    render(){
        return(
        <Container>
        <Card>
        <CardSection>
        <Content padder style={{marginTop:15}}>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Görev giriniz..." />
          </Form>
        </Content>
        </CardSection>
        <CardSection>
        <Content>
            <Text>Önem Derecesi</Text>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Önem Derecesi"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Yüksek" value="key0" />
                <Picker.Item label="Orta" value="key1" />
                <Picker.Item label="Düşük" value="key2" />
              </Picker>
            </Item>
          </Form>
        </Content>
        </CardSection>
        <CardSection>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Görev Sahibi</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        </CardSection>
        <CardSection>
        <Button primary style={{justifyContent:'center',alignItems:'center',flex:1}}><Text> Oluştur </Text></Button>
        </CardSection>
        </Card>
      </Container>
        );
    }
};

const styles={
    Baslik:{
        backgroundColor:'white',
        Color:'black'
    },
};