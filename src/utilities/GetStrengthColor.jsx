export const GetStrengthColor = (strength) => {
  switch (strength) {
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "lightgreen";
    case 4:
      return "green";
    default:
      return "gray";
  }
};
