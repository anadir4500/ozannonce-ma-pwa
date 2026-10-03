#!/usr/bin/env python3
"""Usage: python3 patch_i18n.py index.html  ->  écrit index_i18n.html (à côté de i18n.js)."""
import sys, re
src = sys.argv[1] if len(sys.argv) > 1 else 'index.html'
s = open(src, encoding='utf-8').read()
miss = []
def R(old, new):
    global s
    if old not in s: miss.append(old[:70]); return
    s = s.replace(old, new)
def I(txt, key, tag_attr='data-i18n'):  # petit helper
    return f'{tag_attr}="{key}"'

# ---------- HTML statique ----------
R('<script>\nconst API_BASE', '<script src="i18n.js"></script>\n<script>\nconst API_BASE')
R('</style>', '''[dir=rtl] .logo,[dir=rtl] .ad-card,[dir=rtl] .ad-info,[dir=rtl] .dt-body,[dir=rtl] .field label{text-align:right}
[dir=rtl] .back-btn,[dir=rtl] .subpage-bar button{transform:scaleX(-1)}
[dir=rtl] .back-btn{left:auto;right:16px}
[dir=rtl] #detail,[dir=rtl] #subpage{transform:translateX(-100%)}
[dir=rtl] #detail.open,[dir=rtl] #subpage.open{transform:translateX(0)}
[dir=rtl] .banner::after{right:auto;left:-30px}
[dir=rtl] .msg.received{border-bottom-left-radius:16px;border-bottom-right-radius:4px}
[dir=rtl] .msg.sent{border-bottom-right-radius:16px;border-bottom-left-radius:4px}
</style>''')
R('<div class="greet" id="greetTxt">Bonjour 👋</div>',
  '<select id="langSelect" onchange="setLang(this.value)" style="float:right;border:1px solid var(--border);border-radius:10px;padding:4px 6px;background:#fff;font-size:13px"><option value="fr">Français</option><option value="en">English</option><option value="ar">العربية</option><option value="es">Español</option></select>\n    <div class="greet" id="greetTxt" data-i18n="hdr.hello">Bonjour 👋</div>')
R('<div class="sub">Trouvez', '<div class="sub" data-i18n="hdr.sub">Trouvez')
R('<input id="homeQ" placeholder="Que recherchez-vous ?"', '<input id="homeQ" data-i18n-ph="home.search_ph" placeholder="Que recherchez-vous ?"')
R('onclick="doHomeSearch()">Rechercher', 'onclick="doHomeSearch()" data-i18n="home.search_btn">Rechercher')
R('<b>Une seconde vie', '<b data-i18n="home.banner_t">Une seconde vie')
R("<span>Déposez votre première annonce", '<span data-i18n="home.banner_s">Déposez votre première annonce')
R('<h3 class="section">Près de chez vous</h3>', '<h3 class="section" data-i18n="home.near">Près de chez vous</h3>')
R('<input id="fltQ" placeholder="Rechercher une annonce…"', '<input id="fltQ" data-i18n-ph="list.search_ph" placeholder="Rechercher une annonce…"')
R('⚙️ Filtres<span id="fltBadge">', '⚙️ <span data-i18n="list.filters">Filtres</span><span id="fltBadge">')
R('<h3 class="section">Déposer une annonce</h3>', '<h3 class="section" data-i18n="post.title">Déposer une annonce</h3>')
R('margin-bottom:18px;">Vous devez être connecté', 'margin-bottom:18px;" data-i18n="post.need_login">Vous devez être connecté')
R('''<button class="btn" onclick="go('profil')">Se connecter</button>''', '''<button class="btn" onclick="go('profil')" data-i18n="auth.login">Se connecter</button>''')
R('onclick="openRegister()">Créer un compte</button>', 'onclick="openRegister()" data-i18n="auth.create">Créer un compte</button>')
for ic, k, lab in [('🏠','home','Accueil'),('🔎','ads','Annonces'),('➕','post','Déposer'),('👤','profile','Profil')]:
    R(f'<span class="ic">{ic}</span>{lab}</button>', f'<span class="ic">{ic}</span><span data-i18n="nav.{k}">{lab}</span></button>')

