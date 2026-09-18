(() => {
  'use strict';

  const STORAGE_KEY = 'devitre_demo_state_v5';
  const LEGACY_KEY = 'devitre_demo_state_v3';
  const SESSION_KEY = 'devitre_demo_session_v5';
  const AUTH_KEY = 'devitre_demo_accounts_v1';
  let authMode='login';

  const stores = [
    {id:1,name:'Charlotts Boutique',instagram:'@charlottsboutique',city:'Itarema - CE',desc:'Moda feminina, looks casuais e peças selecionadas.',rating:4.9,reviews:128,hours:'09:00–18:00',pickup:'30–60 min',verified:true},
    {id:2,name:'Santa Edwigens',instagram:'@santaedwigensitarema',city:'Itarema - CE',desc:'Moda feminina para diferentes estilos.',rating:4.8,reviews:96,hours:'08:30–18:00',pickup:'até 2h',verified:true},
    {id:3,name:'Celma Fashion',instagram:'',city:'Itarema - CE',desc:'Peças femininas e novidades locais.',rating:4.7,reviews:74,hours:'09:00–17:30',pickup:'até 2h',verified:false},
    {id:4,name:'Edmila Tavares',instagram:'@lojaedmilatavares',city:'Itarema - CE',desc:'Moda feminina e tendências.',rating:4.9,reviews:112,hours:'09:00–18:30',pickup:'1–2h',verified:true},
    {id:5,name:'Ly Veste',instagram:'',city:'Itarema - CE',desc:'Looks modernos para o dia a dia.',rating:4.6,reviews:51,hours:'09:00–18:00',pickup:'até 3h',verified:false},
    {id:6,name:"D'Bella Boutique",instagram:'@dbella.boutique_',city:'Itarema - CE',desc:'Boutique feminina e peças selecionadas.',rating:4.8,reviews:88,hours:'09:00–18:00',pickup:'1–2h',verified:true},
    {id:7,name:'Vestilê da Paty',instagram:'',city:'Itarema - CE',desc:'Moda feminina e novidades.',rating:4.7,reviews:63,hours:'08:30–17:30',pickup:'até 2h',verified:false},
    {id:8,name:'Penelope',instagram:'@peenelope_variedades',city:'Itarema - CE',desc:'Variedades e moda feminina.',rating:4.8,reviews:101,hours:'08:00–18:00',pickup:'30–90 min',verified:true},
    {id:9,name:'Ferbrand',instagram:'',city:'Itarema - CE',desc:'Moda feminina em Itarema.',rating:4.6,reviews:45,hours:'09:00–18:00',pickup:'até 2h',verified:false}
  ];

  const images = [
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=82'
  ];

  const seedProducts = [
    {id:'p1',store:1,name:'Vestido Aurora',category:'Vestido',price:159.90,image:images[0],sizes:['P','M','G'],color:'Preto',stock:4,material:'Viscose premium',featured:true,new:true},
    {id:'p2',store:1,name:'Calça Wide Jeans',category:'Calça',price:129.90,image:images[1],sizes:['36','38','40','42'],color:'Jeans',stock:5,material:'Jeans',featured:true},
    {id:'p3',store:1,name:'Blusa Serena',category:'Blusa',price:79.90,image:images[2],sizes:['P','M','G'],color:'Rosa',stock:2,material:'Crepe',new:true},
    {id:'p4',store:2,name:'Vestido Midi Verde',category:'Vestido',price:149.90,image:images[3],sizes:['P','M','G'],color:'Verde',stock:3,material:'Linho misto',featured:true},
    {id:'p5',store:2,name:'Conjunto Essencial',category:'Conjunto',price:189.90,image:images[4],sizes:['P','M','G'],color:'Bege',stock:4,material:'Alfaiataria'},
    {id:'p6',store:3,name:'Blusa Ombro a Ombro',category:'Blusa',price:84.90,image:images[5],sizes:['P','M','G'],color:'Vinho',stock:5,material:'Viscose'},
    {id:'p7',store:3,name:'Saia Midi Clara',category:'Saia',price:119.90,image:images[6],sizes:['P','M','G'],color:'Off-white',stock:3,material:'Linho'},
    {id:'p8',store:4,name:'Conjunto Natural',category:'Conjunto',price:179.90,image:images[7],sizes:['P','M','G'],color:'Natural',stock:4,material:'Algodão',featured:true},
    {id:'p9',store:4,name:'Blusa Acetinada',category:'Blusa',price:94.90,image:images[8],sizes:['P','M','G'],color:'Champagne',stock:6,material:'Cetim'},
    {id:'p10',store:5,name:'Vestido Solar',category:'Vestido',price:169.90,image:images[9],sizes:['P','M','G'],color:'Amarelo',stock:3,material:'Viscose',new:true},
    {id:'p11',store:5,name:'Calça Social Feminina',category:'Calça',price:139.90,image:images[10],sizes:['36','38','40'],color:'Cinza',stock:4,material:'Alfaiataria'},
    {id:'p12',store:6,name:'Vestido Xadrez',category:'Vestido',price:154.90,image:images[11],sizes:['P','M','G'],color:'Marrom',stock:4,material:'Tricoline'},
    {id:'p13',store:6,name:'Blusa Listrada',category:'Blusa',price:79.90,image:images[12],sizes:['P','M','G'],color:'Azul',stock:7,material:'Malha'},
    {id:'p14',store:7,name:'Vestido Delicado',category:'Vestido',price:149.90,image:images[13],sizes:['P','M','G'],color:'Verde',stock:3,material:'Crepe'},
    {id:'p15',store:7,name:'Blusa Fluida',category:'Blusa',price:89.90,image:images[14],sizes:['P','M','G'],color:'Claro',stock:6,material:'Viscose'},
    {id:'p16',store:8,name:'Blusa Decote Quadrado',category:'Blusa',price:69.90,image:images[15],sizes:['P','M','G'],color:'Rosa',stock:7,material:'Malha',new:true},
    {id:'p17',store:8,name:'Conjunto Casual',category:'Conjunto',price:159.90,image:images[16],sizes:['P','M','G'],color:'Azul',stock:4,material:'Malha canelada'},
    {id:'p18',store:9,name:'Blusa Básica',category:'Blusa',price:69.90,image:images[17],sizes:['P','M','G'],color:'Marrom',stock:5,material:'Algodão'},
    {id:'p19',store:9,name:'Vestido Noite',category:'Vestido',price:189.90,image:images[18],sizes:['P','M','G'],color:'Preto',stock:3,material:'Crepe',featured:true}
  ];

  const demoAccounts = [
    {id:'demo-client',role:'client',name:'Júlia Martins',email:'julia@devitre.com',password:'123456',phone:'(88) 99999-1234',city:'Itarema - CE'},
    {id:'demo-seller',role:'seller',name:'Charlotts Boutique',email:'charlotts@devitre.com',password:'123456',storeId:1,storeName:'Charlotts Boutique',city:'Itarema - CE'}
  ];
  function loadAccounts(){try{const v=JSON.parse(localStorage.getItem(AUTH_KEY)||'[]');return [...demoAccounts,...v.filter(x=>!demoAccounts.some(d=>d.email===x.email))];}catch{return [...demoAccounts];}}
  function saveCustomAccounts(list){localStorage.setItem(AUTH_KEY,JSON.stringify(list.filter(x=>!x.id?.startsWith('demo-'))));}
  let accounts=loadAccounts();

  const productReviews = {
    p1:[{name:'Mariana',stars:5,text:'Vestido lindo e o tamanho ficou certinho.'},{name:'Camila',stars:5,text:'Reservei e retirei no mesmo dia. Muito prático.'}],
    p4:[{name:'Bianca',stars:5,text:'Tecido ótimo e atendimento rápido.'}],
    p8:[{name:'Ana',stars:4,text:'Conjunto bonito e confortável.'}]
  };

  let loginType='client';
  let session=null;
  let state;
  let currentPage='home';
  let currentStoreId=1;
  let currentProductId='p1';
  let activeConversationStore=1;
  let productFilter={category:'',query:'',max:'',size:'',color:'',stock:'',sort:'featured'};

  const now=()=>Date.now();
  const money=v=>Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  const escapeHtml=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const initials=name=>String(name||'DV').split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase();
  const storeBy=id=>stores.find(s=>s.id===Number(id)) || {id:Number(id),name:session?.storeName||'Minha Loja',city:session?.city||'Itarema - CE',desc:'Loja criada na demonstração DeVitrê.',rating:5,reviews:0,hours:'09:00–18:00',pickup:'até 2h',verified:false};
  const productBy=id=>state.products.find(p=>String(p.id)===String(id));
  const formatTime=ts=>new Date(ts).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
  const formatDate=ts=>new Date(ts).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});

  function freshState(){
    return {
      products:structuredClone(seedProducts),reservations:[],favorites:[],followingStores:[1],bag:[],recentlyViewed:[],
      chats:{'1:julia':[
        {id:'m1',from:'client',text:'Olá! Gostaria de saber se vocês têm o Vestido Aurora no tamanho M.',time:now()-7200000,read:true},
        {id:'m2',from:'seller',text:'Oi, Júlia! Temos sim 😊 Posso deixar separado para você retirar hoje.',time:now()-6900000,read:true}
      ]},
      notifications:[
        {id:'n1',title:'Bem-vinda à nova DeVitrê',text:'Explore vitrines locais e reserve sem sair de casa.',time:now()-3600000,read:false},
        {id:'n2',title:'Cupom de apresentação',text:'Use VITRE10 para simular 10% de desconto no sinal.',time:now()-1800000,read:false}
      ],
      theme:'light',points:120,couponUses:[],
      profile:{name:'Júlia Martins',phone:'(88) 99999-1234',city:'Itarema - CE',size:'M',shoe:'37'},
      storeSettings:{1:{open:true,pickup:'30–60 min',notice:'Retirada disponível até 18h. Reserve online e prove na loja.'}}
    };
  }

  function migrateLegacy(legacy){
    const base=freshState();
    if(!legacy||typeof legacy!=='object') return base;
    for(const k of ['products','reservations','favorites','chats','theme']) if(legacy[k]!=null) base[k]=legacy[k];
    return base;
  }

  function loadState(){
    try{
      const raw=localStorage.getItem(STORAGE_KEY);
      if(raw){const parsed=JSON.parse(raw);return {...freshState(),...parsed};}
      const legacy=localStorage.getItem(LEGACY_KEY);
      if(legacy) return migrateLegacy(JSON.parse(legacy));
    }catch{}
    return freshState();
  }
  state=loadState();
  function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{toast('O navegador ficou sem espaço para salvar mais dados.');} updateBadges();}

  function toast(text){const el=document.getElementById('toast');el.textContent=text;el.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>el.style.display='none',2800);}
  function openModal(html){const modal=document.getElementById('modal');document.getElementById('modalPanel').innerHTML=html;modal.classList.add('open');modal.setAttribute('aria-hidden','false');}
  function closeModal(){const modal=document.getElementById('modal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}

  function isStoreOpen(s){
    if(s.id===1 && state.storeSettings?.[1]?.open===false) return false;
    const h=new Date().getHours();return h>=8&&h<19;
  }
  function setTheme(theme){state.theme=theme;document.body.classList.toggle('dark',theme==='dark');saveState();renderThemeButton();}
  function renderThemeButton(){const b=document.getElementById('themeToggle');if(!b)return;b.innerHTML=state.theme==='dark'?'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>':'<svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>';}

  function addNotification(title,text){state.notifications.unshift({id:'n'+now(),title,text,time:now(),read:false});saveState();}
  function unreadNotifications(){return state.notifications.filter(n=>!n.read).length;}
  function unreadMessages(){
    if(session?.role==='seller') return (state.chats['1:julia']||[]).filter(m=>m.from==='client'&&!m.read).length;
    return Object.values(state.chats).flat().filter(m=>m.from==='seller'&&!m.read).length;
  }
  function updateBadges(){
    const bag=document.getElementById('bagCount');if(bag)bag.textContent=state.bag.length;
    const nc=document.getElementById('notificationCount');if(nc){const n=unreadNotifications();nc.textContent=n;nc.classList.toggle('hidden',!n);}
    const um=unreadMessages();const nav=document.getElementById('navUnread');if(nav){nav.textContent=um;nav.classList.toggle('hidden',!um);}
  }

  function setLoginType(type){
    loginType=type;document.getElementById('loginTabClient').classList.toggle('active',type==='client');document.getElementById('loginTabSeller').classList.toggle('active',type==='seller');
    document.getElementById('storeNameLabel')?.classList.toggle('hidden',!(authMode==='register'&&type==='seller'));
    if(authMode==='login'){const acc=demoAccounts.find(a=>a.role===type);document.getElementById('loginEmail').value=acc?.email||'';document.getElementById('loginPassword').value=acc?.password||'';}
  }
  function setAuthMode(mode){
    authMode=mode;document.getElementById('authLoginMode').classList.toggle('active',mode==='login');document.getElementById('authRegisterMode').classList.toggle('active',mode==='register');
    document.getElementById('registerFields').classList.toggle('hidden',mode!=='register');document.getElementById('confirmPasswordLabel').classList.toggle('hidden',mode!=='register');document.getElementById('forgotPassword').classList.toggle('hidden',mode!=='login');document.getElementById('storeNameLabel').classList.toggle('hidden',!(mode==='register'&&loginType==='seller'));
    document.getElementById('loginButton').textContent=mode==='register'?'Criar conta e entrar':'Entrar na plataforma';
    document.getElementById('loginEmail').value='';document.getElementById('loginPassword').value='';if(mode==='login')setLoginType(loginType);
  }
  function login(){
    const email=document.getElementById('loginEmail').value.trim().toLowerCase(), password=document.getElementById('loginPassword').value;accounts=loadAccounts();const acc=accounts.find(a=>a.role===loginType&&a.email===email&&a.password===password);
    if(!acc){toast('E-mail ou senha inválidos para este tipo de conta.');return;}session={...acc};(document.getElementById('rememberSession').checked?localStorage:sessionStorage).setItem(SESSION_KEY,JSON.stringify(session));showApp();
  }
  function register(){
    const name=document.getElementById('registerName').value.trim(), email=document.getElementById('loginEmail').value.trim().toLowerCase(), phone=document.getElementById('registerPhone').value.trim(), city=document.getElementById('registerCity').value.trim(), pass=document.getElementById('loginPassword').value, pass2=document.getElementById('registerPassword2').value;
    const storeName=document.getElementById('registerStoreName').value.trim(); if(name.length<3||!email.includes('@')||pass.length<6){toast('Preencha nome, e-mail válido e senha com 6+ caracteres.');return;}if(pass!==pass2){toast('As senhas não conferem.');return;}accounts=loadAccounts();if(accounts.some(a=>a.email===email)){toast('Já existe uma conta com esse e-mail.');return;}
    const custom=accounts.filter(x=>!x.id?.startsWith('demo-'));const acc={id:'u'+Date.now(),role:loginType,name,email,password:pass,phone,city:city||'Itarema - CE'};if(loginType==='seller'){acc.storeName=storeName||name;acc.name=acc.storeName;acc.storeId=1;}custom.push(acc);saveCustomAccounts(custom);accounts=loadAccounts();state.profile={...state.profile,name:loginType==='client'?name:state.profile.name,phone,city:city||state.profile.city};saveState();session={...acc};localStorage.setItem(SESSION_KEY,JSON.stringify(session));toast('Conta criada com sucesso!');showApp();
  }
  function forgotPassword(){const email=prompt('Digite o e-mail cadastrado neste navegador:')?.trim().toLowerCase();if(!email)return;const list=loadAccounts();const acc=list.find(a=>a.email===email);if(!acc){toast('Conta não encontrada neste navegador.');return;}const np=prompt('Digite uma nova senha com pelo menos 6 caracteres:');if(!np||np.length<6){toast('Senha inválida.');return;}if(acc.id?.startsWith('demo-')){toast('As contas de demonstração mantêm a senha 123456.');return;}acc.password=np;saveCustomAccounts(list);toast('Senha redefinida neste navegador.');}
  function submitAuth(){authMode==='register'?register():login();}
  function logout(){session=null;sessionStorage.removeItem(SESSION_KEY);localStorage.removeItem(SESSION_KEY);document.getElementById('app').classList.add('hidden');document.getElementById('loginScreen').classList.remove('hidden');setLoginType('client');}
  function showApp(){
    document.getElementById('loginScreen').classList.add('hidden');document.getElementById('app').classList.remove('hidden');
    document.getElementById('topAvatar').textContent=initials(session.role==='seller'?(session.storeName||session.name):(session.name||state.profile.name));
    document.getElementById('modeBar').innerHTML=session.role==='seller'?`<b>Modo loja:</b> ${escapeHtml(session.storeName||session.name)} · gerencie vitrine, reservas, mensagens e estoque.`:`<b>Modo cliente:</b> ${escapeHtml(session.name||'Cliente')} · encontre peças locais, converse com lojas, reserve e retire presencialmente.`;
    setTheme(state.theme||'light');updateBadges();navigate(session.role==='seller'?'seller':'home');
  }

  function navigate(page,arg){
    currentPage=page;if(page==='store'&&arg!=null)currentStoreId=Number(arg);if(page==='product'&&arg!=null)currentProductId=String(arg);if(page==='messages'&&arg!=null)activeConversationStore=Number(arg);
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('page-'+page)?.classList.add('active');
    document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.nav===page||(page==='store'&&b.dataset.nav==='stores')||(page==='product'&&b.dataset.nav==='products')||(page==='seller'&&b.dataset.nav==='profile')));
    renderCurrent();window.scrollTo({top:0,behavior:'smooth'});
  }
  function renderCurrent(){
    ({home:renderHome,stores:renderStores,products:renderProducts,reservations:renderReservations,messages:renderMessages,profile:renderProfile,seller:renderSeller}[currentPage]||(()=>{}))();
    if(currentPage==='store')renderStore(currentStoreId);if(currentPage==='product')renderProduct(currentProductId);
  }

  function ratingStars(v){const n=Math.round(v);return '★'.repeat(n)+'☆'.repeat(5-n);}
  function productCard(p){
    const s=storeBy(p.store),fav=state.favorites.includes(String(p.id));
    return `<article class="product-card">
      <div class="product-photo" data-open-product="${p.id}"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/product-placeholder.svg'">
        <span class="stock">${p.stock>0?p.stock+' disponíveis':'Esgotado'}</span>${p.new?'<span class="tag">NOVO</span>':''}
        <button class="quick-fav ${fav?'active':''}" data-favorite="${p.id}" aria-label="Favoritar">${fav?'♥':'♡'}</button>
      </div>
      <div class="product-info"><div class="store-mini">${escapeHtml(s.name)}</div><div class="product-name">${escapeHtml(p.name)}</div><div class="seller-rating">★ ${s.rating.toFixed(1)} · ${escapeHtml(p.color)}</div>
      <div class="price-row"><div class="price">${money(p.price)}</div><div class="split-price">sinal ${money(p.price/2)}</div></div>
      <div class="product-actions"><button class="button secondary" data-open-product="${p.id}">Ver detalhes</button><button class="button ghost" data-quick-bag="${p.id}" ${p.stock<1?'disabled':''}>+ Sacola</button></div></div>
    </article>`;
  }
  function storeCard(s){
    const followed=state.followingStores.includes(s.id),open=isStoreOpen(s),count=state.products.filter(p=>p.store===s.id&&p.stock>0).length;
    return `<article class="store-card" data-open-store="${s.id}"><div class="store-card-head"><div class="store-avatar">${escapeHtml(s.name.charAt(0))}</div><div><strong>${escapeHtml(s.name)} ${s.verified?'✓':''}</strong><div class="seller-rating">★ ${s.rating.toFixed(1)} · ${s.reviews} avaliações</div><p class="sub" style="margin:4px 0 0">${escapeHtml(s.desc)}</p></div></div><div class="store-meta"><span class="mini-pill ${open?'open':'closed'}">${open?'Aberta agora':'Fechada'}</span><span class="mini-pill">${count} peças</span><span class="mini-pill">Retirada ${escapeHtml(s.pickup)}</span>${followed?'<span class="mini-pill">Seguindo</span>':''}</div></article>`;
  }

  function renderHome(){
    const featured=state.products.filter(p=>p.stock>0&&(p.featured||p.new)).slice(0,8);const recent=state.recentlyViewed.map(productBy).filter(Boolean).slice(0,4);
    document.getElementById('page-home').innerHTML=`
      <section class="hero-pro"><div class="hero-copy"><span class="eyebrow">A VITRINE DIGITAL DA SUA CIDADE</span><h1>Moda local com um jeito <span>novo de comprar.</span></h1><p>Descubra peças nas lojas de Itarema, fale direto com o vendedor, reserve pagando 50% e retire presencialmente quando estiver pronta.</p><div class="hero-actions"><button class="button primary" data-nav="products">Explorar peças</button><button class="button ghost" data-nav="stores">Conhecer lojas</button></div><div class="hero-stats"><div class="hero-stat"><b>${stores.length}</b><span>lojas locais</span></div><div class="hero-stat"><b>${state.products.filter(p=>p.stock>0).length}</b><span>peças disponíveis</span></div><div class="hero-stat"><b>50%</b><span>sinal na reserva</span></div></div></div><div class="hero-editorial"><div class="hero-dress"></div><div class="hero-badge"><b>Retire na loja</b>Reserve online, prove presencialmente.</div></div></section>
      <div class="promo-strip"><div><strong>10% no sinal para apresentar o fluxo ✦</strong><br><span>Use o cupom VITRE10 no pagamento simulado da reserva.</span></div><div class="promo-code">VITRE10</div></div>
      <section class="section"><div class="section-head"><div><h2>Comece pelo seu estilo</h2><div class="sub">Categorias rápidas para encontrar sua próxima peça.</div></div></div><div class="category-grid">${[['Vestido','✦'],['Blusa','◌'],['Calça','▱'],['Conjunto','◇'],['Saia','◐'],['Tudo','↗']].map(([c,i])=>`<button class="category-card" data-category="${c==='Tudo'?'':c}"><span>${i}</span><div><b>${c}</b><br><small>${c==='Tudo'?'Ver catálogo completo':'Explorar seleção'}</small></div></button>`).join('')}</div></section>
      <section class="section"><div class="section-head"><div><h2>Em destaque agora</h2><div class="sub">Seleção de peças com estoque disponível.</div></div><button class="button ghost" data-nav="products">Ver catálogo</button></div><div class="grid">${featured.map(productCard).join('')}</div></section>
      ${recent.length?`<section class="section"><div class="section-head"><div><h2>Vistos recentemente</h2><div class="sub">Continue de onde parou.</div></div></div><div class="grid">${recent.map(productCard).join('')}</div></section>`:''}
      <section class="section"><div class="section-head"><div><h2>Lojas da cidade</h2><div class="sub">Vitrines locais reunidas em um só lugar.</div></div><button class="button ghost" data-nav="stores">Ver todas</button></div><div class="store-grid">${stores.slice(0,6).map(storeCard).join('')}</div></section>`;
  }

  function renderStores(){
    document.getElementById('page-stores').innerHTML=`<div class="section-head"><div><h1>Lojas</h1><div class="sub">Descubra empresas locais, acompanhe novidades e converse antes de reservar.</div></div></div><div class="chips"><button class="chip active">Todas</button><button class="chip">Abertas agora</button><button class="chip">Mais avaliadas</button><button class="chip">Retirada rápida</button></div><div class="section store-grid">${stores.map(storeCard).join('')}</div>`;
  }

  function filteredProducts(){
    let items=[...state.products];const q=(productFilter.query||'').trim().toLowerCase();
    items=items.filter(p=>(!productFilter.category||p.category===productFilter.category)&&(!productFilter.max||p.price<=Number(productFilter.max))&&(!productFilter.size||p.sizes.includes(productFilter.size))&&(!productFilter.color||p.color===productFilter.color)&&(!productFilter.stock||p.stock>0)&&(!q||(p.name+' '+p.category+' '+p.color+' '+storeBy(p.store).name).toLowerCase().includes(q)));
    if(productFilter.sort==='priceAsc')items.sort((a,b)=>a.price-b.price);if(productFilter.sort==='priceDesc')items.sort((a,b)=>b.price-a.price);if(productFilter.sort==='new')items.sort((a,b)=>(b.new?1:0)-(a.new?1:0));if(productFilter.sort==='featured')items.sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
    return items;
  }
  function renderProducts(){
    const items=filteredProducts();const colors=[...new Set(state.products.map(p=>p.color))].sort();const sizes=[...new Set(state.products.flatMap(p=>p.sizes))].sort();
    document.getElementById('page-products').innerHTML=`<div class="section-head"><div><h1>Explorar peças</h1><div class="sub">Filtre por estilo, tamanho, cor, preço e disponibilidade.</div></div></div><div class="filter-panel"><select id="categoryFilter" class="field"><option value="">Categoria</option>${['Vestido','Blusa','Calça','Conjunto','Saia','Short'].map(c=>`<option ${productFilter.category===c?'selected':''}>${c}</option>`).join('')}</select><select id="sizeFilter" class="field"><option value="">Tamanho</option>${sizes.map(s=>`<option ${productFilter.size===s?'selected':''}>${s}</option>`).join('')}</select><select id="colorFilter" class="field"><option value="">Cor</option>${colors.map(c=>`<option ${productFilter.color===c?'selected':''}>${c}</option>`).join('')}</select><select id="priceFilter" class="field"><option value="">Preço</option><option value="100" ${productFilter.max==='100'?'selected':''}>Até R$100</option><option value="150" ${productFilter.max==='150'?'selected':''}>Até R$150</option><option value="200" ${productFilter.max==='200'?'selected':''}>Até R$200</option></select><select id="stockFilter" class="field"><option value="">Disponibilidade</option><option value="yes" ${productFilter.stock?'selected':''}>Em estoque</option></select><select id="sortFilter" class="field"><option value="featured" ${productFilter.sort==='featured'?'selected':''}>Destaques</option><option value="new" ${productFilter.sort==='new'?'selected':''}>Novidades</option><option value="priceAsc" ${productFilter.sort==='priceAsc'?'selected':''}>Menor preço</option><option value="priceDesc" ${productFilter.sort==='priceDesc'?'selected':''}>Maior preço</option></select></div><div class="results-bar"><span>${items.length} resultado${items.length===1?'':'s'}</span><button class="button ghost" data-clear-filters>Limpar filtros</button></div>${items.length?`<div class="grid">${items.map(productCard).join('')}</div>`:'<div class="empty">Nenhuma peça encontrada com esses filtros.</div>'}`;
  }

  function renderStore(id){
    const s=storeBy(id);if(!s)return navigate('stores');const items=state.products.filter(p=>p.store===id);const followed=state.followingStores.includes(id),open=isStoreOpen(s);
    document.getElementById('page-store').innerHTML=`<button class="back" data-nav="stores">← Voltar às lojas</button><div class="store-header"><div class="store-title"><div class="store-avatar">${s.name.charAt(0)}</div><div><span class="eyebrow">${s.verified?'LOJA VERIFICADA':'LOJA LOCAL'}</span><h1 style="margin:5px 0">${escapeHtml(s.name)}</h1><div class="sub">${escapeHtml(s.desc)}</div><div class="store-info-row"><span>★ ${s.rating.toFixed(1)} (${s.reviews})</span><span>• ${open?'Aberta agora':'Fechada agora'}</span><span>• ${escapeHtml(s.hours)}</span><span>• Retirada ${escapeHtml(s.pickup)}</span></div></div></div><div class="store-actions">${session.role==='client'?`<button class="button ${followed?'secondary':'ghost'}" data-follow-store="${s.id}">${followed?'✓ Seguindo':'+ Seguir loja'}</button><button class="button secondary" data-open-messages="${s.id}">Mensagem</button>`:''}<button class="button ghost" data-share-store="${s.id}">Compartilhar</button></div></div><section class="section"><div class="section-head"><div><h2>Vitrine</h2><div class="sub">${items.length} peças cadastradas · ${items.filter(p=>p.stock>0).length} disponíveis</div></div></div><div class="grid">${items.map(productCard).join('')}</div></section>`;
  }

  function renderProduct(id){
    const p=productBy(id);if(!p)return navigate('products');const s=storeBy(p.store);state.recentlyViewed=[String(id),...state.recentlyViewed.filter(x=>x!==String(id))].slice(0,10);saveState();const fav=state.favorites.includes(String(id));const reviews=productReviews[p.id]||[];
    document.getElementById('page-product').innerHTML=`<button class="back" data-nav="products">← Voltar ao catálogo</button><div class="detail"><div class="detail-gallery"><div class="product-photo"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='assets/product-placeholder.svg'"><span class="stock">${p.stock} disponíveis</span>${p.new?'<span class="tag">NOVO</span>':''}</div><div class="share-row"><button class="button ghost" data-favorite="${p.id}">${fav?'♥ Salvo':'♡ Favoritar'}</button><button class="button ghost" data-share-product="${p.id}">↗ Compartilhar</button></div></div><div class="detail-panel"><div class="store-mini" data-open-store="${s.id}" style="cursor:pointer">${escapeHtml(s.name)} · ★ ${s.rating.toFixed(1)}</div><h1>${escapeHtml(p.name)}</h1><div class="price">${money(p.price)}</div><div class="sub">Sinal de reserva: <b>${money(p.price/2)}</b> · restante na retirada</div><p class="sub">${escapeHtml(p.material||'Peça selecionada')} · ${escapeHtml(p.color)}. Reserve para garantir a peça antes de ir até a loja.</p><div class="options"><label>Tamanho<select id="selectedSize" class="field">${p.sizes.map(x=>`<option>${escapeHtml(x)}</option>`).join('')}</select></label><label>Cor<select class="field"><option>${escapeHtml(p.color)}</option></select></label></div><div class="detail-features"><div class="detail-feature">◎<b>Estoque real</b>${p.stock} un.</div><div class="detail-feature">◷<b>Retirada</b>${escapeHtml(s.pickup)}</div><div class="detail-feature">↗<b>Converse</b>Direto com a loja</div></div>${session.role==='client'?`<button class="button primary full" data-reserve="${p.id}" ${p.stock<1?'disabled':''}>${p.stock<1?'Indisponível':'Reservar agora'}</button><button class="button secondary full" style="margin-top:8px" data-add-bag="${p.id}" ${p.stock<1?'disabled':''}>Adicionar à sacola</button><button class="button ghost full" style="margin-top:8px" data-open-messages="${s.id}">Perguntar à loja</button>`:`<div class="box" style="padding:14px;margin-top:15px"><b>Você está no modo loja.</b><div class="sub">Gerencie esta peça no painel da Charlotts.</div></div>`}<section class="section" style="margin-top:22px"><h3 style="margin:0">Avaliações da peça</h3>${reviews.length?`<div class="review-list">${reviews.map(r=>`<div class="review-item"><b>${escapeHtml(r.name)}</b> <span class="stars">${ratingStars(r.stars)}</span><div class="sub">${escapeHtml(r.text)}</div></div>`).join('')}</div>`:'<div class="sub" style="margin-top:8px">Ainda sem avaliações. Seja a primeira após concluir uma compra.</div>'}</section></div></div>`;
  }

  function getChatKey(storeId){return `${storeId}:julia`;}
  function ensureChat(storeId){const key=getChatKey(storeId);if(!state.chats[key])state.chats[key]=[{id:'w'+storeId,from:'seller',text:'Olá! Posso ajudar com tamanho, disponibilidade, reserva ou retirada 😊',time:now()-60000,read:false}];return key;}
  function sendClientChat(storeId,text){if(!text.trim())return;const key=ensureChat(storeId);state.chats[key].push({id:'m'+now(),from:'client',text:text.trim(),time:now(),read:false});if(storeId!==1)setTimeout(()=>{state.chats[key].push({id:'a'+now(),from:'seller',text:'Recebemos sua mensagem! Vamos confirmar disponibilidade e responder por aqui.',time:now(),read:false});saveState();if(currentPage==='messages')renderMessages();},250);saveState();}
  function sellerSend(text){if(!text.trim())return;const key=ensureChat(1);state.chats[key].push({id:'s'+now(),from:'seller',text:text.trim(),time:now(),read:false});saveState();}

  function renderMessages(){
    const allowedStores=session.role==='seller'?[storeBy(1)]:stores.filter(s=>state.chats[getChatKey(s.id)]||state.followingStores.includes(s.id)||s.id===activeConversationStore);if(!allowedStores.length)allowedStores.push(storeBy(1));if(!allowedStores.some(s=>s.id===activeConversationStore))activeConversationStore=allowedStores[0].id;
    const key=ensureChat(activeConversationStore);const msgs=state.chats[key];msgs.forEach(m=>{if((session.role==='seller'&&m.from==='client')||(session.role==='client'&&m.from==='seller'))m.read=true;});saveState();const active=storeBy(activeConversationStore);
    document.getElementById('page-messages').innerHTML=`<div class="section-head"><div><h1>Mensagens</h1><div class="sub">Converse com as lojas antes e depois de reservar.</div></div></div><div class="messages-layout"><aside class="conversation-list"><div class="conversation-search"><input id="conversationSearch" class="field" style="width:100%" placeholder="Buscar conversa..."></div>${allowedStores.map(s=>{const k=ensureChat(s.id),last=state.chats[k].at(-1),unread=state.chats[k].some(m=>(session.role==='seller'?m.from==='client':m.from==='seller')&&!m.read);return `<div class="conversation-item ${s.id===activeConversationStore?'active':''}" data-conversation="${s.id}"><div class="store-avatar">${s.name.charAt(0)}</div><main><b>${escapeHtml(s.name)}</b><small>${escapeHtml(last?.text||'Iniciar conversa')}</small></main>${unread?'<span class="unread-dot"></span>':''}</div>`}).join('')}</aside><section class="conversation-panel"><div class="chat-header"><div class="chat-person"><div class="store-avatar" style="width:42px;height:42px;font-size:16px">${active.name.charAt(0)}</div><div><b>${session.role==='seller'?'Júlia Martins':escapeHtml(active.name)}</b><div class="store-mini">${isStoreOpen(active)?'Online · loja aberta':'Responderá no horário comercial'}</div></div></div><div class="chat-actions"><button class="icon-button" data-chat-info title="Informações">⋯</button></div></div><div id="chatMessages" class="chat-messages">${msgs.map(m=>{const mine=session.role==='seller'?m.from==='seller':m.from==='client';return `<div class="msg ${mine?'mine':''}">${escapeHtml(m.text)}<div class="time">${formatTime(m.time)}</div></div>`}).join('')}</div><div class="chat-send"><input id="chatInput" class="field" placeholder="Digite sua mensagem..." autocomplete="off"><button class="button primary" data-chat-send>Enviar</button></div></section></div>`;
    setTimeout(()=>{const box=document.getElementById('chatMessages');if(box)box.scrollTop=box.scrollHeight;},0);
  }

  function addToBag(id,size){
    if(session.role!=='client'){toast('A sacola está disponível no modo cliente.');return;}const p=productBy(id);if(!p||p.stock<1)return;const selected=size||document.getElementById('selectedSize')?.value||p.sizes[0];
    const existing=state.bag.find(x=>String(x.productId)===String(id));if(existing){existing.size=selected;toast('Tamanho atualizado na sacola.');}else{state.bag.push({productId:String(id),size:selected,addedAt:now()});toast('Peça adicionada à sacola.');}saveState();
  }
  function openBag(){
    if(session?.role!=='client'){toast('Entre como cliente para usar a sacola.');return;}const items=state.bag.map(x=>({...x,p:productBy(x.productId)})).filter(x=>x.p);const total=items.reduce((s,x)=>s+x.p.price,0);
    openModal(`<div class="modal-head"><div><span class="eyebrow">SACOLA DE RESERVA</span><h2 style="margin:5px 0">${items.length} peça${items.length===1?'':'s'}</h2></div><button class="close" data-close-modal>×</button></div>${items.length?`<div class="seller-list">${items.map(x=>`<div class="seller-product"><img src="${x.p.image}"><div><b>${escapeHtml(x.p.name)}</b><br><small>${escapeHtml(storeBy(x.p.store).name)} · Tam. ${escapeHtml(x.size)} · ${money(x.p.price)}</small></div><button class="button danger" data-remove-bag="${x.p.id}">×</button></div>`).join('')}</div><div class="payment-card"><b>Total das peças: ${money(total)}</b><div class="sub">Sinal estimado de 50%: ${money(total/2)}</div></div><button class="button primary full" style="margin-top:12px" data-reserve-bag>Reservar todas</button>`:'<div class="empty" style="margin-top:15px">Sua sacola está vazia.</div>'}`);
  }
  function reserveProduct(id,sizeOverride){
    if(session.role!=='client'){toast('Entre como cliente para reservar.');return false;}const p=productBy(id);if(!p||p.stock<1){toast('Peça indisponível.');return false;}const existing=state.reservations.find(r=>r.productId===String(id)&&!r.cancelled&&!r.finished&&!r.removed);if(existing){toast('Essa peça já está em uma reserva ativa.');return false;}
    const size=sizeOverride||document.getElementById('selectedSize')?.value||p.sizes[0];p.stock-=1;state.reservations.unshift({id:'r'+now()+Math.random().toString(16).slice(2,6),productId:String(id),storeId:p.store,size,createdAt:now(),expiresAt:now()+24*3600000,paid50:false,cancelled:false,ready:false,finished:false,removed:false,status:'Reservada'});addNotification('Reserva criada',`${p.name} foi separada por 24 horas.`);saveState();return true;
  }
  function reserveBag(){let n=0;for(const item of [...state.bag])if(reserveProduct(item.productId,item.size))n++;state.bag=[];saveState();closeModal();toast(`${n} peça${n===1?'':'s'} reservada${n===1?'':'s'}.`);navigate('reservations');}

  function reservationStage(r){if(r.cancelled)return 0;if(r.finished)return 4;if(r.ready)return 3;if(r.paid50)return 2;return 1;}
  function reservationCard(r){
    const p=productBy(r.productId),s=storeBy(r.storeId);if(!p)return '';const stage=reservationStage(r);const remaining=Math.max(0,r.expiresAt-now()),hrs=Math.floor(remaining/3600000),mins=Math.floor((remaining%3600000)/60000);
    return `<article class="reservation-card"><img src="${p.image}" alt="${escapeHtml(p.name)}"><div class="reservation-main"><div class="store-mini">${escapeHtml(s.name)}</div><b>${escapeHtml(p.name)}</b> · Tam. ${escapeHtml(r.size)}<div style="margin-top:7px"><span class="status ${r.finished||r.ready?'good':r.paid50?'warn':''}">${escapeHtml(r.status)}</span> ${!r.paid50&&!r.cancelled?`<span class="countdown">expira em ${hrs}h ${mins}min</span>`:''}</div><div class="timeline">${['Reservada','Sinal 50%','Pronta','Retirada'].map((x,i)=>`<div class="timeline-step ${stage>i?'done':''}">${x}</div>`).join('')}</div>${r.paid50?`<div class="payment-card">Código <b>${escapeHtml(r.paymentCode)}</b> · ${escapeHtml(r.paymentMethod||'PIX')}<div class="payment-split"><div>Sinal pago<strong>${money(r.depositPaid||p.price/2)}</strong></div><div>Na retirada<strong>${money(r.balanceDue??p.price/2)}</strong></div></div></div>`:`<div class="payment-card">Reserve por 24h. O sinal padrão é <b>${money(p.price/2)}</b>.</div>`}<div class="reservation-actions">${!r.paid50&&!r.cancelled?`<button class="button primary" data-pay="${r.id}">Pagar 50%</button>`:''}${!r.cancelled&&!r.finished?`<button class="button secondary" data-open-messages="${s.id}">Falar com loja</button><button class="button ghost" data-cancel-reservation="${r.id}">Cancelar</button>`:''}${r.finished&&!r.reviewed?`<button class="button secondary" data-review="${r.id}">Avaliar compra</button>`:''}${r.cancelled?`<button class="button danger" data-remove-reservation="${r.id}">Remover histórico</button>`:''}</div></div><div><b>${money(p.price)}</b><div class="store-mini">criada ${formatDate(r.createdAt)}</div></div></article>`;
  }
  function renderReservations(){
    expireReservations();const list=state.reservations.filter(r=>!r.removed);document.getElementById('page-reservations').innerHTML=`<div class="section-head"><div><h1>Reservas</h1><div class="sub">Acompanhe sinal, preparo para retirada e histórico.</div></div><button class="button ghost" data-open-bag>Abrir sacola (${state.bag.length})</button></div>${list.length?`<div class="reservation-list">${list.map(reservationCard).join('')}</div>`:'<div class="empty">Você ainda não reservou nenhuma peça.</div>'}`;
  }
  function expireReservations(){let changed=false;for(const r of state.reservations){if(!r.paid50&&!r.cancelled&&!r.finished&&r.expiresAt&&r.expiresAt<now()){const p=productBy(r.productId);if(p)p.stock+=1;r.cancelled=true;r.status='Expirada';changed=true;}}if(changed)saveState();}
  function cancelReservation(id){const r=state.reservations.find(x=>x.id===id);if(!r||r.cancelled)return;const p=productBy(r.productId);if(p)p.stock+=1;r.cancelled=true;r.status='Cancelada';saveState();renderReservations();toast('Reserva cancelada e estoque devolvido.');}
  function removeReservation(id){const r=state.reservations.find(x=>x.id===id);if(r){r.removed=true;saveState();renderReservations();}}
  function openPayment(id){
    const r=state.reservations.find(x=>x.id===id),p=productBy(r?.productId);if(!r||!p)return;openModal(`<div class="modal-head"><div><span class="eyebrow">PAGAMENTO DEMONSTRATIVO</span><h2 style="margin:5px 0">Confirmar sinal</h2></div><button class="close" data-close-modal>×</button></div><p class="sub">${escapeHtml(p.name)} · total ${money(p.price)}</p><div class="payment-card"><div class="payment-split"><div>Sinal padrão<strong>${money(p.price/2)}</strong></div><div>Restante na loja<strong>${money(p.price/2)}</strong></div></div></div><label style="display:block;margin-top:14px;font-size:11px;font-weight:900">Cupom<input id="couponInput" class="field" style="width:100%;margin-top:5px" placeholder="Ex.: VITRE10"></label><div style="display:grid;gap:8px;margin:14px 0"><label><input type="radio" name="paymentMethod" value="PIX" checked> PIX</label><label><input type="radio" name="paymentMethod" value="Cartão"> Cartão de crédito</label></div><button class="button primary full" data-confirm-payment="${r.id}">Simular pagamento</button><small class="sub" style="display:block;margin-top:10px">Nenhuma cobrança real será feita neste protótipo.</small>`);
  }
  function confirmPayment(id){
    const r=state.reservations.find(x=>x.id===id),p=productBy(r?.productId);if(!r||!p)return;const method=document.querySelector('input[name="paymentMethod"]:checked')?.value||'PIX';const coupon=(document.getElementById('couponInput')?.value||'').trim().toUpperCase();let deposit=p.price/2,discount=0;if(coupon==='VITRE10'){discount=deposit*.10;deposit-=discount;state.couponUses.push({code:coupon,time:now()});}
    r.paid50=true;r.paymentMethod=method;r.paymentCode='DV'+Math.floor(100000+Math.random()*900000);r.depositPaid=deposit;r.balanceDue=p.price-(p.price/2);r.discount=discount;r.status='Sinal pago · preparando';addNotification('Pagamento confirmado',`${p.name}: sinal registrado. Aguarde a loja preparar sua retirada.`);saveState();openModal(`<div style="text-align:center;padding:10px"><span class="eyebrow">RESERVA CONFIRMADA</span><h2>Sinal registrado ✓</h2><p class="sub">Apresente este código na retirada.</p><div style="font-size:28px;font-weight:950;color:var(--accent-dark);letter-spacing:3px;margin:18px">${r.paymentCode}</div>${discount?`<p>Você economizou <b>${money(discount)}</b> com VITRE10.</p>`:''}<p>Pago agora: <b>${money(deposit)}</b> via ${escapeHtml(method)}</p><button class="button primary" data-close-modal>Concluir</button></div>`);
  }

  function openReview(id){const r=state.reservations.find(x=>x.id===id),p=productBy(r?.productId);if(!r||!p)return;openModal(`<div class="modal-head"><h2>Avaliar compra</h2><button class="close" data-close-modal>×</button></div><p class="sub">${escapeHtml(p.name)}</p><label>Nota<select id="reviewStars" class="field" style="width:100%;margin:6px 0 12px"><option value="5">★★★★★ Excelente</option><option value="4">★★★★☆ Muito bom</option><option value="3">★★★☆☆ Bom</option></select></label><textarea id="reviewText" class="field" style="width:100%" placeholder="Conte como foi sua experiência..."></textarea><button class="button primary full" style="margin-top:10px" data-submit-review="${r.id}">Enviar avaliação</button>`);}
  function submitReview(id){const r=state.reservations.find(x=>x.id===id),p=productBy(r?.productId);if(!r||!p)return;const stars=Number(document.getElementById('reviewStars').value),text=document.getElementById('reviewText').value.trim()||'Ótima experiência de compra.';(productReviews[p.id]||(productReviews[p.id]=[])).unshift({name:state.profile.name,stars,text});r.reviewed=true;state.points+=20;saveState();closeModal();toast('Avaliação enviada. +20 pontos DeVitrê.');renderReservations();}

  function renderProfile(){
    const fav=state.products.filter(p=>state.favorites.includes(String(p.id))).slice(0,6),completed=state.reservations.filter(r=>r.finished).length,active=state.reservations.filter(r=>!r.cancelled&&!r.finished&&!r.removed).length;
    if(session.role==='seller'){document.getElementById('page-profile').innerHTML=`<div class="profile-hero"><div class="profile-identity"><div class="profile-avatar">CB</div><div><span class="eyebrow">CONTA DA LOJA</span><h1 style="margin:5px 0">${escapeHtml(session.storeName||session.name||'Minha Loja')}</h1><div class="sub">Conta de loja · ${escapeHtml(session.city||'Itarema - CE')}</div></div></div><button class="button primary" data-nav="seller">Abrir painel da loja</button></div><div class="profile-grid"><div class="box profile-card"><h2>Atalhos</h2><div class="profile-actions"><button class="button secondary" data-nav="seller">Estoque e produtos</button><button class="button secondary" data-nav="messages">Mensagens</button><button class="button ghost" data-switch-account>Trocar para cliente</button><button class="button danger" data-logout>Sair</button></div></div><div class="box profile-card"><h2>Configurações</h2><p class="sub">Tema, dados locais e demonstração.</p><div class="profile-actions"><button class="button ghost" data-theme-profile>Alternar tema</button><button class="button ghost" data-export-data>Exportar dados</button></div></div></div>`;return;}
    document.getElementById('page-profile').innerHTML=`<div class="profile-hero"><div class="profile-identity"><div class="profile-avatar">${initials(state.profile.name)}</div><div><span class="eyebrow">PERFIL DEVITRÊ</span><h1 style="margin:5px 0">${escapeHtml(state.profile.name)}</h1><div class="sub">${escapeHtml(state.profile.city)} · Tam. ${escapeHtml(state.profile.size)}</div></div></div><button class="button ghost" data-edit-profile>Editar perfil</button></div><div class="profile-grid"><div><div class="box profile-card"><h2>Minha conta</h2><div class="payment-split"><div>Reservas ativas<strong>${active}</strong></div><div>Compras concluídas<strong>${completed}</strong></div></div><div class="profile-actions"><button class="button secondary" data-nav="reservations">Minhas reservas</button><button class="button secondary" data-show-favorites>Favoritos (${state.favorites.length})</button><button class="button ghost" data-nav="messages">Mensagens</button><button class="button ghost" data-show-following>Seguindo (${state.followingStores.length})</button></div></div><div class="box profile-card" style="margin-top:16px"><h2>Favoritos</h2>${fav.length?`<div class="favorites-mini">${fav.map(p=>`<img src="${p.image}" data-open-product="${p.id}" title="${escapeHtml(p.name)}">`).join('')}</div>`:'<div class="sub">Você ainda não salvou peças.</div>'}</div></div><div><div class="loyalty-card"><span class="eyebrow" style="color:#fff">CLUBE DEVITRÊ</span><div class="points">${state.points} pts</div><div style="opacity:.8;font-size:12px">A cada compra concluída e avaliação, você acumula pontos demonstrativos.</div><div class="loyalty-progress"><span style="width:${Math.min(100,state.points/3)}%"></span></div><small>${Math.max(0,300-state.points)} pts para o próximo benefício</small></div><div class="box profile-card" style="margin-top:16px"><h2>Preferências</h2><div class="profile-actions"><button class="button ghost" data-theme-profile>${state.theme==='dark'?'Tema claro':'Tema escuro'}</button><button class="button ghost" data-export-data>Exportar dados</button><button class="button ghost" data-switch-account>Ver como loja</button><button class="button danger" data-logout>Sair</button></div></div></div></div>`;
  }

  function renderSeller(){
    if(session.role!=='seller'){navigate('profile');return;}const own=state.products.filter(p=>p.store===1),reservations=state.reservations.filter(r=>r.storeId===1&&!r.removed),active=reservations.filter(r=>!r.cancelled&&!r.finished),low=own.filter(p=>p.stock<=2),paid=reservations.filter(r=>r.paid50&&!r.cancelled).reduce((s,r)=>s+(r.depositPaid||productBy(r.productId)?.price/2||0),0),settings=state.storeSettings[1]||{open:true,pickup:'30–60 min',notice:''};
    const statusCounts={Reservadas:active.filter(r=>!r.paid50).length,Pago:active.filter(r=>r.paid50&&!r.ready).length,Prontas:active.filter(r=>r.ready&&!r.finished).length,Concluídas:reservations.filter(r=>r.finished).length};const max=Math.max(1,...Object.values(statusCounts));
    document.getElementById('page-seller').innerHTML=`<div class="section-head"><div><span class="eyebrow">PAINEL DA LOJA</span><h1>${escapeHtml(session.storeName||session.name||'Minha Loja')}</h1><div class="sub">Gerencie catálogo, reservas, atendimento e disponibilidade.</div></div><button class="button ghost" data-nav="home">Ver plataforma</button></div><div class="metrics-grid"><div class="metric-card"><small>Peças ativas</small><b>${own.length}</b><span class="sub">${low.length} com estoque baixo</span></div><div class="metric-card"><small>Reservas ativas</small><b>${active.length}</b><span class="sub">${active.filter(r=>r.paid50).length} com sinal pago</span></div><div class="metric-card"><small>Sinais simulados</small><b>${money(paid)}</b><span class="sub">valor demonstrativo</span></div><div class="metric-card"><small>Mensagens</small><b>${(state.chats['1:julia']||[]).length}</b><span class="sub">conversa com Júlia</span></div></div><div class="seller-layout"><div><div class="box" style="padding:20px"><h2>Nova peça</h2><form id="sellerProductForm" class="seller-form"><label class="full">Foto<input id="sellerImage" class="field" type="file" accept="image/*" required></label><label>Nome<input id="sellerName" class="field" required placeholder="Ex.: Vestido Lumi"></label><label>Categoria<select id="sellerCategory" class="field"><option>Vestido</option><option>Blusa</option><option>Calça</option><option>Conjunto</option><option>Saia</option><option>Short</option></select></label><label>Preço<input id="sellerPrice" class="field" type="number" min="1" step=".01" required></label><label>Estoque<input id="sellerStock" class="field" type="number" min="0" value="1" required></label><label>Tamanhos<input id="sellerSizes" class="field" placeholder="P, M, G" required></label><label>Cor<input id="sellerColor" class="field" placeholder="Preto" required></label><label class="full">Material / descrição<input id="sellerMaterial" class="field" placeholder="Viscose, linho, algodão..."></label><button class="button primary full" type="submit">Publicar na vitrine</button></form></div><div class="box" style="padding:20px;margin-top:16px"><div class="section-head"><div><h2>Estoque</h2><div class="sub">${own.length} produtos</div></div></div><div class="seller-list">${own.map(p=>`<div class="seller-product"><img src="${p.image}" alt="${escapeHtml(p.name)}"><div><b>${escapeHtml(p.name)}</b><br><small>${money(p.price)} · ${p.stock<=2?`<span class="stock-low">estoque ${p.stock}</span>`:`estoque ${p.stock}`}</small></div><div style="display:flex;gap:5px"><button class="button ghost" data-edit-stock="${p.id}">Estoque</button><button class="button danger" data-delete-product="${p.id}">Apagar</button></div></div>`).join('')}</div></div></div><div><div class="box" style="padding:20px"><h2>Reservas</h2>${reservations.length?reservations.map(r=>{const p=productBy(r.productId);return `<div class="order-item"><b>${escapeHtml(p?.name||'Peça')}</b><br><small>Júlia · Tam. ${escapeHtml(r.size)} · ${escapeHtml(r.status)}</small><div class="order-actions">${r.paid50&&!r.ready&&!r.finished&&!r.cancelled?`<button class="button good" data-ready="${r.id}">Marcar pronta</button>`:''}${r.ready&&!r.finished?`<button class="button primary" data-finish="${r.id}">Confirmar retirada</button>`:''}<button class="button ghost" data-open-messages="1">Mensagem</button></div></div>`}).join(''):'<div class="sub">Nenhuma reserva ainda.</div>'}</div><div class="box" style="padding:20px;margin-top:16px"><h2>Resumo de pedidos</h2><div class="analytics-bars">${Object.entries(statusCounts).map(([k,v])=>`<div class="bar-row"><span>${k}</span><div class="bar-track"><span style="width:${(v/max)*100}%"></span></div><b>${v}</b></div>`).join('')}</div></div><div class="box" style="padding:20px;margin-top:16px"><h2>Configuração da loja</h2><label style="display:block;font-size:11px;font-weight:900">Status<select id="storeOpen" class="field" style="width:100%;margin-top:5px"><option value="1" ${settings.open?'selected':''}>Aberta para reservas</option><option value="0" ${!settings.open?'selected':''}>Pausar reservas</option></select></label><label style="display:block;font-size:11px;font-weight:900;margin-top:10px">Tempo de retirada<input id="storePickup" class="field" style="width:100%;margin-top:5px" value="${escapeHtml(settings.pickup)}"></label><label style="display:block;font-size:11px;font-weight:900;margin-top:10px">Aviso<textarea id="storeNotice" class="field" style="width:100%;margin-top:5px">${escapeHtml(settings.notice)}</textarea></label><button class="button secondary full" style="margin-top:10px" data-save-store-settings>Salvar configurações</button></div></div></div>`;
    setTimeout(()=>document.getElementById('sellerProductForm')?.addEventListener('submit',handleSellerProduct),0);
  }

  async function resizeImage(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{const maxW=900,maxH=1200;let w=img.width,h=img.height;const scale=Math.min(maxW/w,maxH/h,1);w=Math.round(w*scale);h=Math.round(h*scale);const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);resolve(c.toDataURL('image/jpeg',.76));};img.src=reader.result;};reader.readAsDataURL(file);});}
  async function handleSellerProduct(e){e.preventDefault();try{const file=document.getElementById('sellerImage').files[0];if(!file)throw new Error();const image=await resizeImage(file);state.products.unshift({id:'custom-'+now(),store:1,name:document.getElementById('sellerName').value.trim(),category:document.getElementById('sellerCategory').value,price:Number(document.getElementById('sellerPrice').value),image,sizes:document.getElementById('sellerSizes').value.split(',').map(x=>x.trim()).filter(Boolean),color:document.getElementById('sellerColor').value.trim(),stock:Number(document.getElementById('sellerStock').value),material:document.getElementById('sellerMaterial').value.trim()||'Peça da Charlotts',new:true});addNotification('Produto publicado','Uma nova peça foi adicionada à vitrine da Charlotts.');saveState();toast('Peça publicada com sucesso.');renderSeller();}catch{toast('Não foi possível processar a foto.');}}
  function deleteSellerProduct(id){const active=state.reservations.some(r=>r.productId===String(id)&&!r.cancelled&&!r.finished&&!r.removed);if(active){toast('Essa peça possui uma reserva ativa.');return;}state.products=state.products.filter(p=>String(p.id)!==String(id));state.favorites=state.favorites.filter(x=>x!==String(id));state.bag=state.bag.filter(x=>x.productId!==String(id));saveState();renderSeller();toast('Peça removida.');}
  function editStock(id){const p=productBy(id);if(!p)return;openModal(`<div class="modal-head"><h2>Atualizar estoque</h2><button class="close" data-close-modal>×</button></div><p class="sub">${escapeHtml(p.name)}</p><input id="stockQty" class="field" type="number" min="0" value="${p.stock}" style="width:100%"><button class="button primary full" style="margin-top:10px" data-save-stock="${p.id}">Salvar estoque</button>`);}
  function saveStock(id){const p=productBy(id);if(!p)return;p.stock=Math.max(0,Number(document.getElementById('stockQty').value)||0);saveState();closeModal();renderSeller();toast('Estoque atualizado.');}
  function markReady(id){const r=state.reservations.find(x=>x.id===id);if(!r)return;r.ready=true;r.status='Pronta para retirada';addNotification('Sua peça está pronta',`${productBy(r.productId)?.name||'Reserva'} já pode ser retirada na Charlotts.`);saveState();renderSeller();}
  function markFinished(id){const r=state.reservations.find(x=>x.id===id);if(!r)return;r.finished=true;r.ready=true;r.status='Retirada concluída';state.points+=Math.round((productBy(r.productId)?.price||0)/5);addNotification('Compra concluída','Retirada confirmada. Você ganhou pontos DeVitrê.');saveState();renderSeller();toast('Retirada confirmada.');}

  function showFavorites(){const items=state.products.filter(p=>state.favorites.includes(String(p.id)));openModal(`<div class="modal-head"><h2>Favoritos</h2><button class="close" data-close-modal>×</button></div>${items.length?`<div class="seller-list">${items.map(p=>`<div class="seller-product"><img src="${p.image}"><div><b>${escapeHtml(p.name)}</b><br><small>${money(p.price)} · ${escapeHtml(storeBy(p.store).name)}</small></div><button class="button ghost" data-open-product="${p.id}" data-close-modal>Ver</button></div>`).join('')}</div>`:'<div class="empty">Nenhuma peça favoritada.</div>'}`);}
  function showFollowing(){const items=stores.filter(s=>state.followingStores.includes(s.id));openModal(`<div class="modal-head"><h2>Lojas que você segue</h2><button class="close" data-close-modal>×</button></div>${items.length?items.map(s=>`<div class="order-item" data-open-store="${s.id}" data-close-modal><b>${escapeHtml(s.name)}</b><div class="sub">★ ${s.rating} · ${escapeHtml(s.city)}</div></div>`).join(''):'<div class="empty">Você ainda não segue lojas.</div>'}`);}
  function editProfile(){openModal(`<div class="modal-head"><h2>Editar perfil</h2><button class="close" data-close-modal>×</button></div><label>Nome<input id="profileName" class="field" style="width:100%;margin:5px 0 10px" value="${escapeHtml(state.profile.name)}"></label><label>Telefone<input id="profilePhone" class="field" style="width:100%;margin:5px 0 10px" value="${escapeHtml(state.profile.phone)}"></label><label>Cidade<input id="profileCity" class="field" style="width:100%;margin:5px 0 10px" value="${escapeHtml(state.profile.city)}"></label><label>Tamanho preferido<input id="profileSize" class="field" style="width:100%;margin:5px 0 10px" value="${escapeHtml(state.profile.size)}"></label><button class="button primary full" data-save-profile>Salvar perfil</button>`);}
  function saveProfile(){state.profile.name=document.getElementById('profileName').value.trim()||state.profile.name;state.profile.phone=document.getElementById('profilePhone').value.trim();state.profile.city=document.getElementById('profileCity').value.trim();state.profile.size=document.getElementById('profileSize').value.trim().toUpperCase();saveState();document.getElementById('topAvatar').textContent=initials(state.profile.name);closeModal();renderProfile();toast('Perfil atualizado.');}
  function showNotifications(){state.notifications.forEach(n=>n.read=true);saveState();openModal(`<div class="modal-head"><div><span class="eyebrow">CENTRAL</span><h2 style="margin:5px 0">Notificações</h2></div><button class="close" data-close-modal>×</button></div><div class="notification-list">${state.notifications.length?state.notifications.map(n=>`<div class="notification-item ${n.read?'':'unread'}"><b>${escapeHtml(n.title)}</b><div class="sub">${escapeHtml(n.text)}</div><small>${formatDate(n.time)} · ${formatTime(n.time)}</small></div>`).join(''):'<div class="empty">Sem notificações.</div>'}</div>`);}
  function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='devitre-dados-demo.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
  function toggleFavorite(id){const s=String(id);state.favorites=state.favorites.includes(s)?state.favorites.filter(x=>x!==s):[...state.favorites,s];saveState();renderCurrent();}
  function toggleFollow(id){const n=Number(id);state.followingStores=state.followingStores.includes(n)?state.followingStores.filter(x=>x!==n):[...state.followingStores,n];saveState();renderStore(n);toast(state.followingStores.includes(n)?'Agora você segue esta loja.':'Loja removida dos seguidos.');}
  async function shareText(title,text){try{if(navigator.share)await navigator.share({title,text});else{await navigator.clipboard.writeText(text);toast('Texto copiado para compartilhar.');}}catch{}}

  function saveStoreSettings(){state.storeSettings[1]={open:document.getElementById('storeOpen').value==='1',pickup:document.getElementById('storePickup').value.trim()||'30–60 min',notice:document.getElementById('storeNotice').value.trim()};saveState();toast('Configurações da loja salvas.');renderSeller();}

  document.addEventListener('click',e=>{
    const nav=e.target.closest('[data-nav]');if(nav){navigate(nav.dataset.nav);return;}
    const store=e.target.closest('[data-open-store]');if(store){closeModal();navigate('store',store.dataset.openStore);return;}
    const product=e.target.closest('[data-open-product]');if(product){closeModal();navigate('product',product.dataset.openProduct);return;}
    const fav=e.target.closest('[data-favorite]');if(fav){e.stopPropagation();toggleFavorite(fav.dataset.favorite);return;}
    const cat=e.target.closest('[data-category]');if(cat){productFilter={...productFilter,category:cat.dataset.category,query:''};document.getElementById('globalSearch').value='';navigate('products');return;}
    if(e.target.closest('[data-clear-filters]')){productFilter={category:'',query:'',max:'',size:'',color:'',stock:'',sort:'featured'};document.getElementById('globalSearch').value='';renderProducts();return;}
    const quick=e.target.closest('[data-quick-bag]');if(quick){addToBag(quick.dataset.quickBag);return;}
    const add=e.target.closest('[data-add-bag]');if(add){addToBag(add.dataset.addBag);return;}
    if(e.target.closest('[data-open-bag]')){openBag();return;}
    const remBag=e.target.closest('[data-remove-bag]');if(remBag){state.bag=state.bag.filter(x=>x.productId!==String(remBag.dataset.removeBag));saveState();openBag();return;}
    if(e.target.closest('[data-reserve-bag]')){reserveBag();return;}
    const reserve=e.target.closest('[data-reserve]');if(reserve){if(reserveProduct(reserve.dataset.reserve)){toast('Peça reservada por 24 horas.');navigate('reservations');}return;}
    const pay=e.target.closest('[data-pay]');if(pay){openPayment(pay.dataset.pay);return;}
    const conf=e.target.closest('[data-confirm-payment]');if(conf){confirmPayment(conf.dataset.confirmPayment);return;}
    const cancel=e.target.closest('[data-cancel-reservation]');if(cancel){if(confirm('Cancelar esta reserva?'))cancelReservation(cancel.dataset.cancelReservation);return;}
    const remove=e.target.closest('[data-remove-reservation]');if(remove){removeReservation(remove.dataset.removeReservation);return;}
    const review=e.target.closest('[data-review]');if(review){openReview(review.dataset.review);return;}
    const submitReviewBtn=e.target.closest('[data-submit-review]');if(submitReviewBtn){submitReview(submitReviewBtn.dataset.submitReview);return;}
    const openMsg=e.target.closest('[data-open-messages]');if(openMsg){navigate('messages',openMsg.dataset.openMessages);return;}
    const conv=e.target.closest('[data-conversation]');if(conv){activeConversationStore=Number(conv.dataset.conversation);renderMessages();return;}
    if(e.target.closest('[data-chat-send]')){const input=document.getElementById('chatInput');const text=input?.value||'';if(session.role==='seller')sellerSend(text);else sendClientChat(activeConversationStore,text);renderMessages();return;}
    const follow=e.target.closest('[data-follow-store]');if(follow){toggleFollow(follow.dataset.followStore);return;}
    const shareP=e.target.closest('[data-share-product]');if(shareP){const p=productBy(shareP.dataset.shareProduct);shareText(p.name,`${p.name} na DeVitrê — ${money(p.price)} na ${storeBy(p.store).name}`);return;}
    const shareS=e.target.closest('[data-share-store]');if(shareS){const s=storeBy(shareS.dataset.shareStore);shareText(s.name,`Confira a vitrine da ${s.name} na DeVitrê.`);return;}
    if(e.target.closest('[data-show-favorites]')){showFavorites();return;}
    if(e.target.closest('[data-show-following]')){showFollowing();return;}
    if(e.target.closest('[data-edit-profile]')){editProfile();return;}
    if(e.target.closest('[data-save-profile]')){saveProfile();return;}
    if(e.target.closest('[data-theme-profile]')){setTheme(state.theme==='dark'?'light':'dark');renderProfile();return;}
    if(e.target.closest('[data-export-data]')){exportData();return;}
    if(e.target.closest('[data-switch-account]')){const prev=session?.role;logout();setLoginType(prev==='seller'?'client':'seller');return;}
    if(e.target.closest('[data-logout]')){logout();return;}
    const del=e.target.closest('[data-delete-product]');if(del){if(confirm('Apagar esta peça da Charlotts?'))deleteSellerProduct(del.dataset.deleteProduct);return;}
    const st=e.target.closest('[data-edit-stock]');if(st){editStock(st.dataset.editStock);return;}
    const saveSt=e.target.closest('[data-save-stock]');if(saveSt){saveStock(saveSt.dataset.saveStock);return;}
    const ready=e.target.closest('[data-ready]');if(ready){markReady(ready.dataset.ready);return;}
    const fin=e.target.closest('[data-finish]');if(fin){markFinished(fin.dataset.finish);return;}
    if(e.target.closest('[data-save-store-settings]')){saveStoreSettings();return;}
    if(e.target.closest('[data-close-modal]')){closeModal();return;}
  });

  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.getElementById('globalSearch')?.focus();}
    if(e.key==='Enter'&&e.target?.id==='chatInput'){e.preventDefault();document.querySelector('[data-chat-send]')?.click();}
    if(e.key==='Escape')closeModal();
  });
  document.addEventListener('change',e=>{
    if(e.target.id==='categoryFilter'){productFilter.category=e.target.value;renderProducts();}
    if(e.target.id==='sizeFilter'){productFilter.size=e.target.value;renderProducts();}
    if(e.target.id==='colorFilter'){productFilter.color=e.target.value;renderProducts();}
    if(e.target.id==='priceFilter'){productFilter.max=e.target.value;renderProducts();}
    if(e.target.id==='stockFilter'){productFilter.stock=e.target.value;renderProducts();}
    if(e.target.id==='sortFilter'){productFilter.sort=e.target.value;renderProducts();}
  });

  document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
  document.getElementById('loginTabClient').addEventListener('click',()=>setLoginType('client'));
  document.getElementById('loginTabSeller').addEventListener('click',()=>setLoginType('seller'));
  document.getElementById('loginButton').addEventListener('click',submitAuth);
  document.getElementById('authLoginMode').addEventListener('click',()=>setAuthMode('login'));
  document.getElementById('authRegisterMode').addEventListener('click',()=>setAuthMode('register'));
  document.getElementById('forgotPassword').addEventListener('click',forgotPassword);
  document.getElementById('loginPassword').addEventListener('keydown',e=>{if(e.key==='Enter')submitAuth();});
  document.getElementById('themeToggle').addEventListener('click',()=>setTheme(state.theme==='dark'?'light':'dark'));
  document.getElementById('bagButton').addEventListener('click',openBag);
  document.getElementById('notificationButton').addEventListener('click',showNotifications);
  document.getElementById('globalSearch').addEventListener('input',e=>{productFilter.query=e.target.value;productFilter.category='';if(currentPage!=='products')navigate('products');else renderProducts();});

  window.addEventListener('storage',e=>{if(e.key===STORAGE_KEY){state=loadState();renderCurrent();updateBadges();}});

  setAuthMode('login');setLoginType('client');setTheme(state.theme||'light');updateBadges();
  try{const raw=localStorage.getItem(SESSION_KEY)||sessionStorage.getItem(SESSION_KEY);const saved=JSON.parse(raw);if(saved?.email){session=saved;if(session.role==='client'&&session.name)state.profile.name=session.name;showApp();}}catch{}
})();
