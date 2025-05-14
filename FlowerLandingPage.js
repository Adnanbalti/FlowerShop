import React from 'react';
import { View, Text, Image, Button, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function FlowerlandingPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Blooming Flowers</Text>
        <Text style={styles.subHeaderText}>Fresh and Beautiful Flowers Delivered to Your Doorstep</Text>
      </View>   



      {/* Flower Image Section */} 
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.image} />
      </View>


      {/* Search Bar Section */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.textInput} placeholder="Search for flowers..."/>        
      </View>


       {/* Featured Flowers Section */}
      <View>
        <View style={styles.featuredSection}>
            <View>
                <View style={styles.featuredSection}>
                    <Text style={styles.sectionTitle}>Featured Flowers</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://images.unsplash.com/photo-1686125616977-34f6d5979eb1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>White Base</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://images.unsplash.com/photo-1581264692636-3cf6f29655c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Red Rose</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://images.unsplash.com/photo-1579847621515-b40fcc20831e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Lily</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://images.unsplash.com/photo-1487435636644-3ad040f0195b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Tulip</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://images.unsplash.com/photo-1556216750-2108e1e54e9a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Orchid</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://images.unsplash.com/photo-1695112691738-5227cabb206f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Chrysanthemums</Text>
                        </View>
                    </ScrollView>
                </View>


                {/* Button Section */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Shop Now')}>
                      <Text style={styles.buttonText}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>


        {/* Mother's Day Special Section */}
        <View>
        <View style={styles.featuredSection}>
            <View>
                <View style={styles.featuredSection}>
                    <Text style={styles.sectionTitle}>Mother's Day Special Flowers</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sosx-rNXdxp-V0zYybLftUhQmj32FCdJXQ&s' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>White Base</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ2OZop656xlpA-5U_hx1n1azjNEoiIiGS3SQPLOZF3kLRbjQKFWHoFQgw1Ew9TIEht8&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Red Rose</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://hallamspringsquareflorist.com.au/wp-content/uploads/2023/05/24.png' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Lily</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbN9I1rRL300o2HYShKlT1uWKWjR8f2UGJBBgVKSjS0TFqKffoN8Frr8lcCQFBySZdOOQ&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Tulip</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iPXAGL9sRzqVs6Vyb1lKxk9P_ZWZcXbLdFMcT--J8XrznAB6N0XYp-EXNtfrNE8ScAI&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Orchid</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRap610U2zv3V9NarvdoZGwssnA7FWqbcSd3W4x_jgcd5QKv-Gn0QCqKryqn43EffCOvKU&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Chrysanthemums</Text>
                        </View>
                    </ScrollView>
                </View>


                {/* Button Section */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Shop Now')}>
                      <Text style={styles.buttonText}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>


      {/* Anniversary Celebrations Section */}
      <View>
        <View style={styles.featuredSection}>
            <View>
                <View style={styles.featuredSection}>
                    <Text style={styles.sectionTitle}>Anniversary Celebrations Flowers</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROihe6r8UTTe0QWy8gkSmCT-S_iN7u9bkSJ9_qdp8qBfJph7JeGFKSkzBO3nO2rHtIrV8&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Red Base</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP7abmaEMvjnsW55w0TDRegY0nyFWqylEDNZ-eGmrg484H8_svGVq8_3pLNM7FNu1-DTo&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Red Rose</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Y8HcY9ZU_ReCHbS5kx-83-jwylUJoeFeTIW97jyXQVTQLKDjnro6aNdJ9VITcrkDLD0&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Lily</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrXw-l4VtcBvdEgmkc_n3MeXtbqJcwXpQAr3WuZJCO_Nty_aPaEnAstEA9OWDCHGxONI&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Tulip</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeouwXQkJA2riaKTvOuFnRGKtTf4yT1dvSNMYHLOIe2mfqiGyLo7CtnpQxSEdwn_H9w4&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Orchid</Text>
                        </View>
                        <View style={styles.flowerCard}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcWw9Oy3sXBLkTPAq0pq2LgynRSkK4ylsOpp2vvcJEYQOEvNqpEH2phcYqcDtK9uZGBQ&usqp=CAU' }} style={styles.flowerImage}/>
                            <Text style={styles.flowerTitle}>Chrysanthemums</Text>
                        </View>
                    </ScrollView>
                </View>


                {/* Button Section */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Shop Now')}>
                      <Text style={styles.buttonText}>Shop Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
    },
    header: {
      alignItems: 'center',
      marginBottom: 10,
    },
    headerText: {
      fontSize: 38,
      fontWeight: 'bold',
    },
    subHeaderText: {
      fontSize: 27,
      color: '#555',
      fontStyle:'italic',
      color:'#f56c6c'
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 250,
      borderRadius: 5,
    },
    searchContainer: {
      marginBottom: 10,
    },
    textInput: {
      height: 90,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize:25
    },
    featuredSection: {
      marginBottom: 10,
  
    },
    sectionTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    flowerCard: {
      marginRight: 10,
      alignItems: 'center',
    },
    flowerImage: {
      width: 270,
      height: 210,
      borderRadius: 5,
    },
    flowerTitle: {
      marginTop: 5,
      fontSize: 14,
      fontWeight: 'bold',
    },
    buttonContainer: {
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#f56c6c',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize:'30px'
    },
  });
