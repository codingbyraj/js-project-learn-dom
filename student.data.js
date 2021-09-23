// class - 8,9
// date format: mm-dd-yyyy
// 10 students data
// class 8 - 3
// class 9 - 7

// function GetFormattedDate() {
//     var todayTime = new Date();
//     var month = format(todayTime .getMonth() + 1);
//     var day = format(todayTime .getDate());
//     var year = format(todayTime .getFullYear());
//     return day + "/" + month + "/" + year;
// }

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

let studentData = [
    {
        name: "Ram",
        rollNumber: 1,
        marks: {
            maths: 88,
            engligh: 67,
            science: 99
        },
        class: 8,
        address: "Dhanbad",
        dob:"12-01-1998"
    },

    {
        name: "Shyam",
        rollNumber: 2,
        marks: {
            maths: 62,
            engligh: 56,
            science: 84
        },
        class: 8,
        address: "Darjelling",
        dob: "27-08-1998"
    },
    
    {
        name: "Mohan",
        rollNumber: 3,
        marks: {
            maths: 65,
            engligh: 69,
            science: 91
        },
        class: 8,
        address: "Nagpur",
        dob: "23-06-1995"
    },

    {
        name: "Ghanshyam",
        rollNumber: 1,
        marks: {
            maths: 44,
            engligh: 76,
            science: 74
        },
        class: 9,
        address: "Chattisgarh",
        dob: "21-07-1992"
    },

    {
        name: "Raj",
        rollNumber: 2,
        marks: {
            maths: 52,
            engligh: 66,
            science: 44
        },
        class: 9,
        address: "Noida",
        dob: "29-01-1997"
    },

    {
        name: "Rahul",
        rollNumber: 3,
        marks: {
            maths: 41,
            engligh: 36,
            science: 34
        },
        class: 9,
        address: "Delhi",
        dob:"25-03-1992"
    },

    {
        name: "Govind",
        rollNumber: 4,
        marks: {
            maths: 100,
            engligh: 96,
            science: 94
        },
        class: 9,
        address: "Gurugram",
        dob: "30-06-1998"
    },

    {
        name: "Vikram",
        rollNumber: 5,
        marks: {
            maths: 88,
            engligh: 77,
            science: 99
        },
        class: 9,
        address: "Gurugram",
        dob: "26-04-1994"
    },

    {
        name: "Nandan",
        rollNumber: 6,
        marks: {
            maths: 69,
            engligh: 84,
            science: 72
        },
        class: 9,
        address: "Banglore",
        dob: "01-01-1996"
    },

    {
        name: "Sunny",
        rollNumber: 7,
        marks: {
            maths: 52,
            engligh: 75,
            science: 79
        },
        class: 9,
        address: "Gujrat",
        dob: "24-07-1996"
    },

    {
        name: "Jayant",
        rollNumber: 8,
        marks: {
            maths: 49,
            engligh: 70,
            science: 71
        },
        class: 9,
        address: "Patna",
        dob: "07-11-1997"
    },
];
