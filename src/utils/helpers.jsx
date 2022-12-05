export const formatPrice = (price) => {
  // built in function
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
    // The ".flat()" method creates a new array with all sub-array elements
    // concatenated into it recursively up to the specified depth
  }
  return ["all", ...new Set(unique)]; // <-- remove duplicate elements from the array and return
};
