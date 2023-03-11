function copyLink(event, url) {
    event.preventDefault();
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  }