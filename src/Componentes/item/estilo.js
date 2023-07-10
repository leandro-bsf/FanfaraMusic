import { StyleSheet } from 'react-native';
import { cores } from '../estilosPadrao';

export default StyleSheet.create({
  informacao: {
    padding: 8,
    borderWidth: 0.5,
    backgroundColor: cores.laranja,
    borderColor: cores.escuro,
    borderRadius: 15,
    marginTop:20,
 

    
  },
  nome: {
    color: cores.escuro,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
   
  },
 

  divisor: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: cores.cinza,
  },
  carrinho: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  valor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  descricao: {
    color: cores.escuro,
    fontSize: 16,
    marginRight: 8,
  },
 
  campos:{
    flexDirection: 'row',
   
  },
  titulo:{
    justifyContent: 'center',
    flex: 1,
    marginLeft: 100,
    fontSize: 20,
    color: 'black',
   
  },
  nomecampo:{
    fontSize: 15,
  }
});