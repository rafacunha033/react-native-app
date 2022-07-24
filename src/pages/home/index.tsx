import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
            title="Go to Login Screen"
            onPress={() =>
                navigation.navigate('Login')
            }
            />

            <Button
            title="Go to Schedules Screen"
            onPress={() =>
                navigation.navigate('Schedules')
            }
            />
        </View>
      
    );
}

export default HomeScreen;