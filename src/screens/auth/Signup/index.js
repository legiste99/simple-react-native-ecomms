import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {AuthHeader} from '../../../components/AuthHeader';
import {Input} from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log('Hello');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title={'Sign Up'} />

      <Input label={'Name'} placeHolder={'John Doe'} />
      <Input label={'Email'} placeHolder={'email@example.com'} />
      <Input isPassword label={'Password'} placeHolder={'**********'} />

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with the <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Conditions</Text>{' '}
        </Text>
      </View>

      <Button style={styles.button} title={'Sign Up'} />

      <Separator text={'Or Sign In With'} />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          {' '}
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signup;
