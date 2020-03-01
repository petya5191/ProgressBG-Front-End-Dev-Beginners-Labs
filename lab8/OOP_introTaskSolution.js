// create object "ex nihilo"  (by literal)
let dev1 = {
    "firstName": "Pesho",
    "surName": "Petrov",
    "skillSet": ["HTML", "CSS"],
    "experience": [3, 2]
}

let dev2 = {
    "firstName": "Maria",
    "surName": "Popova",
    "skillSet": ["Python", "HTML", "CSS"],
    "experience": [3, 1, 3]
}

let developers = [dev1, dev2];

function findSkilledDevs(skill, minExperience, devs) {
    let skilledDevs = [];

    for (let i = 0; i < devs.length; i++) {
        const dev = devs[i];

        for (let i = 0; i < dev.skillSet.length; i++) {
            if( skill === dev.skillSet[i]
                &&
                dev.experience[i] > minExperience ){
                skilledDevs.push(dev.firstName)
            }
        }
    }
    return skilledDevs;
}

let skilledDevs = findSkilledDevs("HTML", 2, developers);
console.log( skilledDevs);