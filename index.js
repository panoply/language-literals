var t=function(r,...l){let i=typeof r=="string"?[r]:r.raw,x=i.length,e="",o=null;for(let n=0;n<x;n++)e+=i[n].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),n<l.length&&(e+=l[n]);let c=e.split(`
`),a=c.length;for(let n=0;n<a;n++){let s=c[n].match(/^(\s+)\S+/);if(s){let p=s[1].length;o=o?Math.min(o,p):p;}}if(o!==null){let n=o;e=c.map(s=>s[0]===" "?s.slice(n):s).join(`
`);}return e.trim().replace(/\\n/g,`
`)},g=t,h=t,u=t,f=t,y=t,j=t,d=t,A=t,S=t,w=t,T=t,b=t,q=t,z=t,M=t;

export { y as css, g as html, w as js, A as json, S as jsonc, T as jsx, h as liquid, M as md, d as sass, j as scss, b as ts, q as tsx, u as xhtml, f as xml, z as yaml };
