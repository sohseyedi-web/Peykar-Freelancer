export default function truncateText(str, len) {
  if (str.len < len) return str;

  return str.slice(0, len) + "...";
}
