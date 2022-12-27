interface DoctorsModel {
    name: string
    specialty: string[]
    weekDays: string[]
}

const doctors: DoctorsModel[] = [
    {
        name: "Dr. Harriet Goddard",
        specialty: ["Urology"],
        weekDays: ["Monday", "Tuesday", "Wednesday", "Thursday"]
    },
    {
        name: "Dr. Eleanor Nicholls",
        specialty: ["Ophthalmology"],
        weekDays: ["Monday", "Tuesday", "Wednesday"]
    },
    {
        name: "Dr. Angela Trevisano",
        specialty: ["Oncology"],
        weekDays: ["Thursday"]
    },
    {
        name: "Dr. Robert Leach",
        specialty: ["Gynecology"],
        weekDays: ["Friday"]
    },
    {
        name: "Dr. Grace Brookes",
        specialty: ["Child Endocrinology", "Oncology"],
        weekDays: ["Monday", "Wednesday"]
    },
    {
        name: "Dr. Karolina Pracharova",
        specialty: ["Cardiology", "Speech Therapy"],
        weekDays: ["Monday", "Tuesday", "Wednesday"]
    },
    {
        name: "Dr. Jake Webb",
        specialty: ["Pediatrics"],
        weekDays: ["Monday", "Wednesday"]
    },
    {
        name: "Dr. Leon Butler",
        specialty: ["Dermatology", "Oncology"],
        weekDays: ["Tuesday", "Thursday"]
    },
    {
        name: "Dr. Edmond Marsden",
        specialty: ["Urology"],
        weekDays: ["Monday", "Tuesday"]
    },
    {
        name: "Dr. Curtis Rochefort",
        specialty: ["Gastroenterology", "Speech Therapy"],
        weekDays: ["Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    {
        name: "Dr. Alexandra Woods",
        specialty: ["Gastroenterology"],
        weekDays: ["Monday", "Friday"]
    },
    {
        name: "Dr. Thomas Wells",
        specialty: ["Endocrinology"],
        weekDays: ["Monday", "Friday"]
    },
    {
        name: "Dr. Alfie Adams",
        specialty: ["Geriatrics", "Urology"],
        weekDays: ["Tuesday", "Wednesday", "Thursday", "Friday"]
    },
    {
        name: "Dr. Jake Burns",
        specialty: ["Acupuncture", "Vascular"],
        weekDays: ["Monday", "Tuesday", "Friday"]
    },
    {
        name: "Dr. Efebo Luevano",
        specialty: ["Dermatology"],
        weekDays: ["Wednesday", "Thursday"]
    },
    {
        name: "Dr. Benjamin Garcia",
        specialty: ["Acupuncture", "Ophthalmology"],
        weekDays: ["Wednesday", "Thursday"]
    },
    {
        name: "Dr. Ella Price",
        specialty: ["Cardiology"],
        weekDays: ["Monday", "Wednesday", "Friday"]
    },
    {
        name: "Dr. Poppy Owen",
        specialty: ["Neurology"],
        weekDays: ["Tuesday", "Thursday"]
    },
    {
        name: "Dr. Mary Ellis",
        specialty: ["Ophthalmology"],
        weekDays: ["Wednesday", "Thursday"]
    },
    {
        name: "Dr. Mike Oster",
        specialty: ["Ophthalmology"],
        weekDays: ["Monday", "Friday"]
    },
    {
        name: "Dr. Janina Dresdner",
        specialty: ["Child Pulmonology"],
        weekDays: ["Monday", "Tuesday"]
    },
    {
        name: "Dr. Borna Stipanov",
        specialty: ["Neurology"],
        weekDays: ["Tuesday", "Friday"]
    },
    {
        name: "Dr. Alice Boyle",
        specialty: ["Child Neurology"],
        weekDays: ["Wednesday"]
    },
    {
        name: "Dr. Elizabeth Sanderson",
        specialty: ["Rheumatology", "Otolaryngology"],
        weekDays: ["Friday"]
    },
    {
        name: "Dr. Jay Carr",
        specialty: ["Orthopedics"],
        weekDays: ["Monday", "Wednesday", "Friday"]
    },
    {
        name: "Dr. Naomi Haynes",
        specialty: ["Otolaryngology"],
        weekDays: ["Monday", "Tuesday", "Thursday"]
    },
    {
        name: "Dr. Genji Yen",
        specialty: ["Orthopedics", "Cardiology"],
        weekDays: ["Monday"]
    },
    {
        name: "Dr. Edvard Frederiksen",
        specialty: ["Cardiology"],
        weekDays: ["Wednesday", "Friday"]
    },
    {
        name: "Dr. Maya Ershova",
        specialty: ["Dermatology"],
        weekDays: ["Wednesday", "Friday"]
    },
    {
        name: "Dr. Charlie Bishop",
        specialty: ["Cardiology"],
        weekDays: ["Monday", "Wednesday", "Friday"]
    },
    {
        name: "Dr. Anthony Ball",
        specialty: ["Child Neurology"],
        weekDays: ["Monday", "Wednesday", "Thursday"]
    },
    {
        name: "Dr. Summer Gray",
        specialty: ["Endocrinology"],
        weekDays: ["Tuesday", "Thursday"]
    },
    {
        name: "Dr. Adnan Andersson",
        specialty: ["Orthopedics"],
        weekDays: ["Monday", "Tuesday", "Wednesday", "Friday"]
    }
];

const specialtys: string[] = [
    "Acupuncture",
    "Cardiology",
    "Child Endocrinology",
    "Child Neurology",
    "Child Pulmonology",
    "Dermatology",
    "Endocrinology",
    "Gastroenterology",
    "Geriatrics",
    "Gynecology",
    "Neurology",
    "Ophthalmology",
    "Orthopedics",
    "Otolaryngology",
    "Pediatrics",
    "Rheumatology",
    "Speech Therapy",
    "Urology",
    "Vascular"
];

let weekDays: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];

export { doctors, specialtys, weekDays, DoctorsModel };