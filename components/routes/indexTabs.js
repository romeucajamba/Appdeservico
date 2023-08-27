import { NavigationContainer } from "@react-navigation/native";
import TabsRoutes from './tabs.routes';


export default function Routes() {
    return (
        <NavigationContainer>
            <TabsRoutes />
        </NavigationContainer>
    );
}