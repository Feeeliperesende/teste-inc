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

import ModalProfile from '../../components/modalProfile';

const EditProfile: React.FC = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  function handleDetails() {
    //@ts-ignore
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
        <ModalProfile />
      </ImageBackground>
    </ContainerBox>
  );
};

export default EditProfile;
