import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet = width > 600;
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';

type TicketCompProps = {
    timeDeparture: string;
    timeArrival: string;
    detailsDeparture: string;
    detailsArrival: string;
    duration: string;
    price: number;
};

const TicketComp = ({ timeDeparture, timeArrival, detailsDeparture, detailsArrival, duration, price }: TicketCompProps) => {
    const [isPortrait, setIsPortrait] = useState(height > width);
    const [ticketWidth, setTicketWidth] = useState(isTablet ? width * 0.75 : width * 0.75);

    useEffect(() => {
        const onChange = () => {
            const newIsPortrait = height > width;
            setIsPortrait(newIsPortrait);
            if (isTablet && newIsPortrait) {
                setTicketWidth(width * 0.8);
            } else {
                setTicketWidth(isTablet ? width * 0.75 : width * 0.75);
            }
        };
        const subscription = Dimensions.addEventListener('change', onChange);
        return () => subscription.remove();
    }, [height, width]);

    return (
        <View style={styles.container}>
            <View style={[styles.ticket, { width: ticketWidth }]}>
                <View style={styles.badgeContainer}>
                    <Text style={styles.badge}>Без роздруковування</Text>
                </View>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.time}>{timeDeparture}</Text>
                        <Text style={styles.details}>{detailsDeparture}</Text>
                    </View>
                    <Text style={styles.duration}>{duration}</Text>
                    <View>
                        <Text style={styles.time}>{timeArrival}</Text>
                        <Text style={styles.details}>{detailsArrival}</Text>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{price.toFixed(2)} грн</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: isTablet ? 30 : 20,
        marginTop: isTablet ? 40 : 20,
    },
    ticket: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ffa726',
        borderRadius: 10,
        padding: isTablet ? 30 : 18,
        paddingVertical: isTablet ? 45 : 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: isIOS ? 0.2 : 0.1,
        shadowRadius: isIOS ? 8 : 6,
        elevation: isAndroid ? 5 : 3,
        maxWidth: isTablet ? 480 : 360,
        minHeight: isTablet ? 220 : 180,
    },
    badgeContainer: {
        position: 'absolute',
        top: -10,
        left: 0,
    },
    badge: {
        backgroundColor: '#ff9800',
        color: '#fff',
        fontSize: isTablet ? 18 : 14,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    time: {
        fontSize: isTablet ? 26 : 20,
        fontWeight: 'bold',
    },
    details: {
        fontSize: isTablet ? 16 : 12,
        color: 'gray',
    },
    duration: {
        fontSize: isTablet ? 18 : 14,
        color: 'gray',
        textAlign: 'center',
    },
    priceContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    price: {
        backgroundColor: '#f44336',
        color: '#fff',
        fontSize: isTablet ? 20 : 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: isTablet ? 12 : 8,
        paddingHorizontal: isTablet ? 20 : 14,
        borderRadius: 4,
    },
});

export default TicketComp;
