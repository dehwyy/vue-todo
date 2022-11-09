"use strict";
export const directives = [
    { name: "observer", directive: {
            mounted(el, binding) {
                var options = binding.value.options ? binding.value.options : {
                    rootMargin: "0px",
                    threshold: 1.0
                };
                var callback = function (entries, observer) {
                    if (entries[0].isIntersecting && binding.value.currentPage < 11) {
                        binding.value.incrementPage();
                        binding.value.fetchNewData();
                    }
                };
                var observer = new IntersectionObserver(callback, options);
                observer.observe(el);
            }
        } }
];


