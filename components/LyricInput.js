import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { useState } from 'react';

function LyricInput(props) {
    const [newLyricString, setLyricString] = useState('');

    function grabInput(userInput) {
        setLyricString(userInput);
    };

    function buttonPress() {
        props.onAddLyric(newLyricString);
        setLyricString('');
    }

    return (
        <View style={styles.inputContainer}>
    		<Text style={{fontStyle: 'italic'}}>what bars you got?</Text>
    		<TextInput placeholder='dolphin splash it when i whip it' 
                		style={styles.knowToType} 
    		    		onChangeText={grabInput} 
                        value={newLyricString} />
    		<Button title='add it up' 
        			onPress={buttonPress} />
		</View>
    );
};

export default LyricInput;

const styles = StyleSheet.create({
    inputContainer :{
        flex: 1,
      },
      knowToType: {
        borderRadius: 4,
        padding: 4,
        borderColor: '#053323',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        margin: 2,
      },
});