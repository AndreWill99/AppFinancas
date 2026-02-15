import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants/theme';
import {SliderDivisao} from '../components/SliderDivisao'

export default function AddExpenseModal() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  
  // Estados para capturar os dados
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('Nós'); // 'Nós' ou 'Eu'

  //Slider
  const valorNumerico = parseFloat(valor.replace(',', '.')) || 0;
  const [divisaoEu, setDivisaoEu] = useState(valorNumerico / 2); // Começa em 50/50

  const nextStep = () => setStep(step + 1);
  const prevStep = () => step > 1 ? setStep(step - 1) : router.back();

  return (
    <View style={styles.container}>
      {/* HEADER COM VOLTAR E PROGRESSO */}
      <View style={styles.header}>
        <TouchableOpacity onPress={prevStep} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={COLORS.secondary} />
          <Text style={styles.backText}>Nova Despesa</Text>
        </TouchableOpacity>
        
        {/* Barra de Progresso Superior */}
        <View style={styles.progressContainer}>
          {[1, 2, 3].map((s) => (
            <View key={s} style={[styles.progressLine, step >= s ? styles.progressActive : styles.progressInactive]} />
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.formContent}>
        
        {/* PASSO 1: VALOR */}
        {step === 1 && (
          <View style={styles.stepWrapper}>
            <Text style={styles.stepTitle}>1. Valor:</Text>
            <Text style={styles.stepSub}>Digite o valor gasto</Text>
            <TextInput 
              style={styles.bigInput} 
              placeholder="R$ 0,00" 
              keyboardType="numeric"
              value={valor}
              onChangeText={setValor}
            />
          </View>
        )}

        {/* PASSO 2: DESCRIÇÃO E CATEGORIA */}
        {step === 2 && (
          <View style={styles.stepWrapper}>
            <Text style={styles.stepTitle}>2. Descrição:</Text>
            <Text style={styles.stepSub}>Digite a categoria da despesa</Text>
            <TextInput 
              style={styles.bigInput} 
              placeholder="Ex: Mercado, aluguel..." 
              value={descricao}
              onChangeText={setDescricao}
            />
            {/* Aqui podes adicionar os checkboxes de 'Despesa mensal' depois */}
          </View>
        )}

        {/* PASSO 3: TIPO DE GASTO E DIVISÃO */}
        {step === 3 && (
          <View style={styles.stepWrapper}>
            <Text style={styles.stepTitle}>3. Tipo de gasto</Text>
            <Text style={styles.stepSub}>Quem pagou pela despesa?</Text>
            
            <View style={styles.toggleRow}>
              {['Nós', 'Eu'].map((item) => (
                <TouchableOpacity 
                  key={item} 
                  onPress={() => setTipo(item)}
                  style={[styles.toggleBtn, tipo === item ? styles.toggleActive : styles.toggleInactive]}
                >
                  <Text style={tipo === item ? styles.toggleTextActive : styles.toggleText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {tipo === 'Nós' && (
              <View style={styles.divisaoSection}>
                <Text style={styles.dividirTitulo}>Dividir</Text>
                <SliderDivisao 
                  valorTotal={valorNumerico} 
                  valorEu={divisaoEu} 
                  setValorEu={setDivisaoEu} 
                />
              </View>
            )}

          </View>
        )}

      </ScrollView>

      {/* BOTÕES DE AÇÃO NO FUNDO */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.mainButton} onPress={step === 3 ? () => router.back() : nextStep}>
          <Text style={styles.mainButtonText}>{step === 3 ? 'Finalizar' : 'Próximo'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.voltarLink} onPress={prevStep}>
          <Text style={styles.voltarText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingTop: Platform.OS === 'ios' ? 50 : 20},
  header: { padding: 20, paddingTop: 40},
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backText: { fontSize: 18, fontWeight: 'bold', color: COLORS.secondary, marginLeft: 5 },
  progressContainer: { flexDirection: 'row', gap: 10, justifyContent: 'center' },
  progressLine: { height: 4, flex: 1, borderRadius: 2 },
  progressActive: { backgroundColor: COLORS.primary },
  progressInactive: { backgroundColor: '#E5E7EB' },
  
  formContent: { padding: 30 },
  stepWrapper: { gap: 10 },
  stepTitle: { fontSize: 32, fontWeight: 'bold', color: COLORS.secondary },
  stepSub: { fontSize: 14, color: COLORS.textSecondary },
  bigInput: { 
    backgroundColor: '#F3F4F6', 
    padding: 20, 
    borderRadius: 15, 
    fontSize: 20, 
    marginTop: 10,
    color: COLORS.textPrimary
  },
  
  toggleRow: { flexDirection: 'row', gap: 15, marginTop: 20 },
  toggleBtn: { flex: 1, padding: 15, borderRadius: 25, alignItems: 'center' },
  toggleActive: { backgroundColor: COLORS.primary },
  toggleInactive: { backgroundColor: '#E5E7EB' },
  toggleTextActive: { color: '#FFF', fontWeight: 'bold' },
  toggleText: { color: COLORS.textSecondary },

  footer: { padding: 30, alignItems: 'center', gap: 15 },
  mainButton: { backgroundColor: COLORS.primary, width: '100%', padding: 18, borderRadius: 15, alignItems: 'center' },
  mainButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
  voltarLink: { padding: 10 },
  voltarText: { color: COLORS.textSecondary, textDecorationLine: 'underline' },

  divisaoSection: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  dividirTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 10,
  },
});