# ---------- JS : réseau + langue ----------
R('  return _origFetch(url, opts);', "  if(typeof url === 'string' && url.indexOf(API_BASE) === 0) url += (url.indexOf('?') > -1 ? '&' : '?') + 'lang=' + LANG;\n  return _origFetch(url, opts);")
R("function metaFor(slug){ return CAT_META[slug] || {icon:'📦', label: slug || 'Autres', color:'#94a3b8'}; }",
  "function metaFor(slug){ const m = CAT_META[slug] || {icon:'📦', color:'#94a3b8'};\n  return Object.assign({}, m, { label: I18N.fr['cat.'+slug] ? t('cat.'+slug) : (slug || t('cat.others')) }); }")
R('''<p style="color:#999;font-size:13px;grid-column:1/-1">Chargement des catégories…</p>''', '''<p style="color:#999;font-size:13px;grid-column:1/-1">${t('cat.loading')}</p>''')
R("el.innerHTML = '<p style=\"color:#999;font-size:13px;grid-column:1/-1\">${t('cat.loading')}</p>'", "el.innerHTML = `<p style=\"color:#999;font-size:13px;grid-column:1/-1\">${t('cat.loading')}</p>`")
R('<div class="lab">Autres</div>', "<div class=\"lab\">${t('cat.others')}</div>")
R('onclick="filterByCategory(null)">Tout</div>', "onclick=\"filterByCategory(null)\">${t('cat.all')}</div>")
R('''padding:20px">Chargement des annonces…</p>\'''', '''padding:20px">'+t('list.loading')+'</p>\'''')
R('''padding:20px">Impossible de charger les annonces pour le moment.</p>\'''', '''padding:20px">'+t('list.error')+'</p>\'''')
R(r'''padding:20px">Aucune annonce pour l\'instant.</p>\'''', '''padding:20px">'+t('list.none')+'</p>\'''')
R("btn.textContent = 'Chargement…'", "btn.textContent = t('list.loading_short')")
R("btn.textContent = 'Réessayer'", "btn.textContent = t('list.retry')")
R("onclick=\"loadMoreListings('${targetId}')\">Voir plus d'annonces</button>", "onclick=\"loadMoreListings('${targetId}')\">${t('list.more')}</button>")
s = s.replace("'Prix non précisé'", "t('price.unset')").replace("'Localisation non précisée'", "t('loc.unset')")
s = s.replace("'fr-FR'", "LANG_LOCALE[LANG]")

# ---------- fiche détail ----------
R("'Professionnel' : (a.seller_type ? 'Particulier' : null)", "t('detail.pro') : (a.seller_type ? t('detail.private') : null)")
R('<div class="dt-h">Caractéristiques</div>', '<div class="dt-h" data-i18n="detail.specs">Caractéristiques</div>')
R('<div class="dt-h">Vendeur</div>', '<div class="dt-h" data-i18n="detail.seller">Vendeur</div>')
R('<div class="dt-h">Annonces similaires</div>', '<div class="dt-h" data-i18n="detail.similar">Annonces similaires</div>')
R('<div class="dt-h">Description</div>', '<div class="dt-h" data-i18n="detail.desc">Description</div>')
R("'Aucune description disponible'", "t('detail.no_desc')")
R('${a.views} vues · Réf. #${a.id}', "${a.views} ${t('detail.views')} · ${t('detail.ref')} #${a.id}")
R('margin-top:8px;">Téléphone non renseigné</div>', "margin-top:8px;\">${t('detail.no_phone')}</div>")
R('🔒 Connectez-vous pour voir le numéro et contacter le vendeur.', "${t('detail.gate')}")
R('>Modifier mon annonce</button>', ">${t('detail.edit')}</button>")
R('>💬 Envoyer un message</button>', ">${t('detail.send_msg')}</button>")
R('>Se connecter pour contacter</button>', ">${t('detail.login_contact')}</button>")
R('style="margin-top:8px;" onclick="openRegister()">Créer un compte</button>', 'style="margin-top:8px;" onclick="openRegister()">${t(\'auth.create\')}</button>')
R('<p class="subpage-loading">Chargement…</p></div>`', "<p class=\"subpage-loading\">${t('list.loading_short')}</p></div>`")
s = s.replace('''\'<p class="subpage-loading">Chargement…</p>\'''', '''\'<p class="subpage-loading">\'+t(\'list.loading_short\')+\'</p>\'''')
s = s.replace('''\'<p class="subpage-loading">Erreur réseau.</p>\'''', '''\'<p class="subpage-loading">\'+t(\'net.error\')+\'</p>\'''')
s = s.replace("'Erreur réseau.'", "t('net.error')")

