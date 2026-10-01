// Single source for the office address and its map links.
export const ADDRESS =
  "Near Dwarka Store, EC Road, Above Admire Honda, Near Survey Chowk, Race Course, Opposite Hillgrange Preparatory School, Dehradun, Uttarakhand 248001";

export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
