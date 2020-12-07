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
const b1 =new Node("b");
const c1 =new Node("c");
const d1 =new Node("d");
const e1 =new Node("e");
const f1 =new Node("f");
const g1 =new Node("g");
// const h =new Node("h");
// const j =new Node("j");
// const k =new Node("k");
// const l =new Node("l");
// const m =new Node("m");
// const r =new Node("r");
// const n =new Node("n");
// const o =new Node("o");
a1.left = c1;
a1.right = b1;
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

function compareTree(root1,root2){
    if(root1 == root2) return true;
     if(root1 === null && root2 !== null || root1 !== null && root2 === null)return false
    if(root1.value !== root2.value) return false;
 return (compareTree(root1.left,root2.left) && compareTree(root1.right,root2.right))  || (compareTree(root1.left,root2.right) && compareTree(root1.right,root2.left))

   
}
console.log(compareTree(a,a1))


