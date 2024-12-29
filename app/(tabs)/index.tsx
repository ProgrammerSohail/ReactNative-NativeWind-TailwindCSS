import { View, Text, TouchableOpacity, Linking, Animated } from "react-native";
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function TabOneScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <View
    className="flex-1 items-center justify-center">
      <Animated.View 
        className="items-center space-y-8 px-6"
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }]
        }}
      >
     
        
        <Text className="text-white text-5xl font-bold text-center tracking-tight">
          Welcome to{'\n'}React Native + Tailwind
        </Text>
        
        <Text className="text-white/90 text-xl text-center leading-relaxed">
          Build beautiful cross-platform apps with the power of React Native and the flexibility of Tailwind CSS
        </Text>

        <View className="w-full max-w-sm space-y-6 mt-10">
          <TouchableOpacity 
            className="bg-white/20 backdrop-blur-lg py-5 px-8 rounded-2xl flex-row items-center justify-center space-x-3 border border-white/30"
            onPress={() => Linking.openURL('https://github.com/ProgrammerSohail')}
          >
            <IconSymbol size={28} name="link" color="#ffffff" />
            <Text className="text-white font-semibold text-xl">Visit Creator's GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          className="bg-white/20 mt-4 backdrop-blur-lg py-5 px-8 rounded-2xl flex-row items-center justify-center space-x-3 border border-white/30"
          onPress={() => Linking.openURL('https://www.tiktok.com/@programmer.sohail')}
        >
          <IconSymbol size={28} name="play.fill" color="#ffffff" />
          <Text className="text-white font-semibold text-xl">Follow me on TikTok</Text>
        </TouchableOpacity>
          <View className="flex-row items-center justify-center space-x-2">
            <Text className="text-white/80 text-lg">
              Crafted with
            </Text>
            <IconSymbol size={24} name="heart.fill" color="#ff4b6e" />
            <Text className="text-white/80 text-lg">
              by Sohail
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}