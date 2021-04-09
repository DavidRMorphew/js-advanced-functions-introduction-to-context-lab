// Your code here
const createEmployeeRecord = ([firstName, familyName, title, payPerHour]) => {
    let newRecord = Object.assign({}, {firstName, familyName, title, payPerHour, timeInEvents: [], timeOutEvents: []});
    return newRecord;
};

const createEmployeeRecords = (arrayOfArrays) => {
    return arrayOfArrays.map(createEmployeeRecord);
};

const createTimeInEvent = (employeeRecordObj, dateStamp) => {
    let [date, hour] = dateStamp.split(" ")
    hour = parseInt(hour);
    const timeInObj = {type: "TimeIn", hour, date}
    employeeRecordObj.timeInEvents.push(timeInObj);
    return employeeRecordObj;
};

const createTimeOutEvent = (employeeRecordObj, dateStamp) => {
    let [date, hour] = dateStamp.split(" ")
    hour = parseInt(hour);
    const timeOutObj = {type: "TimeOut", hour, date}
    employeeRecordObj.timeOutEvents.push(timeOutObj);
    return employeeRecordObj;
};

const hoursWorkedOnDate = (employeeRecordObj, date) => {
    const timeInOnDate = employeeRecordObj.timeInEvents.find((obj) => {return obj.date === date}).hour
    const timeOutOnDate = employeeRecordObj.timeOutEvents.find((obj) => {return obj.date === date}).hour
    return (timeOutOnDate - timeInOnDate)/100;
};

const wagesEarnedOnDate = (employeeRecordObj, date) => {
    const hoursWorked = hoursWorkedOnDate(employeeRecordObj, date);
    return hoursWorked * employeeRecordObj.payPerHour;
};

const allWagesFor = (employeeRecordObj) => {
    const allDates = employeeRecordObj.timeInEvents.map(element => element.date)
    const allWagesArray = allDates.map(date => {
        return wagesEarnedOnDate(employeeRecordObj, date)
    });
    const allWages = allWagesArray.reduce((total, dayWage) => { return total + dayWage }, 0)
    return allWages;
};

const findEmployeeByFirstName = (arrayOfEmployeeRecords, firstName) => {
    return arrayOfEmployeeRecords.find(employee => employee.firstName === firstName);
};

const calculatePayroll = (arrayOfEmployeeRecords) => {
    const arrayOfWagesForEachEmployee = arrayOfEmployeeRecords.map(employee => allWagesFor(employee))
    return arrayOfWagesForEachEmployee.reduce((aggregator, employeeWage) => aggregator + employeeWage, 0)
};

// const obj = {firstName: "Julius", familyName: "Caesar", title: "General", payPerHour: 27, timeInEvents: [{type: "timeIn", date: "0044-03-14", hour: 600},{type: "timeIn", date: "0044-03-12", hour: 600}], timeOutEvents: [{type: "timeOut", date: "0044-03-14", hour: 1600},{type: "timeOut", date: "0044-03-12", hour: 1800}]};