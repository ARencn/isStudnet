class Node{
    constructor(value){
        this.value = value;
    }
    left=null;
    right=null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left =b;
a.right =c;
b.left = d;
b.right = e;
c.left = f;

//根据
// let arr =[]
function f1(node){
    if(node === null) return;
    console.log(node.value);
    f1(node.left);
    f1(node.right);
}
 //f1(a)
//  console.log(arr)
function f2(node){
    if(node === null) return;
    f2(node.left);
    console.log(node.value);
    f2(node.right);
}
// f2(a)
//
function f3(node){
    if(node === null) return;
    f3(node.left);
    f3(node.right);
    console.log(node.value);
}
 //f3(a)


function inorderPreorderRestoreTree(preorder,inorder){
    if(preorder === null || inorder === null || preorder.length === 0 || inorder === 0|| preorder.length !== inorder.length )return null;
    let root = new Node( preorder[0]);
    let index = inorder.indexOf(root.value);
    let preLeft = preorder.slice(1,index + 1);
    let inLeft = inorder.slice(0,index);
    let preRight = preorder.slice(index + 1,preorder.length);
    let inRight = inorder.slice(index,inorder.length);
    root.left = inorderPreorderRestoreTree(preLeft,inLeft);
    root.right = inorderPreorderRestoreTree(preRight,inRight)
    return root
}
// const res = inorderPreorderRestoreTree([ 'a', 'b', 'd', 'e', 'c', 'f' ],[ 'd', 'b', 'e', 'a', 'f', 'c' ])
// console.log(res.left,res.right)

function postorderInorderRestoreTree(inorder,postorder){
    if(postorder === null || inorder === null || postorder.length === 0 || inorder === 0  || postorder.length !== inorder.length)return null;
    let root = new Node(postorder[postorder.length - 1]);
    console.log(root.value)
    let index = inorder.indexOf(root.value);

    let inLeft = inorder.slice(0,index);
    let postLeft = postorder.slice(0,index);
    let inRight = inorder.slice(index + 1,inorder.length);
    let postRight = postorder.slice(index,postorder.length - 1);

    root.left = postorderInorderRestoreTree(inLeft,postLeft);
    root .right = postorderInorderRestoreTree(inRight,postRight);
    return root;

}
//  const res = postorderInorderRestoreTree([ 'd', 'b', 'e', 'a', 'f', 'c' ],[ 'd', 'e', 'b', 'f', 'c', 'a' ])
//  console.log(res.left,res.right)


function  depthSearchTree(root,target){
    if(root === null) return
    if(root.value === target){
        return root
    }
        let left = depthSearchTree(root.left,target);
       let right = depthSearchTree(root.right,target)
    return left || right
}
// const res = depthSearchTree(a,'f');
// console.log(res)

 function breadthSearchTree(rootList,target){
     if( rootList === null || rootList.length === 0) return null;
     let childrenList = []
     for (let i = 0; i < rootList.length; i++) {
         if(rootList[i] === null) return
         if(rootList[i] !== null && rootList[i].value === target){
             return rootList[i]
         }else{
            childrenList.push(rootList[i].left)
            childrenList.push(rootList[i].right)
         }
     }
     return breadthSearchTree(childrenList,target)
     
 }
 const res = breadthSearchTree([a],'f');
 console.log(res)
 

