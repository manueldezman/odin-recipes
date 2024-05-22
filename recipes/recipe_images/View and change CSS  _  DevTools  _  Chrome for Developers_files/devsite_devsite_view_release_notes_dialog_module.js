(function(_ds){var window=this;var ffa=function(a){a.eventHandler.listen(a,"DropdownItemClicked",b=>{efa(a,b)})},efa=async function(a,b){const c=b.Ea.detail.id;b=a.querySelector(".devsite-dialog-contents");const d=a.querySelector(`#date-section-${c}`);let e,f,g,h;const k=(null!=(g=null==d?void 0:null==(e=d.getBoundingClientRect())?void 0:e.top)?g:0)-(null!=(h=null==b?void 0:null==(f=b.getBoundingClientRect())?void 0:f.top)?h:0);d&&b&&b.scrollBy({top:k,behavior:"smooth"});let l,m;a.Th=null!=(m=null==(l=a.aj.find(n=>n.id===c))?void 0:
l.title)?m:"";a.g.Ua(a.Th)},hfa=function(a){const b=new IntersectionObserver(c=>{c.forEach(d=>{gfa(a,0<d.intersectionRatio,d)})},{root:a.querySelector(".devsite-dialog-contents")});a.querySelectorAll(".release-note-date-section .release-note").forEach(c=>{b.observe(c)})},gfa=function(a,b,c){let d,e;const f={id:null!=(d=c.target.getAttribute("id"))?d:"",type:null!=(e=c.target.getAttribute("type"))?e:"NOTE_TYPE_UNSPECIFIED"};if(b){let g;a.hg=[...(null!=(g=a.hg)?g:[]),f]}else a.hg=[...a.hg.filter(g=>
g.id!==f.id)]},ifa=function(a){switch(a){case "NOTE_TYPE_FEATURE":return{title:"Feature",color:"green"};case "NOTE_TYPE_SERVICE_ANNOUNCEMENT":return{title:"Announcement",color:"yellow"};case "NOTE_TYPE_NON_BREAKING_CHANGE":return{title:"Change",color:"yellow"};case "NOTE_TYPE_LIBRARIES":return{title:"Libraries",color:"blue"};case "NOTE_TYPE_FIX":return{title:"Fixed",color:"blue"};case "NOTE_TYPE_BREAKING_CHANGE":return{title:"Breaking",color:"red"};case "NOTE_TYPE_DEPRECATION":return{title:"Deprecated",
color:"red"};case "NOTE_TYPE_ISSUE":return{title:"Issue",color:"red"};case "NOTE_TYPE_SECURITY_BULLETIN":return{title:"Security",color:"orange"};default:return{title:"Unspecified",color:"grey"}}},n8=function(a,b){b=ifa(b);return(0,_ds.S)` <span
      class="release-note-type-chip
          ${a} ${b.color}">
      ${"large"===a?b.title.toUpperCase():b.title}
    </span>`},jfa=function(a,b){let c;return(0,_ds.S)`
      <div
        class="release-note-date-section"
        id="date-section-${b.replace(/,?\s/g,"")}">
        <h3 class="release-note-date-header">${b}</h3>
        ${[...(null!=(c=a.releaseNotes.get(b))?c:[])].map((d,e)=>{let f,g;return(0,_ds.S)` <div
        class="release-note"
        id="${`${b}-${e}`}"
        type="${null!=(f=d.noteType)?f:"NOTE_TYPE_UNSPECIFIED"}">
        ${n8("large",d.noteType)}
        <div class="release-note-content">
          ${d.descriptionHtml?(0,_ds.WK)(_ds.Xe(null!=(g=d.descriptionHtml)?g:"")):(0,_ds.S)`<p>${d.description}</p>`}
        </div>
      </div>`})}
      </div>
    `},o8=class extends _ds.KI{constructor(){super(["devsite-dialog","devsite-dropdown-list"]);this.eventHandler=new _ds.H;this.releaseNotes=new Map;this.Th="";this.aj=[];this.hg=[];this.g=new _ds.Pm(async a=>{this.La({category:"Site-Wide Custom Events",action:"release notes: view old note",label:`${await _ds.Uq(_ds.G().href)} : ${a}`})},100)}Xa(){return this}async connectedCallback(){super.connectedCallback();this.Th=[...this.releaseNotes.keys()][0];this.aj=[...this.releaseNotes.keys()].map(a=>({id:a.replace(/,?\s/g,
""),title:a}));ffa(this)}disconnectedCallback(){super.disconnectedCallback()}Nb(a){super.Nb(a);hfa(this)}render(){return(0,_ds.S)`
      <div class="devsite-dialog-header">
        <div>
          <h3 class="no-link title">
            Release Notes
          </h3>
          <div class="chip-wrapper">
            ${[...(new Set(this.hg.map(a=>a.type)))].map(a=>n8("small",a))}
          </div>
        </div>
        <devsite-dropdown-list
            .listItems=${this.aj}>
          <p slot="toggle" class="selected-date-toggle">${this.Th}</p>
        </devsite-dropdown-list>
      </div>
      <div class="devsite-dialog-contents">
        ${[...this.releaseNotes.keys()].map(a=>jfa(this,a))}
      </div>
      <div class="devsite-dialog-footer devsite-dialog-buttons">
        <button class="button devsite-dialog-close">
          Close
        </button>
      </div>`}};_ds.w([_ds.P({type:Map}),_ds.x(Object)],o8.prototype,"releaseNotes",void 0);_ds.w([_ds.Q(),_ds.x(Object)],o8.prototype,"Th",void 0);_ds.w([_ds.Q(),_ds.x(Array)],o8.prototype,"aj",void 0);_ds.w([_ds.Q(),_ds.x(Array)],o8.prototype,"hg",void 0);try{customElements.define("devsite-view-release-notes-dialog",o8)}catch(a){console.warn("devsite.app.customElement.DevsiteViewReleaseNotesDialog",a)};})(_ds_www);
