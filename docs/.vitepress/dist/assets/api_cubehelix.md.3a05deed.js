import{c as o}from"./chunks/chroma.6ce1d2aa.js";import{K as b,o as N,c as R,O as s,l as w,X as D}from"./chunks/framework.83b1edca.js";const O=D(`<h1 id="cubehelix" tabindex="-1">Cubehelix <a class="header-anchor" href="#cubehelix" aria-label="Permalink to &quot;Cubehelix&quot;">​</a></h1><h2 id="chroma-cubehelix" tabindex="-1">chroma.cubehelix <a class="header-anchor" href="#chroma-cubehelix" aria-label="Permalink to &quot;chroma.cubehelix&quot;">​</a></h2><p><code>chroma.cubehelix(start=300, rotations=-1.5, hue=1, gamma=1, lightness=[0,1])</code></p><p>Dave Green 的 <a href="https://www.mrao.cam.ac.uk/~dag/CUBEHELIX/" target="_blank" rel="noreferrer">cubehelix</a> 色彩方案。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// use the default helix...</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// or customize it</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotations</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gamma</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.8</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lightness</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">0.3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.8</span><span style="color:#A6ACCD;">])</span></span></code></pre></div>`,5),B=D(`<h2 id="cubehelix-start" tabindex="-1">cubehelix.start <a class="header-anchor" href="#cubehelix-start" aria-label="Permalink to &quot;cubehelix.start&quot;">​</a></h2><p><code>cubehelix.start(hue)</code></p><p><a href="http://en.wikipedia.org/wiki/Hue#/media/File:HueScale.svg" target="_blank" rel="noreferrer">色相旋转</a>的起始颜色，默认值为 300。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,4),H=D(`<h2 id="cubehelix-rotations" tabindex="-1">cubehelix.rotations <a class="header-anchor" href="#cubehelix-rotations" aria-label="Permalink to &quot;cubehelix.rotations&quot;">​</a></h2><p><code>cubehelix.rotations(num)</code></p><p>色相旋转的数量和方向（例如，<code>1 = 360°</code>，<code>1.5 = 540°</code>），默认值为 -1.5。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotations</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1.5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotations</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotations</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,4),L=D(`<h2 id="cubehelix-hue" tabindex="-1">cubehelix.hue <a class="header-anchor" href="#cubehelix-hue" aria-label="Permalink to &quot;cubehelix.hue&quot;">​</a></h2><p><code>cubehelix.hue(numOrRange)</code></p><p>色相控制所有色调的饱和度。单个值或范围，默认值为 1。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hue</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hue</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])</span></span></code></pre></div>`,4),U=D(`<h2 id="cubehelix-gamma" tabindex="-1">cubehelix.gamma <a class="header-anchor" href="#cubehelix-gamma" aria-label="Permalink to &quot;cubehelix.gamma&quot;">​</a></h2><p><code>cubehelix.gamma(factor)</code></p><p>伽马因子可用于强调低强度或高强度值，默认值为 1。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gamma</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gamma</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,4),X=D(`<h2 id="cubehelix-lightness" tabindex="-1">cubehelix.lightness <a class="header-anchor" href="#cubehelix-lightness" aria-label="Permalink to &quot;cubehelix.lightness&quot;">​</a></h2><p><code>cubehelix.lightness(range)</code></p><p>亮度范围：默认 0 到 1（黑到白）。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lightness</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lightness</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">chroma</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lightness</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">0.3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.7</span><span style="color:#A6ACCD;">])</span></span></code></pre></div>`,4),z=D(`<h2 id="cubehelix-scale" tabindex="-1">cubehelix.scale <a class="header-anchor" href="#cubehelix-scale" aria-label="Permalink to &quot;cubehelix.scale&quot;">​</a></h2><p>你可以通过 <code>chroma.scale</code> 接口调用 <code>cubehelix.scale()</code> 来使用 cube-helix。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">chroma</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cubehelix</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">rotations</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0.35</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">gamma</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.7</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lightness</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">0.3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.8</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">scale</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// convert to chroma.scale</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">correctLightness</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">colors</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,3),Y=JSON.parse('{"title":"Cubehelix","description":"","frontmatter":{},"headers":[],"relativePath":"api/cubehelix.md","filePath":"api/cubehelix.md","lastUpdated":1693379932000}'),G={name:"api/cubehelix.md"},Z=Object.assign(G,{setup(J){const l=o.cubehelix(),u=o.cubehelix().start(200).rotations(-.5).gamma(.8).lightness([.3,.8]),_=[l(0),l(.1),l(.2),l(.3),l(.4),l(.5),l(.6),l(.7),l(.8),l(.9),l(1)],d=[u(0),u(.5),u(1)],n=o.cubehelix().start(300),e=o.cubehelix().start(200),m=[n(0),n(.1),n(.2),n(.3),n(.4),n(.5),n(.6),n(.7),n(.8),n(.9),n(1)],x=[e(0),e(.1),e(.2),e(.3),e(.4),e(.5),e(.6),e(.7),e(.8),e(.9),e(1)],p=o.cubehelix().rotations(-1.5),c=o.cubehelix().rotations(.5),t=o.cubehelix().rotations(3),g=[p(0),p(.1),p(.2),p(.3),p(.4),p(.5),p(.6),p(.7),p(.8),p(.9),p(1)],T=[c(0),c(.1),c(.2),c(.3),c(.4),c(.5),c(.6),c(.7),c(.8),c(.9),c(1)],f=[t(0),t(.1),t(.2),t(.3),t(.4),t(.5),t(.6),t(.7),t(.8),t(.9),t(1)],r=o.cubehelix().hue(.5),A=o.cubehelix().hue([1,0]),P=[r(0),r(.1),r(.2),r(.3),r(.4),r(.5),r(.6),r(.7),r(.8),r(.9),r(1)],S=[A(0),A(.1),A(.2),A(.3),A(.4),A(.5),A(.6),A(.7),A(.8),A(.9),A(1)],C=o.cubehelix().gamma(1),i=o.cubehelix().gamma(.5),k=[C(0),C(.1),C(.2),C(.3),C(.4),C(.5),C(.6),C(.7),C(.8),C(.9),C(1)],v=[i(0),i(.1),i(.2),i(.3),i(.4),i(.5),i(.6),i(.7),i(.8),i(.9),i(1)],y=o.cubehelix().lightness([0,1]),h=o.cubehelix().lightness([1,0]),F=o.cubehelix().lightness([.3,.7]),q=[y(0),y(.1),y(.2),y(.3),y(.4),y(.5),y(.6),y(.7),y(.8),y(.9),y(1)],V=[h(0),h(.1),h(.2),h(.3),h(.4),h(.5),h(.6),h(.7),h(.8),h(.9),h(1)],j=[F(0),F(.1),F(.2),F(.3),F(.4),F(.5),F(.6),F(.7),F(.8),F(.9),F(1)],I=o.cubehelix().start(200).rotations(-.35).gamma(.7).lightness([.3,.8]).scale().correctLightness().colors(5);return(K,M)=>{const a=b("Color3"),E=b("Color2");return N(),R("div",null,[O,s(a,{colors:_}),s(a,{colors:d}),B,s(a,{colors:m}),s(a,{colors:x}),H,s(a,{colors:g}),s(a,{colors:T}),s(a,{colors:f}),L,s(a,{colors:_}),s(a,{colors:P}),s(a,{colors:S}),U,s(a,{colors:k}),s(a,{colors:v}),X,s(a,{colors:q}),s(a,{colors:V}),s(a,{colors:j}),z,s(E,{colors:w(I)},null,8,["colors"])])}}});export{Y as __pageData,Z as default};