onload = () => {
  const second = document.querySelector(".second.hand");
  const minute = document.querySelector(".minute.hand");
  const hour = document.querySelector(".hour.hand");
  setInterval( () => {
    const date = new Date();
    console.log(date);
    // 1秒あたりの角度
    const s = 6 * date.getSeconds();
    // 1分あたりの角度 + 秒を考慮
    const m = 6 * date.getMinutes() + (s / 60);
    // １時間あたりの角度 + 分を考慮
    const h = (360/12) * date.getHours() + (m / 24);
    console.log(s);
    console.log(m);
    console.log(h);
    second.style.transform = `rotate(${s}deg)`;
    minute.style.transform = `rotate(${m}deg)`;
    hour.style.transform = `rotate(${h}deg)`;
  }, 1000);
};