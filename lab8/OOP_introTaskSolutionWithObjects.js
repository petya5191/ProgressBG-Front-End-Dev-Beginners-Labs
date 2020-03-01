// create object "ex nihilo"  (by literal)
let dev1 = {
    "firstName": "Pesho",
    "surName": "Petrov",
    "skills": {
        "HTML": 3,
        "CSS": 2
    }
}

let dev2 = {
    "firstName": "Maria",
    "surName": "Popova",
    "skills": {
        "Python": 3,
        "HTML": 1,
        "CSS":3
    }
}

let developers = [dev1, dev2];

function findSkilledDevs(skill, minExperience, devs) {
    let skilledDevs = [];

    for (let i = 0; i < devs.length; i++) {
        const dev = devs[i];

        // console.log( dev.skills[skill] );
        if( dev.skills[skill] && dev.skills[skill] > minExperience ){
            skilledDevs.push(dev.firstName)
        }


    }

    return skilledDevs;
}

let skilledDevs = findSkilledDevs("HTML", 2, developers);
console.log( skilledDevs);