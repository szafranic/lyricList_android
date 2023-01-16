import { StyleSheet, View, Text , Pressable } from "react-native";

function LyricItem(props) {
    return (
            <Pressable onPress={props.onDeleteLyric}>
                <View style={styles.lyricBox}>
					<Text>{props.text}</Text>
            	</View>
            </Pressable>

    );
}

export default LyricItem;

const styles = StyleSheet.create({
    lyricBox: {
        backgroundColor: '#ff0000'
      },
});