(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{264:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(267),r=a(341),c=a(3),l=a(273),d=a.n(l),s=a(283),p=a.n(s),m=a(46),u=a(55),A=a(9),f=Object(c.b)(p.a).withConfig({displayName:"ProjectCardStyles__Card",componentId:"sc-1cq9061-0"})(["position:relative;overflow:hidden;padding-top:100%;grid-column:span 2;","{padding-top:",";grid-column:",";}"],m.a.tablet,function(e){return e.index%3==0?"50%":"100%"},function(e){return e.index%3==0?"span 2":"span 1"}),b=c.b.span.withConfig({displayName:"ProjectCardStyles__Background",componentId:"sc-1cq9061-1"})(["position:absolute;z-index:-1;left:0;top:0;width:100%;height:100%;background-color:",";"],function(e){return e.color}),g=c.b.div.withConfig({displayName:"ProjectCardStyles__Container",componentId:"sc-1cq9061-2"})(["position:absolute;left:0;top:0;width:100%;height:100%;display:grid;grid-template-columns:1fr;"]),h=c.b.div.withConfig({displayName:"ProjectCardStyles__Copy",componentId:"sc-1cq9061-3"})(["position:absolute;z-index:100;left:0;top:0;padding:2rem;h2,p{font-size:1.8rem;}color:",";","{padding:4rem;top:auto;bottom:",";h2{font-size:4rem;}}"],function(e){return"Binance"===e.client?"#02394A":A.a.white},m.a.desktop,function(e){return"Binance"===e.client?"auto":"0"}),w=c.b.p.withConfig({displayName:"ProjectCardStyles__Client",componentId:"sc-1cq9061-4"})(["font-weight:200;","{font-weight:400;}"],m.a.desktop),v=c.b.div.withConfig({displayName:"ProjectCardStyles__ImageWrapper",componentId:"sc-1cq9061-5"})(["position:absolute;bottom:0;right:0;width:",";height:",";overflow:hidden;transform:scale(1);",";transform-origin:",";",":hover &{transform:scale(1.1);}",":focus &{transform:scale(1.1);}","{height:100%;}"],function(e){return e.index%3==0?"50%":"100%"},function(e){return e.index%3==0?"50%":"100%"},u.b.satanSnap,function(e){e.client;return"50%"},f,f,m.a.tablet),C=c.b.button.withConfig({displayName:"ProjectCardStyles__Button",componentId:"sc-1cq9061-6"})(["position:absolute;right:2rem;bottom:0;padding:1.5rem 4rem;text-align:right;color:",";background-color:",";transform:translateY(6rem);",";",":hover &{transform:translateY(0rem);}",":focus &{transform:translateY(0rem);}","{right:4rem;bottom:",";transform:",";}"],A.a.white,A.a.black,u.b.mediumSnap,f,f,m.a.desktop,function(e){return"Binance"===e.client?"0":"auto"},function(e){return"Binance"===e.client?"translateY(6rem)":"translateY(-6rem)"}),y=function(e){var t=e.project,a=e.index;return i.a.createElement(f,{index:a+1,color:t.color,bg:t.color,to:"/projects"+t.slug,"aria-label":"Read more about "+t.title,cover:!0,direction:"right"},i.a.createElement(g,null,i.a.createElement(h,{client:t.client},i.a.createElement(w,{color:t.color},t.client),i.a.createElement("h2",null,t.title)),i.a.createElement(v,{index:a+1,client:t.client},i.a.createElement(d.a,{alt:t.title,fluid:t.featuredimage.childImageSharp.fluid})),i.a.createElement(C,{color:t.color,client:t.client},"Read more"),i.a.createElement(b,{color:t.color})))},S=a(269),N=Object(c.b)(S.c).withConfig({displayName:"ProjectList__ProjectListContainer",componentId:"aef8ge-0"})(["margin-top:30vh;grid-row-gap:0rem;h1{position:relative;z-index:10000;transform:translateY(1rem);","{transform:translateY(2rem);font-size:8rem;}}"],m.a.desktop),B=c.b.div.withConfig({displayName:"ProjectList__Grid",componentId:"aef8ge-1"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem;"]),z=function(){var e=r.data.allMarkdownRemark;return i.a.createElement(N,{style:u.a.verticleSlide("15rem",0)},i.a.createElement("h1",null,"Projects"),i.a.createElement(B,null,e.edges.map(function(e,t){var a=e.node;return i.a.createElement(y,{index:t,key:a.frontmatter.slug,project:a.frontmatter})})))};t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:"Projects"}),i.a.createElement(z,null))}},267:function(e,t,a){"use strict";var n=a(268),i=a(0),o=a.n(i),r=a(271),c=a.n(r);function l(e){var t=e.description,a=e.lang,i=e.meta,r=e.title,l=n.data.site,d=t||l.siteMetadata.description;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:r},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:d}].concat(i)}))}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},268:function(e){e.exports={data:{site:{siteMetadata:{title:"Neal Roessler",description:"My portfolio site.",author:"@NitroNeal"}}}}},269:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"a",function(){return d});var n=a(3),i=a(46),o=a(20),r=a(9),c=Object(n.b)(o.a.div).withConfig({displayName:"Container",componentId:"sc-16smyx2-0"})(["position:relative;grid-column:2 / 12;display:grid;grid-row-gap:8rem;margin-bottom:8rem;","{grid-column:3 / 11;}"],i.a.tablet),l=Object(n.b)(c).withConfig({displayName:"Container__ContentContainer",componentId:"sc-16smyx2-1"})(["grid-row-gap:2rem;margin-top:30vh;","{grid-template-columns:1fr 1fr;grid-auto-rows:min-content;.full{grid-column:span 2;}h1,.left{grid-column:span 1;}article,p,.right{grid-column-start:2;}}"],i.a.desktop),d=n.b.div.withConfig({displayName:"Container__ContactContainer",componentId:"sc-16smyx2-2"})(["position:relative;grid-column:1 / -1;background-color:",";color:",";display:grid;grid-template-columns:repeat(12,1fr);padding:calc(100vh / 6) 0;box-shadow:inset 0 0 5rem rgba(0,0,0,0.25);div{grid-column:2 / 12;","{grid-column:3 / 11;}","{grid-column:3 / 6;}}form{grid-column:2 / 12;","{grid-column:3 / 11;}","{grid-column:7 / 11;}input,textarea{border:",";}}a{color:"," !important;}label{p{background-color:",";}}button{color:",";background-color:",";}"],function(e){return e.color},function(e){return"Binance"===e.client?"#02394A":r.a.white},i.a.tablet,i.a.desktop,i.a.tablet,i.a.desktop,function(e){return"Binance"===e.client?"0.1rem solid #02394A":null},function(e){return"Binance"===e.client?"#02394A":r.a.white},function(e){return e.color},function(e){return e.color},function(e){return"Binance"===e.client?"#02394A":r.a.white});t.c=c},341:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Bit Burner",client:"",slug:"/bitburner",color:"#171941",outline:"Bitcoin Testnet Faucet and Wallet No passwords, No login, No extra steps In doing some bitcoin development I found it frustrating that there was no easy accessible testnet wallet.  With bitburner you have a persistent wallet preloaded with testnet BTC.",featuredimage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACQElEQVQ4y5WSzW4SURiGzx0oKYUz58zhzACtBcYqDNThz85AW5TSMtCkolCskGCNaWL8WdSqbTWpLqtEFy5cGY0xMa5MajemN+DGKzBxZTTxDvwAJUSRjsm7mJkvz7zv94OSR+rXYk9WT+ysajtXY48nRip2HCfEEIjeFbzacWLCc2ZF3agFb9aD66BaaA0d95RWtOZF7RGooT0MyAsOIdkXjnhLjfDWcujWhdBt0LK6jjCZlF1ZL5/z8nmZncbCZC/WC4e9pXr4XjW0cT60CaqqdxDUnMJJcAP1JX/D8Yi3XIvcr6hbS+pdUCW8idplw80ykjiD+5EdGH7tkwpldXsp/KCjSmS7A+tjfH7ElYMWhH/wIKhCd355wScXQX5P4RdMaOqPIf1tTqnRbjABGsYJTJNoANBL2pzRw06NkpYHoYZADZGlkEXy7LEb1eDaIacGJOSH0RJRtwQP4disciV/9LrNqTGalsRpTqfdrpn/iG3DUXgYdWXHJVPh+XF3HsEYBo+qy7daJfoon1Uk08/zCsB+ac7Hc5QaViK04VxAKvi4GXCbKCCZIJGmBy+5Y95edU6BVfOi4i4iuJsxyaQ0JQyEWxcKJ+xIEodBxDQXMzLPIEanwPZATztJRNnim8W3e5f2srxuE2IiM1A77cGB7ULiafz519ffvn/48S7/nuE0YbrVVcE9NpMvPjW/fGx+fpXd5XjK0pF0Y2u0/Ozc7svG/inp8pAQb50noboVwS6HaZwJKfAcJjH4IjL9Jw7f5OT3mYJTAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/e8bf6d04592fa9b9d3d7468528057c07/e3752/bitburner-graphic.png",srcSet:"/static/e8bf6d04592fa9b9d3d7468528057c07/7f99e/bitburner-graphic.png 325w,\n/static/e8bf6d04592fa9b9d3d7468528057c07/e3752/bitburner-graphic.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}}}},{node:{frontmatter:{title:"Know My Advisor",client:null,slug:"/know-my-advisor",color:"#2c2c32",outline:"Created a site that allows one to rate an advisor. Advisor profiles are generated dynamically from university data. Students can rate their advisor and give feedback. Advisors can use a magic link to log in without actually creating a user name and an advisor can update their profile. An admin page is also built so that the admin can approve and remove comments.",featuredimage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVQ4y2NQUFAhiKSl5eXklFRUNGRlFYEMRUVViDgDQZ1A1dbW9k5OLlZWNja29jo6BjIyikRplpdTcnZ2NTAw4OfnZ2Zi1NHUiI6ONjW1BOoH2o9Hs6qsrIKRsYWGth4DA4O4qGhZY/POM+fLS0vNzS00NXXk5ZVxalZSUhUVl8uLD3bUFjezdd64ZvX60+dX3XxoZ2UpJi5uZ+cIDAicmpWV1AREZNuKYy5PcjfWVJgzb+7R46eaG+qBrpCRkXFwcJaSksNns4SknJ+n+/ctSV/muczMtZ86oVdBSQWo2dTUzMDABBjy+AJMUUFZUlZtQX3S/10x/9Z4f13krSfNLSYl6+7mAdRJILSB4SknqyivrN1SEHN1cebHjZmNGf7m1k4qymrA0CIcVUD9QEuExIBMXQ1tIzUNXZBxYJ1EJRKwESpAI6SlFSCuhSOiNONCo5pHhmYAibfBWLRl6MgAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/dee1adbab96781741e307b83e7f8f316/5b10b/know-your-advisor-graphic.png",srcSet:"/static/dee1adbab96781741e307b83e7f8f316/7f99e/know-your-advisor-graphic.png 325w,\n/static/dee1adbab96781741e307b83e7f8f316/521e5/know-your-advisor-graphic.png 650w,\n/static/dee1adbab96781741e307b83e7f8f316/5b10b/know-your-advisor-graphic.png 1250w",sizes:"(max-width: 1250px) 100vw, 1250px"}}}}}},{node:{frontmatter:{title:"Tokenfolio",client:"Binance",slug:"/tokenfolio",color:"#F1F1F1",outline:"One of the biggest obstacles with newcomers to crytpocurrency is the fact that it can be a  complicated and overwhelming to use cryptocurrency products like a decentralized exchange. I created Tokenfolio to make building a cryptocurrency portfolio as easy as possible in just a few clicks.",featuredimage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADW0lEQVQ4y41UXUySYRR+8bvrKm2pW/hzZQ1CDVeiBoqmjUFi4vAv/Nmy1KE1bThDlz8Bc5qmmzriSjcFt1y6ruoi11IkSms19aaLbkqmboioiB98b9/7Cs4lqOfmfGfvOc/7POd87wEgiOXn52NfVVUFYmNjCT5fQMjlcoZSqQRDQ0P4rLGxEZzJOjo6sC8rKwt0zBAKM4ni4mIGCvR6A8jKyjodtLS0FHuFQnE++UZyl0QiqevtfcE8mlNRUYlB6+oeBQcSCARgZGQECIVCAsUymayBlgvDwyNhWNgFJ4fDeUuD329qUkX4LmacyGxgYAD3BkKI49HRUfPS8jI0GAzukpIiGB4RCUNDwyCXm7RWVFSYgHLoC0JOBO3u7g7xDSZhbm7OQ4NDh8NFGSc+UAuL38i+l/2e8vIKKJVK03xtCQ44PT0NOjs7sVytVtNqs63BVdsGabEuUQND7ygaG18wOTm56K9R1ikDg7W0tIDa2tpDuePj42bMbn3ds/bXBv/YNqm1dee+c3sHajTPtSinv7+f0Ol0weW2t7dj+reyszlm8zxmY7FDamrhN+XYsFPOXS81OzsPHz6oSkV5PT09weWiH1ar1RI+tk9dLhfCI4s63lNEVCX8+X0FX2Aymb76a6qrq0Fzc/NxMLVaDWpqag5jo8n0GRVTlNez8uMXnJ6aRf0j3W43bKUN5dBSicHBQaBSqQIzbGtrw/RzcnKuWa1WBAC3tpwU6dmnEDSWb7F4RSJRwtH2BDS6uaC3r+9gujrdM7tjkwbbIh0OB7XldNLf21iu0Wi0+GuQIjTIgFZfX3/4VocNr744vPvQbrd7bLZVuLvrotl5SPfeDlSrW3HDNBoNodfrg083N1fKOHhKJfHxCYnwtkgCtV095MzHT56d7U3v6gaEE69nyAqFiH2qXGRcLhf7uLi4iywW6010dAwZd5kFr3CuwzsSsVelHoaPn3TNoRz0n6LpBpXrN7FYfPgtL5Sz8/KkTcKMjFkmM2YvOuoSlOWL8ZNI4SURY2NjJ4NlZmb6tg3/+LK9m5eYni6Us67yzqFYmld4+v5js9mYYVraTcDj8UBKSkqITFZA/J+nUNzDvqCgAJzZ6J2HPZPJBHw+H6SmpobQnmhoaAC+dRW09h+kVKapRTvOmwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/fead60da5ce6eb0e1fff02b34abc01d0/8a4f5/tokenfolio-graphic-iphone3.png",srcSet:"/static/fead60da5ce6eb0e1fff02b34abc01d0/7f99e/tokenfolio-graphic-iphone3.png 325w,\n/static/fead60da5ce6eb0e1fff02b34abc01d0/521e5/tokenfolio-graphic-iphone3.png 650w,\n/static/fead60da5ce6eb0e1fff02b34abc01d0/8a4f5/tokenfolio-graphic-iphone3.png 1300w,\n/static/fead60da5ce6eb0e1fff02b34abc01d0/4dbfc/tokenfolio-graphic-iphone3.png 1400w",sizes:"(max-width: 1300px) 100vw, 1300px"}}}}}},{node:{frontmatter:{title:"Castle Battle",client:null,slug:"/castle-battle",color:"#068117",outline:"Decimate the enemy castle before he has a chance to destroy you!",featuredimage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFUklEQVQ4y3WS+1OUZRTH33+gSRNQ2F3cO7vLsuyyu7BcvGUapo6ZXczJpmm8goKmQ0FqBopaYqYmawqKgDEqOioKJCWJgHeREDAbMHMpbzVNNd1++HTexWqmph8+c857nvM95/u+z6sUN/RScLSblcd7WFH3/6ys62bFsWsUnuimuKHnb9aq1PewRig60YNy7uZ9gi19rDpxnbUnv2TNxyo3HsZ/8rcavuLtkyGKGm9Q+C+KwnxJkfQpXd/+SHv/Aw5fHWDjqT42Nfezsfmm5P2DNN9iY1MPDXU51Bx5m3WNvZR8duvh2c3/oHQO/Ejv3Z9RY1P3N+y/eJPNLbfY2nqbLWe+DsfNp/vYebKe8k+beL9Fag/ratzyL5ST10J80j3AZ1/c4dPu2xy+1E9p+20+ONPP9rYQOy7do6S2neKKUwSv/kJp29eUng2xXc5Lzw6Ee9Xnv1DKzg9QLpSdD1F+LsTui3f4sLWP1sa5HD2az/YrD9j6yiLWjXmC4OW7lF96wK7TnbTWv8zB4xsItoteNGUXvg2j7Ll8j78ov3yfvR3fUdPURlV9PdVdIYI1zWwzWcl/dAhr1+9i343fCMrCPWe7qLxwg92i2SOLVHbLDKXyyj0qr9xlr8TqC7epbfuc2j0fsmH1evZe/52Zk6czatgQAlHDmOTxUd5xn+21LWw92E5V76/svXwHdUaFDKvpEIfV0rCv8ztx8wN153povdBK7ewXWGl3Emy6SnrmJOJ9DhJT3HgDHva3XqHi2RdZN3Ea1b0/Ua0aufqAys4fONV7C6Wm63uqLob4qLmDzo4W9u8oYVJkFBOGR/J0xljGT3ycjCfSSRuXytgnx/LSlClMi4lhzKOPULjzEIf6/6D6UogDbd00tp5H+ajtC8oP1HO8sYG+a00sXzIPrdWALTkRz4hIEg1a7H4nvtHJ+N12kqIisPhcxJq1zM1bxdEucXikiQN1TdQcOi4DDzdQUVVD3aEKyjYX89TodFzJLrzpXiwWPQaDBq1JR5RuBHa7CZNmBL5RfjxpSYxJT6Gqch8Hj9WzbVuQovw8lMKCfN7IXsDqZTksmz8HV4KN4SKO0g7HHXCTMiaAP8OPy+/Ck5qEI8mJzqxDK86dSfHs2CK/Tkkxy+e9KnPmo7yePY/8nCxWLl1MXtYCvKleDDYjRnGTIE6T5VVT5PuljA3I8JTwEluiDZ24Vpe8tnAub4o+f3EWK3IXoRTMz+KNOfPJmzuHqTNScQXi8csQd6obS4JFogejKRa9XiPu4omTYd4MLw65eV+qjzmzZ/D8rPG8lZ1LQdZClPGFGYwq8DOuKI3YpZHEZVhx+91hkVMuw5pgxScX4DNpMNvkspLsOLwOcerBk+7Bt8qNc7WFce+MJn1TAMW4y4pxZxymsjisQQfxmU7Mdov8e/Ekqi6dFtLiDYyKN2K16bHLMFeKC6cvAXvAjnmrDetuB8YdFoylVhRziY0wm2wY37WQNNmLboSOiIhIHC4HZqsJ70gtyXotZpMeW4KdmBgN0ZHR+Mf5MW+wYdoUF9ab37OhmN4TdyXCu9bBgzfj0D4TS/RkDZYc2b5cFmXrMS4ciTHXhDnXinZ6LDFTZUGe6ERvVhGtqlcMRWb0KoUmwnmxCf06yddLvt7ESMEgzvUbLBjesYRr6ln4XPr0a81hRhaZwjOU6GWxaFSWy1aJMbm6QdQ8R+ICzd9oFsnzYh3Ri7XELJF8aSzabC066dNIVOvKxMBQMn1DmSQ86R+Mmf5Bnk55jOcCw5iZNoxZ6RHMSovgBWGG1DKThzJBmJI0hKeEqaKbLvU/AQOaCmeTneZUAAAAAElFTkSuQmCC",aspectRatio:.926829268292683,src:"/static/a6b5cce94019a8e0b6c11d92cc43bf9f/053d7/castle-battle-logo-wbg.png",srcSet:"/static/a6b5cce94019a8e0b6c11d92cc43bf9f/053d7/castle-battle-logo-wbg.png 304w",sizes:"(max-width: 304px) 100vw, 304px"}}}}}},{node:{frontmatter:{title:"Crypto Hero",client:null,slug:"/crypto-hero",color:"#ffc300",outline:"Trade Crypto without the risk! Create a portfolio of cryptocurrency assets virtually. You start with virtual cash in USD currency to spend on cryptocurrencies. Make your picks from the 1400+ coins out there you think will perform the best. Adjust your holdings throughout the contest. The players with the highest net worth at the end wins!",featuredimage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEeUlEQVQ4y22UWW8TZxSGhyzO6nW8QAIBUggKJsRJvCU4jh3HGXs8Y4+3LCTOLjYVVahQQkQvQFVb2otSqVKlItqL3vSi6p/oH+o/eHpmEkEvevHq88zn85z3O9+ZowwqZXyuKp6eKu5uW6b8Np1nX08NX68tC7+rQdBWb52ArAGXvdaYilQI9tXxdtcI9VsoF/xtuhWNQaXiBPttwBnIDlT7mhLQcqSeKWCvrqYDiEYM+Z/lxHjFkHJy+CWbleeMhe/SI26HFEOCTkF2kEexCPR+hH6Au1qEB+oCrMh+Q4xYjhnlhtdgJ3vESwHvWidMXNphQKA2ODLYIj55n8jQ2imo31bbkepqc36wwc2w6SS0Xfp7xaG7y5Tjlrg2bLC5sMfJ/glH7ZdMXzvCJWX45cffMfPPJIElCdb/A2wx4m5y63wVf0/9DCgO1V5Tssv5xXKPuBrrN6jPbvG8c8xB8wWb1ZdMjHQc16GBtkDbUruzWsrFXRkqCtCSBPax6yhBualgn0W4v0YjqjE6WBM3VQHrlKPrPN065v7d1yxM3SPS38B3rirQppyqytN7r3hz8tVpMtkLiCkl3Cct01Vz2uD9Wo7FixVpnQYRKXiPBJmxGi/Mdb7bbfLuSZPYzSdc9m2gyN5v3z+Df465PnqEVxKp0j6KXaeZcIWd6SJvtALmJ2XZtBgVx/6uOjuJVb6tZHi8MMe73SSH2gH3W0+IXXvI081D/v7rLSPeDVQ5blA6Q3mUrnIUK/BTNcu9mSJfa8u8LubIXS7zjZGlc7vIcS7P+62UQHP80Jzm8WIWPb7HH1+UqSW3CXk2nVLYUv58YPC+Y2GOV5geKvNZusCL7DJva4u8Ki7xcyvDyoiOedXg106CR8kc27EiDzJJXulpOotrtIuPKKQ/5Up4G8Uaz9OZMTjI79GS253z6mRDGg8TBarjJY6zORZUkzvBKo0JjcIFA+2iwefLWYqX7HKVuO6rsHKrxd3yQ5S4v8ysRyOtlrGmN9nLH1C5scbssE46oJMKGCzJ12DLhi6GDUdxr8WKABPifvCcNHa3wbhbQ0mpJeaDOvMSHPessjhisjG/K0fZZ2XMIu3TyAQrZByQverccVaTvMBi8uzrtmRoSA2lW5RUQCMZKImTMmkJTInjuDheGa/TWTqkHd8RgEHSV3JWWwshQ0yYLI/qzEoJPOekl3tlBkijK7PuggA1RwmBJlUbrJMQgA0xbq2zkzvEmFx33iUk4bwAU6pB9kKJqZDuAFUZeaqMPqV8o01sqEDcX/wItWunnmrOvUo6XKaZ2Gbrzj7LY3XmPDZYJz+qEYvouKVdAuLQL3VUtguHbEm9Ev5VYuI2FVgVqA0unTnWnXVWwNlLNTZkgLTjHcflvFpkUvY9XfaAqMg8rKBMDecwZjY4Kj9g5Wqd2HDBgSf+BxyXC5qRi1udaLGe3qd9u0VUSmR/yz4HKA6jngwTfWniI8ts5LdlINSZ9mZFS2fKfniO+U4VHcpw25tDj0pLTTUIDZfk+8+LCvwLfeSLQ9ePLi0AAAAASUVORK5CYII=",aspectRatio:.988835725677831,src:"/static/baa508f8d07289b6936a3960656a4fe9/56690/crytpo-hero-logo-bg2.png",srcSet:"/static/baa508f8d07289b6936a3960656a4fe9/7f99e/crytpo-hero-logo-bg2.png 325w,\n/static/baa508f8d07289b6936a3960656a4fe9/56690/crytpo-hero-logo-bg2.png 620w",sizes:"(max-width: 620px) 100vw, 620px"}}}}}},{node:{frontmatter:{title:"Savage Squad",client:null,slug:"/savage-squad",color:"#3498db",outline:"Battle in a competitive arena in real time three minute brawls. Unlock units with powerful abilities. Real time battles from players across the world. A strategic multiplayer battle arena made for mobile.",featuredimage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD1ElEQVQ4y72UfUwbdRjHf/SiMUZdsmXJ/nCb2TJQFoFWHDKhdDc46Mu11/au5e7aHtdeX6BQaDtWChtSYMmC/jHNZhcxbuoSY7LpEiEuonGZuuAyXXHxZRFJcCy+JL4smqApd4/lUAwT3WKi98/v+3vunk9+z/d+z4PQ//VkMpllzfM8qjPUqbpcW444jrs1iE6nQ+l0WtXhYBh1p/YUWSxN2OIewIB0xUtQI4n/MyiZTKrrD/ATYhgnEgSfBm/aia327cPbjOpaVVX198BIUEShSCuiminskfiGoj/iA/yxNc0My9vp+rO0jzi6GKsOrEc0R6BoNLo6zOVsRrVUzYrTsJxYznvYJ/goOWelqwFv2g5afDOYdjnLFt+brRbNTf3rd51a4xH8XpeXmqDdhOwOGMARqQCDd+OCM1AyH4jqoHhb6Yjqtbb4Npr2oU9mcmpuPB7/E9RE2NbSgutxi1B7zdNDgjFcAbXWTeBsK80nOnH5xAuMcvKkKE+MhSARbZzF0BG1ml2m+zVWuwWT2gJFjJNBZ956fQlotVutrk491Lq3QGPL9ry3uyz/5CipXHgvqpx/rX/h4ptdsidoUFi2QUl3u0CUWjJ2MrJuRXmthYNRBCaIwcJfe9C61hXYcTXWr4cjo5R8/u2IfO2LVP77q2nlx7n9cPyoAFt3rFMqazZCnbNE4bpw4H22682c/bTbxYdER3jzX/zbm3I+lZtshy8/Ts5/PtUFU++3w4ljPAwNus9VPlQ+nTmwGxKZnbJ/b4XCiGUy4SkBgioDVwwHNmb72d7SNEFzbNThDNylAh1Wu27slRC89DIL3Wnjt6JkGn20zli4aJ71I4PUN1c+6ISPLsR+PTcWlp8ZEZXDz9qUcI823+C/b8EcqQQDvxXYxG4g7ZZmdPYSo0LdPN5BOuq77rydWfbHw1H3HjxAzz7/HAuXJ2Pw1acpmMkNyd/N9uWnPozLp17llX0HcdnbWS07/BXzRGN9aSFtGF2+vtKGUGuxRpJcv9/Nmnv0DQQdbadezB7yzJ057YcruQR8PdNdsGiPMp1L/HJxMgLDw/S7ywC9NoFa23DMJzZivIcrSia61LgQcNzgtv7uBhNpCkimw5kBx/TTWQbGxwX47FIS+nvYpSEgSdJSsiCgWCymapp2ojfeGVJ1QGIR76UwScBu6A7zHXrcXGdjDIc64sZxN2PbdNPuyWaziCRJVfftG0BBiUNtbTwWCj2w6uAY3N9+6/MxlUotV5BK9Rb63YGCIU5jdmzBABAaeqyj6F8PX4IgUF9fn6p7ewtwlv3vJv1vcNN5Q61ZCG4AAAAASUVORK5CYII=",aspectRatio:1,src:"/static/aae1eb84bf2d47e1d05cef8a6eeb5fe9/8a4f5/savage-squad-two-iphones2.png",srcSet:"/static/aae1eb84bf2d47e1d05cef8a6eeb5fe9/7f99e/savage-squad-two-iphones2.png 325w,\n/static/aae1eb84bf2d47e1d05cef8a6eeb5fe9/521e5/savage-squad-two-iphones2.png 650w,\n/static/aae1eb84bf2d47e1d05cef8a6eeb5fe9/8a4f5/savage-squad-two-iphones2.png 1300w,\n/static/aae1eb84bf2d47e1d05cef8a6eeb5fe9/df7a6/savage-squad-two-iphones2.png 1950w,\n/static/aae1eb84bf2d47e1d05cef8a6eeb5fe9/6a4d0/savage-squad-two-iphones2.png 2600w,\n/static/aae1eb84bf2d47e1d05cef8a6eeb5fe9/eeef9/savage-squad-two-iphones2.png 3200w",sizes:"(max-width: 1300px) 100vw, 1300px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-projects-jsx-556b5acc827ede88621e.js.map