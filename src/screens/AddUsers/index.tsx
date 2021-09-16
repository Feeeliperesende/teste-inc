import React, { useState } from 'react';

import {
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  ContainerBox,
  ContainerAction,
  ContainerText,
  ContainerText2,
  Content,
  ButtonLogin,
} from './styles';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AddUsers: React.FC = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate('Minha Lista');
  }

  return (
    <ContainerBox>
      <ImageBackground
        source={require('../../assets/annie-spratt-MChSQHxGZrQ-unsplash.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      >
        <View style={{ flex: 1, marginTop: '92%', borderRadius: 7 }}>
          <TextInput
            label="Nome"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Data de nascimento"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Salário"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Posição"
            value={text}
            onChangeText={(text) => setText(text)}
          />

          <View
            style={{
              width: '80%',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 10,
              marginTop: 5,
              marginLeft: '10%',
            }}
          >
            <Button mode="contained" onPress={() => console.log('Pressed')}>
              Cadastrar novo usuário
            </Button>
          </View>
        </View>
      </ImageBackground>
    </ContainerBox>
  );
};

export default AddUsers;
