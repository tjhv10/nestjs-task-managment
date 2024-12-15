export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  Open = "Open",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}
