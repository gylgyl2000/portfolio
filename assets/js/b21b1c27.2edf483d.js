"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[5591],{60018:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var r=i(87462),t=i(63366),a=(i(67294),i(3905)),s=(i(9877),i(58215),i(56222)),o=["components"],l={sidebar_position:5},d="Ajoutez une gestion des fichiers utilisateur sur l'application",m={unversionedId:"OpenClassrooms/Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB/Ajoutez_une_gestion_des_fichiers_utilisateur_sur_l_application",id:"OpenClassrooms/Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB/Ajoutez_une_gestion_des_fichiers_utilisateur_sur_l_application",title:"Ajoutez une gestion des fichiers utilisateur sur l'application",description:"Acceptez les fichiers entrants avec multer",source:"@site/docs/OpenClassrooms/6-Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/2-Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB/4-Ajoutez_une_gestion_des_fichiers_utilisateur_sur_l_application.mdx",sourceDirName:"OpenClassrooms/6-Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/2-Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB",slug:"/OpenClassrooms/Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB/Ajoutez_une_gestion_des_fichiers_utilisateur_sur_l_application",permalink:"/Mon_Web_Dev_Wiki/docs/OpenClassrooms/Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB/Ajoutez_une_gestion_des_fichiers_utilisateur_sur_l_application",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/OpenClassrooms/6-Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/2-Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB/4-Ajoutez_une_gestion_des_fichiers_utilisateur_sur_l_application.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"openClassroomsSidebar",previous:{title:"Mettez en place un syst\xe8me d'authentification sur votre application",permalink:"/Mon_Web_Dev_Wiki/docs/OpenClassrooms/Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/Passez_au_Full_stack_avec_Node_js_Express_et_MongoDB/Mettez_en_place_un_syst\xe8me_d_authentification_sur_votre_application"},next:{title:"Introduction du cours",permalink:"/Mon_Web_Dev_Wiki/docs/OpenClassrooms/Construisez_une_API_securisee_pour_une_application_d_avis_gastronomiques/Securisez_vos_applications_web_avec_l_OWASP/Introduction_du_cours"}},u=[{value:"Acceptez les fichiers entrants avec multer",id:"acceptez-les-fichiers-entrants-avec-multer",children:[{value:"Configurez le <em>middleware</em> de gestion des fichiers",id:"configurez-le-middleware-de-gestion-des-fichiers",children:[],level:3}],level:2},{value:"Modifiez les routes pour prendre en compte les fichiers",id:"modifiez-les-routes-pour-prendre-en-compte-les-fichiers",children:[{value:"Modifiez la route\xa0POST",id:"modifiez-la-routepost",children:[],level:3},{value:"Modifiez la route PUT",id:"modifiez-la-route-put",children:[],level:3}],level:2},{value:"D\xe9veloppez la fonction delete du back-end",id:"d\xe9veloppez-la-fonction-delete-du-back-end",children:[{value:"Modifiez la route DELETE",id:"modifiez-la-route-delete",children:[],level:3},{value:"R\xe9capitulons...",id:"r\xe9capitulons",children:[],level:3}],level:2},{value:"Quiz : Saurez-vous g\xe9rer des fichiers utilisateur ?",id:"quiz--saurez-vous-g\xe9rer-des-fichiers-utilisateur-",children:[{value:"Comp\xe9tences \xe9valu\xe9es",id:"comp\xe9tences-\xe9valu\xe9es",children:[],level:4},{value:"Question 1 : En configurant\xa0<code>multer</code>\xa0comme <em>middleware</em>\xa0de gestion de fichiers, quels sont les deux arguments n\xe9cessaires\xa0?",id:"question-1--en-configurantmultercomme-middlewarede-gestion-de-fichiers-quels-sont-les-deux-arguments-n\xe9cessaires",children:[],level:4},{value:"Question 2 : Quelle propri\xe9t\xe9 est ajout\xe9e \xe0 la requ\xeate par le <em>middleware</em> <code>multer</code>\xa0?",id:"question-2--quelle-propri\xe9t\xe9-est-ajout\xe9e-\xe0-la-requ\xeate-par-le-middleware-multer",children:[],level:4},{value:"Question 3 : Comment r\xe9cup\xe8re-t-on le segment de base de l&#39;URL de notre serveur\xa0?",id:"question-3--comment-r\xe9cup\xe8re-t-on-le-segment-de-base-de-lurl-de-notre-serveur",children:[],level:4},{value:"Question 4 : Pour permettre l&#39;acc\xe8s \xe0 des ressources statiques comme des images, quelle configuration de <em>middleware</em> est correcte\xa0?",id:"question-4--pour-permettre-lacc\xe8s-\xe0-des-ressources-statiques-comme-des-images-quelle-configuration-de-middleware-est-correcte",children:[],level:4},{value:"Question 5 : Si une requ\xeate entrante contient un fichier ainsi que d&#39;autres donn\xe9es, notre fonction <code>bodyParser.json()</code>\xa0transformera automatiquement les autres donn\xe9es en JSON exploitable.",id:"question-5--si-une-requ\xeate-entrante-contient-un-fichier-ainsi-que-dautres-donn\xe9es-notre-fonction-bodyparserjsontransformera-automatiquement-les-autres-donn\xe9es-en-json-exploitable",children:[],level:4},{value:"Question 6 : Laquelle de ces fonctions permet de supprimer un fichier \xe0 l&#39;aide du package\xa0<code>fs</code>\xa0?",id:"question-6--laquelle-de-ces-fonctions-permet-de-supprimer-un-fichier-\xe0-laide-du-packagefs",children:[],level:4},{value:"Question 7 : <code>multer</code>\xa0nous donne automatiquement l&#39;extension d&#39;un fichier entrant.",id:"question-7--multernous-donne-automatiquement-lextension-dun-fichier-entrant",children:[],level:4},{value:"Question 8 : En impl\xe9mentant\xa0<code>multer</code>\xa0sur une route qui utilise \xe9galement un <em>middleware</em> d&#39;authentification, l&#39;ordre d&#39;enregistrement des <em>middlewares</em> n&#39;a aucune importance.",id:"question-8--en-impl\xe9mentantmultersur-une-route-qui-utilise-\xe9galement-un-middleware-dauthentification-lordre-denregistrement-des-middlewares-na-aucune-importance",children:[],level:4}],level:2}],p={toc:u};function c(e){var n=e.components,i=(0,t.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"ajoutez-une-gestion-des-fichiers-utilisateur-sur-lapplication"},"Ajoutez une gestion des fichiers utilisateur sur l'application"),(0,a.mdx)("h2",{id:"acceptez-les-fichiers-entrants-avec-multer"},"Acceptez les fichiers entrants avec multer"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466627-acceptez-les-fichiers-entrants-avec-multer"},"Acceptez les fichiers entrants avec multer - Passez au Full stack avec Node.js, Express et MongoDB - OpenClassrooms")),(0,a.mdx)(s.fG,{vimeoId:"373130245",mdxType:"Vimeo"}),(0,a.mdx)("br",null),(0,a.mdx)("p",null,"Dans cette derni\xe8re partie du cours, nous allons impl\xe9menter des\xa0",(0,a.mdx)("strong",{parentName:"p"},"t\xe9l\xe9chargements de fichiers"),"\xa0pour que les utilisateurs\npuissent t\xe9l\xe9charger des images d'articles \xe0 vendre. Pour ce faire, nous utiliserons\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"multer"),", un package qui nous permet de g\xe9rer\nles fichiers entrants dans les\xa0requ\xeates HTTP. Commen\xe7ons par installer\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"multer"),"\xa0et par cr\xe9er un \xe9l\xe9ment de\xa0",(0,a.mdx)("em",{parentName:"p"},"middleware")," pour g\xe9rer\nces fichiers entrants."),(0,a.mdx)("h3",{id:"configurez-le-middleware-de-gestion-des-fichiers"},"Configurez le ",(0,a.mdx)("em",{parentName:"h3"},"middleware")," de gestion des fichiers"),(0,a.mdx)(s.fG,{vimeoId:"374676613",mdxType:"Vimeo"}),(0,a.mdx)("br",null),(0,a.mdx)("p",null,"Nous devrons d'abord installer\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"multer"),"\xa0dans notre projet :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install --save multer\n")),(0,a.mdx)("p",null,"Les images seront enregistr\xe9es dans un sous-dossier appel\xe9\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"images"),". Cr\xe9ez donc ce sous-dossier dans votre dossier\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"backend"),"."),(0,a.mdx)("p",null,"Vous pouvez maintenant cr\xe9er un ",(0,a.mdx)("em",{parentName:"p"},"middleware")," dans notre dossier\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"middleware"),"\xa0appel\xe9\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"multer-config.js"),"\xa0:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const multer = require('multer');\n\nconst MIME_TYPES = {\n    'image/jpg': 'jpg',\n    'image/jpeg': 'jpg',\n    'image/png': 'png'\n};\n\nconst storage = multer.diskStorage({\n    destination: (req, file, callback) => {\n        callback(null, 'images');\n    },\n    filename: (req, file, callback) => {\n        const name = file.originalname.split(' ').join('_');\n        const extension = MIME_TYPES[file.mimetype];\n        callback(null, name + Date.now() + '.' + extension);\n    }\n});\n\nmodule.exports = multer({storage: storage}).single('image');\n")),(0,a.mdx)("p",null,"Dans ce\xa0",(0,a.mdx)("em",{parentName:"p"},"middleware")," :"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"nous cr\xe9ons une constante\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"storage"),", \xe0 passer \xe0\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"multer"),"\xa0comme\xa0configuration, qui contient la logique n\xe9cessaire pour indiquer\n\xe0\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"multer"),"\xa0o\xf9 enregistrer les fichiers entrants :",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"la fonction\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"destination"),"\xa0indique \xe0\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"multer"),"\xa0d'enregistrer les fichiers dans le dossier\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"images"),"\xa0;"),(0,a.mdx)("li",{parentName:"ul"},"la fonction\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"filename"),"\xa0indique \xe0\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"multer"),"\xa0d'utiliser le nom d'origine,\xa0de remplacer\xa0les espaces par des ",(0,a.mdx)("em",{parentName:"li"},"underscores")," et\nd'ajouter un\xa0timestamp\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"Date.now()"),"\xa0comme nom de fichier. Elle utilise ensuite la constante\xa0dictionnaire de type MIME pour\nr\xe9soudre l'extension de fichier appropri\xe9e ;"))),(0,a.mdx)("li",{parentName:"ol"},"nous exportons ensuite l'\xe9l\xe9ment\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"multer"),"\xa0enti\xe8rement configur\xe9, lui passons notre constante\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"storage"),"\xa0et lui indiquons que\nnous g\xe9rerons uniquement les t\xe9l\xe9chargements de fichiers image.")),(0,a.mdx)("p",null,"Avant de pouvoir appliquer notre ",(0,a.mdx)("em",{parentName:"p"},"middleware")," \xe0 nos routes\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"stuff"),", nous devrons les modifier quelque peu, car la structure des\ndonn\xe9es entrantes n'est pas tout \xe0 fait la m\xeame avec des fichiers\xa0",(0,a.mdx)("em",{parentName:"p"},"et"),"\xa0des donn\xe9es\xa0JSON."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"modifiez-les-routes-pour-prendre-en-compte-les-fichiers"},"Modifiez les routes pour prendre en compte les fichiers"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466669-modifiez-les-routes-pour-prendre-en-compte-les-fichiers"},"Modifiez les routes pour prendre en compte les fichiers - Passez au Full stack avec Node.js, Express et MongoDB - OpenClassrooms")),(0,a.mdx)(s.fG,{vimeoId:"373130352",mdxType:"Vimeo"}),(0,a.mdx)("br",null),(0,a.mdx)("p",null,"Pour que notre ",(0,a.mdx)("em",{parentName:"p"},"middleware")," de t\xe9l\xe9chargement de fichiers fonctionne sur nos routes, nous devrons les modifier, car le format\nd'une\xa0requ\xeate\xa0contenant un fichier du front-end est diff\xe9rent."),(0,a.mdx)("h3",{id:"modifiez-la-routepost"},"Modifiez la route\xa0POST"),(0,a.mdx)(s.fG,{vimeoId:"374676513",mdxType:"Vimeo"}),(0,a.mdx)("br",null),(0,a.mdx)("p",null,"Tout d'abord, ajoutons notre ",(0,a.mdx)("em",{parentName:"p"},"middleware")," ",(0,a.mdx)("inlineCode",{parentName:"p"},"multer"),"\xa0\xe0 notre route\xa0POST\xa0dans notre routeur\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"stuff"),"\xa0:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst router = express.Router();\n\nconst auth = require('../middleware/auth');\nconst multer = require('../middleware/multer-config');\n\nconst stuffCtrl = require('../controllers/stuff');\n\nrouter.get('/', auth, stuffCtrl.getAllStuff);\nrouter.post('/', auth, multer, stuffCtrl.createThing);\nrouter.get('/:id', auth, stuffCtrl.getOneThing);\nrouter.put('/:id', auth, stuffCtrl.modifyThing);\nrouter.delete('/:id', auth, stuffCtrl.deleteThing);\n\nmodule.exports = router;\n")),(0,a.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"!")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"L'ordre des ",(0,a.mdx)("em",{parentName:"p"},"middlewares")," est important ! Si nous devons placer\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"multer"),"\xa0avant le ",(0,a.mdx)("em",{parentName:"p"},"middleware")," d'authentification, m\xeame les images\ndes\xa0requ\xeates non authentifi\xe9es seront enregistr\xe9es dans le serveur. Veillez \xe0 placer\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"multer"),"\xa0",(0,a.mdx)("strong",{parentName:"p"},"apr\xe8s"),"\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"auth"),"\xa0!"))),(0,a.mdx)("p",null,"Pour g\xe9rer correctement la nouvelle\xa0requ\xeate entrante, nous devons mettre \xe0 jour notre contr\xf4leur :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"exports.createThing = (req, res, next) => {\n    const thingObject = JSON.parse(req.body.thing);\n    delete thingObject._id;\n    const thing = new Thing({\n        ...thingObject,\n        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`\n    });\n    thing.save()\n    .then(() => res.status(201).json({ message: 'Objet enregistr\xe9 !'}))\n    .catch(error => res.status(400).json({ error }));\n};\n")),(0,a.mdx)("p",null,"Que fait le code ci-dessus ?"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Pour ajouter un fichier \xe0 la requ\xeate, le front-end\xa0doit envoyer les donn\xe9es de la\xa0requ\xeate\xa0sous la forme form-data, et non sous\nforme de JSON. Le corps de la\xa0requ\xeate contient une cha\xeene\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"thing"),", qui est simplement un objet\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"Thing"),"\xa0converti en cha\xeene. Nous\ndevons donc l'analyser \xe0 l'aide de\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"JSON.parse()"),"\xa0pour obtenir un objet utilisable."),(0,a.mdx)("li",{parentName:"ul"},"Nous devons \xe9galement r\xe9soudre l'URL compl\xe8te de notre image, car\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"req.file.filename"),"\xa0ne contient que le segment\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"filename"),".\nNous utilisons\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"req.protocol"),"\xa0pour obtenir le premier\xa0segment (dans notre cas\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"'http'"),"). Nous ajoutons\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"'://'"),",\xa0puis utilisons\n",(0,a.mdx)("inlineCode",{parentName:"li"},"req.get('host')"),"\xa0pour r\xe9soudre l'h\xf4te du serveur\xa0(ici,\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"'localhost:3000'"),"). Nous ajoutons finalement\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"'/images/'"),"\xa0et le nom de\nfichier pour compl\xe9ter notre\xa0URL.")),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Pensez \xe0 utiliser la section Partie 4 ! Si vous enregistrez le contr\xf4leur en l'\xe9tat et testez l'application, vous constaterez que\n",(0,a.mdx)("strong",{parentName:"p"},"presque"),"\xa0tout fonctionne. Le seul probl\xe8me que nous avons est l'erreur 404 que nous obtenons lors de la tentative d'extraction\nde l'image, alors que notre URL semble correcte. Que se passe-t-il donc ici ?"))),(0,a.mdx)("p",null,"En fait,\xa0nous effectuons une demande GET\xa0vers\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"http://localhost:3000/images/<image-name>.jpg"),". Cela semble\xa0simple, mais n'oubliez\npas que notre application\xa0s'ex\xe9cute sur\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"localhost:3000"),"\xa0et nous ne lui avons pas indiqu\xe9 comment r\xe9pondre aux\xa0requ\xeates transmises\n\xe0 cette route :\xa0elle renvoie donc une erreur 404. Pour rem\xe9dier \xe0 cela, nous devons indiquer \xe0 notre\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"app.js"),"\xa0comment traiter les\nrequ\xeates vers la route\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"/image"),", en\xa0rendant notre dossier\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"images"),"\xa0statique."),(0,a.mdx)("p",null,"Il nous faudra une nouvelle importation dans\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"app.js"),"\xa0pour acc\xe9der au ",(0,a.mdx)("em",{parentName:"p"},"path")," de notre serveur :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const path = require('path');\n")),(0,a.mdx)("p",null,"De plus, nous ajoutons le gestionnaire de routage suivant juste au-dessus de nos routes actuelles :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.use('/images', express.static(path.join(__dirname, 'images')));\n")),(0,a.mdx)("p",null,"Cela indique \xe0\xa0Express qu'il faut g\xe9rer la ressource\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"images"),"\xa0de mani\xe8re statique (un sous-r\xe9pertoire de notre r\xe9pertoire de base,\n",(0,a.mdx)("inlineCode",{parentName:"p"},"__dirname"),") \xe0 chaque fois qu'elle re\xe7oit une\xa0requ\xeate\xa0vers la route\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"/images"),". Enregistrez et actualisez l'application dans le\nnavigateur\xa0; d\xe9sormais, tout devrait fonctionner correctement. Et maintenant, occupons-nous de la route PUT !"),(0,a.mdx)("h3",{id:"modifiez-la-route-put"},"Modifiez la route PUT"),(0,a.mdx)(s.fG,{vimeoId:"374676541",mdxType:"Vimeo"}),(0,a.mdx)("br",null),(0,a.mdx)("p",null,"La modification de notre route\xa0PUT est sensiblement plus compliqu\xe9e, car nous devons prendre en compte deux possibilit\xe9s :\nl'utilisateur a mis \xe0 jour l'image, ou pas. Dans le premier cas, nous recevrons l'\xe9l\xe9ment form-data et le fichier. Dans le second\ncas, nous recevrons uniquement les donn\xe9es\xa0JSON."),(0,a.mdx)("p",null,"Tout d'abord, ajoutons\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"multer"),"\xa0comme\xa0",(0,a.mdx)("em",{parentName:"p"},"middleware")," \xe0 notre route PUT :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst router = express.Router();\n\nconst auth = require('../middleware/auth');\nconst multer = require('../middleware/multer-config');\n\nconst stuffCtrl = require('../controllers/stuff');\n\nrouter.get('/', auth, stuffCtrl.getAllStuff);\nrouter.post('/', auth, multer, stuffCtrl.createThing);\nrouter.get('/:id', auth, stuffCtrl.getOneThing);\nrouter.put('/:id', auth, multer, stuffCtrl.modifyThing);\nrouter.delete('/:id', auth, stuffCtrl.deleteThing);\n\nmodule.exports = router;\n")),(0,a.mdx)("p",null,"\xc0 pr\xe9sent, nous devons modifier\xa0notre fonction\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"modifyThing()"),"\xa0pour voir si nous avons re\xe7u ou non un nouveau fichier, et r\xe9pondre\nen cons\xe9quence :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"exports.modifyThing = (req, res, next) => {\n    const thingObject = req.file ?\n        {\n            ...JSON.parse(req.body.thing),\n            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`\n        } : { ...req.body };\n    Thing.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })\n    .then(() => res.status(200).json({ message: 'Objet modifi\xe9 !'}))\n    .catch(error => res.status(400).json({ error }));\n};\n")),(0,a.mdx)("p",null,"Dans cette version modifi\xe9e de la fonction, on cr\xe9e un objet\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"thingObject"),"\xa0qui regarde si\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"req.file"),"\xa0existe ou non. S'il existe,\non traite la nouvelle image ; s'il n'existe pas, on traite simplement l'objet entrant. On cr\xe9e ensuite une instance\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"Thing"),"\xa0\xe0\npartir de\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"thingObject"),", puis on effectue la modification."),(0,a.mdx)("p",null,"F\xe9licitations ! Notre application g\xe8re correctement les t\xe9l\xe9chargements de fichiers lorsque nous mettons de nouveaux articles en\nvente et lorsque nous modifions les articles existants."),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"d\xe9veloppez-la-fonction-delete-du-back-end"},"D\xe9veloppez la fonction delete du back-end"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466697-developpez-la-fonction-delete-du-back-end"},"D\xe9veloppez la fonction delete du back-end - Passez au Full stack avec Node.js, Express et MongoDB - OpenClassrooms")),(0,a.mdx)(s.fG,{vimeoId:"373130533",mdxType:"Vimeo"}),(0,a.mdx)("br",null),(0,a.mdx)("h3",{id:"modifiez-la-route-delete"},"Modifiez la route DELETE"),(0,a.mdx)(s.fG,{vimeoId:"374676574",mdxType:"Vimeo"}),(0,a.mdx)("br",null),(0,a.mdx)("p",null,"En ce qui concerne la gestion des fichiers dans notre back-end, il faut absolument nous assurer que, \xe0 chaque suppression d'un\n",(0,a.mdx)("inlineCode",{parentName:"p"},"Thing"),"\xa0de la base de donn\xe9es, le fichier image correspondant est \xe9galement supprim\xe9."),(0,a.mdx)("p",null,"Dans notre contr\xf4leur\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"stuff"),", il nous faut une nouvelle importation. Il s'agit du package\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"fs"),"\xa0de Node :"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\n")),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},(0,a.mdx)("inlineCode",{parentName:"p"},"fs"),"\xa0signifie \xab file system \xbb (soit \xab syst\xe8me de fichiers \xbb en fran\xe7ais). Il nous donne acc\xe8s aux fonctions qui nous permettent de\nmodifier le syst\xe8me de fichiers, y compris aux fonctions permettant de supprimer les fichiers."))),(0,a.mdx)("p",null,"\xc0 pr\xe9sent, nous pouvons modifier notre fonction\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"deleteThing()"),"\xa0:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"exports.deleteThing = (req, res, next) => {\n    Thing.findOne({ _id: req.params.id })\n    .then(thing => {\n        const filename = thing.imageUrl.split('/images/')[1];\n        fs.unlink(`images/${filename}`, () => {\n            Thing.deleteOne({ _id: req.params.id })\n            .then(() => res.status(200).json({ message: 'Objet supprim\xe9 !'}))\n            .catch(error => res.status(400).json({ error }));\n        });\n    })\n    .catch(error => res.status(500).json({ error }));\n};\n")),(0,a.mdx)("p",null,"Dans cette fonction :"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"nous utilisons l'ID que nous recevons comme param\xe8tre pour acc\xe9der au\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"Thing"),"\xa0correspondant dans la base de donn\xe9es ;"),(0,a.mdx)("li",{parentName:"ul"},"nous utilisons le fait de savoir que notre URL d'image contient un segment\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"/images/"),"\xa0pour s\xe9parer le nom de fichier ;"),(0,a.mdx)("li",{parentName:"ul"},"nous utilisons\xa0ensuite la fonction\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"unlink"),"\xa0du package\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"fs"),"\xa0pour supprimer ce fichier, en lui passant le fichier \xe0 supprimer et\nle\xa0",(0,a.mdx)("em",{parentName:"li"},"callback")," \xe0 ex\xe9cuter une fois ce fichier supprim\xe9 ;"),(0,a.mdx)("li",{parentName:"ul"},"dans le ",(0,a.mdx)("em",{parentName:"li"},"callback"),", nous impl\xe9mentons la logique d'origine, en supprimant le\xa0",(0,a.mdx)("inlineCode",{parentName:"li"},"Thing"),"\xa0de la base de donn\xe9es.")),(0,a.mdx)("p",null,"Notre\xa0API\xa0peut d\xe9sormais g\xe9rer correctement toutes les op\xe9rations CRUD contenant des fichiers : lorsqu'un utilisateur cr\xe9e un\n",(0,a.mdx)("inlineCode",{parentName:"p"},"Thing"),"\xa0,\xa0met \xe0 jour un\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"Thing"),"\xa0existant ou supprime un\xa0",(0,a.mdx)("inlineCode",{parentName:"p"},"Thing"),"\xa0!"),(0,a.mdx)("h3",{id:"r\xe9capitulons"},"R\xe9capitulons..."),(0,a.mdx)("p",null,"Vous avez presque termin\xe9. Bravo !"),(0,a.mdx)("p",null,"Regardons ce que vous avez appris :"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"vous avez cr\xe9\xe9 un serveur Node et l'avez utilis\xe9 pour servir une application Express ;"),(0,a.mdx)("li",{parentName:"ul"},"vous avez connect\xe9 votre application \xe0 une base de donn\xe9es MongoDB et, \xe0 l'aide de Mongoose, vous avez cr\xe9\xe9 une API RESTful\npermettant les op\xe9rations CRUD (Create, Read, Update and Delete \u2014 Cr\xe9er, Lire, Modifier et Supprimer) ;"),(0,a.mdx)("li",{parentName:"ul"},"vous avez impl\xe9ment\xe9 une authentification s\xe9curis\xe9e \xe0 base du\xa0",(0,a.mdx)("em",{parentName:"li"},"token")," JWT ;"),(0,a.mdx)("li",{parentName:"ul"},"enfin, vous avez impl\xe9ment\xe9 la gestion du t\xe9l\xe9chargement de fichiers, permettant ainsi aux utilisateurs d'ajouter et de supprimer\ndes images.")),(0,a.mdx)("p",null,"F\xe9licitations ! Vous avez bient\xf4t termin\xe9 ce cours sur Node, Express et MongoDB. Je vous laisse r\xe9pondre au dernier quiz pour\ntester vos comp\xe9tences."),(0,a.mdx)("p",null,"La suite ? \xc0 vous de choisir ! Vous pouvez, par exemple, choisir d'approfondir vos connaissances back-end. Vous pouvez aussi\ncommencer l'apprentissage d'un ",(0,a.mdx)("em",{parentName:"p"},"framework")," ou d'une librairie front-end avanc\xe9e telle que Angular, React ou Vue."),(0,a.mdx)("p",null,"O\xf9 que vous alliez par la suite, je vous souhaite bonne chance, et\xa0",(0,a.mdx)("strong",{parentName:"p"},"happy coding")," !"),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"quiz--saurez-vous-g\xe9rer-des-fichiers-utilisateur-"},"Quiz : Saurez-vous g\xe9rer des fichiers utilisateur ?"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/exercises/3725"},"Saurez-vous g\xe9rer des fichiers utilisateur ? - OpenClassrooms")),(0,a.mdx)("h4",{id:"comp\xe9tences-\xe9valu\xe9es"},"Comp\xe9tences \xe9valu\xe9es"),(0,a.mdx)("i",{class:"bi bi-check2-circle"})," G\xe9rer des fichiers utilisateurs sur une application Express",(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-1--en-configurantmultercomme-middlewarede-gestion-de-fichiers-quels-sont-les-deux-arguments-n\xe9cessaires"},"Question 1 : En configurant\xa0",(0,a.mdx)("inlineCode",{parentName:"h4"},"multer"),"\xa0comme ",(0,a.mdx)("em",{parentName:"h4"},"middleware"),"\xa0de gestion de fichiers, quels sont les deux arguments n\xe9cessaires\xa0?"),(0,a.mdx)("i",{class:"bi bi-circle"})," ",(0,a.mdx)("code",null,"source"),"\xa0et\xa0",(0,a.mdx)("code",null,"destination"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-circle"})," ",(0,a.mdx)("code",null,"destination"),"\xa0et\xa0",(0,a.mdx)("code",null,"filetype"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-circle"})," ",(0,a.mdx)("code",null,"filename"),"\xa0et\xa0",(0,a.mdx)("code",null,"filetype"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-record-circle"})," ",(0,a.mdx)("code",null,"destination"),"\xa0et\xa0",(0,a.mdx)("code",null,"filename"),".",(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Le package\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"multer"),"\xa0a besoin de conna\xeetre la destination du fichier ainsi que le nom de fichier souhait\xe9.")),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-2--quelle-propri\xe9t\xe9-est-ajout\xe9e-\xe0-la-requ\xeate-par-le-middleware-multer"},"Question 2 : Quelle propri\xe9t\xe9 est ajout\xe9e \xe0 la requ\xeate par le ",(0,a.mdx)("em",{parentName:"h4"},"middleware")," ",(0,a.mdx)("inlineCode",{parentName:"h4"},"multer"),"\xa0?"),(0,a.mdx)("i",{class:"bi bi-record-circle"})," L'objet\xa0",(0,a.mdx)("code",null,"file"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-circle"})," L'objet\xa0",(0,a.mdx)("code",null,"body"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-circle"})," L'objet\xa0",(0,a.mdx)("code",null,"formData"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-circle"})," L'objet\xa0",(0,a.mdx)("code",null,"host"),".",(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Le package\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"multer"),"\xa0ajoute une propri\xe9t\xe9\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"req.file"),".")),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-3--comment-r\xe9cup\xe8re-t-on-le-segment-de-base-de-lurl-de-notre-serveur"},"Question 3 : Comment r\xe9cup\xe8re-t-on le segment de base de l'URL de notre serveur\xa0?"),(0,a.mdx)("i",{class:"bi bi-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"`${req.body}://${req.host}`\n")),(0,a.mdx)("i",{class:"bi bi-record-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"`${req.protocol}://${req.get('host')}`\n")),(0,a.mdx)("i",{class:"bi bi-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"`${req.protocol}://${req.host}`\n")),(0,a.mdx)("i",{class:"bi bi-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"`${req.get('protocol')}://${req.get('host')}`\n")),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Pour construire l'URL pour notre serveur, il nous faut le protocole (",(0,a.mdx)("inlineCode",{parentName:"em"},"http"),"\xa0ou\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"https"),"\xa0g\xe9n\xe9ralement), le segment\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"://"),", puis\nl'h\xf4te de la requ\xeate (dans le cas de notre serveur de d\xe9veloppement, il s'agit de\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"localhost:3000"),").")),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-4--pour-permettre-lacc\xe8s-\xe0-des-ressources-statiques-comme-des-images-quelle-configuration-de-middleware-est-correcte"},"Question 4 : Pour permettre l'acc\xe8s \xe0 des ressources statiques comme des images, quelle configuration de ",(0,a.mdx)("em",{parentName:"h4"},"middleware")," est correcte\xa0?"),(0,a.mdx)("i",{class:"bi bi-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.use('/images', res.send(path.join(__dirname, 'images')));\n")),(0,a.mdx)("i",{class:"bi bi-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.use('/images', express.static(__dirname, '/images'));\n")),(0,a.mdx)("i",{class:"bi bi-record-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.use('/images', express.static(path.join(__dirname, 'images')))\n")),(0,a.mdx)("i",{class:"bi bi-circle"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"app.use('/images', (req, res, next) \\=> {\n    next(path.join(\\_\\_dirname, 'images'));\n})\n")),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"\xc0 l'aide du package\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"path"),"\xa0et de la m\xe9thode Express\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"static"),", on peut servir des ressources statiques.")),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-5--si-une-requ\xeate-entrante-contient-un-fichier-ainsi-que-dautres-donn\xe9es-notre-fonction-bodyparserjsontransformera-automatiquement-les-autres-donn\xe9es-en-json-exploitable"},"Question 5 : Si une requ\xeate entrante contient un fichier ainsi que d'autres donn\xe9es, notre fonction ",(0,a.mdx)("inlineCode",{parentName:"h4"},"bodyParser.json()"),"\xa0transformera automatiquement les autres donn\xe9es en JSON exploitable."),(0,a.mdx)("i",{class:"bi bi-circle"})," Vrai.",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-record-circle"})," Faux.",(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Faux. Les donn\xe9es entrantes sont sous la forme de\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"form-data"),". Il faut donc utiliser\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"JSON.parse()"),"\xa0pour transformer des cha\xeenes\nde caract\xe8res en JSON exploitable.")),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-6--laquelle-de-ces-fonctions-permet-de-supprimer-un-fichier-\xe0-laide-du-packagefs"},"Question 6 : Laquelle de ces fonctions permet de supprimer un fichier \xe0 l'aide du package\xa0",(0,a.mdx)("inlineCode",{parentName:"h4"},"fs"),"\xa0?"),(0,a.mdx)("i",{class:"bi bi-circle"})," ",(0,a.mdx)("code",null,"fs.remove()"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-circle"})," ",(0,a.mdx)("code",null,"fs.delete()"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-record-circle"})," ",(0,a.mdx)("code",null,"fs.unlink()"),".",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-circle"})," ",(0,a.mdx)("code",null,"fs.deleteOne()"),".",(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"La fonction\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"unlink"),"\xa0permet de supprimer des fichiers du syst\xe8me de fichiers.")),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-7--multernous-donne-automatiquement-lextension-dun-fichier-entrant"},"Question 7 : ",(0,a.mdx)("inlineCode",{parentName:"h4"},"multer"),"\xa0nous donne automatiquement l'extension d'un fichier entrant."),(0,a.mdx)("i",{class:"bi bi-circle"})," Vrai.",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-record-circle"})," Faux.",(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Faux. Il nous faut utiliser le type MIME d'un fichier pour d\xe9terminer son format, et donc trouver son extension.")),(0,a.mdx)("hr",null),(0,a.mdx)("h4",{id:"question-8--en-impl\xe9mentantmultersur-une-route-qui-utilise-\xe9galement-un-middleware-dauthentification-lordre-denregistrement-des-middlewares-na-aucune-importance"},"Question 8 : En impl\xe9mentant\xa0",(0,a.mdx)("inlineCode",{parentName:"h4"},"multer"),"\xa0sur une route qui utilise \xe9galement un ",(0,a.mdx)("em",{parentName:"h4"},"middleware")," d'authentification, l'ordre d'enregistrement des ",(0,a.mdx)("em",{parentName:"h4"},"middlewares")," n'a aucune importance."),(0,a.mdx)("i",{class:"bi bi-circle"})," Vrai.",(0,a.mdx)("br",null),(0,a.mdx)("i",{class:"bi bi-record-circle"})," Faux.",(0,a.mdx)("br",null),(0,a.mdx)("br",null),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Faux. Si\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"multer"),"\xa0est enregistr\xe9 avant un ",(0,a.mdx)("em",{parentName:"em"},"middleware")," d'authentification, tout\xa0fichier contenu dans\xa0une requ\xeate, m\xeame non\nauthentifi\xe9e, sera enregistr\xe9 sur le syst\xe8me de fichiers. Il est donc essentiel, dans cette situation, d'enregistrer\xa0",(0,a.mdx)("inlineCode",{parentName:"em"},"multer"),(0,a.mdx)("strong",{parentName:"em"},"apr\xe8s")," le ",(0,a.mdx)("em",{parentName:"em"},"middleware")," d'authentification.")))}c.isMDXComponent=!0}}]);