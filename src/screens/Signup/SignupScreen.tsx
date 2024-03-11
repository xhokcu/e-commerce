import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import Button from '@components/Button/index';
import LoginImage from '@assets/svg/LoginSvg';
import { useState } from 'react';
import { theme } from '@theme/theme';

const { color } = theme.components;

function SignupScreen({ navigation }) {
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LoginImage />
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>SIGNUP</Text>
        <TextInput
          placeholder="Name"
          value={nameValue}
          onChangeText={text => setNameValue(text)}
          style={styles.input}
          placeholderTextColor={color.primary.gray[70]}
        />
        <TextInput
          placeholder="Email"
          value={emailValue}
          onChangeText={text => setEmailValue(text)}
          style={styles.input}
          placeholderTextColor={color.primary.gray[70]}
        />
        <TextInput
          placeholder="Password"
          value={passwordValue}
          onChangeText={text => setPasswordValue(text)}
          style={styles.input}
          placeholderTextColor={color.primary.gray[70]}
        />
        <Button title={'Signup'} onPress={() => null} />
        <Button
          title={'Go back to login'}
          textButton
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

export default SignupScreen;
