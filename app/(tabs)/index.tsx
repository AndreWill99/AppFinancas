import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { GraficoGastos } from '../../components/GraficoGastos';
import { MetaCircular } from '@/components/metasCard';
import { useResponsive } from '../../hooks/useResponsive';
import { COLORS, SPACING, FONTS } from '../../constants/theme';
import { CalendarioCard } from '../../components/CalendarioCard';
import { GraficoMensal } from '../../components/GraficoMensal';
import { TopNavbar } from '@/components/TopNavbar';

const meusDados = [
  { nome: 'Mercado', valor: 450, cor: COLORS.primary },
  { nome: 'Lazer', valor: 200, cor: COLORS.accent },
  { nome: 'delivery', valor: 120, cor: COLORS.accent },
];

const dadosMensais = [
  { mes: 'janeiro', valor: 1200 },
  { mes: 'fevereiro', valor: 900 },
  { mes: 'março', valor: 1100 },
  { mes: 'abril', valor: 1800 },
];

export default function DashboardIndex() {
  const { isMobile } = useResponsive();

  const handleFilterChange = (filter: string) => {
    console.log('Filtro selecionado:', filter);
  };

  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TopNavbar onFilterChange={handleFilterChange} showIcon={isMobile} />

        {isMobile ? (
          /* Mobile: coluna única — ordem Figma */
          <View style={styles.mobileColumn}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Gastos totais:</Text>
              <Text style={styles.summarySub}>este mês</Text>
              <Text style={styles.summaryValue}>$000,00</Text>
            </View>

            <GraficoGastos dados={meusDados} />

            <CalendarioCard
              proximoPagamento="Internet/Netflix"
              data="Segunda, 10 de fevereiro"
            />

            <View>
              <Text style={styles.sectionTitle}>Metas</Text>
              <View style={styles.metasRow}>
                <MetaCircular titulo="viagem" valorAtual={450} valorAlvo={5000} />
                <MetaCircular titulo="carro" valorAtual={8000} valorAlvo={20000} />
              </View>
            </View>

            <GraficoMensal dados={dadosMensais} />
          </View>
        ) : (
          /* Desktop: grid como no Figma */
          <>
            {/* Row 1: Gastos totais | Gráfico de gastos */}
            <View style={styles.desktopRow}>
              <View style={[styles.summaryCard, styles.summaryCardFlex]}>
                <Text style={styles.summaryTitle}>Gastos totais:</Text>
                <Text style={styles.summarySub}>este mês</Text>
                <Text style={styles.summaryValue}>$000,00</Text>
              </View>
              <View style={styles.gridCell}>
                <GraficoGastos dados={meusDados} />
              </View>
            </View>

            {/* Row 2: Metas (2 cards) | Calendário */}
            <View style={styles.desktopRow}>
              <View style={styles.metasSection}>
                <Text style={styles.sectionTitle}>Metas</Text>
                <View style={styles.metasRow}>
                  <MetaCircular titulo="viagem" valorAtual={450} valorAlvo={5000} />
                  <MetaCircular titulo="carro" valorAtual={8000} valorAlvo={20000} />
                </View>
              </View>
              <View style={styles.gridCell}>
                <CalendarioCard
                  proximoPagamento="Internet/Netflix"
                  data="Segunda, 10 de fevereiro"
                />
              </View>
            </View>

            {/* Row 3: Gastos por mês (largura total) */}
            <GraficoMensal dados={dadosMensais} />
          </>
        )}
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: SPACING.l,
  },
  mobileColumn: {
    gap: SPACING.l,
  },
  desktopRow: {
    flexDirection: 'row',
    gap: SPACING.l,
    marginBottom: SPACING.l,
  },
  gridCell: {
    flex: 1,
    minWidth: 0,
  },
  summaryCard: {
    backgroundColor: COLORS.surface,
    padding: 30,
    borderRadius: SPACING.borderRadius,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  summaryCardFlex: {
    flex: 1,
    minWidth: 0,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  summarySub: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginVertical: 5,
  },
  summaryValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  sectionTitle: {
    fontSize: FONTS.sizeSection,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 15,
  },
  metasSection: {
    flex: 1,
    minWidth: 0,
  },
  metasRow: {
    flexDirection: 'row',
    gap: SPACING.l,
    flexWrap: 'wrap',
  },
});
