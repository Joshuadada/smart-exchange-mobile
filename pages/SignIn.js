import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native"

const SignIn = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Sign In</Text>
                    <Image></Image>
                </View>
                <Text style={styles.subHeading}>Login to your account to access our services</Text>
                <View style={styles.form}>
                    <TextInput keyboardType="email-address" placeholder="User Name" style={styles.input} />
                    <TextInput secureTextEntry={true} placeholder="Password" style={styles.input} />
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.footerLinkContainer}>
                    <TouchableOpacity activeOpacity={0.7}><Text style={styles.footerLink}>Forgot Password</Text></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}><Text style={styles.footerLink}>Create Account</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 25,
        paddingBottom: 89,
        backgroundColor: '#fff',
        borderRadius: 30,
        borderBottomWidth: 2,
        borderTopWidth: 2
    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 8
    },
    subHeading: {
        textAlign: 'center',
        marginTop: 20
    },
    headingText: {
        color: '#3F3434',
        fontSize: 24,
        fontWeight: '700'
    },
    form: {
        display: 'flex',
        gap: 20,
        marginTop: 50,
        marginBottom: 32
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 6
    },
    button: {
        borderRadius: 8,
        marginTop: 12,
        backgroundColor: '#0A73B0',
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    },
    footerLinkContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 8,
        marginTop: 52
    },
    footerLink: {
        color: '#0A73B0'
    }
})

export default SignIn