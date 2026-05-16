export const getData = async () => {
  const res = await fetch("http://localhost:4000/cursor");
  const data = await res.json();
  return data;
};
