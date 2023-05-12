export interface ApiResponse<T> {
  errorMessage?: string;
  success: boolean;
  data?: T;
}
