export default function checkBrightness (hex) {
  const channels = {
    r: parseInt(hex.slice(1,3), 16),
    g: parseInt(hex.slice(3,5), 16),
    b: parseInt(hex.slice(5,7), 16),
  };
  const {r, g, b} = channels;
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return brightness;
}