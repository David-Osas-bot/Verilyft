import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import type { AuthStackParamList } from '@/navigation/types';

type NavProp = NativeStackNavigationProp<AuthStackParamList, 'CreateAccount'>;

export default function RegisterScreen() {
    const navigation = useNavigation<NavProp>();
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);

    const inputClass = 'border border-gray-200 rounded-xl px-4 py-3.5 mb-4 text-base';
    const labelClass = 'text-sm font-medium mb-2';

    return (
        <ScrollView className="flex-1 bg-white px-6 pt-16">
            <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8">
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text className="text-2xl font-bold mb-2">Create Account</Text>
            <Text className="text-gray-500 mb-6">
                Join VeriLyft to shop physical markets safely.
            </Text>

            <Text className={labelClass}>Full Name</Text>
            <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="e.g. Chinedu Okafor"
                placeholderTextColor="#9CA3AF"
                className={inputClass}
            />

            <Text className={labelClass}>Phone Number</Text>
            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="+234 803 123 4567"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                className={inputClass}
            />

            <Text className={labelClass}>Email Address</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="name@example.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                className={inputClass}
            />

            <Text className={labelClass}>Location / City</Text>
            <TextInput
                value={location}
                onChangeText={setLocation}
                placeholder="Ikeja, Lagos"
                placeholderTextColor="#9CA3AF"
                className={inputClass}
            />

            <Text className={labelClass}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                className={inputClass}
            />

            <TouchableOpacity
                onPress={() => setAgreed(!agreed)}
                className="flex-row items-center mb-6"
            >
                <View
                    className={`w-5 h-5 rounded border mr-2 ${agreed ? 'bg-black border-black' : 'border-gray-300'
                        }`}
                />
                <Text className="text-sm text-gray-500">
                    I agree to the <Text className="font-semibold text-black">Terms of Service</Text> and{' '}
                    <Text className="font-semibold text-black">Privacy Policy</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-black py-4 rounded-xl items-center mb-6">
                <Text className="text-white font-semibold">Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                className="items-center mb-10"
            >
                <Text className="text-gray-500 text-sm">
                    Already have an account? <Text className="font-semibold text-black">Log In</Text>
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}