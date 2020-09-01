class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// function reverse(root) {
//   if (root.next.next == null) {
//     root.next.next = root;
//     return root.next;
//   } else {
//     let result = reverse(root.next);
//     root.next.next = root;
//     root.next = null;
//     return result;
//   }
// }
//const re = reverse(a);

recurrence(a);
//console.log(a)
function recurrence(root) {
  if (root.next == null) return;

  console.log(root.value);
  recurrence(root.next);
}
//     console.log(root.value);
//     recurrence(root.next,prefix);

// }
// recurrence(a,null);

// 0.051

//0.045

// if while condition is true consume 0.06 second
// but while condition is temp.next != null consume 0.051
// function each(root){
//     let temp = root;
//     while(temp.next != null){
//         console.log(temp.value);
//             temp = temp.next;

//     }
// }
// each(a)
