function t(r,...l){let p=typeof r=="string"?[r]:r.raw,i=p.length,e="",s=null;for(let n=0;n<i;n++)e+=p[n].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),n<l.length&&(e+=l[n]);let c=e.split(`
`),m=c.length;for(let n=0;n<m;n++){let o=c[n].match(/^(\s+)\S+/);if(o){let x=o[1].length;s=s?Math.min(s,x):x;}}if(s!==null){let n=s;e=c.map(o=>o[0]===" "?o.slice(n):o).join(`
`);}return e.trim().replace(/\\n/g,`
`)}var a=t,g=t,h=t,f=t,u=t,j=t,y=t,d=t,w=t,A=t,S=t,b=t,z=t,M=t;

export { f as css, a as html, w as js, y as json, d as jsonc, A as jsx, M as md, j as sass, u as scss, S as ts, b as tsx, g as xhtml, h as xml, z as yaml };
