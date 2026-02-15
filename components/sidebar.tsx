import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { COLORS } from '../constants/theme';
import {
  DashboardIcon,
  TargetIcon,
  DocumentExtractIcon,
  ProfileIcon,
} from '@/components/icons/TabIcons';

const ICON_SIZE = 24;

export function Sidebar() {
  return (
    <View style={styles.sidebar}>
      <Link href="/modal" asChild>
        <TouchableOpacity style={styles.btnAdicionar}>
          <Text style={styles.btnTexto}>+ Adicionar</Text>
        </TouchableOpacity>
      </Link>

      <View style={styles.menuItens}>
        <Link href="/(tabs)" asChild>
          <TouchableOpacity style={styles.menuRow}>
            <DashboardIcon size={ICON_SIZE} color={COLORS.primary} />
            <Text style={[styles.item, styles.itemAtivo]}>Dashboard</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(tabs)/extrato" asChild>
          <TouchableOpacity style={styles.menuRow}>
            <DocumentExtractIcon size={ICON_SIZE} color={COLORS.primary} />
            <Text style={styles.item}>Extrato</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.menuRow}>
          <TargetIcon size={ICON_SIZE} color={COLORS.primary} />
          <Text style={styles.item}>Metas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuRow}>
          <ProfileIcon size={ICON_SIZE} color={COLORS.primary} />
          <Text style={styles.item}>Perfil</Text>
        </TouchableOpacity>
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
  menuItens: { gap: 12 },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  item: { fontSize: 16, color: COLORS.textSecondary, fontWeight: '500' },
  itemAtivo: { color: COLORS.secondary, fontWeight: 'bold' },
});