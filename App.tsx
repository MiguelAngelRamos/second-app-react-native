import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, HelperText, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Esquema de validación
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Por favor, ingrese un correo válido').required('El correo es obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria')
});

interface FormValues {
  email: string;
  password: string;
}

const App: React.FC<{}> = () => {
  return(
    <View style={styles.container}>
      <Formik
       initialValues={{ email: '', password: ''}}
       validationSchema={loginSchema}
       onSubmit={(values: FormValues) => {
        console.log('Valores del formulario: ', values);
       }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Hola</Text>
            <Text style={styles.subtitle}>Inicia session con tu cuenta</Text>

            <TextInput
              label="Correo Electrónico"
              value={values.email}
              onChangeText={handleChange('email')}
              autoCapitalize='none'
              onBlur={handleBlur('email')}
              error={touched.email && errors.email ? true: false}
              style={styles.input}
            />
            
            {touched.email && errors.email && (
              <HelperText type="error" visible={true}>
                {errors.email}
              </HelperText>
            )}
           
            <TextInput
              label="Contraseña"
              value={values.password}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password ? true: false}
              style={styles.input}
            />
            {touched.password && errors.password && (
             <HelperText type="error" visible={true}>
               {errors.password}
             </HelperText>
            )}

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Olvidate tu contraseña?</Text>
            </TouchableOpacity>

            <Button mode="contained" onPress={() => handleSubmit()} style={styles.button}>
              Iniciar Session
            </Button>
            <Text style={styles.socialLoginText}>Inicia sesion usando redes sociales</Text>

            <View style={styles.socialIcons}>
              <FontAwesome name="facebook" size={24} color="#3b5998"  style={styles.iconSpacing}/>
              <FontAwesome name="twitter" size={24} color="#00acee" style={styles.iconSpacing}/>
              <FontAwesome name="google" size={24} color="#db4a39" style={styles.iconSpacing}/>
            </View>

            <TouchableOpacity>
              <Text style={styles.registerText}>No tienes cuenta?, crea una</Text>
            </TouchableOpacity>

          </View>

         

        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  input: {
    marginTop: 10,
    backgroundColor: 'transparent',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#6200EE',
    borderRadius: 10,
    marginTop: 20
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#9C27B0',
    textAlign: 'center',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    color: '#9C27B0',
    textAlign: 'center',
    marginBottom: 20
  },
  forgotPassword: {
    marginTop: 10,
    color: '#9C27B0',
    marginBottom: 20,
  },
  socialLoginText: {
    textAlign: 'center',
    color: '#9C27B0',
    marginVertical: 20
  },
  registerText: {
    textAlign: 'center',
    color:'#9C27B0',
    marginTop: 20,
  },
  iconSpacing: {
    marginHorizontal: 10
  }
});

export default App;