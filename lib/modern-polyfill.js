if (typeof URL !== "undefined" && typeof URL.canParse !== "function") {
  URL.canParse = function canParse(url, base) {
    try {
      return Boolean(base === undefined ? new URL(url) : new URL(url, base));
    } catch {
      return false;
    }
  };
}
