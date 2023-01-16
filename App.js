import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import LyricItem from './components/LyricItem';
import LyricInput from './components/LyricInput';

export default function App() {
  
  const [lyricList, updateLyricList] = useState([]);

  function buttonPress(newLyricString) {
    updateLyricList(currentLyricList => [...currentLyricList, {text: newLyricString, key: Math.random().toString()}]);
  }
  function deleteLyric() {

  };

  return (
    <View style={styles.container}>
		<LyricInput onAddLyric={buttonPress} />
    	<View style={styles.dataContainer}>
        	<FlatList data={lyricList} 
			renderItem={itemData => {
				return <LyricItem text={itemData.item.text}
								onDeleteLyric={deleteLyric}/>
			}}
			keyExtractor={(item, index) => {
				return item.id;
			}}
			/>
			<Text>eol</Text>
    	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	paddingTop: '10%',
  },
  dataContainer :{
	flex: 3,
  },
  coolButton: {
    backgroundColor: '#00bfff',
    color: '#00ff00',
    margin: 8,
  },
  

});
