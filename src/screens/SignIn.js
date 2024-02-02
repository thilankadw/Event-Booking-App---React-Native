import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import { COLORS } from '../constants/colors';
import Google from '../assets/logo/google.png';
import { Auth } from '../services';

const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIn = (e) => {
        const response = Auth.SignIn(email, password)
        console.log(response,'response register')
        if(response){
            navigation.navigate('HomeStack');
        }
    }
    
    return (
    <>
        <View style={styles.container}>

            <View style={styles.backBtn}>
                <TouchableOpacity
                    onPress={() => {navigation.goBack();}}
                >
                    <Text style={styles.backBtnText}>Back</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.signupformcontainer}>
                <Text style={styles.title}>Sign in</Text>
                <View style={styles.inputcontainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                        style={styles.input}
                    />
                    <TouchableOpacity
                        style={styles.signupbtn}
                        onPress={SignIn}
                    >
                        <Text style={styles.signupbtnText}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={styles.registerText} onPress={() => navigation.navigate('SignUp')}>
                        Don't have an account? Signup here
                    </Text>
                </View>
            </View>  

            <View style={{justifyContent: 'center', marginTop: 80}}>
                <View style={styles.othersectionborder}>
                    <View style={styles.line}></View>
                    <Text style={styles.linetext}>Or continue with</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.socialauthcontainer}>
                    <TouchableOpacity style={styles.socialauthbtn}>
                        <Image source={Google} style={styles.socialauthbtnimage}/>
                        <Text style={styles.socialauthbtntext}>Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
  )
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: COLORS.background,
      width: '100%',
      flex: 1,
    },
    backBtn: {
        width: '100%'
    },
    backBtnText: {
        width: '100%',
        color: COLORS.textWhite,
        textAlign: 'left',
        fontSize: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        color: COLORS.textWhite,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Poppins-Black'
    },
    signupformcontainer: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputcontainer: {
        width: 330,
        gap: 30
    },
    input: {
        borderBottomColor: COLORS.textWhite,
        borderBottomWidth: 0.5,
        padding: 8,
        color: COLORS.textWhite,
    },
    registerText: {
        color: COLORS.primary,
    },
    signupbtn: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 30,
        marginTop: 40
    },
    signupbtnText: {
        color: COLORS.background,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    othersectionborder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    line: {
        width: 100,
        height: 0.7,
        backgroundColor: COLORS.textWhite
    },
    linetext: {
        color: COLORS.textWhite,
        fontSize: 14,
        fontWeight: '700'
    },
    socialauthbtn: {
        backgroundColor: COLORS.grey,
        width: 330,
        padding: 15,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    socialauthbtnimage: {

    },
    socialauthbtntext: {
        color: COLORS.textWhite,
        fontSize: 18
    },
    socialauthcontainer: {
        marginTop: 30
    }

});

export default SignIn