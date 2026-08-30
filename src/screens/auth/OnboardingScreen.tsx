import { useRef, useState } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useVideoPlayer, VideoView } from 'expo-video';

import Discover from '@/assets/images/onboarding/discover.mp4';
import type { AuthStackParamList } from '@/navigation/types';

const { width } = Dimensions.get('window');

const slides = [
    {
        title: 'Discover Products Anywhere',
        video: Discover,
        description:
            'Find products from physical markets across Africa with verified, real-time local updates and trusted quality checks.',
    },
    {
        title: 'Verify Before You Buy',
        video: Discover,
        description:
            'Connect with trusted local verification agents who physically inspect item quality, condition, and count before you release payment.',
    },
    {
        title: 'Delivered To Your Door',
        video: Discover,
        description:
            'Enjoy integrated, stress-free consolidated shipping straight to your home or preferred PUDO center via our V-RIDE network.',
    },
];

type NavProp = NativeStackNavigationProp<AuthStackParamList, 'Onboarding'>;

function SlideVideo({ source }: { source: any }) {
    const player = useVideoPlayer(source, (p) => {
        p.loop = true;
        p.muted = true;
        p.play();
    });

    return (
        <VideoView
            player={player}
            style={{ width: '100%', height: '100%', borderRadius: 16 }}
            contentFit="cover"
            nativeControls={false}
        />
    );
}

export default function OnboardingScreen() {
    const navigation = useNavigation<NavProp>();
    const scrollRef = useRef<ScrollView>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isLastSlide = activeIndex === slides.length - 1;

    const goToLogin = () => navigation.navigate('Login');

    const handleNext = () => {
        if (isLastSlide) {
            goToLogin();
            return;
        }
        const nextIndex = activeIndex + 1;
        scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
        setActiveIndex(nextIndex);
    };

    const handleScroll = (e: any) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
    };

    return (
        <View className="flex-1 bg-white">
            {activeIndex < slides.length - 1 && (
                <TouchableOpacity onPress={goToLogin} className="absolute top-14 right-6 z-10">
                    <Text className="text-gray-500 text-sm">Skip</Text>
                </TouchableOpacity>
            )}

            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScroll}
                scrollEventThrottle={16}
            >
                {slides.map((slide, index) => (
                    <View key={index} style={{ width }} className="px-6 pt-24">
                        <View className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden mb-8">
                            {/* <SlideVideo source={slide.video} /> */}
                        </View>
                        <Text className="text-2xl font-bold text-center mb-3">{slide.title}</Text>
                        <Text className="text-gray-500 text-center text-sm leading-5 px-4">
                            {slide.description}
                        </Text>
                    </View>
                ))}
            </ScrollView>

            <View className="flex-row justify-center mb-8 mt-4">
                {slides.map((_, index) => (
                    <View
                        key={index}
                        className={`h-1.5 rounded-full mx-1 ${index === activeIndex ? 'w-6 bg-black' : 'w-1.5 bg-gray-300'
                            }`}
                    />
                ))}
            </View>

            <View className="px-6 mb-10">
                <TouchableOpacity onPress={handleNext} className="bg-black py-4 rounded-xl items-center">
                    <Text className="text-white font-semibold text-base">
                        {isLastSlide ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}