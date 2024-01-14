export interface GetWineData {
  id: string;
  name: string;
  year: number;
  type: string; // Constrain to allowed types if needed
  varietal: string;
  rating: number;
  consumed: boolean,
  date_consumed: string
}
