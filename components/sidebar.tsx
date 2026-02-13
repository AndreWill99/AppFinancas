import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export function Sidebar() {
  return (
    <View style={styles.sidebar}>
      <Link href="/modal" asChild>
        <TouchableOpacity style={styles.btnAdicionar}>
          <Text style={styles.btnTexto}>+ Adicionar</Text>
        </TouchableOpacity>
      </Link>

      <View style={styles.menuItens}>
        <Text style={[styles.item, styles.itemAtivo]}>📊 Dashboard</Text>
        <Text style={styles.item}>📄 Extrato</Text>
        <Text style={styles.item}>🎯 Metas</Text>
        <Text style={styles.item}>👤 Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: '#FFF',
    borderRightWidth: 1,
    borderRightColor: '#F1F5F9',
    padding: 20,
    height: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  btnAdicionar: {
    backgroundColor: '#6366F1',
    padding: 15,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  btnTexto: { color: '#FFF', fontWeight: 'bold' },
  menuItens: { gap: 25 },
  item: { fontSize: 16, color: '#64748B', fontWeight: '500' },
  itemAtivo: { color: '#4C1D95', fontWeight: 'bold' },
});