import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center mx-5">
      <Text className="text-red-500 font-bold text-center text-2xl">
        {t("title")}
      </Text>
    </View>
  );
}
