import { View, Text, ScrollView, StyleSheet } from 'react-native';

const week = [
  { day: 'Monday', lessons: ['Chemistry', 'Computing', 'Physics', 'Biology'] },
  { day: 'Tuesday', lessons: ['Chemistry', 'Geography', 'Mathematics', 'Computing'] },
  { day: 'Wednesday', lessons: ['Social Studies', 'Physics', 'English Language', 'Mathematics'] },
  { day: 'Thursday', lessons: ['Mathematics', 'English Language'] },
  { day: 'Friday', lessons: ['Mathematics', 'Social Studies', 'Biology', 'Geography'] },
];

export default function Timetable() {
  return (
    <ScrollView style={s.page} contentContainerStyle={{ padding: 20 }}>
      <Text style={s.title}>Timetable</Text>
      {week.map((d) => (
        <View key={d.day} style={s.card}>
          <Text style={s.day}>{d.day}</Text>
          {d.lessons.map((l, i) => (
            <Text key={d.day + i} style={s.lesson}>{l}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f4f6fb' },
  title: { fontSize: 28, fontWeight: 'bold', marginTop: 30, marginBottom: 12 },
  card: { backgroundColor: 'white', padding: 14, borderRadius: 10, marginBottom: 10 },
  day: { fontWeight: 'bold', fontSize: 16, marginBottom: 6 },
  lesson: { paddingVertical: 2 },
});