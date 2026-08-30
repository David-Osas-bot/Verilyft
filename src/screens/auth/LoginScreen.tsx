import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import type { AuthStackParamList } from '@/navigation/types';

type NavProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export default function LoginScreen() {
    const navigation = useNavigation<NavProp>();
    const [emailOrPhone, setEmailOrPhone] = useState('');

    return (
        <ScrollView className="flex-1 bg-white px-6 pt-16">
            <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8">
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text className="text-2xl font-bold mb-2">Welcome Back</Text>
            <Text className="text-gray-500 mb-8">
                Log in to access verification agents & logistics.
            </Text>

            <Text className="text-sm font-medium mb-2">Email or Phone Number</Text>
            <TextInput
                value={emailOrPhone}
                onChangeText={setEmailOrPhone}
                placeholder="e.g. +234 803 123 4567"
                placeholderTextColor="#9CA3AF"
                className="border border-gray-200 rounded-xl px-4 py-3.5 mb-6 text-base"
            />

            <TouchableOpacity className="bg-black py-4 rounded-xl items-center mb-6">
                <Text className="text-white font-semibold">Continue</Text>
            </TouchableOpacity>

            <View className="flex-row items-center mb-6">
                <View className="flex-1 h-px bg-gray-200" />
                <Text className="mx-3 text-gray-400 text-xs">OR</Text>
                <View className="flex-1 h-px bg-gray-200" />
            </View>

            <TouchableOpacity className="border border-gray-200 py-4 rounded-xl items-center mb-3">
                <Text className="font-medium">Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity className="border border-gray-200 py-4 rounded-xl items-center mb-8">
                <Text className="font-medium">Continue with Apple</Text>
            </TouchableOpacity>

            <View className="items-center mb-2">
                <Text className="text-gray-500 text-sm">
                    Don't have an account?{' '}
                    <Text
                        className="font-semibold text-black"
                        onPress={() => navigation.navigate('CreateAccount')}
                    >
                        Sign Up
                    </Text>
                </Text>
            </View>

            <TouchableOpacity className="items-center">
                <Text className="text-gray-400 text-sm">Continue as Guest</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}