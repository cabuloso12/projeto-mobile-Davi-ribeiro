import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const BankAppScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Banco</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="#FF1493" />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo disponível</Text>
        <Text style={styles.balanceValue}>R$ 5.287,90</Text>
        <View style={styles.balanceDetails}>
          <Text style={styles.balanceDetailText}>Conta corrente •••• 6789</Text>
          <MaterialIcons name="visibility-off" size={18} color="#666" />
        </View>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#FF69B4' }]}>
            <MaterialIcons name="payment" size={24} color="#FFF" />
          </View>
          <Text style={styles.actionText}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#9370DB' }]}>
            <MaterialIcons name="receipt" size={24} color="#FFF" />
          </View>
          <Text style={styles.actionText}>Extrato</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#20B2AA' }]}>
            <FontAwesome name="credit-card" size={20} color="#FFF" />
          </View>
          <Text style={styles.actionText}>Cartões</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#FFA500' }]}>
            <MaterialIcons name="attach-money" size={24} color="#FFF" />
          </View>
          <Text style={styles.actionText}>Investir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Área Pix</Text>
        <View style={styles.pixContainer}>
          <TouchableOpacity style={styles.pixOption}>
            <MaterialIcons name="send" size={24} color="#FF1493" />
            <Text style={styles.pixOptionText}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pixOption}>
            <MaterialIcons name="call-received" size={24} color="#FF1493" />
            <Text style={styles.pixOptionText}>Receber</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pixOption}>
            <MaterialIcons name="qr-code" size={24} color="#FF1493" />
            <Text style={styles.pixOptionText}>QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pixOption}>
            <MaterialIcons name="list" size={24} color="#FF1493" />
            <Text style={styles.pixOptionText}>Chaves</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus Cartões</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
          <View style={[styles.card, { backgroundColor: '#FF1493' }]}>
            <Text style={styles.cardText}>•••• •••• •••• 4321</Text>
            <Text style={styles.cardName}>Davi Ribeiro</Text>
            <MaterialIcons 
              name="sim-card" 
              size={30} 
              color="#FFD700" 
              style={styles.cardChip} 
            />
          </View>
          <View style={[styles.card, { backgroundColor: '#9370DB' }]}>
            <Text style={styles.cardText}>•••• •••• •••• 8765</Text>
            <Text style={styles.cardName}>Davi Ribeiro</Text>
            <MaterialIcons 
              name="sim-card" 
              size={30} 
              color="#FFD700" 
              style={styles.cardChip} 
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Últimas transações</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        {transactions.map((transaction, index) => (
          <View key={index} style={styles.transaction}>
            <View style={styles.transactionIcon}>
              <MaterialIcons name={transaction.icon} size={24} color="#FF1493" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>{transaction.name}</Text>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text style={[styles.transactionValue, { color: transaction.type === 'income' ? '#2E8B57' : '#FF4500' }]}>
              {transaction.type === 'income' ? '+' : '-'}R$ {transaction.value}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const transactions = [
  { name: 'Supermercado', date: 'Hoje, 15:30', value: '128,90', type: 'outcome', icon: 'shopping-cart' },
  { name: 'Salário', date: '01/10', value: '3.500,00', type: 'income', icon: 'work' },
  { name: 'Restaurante', date: '30/09', value: '78,50', type: 'outcome', icon: 'restaurant' },
  { name: 'Transferência', date: '28/09', value: '250,00', type: 'income', icon: 'swap-horiz' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF1493',
  },
  balanceContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  balanceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceDetailText: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  actionButton: {
    alignItems: 'center',
    width: '23%',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#FF1493',
  },
  pixContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    padding: 15,
  },
  pixOption: {
    alignItems: 'center',
    width: '23%',
  },
  pixOptionText: {
    fontSize: 13,
    color: '#555',
    marginTop: 8,
  },
  cardsContainer: {
    marginBottom: 10,
  },
  card: {
    width: 180,
    height: 110,
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    justifyContent: 'space-between',
  },
  cardText: {
    color: '#FFF',
    fontSize: 14,
    letterSpacing: 1,
  },
  cardName: {
    color: '#FFF',
    fontSize: 12,
  },
  cardChip: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 15,
    color: '#333',
    marginBottom: 3,
  },
  transactionDate: {
    fontSize: 12,
    color: '#999',
  },
  transactionValue: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default BankAppScreen;