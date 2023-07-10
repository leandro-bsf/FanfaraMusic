import React from 'react'
import { View, TextInput, TouchableOpacity, Text,Button} from 'react-native'
import estilo from './estilo'
export default function login(){
    return ( <TouchableOpacity>
             <View style={estilo.tela}>

                <Text> Logar </Text>
                 <TextInput  style={estilo.button}
                  placeholder="Digite seu email"
                  keyboardType="email-address"/>

                <TextInput   style={estilo.button}
                  placeholder="Digite sua senha"
                  keyboardType="email-address"/>

                <View style={estilo.buttons}>
                <Button  style={estilo.buttao}  title="Login"  />
                 <Button style={estilo.buttao}   title="Cadastrar-se "  />
                </View>
               
             </View>
              </TouchableOpacity>
      );
    }
