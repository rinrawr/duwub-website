function drawRain() {
    var canvas = document.getElementById('rain');
    var ctx = canvas.getContext('2d');
    var w = canvas.width;
    var h = canvas.height;
  
    ctx.clearRect(0, 0, w, h);
  
    ctx.strokeStyle = 'rgba(174,194,224,0.7)';
    ctx.lineWidth = 0.7;
    ctx.lineCap = 'round';
  
    for (var i = 0; i < 200; i++) {
      var x = Math.random() * w;
      var y = Math.random() * h;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 2, y + 25);
      ctx.stroke();
    }
    
  }

  
  
  setInterval(drawRain, 70);

