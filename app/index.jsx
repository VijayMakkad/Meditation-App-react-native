import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from '../components/AppGradient'

const App = () => {

  const router = useRouter()

  return (
    <View className="flex-1 ">
      <ImageBackground
        source={beachImage}
        resizeMethod="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
            <SafeAreaView className="flex-1 px-1 justify-between">
              <View>
                <Text className="text-center font-bold text-white text-4xl">
                  Meditation
                </Text>
                <Text className="text-white text-center text-regular text-2xl mt-3">
                  Simplifying Meditation for Everyone
                </Text>
              </View>
              <View>
                <CustomButton
                  onPress={() =>  router.push('/nature-meditate')}
                  title="Get Started"
                />
              </View>
              <StatusBar style="light" />
            </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
