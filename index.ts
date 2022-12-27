import prompt from "prompt-sync";
import { doctors, specialtys, weekDays, DoctorsModel } from "./data";

const keyboard: Function = prompt();

console.log("| ---------------------------- |");
console.log("|       Medical Schedule       |");
console.log("| ---------------------------- |");

handleOptions();

function handleOptions(): void {
    console.log("| What do you wanna do?        |");
    console.log("| 1. Show all                  |");
    console.log("| 2. Show by doctor            |");
    console.log("| 3. Show by specialty         |");
    console.log("| 4. Show by week day          |");
    console.log("| 5. Quit                      |");
    
    const optionValidation: string[] = ["1", "2", "3", "4", "5"];
    let option: string = keyboard("| Choose (1/2/3/4/5) : ");
    while(!optionValidation.includes(option)){
        console.log("| ------");
        console.log("| ------");
        console.log("| ------");
        console.log("| Invalid option. Try again    |");
        option = keyboard("| Choose (1/2/3/4/5) : ");
    };
    
    switch(option){
        case "1":
            doctors.map(doc => {
                console.log("|----------------");
                console.log(`| Name: ${doc.name}`);
                console.log(`| Specialty: ${(doc.specialty).toString().replace(/,/g, ", ")}`);
                console.log(`| Days: ${doc.weekDays.toString().replace(/,/g,", ")}`);
                console.log("|----------------");
            });
            console.log("|----------------");
            console.log("| ------");
            console.log("| ------");
            console.log("| ------");
            handleOptions();
            break;
        case "2":
            doctors.map((doc, i) => {
                console.log("|----------------");
                console.log(`| ${i+1}. ${doc.name}`);
            });
            console.log("|----------------");
            console.log("| ------");
            console.log("| ------");
            console.log("| ------");
            let docOption: string = keyboard("Choose the doctor by typing his respective number: ");
            while(+docOption < 1 || +docOption > doctors.length || isNaN(+docOption)){
                console.log("| ------");
                console.log("| ------");
                console.log("| ------");
                console.log("| Invalid option. Try again    |");
                docOption = keyboard("Choose the doctor by typing his respective number: ");
            };
            console.log("| ------");
            console.log("| ------");
            console.log("| ------");
            console.log("|----------------");
            console.log(`| Name: ${doctors[+docOption-1].name}`);
            console.log(`| Specialty: ${(doctors[+docOption-1].specialty).toString().replace(/,/g, ", ")}`);
            console.log(`| Days: ${doctors[+docOption-1].weekDays.toString().replace(/,/g,", ")}`);
            console.log("|----------------");
            console.log("| ------");
            console.log("| ------");
            console.log("| ------");
            handleOptions();
            break;
        case "3":
            specialtys.map((spec, i) => {
                console.log("|----------------");
                console.log(`| ${i+1}. ${spec}`);
            });
            console.log("|----------------");
            console.log("| ------");
            console.log("| ------");
            console.log("| ------");
            let specOption: string = keyboard("Choose the specialty by typing his respective number: ");
            while(+specOption < 1 || +specOption > specialtys.length || isNaN(+specOption)){
                console.log("| ------");
                console.log("| ------");
                console.log("| ------");
                console.log("| Invalid option. Try again    |");
                specOption = keyboard("Choose the specialty by typing his respective number: ");
            }
            findDocBySpec(+specOption)
            handleOptions();
            break;
        case "4":
            weekDays.map((day, i) => {
                console.log("|----------------");
                console.log(`| ${i+1}. ${day}`);
                console.log("|----------------");
            });
            let dayOption: string = keyboard("Choose the day by typing his respective number: ")
            while(+dayOption < 1 || +dayOption > weekDays.length || isNaN(+dayOption)){
                console.log("| ------");
                console.log("| ------");
                console.log("| ------");
                console.log("| Invalid option. Try again    |");
                dayOption = keyboard("Choose the day by typing his respective number: ");
            }
            findDocByDay(+dayOption)
            handleOptions();
            break;
        case "5":
            console.clear();
            console.log("|------------------|");
            console.log("| Program finished |");
            console.log("|------------------|");
            break;
    };
};

function findDocBySpec(i: number): void {
    let specChoice: string = specialtys[i-1];
    let filteredDocs: DoctorsModel[] = doctors.filter(doc => doc.specialty.includes(specChoice));
    filteredDocs.map(doc => {
        console.log("|----------------");
        console.log(`| Name: ${doc.name}`);
        console.log(`| Days: ${doc.weekDays.toString().replace(/,/g,", ")}`);
        console.log("|----------------");
    });
};

function findDocByDay(i: number): void {
    let dayChoice: string = weekDays[i-1];
    let filteredDocs: DoctorsModel[] = doctors.filter(doc => doc.weekDays.includes(dayChoice));
    filteredDocs.map(doc => {
        console.log("|----------------");
        console.log(`| Name: ${doc.name}`);
        console.log(`| Specialty: ${(doc.specialty).toString().replace(/,/g, ", ")}`);
        console.log("|----------------");
    });
};