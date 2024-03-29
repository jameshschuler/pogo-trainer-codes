export interface SearchTrainersResponse {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  totalCount: number;
  trainers: TrainerResponse[];
}

export interface TrainerResponse {
  trainerCode: string;
  trainerName: string;
  username: string;
  source: string | null;
}
