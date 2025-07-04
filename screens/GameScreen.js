import { View, Text, StyleSheet } from 'react-native'
import Title from '../components/ui/Title';
import { useState } from 'react';

import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let min = 1;
let max = 100;

function GameScreen( props ) {
    const initialGuess = generateRandomBetween(min, max, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) { // lower or higher
        if (direction === 'lower') {
            max = currentGuess;
        } else if (direction === 'higher') {
            min = currentGuess + 1;
        }
        const newRndNum = generateRandomBetween(min, max, currentGuess);
        setCurrentGuess(newRndNum);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton style={styles.buttonContainer} onPress={}>+</PrimaryButton>
                    <PrimaryButton style={styles.buttonContainer} onPress={}>-</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 50
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    buttonContainer: {
        flex: 1,
    }
})