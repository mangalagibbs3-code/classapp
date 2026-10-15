import { View, Text, ScrollView, StyleSheet } from 'react-native';

const timetable = [
  { time: '9:00', subject: 'Math' },
  { time: '10:30', subject: 'English' },
  { time: '12:00', subject: 'Science' },
];
const homework = [
  { subject: 'Math', task: 'Exercise 5', due: 'Tomorrow' },
  { subject: 'English', task: 'Write an essay', due: 'Friday' },
];

export default function Home() {
  return (
    <ScrollView style={s.page} contentContainerStyle={{ padding: 20 }}>
      <Text style={s.title}>My Class</Text>

      <Text style={s.heading}>Today's timetable</Text>
      {timetable.map((t) => (
        <View key={t.time} style={s.card}>
          <Text style={s.bold}>{t.time}</Text>
          <Text>{t.subject}</Text>
        </View>
      ))}

      <Text style={s.heading}>Homework</Text>
      {homework.map((h) => (
        <View key={h.task} style={s.card}>
          <Text style={s.bold}>{h.subject}</Text>
          <Text>{h.task} (due {h.due})</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f4f6fb' },
  title: { fontSize: 28, fontWeight: 'bold', marginTop: 30 },
  heading: { fontSize: 18, fontWeight: '600', marginTop: 24, marginBottom: 8 },
  card: { backgroundColor: 'white', padding: 14, borderRadius: 10, marginBottom: 8 },
  bold: { fontWeight: 'bold' },
});
