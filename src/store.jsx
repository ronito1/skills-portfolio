import { create } from 'zustand';

const useStore = create((set) => ({
  students: [],
  setStudents: (students) => set({ students }),
  addStudent: (student) => set((state) => ({ students: [...state.students, student] })),
  updateStudent: (id, updatedStudent) =>
    set((state) => ({
      students: state.students.map((student) =>
        student.id === id ? { ...student, ...updatedStudent } : student
      ),
    })),
  deleteStudent: (id) =>
    set((state) => ({
      students: state.students.filter((student) => student.id !== id),
    })),
}));

export default useStore;
