import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Todo = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openAcordeon, setOpenAcordeon] = React.useState(false);

  const handelModalOpen = () => {
    setOpenModal(!openModal);
  };
  
  const handleAcordeonOpen = ()=>{
    setOpenAcordeon(!openAcordeon)
  }

  return (
    <View className="w-full h-full">
      {/* Button */}
      <View className="flex items-end p-4">
        <TouchableOpacity
          onPress={handelModalOpen}
          className="bg-gray-400 px-[1rem] py-1 rounded-lg w-[8rem]"
        >
          {openModal ? (
            <View className="flex-row items-center justify-evenly">
              <Text className="text-white capitalize">close</Text>
              <Ionicons name="close" color="white" />
            </View>
          ) : (
            <View className="flex-row justify-evenly items-center">
              <Text className="text-white capitalize">add todo</Text>
              <Ionicons name="add" size={20} color="white" />
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* List */}
      <View className="p-4">
        <View>
          <ScrollView>
            <View>
              <Text>this a something i dont know</Text>
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Modal */}
      {openModal && (
        <View
          onTouchStart={() => {
            setOpenModal(false);
          }}
          className="absolute top-0 left-0 inset-0 bg-black/30 flex items-center justify-center"
        >
          <View className="bg-white h-[17rem] w-[25rem] rounded-lg shadow-lg">
            <View className="p-4">
              <TextInput
                placeholder="add your text"
                className="border border-2 border-gray-300 px-2 py-1 rounded-lg mb-4"
              />
              <TextInput
                placeholder="add detailed text"
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                className="border border-2 h-[8rem] border-gray-300 px-2 py-1 rounded-lg mb-4"
              />
              <View className="flex flex-row justify-evenly">
                <TouchableOpacity className="px-6 py-2 bg-gray-300 w-[45%] rounded-md">
                  <Text className="text-center capitalize">clear</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-6 py-2 bg-gray-300 w-[45%] rounded-md">
                  <Text className="text-center capitalize">add todo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Todo;
