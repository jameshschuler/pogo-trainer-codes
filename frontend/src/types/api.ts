export interface ApiResponse<T> {
  data: T;
}

export interface CreateProfileRequest {
  accessCode: string;
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

export interface Profile {
  profileId: number;
  username: string;
}
