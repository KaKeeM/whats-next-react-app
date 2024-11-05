// types.ts ou index.ts
export interface Documento {
    id: string;
    time: string;
    name: string;
    message: string;
    created_at: {
      seconds: number;
      nanoseconds: number;
    };
    avatar: string;
    timestamp: {
      seconds: number;
      nanoseconds: number;
    };
  }
  