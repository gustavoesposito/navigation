import React from 'react'
import {View, Text} from 'react-native'

export default function Contacts({navigatiojn}){
    return(
        <View style={{marginTop:60}}>
            <View> 
            <Text>Nome: João</Text>
            <Text>Telefone (11) 971593947</Text>
            <Text
            onPress={() => naviagtion.navigate('Information',
            {
                nome: 'João',
                telefone:'(11) 971593947',
                endereço: 'rua das flores',
                numero:"765",
                profissão:'Programador',
                email:"joao@gmail.com"
            }
            )}
            >Information...</Text>
            </View>
            <View style={{marginTop:60}}> 
            <Text>Nome: Pedro</Text>
            <Text>Telefone (11) 9727163841</Text>
            <Text
            onPress={() => naviagtion.navigate('Information',
            {
                nome: 'Pedro',
                telefone:'(11) 9727163841',
                endereço: 'rua das rosas',
                numero:"486",
                profissão:'Recepcionista',
                email:"pedro.dev.code@gmail.com"
            }
            )}
            >Information...</Text>
            </View>
        </View>
    )
}