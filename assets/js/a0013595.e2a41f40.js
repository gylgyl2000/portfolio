"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[3575],{32628:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return d},default:function(){return m}});var t=a(87462),i=a(63366),s=(a(67294),a(3905)),r=(a(9877),a(58215),a(56222),["components"]),l={sidebar_position:2},c="Fi\xe8vre du porc-\xe9pic",o={unversionedId:"CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic",id:"CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic",title:"Fi\xe8vre du porc-\xe9pic",description:"S'entra\xeener avec l'exercice \"Porcupine Fever\" sur les sujets suivants : Boucles",source:"@site/docs/CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic.mdx",sourceDirName:"CodinGame/algorithmes/puzzles_classiques-moyen",slug:"/CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/CodinGame/algorithmes/puzzles_classiques-moyen/fievre_du_porc-epic.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"CodinGameSidebar",previous:{title:"La descente",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/algorithmes/puzzles_classiques-facile/la_descente"},next:{title:"Clash of code",permalink:"/Mon_Web_Dev_Wiki/docs/CodinGame/Clash_of_code/clash"}},d=[{value:"\xc9nonc\xe9",id:"\xe9nonc\xe9",children:[{value:"Objectif",id:"objectif",children:[],level:3},{value:"Entr\xe9e",id:"entr\xe9e",children:[],level:3},{value:"Sortie",id:"sortie",children:[],level:3},{value:"Contraintes",id:"contraintes",children:[],level:3},{value:"Exemple",id:"exemple",children:[],level:3}],level:2}],p={toc:d};function m(e){var n=e.components,l=(0,i.Z)(e,r);return(0,s.mdx)("wrapper",(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"fi\xe8vre-du-porc-\xe9pic"},"Fi\xe8vre du porc-\xe9pic"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://www.codingame.com/training/medium/porcupine-fever"},"S'entra\xeener avec l'exercice \"Porcupine Fever\" sur les sujets suivants : Boucles")),(0,s.mdx)("p",null,(0,s.mdx)("img",{src:a(96922).Z,width:"1920",height:"1080"})),(0,s.mdx)("h2",{id:"\xe9nonc\xe9"},"\xc9nonc\xe9"),(0,s.mdx)("h3",{id:"objectif"},"Objectif"),(0,s.mdx)("p",null,"Vous avez pour passe-temps de visiter une ferme de porcs-\xe9pics. Les porcs-\xe9pics sont \xe9lev\xe9s dans des cages et nourris r\xe9guli\xe8rement. Ils\nsont g\xe9n\xe9ralement en bonne sant\xe9 et ont \xe9t\xe9 l'un des rongeurs ayant la plus longue dur\xe9e de vie, mais ",(0,s.mdx)("strong",{parentName:"p"},"certains de ces porcs-\xe9pics sont\nmalades"),"."),(0,s.mdx)("p",null,"Chaque ann\xe9e, chaque porc-\xe9pic qui \xe9tait malade l'ann\xe9e derni\xe8re ",(0,s.mdx)("strong",{parentName:"p"},"rendra malade 2 porcs-\xe9pics sains")," dans la m\xeame cage, puis ",(0,s.mdx)("strong",{parentName:"p"},"mourra"),"."),(0,s.mdx)("p",null,"Simulez pour trouver le ",(0,s.mdx)("strong",{parentName:"p"},"nombre total")," de porcs-\xe9pics survivants apr\xe8s chaque ann\xe9e. Arr\xeatez si tous les porcs-\xe9pics sont morts (ne\nr\xe9p\xe9tez pas les ",(0,s.mdx)("strong",{parentName:"p"},'"0"')," apr\xe8s la premi\xe8re fois)."),(0,s.mdx)("h3",{id:"entr\xe9e"},"Entr\xe9e"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Ligne 1")," : Entier ",(0,s.mdx)("inlineCode",{parentName:"p"},"N"),", le nombre de cages.",(0,s.mdx)("br",null),"\n",(0,s.mdx)("strong",{parentName:"p"},"Ligne 2")," : Entier ",(0,s.mdx)("inlineCode",{parentName:"p"},"Y"),", le nombre d'ann\xe9es.",(0,s.mdx)("br",null),"\n",(0,s.mdx)("strong",{parentName:"p"},"Les N lignes suivantes")," : trois nombres entiers s\xe9par\xe9s par des espaces ",(0,s.mdx)("inlineCode",{parentName:"p"},"S"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"H")," et ",(0,s.mdx)("inlineCode",{parentName:"p"},"A"),", les quantit\xe9s de porcs-\xe9pics malades, sains et\nvivants dans la cage respective."),(0,s.mdx)("h3",{id:"sortie"},"Sortie"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},(0,s.mdx)("inlineCode",{parentName:"strong"},"Y")," ou moins de lignes")," d'entiers de porcs-\xe9pics vivants.",(0,s.mdx)("br",null),"\nLa ligne 1 correspond \xe0 l'ann\xe9e 1, et non \xe0 l'ann\xe9e 0. Tous les porcs-\xe9pics malades meurent en premier."),(0,s.mdx)("h3",{id:"contraintes"},"Contraintes"),(0,s.mdx)("p",null,"0 \u2264 ",(0,s.mdx)("inlineCode",{parentName:"p"},"N")," < 500",(0,s.mdx)("br",null),"\n0 < ",(0,s.mdx)("inlineCode",{parentName:"p"},"Y")," < 100",(0,s.mdx)("br",null),"\n0 \u2264 ",(0,s.mdx)("inlineCode",{parentName:"p"},"S"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"H"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"A")," < 10 000 000",(0,s.mdx)("br",null),"\n",(0,s.mdx)("inlineCode",{parentName:"p"},"S")," + ",(0,s.mdx)("inlineCode",{parentName:"p"},"H")," est ",(0,s.mdx)("inlineCode",{parentName:"p"},"A")),(0,s.mdx)("h3",{id:"exemple"},"Exemple"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Entr\xe9e"),(0,s.mdx)("th",{parentName:"tr",align:null},"Sortie"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"2",(0,s.mdx)("br",null),"3",(0,s.mdx)("br",null),"2 118 120",(0,s.mdx)("br",null),"0 50 50"),(0,s.mdx)("td",{parentName:"tr",align:null},"168",(0,s.mdx)("br",null),"164",(0,s.mdx)("br",null),"156",(0,s.mdx)("br",null),(0,s.mdx)("br",null))))),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Le code g\xe9n\xe9r\xe9 automatiquement ci-dessous vise \xe0 vous aider \xe0 analyser\n * l'entr\xe9e standard selon l'\xe9nonc\xe9 du probl\xe8me.\n **/\nlet cage = [];\nlet alive = 0;\n\nconst N = parseInt(readline());\nconst Y = parseInt(readline());\nfor (let i = 0; i < N; i++) {\n    var inputs = readline().split(' ');\n    const S = parseInt(inputs[0]);\n    const H = parseInt(inputs[1]);\n    const A = parseInt(inputs[2]);\n    cage.push({sick: S, healthy: H, alive: A});\n}\nfor (let i = 0; i < Y; i++) {\n    // \xc9crivez une r\xe9ponse en utilisant console.log()\n    // Pour d\xe9boguer : console.error('Messages de d\xe9bogage...');\n    for (let j = 0; j < cage.length; j++) {\n        cage[j].alive -= cage[j].sick;\n        cage[j].healthy -= cage[j].sick * 2;\n        cage[j].sick = cage[j].sick * 2;\n        if (cage[j].alive > 0) {\n            alive += cage[j].alive;\n        }\n    }\n    if( alive === 0 ) {\n        console.log(0);\n        break;\n    } else {\n        console.log(alive);\n    }\n    alive = 0;\n}\n")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"//variant #1:\nconst N = parseInt(readline());\nconst Y = parseInt(readline());\nconst dic = {};\n\nfor (let i = 0; i < N; i++) {\n    var inputs = readline().split(' ').map(Number);\n    const S = inputs[0];\n    const H = inputs[1];\n    const A = inputs[2];\n    dic[i] = {}\n    dic[i].S = S\n    dic[i].H = H\n    dic[i].A = A\n}\n\nlet yearH = 0;\n\nfor (let i = 0; i < Y; i++) {\n    yearH = 0;\n    for (let j = 0; j < N; j++){\n        yearH += dic[j].H\n        dic[j].H -= dic[j].S * 2;\n        if(dic[j].H < 0) dic[j].H = 0\n        dic[j].A -= dic[j].S;\n        if(dic[j].A < 0) dic[j].A = 0\n        dic[j].S = dic[j].A - dic[j].H;\n    }\n    console.log( yearH )\n    if(yearH === 0) break;\n}\n\n//variant #3:\nconst N = parseInt(readline());\nconst Y = parseInt(readline());\nvar cages = [];\nfor (let i = 0; i < N; i++) {\n    var inputs = readline().split(' ');\n    const S = parseInt(inputs[0]);\n    const H = parseInt(inputs[1]);\n    const A = parseInt(inputs[2]);\n    cages.push([S, H, A]);\n}\nfor (let i = 0; i < Y; i++) {\n    var total = 0;\n    for (var c in cages) {\n        if (cages[c][1] - 2 * cages[c][0] < 0) {\n            if (cages[c][1] > 0) {\n                cages[c][0] = cages[c][1];\n                cages[c][1] = 0;\n            } else {\n                cages[c][0] = 0;\n            }\n        } else {\n            cages[c][1] -= 2 * cages[c][0];\n            cages[c][0] *= 2;\n        }\n        cages[c][2] = cages[c][0] + cages[c][1];\n        total += cages[c][2];\n    }\n    console.log(total);\n    if (total === 0) {\n        break;\n    }\n}\n\n//variant #4:\nl = readline\nY = +l(C = +l(t = 1))\nfor(p=[...Array(C)].map(_=>l().split` `); t&&Y--; p=p.map(x=>[y=x[0]*2,(p=x[1]-y)< 0 ? 0 : p]))\n    console.log(t=p.reduce((a,b)=>+b[1]+a,0))\n\n\n//variant #5:\nconst [C, Y] = [+readline(), +readline()];\nconst cages = [...Array(C)].map(_ => readline().split(' ')).map(s => ({ sick: +s[0], healthy: +s[1], alive: +s[2] }));\n\nfor (let y = 0; y < Y; y++) {\n    cages.filter(cage => cage.alive > 0).forEach(cage => {\n        cage.alive -= cage.sick;\n        cage.sick = Math.min(2 * cage.sick, cage.healthy);\n        cage.healthy -= cage.sick;\n    });\n    const total = cages.reduce((p, c) => p + c.alive, 0);\n    console.log(total);\n    if (total < 1) break;\n}\n\n//variant #6:\nclass Cage {\n    static parse(text) {\n        let [sick, healthy] = text.split(' ').map(x => parseInt(x));\n        return new Cage(healthy, sick);\n    }\n\n    constructor(healthy, sick) {\n        this.healthy = healthy;\n        this.sick = sick;\n    }\n\n    step() {\n        this.sick = Math.min(this.healthy, 2 * this.sick);\n        this.healthy -= this.sick;\n    }\n\n    total() {\n        return this.healthy + this.sick;\n    }\n}\n\nconst CAGES = parseInt(readline());\nconst YEARS = parseInt(readline());\n\nlet cages = Array(CAGES).fill().map(() => readline()).map(Cage.parse);\nfor (let y = 1; y <= YEARS; y++) {\n    cages.forEach(cage => cage.step());\n\n    let total = cages.map(cage => cage.total()).reduce((a, b) => a + b, 0);\n    print(total);\n    if (total == 0) {\n        break;\n    }\n}\n\n//variant #7:\nlet cages = []\n\nconst N = parseInt(readline());\nconst Y = parseInt(readline());\nfor (let i = 0; i < N; i++) {\n    var inputs = readline().split(' ');\n    const S = parseInt(inputs[0]);\n    const H = parseInt(inputs[1]);\n    const A = parseInt(inputs[2]);\n    cages.push({S,H})\n}\n\nfor (let i = 0; i < Y; i++) {\n    let alivePorcupines = 0;\n    cages.forEach((cage, index) => {\n        const newlySick = cage.S * 2;\n        cages[index] = { S: newlySick, H: Math.max(cage.H - newlySick, 0) }\n        alivePorcupines += cage.H\n    });\n    console.log(alivePorcupines);\n    if (!alivePorcupines) break;\n}\n")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Auto-generated code below aims at helping you parse\n * the standard input according to the problem statement.\n **/\n\n//amount of cage\nconst N = parseInt(readline());\n//number of year\nconst Y = parseInt(readline());\nvar farm = [];\nfor (let i = 0; i < N; i++) {\n    var inputs = readline().split(' ');\n    const S = parseInt(inputs[0]);\n    const H = parseInt(inputs[1]);\n    const A = parseInt(inputs[2]);\n    var cage = [S, H, A];\n    farm.push(cage);\n}\n\nfor (let i = 0; i < Y; i++) {\n    //initialise une variable pour compter le total des cages\n \n    //Chaque ann\xe9e on met a jour pour chaque cage\n    var test = farm.map(cage => {\n        //console.log(\"debut d'ann\xe9e  : \"  + cage)\n        //En fin d'ann\xe9e, le double est contamin\xe9 et les contamin\xe9 du d\xe9but meurent\n        sick = cage[0];\n        cage[0] = sick * 2;\n        //Si le nombre de malades est plus grand que le nombre sains on met le max dedans\n        if(cage[0]>cage[1]){\n            cage[0]=cage[1]\n        }\n        //Le nombre en bonne sant\xe9 est recalcul\xe9\n        cage[1] -= cage[0];\n        cage[1] = cage[1]<0?0:cage[1]\n        //Le nombre total en bonne sant\xe9 est recalcul\xe9\n        cage[2] = cage[0] + cage[1]\n        //console.log(\"fin d'ann\xe9e  : \"  + cage)\n        return cage[2];\n\n    })\n\n\n    reducer = (acc, currentValue) => acc + currentValue;\n    var total = test.reduce(reducer,0);\n    console.log(total);\n    if(total==0){\n        break;\n    }\n}\n")))}m.isMDXComponent=!0},96922:function(e,n,a){n.Z=a.p+"assets/images/default_banner-e89f2f1b5cbb6edda82d5afdae47ae4d.jpg"}}]);