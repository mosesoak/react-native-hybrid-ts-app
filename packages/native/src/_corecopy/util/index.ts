// Use this for universal (instead of RN's __DEV__ shortcut)
export function isDev() {
  return process.env.NODE_ENV === 'development';
}
