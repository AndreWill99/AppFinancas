import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Despesa</Text>
      
      {/* Campo de Valor */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Valor</Text>
        <TextInput 
          style={styles.input} 
          placeholder="R$ 0,00" 
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
      </View>

      {/* Campo de Descrição */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Ex: Mercado, Aluguer..." 
          placeholderTextColor="#999"
        />
      </View>

      {/* Seleção de Tipo (Baseado no teu design "nós/eu") */}
      <Text style={styles.label}>Tipo de Gasto</Text>
      <View style={styles.tipoContainer}>
        <TouchableOpacity style={[styles.tipoBotao, styles.ativo]}>
          <Text style={styles.tipoTextoAtivo}>Nós</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tipoBotao}>
          <Text style={styles.tipoTexto}>Eu</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoSalvar}>
        <Text style={styles.textoSalvar}>Salvar Lançamento</Text>
      </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4C1D95', // Roxo escuro
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 10,
    fontSize: 18,
    color: '#333',
  },
  tipoContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  tipoBotao: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  ativo: {
    backgroundColor: '#6366F1',
  },
  tipoTexto: {
    color: '#666',
  },
  tipoTextoAtivo: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoSalvar: {
    backgroundColor: '#6366F1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoSalvar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});