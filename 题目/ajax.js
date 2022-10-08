function ajax () {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', '/123', true)
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
      } else {
        console.log(xhr.responseText)
      }
    }
  }
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
}