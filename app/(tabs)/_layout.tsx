import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet, Platform } from 'react-native';
import { Sidebar } from '../../components/sidebar';
import { useResponsive } from '../../hooks/useResponsive';
import { COLORS } from '../../constants/theme';
import { Link } from 'expo-router';
import { TabBarCustom } from '@/components/TabBarCustom';


export default function TabLayout() {
  const { isDesktop, isMobile } = useResponsive();

  return (
    <View style={styles.container}>
      {/* Sidebar só aparece se for Desktop */}
      {isDesktop && <Sidebar />}

      <Tabs
        tabBar={props => (isMobile ? <TabBarCustom {...props} /> : null)}
        screenOptions={{
          headerShown: false,
          // Se for Desktop, escondemos a barra de baixo (Tabs)
          tabBarStyle: isDesktop ? { display: 'none' } : { backgroundColor: COLORS.surface },
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Dashboard' }} />
        <Tabs.Screen name="extrato" options={{ title: 'Extrato' }} />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Alinha Sidebar e Tabs lado a lado no Desktop
  },
});