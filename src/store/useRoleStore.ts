import { create } from 'zustand';
import { RoleType } from '../types';

interface RoleState {
    activeRole: RoleType;
    setRole: (role: RoleType) => void;
}

export const useRoleStore = create<RoleState>((set) => ({
    activeRole: 'buyer',
    setRole: (role) => set({ activeRole: role }),
}));