export const formatMatchStatus = (status: string): string => {
  switch (status) {
    case "Ongoing":
      return "Live";
    case "Scheduled":
      return "Match preparing";
    case "Finished":
      return "Finished";
    default:
      return status;
  }
};