# ---------- profil / connexion ----------
for ic, key, lab in [('👤','profile.mine','Mon Profil'),('🏪','profile.pro','Mon espace pro'),('📋','profile.ads','Mes annonces'),('💬','profile.msgs','Ma Messagerie')]:
    R(f'<span class="l">{ic} {lab}</span>', f'<span class="l">{ic} ${{t(\'{key}\')}}</span>')
R('onclick="logout()">Se déconnecter</button>', "onclick=\"logout()\">${t('auth.logout')}</button>")
R('>Connectez-vous pour accéder à votre profil</p>', ">${t('auth.login_hint')}</p>")
R('<label>Email</label><input id="loginEmail"', '<label>${t(\'auth.email\')}</label><input id="loginEmail"')
R('<label>Mot de passe</label><input id="loginPassword"', '<label>${t(\'auth.password\')}</label><input id="loginPassword"')
R('font-weight:600;">Mot de passe oublié ?</a>', "font-weight:600;\">${t('auth.forgot')}</a>")
R('onclick="submitLogin()">Se connecter</button>', "onclick=\"submitLogin()\">${t('auth.login')}</button>")
R('margin:18px 0 8px;">Pas encore de compte ?</p>', "margin:18px 0 8px;\">${t('auth.no_account')}</p>")
R('<button class="btn ghost" onclick="openRegister()">Créer un compte</button>', "<button class=\"btn ghost\" onclick=\"openRegister()\">${t('auth.create')}</button>")
R("data.error || 'Connexion impossible.'", "data.error || t('auth.login_error')")
R("'Erreur de connexion.'", "t('auth.net')")

# ---------- déposer ----------
R('Ajouter des photos (${D_MAX_PHOTOS} max)<br><small>La première sera la photo principale</small>', "${t('post.add_photos',{n:D_MAX_PHOTOS})}<br><small>${t('post.first_photo')}</small>")
for lab, key, nxt in [('Titre *','post.f_title','<input id="dTitle"'),('Catégorie *','post.f_cat','<select id="dCat"'),('Prix (€)','post.f_price','<input id="dPrice"'),
                      ('Description','post.f_desc','<textarea id="dDesc"'),('Ville *','post.f_city','<input id="dCity"'),('Téléphone (10 chiffres)','post.f_tel','<input id="dTel"')]:
    R(f'<label>{lab}</label>{nxt}', f'<label data-i18n="{key}">{lab}</label>{nxt}')
