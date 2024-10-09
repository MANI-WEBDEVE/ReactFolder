import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Habit {
    id:string;
    name:string;
    frequency: "daily" | "weekly";
    CompletedDate: string[];
    createdAt:string
}

interface HabitStore {
    habits: Habit[]
    addHabit: ( name:string, frequency: "daily"|"weekly" ) => void
}


export const useHabit = create<HabitStore>()(devtools((set) => {
    return {
        habits: [],
        addHabit : (name, frequency) => set((state) => {
            return {
                habits: [...state.habits, {
                    id:Date.now().toString(),
                    name,
                    frequency,
                    CompletedDate:[],
                    createdAt: new Date().toISOString()
                }]
            }
        })
    }
}))