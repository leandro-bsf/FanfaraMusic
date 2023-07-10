import { StyleSheet } from 'react-native';
import {cores} from '../estilosPadrao'

export default StyleSheet.create({

   button:{
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    
   },
   tela: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
    width: 350,
    height:250,
    marginLeft: 25,
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: cores.laranja
   },
   buttons: {
    flexDirection: 'row',
   },
    buttao:{
    margin: 100,
},
   
})