export interface ClassesInterface {
  detail?: boolean;
  data: {
    id?: number;
    name?: string;
    mentors?: [
      {
        id?: number;
        name?: string;
        description?: string;
      },
    ];
    description?: string;
  };
}
