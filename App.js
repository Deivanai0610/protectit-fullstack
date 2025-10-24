import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';  // For emoji icons fallback
import PhishingChecker from './screens/PhishingChecker';
import History from './screens/History';
import Quiz from './screens/Quiz';
import PrivacySummarizer from './screens/PrivacySummarizer';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          headerStyle: { backgroundColor: '#f8f9fa' },
          headerTintColor: '#000',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitle: 'Protectit',
          tabBarStyle: { backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#e0e0e0' },
        }}
      >
        <Tab.Screen 
          name="Checker" 
          component={PhishingChecker} 
          options={{ 
            title: 'Phishing Checker',
            tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🔍</Text>,
          }} 
        />
        <Tab.Screen 
          name="History" 
          component={History} 
          options={{ 
            title: 'History',
            tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>📋</Text>,
          }} 
        />
        <Tab.Screen 
          name="Quiz" 
          component={Quiz} 
          options={{ 
            title: 'Phishing Quiz',
            tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>❓</Text>,
          }} 
        />
        <Tab.Screen 
          name="Privacy" 
          component={PrivacySummarizer} 
          options={{ 
            title: 'Privacy Summary',
            tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>📄</Text>,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  return (
    <div>
      {user ? <Dashboard user={user} /> : <Login />}
    </div>
  );
}
