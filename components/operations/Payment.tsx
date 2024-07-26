import { View, Text } from "react-native";
import React from "react";

interface PaymentProps {
  icon: React.ComponentType;
  title: string;
  subtitle: string;
  amount: string;
}

const Payment: React.FC<PaymentProps> = ({
  icon: Icon,
  title,
  subtitle,
  amount,
}) => {
  return (
    <View className="flex-row items-center justify-between rounded-[16px] h-[60px] px-[10px] mt-[10px] border-[1px] border-solid border-gray-500 w-full">
      <View className="h-[40px] w-[40px] bg-white rounded-[50px] justify-center items-center">
        <Icon />
      </View>
      <View className="flex-1 ml-[10px]">
        <Text className="font-bold">{title}</Text>
        <Text>{subtitle}</Text>
      </View>
      <Text className="font-bold -tracking-tight">{amount}</Text>
    </View>
  );
};

export default Payment;
