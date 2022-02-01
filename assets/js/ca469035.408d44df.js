"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[5220],{86929:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return d},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=n(83117),s=n(80102),m=(n(67294),n(3905)),t=(n(26396),n(58215),["components"]),d={id:"8-kyu-Somme_des_carres"},i="Somme des carr\xe9s(n)",o={unversionedId:"Codewars/Katas/8-kyu-Somme_des_carres",id:"Codewars/Katas/8-kyu-Somme_des_carres",title:"Somme des carr\xe9s(n)",description:"Training on Square(n) Sum | Codewars",source:"@site/docs/Codewars/1-Katas/8-kyu-Somme_des_carres.mdx",sourceDirName:"Codewars/1-Katas",slug:"/Codewars/Katas/8-kyu-Somme_des_carres",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/Katas/8-kyu-Somme_des_carres",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/Codewars/1-Katas/8-kyu-Somme_des_carres.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"8-kyu-Somme_des_carres"},sidebar:"CodewarsSidebar",previous:{title:"Pair ou impair",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/Katas/8-kyu-Pair_ou_impair"},next:{title:"Kata Codewars",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/Katas/codewars-kata-fr.mdx"}},u=[],c={toc:u};function p(e){var a=e.components,n=(0,s.Z)(e,t);return(0,m.mdx)("wrapper",(0,r.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"somme-des-carr\xe9sn"},"Somme des carr\xe9s(n)"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript"},"Training on Square(n) Sum | Codewars")),(0,m.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,m.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,m.mdx)("h5",{parentName:"div"},(0,m.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,m.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Instructions")),(0,m.mdx)("div",{parentName:"div",className:"admonition-content"},(0,m.mdx)("p",{parentName:"div"},"Compl\xe9tez la fonction ",(0,m.mdx)("inlineCode",{parentName:"p"},"squareSum")," de mani\xe8re \xe0 ce qu'elle \xe9l\xe8ve au carr\xe9 chaque nombre qui y est pass\xe9, puis additionne les r\xe9sultats."),(0,m.mdx)("p",{parentName:"div"},"Par exemple, pour ",(0,m.mdx)("inlineCode",{parentName:"p"},"[1, 2, 2]"),", il devrait renvoyer ",(0,m.mdx)("inlineCode",{parentName:"p"},"9")," car ",(0,m.mdx)("inlineCode",{parentName:"p"},"1^2 + 2^2 + 2^2 = 9"),"."))),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"function squareSum(numbers){\n  let sum = 0;\n  for (let num of numbers) {\n    sum += num * num;\n  }\n  return sum;\n}\n")),(0,m.mdx)("nav",{className:"docs-nav"},(0,m.mdx)("div",{className:"docs-nav-code"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Exemples de tests"',title:'"Exemples',de:!0,'tests"':!0},"console.log(squareSum([1,2])\nconsole.log(squareSum([0, 3, 4, 5])\n"))),(0,m.mdx)("div",{className:"docs-nav-html"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="console"',title:'"console"'},"5\n50\n")))),(0,m.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,m.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,m.mdx)("h5",{parentName:"div"},(0,m.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,m.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"autres solutions")),(0,m.mdx)("div",{parentName:"div",className:"admonition-content"},(0,m.mdx)("pre",{parentName:"div"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"function squareSum(numbers){\n  return numbers.reduce(function(sum, n){\n    return (n*n) + sum;\n  }, 0)\n}\n")),(0,m.mdx)("pre",{parentName:"div"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"function squareSum(numbers){\n  return numbers.reduce((sum,num) => sum + (num * num), 0);\n}\n")),(0,m.mdx)("pre",{parentName:"div"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"function squareSum(numbers){\n  var sum = 0;\n  numbers.forEach(function(n) {\n    sum += n * n\n  });\n  return sum;\n}\n")),(0,m.mdx)("pre",{parentName:"div"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"function squareSum(numbers){\n  var result = 0;\n  for (var i = 0; i < numbers.length; i++) {\n    result += (numbers[i] * numbers[i]);\n  }\n  return result;\n}\n")),(0,m.mdx)("pre",{parentName:"div"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)\n")),(0,m.mdx)("pre",{parentName:"div"},(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"function squareSum(numbers){\n  return numbers.reduce(function(p, c) { return p + Math.pow(c, 2); }, 0);\n}\n")))))}p.isMDXComponent=!0}}]);