// create object "ex nihilo"  (by literal)

// let dev2 = {
//     "firstName": "Maria",
//     "surName": "Popova",
//     "skills": {
//         "Python": 3,
//         "HTML": 1,
//         "CSS":3
//     }
// }

// create dev objects by Factory Function
function devFactory(firstName, surName, skills) {
    let obj = {};

    obj.firstName = firstName;
    obj.surName = surName;
    obj.skills = skills;
    obj.findTopSkills = function () {
        let topSkills = [];
        let max = 0;
        for(skillName in this.skills){
            // console.log(this.skills[skillName]);
            let skillExp = this.skills[skillName];
            if( skillExp > max){
                max = skillExp;
            }

            topSkills.push(skillName);
            // TODO: set as HW
        }

        return topSkills;
    }

    return obj;
}


// let dev1 = devFactory("Pesho", "Petrov", {
//     "HTML": 3,
//     "CSS": 2
// });
// let dev2 = devFactory("Maria", "Popova", {
//     "Python": 3,
//     "HTML": 1,
//     "CSS":4
// })



// create dev objects with Constructor function
function DevConstructor(firstName, surName, skills) {
    // let this = {};
    this.firstName = firstName;
    this.surName = surName;
    this.skills = skills;
    this.findTopSkills = function () {
        let topSkills = [];
        let max = 0;
        for(skillName in this.skills){
            // console.log(this.skills[skillName]);
            let skillExp = this.skills[skillName];
            if( skillExp > max){
                max = skillExp;
            }

            topSkills.push(skillName);
            // TODO: set as HW
        }

        return topSkills;
    }

    // return this;
}

let dev1 = new DevConstructor("Pesho", "Petrov", {
    "HTML": 3,
    "CSS": 2
});
let dev2 = new DevConstructor("Maria", "Popova", {
    "Python": 3,
    "HTML": 1,
    "CSS":4
})




// console.dir(`dev1 = ${JSON.stringify(dev1)}`);
// console.dir(`dev2 = ${JSON.stringify(dev2)}`);

let topSkills = dev1.findTopSkills();
console.log(topSkills);