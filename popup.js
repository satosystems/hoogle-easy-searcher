window.onload = () => {
  const query = document.getElementById('query')
  const lts = document.getElementById('lts')
  const onKeyPress = event => {
    if (event.keyCode === 13) {
      const url = lts.value === '' ? `https://www.haskell.org/hoogle/?hoogle=${query.value}` : `https://www.stackage.org/${lts.value}/hoogle?q=${query.value}`
      document.cookie = `lts=${encodeURIComponent(lts.value)}`
      chrome.tabs.create({'url': url}) // eslint-disable-line
    }
  }
  if (document.cookie) {
    lts.value = document.cookie.split(';')[0].split('=')[1]
  }
  query.addEventListener('keypress', onKeyPress)
  lts.addEventListener('keypress', onKeyPress)
  query.focus()
}
