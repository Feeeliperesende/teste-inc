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
  SimpleView,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Modal, View, Button } from 'react-native';
import api from '../../services/supabase';

import { TextInput } from 'react-native-paper';
import { Text } from 'react-native-rapi-ui';

interface Users {
  id: number;
  name: string;
  bornDate: number;
  salary: number;
  position: string;
}

const Details: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [searchText, setSearchText] = useState('');
  const [list, SetList] = useState(users);

  const [visivel, setVisivel] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getAllUsers();
  }, [users]);

  async function getAllUsers() {
    try {
      const { data } = await api.get('/employees?select');

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
  function navigateToEdit() {
    //@ts-ignore
    navigation.navigate('Editar perfil');
  }

  async function handleDelete(id: number) {
    try {
      const response = await api.delete(`employees?id=eq.${id}`);
    } catch (error) {
      console.log(error, 'AQI');
    }
  }

  useEffect(() => {
    if (searchText === '') {
      SetList(users);
    } else {
      SetList(
        users.filter((item) => {
          if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }
        })
      );
    }
  }, [setSearchText]);

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
      {users.length > 0 && (
        <SimpleView
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 80,
            alignItems: 'center',
          }}
        >
          <TextInput
            placeholder="Pesquisar"
            value={searchText}
            onChangeText={(val) => setSearchText(val)}
            style={{
              height: 18,
              margin: 8,
              padding: 10,
              width: '70%',
              backgroundColor: '#FFF',
            }}
          />
        </SimpleView>
      )}

      {users.map((item) => (
        <MapContent key={item.id}>
          <TextName>{item.name}</TextName>
          <TextPosition>{item.position}</TextPosition>
          <TextPosition>R$:{item.salary}</TextPosition>
          <TextPosition>{item.bornDate}</TextPosition>
          <SimpleView
            style={{ display: 'flex', flexDirection: 'row', marginLeft: '85%' }}
          >
            <TouchButton
              style={{ paddingBottom: 5, marginRight: 5 }}
              onPress={() => {}}
            >
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
          </SimpleView>
        </MapContent>
      ))}
      <SimpleView style={{ marginBottom: 15 }} />
    </ContainerBox>
  );
};

export default Details;
