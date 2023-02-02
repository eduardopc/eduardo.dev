export function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height
    }
  } else {
    return { width: 0, height: 0 }
  }
}
