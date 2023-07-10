import { StyleSheet, View , Text, TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import { FontAwesome5 , MaterialIcons ,Ionicons  } from '@expo/vector-icons'; 
import  {cores } from '../estilosPadrao'
export default function Menu(){
    return  <View  style={styles.container}>

    
         <View style={styles.menu}>
       
          <TouchableOpacity >
            <FontAwesome5 name="user-tie" size={24} color="black"style={styles.icones} />
          </TouchableOpacity>
        
          <TouchableOpacity >
          <FontAwesome5 name="search-location" size={24} color="black"  style={styles.icones}/>
          </TouchableOpacity>   
       
           <TouchableOpacity >
           <MaterialIcons name="local-post-office" size={24} color="black" style={styles.icones} />
          </TouchableOpacity>      

        <TouchableOpacity >
        <Ionicons name="notifications-circle" size={24} color="black"  style={styles.icones}/>
          </TouchableOpacity>          
          </View>
        
      
    </View>
     
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
 
      
      
    },
    menu:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      backgroundColor: cores.laranja,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icones:{
        width: 80,
        height: 40,
        padding: 5
    }
  });
  