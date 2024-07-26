import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import { Settings, LogoAtAndT, LogoNetflix, IconGym } from "@/svg";
import Payment from "./Payment";

export default function Operations() {
  return (
    <View style={styles.container}>
      <Pressable>
        <View className="my-[10px] self-center h-[5px] bg-[#CCD1D1] w-[50px] rounded-md "></View>
      </Pressable>
      <ScrollView className="px-[10px]">
        <View className="flex-row justify-between mt-[10px]">
          <Text style={styles.text}>Operations</Text>
          <Text style={styles.text} className="text-violet-700">
            View All
          </Text>
        </View>

        <Payment
          icon={Settings}
          title="AT&T"
          subtitle="Unlimited Family Plan"
          amount="-$34.99"
        />

        <Payment
          icon={LogoAtAndT}
          title="AT&T"
          subtitle="Unlimited Family Plan"
          amount="-$34.99"
        />

        <Payment
          icon={LogoNetflix}
          title="Netflix"
          subtitle="Subscription Family Plan"
          amount="$34.99"
        />

        <Payment
          icon={IconGym}
          title="Gym"
          subtitle="Gym Mensual"
          amount="-$22.000"
        />

        <Payment
          icon={Settings}
          title="AT&T"
          subtitle="Unlimited Family Plan"
          amount="-$34.99"
        />

        <Payment
          icon={LogoAtAndT}
          title="AT&T"
          subtitle="Unlimited Family Plan"
          amount="-$34.99"
        />

        <Payment
          icon={LogoNetflix}
          title="Netflix"
          subtitle="Subscription Family Plan"
          amount="$34.99"
        />

        <Payment
          icon={IconGym}
          title="Gym"
          subtitle="Gym Mensual"
          amount="-$22.000"
        />

        <Payment
          icon={Settings}
          title="AT&T"
          subtitle="Unlimited Family Plan"
          amount="-$34.99"
        />

        <Payment
          icon={LogoAtAndT}
          title="AT&T"
          subtitle="Unlimited Family Plan"
          amount="-$34.99"
        />

        <Payment
          icon={LogoNetflix}
          title="Netflix"
          subtitle="Subscription Family Plan"
          amount="$34.99"
        />

        <Payment
          icon={IconGym}
          title="Gym"
          subtitle="Gym Mensual"
          amount="-$22.000"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#fff",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
