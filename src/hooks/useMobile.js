import useWindowSize from './useWindowSize';

export default () => {
  const windowSize = useWindowSize();
  return windowSize.width <= 700;
}