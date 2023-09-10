export interface Response<T> {
  data: T | null;
  isSuccess: boolean;
  message: string;
}
