import {View} from "react-native";
import {Card} from "./app/ui/components";

export default function App() {
    return (
        <View style={{
            backgroundColor: '#f8f4f4',
            padding: 20,
            paddingTop: 100,
        }}>
            <Card
                title='Jacked for sale'
                subTitle={'$100'}
                image={require('./app/assets/jacket.jpg')}
            />
        </View>
    )
}