import { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';

type Status = 'Not marked' | 'Present' | 'Absent';
type Student = { id: number; name: string; status: Status };

const next: Record<Status, Status> = {
  'Not marked': 'Present',
  Present: 'Absent',
  Absent: 'Present',
};

export default function Attendance() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState('');

  const add = () => {
    if (!name.trim()) return;
    setStudents([...students, { id: Date.now(), name: name.trim(), status: 'Not marked' }]);
    setName('');
  };
  const cycle = (id: number) =>
    setStudents(students.map((st) => (st.id === id ? { ...st, status: next[st.status] } : st)));
  const remove = (id: number) => setStudents(students.filter((st) => st.id !== id));

  const present = students.filter((st) => st.status === 'Present').length;
  const absent = students.filter((st) => st.status === 'Absent').length;

  return (
    <ScrollView style={s.page} contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps="handled">
      <Text style={s.title}>Attendance</Text>

      <View style={s.card}>
        <TextInput style={s.input} placeholder="Student name" value={name} onChangeText={setName} />
        <Pressable style={s.button} onPress={add}>
          <Text style={s.buttonText}>Add student</Text>
        </Pressable>
      </View>

      <Text style={s.summary}>Present: {present}   Absent: {absent}   Total: {students.length}</Text>
      <Text style={s.hint}>Tap a name to change status. Press and hold to delete.</Text>

      {students.map((st) => (
        <Pressable key={st.id} style={s.row} onPress={() => cycle(st.id)} onLongPress={() => remove(st.id)}>
          <Text style={s.name}>{st.name}</Text>
          <Text
            style={[
              s.status,
              st.status === 'Present' && s.present,
              st.status === 'Absent' && s.absent,
            ]}
          >
            {st.status}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f4f6fb' },
  title: { fontSize: 28, fontWeight: 'bold', marginTop: 30, marginBottom: 12 },
  card: { backgroundColor: 'white', padding: 14, borderRadius: 10, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#d0d5e0', borderRadius: 8, padding: 10, marginBottom: 8 },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  summary: { fontWeight: 'bold', marginTop: 6, marginBottom: 4 },
  hint: { color: '#667', marginBottom: 8 },
  row: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: { fontWeight: '600' },
  status: { color: '#888' },
  present: { color: '#16a34a', fontWeight: 'bold' },
  absent: { color: '#dc2626', fontWeight: 'bold' },
});