import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Categoria {
  nome: string;
  valor: number;
  cor: string;
}

interface Props {
  dados: Categoria[];
}

export function GraficoGastos({ dados }: Props) {
  // Encontrar o valor máximo para escalar as barras
  const valorMaximo = Math.max(...dados.map(d => d.valor));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gráfico de gastos:</Text>
      
      {dados.map((item, index) => {
        // Cálculo da largura proporcional
        const larguraProporcional = valorMaximo > 0 
          ? (item.valor / valorMaximo) * 100 
          : 0;

        return (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{item.nome}</Text>
            
            <View style={styles.barBackground}>
              <View 
                style={[
                  styles.barFill, 
                  { 
                    width: `${larguraProporcional}%`, 
                    backgroundColor: item.cor 
                  }
                ]} 
              />
            </View>
            
            <Text style={styles.value}>${item.valor.toFixed(2)}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 24,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1B4B',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  label: {
    width: 70,
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  barBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#F1F5F9',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 5,
  },
  value: {
    width: 60,
    fontSize: 12,
    textAlign: 'right',
    color: '#1E1B4B',
    fontWeight: '600',
  },
});