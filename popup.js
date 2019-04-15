window.onload = () => {
  const query = document.getElementById("query");
  query.addEventListener("keypress", event => {
    if (event.keyCode === 13) {
      const url = "https://www.haskell.org/hoogle/?hoogle=" + query.value;
      chrome.tabs.create({"url": url});
    }
  });
}

