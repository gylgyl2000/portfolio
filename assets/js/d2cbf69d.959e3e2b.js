"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[4600],{78701:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var i=t(83117),s=t(80102),a=(t(67294),t(3905)),r=(t(26396),t(58215),t(56222),["components"]),o={sidebar_position:3},u="La descente",l={unversionedId:"CodinGame/algorithmes/puzzles_classiques-facile/la_descente",id:"CodinGame/algorithmes/puzzles_classiques-facile/la_descente",title:"La descente",description:"S'entra\xeener avec l'exercice \"La descente\" sur les sujets suivants : Boucles",source:"@site/docs/CodinGame/algorithmes/puzzles_classiques-facile/la_descente.mdx",sourceDirName:"CodinGame/algorithmes/puzzles_classiques-facile",slug:"/CodinGame/algorithmes/puzzles_classiques-facile/la_descente",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/algorithmes/puzzles_classiques-facile/la_descente",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/CodinGame/algorithmes/puzzles_classiques-facile/la_descente.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"CodinGameSidebar",previous:{title:"Chevaux de course",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/algorithmes/puzzles_classiques-facile/chevaux_de_course"},next:{title:"Fi\xe8vre du porc-\xe9pic",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic"}},d=[{value:"\xc9nonc\xe9",id:"\xe9nonc\xe9",children:[{value:"Histoire",id:"histoire",children:[],level:3},{value:"Objectif",id:"objectif",children:[],level:3},{value:"R\xe8gles",id:"r\xe8gles",children:[],level:3},{value:"Conditions de victoire",id:"conditions-de-victoire",children:[],level:3},{value:"Conditions de d\xe9faite",id:"conditions-de-d\xe9faite",children:[],level:3},{value:"Entr\xe9es du jeu",id:"entr\xe9es-du-jeu",children:[],level:3}],level:2}],m={toc:d};function c(e){var n=e.components,o=(0,s.Z)(e,r);return(0,a.mdx)("wrapper",(0,i.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"la-descente"},"La descente"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://www.codingame.com/training/easy/the-descent"},"S'entra\xeener avec l'exercice \"La descente\" sur les sujets suivants : Boucles")),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:t(62302).Z})),(0,a.mdx)("h2",{id:"\xe9nonc\xe9"},"\xc9nonc\xe9"),(0,a.mdx)("p",null,"Un probl\xe8me simple pour exp\xe9rimenter la plateforme CodinGame : votre programme doit trouver la montagne la plus haute parmi une liste de\nmontagnes."),(0,a.mdx)("h3",{id:"histoire"},"Histoire"),(0,a.mdx)("p",null,"Le ",(0,a.mdx)("em",{parentName:"p"},"vaisseau Destiny")," est en danger : attir\xe9 vers le bas, il risque de s'\xe9craser contre les montagnes d'une plan\xe8te inconnue. Aidez Rick \xe0\nd\xe9truire les montagnes... sauvez le ",(0,a.mdx)("em",{parentName:"p"},"Destiny")," !"),(0,a.mdx)("h3",{id:"objectif"},"Objectif"),(0,a.mdx)("p",null,"\xc9crivez le programme permettant de d\xe9truire les montagnes pour pouvoir att\xe9rir. Pour cela, tirez sur la montagne la plus haute."),(0,a.mdx)("h3",{id:"r\xe8gles"},"R\xe8gles"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Au d\xe9but de chaque tour de jeu"),", vous recevez en entr\xe9e la hauteur de chaque montagne de gauche \xe0 droite.",(0,a.mdx)("br",null),"\n",(0,a.mdx)("strong",{parentName:"p"},"Avant la fin du tour de jeu"),", vous devez indiquer la montagne la plus haute pour tirer dessus."),(0,a.mdx)("p",null,"Tirer sur une montagne ne fera qu'en d\xe9truire une partie. Votre vaisseau descend \xe0 chaque passe."),(0,a.mdx)("h3",{id:"conditions-de-victoire"},"Conditions de victoire"),(0,a.mdx)("p",null,"Vous gagnez si vous d\xe9truisez la montagne la plus haute \xe0 chaque tour."),(0,a.mdx)("h3",{id:"conditions-de-d\xe9faite"},"Conditions de d\xe9faite"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Votre vaisseau percute une montagne"),(0,a.mdx)("li",{parentName:"ul"},"Vous fournissez une sortie invalide ou votre programme ne r\xe9ponds pas \xe0 temps")),(0,a.mdx)("h3",{id:"entr\xe9es-du-jeu"},"Entr\xe9es du jeu"),(0,a.mdx)("p",null,"Le programme doit lire depuis l'entr\xe9e standard la hauteur des montagnes puis fournir sur la sortie standard l'indice de la montagne \xe0\nd\xe9truire."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Entr\xe9es pour un tour de jeu")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"8 lignes")," : un entier ",(0,a.mdx)("inlineCode",{parentName:"p"},"mountainH")," par ligne. Il repr\xe9sente la hauteur d'une montagne. Les hauteurs des montagnes sont donn\xe9es dans l'ordre de\nleur index (allant de 0 \xe0 7)."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Sortie pour un tour de jeu")),(0,a.mdx)("p",null,"Une ",(0,a.mdx)("strong",{parentName:"p"},"unique ligne")," contenant le num\xe9ro de la montagne sur laquelle tirer."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Contraintes")),(0,a.mdx)("p",null,"0 \u2264 ",(0,a.mdx)("inlineCode",{parentName:"p"},"mountainH")," \u2264 9",(0,a.mdx)("br",null),"\nTemps de r\xe9ponse pour un tour \u2264 100ms"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * La boucle while repr\xe9sente le jeu.\n * Chaque it\xe9ration repr\xe9sente un tour de jeu\n * o\xf9 vous sont donn\xe9s les entr\xe9es (les hauteurs des montagnes)\n * et o\xf9 il faut imprimer une sortie (l'index de la montagne sur laquelle tirer).\n * Les saisies qui vous sont donn\xe9es sont automatiquement mises \xe0 jour en fonction de vos derni\xe8res actions.\n **/\n\n// boucle de jeu\nlet tir = 0;\nwhile (true) {\nlet plusHaute = 0;\n    for (let i = 0; i < 8; i++) {\n        const mountainH = parseInt(readline()); // repr\xe9sente la hauteur d'une montagne.\n        if (mountainH > plusHaute) {\n            tir = i;\n            plusHaute = mountainH;\n        }\n    }    \n    // \xc9crire une action en utilisant console.log()\n    // Pour d\xe9boguer : console.error('Messages de d\xe9bogage...');\n    console.log(tir);     // L'indice de la montagne sur laquelle tirer.\n}\n")),(0,a.mdx)("iframe",{width:"100%",height:"600px",src:"https://www.codingame.com/replay/118703364"}))}c.isMDXComponent=!0},62302:function(e,n,t){n.Z=t.p+"assets/images/121_Descent_Kirks_Quest_LD-compressor-c3699bf09ab7a538f053b4b2c226f220.jpg"}}]);