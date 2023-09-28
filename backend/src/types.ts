export interface Anime {
    name: string;
    firstName: String;
    age: number;
    height: string;
    gender: 'Male' | 'Female';
    mainJutsu: string;
    chakraElements: string[];
    image: string;
}
  
export interface AnimeDatabase {
    naruto: Anime[];
}
  