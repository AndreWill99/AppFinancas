import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';

interface CalendarioProps {
  proximoPagamento: string;
  data: string;
}

export function CalendarioCard({ proximoPagamento, data }: CalendarioProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.headerTitle}>calendário</Text>
      
      <View style={styles.content}>
        <Text style={styles.label}>próximo pagamento</Text>
        <Text style={styles.dataDestaque}>{data}</Text>
        <Text style={styles.itemNome}>{proximoPagamento}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    padding: SPACING.l,
    borderRadius: SPACING.borderRadius,
    flex: 1,
    minHeight: 140,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 20,
  },
  content: {
    marginTop: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  dataDestaque: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  itemNome: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: '500',
  }
});