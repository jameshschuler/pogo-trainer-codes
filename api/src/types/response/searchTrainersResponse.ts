export interface SearchTrainersResponse {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  trainerCount: number;
  trainers: TrainerResponse[];
}

export interface TrainerResponse {
  trainerCode: string;
  trainerName: string;
  username: string;
}
