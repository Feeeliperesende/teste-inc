import React, { useState, useEffect, useCallback } from 'react';
import {
  ContainerBox,
  ContainerText,
  TouchButton,
  Content,
  MapContent,
  ButtonView,
  TextName,
  TextPosition,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Text, View } from 'react-native';
import api from '../../services/supabase';
import ModalBox from '../../components/modal';

interface Users {
  id: number;
  name: string;
  bornDate: number;
  salary: number;
  position: string;
}

const Details: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [allPeople, setAllPeople] = useState<Users[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    getAllUsers();
  }, [users]);

  async function getAllUsers() {
    try {
      const { data } = await api.get('/employer?select');

      setUsers(data);
    } catch (error) {}
  }

  function navigateToHome() {
    //@ts-ignore
    navigation.navigate('Início');
  }

  function navigateToAdd() {
    navigation.navigate('Adicionar usuário');
  }
  async function handleAddPeople() {}

  return (
    <ContainerBox>
      <Content>
        <ButtonView>
          <TouchButton onPress={navigateToHome}>
            <Feather name="arrow-left" size={20} color="#000" />
          </TouchButton>
        </ButtonView>
        <ContainerText>Minha lista</ContainerText>
        <ButtonView>
          <TouchButton onPress={navigateToAdd}>
            <Feather name="plus" size={20} color="#000" />
          </TouchButton>
        </ButtonView>
      </Content>

      {users.map((item) => (
        <MapContent key={item.id}>
          <TextName>{item.name}</TextName>

          <TextPosition>{item.position}</TextPosition>

          <TouchButton style={{ marginLeft: '90%', paddingBottom: 5 }}>
            <Feather name="edit" size={25} color="#000" />
          </TouchButton>
        </MapContent>
      ))}
    </ContainerBox>
  );
};

export default Details;

{
  /* <View>
<TouchButton onPress={navigateToHome}>
  <Feather name="plus-circle" size={25} color="#000" />
</TouchButton>
</View> */
}
