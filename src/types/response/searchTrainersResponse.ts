export interface SearchTrainersResponse {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  trainers: TrainerResponse[];
}

export interface TrainerResponse {
  trainerCode: string;
  trainerName: string;
  username: string;
}
