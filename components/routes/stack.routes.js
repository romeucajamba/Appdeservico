import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entrar from '../screens/login/Login';
import Cadastro from '../screens/register/Register';
import Home from '../screens/home/Home';
import Lucrecia from '../screens/home/details/health/hospials/lucrecia/lucrecia';
import Menu from '../screens/home/menu/menu';
import Map from '../screens/home/maps/map';
import Notifications from '../screens/home/notifications/notifications';
import Comment from '../screens/home/details/comment/comentary';
import Servicos from '../screens/home/details/health/hospials/lucrecia/Servicos/servicos';
import Profile from '../screens/home/user/user';
import Chat from '../screens/home/user/chat/Chat';
import UserMessage from '../screens/home/user/chat/message/userMessage';
import ClientMessage from '../screens/home/user/chat/message/client';
import SettingsProfile from '../screens/home/user/settings/settingsProfile';
import Favorite from '../screens/home/user/favorite/favorite';
import Settings from '../screens/home/menu/settings/settings';
import PassWord from '../screens/password/pass';


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
                        headerTintColor: '#12B3BD',
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


                <Screen
                    name='Avaliação'
                    options={{
                        headerTintColor: '#12B3BD',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={Comment}
                />

                <Screen
                    name='Perfil'
                    options={{
                        headerTintColor: '#12B3BD',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={Profile}
                />

                <Screen
                    name='Chat'
                    options={{
                        headerTintColor: '#12B3BD',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={Chat}
                />

                <Screen
                    name='UserMessage'
                    options={{
                        headerTintColor: '#12B3BD',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={UserMessage}
                />

                <Screen
                    name='ClientMessage'
                    options={{
                        headerTintColor: '#12B3BD',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={ClientMessage}
                />

                <Screen
                    name='SettingsProfile'
                    options={{
                        headerTintColor: '#12B3BD',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={SettingsProfile}
                />

                <Screen
                    name='PassWord'
                    options={{
                        headerTintColor: '#12B3BD',
                        headerStyle: {
                            backgroundColor: '#0E0C16'
                        }
                    }}
                    component={PassWord}
                />
            </Group>


            <Screen
                name='Menu'
                options={{
                    headerTintColor: '#12B3BD',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Menu}
            />

            <Screen
                name='Definições'
                options={{
                    headerTintColor: '#12B3BD',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Settings}
            />

            <Screen
                name='Notificações'
                options={{
                    headerTintColor: '#12B3BD',
                    headerStyle: {
                        backgroundColor: '#161323',
                    }
                }}
                component={Notifications} />

            <Screen
                name='Localização'
                options={{
                    headerTintColor: '#12B3BD',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Map}
            />

            <Screen
                name='Serviços'
                options={{
                    headerTintColor: '#12B3BD',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Servicos}
            />
            <Screen
                name='Favoritos'
                options={{
                    headerTintColor: '#12B3BD',
                    headerStyle: {
                        backgroundColor: '#0E0C16'
                    }
                }}
                component={Favorite} />
        </Navigator>
    );

}