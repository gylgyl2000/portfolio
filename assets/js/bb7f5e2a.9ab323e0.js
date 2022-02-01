"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[4905],{72770:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var m=i(83117),r=i(80102),t=(i(67294),i(3905)),a=["components"],d={sidebar_position:2},o="Trouvez la diff\xe9rence sym\xe9trique",s={unversionedId:"Algorithmes/JavaScript/freeCodeCamp/Trouvez_la_difference_symetrique",id:"Algorithmes/JavaScript/freeCodeCamp/Trouvez_la_difference_symetrique",title:"Trouvez la diff\xe9rence sym\xe9trique",description:"Learn Algorithms: Find the Symmetric Difference | freeCodeCamp.org",source:"@site/docs/Algorithmes/JavaScript/2-freeCodeCamp/Trouvez_la_difference_symetrique.mdx",sourceDirName:"Algorithmes/JavaScript/2-freeCodeCamp",slug:"/Algorithmes/JavaScript/freeCodeCamp/Trouvez_la_difference_symetrique",permalink:"/Mon_Web_Dev_Wiki/docs/Algorithmes/JavaScript/freeCodeCamp/Trouvez_la_difference_symetrique",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/Algorithmes/JavaScript/2-freeCodeCamp/Trouvez_la_difference_symetrique.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"AlgorithmesSidebar",previous:{title:"Sommaire",permalink:"/Mon_Web_Dev_Wiki/docs/Algorithmes/JavaScript/freeCodeCamp/menu"},next:{title:"Sommaire",permalink:"/Mon_Web_Dev_Wiki/docs/Algorithmes/JavaScript/GeeksforGeeks/menu"}},l=[],p={toc:l};function u(e){var n=e.components,i=(0,r.Z)(e,a);return(0,t.mdx)("wrapper",(0,m.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"trouvez-la-diff\xe9rence-sym\xe9trique"},"Trouvez la diff\xe9rence sym\xe9trique"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference"},"Learn Algorithms: Find the Symmetric Difference | freeCodeCamp.org")),(0,t.mdx)("div",{className:"algorithmes"},(0,t.mdx)("p",null,"Le terme math\xe9matique ",(0,t.mdx)("em",{parentName:"p"},"diff\xe9rence sym\xe9trique")," (",(0,t.mdx)("inlineCode",{parentName:"p"},"\u25b3")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"\u2295"),") de deux ensembles est l'ensemble des \xe9l\xe9ments qui sont dans l'un des deux ensembles\nmais pas dans les deux. Par exemple, pour les ensembles ",(0,t.mdx)("inlineCode",{parentName:"p"},"A = {1, 2, 3}")," et ",(0,t.mdx)("inlineCode",{parentName:"p"},"B = {2, 3, 4}"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"A \u25b3 B = {1, 4}"),"."),(0,t.mdx)("p",null,"La diff\xe9rence sym\xe9trique est une op\xe9ration binaire, ce qui signifie qu'elle n'op\xe8re que sur deux \xe9l\xe9ments. Ainsi, pour \xe9valuer une expression\nimpliquant des diff\xe9rences sym\xe9triques entre ",(0,t.mdx)("em",{parentName:"p"},"trois")," \xe9l\xe9ments (",(0,t.mdx)("inlineCode",{parentName:"p"},"A \u25b3 B \u25b3 C"),"), vous devez effectuer une op\xe9ration \xe0 la fois. Ainsi, pour les\nensembles ",(0,t.mdx)("inlineCode",{parentName:"p"},"A")," et ",(0,t.mdx)("inlineCode",{parentName:"p"},"B")," ci-dessus, et ",(0,t.mdx)("inlineCode",{parentName:"p"},"C = {2, 3}"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"A \u25b3 B \u25b3 C = (A \u25b3 B) \u25b3 C = {1, 4} \u25b3 {2, 3} = {1, 2, 3, 4}"),"."),(0,t.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,t.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,t.mdx)("h5",{parentName:"div"},(0,t.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,t.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Instructions")),(0,t.mdx)("div",{parentName:"div",className:"admonition-content"},(0,t.mdx)("p",{parentName:"div"},"Cr\xe9ez une fonction qui prend au moins deux tableaux et renvoie un tableau de leur diff\xe9rence sym\xe9trique. Le tableau renvoy\xe9 doit contenir\nuniquement des valeurs uniques (",(0,t.mdx)("em",{parentName:"p"},"pas de doublons"),")."))),(0,t.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,t.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,t.mdx)("h5",{parentName:"div"},(0,t.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,t.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"missions")),(0,t.mdx)("div",{parentName:"div",className:"admonition-content"},(0,t.mdx)("p",{parentName:"div"},(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 3], [5, 2, 1, 4])")," doit renvoyer ",(0,t.mdx)("inlineCode",{parentName:"p"},"[3, 4, 5]"),".",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 3], [5, 2, 1, 4])")," ne doit contenir que trois \xe9l\xe9ments.",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 3, 3], [5, 2, 1, 4])")," doit renvoyer ",(0,t.mdx)("inlineCode",{parentName:"p"},"[3, 4, 5]"),".",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 3, 3], [5, 2, 1, 4])")," ne doit contenir que trois \xe9l\xe9ments.",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 3], [5, 2, 1, 4, 5])")," doit renvoyer ",(0,t.mdx)("inlineCode",{parentName:"p"},"[3, 4, 5]"),".",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 3], [5, 2, 1, 4, 5])")," ne doit contenir que trois \xe9l\xe9ments.",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 5], [2, 3, 5], [3, 4, 5])")," doit renvoyer ",(0,t.mdx)("inlineCode",{parentName:"p"},"[1, 4, 5]"),".",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 2, 5], [2, 3, 5], [3, 4, 5])")," ne doit contenir que trois \xe9l\xe9ments.",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])")," doit renvoyer ",(0,t.mdx)("inlineCode",{parentName:"p"},"[1, 4, 5]"),".",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])")," ne doit contenir que trois \xe9l\xe9ments.",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])")," doit renvoyer ",(0,t.mdx)("inlineCode",{parentName:"p"},"[2, 3, 4 , 6, 7]"),".",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])")," ne doit contenir que cinq \xe9l\xe9ments.",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8 ], [1])")," doit renvoyer ",(0,t.mdx)("inlineCode",{parentName:"p"},"[1, 2, 4, 5, 6, 7, 8, 9]"),".",(0,t.mdx)("br",null),"\n",(0,t.mdx)("inlineCode",{parentName:"p"},"sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8 ], [1])")," ne doit contenir que huit \xe9l\xe9ments.")))))}u.isMDXComponent=!0}}]);