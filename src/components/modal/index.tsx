import * as React from 'react';
import { View } from 'react-native';
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  TextInput,
} from 'react-native-paper';
import api from '../../services/supabase';
import { useNavigation } from '@react-navigation/native';

const ModalBox = () => {
  const [visible, setVisible] = React.useState(false);
  const [name, setName] = React.useState('');
  const [bornDate, setBornDate] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [position, setPosition] = React.useState('');

  const navigation = useNavigation();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    // backgroundColor: 'white',
    padding: 20,
    borderRadius: 7,
  };

  const handleSubmit = async () => {
    try {
      const data = {
        name,
        bornDate,
        salary,
        position,
      };
      await api.post('/employees?select=*', data);

      setName('');
      setBornDate('');
      setSalary('');
      setPosition('');
    } catch (err) {
      console.log('err', err);
    }
    //@ts-ignore
    navigation.navigate('Minha Lista');
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View>
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

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={{ marginTop: 8 }}
          >
            Cadastrar novo usuário
          </Button>
        </Modal>
      </Portal>
      <Button
        style={{
          marginTop: '145%',
          width: '30%',
          marginLeft: '35%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={showModal}
        mode="contained"
      >
        Adicionar
      </Button>
    </Provider>
  );
};

export default ModalBox;
