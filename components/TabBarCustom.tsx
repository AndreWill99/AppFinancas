import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { COLORS } from '../constants/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  DashboardIcon,
  TargetIcon,
  DocumentExtractIcon,
  DocumentExtractFilledIcon,
  ProfileIcon,
  ProfileFilledIcon,
} from '@/components/icons/TabIcons';

const TAB_ICON_SIZE = 24;
const DOCUMENT_ICON_SIZE = 28;

function TabIcon({ routeName, focused }: { routeName: string; focused: boolean }) {
  const color = focused ? COLORS.secondary : COLORS.accent;

  switch (routeName) {
    case 'index':
      return <DashboardIcon size={TAB_ICON_SIZE} color={color} />;
    case 'metas':
      return <TargetIcon size={TAB_ICON_SIZE} color={color} />;
    case 'extrato':
      return focused ? (
        <DocumentExtractFilledIcon size={DOCUMENT_ICON_SIZE} color={color} />
      ) : (
        <DocumentExtractIcon size={DOCUMENT_ICON_SIZE} color={color} />
      );
    case 'perfil':
      return focused ? (
        <ProfileFilledIcon size={TAB_ICON_SIZE} color={color} />
      ) : (
        <ProfileIcon size={TAB_ICON_SIZE} color={color} />
      );
    default:
      return <DashboardIcon size={TAB_ICON_SIZE} color={color} />;
  }
}

export function TabBarCustom({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
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

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.tab}>
            <TabIcon routeName={route.name} focused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export { TabIcon };

// Botão central de adicionar
export const CenterButton = () => (
    <Link href="/modal" asChild>
        <TouchableOpacity style={styles.centerButton}>
            <Ionicons name="add" size={35} color="#FFF" />
        </TouchableOpacity>
    </Link>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  centerButton: {
    backgroundColor: COLORS.primary,
    width: 65,
    height: 65,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -35,
    borderWidth: 6,
    borderColor: '#FFF',
    elevation: 8,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
});