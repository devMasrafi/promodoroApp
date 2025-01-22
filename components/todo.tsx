import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Todo = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handelModalOpen = () => {
    setOpenModal(!openModal);
  };

  return (
    <View className="">
      <View>
        <TouchableOpacity
          onPress={handelModalOpen}
          className="bg-gray-400 px-[1rem] py-1 rounded-lg w-[8rem]"
        >
          {openModal ? (
            <View className="flex-row items-center justify-evenly">
              <Text className="text-white capitalize text-nowrap ">close</Text>
              <Ionicons name="close" color="white" />
            </View>
          ) : (
            <View className="flex-row justify-evenly items-center">
              <Text className="text-white capitalize text-nowrap ">
                add todo
              </Text>
              <Ionicons name="add" size={20} color="white" />
            </View>
          )}
        </TouchableOpacity>

        <View>
          <View>
            {openModal && (
              <View>
                <View>
                  <Text>Todo</Text>
                </View>
                <View>
                  <Text>Todo</Text>
                </View>
                <View>
                  <Text>Todo</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Todo;
