"use strict";(self.webpackChunkmon_web_dev_wiki=self.webpackChunkmon_web_dev_wiki||[]).push([[4729],{36316:function(e,n,s){s.r(n),s.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=s(87462),r=s(63366),t=(s(67294),s(3905)),o=(s(9877),s(58215),s(56222),["components"]),i={id:"Sauvegardez_des_donnees_sur_le_service_web",title:"Sauvegardez des donn\xe9es sur le service web"},d="Sauvegardez des donn\xe9es sur le service web",l={unversionedId:"Algorithmes/JavaScript/OpenClassrooms/Sauvegardez_des_donnees_sur_le_service_web",id:"Algorithmes/JavaScript/OpenClassrooms/Sauvegardez_des_donnees_sur_le_service_web",title:"Sauvegardez des donn\xe9es sur le service web",description:"Dans cet exercice nous voulons pouvoir entrer du texte dans le formulaire et l'envoyer vers un service web. Ce service web va simplement nous",source:"@site/docs/Algorithmes/JavaScript/1-OpenClassrooms/Sauvegardez_des_donnees_sur_le_service_web.mdx",sourceDirName:"Algorithmes/JavaScript/1-OpenClassrooms",slug:"/Algorithmes/JavaScript/OpenClassrooms/Sauvegardez_des_donnees_sur_le_service_web",permalink:"/Mon_Web_Dev_Wiki/docs/Algorithmes/JavaScript/OpenClassrooms/Sauvegardez_des_donnees_sur_le_service_web",editUrl:"https://github.com/gylgyl2000/Mon_Web_Dev_Wiki/edit/master/website/docs/Algorithmes/JavaScript/1-OpenClassrooms/Sauvegardez_des_donnees_sur_le_service_web.mdx",tags:[],version:"current",frontMatter:{id:"Sauvegardez_des_donnees_sur_le_service_web",title:"Sauvegardez des donn\xe9es sur le service web"},sidebar:"AlgorithmesSidebar",previous:{title:"Jour en heures, en minutes, en secondes",permalink:"/Mon_Web_Dev_Wiki/docs/Algorithmes/JavaScript/OpenClassrooms/Jour_en_heures_en_minutes_en_secondes"},next:{title:"Validez les donn\xe9es saisies par vos utilisateurs",permalink:"/Mon_Web_Dev_Wiki/docs/Algorithmes/JavaScript/OpenClassrooms/Validez_les_donnees_saisies_par_vos_utilisateurs"}},m=[],u={toc:m};function p(e){var n=e.components,s=(0,r.Z)(e,o);return(0,t.mdx)("wrapper",(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"sauvegardez-des-donn\xe9es-sur-le-service-web"},"Sauvegardez des donn\xe9es sur le service web"),(0,t.mdx)("div",{className:"algorithmes"},(0,t.mdx)("p",null,"Dans cet exercice nous voulons pouvoir entrer du texte dans le formulaire et l'envoyer vers un service web. Ce service web va simplement nous\nrenvoyer notre contenu en plus d'autres informations et nous allons afficher le contenu renvoy\xe9 par le serveur."),(0,t.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,t.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,t.mdx)("h5",{parentName:"div"},(0,t.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,t.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"instructions")),(0,t.mdx)("div",{parentName:"div",className:"admonition-content"},(0,t.mdx)("p",{parentName:"div"},"1 - Nous allons commencer par cr\xe9er une fonction appel\xe9e\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"send"),"\xa0et qui va cr\xe9er notre\xa0requ\xeate."),(0,t.mdx)("p",{parentName:"div"},"Nous souhaitons cr\xe9er une requ\xeate de type\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"POST"),"\xa0vers l'adresse suivante :\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"https://mockbin.com/request"),", et y envoyer un contenu JSON ayant\nune propri\xe9t\xe9\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"value"),"\xa0qui contiendra la valeur du champ de saisie de la page (avec l'ID\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"value"),"). Par exemple :\n",(0,t.mdx)("inlineCode",{parentName:"p"},'{value: document.getElementById("value").value}'),"."),(0,t.mdx)("p",{parentName:"div"},"Nous souhaitons aussi, lorsque la requ\xeate s'est bien envoy\xe9e, afficher le r\xe9sulat renvoy\xe9 par le service web. Pour ce faire, nous allons\nafficher ce qui se trouve dans\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"postData.text"),"\xa0de la r\xe9ponse dans le contenu HTML de l'\xe9l\xe9ment ayant pour ID\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"result"),"."),(0,t.mdx)("p",{parentName:"div"},"2 - Maintenant nous voulons envoyer notre requ\xeate, et donc appeler notre fonction\xa0",(0,t.mdx)("inlineCode",{parentName:"p"},"send"),"\xa0d\xe8s que nous soumettons le formulaire ayant pour ID\n",(0,t.mdx)("inlineCode",{parentName:"p"},"form"),"."),(0,t.mdx)("p",{parentName:"div"},"N'oubliez pas d'annuler le comportement par d\xe9faut de la soumission du formulaire, sinon votre page va se recharger."))),(0,t.mdx)("nav",{className:"algorithmes-nav"},(0,t.mdx)("div",{className:"algorithmes-nav-code"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<style>\nform {\n   max-width: 300px;\n   margin: auto;\n   margin-top: 30px;\n}\ninput[type="submit"] {\n   margin-top: 20px;\n   margin-bottom: 20px;\n}\n#result {\n   margin-top: 40px;\n   text-align: center;\n}\n</style>\n<body>  \n   <form className="form">\n      <label>Saisissez une valeur\n         <input type="text" id="value" />\n      </label>\n      <br />\n      <input type="submit" value="Envoyer" />\n   </form>\n   <div id="result"></div>\n\n<script type="text/javascript">\nfunction send(e) {\n   e.preventDefault();\n   fetch("https://mockbin.com/request", {\n      method: "POST",\n      headers: {\n         \'Accept\': \'application/json\', \n         \'Content-Type\': \'application/json\'\n      },\n      body: JSON.stringify({value: document.getElementById("value").value})\n   })\n   .then(function(res) {\n      if (res.ok) {\n         return res.json();\n      }\n   })\n   .then(function(value) {\n      document\n         .getElementById("result")\n         .innerText = value.postData.text;\n   });\n}\ndocument\n   .getElementById("form")\n   .addEventListener("submit", send);\n<\/script>\n</body>\n</html>\n'))),(0,t.mdx)("div",{className:"algorithmes-nav-html"},(0,t.mdx)("iframe",{src:"https://monwikidevweb.la-loutre.fr/data/OpenClassrooms/algo/Sauvegardez_des_donnees_sur_le_service_web/index.html"})))))}p.isMDXComponent=!0}}]);