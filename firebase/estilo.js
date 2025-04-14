import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    buttonContainer: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#06b8b8',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 15
    },
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: '#06b8b8',
        borderWidth: 2
    },
    buttonOutlineText: {
        color: '#06b8b8'
    }
});