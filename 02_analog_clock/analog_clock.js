function drawHourMemory() {
  for(let i = 1; i <= 12; i++) {
    const svg = document.getElementById('clock-svg'); // get svg element
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'line'); // Create a line in SVG's namespace // <line></line>
    el.setAttribute('x1', '140'); // set first stroke first x point <line x1="140"></line>
    el.setAttribute('y1', '20'); // set first stroke first y point <line x1="140" y1="20"></line>
    el.setAttribute('x2', '140'); // set first stroke second x point <line x1="140" y1="20" x2="140"></line>
    el.setAttribute('y2', '40'); // set first stroke second y point <line x1="140" y1="20" x2="140" y2="40"></line>
    el.setAttribute('id', 'tick'); // <line x1="140" y1="20" x2="140" y2="40" id="tick"></line>
    el.setAttribute('transform', `rotate(${i*360/12} 140 140)`);
    svg.appendChild(el);
  }
}

// DOM ロード後 drawHourMemory()を読み込む
document.addEventListener('DOMContentLoaded', function() {
  drawHourMemory(); // 時間のメモリを描画
});

function rotateClock(id, val) {
  const v = `rotate(${val}, 140, 140)`;
  document.getElementById(id).setAttribute('transform', v);
}

function clockTick() {
  const now = new Date();
  // new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
  const then = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  const h = 30 * ((now.getHours() % 12) + now.getMinutes() / 60);
  const m = 6 * ((now.getMinutes()) + now.getSeconds() / 60);
  const diffInMil = (now.getTime() - then.getTime()); // difference in milli second
  const s = (diffInMil / 1000) * 6; // ms -> second
  rotateClock('h-hand', h);
  rotateClock('m-hand', m);
  rotateClock('s-hand', s);
  rotateClock('s-tail', s + 180);
}

// loop
function runClock() {
  clockTick();
  window.requestAnimationFrame(runClock);
}

window.requestAnimationFrame(runClock);