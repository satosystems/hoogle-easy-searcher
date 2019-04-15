window.onload = () => {
  const lts = document.getElementById("lts");
  const query = document.getElementById("query");
  const onKeyPress = event => {
    if (event.keyCode === 13) {
      let url;
      if (lts.value === "") {
        url = "https://www.haskell.org/hoogle/?hoogle=" + query.value;
      } else {
        url = "https://www.stackage.org/" + lts.value + "/hoogle?q=" + query.value;
      }
      document.cookie = "lts=" + encodeURIComponent(lts.value);
      chrome.tabs.create({"url": url});
    }
  };
  if (document.cookie) {
    lts.value = document.cookie.split(";")[0].split("=")[1];
  }
  lts.addEventListener("keypress", onKeyPress);
  query.addEventListener("keypress", onKeyPress);
}

