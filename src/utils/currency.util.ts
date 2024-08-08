export const formatNumberToVnd = (value: number) => {
  const result = value.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return result;
};
