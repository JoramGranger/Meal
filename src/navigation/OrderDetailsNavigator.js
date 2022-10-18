import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderLiveUpdates from "../screens/OrderLiveUpdate";
import OrderDetails from "../screens/OrderDetails";

const Tab = createMaterialTopTabNavigator();

const OrderDetailsNavigator = ({route}) => {

    const id = route?.params?.id;

    return(
        <Tab.Navigator>
            <Tab.Screen name="Details">
                {() => <OrderDetails id={id}/>}
            </Tab.Screen>
            <Tab.Screen name="Updates">
                {() => <OrderLiveUpdates id={id}/>}
            </Tab.Screen>  
            {/* screenOptions={{headerShown:false} */}
        </Tab.Navigator>
    );
};

export default OrderDetailsNavigator;