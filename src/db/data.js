export const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/cursor`
  );

  const data = await res.json();

  return data;
};

export const getDetailsData = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/cursor/${id}`
  );

  const data = await res.json();

  return data;
};