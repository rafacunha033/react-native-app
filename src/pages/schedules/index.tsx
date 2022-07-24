import { View, Text, Button } from 'react-native';

const SchedulesScreen = ({ navigation }) => {
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tela de horários</Text>
            <Button 
                title="Tela Inicial"
                onPress={() => navigation.navigate('Home')}
            />

            <Button 
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default SchedulesScreen;