class Node{
    constructor(val){
        this.value = val;
    }
    next =null;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;


function recurrence(node){
    if(node === null) return
    console.log(node.value);
    recurrence(node.next);
}

function reverse(node){
    if(node.next.next === null){
        node.next.next = node;
        return node.next;
    }else{
        const res = reverse(node.next);
        node.next.next = node;
        node.next = null;
        return res;
    }

}
function swap(arr,origin,target){
    let temp = arr[origin];
    arr[origin] = arr[target]
    arr[target] = temp;
}
const arr = [112,4,1234,342,35,123,42,0,888]
function bubbleSort(arr){
    if(arr.__proto__.constructor !== Array)return
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -i; j++) {
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
        }
        
    }
    return arr;
}


function selectSort(arr){
    if(arr.__proto__.constructor !== Array)return
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = 0;
       for (let j = 0; j < arr.length - i; j++) {
          if(arr[maxIndex] < arr[j]){
            maxIndex = j;
          }
           
       }
        swap(arr,maxIndex,arr.length -1 - i);
    }
    return arr;
}

function quickSort(arr){
    if(arr.__proto__.constructor !== Array)return
    const array = arr.concat();
    function sort(arr,begin,end){
        if(begin >= end) return;
        let left = begin;
        let right = end;

        do{
            do left++; while(left < right && arr[left] > arr[begin]);
            do right--; while(right > left && arr[right] < arr[begin]);
            if(left < right){
                swap(arr,left,right);
            }
        }while(left < right)
        let swapPoint = left === right ? right -1 : right;
        swap(arr,swapPoint,begin);
        sort(arr,begin,swapPoint);
        sort(arr,swapPoint +1 , end);
        
    }
    sort(array,0,array.length);
    return array
}

console.log(quickSort(arr))






