import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING } from '../constants/theme';

interface TopNavbarProps {
  onFilterChange?: (filter: string) => void;
  showIcon?: boolean;
}

export function TopNavbar({ onFilterChange, showIcon }: TopNavbarProps) {
  const [activeTab, setActiveTab] = useState('nós');

  const handlePress = (tab: string) => {
    setActiveTab(tab);
    if (onFilterChange) onFilterChange(tab);
  };

  const tabs = ['nós', 'eu', 'parceira'];

  return (
    <View style={styles.container}>
      {showIcon && (
        <View style={styles.iconWrapper}>
          <Ionicons name="people-outline" size={28} color="#FFF" />
        </View>
      )}
      <View style={styles.navBg}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => handlePress(tab)}
              style={[styles.tab, isActive && styles.tabActive]}
            >
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: SPACING.l,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.m,
  },
  navBg: {
    flexDirection: 'row',
    backgroundColor: COLORS.border,
    borderRadius: 30,
    padding: 4,
  },
  tab: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },
  tabActive: {
    backgroundColor: COLORS.primary, // O azul/roxo vibrante do teu design
    // Sombra para dar o efeito de "elevação" que está no design
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  tabText: {
    color: COLORS.textSecondary,
    fontWeight: '500',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});