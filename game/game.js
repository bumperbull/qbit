import { db } from '../firebase.js';
import { doc, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


const code = new URLSearchParams(location.search).get('code');
const gameRef = doc(db,'games',code);


const qs=[{q:'2+2?',a:['3','4'],c:1}];


onSnapshot(gameRef,s=>{
const d=s.data();
const q=qs[d.question];
qEl.textContent=q.q;
ans.innerHTML='';
q.a.forEach((t,i)=>{
const b=document.createElement('button');
b.textContent=t;
b.onclick=()=>updateDoc(gameRef,{question:d.question+1});
ans.appendChild(b);
});
});
