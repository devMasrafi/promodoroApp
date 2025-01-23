import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Todo from "../components/todo";

export function getServerSideProps() {
  return {
    options: {
      headerShown: false,
    },
  };
}

export default function index() {

  return (
    <View className="">
      <View className="flex justify-between h-full w-full">
        <View>
          <Todo />
        </View>
      </View>
    </View>
  );
}
