import React from 'react';
import { ContainerBox, ContainerText, TouchButton, Content } from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { View } from 'react-native';

const Details: React.FC = () => {
  const navigation = useNavigation();

  function navigateToHome() {
    //@ts-ignore
    navigation.navigate('Início');
  }

  return (
    <ContainerBox>
      <Content>
        <TouchButton onPress={navigateToHome}>
          <Feather name="arrow-left" size={30} color="#000" />
        </TouchButton>
      </Content>
    </ContainerBox>
  );
};

export default Details;
