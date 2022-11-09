interface binding {
  value: {
    options?: {
      rootMargin: string
      threshold:  number
    }
    currentPage: number
    incrementPage: () => void
    fetchNewData: () => void
  }
}

export const directives = [
  {name: "observer", directive: {
    mounted(el: HTMLElement, binding: binding) {
      const options = binding.value.options ? binding.value.options : {
        rootMargin: "0px",
        threshold: 1.0
      };
      const callback = (entries: any, observer: any) => {
        if (entries[0].isIntersecting && binding.value.currentPage < 11) {
          binding.value.incrementPage();
          binding.value.fetchNewData();
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
    }
  }}
]
