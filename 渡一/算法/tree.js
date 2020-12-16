class Node {
    constructor(val){
        this.value = val;

    }
    left = null;
    right = null;
}

const a =new Node("a");
const b =new Node("b");
const c =new Node("c");
const d =new Node("d");
const e =new Node("e");
const f =new Node("f");
const g =new Node("g");
// const h =new Node("h");
// const j =new Node("j");
// const k =new Node("k");
// const l =new Node("l");
// const m =new Node("m");
// const r =new Node("r");
// const n =new Node("n");
// const o =new Node("o");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
// d.left = h;
// d.right = j;
// e.left = k;
// e.right = l;
// f.left = m;
// f.right =r;
// g.left = n;
// g.right = o;


const a1 =new Node("a");
const b1 =new Node("b1");
const c1 =new Node("c");
const d1 =new Node("d");
const e1 =new Node("e1");
const f1 =new Node("f");
const g1 =new Node("g");
// const h =new Node("h");
// const j =new Node("j");
// const k =new Node("k");
// const l =new Node("l");
// const m =new Node("m");
// const r =new Node("r");
 const n =new Node("n");
 const o =new Node("o");
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.left = f1;
c1.right = g1;


function preorder(node){
    if(node === null) return;
    console.log(node.value);
    preorder(node.left);
    preorder(node.right)
}

function preorderInorderRestore(postorder,inorder){
    if(postorder === null || inorder === null || postorder.length === 0 || inorder.length === 0 || postorder.length != inorder.length) return null;
    let root = new Node(postorder[postorder.length - 1]);
    let index = inorder.indexOf(root.value);
    console.log(index)
    let postLeft = postorder.slice(0,index);
    let inLeft = inorder.slice(0,index);

    let postRight =  postorder.slice(index,postorder.length - 1);
    let inRight = inorder.slice(index + 1,inorder.length);
    root.left = preorderInorderRestore(postLeft,inLeft);
    root.right = preorderInorderRestore(postRight,inRight)
    return root;
}
// console.log(preorderInorderRestore(['d','e','b','f','g','c','a'],['d','b','e','a','f','c','g']))

function depthSearchTree(root,target){
    if(root ===null) return null;
    console.log(root.value)
    if(root.value === target){
        return root;
    }
   let left = depthSearchTree(root.left,target);
   let right =  depthSearchTree(root.right,target);
   return left  || right;
}


function breadthSearchTree(rootList,target){
    if(rootList === null &&rootList.length === 0) return null;
    let children = [];
    for (let i = 0; i < rootList.length; i++) {
        if(rootList[i] === null) return null
        console.log(rootList[i].value)
        if(rootList[i] !=null && rootList[i].value === target){
            return rootList[i];
        }else{
            children.push(rootList[i].left);
            children.push(rootList[i].right);
        }
    }
    return  breadthSearchTree(children,target)
     
}
function compare(tree1,tree2){
    if(tree1 === tree2) return true
    if(tree1 === null && tree2 !== null || tree1 !==null && tree2 === null) return 
    if(tree1.value != tree2.value) return false
    return compare(tree1.left,tree2.left) && compare(tree1.right,tree2.right)
}

let diffList =[];
function compareTree(root1,root2,diffList = []){
    if(root1 === root2) return diffList;
    if(root1 === null && root2 !== null){
        diffList.push({type:'新增',origin:root1,modified:root2});
        return diffList
    }else if(root1 !== null && root2 === null){
        diffList.push({type:'删除',origin:root1,modified:root2});
        return diffList
    }
    if(root1.value != root2.value){
        diffList.push({type:'修改',origin:root1,modified:root2});
    }
       compareTree(root1.left,root2.left,diffList) 
       compareTree(root1.right,root2.right,diffList);
    
    return diffList
}

// console.log(compareTree(a,a1,[]))


function addNode(root,num){
    if(root.value === num) return;
    if(root.value < num) {
        if(root.right === null) root.right = new Node(num);
        else addNode(root.right,num);
    }else{
        if(root.left === null) root.left = new Node(num);
        else addNode(root.left,num);
    }
}

function buildSearchTree(arr){
    if(arr.length === 0 || arr === null) return;
    let root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root,arr[i])
    }
    return root;
}

function generatedArray(num){
    let arr = [];
    for (let i = 0; i < num; i++) {
       arr.push(Math.floor(Math.random() * 10000) )
    }
    return arr
}
function searchForTree(target){
    let root = buildSearchTree(generatedArray(1000));
    function search(root,target){
        if(root === null) return false;
        if(root.value === target) return true;
        if(root.value < target){
         return  search(root.right,target);
        }else{
         return search(root.left,target);
        }
    }
    return search(root,target)
}

function getDeep(node){
    if(node ==null )return 0
    let left = getDeep(node.left)
    let right =getDeep(node.right)
    return Math.max(left,right) + 1
}
function isBalance(node){
    if(node === null) return true
    let left = getDeep(node.left)
    let right =getDeep(node.right)
    if(Math.abs(left - right) > 1){
        return false
    }else{
        return isBalance(node.left) && isBalance(node.right)
    }
}
const node2 = new Node('2')
const node5 = new Node('5')
const node3 = new Node('3')
const node6 = new Node('6')

node2.right = node5
node5.left = node3
node5.right = node6



function change(root){
    if(isBalance(root)) return root
    console.log(root.left);
    if(root.left !== null){ root.left = change(root.left)}
    if(root.right !== null){ root.right = change(root.right)}
    let leftDeep = getDeep(root.left)
    let rightDeep= getDeep(root.right)
    if(Math.abs(leftDeep - rightDeep) < 2){
        return true
    }else if(leftDeep < rightDeep){
        let newRoot = root.right;
        let changeTree = root.right.left;
        root.right = changeTree;
        newRoot.left = root;
        return newRoot
    }else{
        let newRoot = root.left;
        let changeTree = root.left.right;
        root.left = changeTree;
        newRoot.right = root
        return newRoot
    }
}
console.log(isBalance(change(node2)));

