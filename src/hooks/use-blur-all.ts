export const useBlurAll = () => {
  return () => {
    if (document && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }
}
