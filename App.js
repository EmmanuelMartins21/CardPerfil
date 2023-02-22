import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Capa from './assets/capa.png';
import Perfil from './assets/PerfilPessoal.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Capa} style={styles.img}/>
      <View style={styles.dadosPessoais}>
        <Image source={Perfil} style={styles.perfil}/>
        <Text style={styles.titulo}>Emmanuel Martins</Text>
        <Text style={styles.paragrafo}>Desenvolvedor .NET a um ano e meio, 
        com foco na manutenção de Software desenvolvido na platadorma Xamarin. 
        Possuo vivencia com C#, JavaScript, Java, PL/SQL, Xamarin. </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dadosPessoais:{    
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#313131',
    
    borderStyle: "dotted",
  },
  titulo:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    alignItems: 'center'
  },
  paragrafo:{
    fontSize: 24,
    color: '#000',
    alignItems: 'center',
    marginTop: 25,
    textAlign: 'center'
  },
  img:{
    width: 420,
    height: 300,
    margin:0,
  },
  perfil:{
    width: 150,
    height: 150,
    borderRadius:120,
    margin:35,
  }
});
