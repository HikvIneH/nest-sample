let IS_AVAILABLE = true;

export const checkCacheStatus = () => {
  if (process.env.ENABLE_CACHE === '0') {
    return false;
  }
  return IS_AVAILABLE;
};

export const setCacheStatus = (isAvailable: boolean) => {
  IS_AVAILABLE = isAvailable;
};
