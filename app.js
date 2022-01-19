var CheckIn;
var CheckOut;
var day;
var day1, calculateInTime = 0, calculateBreakTime = 0;
document.getElementById('CheckOut').disabled = true;

document.getElementById('CheckIn').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('CheckIn').disabled = true;
    document.getElementById('CheckOut').disabled = false;

    day = new Date();
    CheckIn = day.getHours() + ":" + day.getMinutes();

    var table = document.getElementById("myTable");

    var BreakDiffInTime = (day1.getTime() / 1000).toFixed(0);
    var BreakDiffOutTime = (day.getTime() / 1000).toFixed(0);

    var brakHours = Math.floor(((BreakDiffOutTime - BreakDiffInTime) / 3600) % 12);
    var brakMinutes = Math.floor((((BreakDiffOutTime - BreakDiffInTime) / 60) % 60));

    var totalBreakTime = (brakHours * 60) + brakMinutes;
    calculateBreakTime = calculateBreakTime + totalBreakTime;


});


document.getElementById('CheckOut').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('CheckIn').disabled = false;
    document.getElementById('CheckOut').disabled = true;


    day1 = new Date();
    CheckOut = day1.getHours() + ":" + day1.getMinutes();

    var table = document.getElementById("myTable");

    var CheckInTime = (day.getTime() / 1000).toFixed(0);
    var CheckOutTime = (day1.getTime() / 1000).toFixed(0);

    var inHours = Math.floor(((CheckOutTime - CheckInTime) / 3600) % 12);
    var inMinuts = Math.floor((((CheckOutTime - CheckInTime) / 60) % 60));

    inHours = inHours < 10 ? '0' + inHours : inHours;
    inMinuts = inMinuts < 10 ? '0' + inMinuts : inMinuts;

    var totalTime = inHours + ":" + inMinuts;
    var TotalIntime = (inHours * 60) + inMinuts;

    calculateInTime = calculateInTime + TotalIntime;
    // console.log(totalTime);
    let row = `<tr>
            <td>${CheckIn}</td>
            <td>${CheckOut}</td>
            <td id="intime">${totalTime}</td>
            </tr>`
    table.innerHTML += row;


});

document.getElementById('totalTime').addEventListener('click', (event) => {
    event.preventDefault();

    var h = Math.floor(calculateInTime / 60);
    var m = calculateInTime % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    document.getElementById("show-total-intime").innerHTML = (h + ":" + m);


});

document.getElementById('totalBreak').addEventListener('click', (event) => {
    event.preventDefault();

    var h = Math.floor(calculateBreakTime / 60);
    var m = calculateBreakTime % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    document.getElementById("show-total-break").innerHTML = (h + ":" + m);
});
