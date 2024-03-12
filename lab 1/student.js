// zad 1
const FULLNAME = "Vladyslav Krasynskyi";
const STUDENT_ID = "33047";
console.log(`My name is ${FULLNAME}. Mystudent ID is ${STUDENT_ID}`);
// zad 2
export function getStudentFullName(id) {
    switch (id) {
       case 0:
         return FULLNAME;
       case 1:
         return "Kacper Nowaki";
       case 2:
         return 'Maja Kowalski';
       default:
         return 'Michal Wisniewski';
    }
   }
   
   export function getStudentId(id) {
    switch (id) {
        case 0:
            return STUDENT_ID;
          case 1:
            return "111222";
          case 2:
            return "222333";
          default:
            return "333444";
       }
   }

