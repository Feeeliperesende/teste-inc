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
import Toast from 'react-native-toast-message';
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
    //@ts-ignore
    navigation.navigate('Adicionar usuário');
  }
  async function handleAddPeople() {}

  async function handleDelete(id: number) {
    try {
      const response = await api.delete(`/employer?select=${id}`);
    } catch (err) {
      console.log('err delete', err);
    }
  }

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
          <View
            style={{ display: 'flex', flexDirection: 'row', marginLeft: '85%' }}
          >
            <TouchButton style={{ paddingBottom: 5, marginRight: 5 }}>
              <Feather name="edit" size={20} color="#000" />
            </TouchButton>
            <TouchButton
              style={{ paddingBottom: 5 }}
              onPress={() => {
                handleDelete(item.id);
              }}
            >
              <Feather name="trash-2" size={20} color="#000" />
            </TouchButton>
          </View>
        </MapContent>
      ))}
    </ContainerBox>
  );
};

export default Details;
