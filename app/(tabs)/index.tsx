import React from 'react' ;
import { View, Text, Image, StyleSheet } from 'react-native';


export default function SocialPost() {
  return (
    <View style={styles.postContainer}> 
        <Text style={styles.userName}>Maria Silva</Text>
        <Image
        source={{ uri: 'c:\Users\gabri\Pictures\moto bmw gs.jpg/300x200' }}
        style={styles.postImage}  
       />
        <Text style={styles.postDescription}>
          Role de moto, pode não curar tudo, mais tira extresse e melhora o corpo por completo.
        </Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'justify'
  },
});
 