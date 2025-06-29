import { Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function GameStartScreen( { onPickNumber } ) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
    setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false} onChangeText={numberInputHandler} value={enteredNumber}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default GameStartScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
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
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})