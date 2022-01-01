export const delay = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const timeout = {
  timer: null,
  start: function(func) {
    timeout.timer = setTimeout(func, 1000);
  },

  stop: function() {
    clearTimeout(timeout.timer);
  }
};