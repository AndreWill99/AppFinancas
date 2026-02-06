import React from 'react';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';

// Componente de Cartão de Meta (Círculo)
const GoalCard = ({ titulo, valor }: { titulo: string; valor: string }) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center w-40">
    <div className="relative w-20 h-20 flex items-center justify-center border-4 border-purple-600 rounded-full">
      <span className="text-[10px] absolute -top-2 bg-white px-1">{titulo}</span>
      <div className="text-center">
        <p className="text-xs font-bold">{valor}</p>
        <p className="text-[8px] text-gray-400">$000,00</p>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-full flex">
            <button className="bg-blue-600 text-white px-8 py-2 rounded-full shadow-lg">nós</button>
            <button className="px-8 py-2 text-gray-400">eu</button>
            <button className="px-8 py-2 text-gray-400">parceira</button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Gastos Totais */}
          <div className="col-span-4 bg-white p-8 rounded-3xl shadow-sm text-center">
            <h2 className="text-purple-900 font-bold text-xl mb-2">Gastos totais:</h2>
            <p className="text-gray-400 text-sm mb-4">este mês</p>
            <p className="text-5xl font-bold text-blue-700">$000,00</p>
          </div>

          {/* Gráfico de Gastos (Barras) */}
          <div className="col-span-8 bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-purple-900 font-bold text-xl mb-6">Gráfico de gastos:</h2>
            <div className="space-y-4">
              {['Mercado', 'Lazer', 'Delivery'].map((cat) => (
                <div key={cat} className="flex items-center gap-4">
                  <span className="w-20 text-sm text-gray-600">{cat}</span>
                  <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-600 h-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metas */}
          <div className="col-span-6 flex gap-4">
             <GoalCard titulo="viagem" valor="$ 000,00" />
             <GoalCard titulo="carro" valor="$ 000,00" />
          </div>
          
          {/* Calendário Simples */}
          <div className="col-span-6 bg-white p-6 rounded-3xl shadow-sm">
             <h3 className="text-blue-700 font-bold">calendario</h3>
             <p className="mt-2 text-sm font-bold">próximo pagamento</p>
             <p className="text-gray-500 text-xs">Segunda, 10 de fevereiro</p>
          </div>
        </div>
      </main>
    </div>
  );
}

