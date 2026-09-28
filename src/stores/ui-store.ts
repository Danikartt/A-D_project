import { create } from 'zustand';

type UIState = {
  /** Sidebar abierto/cerrado en mobile */
  isSidebarOpen: boolean;
  /** Modal activo por ID */
  activeModal: string | null;
  /** Notificaciones activas */
  notifications: Notification[];

  // Acciones
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  openModal: (id: string) => void;
  closeModal: () => void;
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
};

type Notification = {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
};

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  activeModal: null,
  notifications: [],

  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
  addNotification: (notification) =>
    set((state) => ({ notifications: [...state.notifications, notification] })),
  removeNotification: (id) =>
    set((state) => ({ notifications: state.notifications.filter((n) => n.id !== id) })),
}));
