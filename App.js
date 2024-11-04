import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, ScrollView, Image } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/Ionicons";

const InputBox = ({ label, onChangeText }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{ borderWidth: 1 }} onChangeText={onChangeText} />
        </View>
    )
}

const MyApp = () => {
    const [username, setUsername] = useState('');
    const [type1, setType1] = useState('');
    const [type2, setType2] = useState('');
    const [type3, setType3] = useState('');
    const [type4, setType4] = useState('');
    const correctAnswers = ['Bentley', 'Subaru', 'Maserati', 'Rolls-Royce'];

    const calculateScore = () => {
        let score = 0;
        if (type1 === correctAnswers[0]) score += 1;
        if (type2 === correctAnswers[1]) score += 1;
        if (type3 === correctAnswers[2]) score += 1;
        if (type4 === correctAnswers[3]) score += 1;

        Alert.alert("Hi"+' '+username+' '+"Your Score is " + score);

        // Reset all values after showing the score
        setUsername('');
        setType1('');
        setType2('');
        setType3('');
        setType4('');
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 70, paddingTop: 50, paddingLeft: 20, paddingRight: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}>
                    Guess The Car Logo
                </Text>
                <Icon name='car-sport-sharp' size={35} color="black" />
            </View>

            <InputBox label="User Name:" onChangeText={(text) => setUsername(text)} />
            <TouchableOpacity onPress={() =>
                ToastAndroid.show('Welcome ' + username, ToastAndroid.SHORT)}>
                <Text style={{ fontSize: 20 }}>Welcome player {'\n'}
                    {<Icon name='game-controller-outline' size={35} color="black" />}{username}
                </Text>
            </TouchableOpacity>

            <Text>{'\n'}{'\n'}</Text>
            <Text>Choose your answer: </Text>
            <RNPickerSelect
                onValueChange={(value) => setType1(value)}
                items={[
                    { label: 'Subaru', value: 'Subaru' },
                    { label: 'Maserati', value: 'Maserati' },
                    { label: 'Bentley', value: 'Bentley' },
                    { label: 'Rolls-Royce', value: 'Rolls-Royce' }
                ]}
                value={type1}
            />
            <Image source={require("../L3exe2/img/images.jpeg")} style={{ width: 350, height: 200 }} />

            <Text>{'\n'}{'\n'}</Text>
            <Text>Choose your answer: </Text>
            <RNPickerSelect
                onValueChange={(value) => setType2(value)}
                items={[
                    { label: 'Subaru', value: 'Subaru' },
                    { label: 'Maserati', value: 'Maserati' },
                    { label: 'Bentley', value: 'Bentley' },
                    { label: 'Rolls-Royce', value: 'Rolls-Royce' }
                ]}
                value={type2}
            />
            <Image source={require("../L3exe2/img/subaru.jpg")} style={{ width: 350, height: 200 }} />

            <Text>{'\n'}{'\n'}</Text>
            <Text>Choose your answer: </Text>
            <RNPickerSelect
                onValueChange={(value) => setType3(value)}
                items={[
                    { label: 'Subaru', value: 'Subaru' },
                    { label: 'Maserati', value: 'Maserati' },
                    { label: 'Bentley', value: 'Bentley' },
                    { label: 'Rolls-Royce', value: 'Rolls-Royce' }
                ]}
                value={type3}
            />
            <Image source={require("../L3exe2/img/mesar.jpeg")} style={{ width: 350, height: 200 }} />

            <Text>{'\n'}{'\n'}</Text>
            <Text>Choose your answer: </Text>
            <RNPickerSelect
                onValueChange={(value) => setType4(value)}
                items={[
                    { label: 'Subaru', value: 'Subaru' },
                    { label: 'Maserati', value: 'Maserati' },
                    { label: 'Bentley', value: 'Bentley' },
                    { label: 'Rolls-Royce', value: 'Rolls-Royce' }
                ]}
                value={type4}
            />
            <Image source={require("../L3exe2/img/rr.jpeg")} style={{ width: 350, height: 200 }} />

            <Text>{'\n'}{'\n'}</Text>

            <Button
                title="SUBMIT"
                onPress={calculateScore}
            />
        </ScrollView>
    )
}

export default MyApp;
