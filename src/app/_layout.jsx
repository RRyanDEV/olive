import { Stack } from "expo-router";
import { colors } from "../styles/colors"

export default function Layout() {
const backgroundColor = colors.palette["background"]

    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
    }}/>
};