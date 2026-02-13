import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

interface DadoMensal {
  mes: string;
  valor: number;
}

interface Props {
  dados: DadoMensal[];
}

export function GraficoMensal({ dados }: Props) {
  // Encontrar o maior valor para definir a altura 100%
  const valorMaximo = Math.max(...dados.map(d => d.valor));
  const ALTURA_MAX_GRAFICO = 150;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Gastos por mês</Text>
      
      <View style={styles.chartContainer}>
        {dados.map((item, index) => {
          // Cálculo da altura proporcional (Regra de 3)
          const alturaBarra = valorMaximo > 0 
            ? (item.valor / valorMaximo) * ALTURA_MAX_GRAFICO 
            : 10;

          // No teu design, Abril está em destaque (roxo forte)
          const isUltimoMes = index === dados.length - 1;

          return (
            <View key={item.mes} style={styles.column}>
              <View style={styles.barWrapper}>
                <View 
                  style={[
                    styles.bar, 
                    { 
                      height: alturaBarra,
                      backgroundColor: isUltimoMes ? COLORS.primary : '#D1D5DB' 
                    }
                  ]} 
                />
              </View>
              <Text style={[styles.mesLabel, isUltimoMes && styles.mesLabelAtivo]}>
                {item.mes}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    padding: SPACING.l,
    borderRadius: SPACING.borderRadius,
    marginTop: SPACING.m,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end', // Alinha as barras na base
    height: 200,
  },
  column: {
    alignItems: 'center',
    flex: 1,
  },
  barWrapper: {
    height: 150,
    justifyContent: 'flex-end', // Garante que a barra cresce para cima
    width: '100%',
    alignItems: 'center',
  },
  bar: {
    width: 40,
    borderRadius: 12,
  },
  mesLabel: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.secondary,
  },
  mesLabelAtivo: {
    fontWeight: 'bold',
    color: COLORS.primary,
  }
});