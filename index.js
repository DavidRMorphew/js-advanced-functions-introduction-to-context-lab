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

};

const findEmployeeByFirstName = () => {};

const calculatePayroll = () => {};