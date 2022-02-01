"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[636],{69077:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var s=r(87462),t=r(63366),a=(r(67294),r(3905)),l=(r(9877),r(58215),r(56222),["components"]),o={sidebar_position:2},i="Back-end Node.js Express",d={unversionedId:"OpenClassrooms/Creez_un_reseau_social_d_entreprise/Creation_de_l_application_full-stack_CRUD/Back-end",id:"OpenClassrooms/Creez_un_reseau_social_d_entreprise/Creation_de_l_application_full-stack_CRUD/Back-end",title:"Back-end Node.js Express",description:"Aper\xe7u",source:"@site/docs/OpenClassrooms/7-Creez_un_reseau_social_d_entreprise/3-Creation_de_l_application_full-stack_CRUD/1-Back-end.mdx",sourceDirName:"OpenClassrooms/7-Creez_un_reseau_social_d_entreprise/3-Creation_de_l_application_full-stack_CRUD",slug:"/OpenClassrooms/Creez_un_reseau_social_d_entreprise/Creation_de_l_application_full-stack_CRUD/Back-end",permalink:"/Mon_Web_Dev_Wiki/docs/OpenClassrooms/Creez_un_reseau_social_d_entreprise/Creation_de_l_application_full-stack_CRUD/Back-end",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/OpenClassrooms/7-Creez_un_reseau_social_d_entreprise/3-Creation_de_l_application_full-stack_CRUD/1-Back-end.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"openClassroomsSidebar",previous:{title:"Sources du tutorial",permalink:"/Mon_Web_Dev_Wiki/docs/OpenClassrooms/Creez_un_reseau_social_d_entreprise/Creation_de_l_application_full-stack_CRUD/Sources"},next:{title:"Front-end Vue.js",permalink:"/Mon_Web_Dev_Wiki/docs/OpenClassrooms/Creez_un_reseau_social_d_entreprise/Creation_de_l_application_full-stack_CRUD/Front-end"}},u=[{value:"Aper\xe7u",id:"aper\xe7u",children:[],level:2},{value:"Structure du projet",id:"structure-du-projet",children:[],level:2},{value:"Mise en \u0153uvre",id:"mise-en-\u0153uvre",children:[{value:"Cr\xe9er une application Node.js",id:"cr\xe9er-une-application-nodejs",children:[],level:3},{value:"Configurer le serveur Web Express",id:"configurer-le-serveur-web-express",children:[],level:3},{value:"Configurer la base de donn\xe9es MySQL &amp; Sequelize",id:"configurer-la-base-de-donn\xe9es-mysql--sequelize",children:[],level:3},{value:"Initialiser Sequelize",id:"initialiser-sequelize",children:[],level:3},{value:"D\xe9finir le mod\xe8le Sequelize",id:"d\xe9finir-le-mod\xe8le-sequelize",children:[],level:3},{value:"Cr\xe9er le contr\xf4leur",id:"cr\xe9er-le-contr\xf4leur",children:[],level:3},{value:"Ex\xe9cutez le serveur Node.js Express",id:"ex\xe9cutez-le-serveur-nodejs-express",children:[],level:3}],level:2},{value:"Impl\xe9menter les fonctions",id:"impl\xe9menter-les-fonctions",children:[{value:"Cr\xe9er un nouvel objet",id:"cr\xe9er-un-nouvel-objet",children:[],level:3},{value:"R\xe9cup\xe9rer des objets (avec condition)",id:"r\xe9cup\xe9rer-des-objets-avec-condition",children:[],level:3},{value:"R\xe9cup\xe9rer un seul objet",id:"r\xe9cup\xe9rer-un-seul-objet",children:[],level:3},{value:"Mettre \xe0 jour un objet",id:"mettre-\xe0-jour-un-objet",children:[],level:3},{value:"Supprimer un objet",id:"supprimer-un-objet",children:[],level:3},{value:"Supprimer tous les objets",id:"supprimer-tous-les-objets",children:[],level:3},{value:"Trouver tous les objets par condition",id:"trouver-tous-les-objets-par-condition",children:[],level:3}],level:2},{value:"D\xe9finir des routes",id:"d\xe9finir-des-routes",children:[],level:2},{value:"Tester les API",id:"tester-les-api",children:[],level:2}],m={toc:u};function p(e){var n=e.components,r=(0,t.Z)(e,l);return(0,a.mdx)("wrapper",(0,s.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"back-end-nodejs-express"},"Back-end Node.js Express"),(0,a.mdx)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,a.mdx)("p",null,"Ce sont les API que l'App Node.js Express exportera :"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"M\xc9thodEs"),(0,a.mdx)("th",{parentName:"tr",align:null},"Urls"),(0,a.mdx)("th",{parentName:"tr",align:null},"Actions"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"GET"),(0,a.mdx)("td",{parentName:"tr",align:null},"api/forums"),(0,a.mdx)("td",{parentName:"tr",align:null},"obtenir tous les FORUMS")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"GET"),(0,a.mdx)("td",{parentName:"tr",align:null},"api/forums/:id"),(0,a.mdx)("td",{parentName:"tr",align:null},"obtenir un forum par son id")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"POST"),(0,a.mdx)("td",{parentName:"tr",align:null},"api/forums"),(0,a.mdx)("td",{parentName:"tr",align:null},"ajouter un nouveau forum")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"PUT"),(0,a.mdx)("td",{parentName:"tr",align:null},"api/forums/:id"),(0,a.mdx)("td",{parentName:"tr",align:null},"mettre \xe0 jour le forum par son id")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"DELETE"),(0,a.mdx)("td",{parentName:"tr",align:null},"api/forums/:id"),(0,a.mdx)("td",{parentName:"tr",align:null},"supprimer le forum par son id")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"DELETE"),(0,a.mdx)("td",{parentName:"tr",align:null},"api/forums"),(0,a.mdx)("td",{parentName:"tr",align:null},"supprimer tous les forums")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"GET"),(0,a.mdx)("td",{parentName:"tr",align:null},"api/forums?title=","[kw]"),(0,a.mdx)("td",{parentName:"tr",align:null},"trouver tous les forums dont le titre contient 'kw'")))),(0,a.mdx)("h2",{id:"structure-du-projet"},"Structure du projet"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"db.config.js")," exporte les param\xe8tres de configuration pour la connexion MySQL et Sequelize."),(0,a.mdx)("li",{parentName:"ul"},"le serveur ",(0,a.mdx)("inlineCode",{parentName:"li"},"Web Express")," dans ",(0,a.mdx)("inlineCode",{parentName:"li"},"server.js")," o\xf9 nous configurons CORS, initialisons et ex\xe9cutons les API REST Express."),(0,a.mdx)("li",{parentName:"ul"},"Ensuite, nous ajoutons la configuration de la base de donn\xe9es MySQL dans ",(0,a.mdx)("inlineCode",{parentName:"li"},"models/index.js"),", cr\xe9ons le mod\xe8le de donn\xe9es Sequelize dans\n",(0,a.mdx)("inlineCode",{parentName:"li"},"models/tutorial.model.js"),"."),(0,a.mdx)("li",{parentName:"ul"},"Tutoriel contr\xf4leur dans les contr\xf4leurs."),(0,a.mdx)("li",{parentName:"ul"},"Routes pour g\xe9rer toutes les op\xe9rations CRUD (y compris la recherche personnalis\xe9e) dans ",(0,a.mdx)("inlineCode",{parentName:"li"},"tutorial.routes.js"),".")),(0,a.mdx)("h2",{id:"mise-en-\u0153uvre"},"Mise en \u0153uvre"),(0,a.mdx)("h3",{id:"cr\xe9er-une-application-nodejs"},"Cr\xe9er une application Node.js"),(0,a.mdx)("p",null,"Tout d'abord, nous cr\xe9ons un dossier :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"$ mkdir groupomania-forum\n$ cd groupomania-forum\n")),(0,a.mdx)("p",null,"Ensuite, nous initialisons l'application Node.js avec un fichier package.json :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"npm init\n\nname: (groupomania-forum) \nversion: (1.0.0) \ndescription: Node.js Rest Apis with Express, Sequelize & MySQL.\nentry point: (index.js) server.js\ntest command: \ngit repository: \nkeywords: nodejs, express, sequelize, mysql, rest, api\nauthor: bezkoder\nlicense: (ISC)\n\nIs this ok? (yes) yes\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title=" Initialisation npm"',title:'"',Initialisation:!0,'npm"':!0},'\u279c  GillesChassignet_7_01072021 git:(master) npm init\nThis utility will walk you through creating a package.json file.\nIt only covers the most common items, and tries to guess sensible defaults.\n\nSee `npm help init` for definitive documentation on these fields\nand exactly what they do.\n\nUse `npm install <pkg>` afterwards to install a package and\nsave it as a dependency in the package.json file.\n\nPress ^C at any time to quit.\npackage name: (gilleschassignet_7_01072021) groupomania-forum\nversion: (1.0.0) \ndescription: R\xe9seau social interne du groupe Groupomania\nentry point: (index.js) server.js\ntest command: \ngit repository: (https://github.com/gylgyl2000/GillesChassignet_7_01072021.git) \nkeywords: nodejs, express, sequelize, mysql, rest, api\nauthor: Gilles Chassignet\nlicense: (ISC) \nAbout to write to /home/gilles/OpenClassrooms/GillesChassignet_7_01072021/GillesChassignet_7_01072021/package.json:\n\n{\n  "name": "groupomania-forum",\n  "version": "1.0.0",\n  "description": "R\xe9seau social interne du groupe Groupomania",\n  "main": "server.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/gylgyl2000/GillesChassignet_7_01072021.git"\n  },\n  "keywords": [\n    "nodejs",\n    "express",\n    "sequelize",\n    "mysql",\n    "rest",\n    "api"\n  ],\n  "author": "Gilles Chassignet",\n  "license": "ISC",\n  "bugs": {\n    "url": "https://github.com/gylgyl2000/GillesChassignet_7_01072021/issues"\n  },\n  "homepage": "https://github.com/gylgyl2000/GillesChassignet_7_01072021#readme"\n}\n\n\nIs this OK? (yes) \n')),(0,a.mdx)("p",null,"Nous devons installer les modules n\xe9cessaires : express, sequelize, mysql2et body-parser."),(0,a.mdx)("p",null,"Ex\xe9cutez la commande :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install express sequelize mysql2 body-parser cors --save\n")),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("ul",{parentName:"div"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"Node.js :")," ",(0,a.mdx)("a",{parentName:"p",href:"https://nodejs.org/fr/"},"https://nodejs.org/fr/"),(0,a.mdx)("br",null),"\nNode.js\xae est un environnement d\u2019ex\xe9cution JavaScript construit sur le moteur JavaScript V8 de Chrome.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"express :")," ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/express"},"https://www.npmjs.com/package/express"),(0,a.mdx)("br",null),"\nFramework Web rapide, sans opinion et minimaliste pour node.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"sequelize :")," ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/sequelize"},"https://www.npmjs.com/package/sequelize"),(0,a.mdx)("br",null),"\nSequelize est un outil ORM Node.js bas\xe9 sur la promesse pour Postgres, MySQL, MariaDB, SQLite, DB2 et Microsoft SQL Server. Il offre une\nprise en charge solide des transactions, des relations, un chargement rapide et paresseux, une r\xe9plication en lecture et plus encore.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"mysql2 :")," Node MySQL 2 : ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/mysql2"},"https://www.npmjs.com/package/mysql2"),(0,a.mdx)("br",null),"\nClient MySQL pour Node.js ax\xe9 sur les performances. Prend en charge les instructions pr\xe9par\xe9es, les encodages non utf8, le protocole de\njournalisation binaire, la compression, SSL (bien plus)","[https://github.com/sidorares/node-mysql2/tree/master/documentation]")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"body-parser :")," ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/body-parser"},"https://www.npmjs.com/package/body-parser"),(0,a.mdx)("br",null),"\nIntergiciel (middleware) d'analyse corporelle (body parsing) Node.js.",(0,a.mdx)("br",null),"\nAnalysez les corps des requ\xeates entrantes dans un middleware avant vos gestionnaires, disponibles sous la propri\xe9t\xe9 ",(0,a.mdx)("inlineCode",{parentName:"p"},"req.body"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("strong",{parentName:"p"},"cors :")," ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/cors"},"https://www.npmjs.com/package/cors"),(0,a.mdx)("br",null),"\nCORS est un package node.js pour fournir un middleware Connect/Express qui peut \xeatre utilis\xe9 pour activer (CORS)","[https://fr.wikipedia.org/wiki/Cross-origin_resource_sharing]","\navec diverses options."))))),(0,a.mdx)("h3",{id:"configurer-le-serveur-web-express"},"Configurer le serveur Web Express"),(0,a.mdx)("p",null,"Dans le dossier racine, cr\xe9ons un nouveau fichier ",(0,a.mdx)("em",{parentName:"p"},"server.js")," :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js"',title:'"server.js"'},'const express = require("express");\nconst bodyParser = require("body-parser");\nconst cors = require("cors");\n\nconst app = express();\n\nlet corsOptions = {\n    origin: "http://localhost:8081"\n};\n\napp.use(cors(corsOptions));\n\n// analyse les requ\xeates de type de contenu - application/json\napp.use(bodyParser.json());\n\n// analyse les demandes de type de contenu - application/x-www-form-urlencoded\napp.use(bodyParser.urlencoded({ extended: true }));\n\n// route simple\napp.get("/", (req, res) => {\n    res.json({ message: "Bienvenue dans le r\xe9seau social interne du groupe Groupomania." });\n});\n\n// d\xe9fini le port, \xe9coute les demandes\nconst PORT = process.env.PORT || 8080;\napp.listen(PORT, () => {\n    console.log(`Le serveur s\'ex\xe9cute sur le port ${PORT}.`);\n});\n')),(0,a.mdx)("p",null,"Ce que nous avons fait :"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"importer les modules express, body-parser et cors :",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Express est pour construire l'API Rest,"),(0,a.mdx)("li",{parentName:"ul"},"body-parser aide \xe0 analyser la demande et \xe0 cr\xe9er l'objet ",(0,a.mdx)("inlineCode",{parentName:"li"},"req.body"),","),(0,a.mdx)("li",{parentName:"ul"},"cors fournit un middleware Express pour activer CORS avec diverses options."))),(0,a.mdx)("li",{parentName:"ul"},"cr\xe9er une application Express, puis ajouter les middlewares ",(0,a.mdx)("inlineCode",{parentName:"li"},"body-parser")," et ",(0,a.mdx)("inlineCode",{parentName:"li"},"cors")," en utilisant la m\xe9thode ",(0,a.mdx)("inlineCode",{parentName:"li"},"app.use()"),". Notez que nous\nd\xe9finissons l'origine : http://localhost:8081."),(0,a.mdx)("li",{parentName:"ul"},"d\xe9finir une route GET simple \xe0 tester."),(0,a.mdx)("li",{parentName:"ul"},"\xe9couter sur le port 8080 pour les requ\xeates entrantes.")),(0,a.mdx)("p",null,"Ex\xe9cutons maintenant l'application avec la commande : ",(0,a.mdx)("inlineCode",{parentName:"p"},"node server.js"),"."),(0,a.mdx)("p",null,"Ouvrez votre navigateur avec l'url http://localhost:8080/ , vous verrez :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-html",metastring:'title="localhost:8080"',title:'"localhost:8080"'},'{"message":"Bienvenue sur le r\xe9seau social interne du groupe Groupomania."}\n')),(0,a.mdx)("p",null,"Oui, le premier pas est fait. Nous allons travailler avec Sequelize dans la section suivante."),(0,a.mdx)("h3",{id:"configurer-la-base-de-donn\xe9es-mysql--sequelize"},"Configurer la base de donn\xe9es MySQL & Sequelize"),(0,a.mdx)("p",null,"Dans le dossier ",(0,a.mdx)("em",{parentName:"p"},"app"),", nous cr\xe9ons un s\xe9par\xe9 dossier ",(0,a.mdx)("em",{parentName:"p"},"config")," pour la configuration avec le fichier ",(0,a.mdx)("em",{parentName:"p"},"db.config.js")," comme ceci :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/config/db.config.js"',title:'"app/config/db.config.js"'},'module.exports = {\n    HOST: "localhost",\n    USER: "root",\n    PASSWORD: "M&rlin2004",\n    DB: "forumdb",\n    dialect: "mysql",\n    pool: {\n        max: 5,\n        min: 0,\n        acquire: 30000,\n        idle: 10000\n    }\n};\n')),(0,a.mdx)("p",null,"Les cinq premiers param\xe8tres sont pour la connexion MySQL.\n",(0,a.mdx)("inlineCode",{parentName:"p"},"pool")," est facultatif, il sera utilis\xe9 pour la configuration du pool de connexions Sequelize :"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"max")," : nombre maximum de connexion dans le pool,"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"min")," : nombre minimum de connexion dans le pool,"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"idle")," : temps maximum, en millisecondes, pendant lequel une connexion peut \xeatre inactive avant d'\xeatre lib\xe9r\xe9e,"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"acquire")," : temps maximum, en millisecondes, que ce pool essaiera d'obtenir la connexion avant de lancer une erreur.")),(0,a.mdx)("p",null,"Pour plus de d\xe9tails, veuillez visiter ",(0,a.mdx)("a",{parentName:"p",href:"https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor"},"API Reference for the Sequelize constructor"),"."),(0,a.mdx)("h3",{id:"initialiser-sequelize"},"Initialiser Sequelize"),(0,a.mdx)("p",null,"Nous allons initialiser Sequelize dans le dossier ",(0,a.mdx)("em",{parentName:"p"},"app/models")," qui contiendra le mod\xe8le \xe0 l'\xe9tape suivante."),(0,a.mdx)("p",null,"Cr\xe9ez maintenant ",(0,a.mdx)("em",{parentName:"p"},"app/models/index.js")," avec le code suivant :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/models/index.js"',title:'"app/models/index.js"'},'const dbConfig = require("../config/db.config.js");\n\nconst Sequelize = require("sequelize");\nconst sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {\n    host: dbConfig.HOST,\n        dialect: dbConfig.dialect,\n        operatorsAliases: false,\n\n    pool: {\n        max: dbConfig.pool.max,\n        min: dbConfig.pool.min,\n        acquire: dbConfig.pool.acquire,\n        idle: dbConfig.pool.idle\n    }\n});\n\nconst db = {};\n\ndb.Sequelize = Sequelize;\ndb.sequelize = sequelize;\n\ndb.forums = require("./forum.model.js")(sequelize, Sequelize);\n\nmodule.exports = db;\n')),(0,a.mdx)("p",null,"N'oubliez pas d'appeler la m\xe9thode ",(0,a.mdx)("inlineCode",{parentName:"p"},"sync()")," dans ",(0,a.mdx)("em",{parentName:"p"},"server.js")," :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js"',title:'"server.js"'},'...\nconst app = express();\napp.use(...);\n\nconst db = require("./app/models");\ndb.sequelize.sync();\n\n...\n')),(0,a.mdx)("p",null,"Au cours du d\xe9veloppement, vous devrez peut-\xeatre supprimer les tables existantes et resynchroniser la base de donn\xe9es. Utilisez simplement\n",(0,a.mdx)("inlineCode",{parentName:"p"},"force: true")," en suivant le code :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js"',title:'"server.js"'},'db.sequelize.sync({ force: true }).then(() => {\n    console.log("Suppression des tables et resynchronisation de la base de donn\xe9es.");\n});\n')),(0,a.mdx)("h3",{id:"d\xe9finir-le-mod\xe8le-sequelize"},"D\xe9finir le mod\xe8le Sequelize"),(0,a.mdx)("p",null,"Dans le dossier models, cr\xe9ez le fichier ",(0,a.mdx)("em",{parentName:"p"},"tutorial.model.js")," comme ceci :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/models/forum.model.js"',title:'"app/models/forum.model.js"'},'module.exports = (sequelize, Sequelize) => {\n    const Forum = sequelize.define("forum", {\n        title: {\n            type: Sequelize.STRING\n        },\n        description: {\n            type: Sequelize.STRING\n        },\n        published: {\n            type: Sequelize.BOOLEAN\n        }\n    });\n\n    return Forum;\n};\n')),(0,a.mdx)("p",null,"Ce mod\xe8le Sequelize repr\xe9sente la table des ",(0,a.mdx)("strong",{parentName:"p"},"forums")," dans la base de donn\xe9es MySQL. Ces colonnes seront g\xe9n\xe9r\xe9es automatiquement :\n",(0,a.mdx)("em",{parentName:"p"},"id"),", ",(0,a.mdx)("em",{parentName:"p"},"title"),", ",(0,a.mdx)("em",{parentName:"p"},"description"),", ",(0,a.mdx)("em",{parentName:"p"},"published"),", ",(0,a.mdx)("em",{parentName:"p"},"createdAt"),", ",(0,a.mdx)("em",{parentName:"p"},"updateAt"),"."),(0,a.mdx)("p",null,"Apr\xe8s avoir initialis\xe9 Sequelize, nous n'avons pas besoin d'\xe9crire les fonctions CRUD, Sequelize les prend toutes en charge :"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"cr\xe9er un nouveau forum : ",(0,a.mdx)("inlineCode",{parentName:"li"},"create(object)")),(0,a.mdx)("li",{parentName:"ul"},"trouver un forum par id : ",(0,a.mdx)("inlineCode",{parentName:"li"},"findByPk(id)")),(0,a.mdx)("li",{parentName:"ul"},"obtenir tous les forums : ",(0,a.mdx)("inlineCode",{parentName:"li"},"findAll()")),(0,a.mdx)("li",{parentName:"ul"},"mettre \xe0 jour un forum par id : ",(0,a.mdx)("inlineCode",{parentName:"li"},"update(data, where: { id: id })")),(0,a.mdx)("li",{parentName:"ul"},"supprimer un forum : ",(0,a.mdx)("inlineCode",{parentName:"li"},"destroy(where: { id: id })")),(0,a.mdx)("li",{parentName:"ul"},"supprimer tous les forums : ",(0,a.mdx)("inlineCode",{parentName:"li"},"destroy(where: {})")),(0,a.mdx)("li",{parentName:"ul"},"trouver tous les forums par titre : ",(0,a.mdx)("inlineCode",{parentName:"li"},"findAll({ where: { title: ... } })"))),(0,a.mdx)("p",null,"Ces fonctions seront utilis\xe9es dans notre contr\xf4leur."),(0,a.mdx)("p",null,"Nous pouvons am\xe9liorer l'exemple en ajoutant des commentaires pour chaque forum. C'est la relation un-\xe0-plusieurs et j'\xe9cris un tutoriel pour\ncela \xe0 l'adresse : ",(0,a.mdx)("a",{parentName:"p",href:"https://bezkoder.com/sequelize-associate-one-to-many/"},"Sequelize Associations: One-to-Many example \u2013 Node.js, MySQL"),"."),(0,a.mdx)("p",null,"Ou vous pouvez ajouter des balises pour chaque forum et ajouter des forums \xe0 la balise (relation plusieurs-\xe0-plusieurs) :\n",(0,a.mdx)("a",{parentName:"p",href:"https://bezkoder.com/sequelize-associate-many-to-many/"},"Sequelize Many-to-Many Association example with Node.js & MySQL"),"."),(0,a.mdx)("h3",{id:"cr\xe9er-le-contr\xf4leur"},"Cr\xe9er le contr\xf4leur"),(0,a.mdx)("p",null,"Dans le dossier ",(0,a.mdx)("strong",{parentName:"p"},"app/controllers"),", cr\xe9ons ",(0,a.mdx)("em",{parentName:"p"},"tutorial.controller.js")," avec ces fonctions CRUD :"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"create"),(0,a.mdx)("li",{parentName:"ul"},"findAll"),(0,a.mdx)("li",{parentName:"ul"},"findOne"),(0,a.mdx)("li",{parentName:"ul"},"update"),(0,a.mdx)("li",{parentName:"ul"},"delete"),(0,a.mdx)("li",{parentName:"ul"},"deleteAll"),(0,a.mdx)("li",{parentName:"ul"},"findAllPublished")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},"const db = require(\"../models\");\nconst Tutorial = db.tutorials;\nconst Op = db.Sequelize.Op;\n\n// Cr\xe9er et enregistrer un nouveau forum\nexports.create = (req, res) => {\n  \n};\n\n// R\xe9cup\xe9rez tous les forums de la base de donn\xe9es\nexports.findAll = (req, res) => {\n  \n};\n\n// Trouver un seul forum avec un id\nexports.findOne = (req, res) => {\n  \n};\n\n// Mettre \xe0 jour un forum par l'id dans la demande\nexports.update = (req, res) => {\n  \n};\n\n// Supprimer un forum avec l'id sp\xe9cifi\xe9 dans la demande\nexports.delete = (req, res) => {\n  \n};\n\n// Supprimer tous les forums de la base de donn\xe9es\nexports.deleteAll = (req, res) => {\n  \n};\n\n// Trouver tous les forums publi\xe9s\nexports.findAllPublished = (req, res) => {\n  \n};\n")),(0,a.mdx)("p",null,"Vous pouvez continuer \xe9tape par \xe9tape pour impl\xe9menter cette application Node.js Express dans l'article : ",(0,a.mdx)("a",{parentName:"p",href:"https://bezkoder.com/node-js-express-sequelize-mysql/"},"Node.js Rest APIs example with Express, Sequelize & MySQL"),"."),(0,a.mdx)("h3",{id:"ex\xe9cutez-le-serveur-nodejs-express"},"Ex\xe9cutez le serveur Node.js Express"),(0,a.mdx)("p",null,"Ex\xe9cutez notre application Node.js avec la commande : ",(0,a.mdx)("inlineCode",{parentName:"p"},"node server.js"),"."),(0,a.mdx)("p",null,"La console affiche :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"\u279c  GillesChassignet_7_01072021 git:(master) \u2717 node server.js\nLe serveur s'ex\xe9cute sur le port 8080.\nExecuting (default): DROP TABLE IF EXISTS `forums`;\nExecuting (default): DROP TABLE IF EXISTS `forums`;\nExecuting (default): CREATE TABLE IF NOT EXISTS `forums` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `description` VARCHAR(255), `published` TINYINT(1), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;\nExecuting (default): SHOW INDEX FROM `forums`\nSuppression des tables et resynchronisation de la base de donn\xe9es.\n")),(0,a.mdx)("h2",{id:"impl\xe9menter-les-fonctions"},"Impl\xe9menter les fonctions"),(0,a.mdx)("h3",{id:"cr\xe9er-un-nouvel-objet"},"Cr\xe9er un nouvel objet"),(0,a.mdx)("p",null,"Cr\xe9er et enregistrer un nouveau forum :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},'// Cr\xe9er et enregistrer un nouveau forum\nexports.create = (req, res) => {\n    // Valider la demande\n    if (!req.body.title) {\n        res.status(400).send({\n            message: "Le contenu ne peut pas \xeatre vide !"\n        });\n        return;\n    }\n    // Cr\xe9er un forum\n    const forum = {\n        title: req.body.title,\n        description: req.body.description,\n        published: req.body.published ? req.body.published : false\n    };\n\n    // Enregistrer le forum dans la base de donn\xe9es\n    Forum.create(tutorial)\n        .then(data => {\n            res.send(data);\n        })\n        .catch(err => {\n            res.status(500).send({\n                message:\n                    err.message || "Une erreur s\'est produite lors de la cr\xe9ation du forum."\n            });\n        });\n};\n')),(0,a.mdx)("h3",{id:"r\xe9cup\xe9rer-des-objets-avec-condition"},"R\xe9cup\xe9rer des objets (avec condition)"),(0,a.mdx)("p",null,"R\xe9cup\xe9rer tous les forums / rechercher par titre dans la base de donn\xe9es :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},'// R\xe9cup\xe9rez tous les forums de la base de donn\xe9es\nexports.findAll = (req, res) => {\n    const title = req.query.title;\n    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;\n\n    Forum.findAll({ where: condition })\n        .then(data => {\n            res.send(data);\n        })\n        .catch(err => {\n            res.status(500).send({\n                message:\n                    err.message || "Une erreur s\'est produite lors de la r\xe9cup\xe9ration des forums."\n        });\n    });  \n};\n')),(0,a.mdx)("p",null,"Nous utilisons ",(0,a.mdx)("inlineCode",{parentName:"p"},"req.query.title")," pour obtenir la cha\xeene de requ\xeate de Request et la consid\xe9rons comme une condition pour la m\xe9thode ",(0,a.mdx)("inlineCode",{parentName:"p"},"findAll()"),"."),(0,a.mdx)("h3",{id:"r\xe9cup\xe9rer-un-seul-objet"},"R\xe9cup\xe9rer un seul objet"),(0,a.mdx)("p",null,"Trouvez un seul tutoriel avec un ",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},"exports.findOne = (req, res) => {\n    const id = req.params.id;\n\n    Forum.findByPk(id)\n        .then(data => {\n            if (data) {\n                res.send(data);\n            } else {\n                res.status(404).send({\n                    message: `Impossible de trouver le forum avec l'id=${id}.`\n                });\n            }\n        })\n        .catch(err => {\n            res.status(500).send({\n                message: \"Erreur lors de la r\xe9cup\xe9ration du forum avec l'id=\" + id\n            });\n        });  \n};\n")),(0,a.mdx)("h3",{id:"mettre-\xe0-jour-un-objet"},"Mettre \xe0 jour un objet"),(0,a.mdx)("p",null,"Mettre \xe0 jour un forum identifi\xe9 par l'",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," dans la requ\xeate :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},"// Mettre \xe0 jour un forum par l'id dans la demande\nexports.update = (req, res) => {\n    const id = req.params.id;\n\n    Forum.update(req.body, {\n        where: { id: id }\n    })\n        .then(num => {\n            if (num == 1) {\n                res.send({\n                    message: \"Le forum a \xe9t\xe9 mis \xe0 jour avec succ\xe8s.\"\n                });\n            } else {\n                res.send({\n                    message: `Impossible de mettre \xe0 jour le forum avec l'id=${id}. Peut-\xeatre que le forum n'a pas \xe9t\xe9 trouv\xe9 ou que req.body est vide !`\n                });\n            }\n        })\n        .catch(err => {\n            res.status(500).send({\n                message: \"Erreur lors de la mise \xe0 jour du forum avec l'id=\" + id\n            });\n        });\n};\n")),(0,a.mdx)("h3",{id:"supprimer-un-objet"},"Supprimer un objet"),(0,a.mdx)("p",null,"Supprimer un forum avec l'",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," sp\xe9cifi\xe9 :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},"// Supprimer un forum avec l'id sp\xe9cifi\xe9 dans la demande\nexports.delete = (req, res) => {\n    const id = req.params.id;\n\n    Forum.destroy({\n        where: { id: id }\n    })\n        .then(num => {\n            if (num == 1) {\n                res.send({\n                    message: \"Le forum a \xe9t\xe9 supprim\xe9 avec succ\xe8s !\"\n                });\n            } else {\n                res.send({\n                    message: `Impossible de supprimer le didacticiel avec l'id=${id}. Peut-\xeatre que le forum n'a pas \xe9t\xe9 trouv\xe9 !`\n                });\n            }\n        })\n        .catch(err => {\n            res.status(500).send({\n                message: \"Impossible de supprimer le didacticiel avec l'id=\" + id\n            });\n        });\n};\n")),(0,a.mdx)("h3",{id:"supprimer-tous-les-objets"},"Supprimer tous les objets"),(0,a.mdx)("p",null,"Supprimer tous les forums de la base de donn\xe9es :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},'// Supprimer tous les forums de la base de donn\xe9es\nexports.deleteAll = (req, res) => {\n    Forum.destroy({\n        where: {},\n        truncate: false\n    })\n        .then(nums => {\n            res.send({ message: `${nums} forums ont \xe9t\xe9 supprim\xe9s avec succ\xe8s !` });\n        })\n        .catch(err => {\n            res.status(500).send({\n                message:\n                    err.message || "Une erreur s\'est produite lors de la suppression de tous les forums."\n            });\n        });\n};\n')),(0,a.mdx)("h3",{id:"trouver-tous-les-objets-par-condition"},"Trouver tous les objets par condition"),(0,a.mdx)("p",null,"Trouver tous les forums avec ",(0,a.mdx)("inlineCode",{parentName:"p"},"published = true")," :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app/controllers/forum.controller.js"',title:'"app/controllers/forum.controller.js"'},'// Trouver tous les forums publi\xe9s\nexports.findAllPublished = (req, res) => {\n    Forum.findAll({ where: { published: true } })\n    .then(data => {\n        res.send(data);\n    })\n    .catch(err => {\n        res.status(500).send({\n            message:\n                err.message || "Une erreur s\'est produite lors de la r\xe9cup\xe9ration des forums."\n        });\n    });\n};\n')),(0,a.mdx)("p",null,"Ce contr\xf4leur peut \xeatre l\xe9g\xe8rement modifi\xe9 pour renvoyer la r\xe9ponse de pagination :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n    "totalItems": 8,\n    "forums": [...],\n    "totalPages": 3,\n    "currentPage": 1\n}\n')),(0,a.mdx)("p",null,"Vous pouvez trouver plus de d\xe9tails sur : ",(0,a.mdx)("a",{parentName:"p",href:"https://bezkoder.com/node-js-sequelize-pagination-mysql/"},"Server side Pagination in Node.js with Sequelize and MySQL"),"."),(0,a.mdx)("h2",{id:"d\xe9finir-des-routes"},"D\xe9finir des routes"),(0,a.mdx)("p",null,"Lorsqu'un client envoie une requ\xeate pour un point de terminaison \xe0 l'aide d'une requ\xeate HTTP (GET, POST, PUT, DELETE), nous devons d\xe9terminer\ncomment le serveur r\xe9pondra en configurant les routes."),(0,a.mdx)("p",null,"Voici nos routes :"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"/api/forums")," : GET, POST, DELETE"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"/api/forums/:id")," : GET, PUT, DELETE"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"/api/forums/published")," : GET")),(0,a.mdx)("p",null,"Cr\xe9er un ",(0,a.mdx)("em",{parentName:"p"},"forum.routes.js")," dans le dossier ",(0,a.mdx)("strong",{parentName:"p"},"app/routes")," avec un contenu comme celui-ci :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="pp/routes/forum.routes.js"',title:'"pp/routes/forum.routes.js"'},'module.exports = app => {\n    const forums = require("../controllers/forum.controller.js");\n  \n    var router = require("express").Router();\n  \n    // Cr\xe9er un nouveau forum\n    router.post("/", forums.create);\n  \n    // R\xe9cup\xe9rer tous les forums\n    router.get("/", forums.findAll);\n  \n    // R\xe9cup\xe9rer tous les forums publi\xe9s\n    router.get("/published", forums.findAllPublished);\n  \n    // R\xe9cup\xe9rer un seul forum avec id\n    router.get("/:id", forums.findOne);\n  \n    // Mettre \xe0 jour un forum avec un id\n    router.put("/:id", forums.update);\n  \n    // Supprimer un forum avec un id\n    router.delete("/:id", forums.delete);\n  \n    // Supprimer tous les forums\n    router.delete("/", forums.deleteAll);\n  \n    app.use(\'/api/forums\', router);\n};\n')),(0,a.mdx)("p",null,"Vous pouvez voir que nous utilisons un contr\xf4leur de ",(0,a.mdx)("inlineCode",{parentName:"p"},"/controllers/forum.controller.js"),"."),(0,a.mdx)("p",null,"Nous devons \xe9galement inclure les routes dans ",(0,a.mdx)("em",{parentName:"p"},"server.js")," (juste avant ",(0,a.mdx)("inlineCode",{parentName:"p"},"app.listen()"),") :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server.js"',title:'"server.js"'},'...\n\n// Appeler les routes\nrequire("./app/routes/forum.routes")(app);\n\n// D\xe9finir le port, \xe9couter les demandes\nconst PORT = process.env.PORT || 8080;\napp.listen(PORT, () => {\n    console.log(`Le serveur s\'ex\xe9cute sur le port ${PORT}.`);\n});\n')),(0,a.mdx)("h2",{id:"tester-les-api"},"Tester les API"),(0,a.mdx)("p",null,"Ex\xe9cutez notre application Node.js avec la commande : ",(0,a.mdx)("inlineCode",{parentName:"p"},"node server.js"),"."),(0,a.mdx)("p",null,"La console affiche :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"\u279c GillesChassignet_7_01072021 git:(master) \u2717 node server.js\nLe serveur s'ex\xe9cute sur le port 8080.\nExecuting (default): DROP TABLE IF EXISTS `forums`;\nExecuting (default): DROP TABLE IF EXISTS `forums`;\nExecuting (default): CREATE TABLE IF NOT EXISTS `forums` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `description` VARCHAR(255), `published` TINYINT(1), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;\nExecuting (default): SHOW INDEX FROM `forums`\nSuppression des tables et resynchronisation de la base de donn\xe9es.\n")))}p.isMDXComponent=!0}}]);