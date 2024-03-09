import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert, TextInput, ImageBackground, Modal } from 'react-native';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";


import { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [formacao, setFormacao] = useState('');
  const [senhacadastro,SetSenhaCadastro] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleCadastro, setModalVisibleCadastro] = useState(false);
  
// Função para lidar com o pressionamento do botão "Entrar"
  const handleEntrarPress = () => {
    if (login === 'caio' && senha === '123456') {
      console.log("Você conseguiu");
      setModalVisible(true);
    } else {
      console.log('Credenciais inválidas');
    }
  };
 // Função para lidar com o pressionamento do botão "Cadastrar"
  const handleCadastrarPress = () => {
    setModalVisibleCadastro(true);
  };

  const handleFormSubmit = () => {
    // Lógica para enviar o formulário
    setModalVisible(false); // Fecha o modal após o envio do formulário
  };


  return (
    <View style={styles.container}>
      <View style={styles.fieldset}>
        <Text style={styles.title}>Bem vindo Akademiya Fit</Text>
        <Image style={styles.imagem} source={require('./assets/Logo.jpg')} />
        {/* Campo de entrada para o login */}
        <View style={styles.field}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={login}
              onChangeText={text => setLogin(text)}
              placeholder="Login"
            />
            <FaUser style={styles.icon} />
          </View>
        </View>
         {/* Campo de entrada para a senha */}
        <View style={styles.field}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={text => setSenha(text)}
              placeholder="Senha"
              secureTextEntry={true}
            />
            <FaLock style={styles.icon} />
          </View>
        </View>
         {/* Botão "Entrar" */}
        <View style={styles.field}>
          <Button
            title="Entrar"
            onPress={handleEntrarPress}
          />
        </View>
          {/* Botão "Cadastrar" */}
        <View style={styles.field}>
          <Button
            title="Cadastrar"
            onPress={handleCadastrarPress}
          />
        </View>
        {/* Modal de formulário */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleCadastro}
          onRequestClose={() => {
            setModalVisibleCadastro(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Formulário de Cadastro</Text>
              {/* Campos de entrada para o formulário de cadastro */}
              {
                
                  <View style={styles.modalContent}>
                    <View style={styles.field}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          value={nome}
                          onChangeText={text => setNome(text)}
                          placeholder="Nome Completo"
                          secureTextEntry={false}
                        />
                        <MdOutlineDriveFileRenameOutline />
                      </View>
                    </View>

                    <View style={styles.field}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          value={cpf}
                          onChangeText={text => setCpf(text)}
                          placeholder="Informe seu CPF"
                          secureTextEntry={false}
                        />
                        <HiOutlineIdentification />
                      </View>
                    </View>

                    <View style={styles.field}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          value={email}
                          onChangeText={text => setEmail(text)}
                          placeholder="Informe o email"
                          secureTextEntry={false}
                        />
                        <MdEmail />
                      </View>
                    </View>
                    <View style={styles.field}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          value={formacao}
                          onChangeText={text => setFormacao(text)}
                          placeholder="Informe sua Graduação"
                          secureTextEntry={false}
                        />
                        <FaGraduationCap />
                      </View>
                    </View>
                    <View style={styles.field}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.input}
                          value={senhacadastro}
                          onChangeText={text => setSenhaCadastro(text)}
                          placeholder="Informe sua Graduação"
                          secureTextEntry={false}
                        />
                        <FaGraduationCap />
                      </View>
                    </View>
                  </View>
                
              }
              <Button
                style={styles.button}
                title="Enviar"
                onPress={handleFormSubmit}
              />
              <br></br>
              <Button
                style={styles.button}
                title="Fechar"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldset: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '40%', // Define a largura do fieldset
  },
  field: {
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
    color: 'gray',
  },
  imagem: {
    width: 320,
    height: 320,
    left: 95

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5, // Sombra para Android
    shadowColor: 'black', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 15,
    padding: 10
  },
  button: {
    padding: 15
  },
});