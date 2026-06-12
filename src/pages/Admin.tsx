import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Calendar, Check, Clock, Hourglass, ArrowLeft, Trash2, Smile,
} from "lucide-react";
import { appointmentsStore, type Appointment, type AppointmentStatus } from "@/lib/appointments-store";

export default function Admin() {
  useEffect(() => {
    document.title = "Admin Dashboard — Veda Dental Hospital";
  }, []);
  const [items, setItems] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<"all" | AppointmentStatus>("all");

  useEffect(() => {
    const refresh = () => setItems(appointmentsStore.list());
    refresh();
    window.addEventListener("appointments:changed", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("appointments:changed", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const counts = {
    total: items.length,
    pending: items.filter((a) => a.status === "pending").length,
    confirmed: items.filter((a) => a.status === "confirmed").length,
    completed: items.filter((a) => a.status === "completed").length,
  };

  const filtered = filter === "all" ? items : items.filter((a) => a.status === filter);

  return (
    <div className="min-h-screen bg-secondary/40">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-primary text-white">
              <Smile className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-sm sm:text-base truncate">Veda Dental — Admin</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Appointments overview</div>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold hover:bg-secondary/70 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Website
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage incoming appointment requests.</p>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Calendar} label="Total" value={counts.total} tone="primary" />
          <StatCard icon={Hourglass} label="Pending" value={counts.pending} tone="warning" />
          <StatCard icon={Clock} label="Confirmed" value={counts.confirmed} tone="info" />
          <StatCard icon={Check} label="Completed" value={counts.completed} tone="success" />
        </div>

        <div className="mt-8 rounded-3xl bg-card border border-border overflow-hidden shadow-soft">
          <div className="flex flex-wrap items-center gap-2 p-4 border-b border-border">
            {(["all", "pending", "confirmed", "completed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground text-sm">
              No appointments to show.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-foreground/70 text-xs uppercase tracking-wider">
                  <tr>
                    <Th>Patient</Th>
                    <Th>Phone</Th>
                    <Th>Treatment</Th>
                    <Th>Date</Th>
                    <Th>Status</Th>
                    <Th className="text-right">Actions</Th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((a) => (
                    <tr key={a.id} className="border-t border-border hover:bg-secondary/30">
                      <Td>
                        <div className="font-semibold text-foreground">{a.name}</div>
                        {a.message && (
                          <div className="text-xs text-muted-foreground line-clamp-1 max-w-[20ch]">{a.message}</div>
                        )}
                      </Td>
                      <Td>
                        <a href={`tel:${a.phone}`} className="text-primary hover:underline">{a.phone}</a>
                      </Td>
                      <Td>{a.treatment}</Td>
                      <Td>{a.date}</Td>
                      <Td>
                        <select
                          value={a.status}
                          onChange={(e) => appointmentsStore.updateStatus(a.id, e.target.value as AppointmentStatus)}
                          className={`rounded-full px-3 py-1 text-xs font-semibold border ${statusClass(a.status)}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                        </select>
                      </Td>
                      <Td className="text-right">
                        <button
                          onClick={() => {
                            if (confirm("Delete this appointment?")) appointmentsStore.remove(a.id);
                          }}
                          className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Delete
                        </button>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Data is stored locally in your browser. Connect MongoDB later to persist across devices.
        </p>
      </main>
    </div>
  );
}

function statusClass(s: AppointmentStatus) {
  switch (s) {
    case "pending":
      return "bg-amber-50 border-amber-200 text-amber-700";
    case "confirmed":
      return "bg-blue-50 border-blue-200 text-blue-700";
    case "completed":
      return "bg-emerald-50 border-emerald-200 text-emerald-700";
  }
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`px-4 py-3 text-left font-semibold ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-top ${className}`}>{children}</td>;
}

function StatCard({
  icon: Icon, label, value, tone,
}: { icon: any; label: string; value: number; tone: "primary" | "warning" | "info" | "success" }) {
  const tones: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    warning: "bg-amber-100 text-amber-700",
    info: "bg-blue-100 text-blue-700",
    success: "bg-emerald-100 text-emerald-700",
  };
  return (
    <div className="rounded-2xl bg-card border border-border p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className={`grid h-9 w-9 place-items-center rounded-xl ${tones[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-3 font-display text-3xl font-extrabold">{value}</div>
    </div>
  );
}
