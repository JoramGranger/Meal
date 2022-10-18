import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Courier, Order } from '../../models';
import {DataStore} from 'aws-amplify';
import {FontAwesome5} from '@expo/vector-icons';
import { useRef } from 'react';

const OrderLiveUpdates = ({id}) => {
    const [order, setOrder] = useState(null);
    const [courier, setCourier] = useState(null);

    const mapRef = useRef(null);

    useEffect(() => {
        DataStore.query(Order, id).then(setOrder);
    }, []);

    useEffect(() => {
        if(!order) {
            return;
        }
        const subscription = DataStore.observe(Order, order.id).subscribe((msg) => {
            if(msg.opType === "UPDATE") {
                setOrder(msg.element);
            }
        });
        return () => subscription.unsubscribe();
    }, [order])

    useEffect(() => {
        if(order?.orderCourierId) {
            DataStore.query(Courier, order.orderCourierId).then(setCourier);
        }
    }, [order?.orderCourierId]);

    useEffect(() => {
        if(courier?.latitude && courier.longitude) {
            mapRef.current.animateToRegion({
                latitude: courier.latitude,
                longitude: courier.longitude,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03
            })
        }
    }, [courier?.latitude, courier?.longitude]);

    useEffect(() => {
        if(!courier) {
            return;
        }
        const subscription = DataStore.observe(Courier, courier.id).subscribe((msg) => {
            if(msg.opType === "UPDATE") {
                setCourier(msg.element);
            }
        });
        return () => subscription.unsubscribe();
    }, [courier]);


    return ( 
        <View>
            <Text>Status: {order?.status || "Loading..."}</Text>
            <MapView style={styles.map} ref={mapRef} showsUserLocation>
                {courier?.latitude && (
                <Marker coordinate={{
                    latitude: courier.latitude,
                    longitude: courier.longitude
                }}
                >
                    <View style={{
                        padding: 5, 
                        backgroundColor: 'green',
                        borderRadius: 40,
                        }}>
                        <FontAwesome5 name="motorcycle" size={24} color="white"/>
                    </View>
                </Marker>
                )}
            </MapView>
        </View>
     );
}

const styles = StyleSheet.create({
    map: {
        height: "100%",
        width: "100%",
    }
})
 
export default OrderLiveUpdates;