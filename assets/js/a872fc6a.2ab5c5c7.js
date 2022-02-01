"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[218],{10045:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var t=a(83117),s=a(80102),o=(a(67294),a(3905)),r=(a(26396),a(58215),["components"]),i={id:"Codewars-javascript_basic-fr",title:"Formation JavaScript"},l=void 0,d={unversionedId:"Codewars/JavaScript-basic/Codewars-javascript_basic-fr",id:"Codewars/JavaScript-basic/Codewars-javascript_basic-fr",title:"Formation JavaScript",description:"1. Cr\xe9ez votre premi\xe8re fonction JS helloWorld",source:"@site/docs/Codewars/2-JavaScript-basic/Codewars-javascript_basic-fr.mdx",sourceDirName:"Codewars/2-JavaScript-basic",slug:"/Codewars/JavaScript-basic/Codewars-javascript_basic-fr",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/JavaScript-basic/Codewars-javascript_basic-fr",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/Codewars/2-JavaScript-basic/Codewars-javascript_basic-fr.mdx",tags:[],version:"current",frontMatter:{id:"Codewars-javascript_basic-fr",title:"Formation JavaScript"},sidebar:"CodewarsSidebar",previous:{title:"Kata Codewars",permalink:"/Mon_Web_Dev_Wiki/docs/Codewars/Katas/codewars-kata-fr.mdx"}},m=[{value:"1. Cr\xe9ez votre premi\xe8re fonction JS <code>helloWorld</code>",id:"1-cr\xe9ez-votre-premi\xe8re-fonction-js-helloworld",children:[],level:2},{value:"2. Types de donn\xe9es de base - Nombre",id:"2-types-de-donn\xe9es-de-base---nombre",children:[],level:2},{value:"3. Types de donn\xe9es de base - Cha\xeene de caract\xe8res",id:"3-types-de-donn\xe9es-de-base---cha\xeene-de-caract\xe8res",children:[],level:2},{value:"18. Les m\xe9thodes de l\u2019objet String : <code>concat()</code>, <code>split()</code> et leur bon ami <code>join()</code>",id:"18-les-m\xe9thodes-de-lobjet-string--concat-split-et-leur-bon-ami-join",children:[],level:2}],c={toc:m};function p(e){var n=e.components,a=(0,s.Z)(e,r);return(0,o.mdx)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"1-cr\xe9ez-votre-premi\xe8re-fonction-js-helloworld"},"1. Cr\xe9ez votre premi\xe8re fonction JS ",(0,o.mdx)("inlineCode",{parentName:"h2"},"helloWorld")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript"},'Training on Training JS #1: create your first JS function and print "Helloworld!" | Codewars')),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"instructions")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"En JavaScript, votre code s'ex\xe9cute dans une fonction, compl\xe9tons pas \xe0 pas votre premi\xe8re fonction JS."),(0,o.mdx)("p",{parentName:"div"},"Regardez cet exemple :"),(0,o.mdx)("pre",{parentName:"div"},(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'  --------mot-cl\xe9 "function"\n  |       ----le nom de votre fonction  \n  |       |    ---si n\xe9cessaire, certains arguments appara\xeetront entre parenth\xe8ses\n  |       |    |\nfunction myfunc(){  ---------votre code de fonction commencera par "{"\n  // vous devez taper votre code ici\n}----------------------------se terminant par "}"\n')),(0,o.mdx)("p",{parentName:"div"},"Si nous voulons en afficher \xe0 l'\xe9cran, nous pouvons peut-\xeatre utiliser ",(0,o.mdx)("inlineCode",{parentName:"p"},"Document.write()")," sur le Web, ou utiliser ",(0,o.mdx)("inlineCode",{parentName:"p"},"alert()")," pop votre message, mais Codewars ne prend pas en charge ces m\xe9thodes, nous devrions  utiliser ",(0,o.mdx)("inlineCode",{parentName:"p"},"console.log()")," dans votre fonction. Voir cet exemple :"),(0,o.mdx)("pre",{parentName:"div"},(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'function printWordToScreen(){\n  var somewords="This is an example."\n  console.log(somewords)\n}\n')),(0,o.mdx)("p",{parentName:"div"},"Si nous ex\xe9cutons cette fonction, ",(0,o.mdx)("inlineCode",{parentName:"p"},"This is an example.")," sera visible \xe0  l'\xe9cran. Comme vous le voyez, ",(0,o.mdx)("inlineCode",{parentName:"p"},"console.log()")," est une m\xe9thode utile pour aider votre travail, vous deviendrez de plus en plus comme elle."))),(0,o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"missions")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Veuillez vous r\xe9f\xe9rer aux deux exemples ci-dessus et \xe9crivez votre premi\xe8re fonction JS."),(0,o.mdx)("ul",{parentName:"div"},(0,o.mdx)("li",{parentName:"ul"},"utilisez le mot-cl\xe9 ",(0,o.mdx)("inlineCode",{parentName:"li"},"function")," pour d\xe9finir votre fonction, le nom de la fonction doit \xeatre ",(0,o.mdx)("inlineCode",{parentName:"li"},"helloWorld")," (n'oubliez pas les () et {})."),(0,o.mdx)("li",{parentName:"ul"},"utilisez le mot-cl\xe9 ",(0,o.mdx)("inlineCode",{parentName:"li"},"var")," pour d\xe9finir une variable ",(0,o.mdx)("inlineCode",{parentName:"li"},"str"),", la valeur de ",(0,o.mdx)("inlineCode",{parentName:"li"},"str"),' doit  \xeatre une cha\xeene : "Hello World!"  (n\'oubliez pas le =).'),(0,o.mdx)("li",{parentName:"ul"},"tapez le ",(0,o.mdx)("inlineCode",{parentName:"li"},"console.log()")," dans la ligne suivante (n'oubliez pas de mettre la cha\xeene entre crochets).")),(0,o.mdx)("pre",{parentName:"div"},(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"//refer to the example and write your first JS function\n")))),(0,o.mdx)("nav",{class:"code-col"},(0,o.mdx)("div",{class:"code-col__item"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="javascript"',title:'"javascript"'},'function helloWorld() {\n   let str = "Hello World!";\n   console.log(str);\n};\n'))),(0,o.mdx)("div",{class:"code-col__item"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh",metastring:'title="console"',title:'"console"'},"\n\nHello World!\n\n")))),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/solutions"},"solutions")),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"2-types-de-donn\xe9es-de-base---nombre"},"2. Types de donn\xe9es de base - Nombre"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript"},"Training on Training JS #2: Basic data types--Number | Codewars")),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"instructions")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"En javascript, Number est l'un des types de donn\xe9es de base. Il peut \xeatre positif : ",(0,o.mdx)("inlineCode",{parentName:"p"},"1, 2, 3"),", n\xe9gatif : ",(0,o.mdx)("inlineCode",{parentName:"p"},"-1, -100"),", entier : ",(0,o.mdx)("inlineCode",{parentName:"p"},"123 456"),", d\xe9cimal : ",(0,o.mdx)("inlineCode",{parentName:"p"},"3,1415926, -8,88")," etc.",(0,o.mdx)("br",null),"\nLes nombres peuvent utiliser des op\xe9rateurs tels que ",(0,o.mdx)("inlineCode",{parentName:"p"},"+ - * / %")))),(0,o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"missions")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"J'ai \xe9crit cinq fonctions ",(0,o.mdx)("inlineCode",{parentName:"p"},"equal1 equal2 equal3 equal4 equal5"),", d\xe9finit six variables globales ",(0,o.mdx)("inlineCode",{parentName:"p"},"v1 v2 v3 v4 v5 v6"),", chaque fonction a deux variables locales ",(0,o.mdx)("inlineCode",{parentName:"p"},"a b"),", veuillez d\xe9finir la valeur appropri\xe9e pour les deux variables (s\xe9lectionnez dans v1--v6), ce qui rend la valeur de retour de ces fonctions \xe9gale \xe0 100. La fonction ",(0,o.mdx)("inlineCode",{parentName:"p"},"equal1")," est compl\xe9t\xe9e, veuillez vous r\xe9f\xe9rer \xe0 cet exemple pour compl\xe9ter les fonctions suivantes."),(0,o.mdx)("pre",{parentName:"div"},(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"var v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250\nfunction equal1(){\n  var a = v1   \n  var b = v1   \n  return a + b;\n}\n//Please refer to the example above to complete the following functions\nfunction equal2(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a - b;\n}\nfunction equal3(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a * b;\n}\nfunction equal4(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a / b;\n}\nfunction equal5(){\n  var a=   //set number value to a\n  var b=   //set number value to b\n  return a % b;\n}\n")))),(0,o.mdx)("nav",{class:"code-col"},(0,o.mdx)("div",{class:"code-col__item"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="javascript"',title:'"javascript"'},"let v1 = 50; v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250\nfunction equal1(){\n  let a = v1;\n  let b = v1;\n  return a + b;\n}\nfunction equal2(){\n  let a = v3;\n  let b = v1;\n  return a - b;\n}\nfunction equal3(){\n  let a = v1;\n  let b = v5;\n  return a * b;\n}\nfunction equal4(){\n  let a = v4;\n  let b = v5;\n  return a / b;\n}\nfunction equal5(){\n  let a = v6;\n  let b = v3;\n  return a % b;\n}\n\nconsole.log(equal1());\nconsole.log(equal2());\nconsole.log(equal3());\nconsole.log(equal4());\nconsole.log(equal5());\n"))),(0,o.mdx)("div",{class:"code-col__item"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh",metastring:'title="console"',title:'"console"'},"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n100\n100\n100\n100\n100\n")))),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/571edd157e8954bab500032d/solutions"},"solutions")),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"3-types-de-donn\xe9es-de-base---cha\xeene-de-caract\xe8res"},"3. Types de donn\xe9es de base - Cha\xeene de caract\xe8res"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript"},"Training on Training JS #3: Basic data types--String | Codewars")),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"instructions")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"En javascript, String est l'un des types de donn\xe9es de base. Utilisez ",(0,o.mdx)("inlineCode",{parentName:"p"},'""')," ou ",(0,o.mdx)("inlineCode",{parentName:"p"},"''")," pour d\xe9clarer une variable cha\xeene. Il peut s'agir de lettres : ",(0,o.mdx)("inlineCode",{parentName:"p"},"a, b, c, A, B, C"),", nombres : ",(0,o.mdx)("inlineCode",{parentName:"p"},"123..."),", symboles divers : ",(0,o.mdx)("inlineCode",{parentName:"p"},"@ # $ % ^ & *"),", symbole de contr\xf4le : ",(0,o.mdx)("inlineCode",{parentName:"p"},"\\n, \\t")," etc.",(0,o.mdx)("br",null),"\nLa cha\xeene peut utiliser les op\xe9rateurs ",(0,o.mdx)("inlineCode",{parentName:"p"},"+"),", pour connectez deux cha\xeenes ou plus ensemble."))),(0,o.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"missions")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("ul",{parentName:"div"},(0,o.mdx)("li",{parentName:"ul"},"J'ai cr\xe9\xe9 trois fonctions, et d\xe9fini quelques variables globales, veuillez s\xe9lectionner quelques variables qui peuvent constituer le nom de la fonction, et les renvoyer (veuillez noter que les lettres majuscules et minuscules sont diff\xe9rentes).")),(0,o.mdx)("pre",{parentName:"div"},(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"\nfunction Dad(){\n  // s\xe9lectionnez des variable pour combiner "Dad"\n  return ? + ? + ?;\n}\nfunction Bee(){\n  // s\xe9lectionnez des variable pour combiner "Bee"\n  return ? + ? + ?;\n}\nfunction banana(){\n  // s\xe9lectionnez des variable pour combiner "banana"\n  return ? + ? + ?;\n}\n// r\xe9pondez \xe0 quelques questions si vous avez termin\xe9 les travaux ci-dessus\nfunction answer1(){\n  // la r\xe9ponse devrait \xeatre "yes" ou "no"\n  return "";\n}\nfunction answer2(){\n  // la r\xe9ponse devrait \xeatre "yes" ou "no"\n  return "";\n}\nfunction answer3(){\n  // la r\xe9ponse devrait \xeatre "yes" ou "no"\n  return "";\n}\n')))),(0,o.mdx)("nav",{class:"code-col"},(0,o.mdx)("div",{class:"code-col__item"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js",metastring:'title="javascript"',title:'"javascript"'},'let a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n"\nfunction Dad(){\n  return d1 + a2 + d2;\n}\nfunction Bee(){\n  return b1 + e2 + e2;\n}\nfunction banana(){\n  return b2 + a2 + n2 + a2 + n2 + a2;\n}\nfunction answer1(){\n  return "no";\n}\nfunction answer2(){\n  return "no";\n}\nfunction answer3(){\n  return "yes";\n}\n\nconsole.log(Dad());\nconsole.log(Bee());\nconsole.log(banana());\nconsole.log(answer1());\nconsole.log(answer2());\nconsole.log(answer3());\n'))),(0,o.mdx)("div",{class:"code-col__item"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh",metastring:'title="console"',title:'"console"'},"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDad\nBee\nbanana\nno\nno\nyes\n")))),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/571edea4b625edcb51000d8e/solutions"},"solutions")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const Dad = () => d1 + a2 + d2\nconst Bee = () => b1 + e2 + e2\nconst banana = () => b2 + a2 + n2 + a2 + n2 + a2\nconst answer1 = () => "no"\nconst answer2 = () => "no"\nconst answer3 = () => "yes"\n')),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"18-les-m\xe9thodes-de-lobjet-string--concat-split-et-leur-bon-ami-join"},"18. Les m\xe9thodes de l\u2019objet String : ",(0,o.mdx)("inlineCode",{parentName:"h2"},"concat()"),", ",(0,o.mdx)("inlineCode",{parentName:"h2"},"split()")," et leur bon ami ",(0,o.mdx)("inlineCode",{parentName:"h2"},"join()")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript"},"Train: Training JS #18: Methods of String object--concat() split() and its good friend join() | Codewars")),(0,o.mdx)("p",null,"Cette fois, nous apprenons deux m\xe9thodes pour diviser ou fusionner une cha\xeene de caract\xe8res : ",(0,o.mdx)("inlineCode",{parentName:"p"},"split()")," et ",(0,o.mdx)("inlineCode",{parentName:"p"},"concat()"),". \xc9tudions \xe9galement un bon ami de la m\xe9thode ",(0,o.mdx)("inlineCode",{parentName:"p"},"split()")," : ",(0,o.mdx)("inlineCode",{parentName:"p"},"join()"),". C'est une ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array"},"m\xe9thode Array"),". Leur utilisation :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"StringObject.indexOf(searchvalue,fromindex)\nStringObject.lastIndexOf(searchvalue,fromindex)\nStringObject.search(searchvalue/regexp)\n")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"split()")," peut diviser une cha\xeene en plusieurs parties par un s\xe9parateur sp\xe9cifi\xe9. Le r\xe9sultat est un tableau de cha\xeene de caract\xe8res. La cha\xeene fractionn\xe9e n'inclut pas le s\xe9parateur lui-m\xeame. L'une de ses utilisations  classiques est de diviser une phrase en un tableau de mots :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"var str=\"My name is John\";\nvar words=str.split(\" \");\nconsole.log(words);\n//output:\n[ 'My', 'name', 'is', 'John' ]\n")),(0,o.mdx)("p",null,"Dans l'exemple ci-dessus, nous utilisons l'espace comme s\xe9parateur, divisant une phrase en 4 mots. Si nous sp\xe9cifions les seconds param\xe8tres, ce sera comme ceci :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"var str=\"My name is John\";\nvar words1=str.split(\" \",3);\nconsole.log(\"words1:\",words1);\nvar words2=str.split(\" \",5);\nconsole.log(\"words2:\",words2);\n\n//output:\nwords1:[ 'My', 'name', 'is' ]\nwords2:[ 'My', 'name', 'is', 'John' ]\n")),(0,o.mdx)("p",null,"Lorsque nous sp\xe9cifions un nombre inf\xe9rieur \xe0 4, le r\xe9sultat sera un nombre sp\xe9cifi\xe9 de cha\xeenes ; si le num\xe9ro de la partition est trop grand, les r\xe9sultats seront seulement les m\xeames que les r\xe9sultats par d\xe9faut."),(0,o.mdx)("p",null,"Si nous utilisons la cha\xeene vide comme s\xe9parateur, nous obtiendrons un tableau de cha\xeenes contenant chaque caract\xe8re :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"var str=\"My name is John\";\nvar words=str.split(\"\");\nconsole.log(words);\n\n//output:\n[ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]\n")),(0,o.mdx)("p",null,"Split peut utiliser des expressions r\xe9guli\xe8res pour fractionner la cha\xeene. Mais parce que nous n'avons pas appris l'utilisation des expressions r\xe9guli\xe8res, nous n'avons donc pas \xe0 apprendre cet usage."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"concat()")," peut fusionner plusieurs cha\xeenes en une cha\xeene comme celle-ci :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'var str="My".concat("name","is","John");\nconsole.log(str);\n\n//output:\nMynameisJohn\n')),(0,o.mdx)("p",null,"En fait, nous voyons rarement l'utilisation r\xe9elle de ",(0,o.mdx)("inlineCode",{parentName:"p"},"concat()"),", car nous avons un moyen plus simple qui utilise l'op\xe9rateur + :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'var str="My"+"name"+"is"+"John";\nconsole.log(str);\n\n//output:\nMynameisJohn\n')),(0,o.mdx)("p",null,"Mais m\xeame en utilisant l'op\xe9rateur +, les quatre mots ne sont pas la combinaison parfaite d'une phrase, car il n'y a pas de s\xe9parateur d'espace. Que devrions-nous faire ? Utiliser ",(0,o.mdx)("inlineCode",{parentName:"p"},"join()")," est le meilleur  choix."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"join()")," est l'op\xe9ration inverse de la m\xe9thode ",(0,o.mdx)("inlineCode",{parentName:"p"},"split()"),". Nous pouvons voir beaucoup de code dans l'utilisation r\xe9elle :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'var str="My name is John";\nvar words=str.split(" ");\nconsole.log("use split():",words);\nvar s=words.join(" ");\nconsole.log("use join():",s);\nconsole.log("use split() and join():",str.split(" ").join(" "))\n//output:\nuse split():[ \'My\', \'name\', \'is\', \'John\' ]\nuse join():My name is John\nuse split() and join():My name is John\n')),(0,o.mdx)("p",null,"Ok, la le\xe7on est termin\xe9e, faisons une t\xe2che."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"T\xe2che"),"\nImpl\xe9mentez une fonction qui accepte 2 arguments : ",(0,o.mdx)("inlineCode",{parentName:"p"},"string")," et ",(0,o.mdx)("inlineCode",{parentName:"p"},"separator"),"."),(0,o.mdx)("p",null,"L'algorithme attendu : divisez la cha\xeene en mots par des espaces, divisez chaque mot  en caract\xe8res s\xe9par\xe9s et rejoignez-les avec le ",(0,o.mdx)("inlineCode",{parentName:"p"},"separator")," sp\xe9cifi\xe9,  joignez tous les 'mots' r\xe9sultants en une phrase avec des espaces."),(0,o.mdx)("p",null,"Par exemple :"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"\nsplitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"\nsplitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"\nsplitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"\n')),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'function splitAndMerge(str, sp) {\n  return str.split(" ").map(word => word.split("").join(sp)).join(" ");\n}\n///////////\nfunction splitAndMerge(str,sp){\n  var words = str.split(" ");\n  var arr =[];\n  var res = []\n  for(i=0;i<words.length;i++){\n   arr.push(words[i].split("").join(sp));\n  }\n  res = arr.join(" ");\n  return res;\n}\n')),(0,o.mdx)("hr",null))}p.isMDXComponent=!0}}]);