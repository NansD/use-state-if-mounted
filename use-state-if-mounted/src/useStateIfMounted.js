export default function useStateIfMounted (settings = {}) {
  const { message } = settings;
  return {
    message
  };
}