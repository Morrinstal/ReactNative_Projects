import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Dimensions, View, StatusBar, Text } from 'react-native';
import TicketComp from './components/TicketComp';

type TicketType = {
    id: string;
    timeDeparture: string;
    timeArrival: string;
    detailsDeparture: string;
    detailsArrival: string;
    duration: string;
    price: number;
};

const App = () => {
    const [numColumns, setNumColumns] = useState(getNumColumns());

    useEffect(() => {
        StatusBar.setBackgroundColor('#f9253e');
        const onChange = () => setNumColumns(getNumColumns());
        const subscription = Dimensions.addEventListener("change", onChange);
        return () => subscription.remove();
    }, []);

    function getNumColumns() {
        const { width, height } = Dimensions.get('window');
        return width > height ? 2 : 1;
    }

    const tickets: Array<TicketType> = [
        { id: '1', timeDeparture: '10:00', timeArrival: '16:30', detailsDeparture: 'Одеса', detailsArrival: 'Київ', duration: '6г 30хв', price: 220.00 },
        { id: '2', timeDeparture: '12:00', timeArrival: '13:30', detailsDeparture: 'Вінниця', detailsArrival: 'Київ', duration: '1г 30хв', price: 150.00 },
        { id: '3', timeDeparture: '15:30', timeArrival: '17:30', detailsDeparture: 'Львів', detailsArrival: 'Тернопіль', duration: '2г 0хв', price: 120.00 },
        { id: '4', timeDeparture: '07:30', timeArrival: '10:00', detailsDeparture: 'Харків', detailsArrival: 'Дніпро', duration: '2г 30хв', price: 170.00 },
        { id: '5', timeDeparture: '06:00', timeArrival: '09:00', detailsDeparture: 'Запоріжжя', detailsArrival:'Київ', duration: '3г 0хв', price: 200.00 },
        { id: '6', timeDeparture: '11:00', timeArrival: '15:00', detailsDeparture: 'Одеса', detailsArrival: 'Вінниця', duration: '4г 0хв', price: 240.00 },
        { id: '7', timeDeparture: '13:00', timeArrival: '16:45', detailsDeparture: 'Львів', detailsArrival: 'Харків', duration: '3г 45хв', price: 230.00 },
        { id: '8', timeDeparture: '16:00', timeArrival: '19:00', detailsDeparture: 'Київ', detailsArrival: 'Одеса', duration: '3г 0хв', price: 210.00 },
        { id: '9', timeDeparture: '18:30', timeArrival: '21:00', detailsDeparture: 'Дніпро', detailsArrival: 'Львів', duration: '2г 30хв', price: 200.00 },
        { id: '10', timeDeparture: '08:00', timeArrival: '14:40', detailsDeparture: 'Київ', detailsArrival: 'Львів', duration: '6г 40хв', price: 200.00 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                key={numColumns}
                data={tickets}
                renderItem={({ item }) => (
                    <View style={styles.ticketWrapper}>
                        <TicketComp {...item} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                numColumns={numColumns}
            />
            <StatusBar hidden={false}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
        paddingTop: StatusBar.currentHeight
    },
    flatListContainer: {
        paddingBottom: 60,
    },
    ticketWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 20,
    }
});

export default App;
