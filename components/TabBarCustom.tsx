import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { COLORS } from '../constants/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export function TabBarCustom({ state, navigation }: BottomTabBarProps) {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: '#FFF', paddingHorizontal: 24, paddingVertical: 10 }}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name as never);
            }
          };
  
          // Escolhe o ícone para cada rota
          const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
            index: 'grid-outline',
            extrato: 'document-text-outline',
            meta: 'disc-outline',
            perfil: 'person-outline',
          };
  
          return (
            <TouchableOpacity key={route.key} onPress={onPress} style={{ flex: 1, alignItems: 'center' }}>
              <TabIcon name={iconMap[route.name]} focused={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

interface TabBarIconProps {
    name : keyof typeof Ionicons.glyphMap;
    focused: boolean;
}
//icones normais
export const TabIcon = ({ name, focused }: TabBarIconProps) => (
    <Ionicons
    name={name}
    size={28}
    color={focused ? COLORS.secondary : '#A5B4FC'}
    />
);

// Botão central de adicionar
export const CenterButton = () => (
    <Link href="/modal" asChild>
        <TouchableOpacity style={styles.centerButton}>
            <Ionicons name="add" size={35} color="#FFF" />
        </TouchableOpacity>
    </Link>
);

const styles = StyleSheet.create({
    centerButton: {
        backgroundColor: COLORS.primary,
    width: 65,
    height: 65,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -35, // O efeito de "saltar" para fora
    borderWidth: 6,
    borderColor: '#FFF',
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    },
});