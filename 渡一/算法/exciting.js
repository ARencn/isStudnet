//数组  空间上连续，利于查找
//链表  空间上不连续，不利于查找
function show(content){
    console.log(content)
}
// class Node{
//     constructor(value){
//         this.value =value;
//     }
//     next = null;
// }

// let a = new Node(1);
// let b = new Node(2);
// let c = new Node(3);
// let d = new Node(4);
// let e = new Node(5);
// a.next = b;
// b.next =c;
// c.next = d;
// d.next =e;

// function recurrence(node){
//     if(node === null) return;
//     console.log(node.value);
//     recurrence(node.next);
// }


// function reverseLink(node){
//     if(node.next.next === null){
//         node.next.next = node;
//         return node.next
//     }else{
//         const res = reverseLink(node.next);
//         node.next.next = node;
//         node.next = null;
//         return res;
//     }
// }
// recurrence(reverseLink(a))


let arr = [1243,1234,34,12,34,2,12454,12341,1245,3]
function swap(arr,origin,target){
    [arr[origin],arr[target]] = [arr[target],arr[origin]];
}
// function bubbleSort(arr){
//     if(arr.__proto__.constructor != Array || arr.length === 0) return
//     for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j <  arr.length - i; j++) {
//            if(arr[j] < arr[j+1]){
//                 swap(arr,j,j+1);
//            }
//        } 
//     }
//     //console.log(num)
//     return arr;
// }
// show(bubbleSort(arr))


// function selectSort(arr){
//     if(arr.__proto__.constructor != Array || arr.length === 0) return
//     for (let i = 0; i < arr.length; i++) {
//         let maxIndex = 0;
//         for (let j = 0; j <  arr.length - i; j++) {
//             if(arr[maxIndex] < arr[j]){
//                 maxIndex = j;
//             }
//         }
//         swap(arr,arr.length - i - 1, maxIndex)
//     }
//     return arr
// }
// show(selectSort(arr))

// function quickSort(arr){
//     if(arr.__proto__.constructor != Array || arr.length === 0) return
//     let res = arr.concat();
//     function sort(arr,begin,end){
//         if(begin >= end) return 
//         let left = begin;
//         let right = end;
//         do {
//             do left ++; while(left <right && arr[left] > arr[begin]);
//             do right -- ;while(right > left && arr[right] < arr[begin]);
//             if(left < right){
//                 swap(arr,left,right);
//             }
//         } while (left<right);
//         let swapPoint = left === right ? right -1: right;
//         swap(arr,swapPoint,begin);
//         sort(arr,begin,swapPoint);
//         sort(arr,swapPoint + 1,end);
//     }
//     sort(res,0,res.length);
//     return res;
// }
// show(quickSort(arr))
class Tree{
    constructor(val){
        this.value = val;

    }
    left = null;
    right = null;
}
let a = new Tree('a')
let b = new Tree('b')
let c = new Tree('c')
let d = new Tree('d')
let e = new Tree('e')
let f = new Tree('f')
let g = new Tree('g')
let h = new Tree('h')
let i = new Tree('i')
let j = new Tree('j')
let k = new Tree('k')
let l = new Tree('l')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.left = h;
d.right = i;
e.left = j;

f.right = l;
l.right = k;
function recurrenceTree(root){
    if(root === null) return;
    console.log(root.value);
    recurrenceTree(root.left)
    recurrenceTree(root.right);
}

function diff(root1,root2){
    if(root1 === root2 )return true;
    if(root1 === null && root2 !== null || root1 !== null && root2 === null) return false;
    if(root1.value != root2.value) return false;
    return  diff(root1.left,root2.left) && diff(root.right,root2.right)
}

function breadthSearchTree(rootList,target){
    if(rootList === null || rootList.length === 0) return false;
    let childrenList = []
    for (let i = 0; i < rootList.length; i++) {
       if(rootList[i] === null && rootList[i].value != target){
        childrenList.push(rootList[i].left)
        childrenList.push(rootList[i].right)
       }else{
           return true;
       }
    }
   return breadthSearchTree(childrenList,target);
}


function getDeep(root){
    if(root === null) return 0;
    let left= getDeep(root.left);
    let right = getDeep(root.right);
    return Math.max(left,right) + 1;
}
function isBalance(root){
    if(root === null) return true;
    let left = getDeep(root.left);
    let right = getDeep(root.right);
    if(Math.abs(left - right) > 1){
        return false;
    }else{
        return isBalance(root.left) && isBalance(root.right)
    }
}
show(breadthSearchTree([a],'k'))