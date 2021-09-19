import React, { useState } from 'react';

import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
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
import api from '../../services/supabase';

import ModalProfile from '../../components/modalProfile';

interface Users {
  id: number;
  name: string;
  bornDate: number;
  salary: number;
  position: string;
}

const EditProfile: React.FC = () => {
  const [text, setText] = useState('');
  const [users, setUsers] = useState<Users[]>([]);
  const [name, setName] = React.useState('');
  const [bornDate, setBornDate] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [position, setPosition] = React.useState('');

  const navigation = useNavigation();

  function handleDetails() {
    //@ts-ignore
    navigation.navigate('Minha Lista');
  }

  async function getAllUsers() {
    try {
      const { data } = await api.get('/employees?select');

      setUsers(data);
    } catch (error) {}
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
