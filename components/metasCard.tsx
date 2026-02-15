import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { COLORS } from '../constants/theme';

interface MetaProps {
  titulo: string;
  valorAtual: number;
  valorAlvo: number;
  cor?: string;
}

export function MetaCircular({ titulo, valorAtual, valorAlvo, cor = COLORS.primary }: MetaProps) {
  const tamanho = 120;
  const raio = 50;
  const circunferencia = 2 * Math.PI * raio;

  const percentagem = Math.min(valorAtual / valorAlvo, 1);
  const strokeDashoffset = circunferencia - (percentagem * circunferencia);

  return (
    <View style={styles.container}>
      <Svg width={tamanho} height={tamanho} style={styles.svg}>
        <Circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={raio}
          stroke={COLORS.border}
          strokeWidth="8"
          fill="transparent"
        />
        <Circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={raio}
          stroke={cor}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circunferencia}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${tamanho / 2}, ${tamanho / 2}`}
        />
      </Svg>

      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.valor}>$ {valorAtual.toLocaleString()}</Text>
        <Text style={styles.alvo}>$ {valorAlvo.toLocaleString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    flex: 1,
    minWidth: 120,
    height: 130,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 15,
  },
  svg: {
    position: 'absolute',
  },
  textContainer: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 10,
    color: COLORS.textSecondary,
    textTransform: 'lowercase',
  },
  valor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  alvo: {
    fontSize: 8,
    color: COLORS.textSecondary,
  },
});