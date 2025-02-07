import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Platform,
  Keyboard,
} from "react-native";
import { InputFieldProps } from "@/types/type";
const InputFields = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text className={` text-lg font-JakartaBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`border flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border-neutral-100 focus:border-primary-500 ${containerStyle}
`}
          >
            {icon && <Image source={icon} className="  w-6 h-6 ml-4" />}
            <TextInput
              className={`  rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputFields;
