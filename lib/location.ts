// Single source for the office address and its map links.
export const ADDRESS =
  "Near Dwarka Store, EC Road, Race Course, above Admire Honda, near Survey Chowk, Dehradun, Uttarakhand 248001";

// Google Maps place link (opens directions in the app / browser)
export const MAP_LINK = "https://maps.app.goo.gl/1m1FvDKX7FM4tLKFA";
// Short links cannot be embedded, so the map iframe searches the address instead.
export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
