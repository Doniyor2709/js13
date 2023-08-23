// 1

// class Triangle {
//   constructor() {
//     let leftSide = 0;
//     let rightSide = 0;
//     let width = 0;

//     this.getLeftSide = function() {
//       return leftSide;
//     };

//     this.getRightSide = function() {
//       return rightSide;
//     };

//     this.getWidth = function() {
//       return width;
//     };

//     this.setSides = function(a, b, c) {
//       leftSide = a;
//       rightSide = b;
//       width = c;
//     };
//   }
// }

// let triangle = new Triangle();
// triangle.setSides(3, 4, 5);
// console.log(triangle.getLeftSide());
// console.log(triangle.getRightSide());
// console.log(triangle.getWidth());


// 2
// class CustomDate {
//   constructor(day, month, year) {
//     let _day = day;
//     let _month = month;
//     let _year = year;

//     this.getDay = function() {
//       return _day;
//     };

//     this.getMonth = function() {
//       return _month;
//     };

//     this.getYear = function() {
//       return _year;
//     };

//     this.setDay = function(day) {
//       _day = day;
//     };

//     this.setMonth = function(month) {
//       _month = month;
//     };

//     this.setYear = function(year) {
//       _year = year;
//     };
//   }

//   getISOdate() {
//     const formattedDay = this.getDay() < 10 ? '0' + this.getDay() : this.getDay();
//     const formattedMonth = this.getMonth() < 10 ? '0' + this.getMonth() : this.getMonth();
//     return formattedDay + '-' + formattedMonth + '-' + this.getYear();
//   }
// }


// let date = new CustomDate(12, 5, 2023);
// console.log(date.getISOdate());

// date.setMonth(10);
// console.log(date.getISOdate());

// 4
// class Time {
//   constructor(hour, minute, second) {
//     this._hour = hour;
//     this._minute = minute;
//     this._second = second;
//   }

//   get hour() {
//     return this._hour;
//   }

//   set hour(hour) {
//     this._hour = hour;
//   }

//   get minute() {
//     return this._minute;
//   }

//   set minute(minute) {
//     this._minute = minute;
//   }

//   get second() {
//     return this._second;
//   }

//   set second(second) {
//     this._second = second;
//   }

//   nextSecond() {
//     if (this._second === 59) {
//       this._second = 0;
//       this.nextMinute();
//     } else {
//       this._second++;
//     }
//   }

//   previousSecond() {
//     if (this._second === 0) {
//       this._second = 59;
//       this.previousMinute();
//     } else {
//       this._second--;
//     }
//   }

//   nextMinute() {
//     if (this._minute === 59) {
//       this._minute = 0;
//       this.nextHour();
//     } else {
//       this._minute++;
//     }
//   }

//   previousMinute() {
//     if (this._minute === 0) {
//       this._minute = 59;
//       this.previousHour();
//     } else {
//       this._minute--;
//     }
//   }

//   nextHour() {
//     if (this._hour === 23) {
//       this._hour = 0;
//     } else {
//       this._hour++;
//     }
//   }

//   previousHour() {
//     if (this._hour === 0) {
//       this._hour = 23;
//     } else {
//       this._hour--;
//     }
//   }
// }

// let time = new Time(6, 20, 10);
// console.log(time.hour + ':' + time.minute + ':' + time.second); 

// time.nextSecond();
// console.log(time.hour + ':' + time.minute + ':' + time.second);

// time.previousSecond();
// console.log(time.hour + ':' + time.minute + ':' + time.second);