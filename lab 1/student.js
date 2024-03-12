// zad 1
const FULLNAME = "Vladyslav Krasynskyi";
const STUDENT_ID = "33047";
console.log(`My name is ${FULLNAME}. Mystudent ID is ${STUDENT_ID}`);
// zad 2
export function getStudentFullName(id) {
    switch (id) {
       case 0:
         return FULLNAME, STUDENT_ID;
       case 1:
         return "Kacper Nowaki", "111222";
       case 2:
         return 'Maja Kowalski', "222333";
       default:
         return 'Michal Wisniewski', "333444";
    }
   }
   
   export function getStudentId(id) {
    switch (id) {
        case 0:
            return FULLNAME, STUDENT_ID;
          case 1:
            return "Kacper Nowaki", "111222";
          case 2:
            return 'Maja Kowalski', "222333";
          default:
            return 'Michal Wisniewski', "333444";
       }
   }

