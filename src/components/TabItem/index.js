import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WARNA_UTAMA, WARNA_SEKUNDER } from '../../utils/constants';
import IconHome from '../../assets/icons/home.svg';
import IconHomeActive from '../../assets/icons/homeAktif.svg';
import IconJadwal from '../../assets/icons/jadwal.svg';
import IconJadwalActive from '../../assets/icons/jadwalAktif.svg';
import IconUser from '../../assets/icons/user.svg';
import IconUserActive from '../../assets/icons/userAktif.svg';

export default function TabItem({ label, isFocused, onLongPress, onPress }) {
    const Icon = () => {
        if (label === "Home") {
            return isFocused ? <IconHomeActive /> : <IconHome />;
        }

        if (label === "Jadwal") {
            return isFocused ? <IconJadwalActive /> : <IconJadwal />;
        }

        if (label === "Akun") {
            return isFocused ? <IconUserActive /> : <IconUser />;
        }
        return null
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.containerFocus : styles.container}
        >
            <Icon />
            {isFocused && <Text style={styles.text}>
                {label.toUpperCase()}
            </Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 5
    },
    containerFocus: {
        alignContent: 'center',
        padding: 5,
        backgroundColor: WARNA_SEKUNDER,
        flexDirection: 'row',
        borderRadius: 10
    },
    text: {
        color: WARNA_UTAMA,
        fontSize: 18,
        marginLeft: 8,
        fontFamily: 'Poppins-Bold'
    }
})