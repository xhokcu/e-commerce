import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import LoginImage from '@assets/svg/LoginSvg';
import Button from '@components/Button';
import GoogleIcon from '@assets/svg/GoogleIcon';
import { useState } from 'react';
import { theme } from '@theme/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { color } = theme.components;

function LoginScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LoginImage />
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>LOGIN</Text>
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
        <Button
          title={'Login'}
          onPress={() => AsyncStorage.setItem('isLogin', 'value')}
        />
        <Button
          title={'Login with Google'}
          onPress={() => null}
          buttonStyle={styles.secondaryButton}
          textStyle={styles.secondaryButtonText}
          iconRight={<GoogleIcon />}
        />
        <View style={styles.signupContainer}>
          <Text style={styles.bodyText}>Don't have an account?</Text>
          <Button
            title={'Signup'}
            textButton
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
