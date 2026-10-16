import { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';

type Item = { id: number; subject: string; task: string; done: boolean };

export default function Homework() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, subject: 'Mathematics', task: 'Exercise 5', done: false },
  ]);
  const [subject, setSubject] = useState('');
  const [task, setTask] = useState('');

  const add = () => {
    if (!subject.trim() || !task.trim()) return;
    setItems([...items, { id: Date.now(), subject: subject.trim(), task: task.trim(), done: false }]);
    setSubject('');
    setTask('');
  };
  const toggle = (id: number) =>
    setItems(items.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  const remove = (id: number) => setItems(items.filter((i) => i.id !== id));

  return (
    <ScrollView style={s.page} contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps="handled">
      <Text style={s.title}>Homework</Text>

      <View style={s.card}>
        <TextInput style={s.input} placeholder="Subject" value={subject} onChangeText={setSubject} />
        <TextInput style={s.input} placeholder="Task" value={task} onChangeText={setTask} />
        <Pressable style={s.button} onPress={add}>
          <Text style={s.buttonText}>Add homework</Text>
        </Pressable>
      </View>

      <Text style={s.hint}>Tap to mark done. Press and hold to delete.</Text>

      {items.map((i) => (
        <Pressable key={i.id} style={s.card} onPress={() => toggle(i.id)} onLongPress={() => remove(i.id)}>
          <Text style={[s.bold, i.done && s.done]}>{i.subject}</Text>
          <Text style={i.done && s.done}>{i.done ? '✓ ' : ''}{i.task}</Text>
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
  hint: { color: '#667', marginBottom: 8 },
  bold: { fontWeight: 'bold' },
  done: { textDecorationLine: 'line-through', color: '#999' },
});