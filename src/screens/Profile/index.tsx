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
        <View style={{ margin: 15, marginTop: 120 }}>
          <TextInput
            label="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              marginTop: 20,
              marginBottom: 5,
              borderRadius: 7,
              height: 50,
            }}
          />

          <TextInput
            label="Data de nascimento"
            value={bornDate}
            onChangeText={(text) => setBornDate(text)}
            style={{ marginBottom: 5, borderRadius: 7, height: 50 }}
          />
          <TextInput
            label="Salário"
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={{ marginBottom: 5, borderRadius: 7, height: 50 }}
          />
          <TextInput
            label="Posição"
            value={position}
            onChangeText={(text) => setPosition(text)}
            style={{ marginBottom: 5, borderRadius: 7, height: 50 }}
          />
        </View>
        <View style={{ width: 230, marginLeft: 80 }}>
          <Button mode="contained" onPress={() => {}} style={{ marginTop: 3 }}>
            Editar
          </Button>
        </View>
      </ImageBackground>
    </ContainerBox>
  );
};

export default EditProfile;
