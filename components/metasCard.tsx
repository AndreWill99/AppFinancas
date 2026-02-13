import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface MetaProps {
  titulo: string;
  valorAtual: number;
  valorAlvo: number;
  cor?: string;
}

export function MetaCircular({ titulo, valorAtual, valorAlvo, cor = "#6366F1" }: MetaProps) {
  const tamanho = 120;
  const raio = 50;
  const circunferencia = 2 * Math.PI * raio;
  
  // Cálculo do preenchimento: quanto falta para 100%
  const percentagem = Math.min(valorAtual / valorAlvo, 1);
  const strokeDashoffset = circunferencia - (percentagem * circunferencia);

  return (
    <View style={styles.container}>
      <Svg width={tamanho} height={tamanho} style={styles.svg}>
        {/* Círculo de Fundo */}
        <Circle
          cx={tamanho / 2}
          cy={tamanho / 2}
          r={raio}
          stroke="#F1F5F9"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Círculo de Progresso */}
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
          rotation="-90" // Começa no topo
          origin={`${tamanho / 2}, ${tamanho / 2}`}
        />
      </Svg>

      {/* Textos Centrais */}
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
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10%',
    width: '100%',
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
    color: '#94A3B8',
    textTransform: 'lowercase',
  },
  valor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E1B4B',
  },
  alvo: {
    fontSize: 8,
    color: '#CBD5E1',
  },
});