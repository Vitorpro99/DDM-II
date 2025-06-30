import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        // height:"10%",
        display:"flex"
    },
    div1:{
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        height:"45%",
        backgroundColor:"#d9d9d9",
        width:"100%",
        shadowOffset:20,
        shadowColor:"black",
        borderRadius:10,
        elevation:5,
        overflow:'hidden',
        // display:"flex"
    },
    div2:{
        display:"flex",
        gap:5,
        alignItems:"center",
        padding:25
    },
    mainButton:{
        borderColor:"#c42020",
        borderWidth:10,
        paddingVertical:2,
        paddingHorizontal:55,
        borderRadius:100,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    divButton:{

        gap:15,
        width:'75%'

    },
    mainTittle:{
        fontFamily:"Arial",
        fontSize:45,
        color:"#c42020",
        fontWeight:"bold"
    },
    mainButtonText:{
        color:"#c42020",
        fontSize:20,
        fontWeight: "bold",
        fontFamily:'Arial'
    },
    secondButton:{
        borderColor:"#c42020",
        borderWidth:10,
        paddingVertical:2,
        paddingHorizontal:55,
        borderRadius:100,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c42020'
    },
    secondButtonText:{
        color:"white",
        fontSize:20,
        fontWeight: "bold",
        fontFamily:'Calibri'
    }
})