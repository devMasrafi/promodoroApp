import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SplashScreen from "../components/splashScreen";
import Todo from "../components/todo";

export function getServerSideProps() {
  return {
    options: {
      headerShown: false,
    },
  };
}

export default function index() {
  const [isSplashScreenLoading, setIsSplashScreenLoading] =
    useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isSplashScreenLoading) {
    return <SplashScreen />;
  }

  return (
    <View>
      <View className="flex justify-between items-center h-full">
        <Todo />
        <View>
          <Text>promodoro</Text>
        </View>
      </View>
    </View>
  );
}
