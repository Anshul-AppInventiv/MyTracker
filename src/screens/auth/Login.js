import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import InputBox from '../../components/customInput';
import CustomButton from '../../components/customButton';
import {loginInitialValue, validateLogin} from './utils';
import {useNavigation} from '@react-navigation/native';
import {vh, vw} from '../../utils/dimension';

const Login = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({loginInitialValue});
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
    if (value.trim() === '') {
      setErrors({
        ...errors,
        [field]: `${
          field === 'username' ? 'Username' : 'Password'
        } is required`,
      });
    } else {
      setErrors({
        ...errors,
        [field]: undefined,
      });
    }
  };

  const handleLogin = () => {
    const validationErrors = validateLogin(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Login successful with values:', values);
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    } else {
      console.log('Validation failed', validationErrors);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.login}>Login</Text>
      </View>
      <View style={styles.subContainer}>
        <View>
          <InputBox
            placeholder={'Email'}
            onChangeText={text => handleChange('username', text)}
            value={values.username}
            style={styles.inputView}
            touched={!!errors.username}
            errors={errors.username}
          />

          <InputBox
            placeholder={'Password'}
            onChangeText={text => handleChange('password', text)}
            value={values.password}
            style={styles.inputView}
            touched={!!errors.password}
            errors={errors.password}
            secureTextEntry
          />

          <CustomButton
            buttonTitle={'Login'}
            onPress={handleLogin}
            disabled={!values.username || !values.password}
          />
          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <View style={styles.orContainer}>
            <Text style={styles.orText}>OR</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.newAccountText}>Don't have an account yet?</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    paddingTop: vh(30),
    alignItems:'center',
  },
  login: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subContainer: {
    flex: 2,
    marginTop: vh(60),
    alignItems: 'center',
  },
  forgotPass: {
    marginTop: vh(14),
    alignSelf: 'center',
  },
  forgotPassText: {
    fontSize: 16,
    color: '#7F3DFF',
  },
  line: {
    width: vw(140),
    height: 1,
    borderWidth: 1,
    marginTop: vh(10),
    opacity: 0.1,
  },
  orContainer: {
    marginHorizontal: vw(20),
  },
  orText: {
    fontSize: 20,
    color: 'grey',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vh(40),
  },
  signUpContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh(50),
  },
  newAccountText: {
    fontSize: 16,
    color: '#91919F',
  },
  signupText: {
    fontSize: 16,
    color: '#7F3DFF',
  },
  error: {
    color: 'red',
  },
  inputView: {
    borderWidth: 1,
    width: vw(343),
    height: vh(50),
    justifyContent: 'center',
    borderColor: '#ccc',
    borderRadius: vw(5),
    marginTop: vh(16),
    paddingHorizontal: vw(10),
    fontSize: 18,
    resizeMode:'contain',
  },
});
