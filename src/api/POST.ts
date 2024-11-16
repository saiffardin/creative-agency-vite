interface IPost<T> {
  url: string;
  body: T;
}

export const POST = async <ResType, ReqBodyType>(
  obj: IPost<ReqBodyType>
): Promise<ResType> => {
  const { url, body } = obj;

  const postFetch = {
    method: "POST",
    body,
  } as RequestInit;

  const response = await fetch(url, postFetch);

  const data = await response.json();

  return data;
};
