const endDate = "1 September 2023 10:15 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  // millisecond is convereted to sec by divide by 1000.
  //  so diff is is seconds. and we have to convert it to no of days
  const diff = (end - now) / 1000;
  if(diff<0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
  // convert into days..
};

clock();

// 1 day=24 hours
//  1 hour=60 min
//  1min=60sec

setInterval(() => {
  clock();
},10);
