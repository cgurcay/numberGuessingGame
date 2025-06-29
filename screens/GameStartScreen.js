import { Text, TextInput, View, StyleSheet  } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

function GameStartScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false} />
            <View styles={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    );
}

export default GameStartScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 80,
        marginHorizontal: 24,
        backgroundColor: '#2b62ba',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        color: '#ccc',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})