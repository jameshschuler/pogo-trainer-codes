export interface ApiResponse<T> {
  data: T;
}

export interface TrainerSearchResponse {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  pageCount: number;
  trainers: Trainer[];
}

export interface Trainer {
  trainerCode: string;
  trainerName: string;
  username: string;
  source: string | null;
}

export interface TrainerAltResponse {
  id: number;
  name: string;
  code: string;
  order: number;
}

export interface Profile {
  profileId: number;
  username: string;
  userId: string;
  trainerCode: string;
  trainerName: string;
  trainerAlts: TrainerAltResponse[];
}
