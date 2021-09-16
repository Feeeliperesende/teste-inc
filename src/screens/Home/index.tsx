import React from 'react';

import { ImageBackground, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  ContainerBox,
  ContainerAction,
  ContainerText,
  ContainerText2,
  Content,
  ButtonLogin,
} from './styles';

import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleDetails() {
    navigation.navigate('Minha Lista');
  }

  return (
    <ContainerBox>
      <ImageBackground
        source={require('./../../assets/windows-SwHvzwEzCfA-unsplash.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
      >
        <ContainerAction>
          <ButtonLogin onPress={handleDetails}>
            <Feather name="arrow-right" size={30} color="white" />
          </ButtonLogin>
        </ContainerAction>
      </ImageBackground>
    </ContainerBox>
  );
};

export default Home;
