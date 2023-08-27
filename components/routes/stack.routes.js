import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entrar from '../screens/login/Login';
import Cadastro from '../screens/register/Register';
import Home from '../screens/home/Home';
import Lucrecia from '../screens/home/details/health/hospials/lucrecia';
import Menu from '../screens/home/menu/menu';
import Map from '../screens/home/maps/map';
import Notifications from '../screens/home/notifications/notifications';


const { Screen, Navigator, Group } = createNativeStackNavigator();
//Navigator Permite criar as navegações
//Screen é a tela, componente, cada Screen representa cada componente ou página ou tela da nossa aplicação
//Group permite que passemos configurações para um grupo de tela específico que queremos

export default function StackRoutes() {
    return (
        <Navigator>

            <Group screenOptions={{ headerShown: false }}>
                <Screen
                    name='Bem-vindo de volta!'
                    component={Entrar}
                />

                <Screen
                    name='Cadastra-se'
                    component={Cadastro}
                />

                <Screen
                    name='Home'
                    options={{
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={Home}
                />

                <Screen
                    name='Lucrecia'
                    options={{
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={Lucrecia}
                />

            </Group>


            <Screen
                name='Menu'
                options={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Menu}
            />

            <Screen
                name='NotificaCões'
                options={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Notifications} />

            <Screen
                name='Localização'
                options={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Map}
            />

        </Navigator>
    );

}