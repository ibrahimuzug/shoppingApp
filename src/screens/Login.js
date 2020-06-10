import React, { Component, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Text, TextInput } from 'react-native';
import { Content, Container, Footer, FooterTab, Button, Icon } from 'native-base';


function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Hatalı Kod.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Telefon Numarasıyla Giriş Yap"
        onPress={() => signInWithPhoneNumber('+90 542-770-9331')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Onayla" onPress={() => confirmCode()} />
    </>
  );
}

export default class Login extends Component {


  render() {
    return (
      <Container>
        <Content>
          <PhoneSignIn>
          </PhoneSignIn>
        </Content>

        <Footer>
          <FooterTab>

            <Button vertical active
              onPress={() =>
                this.props.navigation.navigate('Anasayfa')
              }>
              <Icon name="home" />
            </Button>

            <Button vertical active
              onPress={() =>
                this.props.navigation.navigate('Sepetim')
              }>
              <Icon name="cart" />
            </Button>

            <Button vertical active
              onPress={() =>
                this.props.navigation.navigate('Giris')
              }>
              <Icon name="person" />
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
}