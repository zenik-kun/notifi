import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height:"100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
            source={images.logo}
            className="w-[250px]"
            resizeMode='contain'
          />

          <Image 
            source={images.cards}
            className="max-w-[300px] w-full h-[275px]"
            resizeMode='contain'
          />

          <View className="mt-5">
            <Text className="text-3xl text-black text-center font-lsemibold">
              Track your Japa recitations with <Text className="text-primary">Chantify</Text>
            </Text>

          </View>

          <CustomButton 
            title = "Continue with Email"
            handlePress = {() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#E05038' style='light' />
    </SafeAreaView>
  );
}


