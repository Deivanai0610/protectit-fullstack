/*
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebaseConfig';  // Import registered auth at top

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
   
  Alert.alert('Test', 'Login would work - Firebase disabled');
  navigation.replace('Main');
    
    /*if (!email || !password) return Alert.alert('Error', 'Enter email and password');
    setLoading(true);
    try {
      let userCredential;
      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);  // Use imported auth
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);  // Use imported auth
      }
      const userId = userCredential.user.uid;
      await AsyncStorage.setItem('userId', userId);
      Alert.alert('Success', `${isSignup ? 'Signed up' : 'Logged in'}!`);
      navigation.replace('Main');  // Go to tabs
    } catch (error) {
      Alert.alert('Error', error.message);  // e.g., "Invalid email"
    }
    setLoading(false);
    //till here 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignup ? 'Sign Up for Protectit' : 'Log In to Protectit'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={[styles.button, loading && styles.disabled]} onPress={handleAuth} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Processing...' : (isSignup ? 'Sign Up' : 'Log In')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.switchText}>
          {isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#007AFF' },
  input: { 
    borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 10, marginBottom: 15, 
    backgroundColor: '#fff', fontSize: 16, shadowColor: '#000', shadowOpacity: 0.1, elevation: 3 
  },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, elevation: 3 },
  disabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  switchText: { textAlign: 'center', marginTop: 15, color: '#007AFF', fontSize: 16 },
});
*/ 

import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signin");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>{mode === "signup" ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">
          {mode === "signup" ? "Sign Up" : "Login"}
        </button>
      </form>
      <button onClick={() => setMode(mode === "signup" ? "signin" : "signup")}>
        {mode === "signup" ? "Already have an account? Login" : "Create new account"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
