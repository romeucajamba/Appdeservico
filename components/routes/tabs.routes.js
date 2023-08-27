import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../screens/home/details/details';


const { Screen, Navigator } = createBottomTabNavigator();
//Navigator Permite criar as navegações
//Screen é a tela, componente, cada Screen representa cada componente ou página ou tela da nossa aplicação
//Group permite que passemos configurações para um grupo de tela específico que queremos

export default function TabsRoutes() {
    return (
        <Navigator>

            <Screen
                name='Details'
                component={Details}
            />
        </Navigator>
    );

}