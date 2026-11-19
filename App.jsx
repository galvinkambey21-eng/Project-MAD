import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import { TaskProvider } from './src/context/TaskContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import {
  initNotificationChannel,
  requestNotificationPermission,
} from './src/services/notificationService';

export default function App() {
  useEffect(() => {
    // Inisialisasi channel notifikasi dan minta izin saat app pertama dibuka
    const initNotifications = async () => {
      await initNotificationChannel();
      await requestNotificationPermission();
    };
    initNotifications();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <AuthProvider>
        <TaskProvider>
          <AppNavigator />
        </TaskProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