R('''onclick="submitAd()">Publier l'annonce</button>''', '''onclick="submitAd()" data-i18n="post.publish">Publier l'annonce</button>''')
s = s.replace('''"Publier l'annonce"''', "t('post.publish')")
R("'Publication en cours…'", "t('post.publishing')")
R("'<option value=\"\">Choisir…</option>'", "'<option value=\"\">'+t('post.choose')+'</option>'")
R("'Le titre doit contenir au moins 3 caractères.'", "t('post.err_title')")
R("'Choisissez une catégorie.'", "t('post.err_cat')")
R("msg.textContent = 'La ville est requise.'", "msg.textContent = t('post.err_city')")
R("if(tel !== '' && !/^\\d{10}$/.test(tel)) return msg.textContent = 'Le téléphone doit contenir exactement 10 chiffres.';\n  if(price", "if(tel !== '' && !/^\\d{10}$/.test(tel)) return msg.textContent = t('post.err_tel');\n  if(price")
R("'Prix invalide.'", "t('post.err_price')")
R("Annonce ${live ? 'publiée' : 'envoyée'}", "${live ? t('post.published') : t('post.sent')}")
R('onclick="openMesAnnonces()">Voir mes annonces</button>', "onclick=\"openMesAnnonces()\">${t('post.view_mine')}</button>")
R('onclick="renderDeposerForm()">Déposer une autre annonce</button>', "onclick=\"renderDeposerForm()\">${t('post.another')}</button>")

# ---------- filtres ----------
R("openSubpage('Filtres', 'filters')", "openSubpage(t('filters.title'), 'filters')")
R("'<option value=\"\">Toutes les catégories</option>'", "'<option value=\"\">'+t('filters.all_cats')+'</option>'")
R('<label>Catégorie</label>', '<label data-i18n="filters.cat">Catégorie</label>')
R('<h3 class="section">Sous-catégorie</h3>', '<h3 class="section" data-i18n="filters.sub">Sous-catégorie</h3>')
R('<label>Ville</label>', '<label data-i18n="filters.city">Ville</label>')
R('placeholder="Toutes les villes"', 'data-i18n-ph="filters.all_cities" placeholder="Toutes les villes"')
R('<label>Prix minimum</label>', '<label data-i18n="filters.pmin">Prix minimum</label>')
R('<label>Prix maximum</label>', '<label data-i18n="filters.pmax">Prix maximum</label>')
R('Afficher les résultats</button>', "${t('filters.show')}</button>")
R('closeSubpage();">Réinitialiser</button>', "closeSubpage();\">${t('filters.reset')}</button>")
R("<label>Type d'annonce</label>", '<label data-i18n="filters.type">Type d\'annonce</label>')
R('>Je vends</option>', ">${t('filters.sell')}</option>")
R('>Je recherche</option>', ">${t('filters.seek')}</option>")
R("f.type === 'offer' ? 'Je vends' : 'Je recherche'", "f.type === 'offer' ? t('filters.sell') : t('filters.seek')")
R("row('Toutes les sous-catégories'", "row(t('filters.all_subs')")
R('return false;">Effacer</a>\'', 'return false;">\'+t(\'list.clear\')+\'</a>\'')

# ---------- initialisation + observateur (traduit aussi le HTML injecté dynamiquement) ----------
R("loadCategories();\nloadListings(null, 'homeList');\ncheckAuth();", '''function applyNode(r){
  if(!r || r.nodeType !== 1) return;
  [r, ...r.querySelectorAll('[data-i18n],[data-i18n-ph]')].forEach(el => {
    if(el.dataset.i18n){ const v = t(el.dataset.i18n); if(el.textContent !== v) el.textContent = v; }
    if(el.dataset.i18nPh){ const v = t(el.dataset.i18nPh); if(el.placeholder !== v) el.placeholder = v; }
  });
}
new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(applyNode))).observe(document.body, {childList:true, subtree:true});
applyI18n();
loadCategories();
loadListings(null, 'homeList');
checkAuth();''')

out = src.replace('.html', '_i18n.html')
open(out, 'w', encoding='utf-8').write(s)
print('OK ->', out)
if miss: print('\nChaînes non trouvées (déjà modifiées ou différentes) :'); [print(' -', m) for m in miss]