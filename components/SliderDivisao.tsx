import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { COLORS, SPACING } from '../constants/theme';

interface Props {
  valorTotal: number;
  valorEu: number;
  setValorEu: (val: number) => void;
}

export function SliderDivisao({ valorTotal, valorEu, setValorEu }: Props) {
  const valorParceira = valorTotal - valorEu;

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.labelValor}>R$ {valorEu.toFixed(2)}</Text>
        <Text style={styles.labelValor}>R$ {valorParceira.toFixed(2)}</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={valorTotal}
        step={1}
        value={valorEu}
        onValueChange={setValorEu}
        minimumTrackTintColor={COLORS.primary}
        maximumTrackTintColor="#E5E7EB"
        thumbTintColor={COLORS.primary}
      />

      <View style={styles.totalRow}>
        <Text style={styles.totalTexto}>R$ {valorTotal.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20, width: '100%' },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  labelValor: { fontSize: 14, fontWeight: 'bold', color: COLORS.secondary },
  slider: { width: '100%', height: 40 },
  totalRow: { alignItems: 'center', marginTop: -5 },
  totalTexto: { fontSize: 12, color: COLORS.textSecondary },
});