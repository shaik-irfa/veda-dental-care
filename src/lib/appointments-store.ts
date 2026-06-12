// Local in-memory + localStorage appointments store.
// Designed so the data layer can be swapped for MongoDB later without UI changes.

export type AppointmentStatus = "pending" | "confirmed" | "completed";

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  treatment: string;
  date: string;
  message?: string;
  status: AppointmentStatus;
  createdAt: string;
}

const KEY = "veda_appointments_v1";

function read(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Appointment[]) : [];
  } catch {
    return [];
  }
}

function write(list: Appointment[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("appointments:changed"));
}

export const appointmentsStore = {
  list(): Appointment[] {
    return read().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  },
  create(input: Omit<Appointment, "id" | "status" | "createdAt">): Appointment {
    const item: Appointment = {
      ...input,
      id: crypto.randomUUID(),
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    const list = read();
    list.push(item);
    write(list);
    return item;
  },
  updateStatus(id: string, status: AppointmentStatus) {
    const list = read().map((a) => (a.id === id ? { ...a, status } : a));
    write(list);
  },
  remove(id: string) {
    write(read().filter((a) => a.id !== id));
  },
};
