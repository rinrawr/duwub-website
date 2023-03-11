function copyLink(event, url) {
    event.preventDefault();
    navigator.clipboard.writeText(url);
    alert('727 WYSI');
  }