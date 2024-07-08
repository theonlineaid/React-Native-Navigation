import { Button, Text, View } from "react-native";

function DetailsScreen({navigation}:any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

        <Button
        title="Back Home"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  }

export default DetailsScreen;