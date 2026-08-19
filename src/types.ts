export interface GuestWish {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

export interface ProgramItem {
  time: string;
  title: string;
  description?: string;
}