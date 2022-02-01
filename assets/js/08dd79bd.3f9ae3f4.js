"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[517],{62721:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return r},contentTitle:function(){return t},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var o=i(87462),s=i(63366),m=(i(67294),i(3905)),a=(i(9877),i(58215),i(56222),["components"]),r={sidebar_position:1},t="Clash of code",d={unversionedId:"CodinGame/Clash_of_code/clash",id:"CodinGame/Clash_of_code/clash",title:"Clash of code",description:"Division enti\xe8re du maximum divis\xe9 par le minimum",source:"@site/docs/CodinGame/Clash_of_code/clash.mdx",sourceDirName:"CodinGame/Clash_of_code",slug:"/CodinGame/Clash_of_code/clash",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/Clash_of_code/clash",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/CodinGame/Clash_of_code/clash.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"CodinGameSidebar",previous:{title:"Fi\xe8vre du porc-\xe9pic",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic"}},l=[{value:"Division enti\xe8re du maximum divis\xe9 par le minimum",id:"division-enti\xe8re-du-maximum-divis\xe9-par-le-minimum",children:[],level:2}],u={toc:l};function c(e){var n=e.components,i=(0,s.Z)(e,a);return(0,m.mdx)("wrapper",(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"clash-of-code"},"Clash of code"),(0,m.mdx)("h2",{id:"division-enti\xe8re-du-maximum-divis\xe9-par-le-minimum"},"Division enti\xe8re du maximum divis\xe9 par le minimum"),(0,m.mdx)("p",null,"Trouvez le maximum et le minimum d'une liste de nombres positifs et retournez la division enti\xe8re du maximum divis\xe9 par le minimum."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Entr\xe9e")),(0,m.mdx)("p",null,"Ligne 1 : N nombres s\xe9par\xe9s par un espace."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Sortie")),(0,m.mdx)("p",null,"Le plancher du maximum divis\xe9 par le minimum des nombres donn\xe9s."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Contraintes")),(0,m.mdx)("p",null,"Chaque nombre est diff\xe9rent de 0"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Exemple")),(0,m.mdx)("p",null,"Entr\xe9e : 5 1 3 4 8"),(0,m.mdx)("p",null,"Sortie : 8"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n* Le code g\xe9n\xe9r\xe9 automatiquement ci-dessous vise \xe0 vous aider \xe0 analyser\n* l'entr\xe9e standard selon l'\xe9nonc\xe9 du probl\xe8me.\n**/\nconst numbers = readline().split` `.map(x=>+x);\n\n// \xc9crivez une r\xe9ponse en utilisant console.log()\n// Pour d\xe9boguer : console.error('Messages de d\xe9bogage...');\nconsole.log(Math.floor(Math.max(...numbers)/Math.min(...numbers)));\n")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="mon essai non r\xe9ussi"',title:'"mon',essai:!0,non:!0,'r\xe9ussi"':!0},"/**\n * Auto-generated code below aims at helping you parse\n * the standard input according to the problem statement.\n **/\n\nconst numbers = readline();\nlet min = numbers[0];\nlet max = numbers[0];\nfor (i = 0; i > numbers.length; i++) {\n    if (numbers[i] < min) {\n        min = numbers[i]\n    }\n    if (numbers[i] > max) {\n        max = numbers[i]\n    }\n}\nlet answer = max / min;\n// Write an answer using console.log()\n// To debug: console.error('Debug messages...');\n\nconsole.log('answer');\n")))}c.isMDXComponent=!0}}]);