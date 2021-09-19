import React from 'react';

import {
  ImageBackground,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TextInput, Text, Button } from 'react-native-rapi-ui';
import KeyboardAvoidingViewWraper from '../../components/KeyboardView';
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
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');

  const navigation = useNavigation();

  function handleDetails() {
    //@ts-ignore
    navigation.navigate('Minha Lista');
  }

  return (
    <KeyboardAvoidingViewWraper>
      <ContainerBox>
        <ImageBackground
          source={require('./../../assets/windows-SwHvzwEzCfA-unsplash.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
        >
          <View style={{ marginTop: 500, margin: 10 }}>
            <TextInput
              placeholder="Entre com seu email"
              value={email}
              onChangeText={(val) => setEmail(val)}
              rightContent={<Ionicons name="mail" size={20} color="#948a8a" />}
            />
            <View style={{ marginTop: 10 }}>
              <TextInput
                secureTextEntry={true}
                placeholder="Entre com sua senha"
                value={pass}
                onChangeText={(val) => setPass(val)}
                rightContent={<Feather name="lock" size={20} color="#948a8a" />}
              />
            </View>
            <View
              style={{
                width: 130,
                display: 'flex',
                justifyContent: 'center',
                marginLeft: 130,
                marginTop: 10,
              }}
            >
              <Button text="Entrar" onPress={handleDetails} />
              <Text
                style={{
                  color: '#FFF',
                  fontWeight: 'bold',
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                Criar uma conta
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ContainerBox>
    </KeyboardAvoidingViewWraper>
  );
};

export default Home;
