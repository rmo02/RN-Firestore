import { Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';


export default function BotaoProduto({onPress}) {

  return (
    <TouchableOpacity style={estilos.botao} onPress={onPress}>
      <Text style={estilos.textoBotao}>+</Text>
    </TouchableOpacity>
  );
}
