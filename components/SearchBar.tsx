import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-dark-200 py- px-5">
      <Image
        source={icons.search}
        className="size-5  "
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput onPress={() => {}} 
        placeholder="Search"
        onChange={()=>{}}
        placeholderTextColor="#ab8bff"
        className="ml-2 flex-1 text-white"
        />
    </View>
  );
};

export default SearchBar;
