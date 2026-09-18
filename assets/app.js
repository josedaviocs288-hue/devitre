(() => {
  'use strict';

  const STORAGE_KEY = 'devitre_demo_state_v3';
  const SESSION_KEY = 'devitre_demo_session_v3';

  const stores = [
    {id:1,name:'Charlotts Boutique',instagram:'@charlottsboutique',city:'Itarema - CE',desc:'Moda feminina, looks casuais e peças selecionadas.'},
    {id:2,name:'Santa Edwigens',instagram:'@santaedwigensitarema',city:'Itarema - CE',desc:'Moda feminina para diferentes estilos.'},
    {id:3,name:'Celma Fashion',instagram:'',city:'Itarema - CE',desc:'Peças femininas e novidades locais.'},
    {id:4,name:'Edmila Tavares',instagram:'@lojaedmilatavares',city:'Itarema - CE',desc:'Moda feminina e tendências.'},
    {id:5,name:'Ly Veste',instagram:'',city:'Itarema - CE',desc:'Looks modernos para o dia a dia.'},
    {id:6,name:"D'Bella Boutique",instagram:'@dbella.boutique_',city:'Itarema - CE',desc:'Boutique feminina e peças selecionadas.'},
    {id:7,name:'Vestilê da Paty',instagram:'',city:'Itarema - CE',desc:'Moda feminina e novidades.'},
    {id:8,name:'Penelope',instagram:'@peenelope_variedades',city:'Itarema - CE',desc:'Variedades e moda feminina.'},
    {id:9,name:'Ferbrand',instagram:'',city:'Itarema - CE',desc:'Moda feminina em Itarema.'}
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
    {id:'p1',store:1,name:'Vestido Aurora',category:'Vestido',price:159.90,image:images[0],sizes:['P','M','G'],color:'Preto',stock:4},
    {id:'p2',store:1,name:'Calça Wide Jeans',category:'Calça',price:129.90,image:images[1],sizes:['36','38','40','42'],color:'Jeans',stock:5},
    {id:'p3',store:1,name:'Blusa Serena',category:'Blusa',price:79.90,image:images[2],sizes:['P','M','G'],color:'Rosa',stock:7},
    {id:'p4',store:2,name:'Vestido Midi Verde',category:'Vestido',price:149.90,image:images[3],sizes:['P','M','G'],color:'Verde',stock:3},
    {id:'p5',store:2,name:'Conjunto Essencial',category:'Conjunto',price:189.90,image:images[4],sizes:['P','M','G'],color:'Bege',stock:4},
    {id:'p6',store:3,name:'Blusa Ombro a Ombro',category:'Blusa',price:84.90,image:images[5],sizes:['P','M','G'],color:'Vinho',stock:5},
    {id:'p7',store:3,name:'Saia Midi Clara',category:'Saia',price:119.90,image:images[6],sizes:['P','M','G'],color:'Off-white',stock:3},
    {id:'p8',store:4,name:'Conjunto Natural',category:'Conjunto',price:179.90,image:images[7],sizes:['P','M','G'],color:'Natural',stock:4},
    {id:'p9',store:4,name:'Blusa Acetinada',category:'Blusa',price:94.90,image:images[8],sizes:['P','M','G'],color:'Champagne',stock:6},
    {id:'p10',store:5,name:'Vestido Solar',category:'Vestido',price:169.90,image:images[9],sizes:['P','M','G'],color:'Amarelo',stock:3},
    {id:'p11',store:5,name:'Calça Social Feminina',category:'Calça',price:139.90,image:images[10],sizes:['36','38','40'],color:'Cinza',stock:4},
    {id:'p12',store:6,name:'Vestido Xadrez',category:'Vestido',price:154.90,image:images[11],sizes:['P','M','G'],color:'Marrom',stock:4},
    {id:'p13',store:6,name:'Blusa Listrada',category:'Blusa',price:79.90,image:images[12],sizes:['P','M','G'],color:'Azul',stock:7},
    {id:'p14',store:7,name:'Vestido Delicado',category:'Vestido',price:149.90,image:images[13],sizes:['P','M','G'],color:'Verde',stock:3},
    {id:'p15',store:7,name:'Blusa Fluida',category:'Blusa',price:89.90,image:images[14],sizes:['P','M','G'],color:'Claro',stock:6},
    {id:'p16',store:8,name:'Blusa Decote Quadrado',category:'Blusa',price:69.90,image:images[15],sizes:['P','M','G'],color:'Rosa',stock:7},
    {id:'p17',store:8,name:'Conjunto Casual',category:'Conjunto',price:159.90,image:images[16],sizes:['P','M','G'],color:'Azul',stock:4},
    {id:'p18',store:9,name:'Blusa Básica',category:'Blusa',price:69.90,image:images[17],sizes:['P','M','G'],color:'Marrom',stock:5},
    {id:'p19',store:9,name:'Vestido Noite',category:'Vestido',price:189.90,image:images[18],sizes:['P','M','G'],color:'Preto',stock:3}
  ];

  const accounts = {
    client:{role:'client',name:'Júlia Martins',email:'julia@devitre.com',password:'123456'},
    seller:{role:'seller',name:'Charlotts Boutique',email:'charlotts@devitre.com',password:'123456',storeId:1}
  };

  let loginType = 'client';
  let session = null;
  let currentPage = 'home';
  let currentStoreId = null;
  let currentProductId = null;
  let productFilter = {category:'',query:'',max:''};
  let activeSellerChat = '1:julia';

  function freshState(){
    return {products:structuredClone(seedProducts),reservations:[],favorites:[],chats:{'1:julia':[{
      id:'m1',from:'client',text:'Olá! Gostaria de saber se vocês têm o Vestido Aurora no tamanho M.',time:Date.now()-3600000
    }]},theme:'light'};
  }

  function loadState(){
    try{
      const raw=localStorage.getItem(STORAGE_KEY);
      if(!raw) return freshState();
      const parsed=JSON.parse(raw);
      if(!Array.isArray(parsed.products) || !Array.isArray(parsed.reservations)) return freshState();
      return parsed;
    }catch{return freshState();}
  }
  let state=loadState();
  function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
  function money(v){return Number(v).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});}
  function storeBy(id){return stores.find(s=>s.id===Number(id));}
  function productBy(id){return state.products.find(p=>String(p.id)===String(id));}
  function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
  function toast(text){const el=document.getElementById('toast');el.textContent=text;el.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>el.style.display='none',2600);}
  function now(){return Date.now();}
  function formatTime(ts){return new Date(ts).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});}

  function setTheme(theme){state.theme=theme;document.body.classList.toggle('dark',theme==='dark');saveState();renderThemeButton();}
  function renderThemeButton(){
    const b=document.getElementById('themeToggle');
    if(!b)return;
    b.innerHTML=state.theme==='dark'?'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>':'<svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>';
  }

  function setLoginType(type){
    loginType=type;
    document.getElementById('loginTabClient').classList.toggle('active',type==='client');
    document.getElementById('loginTabSeller').classList.toggle('active',type==='seller');
    const acc=accounts[type];
    document.getElementById('loginEmail').value=acc.email;
    document.getElementById('loginPassword').value=acc.password;
  }
  function login(){
    const email=document.getElementById('loginEmail').value.trim().toLowerCase();
    const password=document.getElementById('loginPassword').value;
    const acc=accounts[loginType];
    if(email!==acc.email || password!==acc.password){toast('Use a conta fictícia exibida para a apresentação.');return;}
    session={...acc};sessionStorage.setItem(SESSION_KEY,JSON.stringify(session));showApp();
  }
  function logout(){session=null;sessionStorage.removeItem(SESSION_KEY);document.getElementById('app').classList.add('hidden');document.getElementById('loginScreen').classList.remove('hidden');setLoginType('client');}
  function switchAccount(){logout();setLoginType(session?.role==='seller'?'client':'seller');}
  function showApp(){
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('accountBadge').textContent=session.role==='seller'?'Vendedor · Charlotts':'Usuário · Júlia';
    document.getElementById('modeBar').innerHTML=session.role==='seller'?'<b>Modo vendedor:</b> você está vendo a plataforma como Charlotts Boutique. A gestão da loja fica no Perfil.':'<b>Modo usuário:</b> explore vitrines, reserve e converse com as lojas.';
    setTheme(state.theme||'light');
    navigate('home');
  }

  function navigate(page,arg){
    currentPage=page;
    if(page==='store'&&arg!=null)currentStoreId=Number(arg);
    if(page==='product'&&arg!=null)currentProductId=String(arg);
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const target=document.getElementById('page-'+page);if(target)target.classList.add('active');
    document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.nav===page || (page==='store'&&b.dataset.nav==='stores') || (page==='product'&&b.dataset.nav==='products') || (page==='seller'&&b.dataset.nav==='profile')));
    renderCurrent();window.scrollTo({top:0,behavior:'smooth'});
  }
  function renderCurrent(){
    if(currentPage==='home')renderHome();
    if(currentPage==='stores')renderStores();
    if(currentPage==='products')renderProducts();
    if(currentPage==='store')renderStore(currentStoreId);
    if(currentPage==='product')renderProduct(currentProductId);
    if(currentPage==='reservations')renderReservations();
    if(currentPage==='profile')renderProfile();
    if(currentPage==='seller')renderSeller();
  }

  function productCard(p){
    const s=storeBy(p.store);const fav=state.favorites.includes(String(p.id));
    return `<article class="product-card"><div class="product-photo"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/product-placeholder.svg'"><span class="stock">${p.stock>0?p.stock+' em estoque':'Esgotado'}</span></div><div class="product-info"><div class="store-mini">${escapeHtml(s.name)}</div><div class="product-name">${escapeHtml(p.name)}</div><div class="price">${money(p.price)}</div><div class="product-actions"><button class="button secondary" data-open-product="${p.id}">Ver peça e reservar</button><button class="button ghost fav-button ${fav?'active':''}" data-favorite="${p.id}" aria-label="Favoritar">♡</button></div></div></article>`;
  }
  function storeCard(s){return `<article class="store-card" data-open-store="${s.id}"><div class="store-avatar">${escapeHtml(s.name.charAt(0))}</div><div><strong>${escapeHtml(s.name)}</strong><p>${escapeHtml(s.city)}</p>${s.instagram?`<p>${escapeHtml(s.instagram)}</p>`:''}</div></article>`;}

  function renderHome(){
    const featured=state.products.filter(p=>p.stock>0).slice(0,8);
    document.getElementById('page-home').innerHTML=`<div class="hero"><div><h1>A moda de Itarema em uma só vitrine.</h1><p>Descubra peças nas lojas locais, escolha seu tamanho, converse com o vendedor e reserve pagando 50% agora. O restante é pago na retirada física.</p><button class="button primary" data-nav="stores">Explorar lojas</button></div><div class="hero-art"><img src="assets/logo-devitre.svg" alt="Logo DeVitrê"></div></div><div class="section"><div class="section-head"><div><h2>Categorias</h2><div class="sub">Encontre o que procura sem visitar loja por loja.</div></div></div><div class="chips">${['Tudo','Vestido','Blusa','Calça','Conjunto','Saia'].map(c=>`<button class="chip" data-category="${c==='Tudo'?'':c}">${c}</button>`).join('')}</div></div><div class="section"><div class="section-head"><div><h2>Peças em destaque</h2><div class="sub">Vitrines digitais das lojas participantes.</div></div><button class="button ghost" data-nav="products">Ver tudo</button></div><div class="grid">${featured.map(productCard).join('')}</div></div><div class="section"><div class="section-head"><div><h2>Lojas</h2><div class="sub">Empresas locais reunidas na DeVitrê.</div></div><button class="button ghost" data-nav="stores">Ver todas</button></div><div class="store-grid">${stores.slice(0,6).map(storeCard).join('')}</div></div>`;
  }
  function renderStores(){document.getElementById('page-stores').innerHTML=`<div class="section-head"><div><h1>Empresas</h1><div class="sub">Entre na vitrine digital de cada loja.</div></div></div><div class="store-grid">${stores.map(storeCard).join('')}</div>`;}
  function renderProducts(){
    const q=(productFilter.query||'').toLowerCase();
    const items=state.products.filter(p=>(!productFilter.category||p.category===productFilter.category)&&(!productFilter.max||p.price<=Number(productFilter.max))&&(!q||(p.name+' '+p.category+' '+storeBy(p.store).name).toLowerCase().includes(q)));
    document.getElementById('page-products').innerHTML=`<div class="section-head"><div><h1>Explorar peças</h1><div class="sub">Pesquise entre as vitrines das lojas.</div></div></div><div class="filters"><select id="categoryFilter" class="field"><option value="">Todas as categorias</option>${['Vestido','Blusa','Calça','Conjunto','Saia','Short'].map(c=>`<option ${productFilter.category===c?'selected':''}>${c}</option>`).join('')}</select><select id="priceFilter" class="field"><option value="">Qualquer preço</option><option value="100" ${productFilter.max==='100'?'selected':''}>Até R$ 100</option><option value="150" ${productFilter.max==='150'?'selected':''}>Até R$ 150</option><option value="200" ${productFilter.max==='200'?'selected':''}>Até R$ 200</option></select></div>${items.length?`<div class="grid">${items.map(productCard).join('')}</div>`:'<div class="empty">Nenhuma peça encontrada.</div>'}`;
  }
  function renderStore(id){
    const s=storeBy(id);if(!s)return navigate('stores');const items=state.products.filter(p=>p.store===id);
    document.getElementById('page-store').innerHTML=`<button class="back" data-nav="stores">← Todas as lojas</button><div class="store-header"><div class="store-title"><div class="store-avatar">${s.name.charAt(0)}</div><div><h1>${escapeHtml(s.name)}</h1><div class="sub">${escapeHtml(s.desc)} · ${escapeHtml(s.city)}</div>${s.instagram?`<div class="sub">${escapeHtml(s.instagram)}</div>`:''}</div></div>${session.role==='client'?`<button class="button secondary" data-store-chat="${s.id}">Falar com a loja</button>`:''}</div><div class="section"><div class="section-head"><div><h2>Vitrine da loja</h2><div class="sub">${items.length} peças cadastradas</div></div></div><div class="grid">${items.map(productCard).join('')}</div></div>`;
  }
  function renderProduct(id){
    const p=productBy(id);if(!p)return navigate('products');const s=storeBy(p.store);
    document.getElementById('page-product').innerHTML=`<button class="back" data-nav="products">← Voltar</button><div class="detail"><div class="product-photo"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='assets/product-placeholder.svg'"><span class="stock">${p.stock} em estoque</span></div><div><div class="store-mini">${escapeHtml(s.name)} · ${escapeHtml(s.city)}</div><h1>${escapeHtml(p.name)}</h1><div class="price">${money(p.price)}</div><p class="sub">Escolha o tamanho, tire suas dúvidas com o vendedor e depois reserve a peça. O pagamento de 50% só aparece na aba Reservas.</p><div class="options"><label>Tamanho<select id="selectedSize" class="field">${p.sizes.map(x=>`<option>${escapeHtml(x)}</option>`).join('')}</select></label><label>Cor<select class="field"><option>${escapeHtml(p.color)}</option></select></label></div>${session.role==='client'?`<button class="button primary full" data-reserve="${p.id}" ${p.stock<1?'disabled':''}>${p.stock<1?'Indisponível':'Reservar esta peça'}</button><div class="chat-box"><strong>Chat com ${escapeHtml(s.name)}</strong><div id="productMessages" class="messages"></div><div class="chat-send"><input id="productChatInput" class="field" placeholder="Digite uma mensagem..."><button class="button secondary" data-send-product-chat="${s.id}">Enviar</button></div></div>`:`<div class="box" style="padding:14px;margin-top:15px"><strong>Modo vendedor</strong><p class="sub">Use o Perfil → Gerenciar Charlotts para adicionar/apagar peças e responder clientes.</p></div>`}</div></div>`;
    if(session.role==='client')renderClientChat(s.id,'productMessages');
  }

  function getChatKey(storeId){return `${storeId}:julia`;}
  function ensureChat(storeId){const key=getChatKey(storeId);if(!state.chats[key])state.chats[key]=[{id:'welcome-'+storeId,from:'seller',text:'Olá! Posso ajudar com tamanho, disponibilidade ou retirada.',time:now()-60000}];return key;}
  function renderClientChat(storeId,elementId){const key=ensureChat(storeId);const box=document.getElementById(elementId);if(!box)return;box.innerHTML=state.chats[key].map(m=>`<div class="msg ${m.from==='client'?'mine':''}">${escapeHtml(m.text)}<div class="store-mini">${formatTime(m.time)}</div></div>`).join('');box.scrollTop=box.scrollHeight;}
  function sendClientChat(storeId,text){if(!text.trim())return;const key=ensureChat(storeId);state.chats[key].push({id:'m'+now(),from:'client',text:text.trim(),time:now()});if(storeId!==1){state.chats[key].push({id:'a'+now(),from:'seller',text:'Mensagem recebida! A loja poderá responder por aqui.',time:now()+1});}saveState();}

  function reserveProduct(id){
    if(session.role!=='client'){toast('Entre como usuário para reservar.');return;}
    const p=productBy(id);if(!p||p.stock<1)return;
    const size=document.getElementById('selectedSize')?.value||p.sizes[0];
    const existing=state.reservations.find(r=>r.productId===String(id)&&!r.cancelled&&!r.finished);
    if(existing){toast('Essa peça já está nas suas reservas.');navigate('reservations');return;}
    p.stock-=1;
    state.reservations.unshift({id:'r'+now(),productId:String(id),storeId:p.store,size,createdAt:now(),paid50:false,cancelled:false,finished:false,status:'Peça reservada'});
    saveState();toast('Peça reservada! Continue o pagamento na aba Reservas.');navigate('reservations');
  }
  function renderReservations(){
    const list=state.reservations.filter(r=>!r.removed);
    document.getElementById('page-reservations').innerHTML=`<div class="section-head"><div><h1>Minhas reservas</h1><div class="sub">Reserve primeiro; o sinal de 50% é pago somente aqui.</div></div></div>${list.length?`<div class="reservation-list">${list.map(r=>reservationCard(r)).join('')}</div>`:'<div class="empty">Você ainda não possui reservas.<br><br><button class="button primary" data-nav="products">Explorar peças</button></div>'}`;
  }
  function reservationCard(r){
    const p=productBy(r.productId);if(!p)return'';const s=storeBy(r.storeId);const half=p.price/2;
    return `<article class="reservation-card"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='assets/product-placeholder.svg'"><div class="reservation-main"><div class="store-mini">${escapeHtml(s.name)}</div><strong>${escapeHtml(p.name)}</strong><div class="sub">Tamanho ${escapeHtml(r.size)} · ${money(p.price)}</div><div style="margin-top:8px"><span class="status">${r.cancelled?'Cancelada':r.paid50?'50% pago · retirada pendente':'Reservada · aguardando pagamento'}</span></div>${!r.cancelled?`<div class="payment-card"><b>Reserva DeVitrê</b><div class="payment-split"><div><small>Pagar agora (50%)</small><strong>${money(half)}</strong></div><div><small>Na retirada (50%)</small><strong>${money(half)}</strong></div></div></div>`:''}<div class="reservation-actions">${!r.cancelled&&!r.paid50?`<button class="button primary" data-pay="${r.id}">Continuar para pagamento</button>`:''}${!r.cancelled?`<button class="button secondary" data-reservation-chat="${r.storeId}">Falar com vendedor</button>`:''}<button class="button ghost" data-open-product="${p.id}">Ver peça</button>${!r.cancelled&&!r.finished?`<button class="button danger" data-cancel-reservation="${r.id}">Cancelar</button>`:`<button class="button ghost" data-remove-reservation="${r.id}">Remover do histórico</button>`}</div></div></article>`;
  }
  function cancelReservation(id){const r=state.reservations.find(x=>x.id===id);if(!r||r.cancelled)return;const p=productBy(r.productId);if(p)p.stock+=1;r.cancelled=true;r.status='Cancelada';saveState();renderReservations();toast('Reserva cancelada e peça devolvida ao estoque.');}
  function removeReservation(id){const r=state.reservations.find(x=>x.id===id);if(r){r.removed=true;saveState();renderReservations();}}

  function openPayment(id){
    const r=state.reservations.find(x=>x.id===id);if(!r||r.cancelled)return;const p=productBy(r.productId);const s=storeBy(r.storeId);const half=p.price/2;
    openModal(`<div class="modal-head"><div><small class="sub">Reserva DeVitrê</small><h2>Pagamento do sinal</h2></div><button class="close" data-close-modal>×</button></div><p><strong>${escapeHtml(p.name)}</strong> · ${escapeHtml(s.name)}</p><div class="payment-split"><div><small>Agora · 50%</small><strong>${money(half)}</strong></div><div><small>Na retirada · 50%</small><strong>${money(half)}</strong></div></div><p><b>Forma de pagamento</b></p><label class="conversation-item"><input type="radio" name="paymentMethod" value="PIX" checked> PIX</label><label class="conversation-item"><input type="radio" name="paymentMethod" value="Cartão"> Cartão</label><button class="button primary full" style="margin-top:12px" data-confirm-payment="${r.id}">Pagar 50% e confirmar</button><p class="sub">Demonstração: nenhum pagamento real é processado. Em produção, esta etapa deve usar um gateway de pagamento.</p>`);
  }
  function confirmPayment(id){const r=state.reservations.find(x=>x.id===id);if(!r)return;const p=productBy(r.productId);const method=document.querySelector('input[name="paymentMethod"]:checked')?.value||'PIX';r.paid50=true;r.paymentMethod=method;r.paymentCode='DV'+Math.floor(100000+Math.random()*900000);r.status='50% pago · retirada pendente';saveState();openModal(`<div style="text-align:center"><h2>Reserva confirmada!</h2><p class="sub">Seu sinal de 50% foi registrado no protótipo.</p><div style="font-size:24px;font-weight:900;color:var(--accent-dark);letter-spacing:2px">${r.paymentCode}</div><p><b>${money(p.price/2)}</b> via ${escapeHtml(method)}</p><p>Os outros <b>${money(p.price/2)}</b> são pagos na retirada física.</p><button class="button primary" data-close-modal>Concluir</button></div>`);}

  function renderProfile(){
    if(session.role==='client'){
      document.getElementById('page-profile').innerHTML=`<div class="section-head"><div><h1>Meu perfil</h1><div class="sub">Conta de usuário</div></div></div><div class="profile-grid"><div class="profile-card box"><div class="profile-row"><div class="profile-avatar"><svg viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></div><div><h2 style="margin:0">Júlia Martins</h2><div class="sub">julia@devitre.com</div></div></div><div class="profile-actions"><button class="button secondary" data-nav="reservations">Minhas reservas</button><button class="button secondary" data-show-favorites>Favoritos (${state.favorites.length})</button><button class="button ghost" data-switch-account>Trocar para vendedor</button><button class="button danger" data-logout>Sair</button></div></div><div class="profile-card box"><h3>Como funciona a reserva</h3><p class="sub">Escolha a peça e o tamanho, converse com a loja se quiser, reserve e depois pague 50% na aba Reservas. Os outros 50% são pagos ao retirar na loja.</p></div></div>`;
    }else{
      document.getElementById('page-profile').innerHTML=`<div class="section-head"><div><h1>Perfil da loja</h1><div class="sub">Conta de vendedor</div></div></div><div class="profile-grid"><div class="profile-card box"><div class="profile-row"><div class="store-avatar">C</div><div><h2 style="margin:0">Charlotts Boutique</h2><div class="sub">charlotts@devitre.com · Itarema - CE</div></div></div><div class="profile-actions"><button class="button primary" data-nav="seller">Gerenciar Charlotts</button><button class="button ghost" data-switch-account>Trocar para usuário</button><button class="button danger" data-logout>Sair</button></div></div><div class="profile-card box"><h3>Área do vendedor</h3><p class="sub">Você vê apenas as peças da Charlotts para adicionar/apagar produtos, acompanhar reservas da Júlia e responder mensagens.</p></div></div>`;
    }
  }
  function showFavorites(){const items=state.products.filter(p=>state.favorites.includes(String(p.id)));openModal(`<div class="modal-head"><h2>Favoritos</h2><button class="close" data-close-modal>×</button></div>${items.length?`<div class="seller-list">${items.map(p=>`<div class="seller-product"><img src="${p.image}"><div><strong>${escapeHtml(p.name)}</strong><br><small>${money(p.price)}</small></div><button class="button ghost" data-open-product="${p.id}" data-close-modal>Ver</button></div>`).join('')}</div>`:'<div class="empty">Nenhuma peça favoritada.</div>'}`);}

  function renderSeller(){
    if(session.role!=='seller'){navigate('profile');return;}
    const own=state.products.filter(p=>p.store===1);const reservations=state.reservations.filter(r=>r.storeId===1&&!r.cancelled&&!r.removed);const chatKey=ensureChat(1);
    document.getElementById('page-seller').innerHTML=`<button class="back" data-nav="profile">← Perfil da loja</button><div class="section-head"><div><h1>Charlotts Boutique</h1><div class="sub">Painel da loja · somente produtos da Charlotts</div></div></div><div class="seller-grid"><div><div class="box" style="padding:18px"><h2>Adicionar peça</h2><form id="sellerProductForm" class="seller-form"><label class="full">Foto<input id="sellerImage" class="field" type="file" accept="image/*" required></label><label>Nome<input id="sellerName" class="field" required></label><label>Categoria<select id="sellerCategory" class="field"><option>Vestido</option><option>Blusa</option><option>Calça</option><option>Conjunto</option><option>Saia</option><option>Short</option></select></label><label>Preço<input id="sellerPrice" class="field" type="number" min="1" step=".01" required></label><label>Estoque<input id="sellerStock" class="field" type="number" min="1" value="1" required></label><label>Tamanhos<input id="sellerSizes" class="field" placeholder="P, M, G" required></label><label>Cor<input id="sellerColor" class="field" placeholder="Preto" required></label><button class="button primary full" type="submit">Publicar peça</button></form></div><div class="box" style="padding:18px;margin-top:16px"><h2>Minhas peças (${own.length})</h2><div class="seller-list">${own.map(p=>`<div class="seller-product"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.onerror=null;this.src='assets/product-placeholder.svg'"><div><strong>${escapeHtml(p.name)}</strong><br><small>${money(p.price)} · estoque ${p.stock}</small></div><button class="button danger" data-delete-product="${p.id}">Apagar</button></div>`).join('')}</div></div></div><div><div class="box" style="padding:18px"><h2>Reservas da Júlia</h2>${reservations.length?reservations.map(r=>{const p=productBy(r.productId);return `<div class="order-item"><strong>${escapeHtml(p?.name||'Peça')}</strong><br><small>Júlia Martins · Tam. ${escapeHtml(r.size)} · ${r.paid50?'50% pago':'aguardando pagamento'}</small></div>`}).join(''):'<div class="sub">Nenhuma reserva ativa da Charlotts.</div>'}</div><div class="box" style="padding:18px;margin-top:16px"><h2>Conversa com Júlia</h2><div id="sellerMessages" class="messages">${state.chats[chatKey].map(m=>`<div class="msg ${m.from==='seller'?'mine':''}">${escapeHtml(m.text)}<div class="store-mini">${formatTime(m.time)}</div></div>`).join('')}</div><div class="chat-send"><input id="sellerChatInput" class="field" placeholder="Responder Júlia..."><button class="button secondary" data-seller-send>Enviar</button></div></div></div></div>`;
    setTimeout(()=>{document.getElementById('sellerProductForm')?.addEventListener('submit',handleSellerProduct);},0);
  }
  async function resizeImage(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{const maxW=900,maxH=1200;let w=img.width,h=img.height;const scale=Math.min(maxW/w,maxH/h,1);w=Math.round(w*scale);h=Math.round(h*scale);const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);resolve(c.toDataURL('image/jpeg',.78));};img.src=reader.result;};reader.readAsDataURL(file);});}
  async function handleSellerProduct(e){e.preventDefault();try{const image=await resizeImage(document.getElementById('sellerImage').files[0]);const p={id:'custom-'+now(),store:1,name:document.getElementById('sellerName').value.trim(),category:document.getElementById('sellerCategory').value,price:Number(document.getElementById('sellerPrice').value),image,sizes:document.getElementById('sellerSizes').value.split(',').map(x=>x.trim()).filter(Boolean),color:document.getElementById('sellerColor').value.trim(),stock:Number(document.getElementById('sellerStock').value)};state.products.unshift(p);saveState();toast('Peça publicada na vitrine da Charlotts.');renderSeller();}catch{toast('Não foi possível processar a imagem.');}}
  function deleteSellerProduct(id){const active=state.reservations.some(r=>r.productId===String(id)&&!r.cancelled&&!r.finished&&!r.removed);if(active){toast('Essa peça tem uma reserva ativa e não pode ser apagada.');return;}state.products=state.products.filter(p=>String(p.id)!==String(id));state.favorites=state.favorites.filter(x=>String(x)!==String(id));saveState();renderSeller();toast('Peça removida da Charlotts.');}
  function sellerSend(){const input=document.getElementById('sellerChatInput');const text=input?.value.trim();if(!text)return;const key=ensureChat(1);state.chats[key].push({id:'m'+now(),from:'seller',text,time:now()});saveState();renderSeller();}

  function openStoreChat(storeId){const s=storeBy(storeId);const key=ensureChat(storeId);openModal(`<div class="modal-head"><div><small class="sub">Conversa</small><h2>${escapeHtml(s.name)}</h2></div><button class="close" data-close-modal>×</button></div><div id="modalChatMessages" class="messages">${state.chats[key].map(m=>`<div class="msg ${m.from==='client'?'mine':''}">${escapeHtml(m.text)}<div class="store-mini">${formatTime(m.time)}</div></div>`).join('')}</div><div class="chat-send"><input id="modalChatInput" class="field" placeholder="Digite sua mensagem..."><button class="button secondary" data-modal-chat-send="${storeId}">Enviar</button></div>`);}
  function openModal(html){const m=document.getElementById('modal');document.getElementById('modalPanel').innerHTML=html;m.classList.add('open');m.setAttribute('aria-hidden','false');}
  function closeModal(){const m=document.getElementById('modal');m.classList.remove('open');m.setAttribute('aria-hidden','true');}

  function toggleFavorite(id){const s=String(id);state.favorites=state.favorites.includes(s)?state.favorites.filter(x=>x!==s):[...state.favorites,s];saveState();renderCurrent();}

  document.addEventListener('click',e=>{
    const nav=e.target.closest('[data-nav]');if(nav){navigate(nav.dataset.nav);return;}
    const store=e.target.closest('[data-open-store]');if(store){navigate('store',store.dataset.openStore);return;}
    const product=e.target.closest('[data-open-product]');if(product){closeModal();navigate('product',product.dataset.openProduct);return;}
    const fav=e.target.closest('[data-favorite]');if(fav){toggleFavorite(fav.dataset.favorite);return;}
    const cat=e.target.closest('[data-category]');if(cat){productFilter.category=cat.dataset.category;productFilter.query='';navigate('products');return;}
    const reserve=e.target.closest('[data-reserve]');if(reserve){reserveProduct(reserve.dataset.reserve);return;}
    const pay=e.target.closest('[data-pay]');if(pay){openPayment(pay.dataset.pay);return;}
    const conf=e.target.closest('[data-confirm-payment]');if(conf){confirmPayment(conf.dataset.confirmPayment);return;}
    const cancel=e.target.closest('[data-cancel-reservation]');if(cancel){if(confirm('Cancelar esta reserva?'))cancelReservation(cancel.dataset.cancelReservation);return;}
    const remove=e.target.closest('[data-remove-reservation]');if(remove){removeReservation(remove.dataset.removeReservation);return;}
    const chat=e.target.closest('[data-reservation-chat],[data-store-chat]');if(chat){openStoreChat(Number(chat.dataset.reservationChat||chat.dataset.storeChat));return;}
    const send=e.target.closest('[data-send-product-chat]');if(send){const input=document.getElementById('productChatInput');sendClientChat(Number(send.dataset.sendProductChat),input.value);input.value='';renderClientChat(Number(send.dataset.sendProductChat),'productMessages');return;}
    const modalSend=e.target.closest('[data-modal-chat-send]');if(modalSend){const input=document.getElementById('modalChatInput');sendClientChat(Number(modalSend.dataset.modalChatSend),input.value);openStoreChat(Number(modalSend.dataset.modalChatSend));return;}
    if(e.target.closest('[data-close-modal]')){closeModal();return;}
    if(e.target.closest('[data-show-favorites]')){showFavorites();return;}
    if(e.target.closest('[data-switch-account]')){const previous=session?.role;logout();setLoginType(previous==='seller'?'client':'seller');return;}
    if(e.target.closest('[data-logout]')){logout();return;}
    const del=e.target.closest('[data-delete-product]');if(del){if(confirm('Apagar esta peça da Charlotts?'))deleteSellerProduct(del.dataset.deleteProduct);return;}
    if(e.target.closest('[data-seller-send]')){sellerSend();return;}
  });

  document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
  document.getElementById('loginTabClient').addEventListener('click',()=>setLoginType('client'));
  document.getElementById('loginTabSeller').addEventListener('click',()=>setLoginType('seller'));
  document.getElementById('loginButton').addEventListener('click',login);
  document.getElementById('loginPassword').addEventListener('keydown',e=>{if(e.key==='Enter')login();});
  document.getElementById('themeToggle').addEventListener('click',()=>setTheme(state.theme==='dark'?'light':'dark'));
  document.getElementById('globalSearch').addEventListener('input',e=>{productFilter.query=e.target.value;productFilter.category='';navigate('products');});
  document.addEventListener('change',e=>{if(e.target.id==='categoryFilter'){productFilter.category=e.target.value;renderProducts();}if(e.target.id==='priceFilter'){productFilter.max=e.target.value;renderProducts();}});

  window.addEventListener('storage',e=>{if(e.key===STORAGE_KEY){state=loadState();renderCurrent();}});

  setLoginType('client');
  setTheme(state.theme||'light');
  try{const saved=JSON.parse(sessionStorage.getItem(SESSION_KEY));if(saved&&(saved.email===accounts.client.email||saved.email===accounts.seller.email)){session=saved;showApp();}}catch{}
})();
