import React, {useState} from 'react';
import {View ,Text, TouchableOpacity,SafeAreaView, Button} from 'react-native';
import estilos  from './estilo'

export default function Item({Banda, Tipo, descricao,Observação}){

    const [expandir , setExpandir] = useState(false);
    const minimazar = ()=> {
        setExpandir(!expandir);

    }
    return <>

    <TouchableOpacity style={estilos.informacao} onPress={minimazar}>
         <Text style={estilos.titulo}> Procura -se </Text>
       
       <Text style={estilos.nomecampo}> Banda: </Text> 
       <Text style={estilos.nome}  >{Banda}</Text>
       <Text style={estilos.nomecampo} > Tipo:</Text>
       <Text style={estilos.nome}>{Tipo}</Text>
     
       {expandir && <View >
        <Text style={estilos.nomecampo} > Descricao:</Text>
       <Text style={estilos.nome}>{descricao} </Text>
       <Text style={estilos.nomecampo}> Observação:</Text>
       <Text style={estilos.nome}>{Observação} </Text>
       <View style={estilos.divisor}/>
        <Button title="Inscrever-se"  />
       </View>
   
}
     </TouchableOpacity>
     </>
}