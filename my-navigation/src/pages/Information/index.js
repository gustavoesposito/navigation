import React from 'react'
import {View, Text} from 'react-native'

export default function Information({ route }){
    return(
        <View style={{marginTop:60}}>
            <Text>Noem: {route.params.nome} </Text>
            <Text> telefone: {route.params.telefone}  </Text>
            <Text>Rua:  {route.params.endereço}</Text>
            <Text> n: {route.params.numero}</Text>
            <Text> Profissão :{route.params.profissão}</Text>
            <Text> email: {route.params.email} </Text>
        </View>
    )
}