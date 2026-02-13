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
  { nome: 'Delivery', valor: 120, cor: '#A5B4FC' },
];

const dadosMensais = [
  { mes: 'janeiro', valor: 1200 },
  { mes: 'fevereiro', valor: 900 },
  { mes: 'março', valor: 1100 },
  { mes: 'abril', valor: 1800 }, // Destaque
];

export default function DashboardIndex() {
  const { isMobile } = useResponsive();

  const handleFilterChange = (filter: string) => {
    console.log("Filtro selecionado:", filter);
    // Aqui no futuro vamos filtrar os dados do gráfico!
  };

  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TopNavbar onFilterChange={handleFilterChange} />
        
        {/* 3. Área de Conteúdo Flexível (Grid) */}
        <View style={[styles.grid, { flexDirection: isMobile ? 'column' : 'row' }]}>
          
          {/* COLUNA ESQUERDA: Gastos Totais e Metas */}
          <View style={{ flex: 1, gap: SPACING.l }}>
            
            {/* Cartão de Gastos Totais */}
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Gastos totais:</Text>
              <Text style={styles.summarySub}>este mês</Text>
              <Text style={styles.summaryValue}>$000,00</Text>
            </View>

            {/* Secção de Metas */}
            <View>
              <Text style={styles.sectionTitle}>Metas</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 15 }}>
                <MetaCircular titulo="viagem" valorAtual={450} valorAlvo={3000} />
                <MetaCircular titulo="carro" valorAtual={8000} valorAlvo={20000} />
                <MetaCircular titulo="casa" valorAtual={1500} valorAlvo={50000} cor={COLORS.accent} />
              </ScrollView>
            </View>
          </View>

          {/* COLUNA DIREITA: Gráfico */}
          <View style={{ flex: isMobile ? 0 : 1.2, gap: SPACING.l }}>
            <GraficoGastos dados={meusDados} />
            
            {/* Novo componente de Calendário */}
            <CalendarioCard 
              proximoPagamento="Internet/Netflix" 
              data="Segunda, 10 de fevereiro" 
            />
          </View>
          

        </View>
        <GraficoMensal dados={dadosMensais} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: SPACING.l,
  },
  grid: {
    gap: SPACING.l,
  },
  filterContainer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginBottom: SPACING.xl, 
    gap: 10 
  },
  filterTabActive: { backgroundColor: COLORS.primary, paddingHorizontal: 25, paddingVertical: 8, borderRadius: 20 },
  filterTab: { backgroundColor: '#EDE9FE', paddingHorizontal: 25, paddingVertical: 8, borderRadius: 20 },
  filterTextActive: { color: '#FFF', fontWeight: '600' },
  filterText: { color: COLORS.accent },
  
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
  summaryTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.secondary },
  summarySub: { color: COLORS.textSecondary, fontSize: 12, marginVertical: 5 },
  summaryValue: { fontSize: 36, fontWeight: 'bold', color: COLORS.primary },
  
  sectionTitle: { 
    fontSize: FONTS.sizeSection, 
    fontWeight: 'bold', 
    color: COLORS.secondary, 
    marginBottom: 15 
  },
});