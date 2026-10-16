import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { display: 'none' },
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: { height: 70, paddingTop: 10, paddingBottom: 10 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="timetable" options={{ title: 'Timetable' }} />
      <Tabs.Screen name="homework" options={{ title: 'Homework' }} />
      <Tabs.Screen name="attendance" options={{ title: 'Attendance' }} />
    </Tabs>
  );
}