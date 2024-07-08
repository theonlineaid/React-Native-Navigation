import { useEffect } from "react";
import { Button, Text, View } from "react-native";

function HomeScreen({ navigation, route }: any) {
    useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />

            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
    );
}

export default HomeScreen;