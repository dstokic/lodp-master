(self.webpackChunklite=self.webpackChunklite||[]).push([[3673],{90194:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var r=n(67294),i=n(55099),o=n(42933),l=n(77180),a=n(6688),c=n(14856),s=function(e){var t,n=e.buttonSize,s=void 0===n?"LARGE":n,u=e.buttonStyle,d=void 0===u?"STRONG":u,m=e.showMailIcon,p=void 0===m||m,f=e.onClick,E=e.width,b=e.buttonText,g=void 0===b?"Get this newsletter":b,h=e.redirectUrl,y=e.displayOnly,w=void 0!==y&&y,v=(0,l.F)(),x=(0,a.I)();return r.createElement(i.z,{buttonStyle:d,onClick:f,size:s,width:E,padding:"0 8px",href:h,displayOnly:w},r.createElement(o.x,{display:"flex",paddingRight:"8px",justifyContent:"center",alignItems:"center"},p&&r.createElement("span",{className:x((t=v.accentColor.background,{stroke:t})),"aria-hidden":"true"},r.createElement(c.Z,null)),g))}},8015:(e,t,n)=>{"use strict";n.d(t,{B:()=>u});var r=n(67294),i=n(42933),o=n(55099),l=n(6688),a=n(99701),c={from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},s=function(e){return function(t){return{width:"20px",height:"20px",borderRadius:"50%",borderWidth:"1px",borderStyle:"solid",borderColor:"".concat(t.baseColor.border.light," transparent ").concat(t.baseColor.border.light," ").concat(t.baseColor.border.light),animation:"".concat(e," 1s infinite linear;")}}},u=function(e){var t=e.buttonSize,n=void 0===t?"LARGE":t,u=e.buttonStyle,d=void 0===u?"STRONG":u,m=e.width,p=void 0===m?"100%":m,f=(0,l.I)(),E=function(){var e=(0,a.o)({keyframesName:c}).keyframesName;return r.createElement("div",{className:f(s(e))})},b=function(){return r.createElement(i.x,null,r.createElement(i.x,{display:"inline-block",float:"left",marginRight:"8px"},r.createElement(E,null)),r.createElement(i.x,{float:"left"},"Loading.."))};return r.createElement("div",{style:{cursor:"wait"}},r.createElement(o.z,{buttonStyle:d,onClick:function(){return null},size:n,width:p,disabled:!0},r.createElement(b,null)))}},11969:(e,t,n)=>{"use strict";n.d(t,{B:()=>A,x:()=>L});var r=n(67154),i=n.n(r),o=n(63038),l=n.n(o),a=n(28655),c=n.n(a),s=n(71439),u=n(67294),d=n(90194),m=n(99033),p=n(76532),f=n(62181),E=n(42933),b=n(92528),g=n(41707),h=n(1072),y=n(55099),w=n(82318),v=n(48798),x=n(98024),S=n(95760),T=n(51512),C=n(14391),R=n(85277),O=n(8403),k=n(67297),N=n(51064),V=n(27952),_=n(534);function I(){var e=c()(["\n  fragment NewsletterV3SubscribeButton_newsletterV3 on NewsletterV3 {\n    id\n    name\n    slug\n    type\n    user {\n      id\n      name\n      username\n    }\n    collection {\n      slug\n      ...SusiClickable_collection\n      ...collectionDefaultBackgroundTheme_collection\n    }\n    ...SusiClickable_newsletterV3\n    ...useNewsletterV3Subscription_newsletterV3\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return I=function(){return e},e}var A=(0,s.Ps)(I(),f.Os,f.GB,_.Gi,m.DI),L=function(e){var t,n,r,o,a=e.newsletterV3,c=e.buttonLayout,s=void 0===c?"MULTI-LINE":c,I=e.helperTextColor,A=void 0===I?"LIGHTER":I,L=e.showHelperText,P=void 0===L||L,B=e.showMailIcon,U=void 0===B||B,j=e.buttonSize,G=void 0===j?"LARGE":j,D=e.buttonStyle,M=void 0===D?"STRONG":D,F=e.redirectUrl,z=e.buttonText,$=e.width,W=(0,p.H)().value,Y=a.id,H=a.collection?a.collection:void 0,q=a.user?a.user:void 0,Q=(0,R.w)(),Z=(0,O.PM)(),K=(0,T.Lk)(),X=(0,S.Av)(),J=(0,k.v9)((function(e){return e.config.productName})),ee=(0,N.O)(!1),te=l()(ee,3),ne=te[0],re=te[1],ie=te[2];switch(a.type){case C.Rr.NEWSLETTER_TYPE_COLLECTION:t=a.name,n="Get this newsletter",r="You’re signed up for ".concat(t,"."),o="newsletter_v3_promo";break;case C.Rr.NEWSLETTER_TYPE_AUTHOR:t=null==q?void 0:q.name,n="Subscribe",r="You’re subscribed to ".concat(t),o="subscribe_user"}var oe=(0,m.oT)({newsletterV3:a,newsletterName:t}),le=oe.isSubscribed,ae=oe.hasError,ce=oe.setSubscribe;u.useEffect((function(){if(Z){var e=(0,T.P7)(Z||"").susiEntry;["collection_newsletter_v3_landing","newsletter_v3_promo"].includes(void 0===e?"":e)&&le&&Q({duration:"NEXTPAGE",toastStyle:"NEWSLETTER_SUBSCRIBE",extraParams:{newsletterName:t,newsletterType:a.type,unsubscribeFn:function(){return ce(!1)}}})}}),[Z,le]);var se=function(e){var t=e.children;return u.createElement(E.x,{margin:"COMPACT"===s?"10px 20px 10px 0":"",xs:{margin:"10px 0 0 0"}},t)},ue=function(e){var t=e.children;return u.createElement(E.x,{maxWidth:"COMPACT"===s?"380px":"",margin:"COMPACT"===s?"10px 0 10px 0":"10px 0 0 0"},u.createElement(x.F,{scale:"S",color:A},t))},de=function(){var e=(0,V.Zul)(Y),r={buttonSize:G,buttonStyle:M,onClick:function(){var e;W?W&&W.allowEmailAddressSharingEditorWriter?ce(!0,!1):re():null!=q&&null!==(e=q.newsletterV3)&&void 0!==e&&e.id?X.event("newsletterV3.subscribeClicked",{newsletterV3Id:q.newsletterV3.id,source:K}):null!=q&&q.id&&X.event("user.LOSubscribeClicked",{targetUserId:q.id,source:K})},showMailIcon:U,buttonText:z||n,redirectUrl:F,width:$};return u.createElement(se,null,W?u.createElement(u.Fragment,null,u.createElement(d.w,r),u.createElement(b.Q,{onConfirm:function(){return ce(!0,!0)},isVisible:ne,hide:ie,titleText:"Confirm your subscription to ".concat(t),confirmText:"Confirm now",buttonStyle:"STRONG",buttonSize:"LARGE",showCancelButton:!1,withCloseButton:!1,isDestructiveAction:!1},"By confirming, you agree to share your email address with the editors of newsletters and writers you've subscribed to so they can stay in contact with you outside of ".concat(J,". You can opt out of sharing your email address by unsubscribing in your Settings."))):u.createElement(f.R9,{operation:"register",newsletterV3:a,user:q,collection:H,actionUrl:e,susiEntry:o,redirectTo:F},u.createElement(d.w,i()({},r,{redirectUrl:void 0}))))};return u.createElement(u.Fragment,null,u.createElement(g.Z,null,(function(e){return u.createElement(h.f,{theme:(0,_.jN)(H,e)},le?u.createElement(u.Fragment,null,u.createElement(se,null,u.createElement(y.z,{buttonStyle:"SUBTLE",size:"SMALL",onClick:function(){return ce(!1)}},"Unsubscribe")),P&&u.createElement(ue,null,r)):u.createElement(T.cW,{source:{newsletterV3Id:a.id},extendSource:!0},u.createElement(de,null),P&&W&&u.createElement(ue,null,"Emails will be sent to ",W.email,".",u.createElement(f.R9,{operation:"login",newsletterV3:a,collection:H,susiEntry:o},u.createElement(w.r,{display:"block",onClick:function(){},linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Not you?")))))})),ae&&u.createElement(v.F,{toastStyle:"RETRYABLE_ERROR",isVisible:ae,hide:function(){}}))}},56202:(e,t,n)=>{"use strict";n.d(t,{QL:()=>B,Ae:()=>U,Lh:()=>j});var r=n(28655),i=n.n(r),o=n(59713),l=n.n(o),a=n(63038),c=n.n(a),s=n(46829),u=n(71439),d=n(67294),m=n(90194),p=n(8015),f=n(90738),E=n(14414),b=n(7785),g=n(7462),h=n(1072),y=n(42933),w=n(82318),v=n(98024),x=n(51512),S=n(77180),T=n(37581),C=n(14391),R=n(67297),O=n(49456),k=n(51299),N=n(27952),V=n(61598),_=n(534);function I(){var e=i()(["\n  fragment NewsletterV3SubscribeByEmail_newsletterV3 on NewsletterV3 {\n    id\n    slug\n    type\n    user {\n      id\n      name\n      username\n    }\n    collection {\n      ...collectionDefaultBackgroundTheme_collection\n      ...collectionUrl_collection\n    }\n  }\n  ","\n  ","\n"]);return I=function(){return e},e}function A(){var e=i()(["\n  mutation SendNewsletterSubscriptionAcctAuthEmail(\n    $newsletterV3Id: String!\n    $email: String!\n    $redirect: String\n    $captchaValue: String\n    $operation: String\n  ) {\n    sendNewsletterSubscriptionAcctAuthEmail(\n      newsletterV3Id: $newsletterV3Id\n      email: $email\n      redirect: $redirect\n      captchaValue: $captchaValue\n      operation: $operation\n    ) {\n      ... on SusiMethod {\n        value\n      }\n      ... on BadRequest {\n        message\n      }\n      ... on FailedChallenge {\n        message\n      }\n      ... on NotFound {\n        message\n      }\n    }\n  }\n"]);return A=function(){return e},e}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.centerContent,n=void 0!==t&&t,r=e.newsletterV3,i=e.isVertical,o=e.handleClick,l=(0,S.F)(),a=(0,x.pK)(),u=(0,x.hp)(),V=(0,R.v9)((function(e){return e.config.authDomain})),I=(0,R.v9)((function(e){return e.navigation.currentLocation})),A=(0,R.v9)((function(e){return e.config.productName})),L=d.useState(""),B=c()(L,2),j=B[0],G=B[1],D=d.useState(""),M=c()(D,2),F=M[0],z=M[1],$=d.useState(!1),W=c()($,2),Y=W[0],H=W[1],q=d.useState(!1),Q=c()(q,2),Z=Q[0],K=Q[1],X=d.useState(!1),J=c()(X,2),ee=J[0],te=J[1],ne=d.useState(!1),re=c()(ne,2),ie=re[0],oe=re[1],le=d.useState(""),ae=c()(le,2),ce=ae[0],se=ae[1],ue="register",de=r.type===C.Rr.NEWSLETTER_TYPE_AUTHOR?"Subscribe":"Get this newsletter",me=null==I.match("http[s]?://[^/]*".concat(V)),pe=r.collection,fe=r.id,Ee=r.slug,be=r.user,ge=(0,N.Zul)(fe),he=pe?(0,N.iBn)(Ee,V,pe,(null==be?void 0:be.username)||""):I;(0,s.useQuery)(b.qz,{fetchPolicy:"no-cache",skip:!ge||me,onCompleted:function(e){var t=e.accountToken;return t&&se((0,E.hQ)(he,a,u,ge,t))}});var ye=function(e){G(e),H(!0),setTimeout((function(){return H(!1)}),g.zn),K(!1),te(!1)},we=function(){(0,O.J)(F)?(te(!0),K(!0)):ye("Enter a valid email address.")},ve=function(){ye("We couldn't process your request. Try again, or contact our support team.")},xe=(0,s.useMutation)(U,{onCompleted:function(e){switch(e.sendNewsletterSubscriptionAcctAuthEmail.__typename){case"SusiMethod":z(F),oe(!0),o&&o();break;case"BadRequest":ye("Enter a valid email address.");break;case"FailedChallenge":case"NotFound":default:ve()}},onError:ve}),Se=c()(xe,1)[0],Te={newsletterV3Id:fe,email:F,operation:ue,redirect:ce},Ce=(0,k.U)(),Re=r.type===C.Rr.NEWSLETTER_TYPE_AUTHOR?{xl:425,lg:425,md:375,sm:475,xs:250,"":200}:{xl:375,lg:375,md:325,sm:450,xs:200,"":200};return d.createElement(h.f,{theme:(0,_.jN)(pe,l)},d.createElement(y.x,{alignItems:n?"center":"flex-start",display:"flex",flexDirection:"column",justifyContent:n?"center":"flex-start"},d.createElement(f.k,{callback:function(e){Se({variables:P({captchaValue:e},Te)})},shouldExecuteRecaptcha:Z}),d.createElement(y.x,{display:ie?"none":"inline"},d.createElement(y.x,{alignItems:i?"flex-start":"center",display:"flex",justifyContent:"space-between",flexDirection:i?"column":"row",sm:{alignItems:n?"center":"flex-start",flexDirection:"column",paddingTop:"16px"}},d.createElement(y.x,{marginTop:j&&"25px",sm:{marginTop:"0"}},d.createElement(g.II,{errorMessage:j,handleInputChange:function(e){z(e.target.value.trim())},handleSubmit:we,input:F,inputType:g.n$.EMAIL,isAnimating:Y,textAlign:"start",placeholder:"Your email",width:i?"250px":"".concat(Re[Ce],"px")})),d.createElement(y.x,{marginBottom:"auto",marginLeft:i?"0":"15px",sm:{marginLeft:"0px",marginTop:"15px"},marginTop:i?"20px":void 0},ee?d.createElement(p.B,{newsletterV3Id:fe}):d.createElement(T.$,{eventData:{operation:ue}},d.createElement(m.w,{onClick:we,buttonText:de})))),d.createElement(y.x,{marginTop:j?"10px":"25px",sm:{marginTop:"25px"}},d.createElement(v.F,{color:"DARKER",scale:"XS"},"By signing up, you will create a ",A," account if you don’t already have one. Review our"," ",d.createElement(w.r,{href:(0,N.wob)(),linkStyle:"OBVIOUS",inline:!0,target:"_blank"},"Privacy Policy")," ","for more information about our privacy practices."))),d.createElement(y.x,{display:ie?"inline":"none",marginBottom:"15px",marginTop:"5px",height:"75px"},d.createElement(v.F,{color:"DARKER",scale:"M"},A," sent you an email at ",F," to complete your subscription."))))},U=(0,u.Ps)(A()),j=(0,u.Ps)(I(),_.Gi,V.n)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3673.0d77c749.chunk.js.map