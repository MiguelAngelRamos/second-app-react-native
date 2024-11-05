import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
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

const App: React.FC = () => {
  return(
    <View style={styles.container}>
      <Formik
       initialValues={{ email: '', password: ''}}
       validationSchema={loginSchema}
      >

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
  input: {},
  button: {}
});