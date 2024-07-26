import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import FirstModal from "@/components/modals/FirstModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import App from "@/components/modals/FirstModal";
import Operations from "@/components/operations/Operations";
import { Notification, Settings } from "@/svg";
import Payment from "@/components/operations/Payment";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  let amount = 680116;

  return (
    <SafeAreaView style={{ backgroundColor: "#212F3C", flex: 1 }}>
      <View style={styles.nav}>
        {/* Avatar Component */}
        <View style={styles.avatar}>
          <Text className="text-[30px] text-blue-600 font-bold">S</Text>
        </View>
        <View style={styles.boxName} className="flex-1">
          <Text style={styles.textName} className="text-[#B2BABB]">
            {" "}
            Hello
          </Text>
          <Text style={styles.textName} className="text-[#FBFCFC] pl-[10px]">
            Marco
          </Text>
        </View>

        <View className="flex-row mr-[10px] gap-2">
          <View className="h-[40px] w-[40px] bg-white rounded-[50px] justify-center items-center">
            <Settings />
          </View>
          <View className="h-[40px] w-[40px] bg-white rounded-[50px] justify-center items-center">
            <Notification />
          </View>
        </View>
      </View>

      <View className="h-[120px]  justify-center">
        <Text className="ml-[10px] text-[18px] text-[#BDC3C7]">
          Available on card
        </Text>
        <View className="flex-row ml-[10px]">
          <Text
            style={styles.currentAccount}
            className="text-white tracking-wider"
          >
            $
            {
              amount
                .toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .split(".")[0]
            }
          </Text>
          <Text style={styles.currentAccount} className="text-[#616A6B]">
            .
            {
              amount
                .toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .split(".")[1]
            }
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between mx-[10px]">
        <View className="bg-blue-700" style={styles.boxBudget}>
          <Text className="text-white">
            ${(amount * 0.5).toLocaleString("es-US")}
          </Text>
        </View>
        <View className="bg-red-700" style={styles.boxBudget}>
          <Text className="text-white">
            ${(amount * 0.3).toLocaleString("es-US")}
          </Text>
        </View>
        <View className="bg-green-700" style={styles.boxBudget}>
          <Text className="text-white">
            ${(amount * 0.2).toLocaleString("es-US")}
          </Text>
        </View>
      </View>

      <Text className="ml-[10px] mt-[20px] text-[20px] text-[#BDC3C7]">
        Actividad
      </Text>

      <Operations />
      {/* Card */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignItems: "center",
    height: 50,
    marginBottom: 5,
    flexDirection: "row",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#fff",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textAvatar: {},
  boxName: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",

    width: 80,
  },
  textName: {},
  userName: {},
  boxAmount: {
    borderRadius: 10,
    width: 180,
    height: 80,
    backgroundColor: "#418A08",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  textAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    fontStyle: "italic",
  },
  currentAccount: {
    fontSize: 50,
  },
  boxBudget: {
    height: 45,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "#ffffff80",
    borderWidth: 1,
  },
});
