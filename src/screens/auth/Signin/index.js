import {Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  const onSignUp = () => {
    console.log('HELLO WORLD');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'Sign in'} />

      <Input label={'Email'} placeHolder={'email@example.com'} />
      <Input isPassword label={'Password'} placeHolder={'**********'} />

      <Button style={styles.button} title={'Sign in'} />

      <Separator text={'Or Sign Up With'} />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signin;
