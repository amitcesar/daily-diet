import { SectionListData } from "react-native";

export type Section = SectionListData<
  {
    id: number;
    name: string;
    description: string;
    Data: string;
    Hora: string;
    isDiet: "yes" | "no";
  },
  {
    sectionName: string;
  }
>;

export const sections: Section[] = [
  {
    sectionName: "16.08.23",
    data: [
      {
        id: 1,
        name: "X-tudo",
        description: "X-tudo completo",
        Data: "2023-08-16",
        Hora: "18:13",
        isDiet: "yes",
      },
      {
        id: 2,
        name: "Whey Protein com leite",
        description: "refeição pos treino",
        Data: "2023-08-16",
        Hora: "16:13",
        isDiet: "no",
      },
      {
        id: 3,
        name: "Açai puro com mel",
        description: "jantar",
        Data: "2023-08-16",
        Hora: "19:13",
        isDiet: "no",
      },
    ],
  },
  {
    sectionName: "17.08.2023",
    data: [
      {
        id: 4,
        name: "Pão com ovo",
        description: "café da manha de campeão",
        Data: "2023-08-17",
        Hora: "08:13",
        isDiet: "yes",
      },
      {
        id: 5,
        name: "Arroz, feijão e peito de frango",
        description: "almoçinho basico antes da academia",
        Data: "2023-08-17",
        Hora: "12:44",
        isDiet: "yes",
      },
      {
        id: 6,
        name: "Pasta de amendoim sabor cookie",
        description: "pos treino",
        Data: "2023-08-17",
        Hora: "17:44",
        isDiet: "yes",
      },
    ],
  },
];
