import { Text, Image, ScrollView, View, Linking } from "react-native";
import InputFields from "@/components/InputFields";
import { images } from "@/constants";
import { icons } from "@/constants";
import { useState } from "react";
import CustomButtons from "@/components/CustomButtons";
import { Link, router } from "expo-router";
import Oauth from "@/components/Oauth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className=" relative w-full h-[250px]">
          <Text className=" text-3xl text-black font-JakartaBold absolute bottom-5 left-5">
            Create your account
          </Text>
        </View>

        <View className=" p-5">
          <InputFields
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputFields
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputFields
            label="Password"
            placeholder="Enter your name"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButtons
            title="Sign Up"
            className="mt-6 "
            onPress={onSignUpPress}
          />

          {/* Oauth */}
          <Oauth />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
