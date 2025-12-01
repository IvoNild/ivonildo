export interface ProjectDetails {
  id: number;
  img: string[];
  title: string;
  description: string;
  skills: string[];
  fileUrl?: string;
  technologies?: string[];
  objectives?: string[];
  paragraph?: { title: string; text: string }[];
  date?: string;
}
