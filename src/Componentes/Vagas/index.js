import React from 'react';
import Item from '../item'
import { SafeAreaView, StatusBar, FlatList } from 'react-native';
const servicos = [
    {
      id: 1,
      Banda: "Black mice",
      Tipo: "Definitivo",
      descricao: "baterista",
      Observação: "Disponivel para Viagem"
    },
    {
      id: 2,
      Banda:"Icy cave",
      Tipo: "Definitivo",
      descricao: "Tecladista",
      Observação: "Disponivel para Viagem"
    },


  {
    id: 4,
    Banda: "Banda Tche 4 ",
    Tipo: "Definitivo",
    descricao: "baterista",
    Observação: "Disponivel para Viagem"
  
  },
  {
    id: 5,
    Banda: "Banda Tche 5 ",
    Tipo: "Definitivo",
    descricao: "baterista",
    Observação: "Disponivel para Viagem"
  
  }
  ];
export default function Servicos(){
    return <SafeAreaView>
    < StatusBar/>
    
     <FlatList
     data={servicos}
     removeClippedSubviews={false}
     renderItem={({item})=> <Item {...item}/>}
     keyExtractor={({id})=>String(id)}
     />
     </SafeAreaView>
   
}