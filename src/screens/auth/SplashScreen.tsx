import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
    Easing,
} from 'react-native-reanimated';

import type { AuthStackParamList } from '@/navigation/types';

type NavProp = NativeStackNavigationProp<AuthStackParamList, 'Splash'>;

export default function SplashScreen() {
    const navigation = useNavigation<NavProp>();
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withRepeat(
            withSequence(
                withTiming(1.08, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
                withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            false
        );

        const timer = setTimeout(() => {
            navigation.replace('Onboarding');
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <View className="flex-1 items-center justify-center bg-[#0B1120]">
            <Animated.View
                style={animatedStyle}
                className="w-20 h-20 rounded-2xl bg-white items-center justify-center mb-4"
            >
                <Text className="text-[#0B1120] text-xl font-bold">VL</Text>
            </Animated.View>

            <Text className="text-white text-2xl font-bold">VeriLyft</Text>
            <Text className="text-gray-400 text-xs tracking-widest mt-1">
                VERIFY BEFORE YOU BUY
            </Text>
        </View>
    );
}