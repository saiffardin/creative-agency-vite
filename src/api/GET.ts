interface IGet {
  url: string;
}

export const GET = async <T>(params: IGet): Promise<T> => {
  const { url } = params;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
