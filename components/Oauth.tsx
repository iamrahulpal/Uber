import { Image, Text, View } from "react-native";
import CustomButtons from "./CustomButtons";
import { icons } from "@/constants";

const Oauth = () => {
  const handleGoogleSignIn = () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className=" flex-1 h-[1px] bg-general-100"></View>
        <Text>Or</Text>
        <View className=" flex-1 h-[1px] bg-general-100"></View>
      </View>

      {/* Goodle Oauth button */}

      <CustomButtons
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            className="w-6 h-6 mx-2"
            resizeMode="contain"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default Oauth;
