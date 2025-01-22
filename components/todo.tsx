import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Todo = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openAccordion, setOpenAccordion] = React.useState(false);

  const [todoInput, setTodoInput] = React.useState({
    title: "",
    description: "",
  });

  interface Todo {
    id: string;
    title: string;
    description: string;
  }

  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleTodoForm = (name: string, value: string) => {
    setTodoInput({
      ...todoInput,
      [name]: value,
    });
  };

  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };

  const handleAccordionOpen = () => {
    setOpenAccordion(!openAccordion);
  };

  const handleAddTodo = () => {
    if (todoInput.title && todoInput.description) {
      const newTodo = {
        ...todoInput,
        id: Date.now().toString(),
      };
      setTodos([...todos, newTodo]);
      setTodoInput({ title: "", description: "" });
      setOpenModal(false);
    }
  };

  return (
    <View className="w-full h-full">
      {/* Button */}
      <View className="flex items-end p-4">
        <TouchableOpacity
          onPress={handleModalOpen}
          className="bg-gray-400 px-[1rem] py-1 rounded-lg w-[8rem]"
        >
          <View className="flex-row justify-evenly items-center">
            <Text className="text-white capitalize">add todo</Text>
            <Ionicons name="add" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <View className="p-4">
        <ScrollView>
          {todos.map((todo) => (
            <TouchableOpacity
              key={todo.id}
              onPress={handleAccordionOpen}
              className="border border-2-gray/50 px-3 py-3 rounded-md"
            >
              <Text className="text-xl">{todo.title}</Text>
              {openAccordion && (
                <Text className="text-sm">{todo.description}</Text>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Modal */}
      {openModal && (
        <TouchableWithoutFeedback onPress={handleModalOpen}>
          <View className="absolute top-0 left-0 inset-0 bg-black/30 flex items-center justify-center">
          <View className="bg-white h-[17rem] w-[25rem] rounded-lg shadow-lg">
            <View className="p-4">
              <TextInput
                placeholder="Title"
                value={todoInput.title}
                onChangeText={(text) => handleTodoForm("title", text)}
                className="border border-2 border-gray-300 px-2 py-1 rounded-lg mb-4"
              />
              <TextInput
                placeholder="Description"
                value={todoInput.description}
                onChangeText={(text) => handleTodoForm("description", text)}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
                className="border border-2 h-[8rem] border-gray-300 px-2 py-1 rounded-lg mb-4"
              />
              <View className="flex flex-row justify-between">
                <TouchableOpacity
                  className="px-6 py-2 bg-gray-300 w-[45%] rounded-md"
                  onPress={() => setTodoInput({ title: "", description: "" })}
                >
                  <Text className="text-center capitalize">clear</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="px-6 py-2 bg-gray-300 w-[45%] rounded-md"
                  onPress={handleAddTodo}
                >
                  <Text className="text-center capitalize">add todo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default Todo;
