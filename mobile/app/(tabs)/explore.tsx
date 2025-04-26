import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Explore</Text>
      
      <Text style={styles.sectionTitle}>Serviços</Text>
      <View style={styles.servicesContainer}>
        <TouchableOpacity style={styles.serviceCard}>
          <View style={[styles.serviceIcon, {backgroundColor: '#FFC0CB'}]}>
            <MaterialIcons name="attach-money" size={28} color="#D5008F" />
          </View>
          <Text style={styles.serviceText}>Investimentos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.serviceCard}>
          <View style={[styles.serviceIcon, {backgroundColor: '#ADD8E6'}]}>
            <FontAwesome name="shopping-bag" size={24} color="#0077B6" />
          </View>
          <Text style={styles.serviceText}>Compras</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.serviceCard}>
          <View style={[styles.serviceIcon, {backgroundColor: '#98FB98'}]}>
            <Ionicons name="phone-portrait" size={24} color="#2E7D32" />
          </View>
          <Text style={styles.serviceText}>Recarga</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.serviceCard}>
          <View style={[styles.serviceIcon, {backgroundColor: '#FFD700'}]}>
            <FontAwesome name="credit-card" size={24} color="#B8860B" />
          </View>
          <Text style={styles.serviceText}>Cartões</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.sectionTitle}>Promoções</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionsContainer}>
        <TouchableOpacity style={styles.promotionCard}>
          <View style={styles.promotionContent}>
            <View style={styles.promotionIconContainer}>
              <MaterialIcons name="monetization-on" size={32} color="#FFD700" />
            </View>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'}} 
              style={styles.promotionImage}
            />
          </View>
          <View style={styles.promotionTextContainer}>
            <Text style={styles.promotionText}>Cashback de 10%</Text>
            <Text style={styles.promotionSubText}>Em compras acima de R$100</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.promotionCard}>
          <View style={styles.promotionContent}>
            <View style={styles.promotionIconContainer}>
              <MaterialIcons name="local-shipping" size={32} color="#FF1493" />
            </View>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'}} 
              style={styles.promotionImage}
            />
          </View>
          <View style={styles.promotionTextContainer}>
            <Text style={styles.promotionText}>Frete grátis</Text>
            <Text style={styles.promotionSubText}>Para todo o Brasil</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.promotionCard}>
          <View style={styles.promotionContent}>
            <View style={styles.promotionIconContainer}>
              <MaterialIcons name="discount" size={32} color="#FF69B4" />
            </View>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'}} 
              style={styles.promotionImage}
            />
          </View>
          <View style={styles.promotionTextContainer}>
            <Text style={styles.promotionText}>Desconto em lojas</Text>
            <Text style={styles.promotionSubText}>Até 30% off</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      
      <Text style={styles.sectionTitle}>Dicas Financeiras</Text>
      <View style={styles.tipsContainer}>
        <TouchableOpacity style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <MaterialIcons name="savings" size={24} color="#FF69B4" />
          </View>
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Como economizar?</Text>
            <Text style={styles.tipDescription}>Veja 5 dicas simples para gastar menos no dia a dia</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <MaterialIcons name="trending-up" size={24} color="#FF69B4" />
          </View>
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Investir para iniciantes</Text>
            <Text style={styles.tipDescription}>Comece a investir com pouco dinheiro</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  titulo: {
    color: '#FF1493',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 8,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  serviceCard: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceText: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
  promotionsContainer: {
    marginBottom: 20,
  },
  promotionCard: {
    width: 220,
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    elevation: 2,
  },
  promotionContent: {
    position: 'relative',
  },
  promotionImage: {
    width: '100%',
    height: 120,
  },
  promotionIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 5,
  },
  promotionTextContainer: {
    padding: 14,
  },
  promotionText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  promotionSubText: {
    color: '#666',
    fontSize: 13,
  },
  tipsContainer: {
    marginBottom: 30,
  },
  tipCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF69B4',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  tipIcon: {
    marginRight: 12,
  },
  tipTextContainer: {
    flex: 1,
  },
  tipTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  tipDescription: {
    color: '#666',
    fontSize: 14,
  },
});