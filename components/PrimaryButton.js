import { View, Text, Pressable, StyleSheet } from 'react-native'


function PrimaryButton( { children } ) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnnerContainer, styles.pressed] : styles.buttonInnnerContainer} android_ripple={{ color: '#e3dede' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnnerContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#ccc',
        padding: 4,
        elevation: 2
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        padding: 4
    },
    pressed: {
        opacity: 0.75
    }
})