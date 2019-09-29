(window["webpackJsonpnba-rank-client"]=window["webpackJsonpnba-rank-client"]||[]).push([[0],{31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),s=a.n(r),l=(a(36),a(37),a(7)),c=a(8),i=a(13),m=a(9),u=a(12),h=a(15),p=a(6),d=(a(38),a(48)),f=a(46),E=a(25),y=a(16),g=a(21),v=a(47),b=a(22),w=function(e){var t=e.id,a=e.firstName,n=e.lastName,r=e.headshot,s=e.numMentions,l=e.sentimentScore,c=e.polarityScore;return o.a.createElement("div",null,o.a.createElement(f.a,null,o.a.createElement(v.a,{md:3},o.a.createElement("img",{className:"headshot",src:r})),o.a.createElement(v.a,{md:5},o.a.createElement("div",null,o.a.createElement("h1",{className:"player-name"},o.a.createElement(h.b,{to:"/players/".concat(t)}," ",a," ",n)),o.a.createElement("h2",null,s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")," ",o.a.createElement("small",null,"mentions")))),o.a.createElement(v.a,{md:2},o.a.createElement(b.Tooltip,{className:"tool-tip",followCursor:!0,title:"Sentiment score is a weighted average of the sentiment associated with all mentions of a given player. Comments with a larger number of upvotes matter more.",position:"bottom",trigger:"mouseenter"}," ",o.a.createElement("span",{className:"score sentiment-score"},(100*l).toFixed(1),o.a.createElement("sup",null,"*")))),o.a.createElement(v.a,{md:2},o.a.createElement(b.Tooltip,{className:"tool-tip",followCursor:!0,title:"Polarity score is a function of how controversial the mentions of a player are. Players with more high polarity mentions (either high upvotes or high downvotes) are more polar.",position:"bottom",trigger:"mouseenter"},o.a.createElement("p",{className:"score polarity-score"},(100*c).toFixed(1),o.a.createElement("sup",null,"*"))))))};var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={players:[],error:!1,isLoading:!1,max:!1,limit:20,offset:0},window.onscroll=Object(g.debounce)((function(){var e=Object(y.a)(a).state,t=e.error,n=e.isLoading,o=e.max;t||n||o||window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&a.incrementPage()}),100),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"incrementPage",value:function(){this.setState({offset:this.state.offset+1}),this.fetchPlayers()}},{key:"fetchPlayers",value:function(){var e=this;this.setState({isLoading:!0},(function(){fetch("https://nba-rank.herokuapp.com/players?offset=".concat(e.state.offset)).then((function(e){return e.json()})).then((function(t){console.log("hello"),console.log(t),e.setState({players:[].concat(Object(E.a)(e.state.players),Object(E.a)(t.players)),isLoading:!1})}))}))}},{key:"componentDidMount",value:function(){this.fetchPlayers()}},{key:"render",value:function(){return this.state.players.map((function(e){var t=e.id,a=e.first_name,n=e.last_name,r=e.headshot,s=e.num_mentions,l=e.sentiment_score,c=e.polarity_score;return o.a.createElement("div",null,o.a.createElement(w,{id:t,firstName:a,lastName:n,headshot:r,numMentions:s,sentimentScore:l,polarityScore:c}),o.a.createElement(v.a,{md:12},o.a.createElement("hr",null)))}))}}]),t}(o.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={player:{},error:!1,isLoading:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"fetchPlayer",value:function(){var e=this;this.setState({isLoading:!0},(function(){var t=e.props.match.params.id;fetch("https://nba-rank.herokuapp.com/players/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({player:t,isLoading:!1})}))}))}},{key:"componentDidMount",value:function(){this.fetchPlayer()}},{key:"render",value:function(){var e=this.state.player,t=e.id,a=e.first_name,n=e.last_name,r=e.headshot,s=e.num_mentions,l=e.sentiment_score,c=e.polarity_score,i=e.mentions;return console.log(i),this.state.isLoading?o.a.createElement("h1",null,"Loading"):o.a.createElement("div",null,o.a.createElement(w,{id:t,firstName:a,lastName:n,headshot:r,numMentions:s,sentimentScore:l,polarityScore:c}),o.a.createElement(v.a,{md:12},o.a.createElement("hr",null)),o.a.createElement("h1",null,"Top Mentions"),o.a.createElement(f.a,null,o.a.createElement(v.a,{md:12},i.sort((function(e,t){return Math.abs(t.sentiment)*(1.01^Math.abs(t.upvotes))-Math.abs(e.sentiment)*(1.01^Math.abs(e.upvotes))})).slice(0,5).map((function(e,t){var a=e.sentence,n=e.sentiment,r=e.upvotes;return o.a.createElement("div",{className:"mention",key:t},o.a.createElement("span",{className:"mention-scores"},"+",o.a.createElement("span",{style:{color:r<0?"red":"green",marginRight:"10px"}}," ",r)," ",n),o.a.createElement("br",null),o.a.createElement("span",{className:"mention-quote"},'"...',a.substr(0,200),'..."'))})))),o.a.createElement(v.a,{md:12},o.a.createElement("hr",null)),o.a.createElement("h1",null,"Most Negative Mentions"),o.a.createElement(f.a,null,o.a.createElement(v.a,{md:12},i.sort((function(e,t){return e.sentiment-t.sentiment})).slice(0,5).map((function(e,t){var a=e.sentence,n=e.sentiment,r=e.upvotes;return o.a.createElement("div",{className:"mention",key:t},o.a.createElement("span",{className:"mention-scores"},"+",o.a.createElement("span",{style:{color:r<0?"red":"green",marginRight:"10px"}}," ",r)," ",n),o.a.createElement("br",null),o.a.createElement("span",{className:"mention-quote"},'"...',a.substr(0,200),'..."'))})))))}}]),t}(o.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(d.a,null,o.a.createElement(f.a,null,o.a.createElement("h1",{className:"header"},o.a.createElement("img",{className:"logo",alt:"logo",src:"https://styles.redditmedia.com/t5_2qo4s/styles/communityIcon_1podsfdai4301.png"}),o.a.createElement(h.b,{to:"/"},"nba-rank"))),o.a.createElement(p.a,{path:"/",exact:!0,component:j}),o.a.createElement(p.a,{path:"/players/:id",component:k})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b2890e97.chunk.js.map