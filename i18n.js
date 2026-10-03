/* ===== i18n OZAnnonces : fr / en / ar / es ===== */
const I18N = {
  fr: {
    'nav.home':'Accueil','nav.ads':'Annonces','nav.post':'Déposer','nav.profile':'Profil',
    'hdr.hello':'Bonjour 👋','hdr.sub':"Trouvez ce qu'il vous faut, en un instant",
    'home.search_ph':'Que recherchez-vous ?','home.search_btn':'Rechercher',
    'home.banner_t':'Une seconde vie pour vos objets 🌿','home.banner_s':'Déposez votre première annonce en moins d\'une minute.',
    'home.near':'Près de chez vous','cat.others':'Autres','cat.all':'Tout','cat.loading':'Chargement des catégories…',
    'cat.immobilier':'Immobilier','cat.auto_moto':'Véhicules','cat.emploi_services':'Emploi & Services','cat.ozamarket':'OZAMarket',
    'cat.locations_vacances':'Locations & Vacances','cat.baby_sitting':'Baby-Sitting','cat.covoiturage':'Covoiturage','cat.dons':'Dons','cat.animaux':'Animaux',
    'list.search_ph':'Rechercher une annonce…','list.filters':'Filtres','list.clear':'Effacer',
    'list.loading':'Chargement des annonces…','list.none':"Aucune annonce pour l'instant.",'list.error':'Impossible de charger les annonces pour le moment.',
    'list.more':"Voir plus d'annonces",'list.loading_short':'Chargement…','list.retry':'Réessayer',
    'price.unset':'Prix non précisé','loc.unset':'Localisation non précisée','common.cur':'€',
    'detail.desc':'Description','detail.specs':'Caractéristiques','detail.seller':'Vendeur','detail.similar':'Annonces similaires',
    'detail.no_desc':'Aucune description disponible','detail.views':'vues','detail.ref':'Réf.','detail.pro':'Professionnel','detail.private':'Particulier',
    'detail.no_phone':'Téléphone non renseigné','detail.gate':'🔒 Connectez-vous pour voir le numéro et contacter le vendeur.',
    'detail.edit':'Modifier mon annonce','detail.send_msg':'💬 Envoyer un message','detail.login_contact':'Se connecter pour contacter',
    'auth.create':'Créer un compte','auth.login':'Se connecter','auth.logout':'Se déconnecter','auth.email':'Email','auth.password':'Mot de passe',
    'auth.forgot':'Mot de passe oublié ?','auth.no_account':'Pas encore de compte ?','auth.login_hint':'Connectez-vous pour accéder à votre profil',
    'auth.login_error':'Connexion impossible.','auth.net':'Erreur de connexion.','net.error':'Erreur réseau.',
    'profile.mine':'Mon Profil','profile.pro':'Mon espace pro','profile.ads':'Mes annonces','profile.msgs':'Ma Messagerie',
    'post.title':'Déposer une annonce','post.need_login':'Vous devez être connecté pour déposer une annonce.',
    'post.add_photos':'Ajouter des photos ({n} max)','post.first_photo':'La première sera la photo principale',
    'post.f_title':'Titre *','post.f_cat':'Catégorie *','post.f_price':'Prix (€)','post.f_desc':'Description','post.f_city':'Ville *','post.f_tel':'Téléphone (10 chiffres)',
    'post.choose':'Choisir…','post.publish':"Publier l'annonce",'post.publishing':'Publication en cours…',
    'post.err_title':'Le titre doit contenir au moins 3 caractères.','post.err_cat':'Choisissez une catégorie.','post.err_city':'La ville est requise.',
    'post.err_tel':'Le téléphone doit contenir exactement 10 chiffres.','post.err_price':'Prix invalide.',
    'post.published':'Annonce publiée','post.sent':'Annonce envoyée','post.view_mine':'Voir mes annonces','post.another':'Déposer une autre annonce',
    'filters.title':'Filtres','filters.cat':'Catégorie','filters.all_cats':'Toutes les catégories','filters.sub':'Sous-catégorie','filters.all_subs':'Toutes les sous-catégories',
    'filters.city':'Ville','filters.all_cities':'Toutes les villes','filters.pmin':'Prix minimum','filters.pmax':'Prix maximum',
    'filters.type':"Type d'annonce",'filters.sell':'Je vends','filters.seek':'Je recherche','filters.show':'Afficher les résultats','filters.reset':'Réinitialiser',
    'common.save':'Enregistrer','common.delete':"Supprimer l'annonce",'common.close':'Fermer','common.back':'Retour'
  },
  en: {
    'nav.home':'Home','nav.ads':'Listings','nav.post':'Post','nav.profile':'Profile',
    'hdr.hello':'Hello 👋','hdr.sub':'Find what you need, in an instant',
    'home.search_ph':'What are you looking for?','home.search_btn':'Search',
    'home.banner_t':'Give your items a second life 🌿','home.banner_s':'Post your first ad in less than a minute.',
    'home.near':'Near you','cat.others':'More','cat.all':'All','cat.loading':'Loading categories…',
    'cat.immobilier':'Real estate','cat.auto_moto':'Vehicles','cat.emploi_services':'Jobs & Services','cat.ozamarket':'OZAMarket',
    'cat.locations_vacances':'Rentals & Holidays','cat.baby_sitting':'Babysitting','cat.covoiturage':'Carpooling','cat.dons':'Donations','cat.animaux':'Pets',
    'list.search_ph':'Search for a listing…','list.filters':'Filters','list.clear':'Clear',
    'list.loading':'Loading listings…','list.none':'No listings yet.','list.error':'Unable to load listings right now.',
    'list.more':'Show more listings','list.loading_short':'Loading…','list.retry':'Retry',
    'price.unset':'Price not specified','loc.unset':'Location not specified','common.cur':'€',
    'detail.desc':'Description','detail.specs':'Features','detail.seller':'Seller','detail.similar':'Similar listings',
    'detail.no_desc':'No description available','detail.views':'views','detail.ref':'Ref.','detail.pro':'Professional','detail.private':'Private',
    'detail.no_phone':'Phone number not provided','detail.gate':'🔒 Log in to see the phone number and contact the seller.',
    'detail.edit':'Edit my listing','detail.send_msg':'💬 Send a message','detail.login_contact':'Log in to contact',
    'auth.create':'Create an account','auth.login':'Log in','auth.logout':'Log out','auth.email':'Email','auth.password':'Password',
    'auth.forgot':'Forgot password?','auth.no_account':"Don't have an account yet?",'auth.login_hint':'Log in to access your profile',
    'auth.login_error':'Unable to log in.','auth.net':'Connection error.','net.error':'Network error.',
    'profile.mine':'My Profile','profile.pro':'My business space','profile.ads':'My listings','profile.msgs':'My Messages',
    'post.title':'Post a listing','post.need_login':'You must be logged in to post a listing.',
    'post.add_photos':'Add photos ({n} max)','post.first_photo':'The first one will be the main photo',
    'post.f_title':'Title *','post.f_cat':'Category *','post.f_price':'Price (€)','post.f_desc':'Description','post.f_city':'City *','post.f_tel':'Phone (10 digits)',
    'post.choose':'Choose…','post.publish':'Publish listing','post.publishing':'Publishing…',
    'post.err_title':'The title must contain at least 3 characters.','post.err_cat':'Please choose a category.','post.err_city':'City is required.',
    'post.err_tel':'The phone number must contain exactly 10 digits.','post.err_price':'Invalid price.',
    'post.published':'Listing published','post.sent':'Listing submitted','post.view_mine':'View my listings','post.another':'Post another listing',
    'filters.title':'Filters','filters.cat':'Category','filters.all_cats':'All categories','filters.sub':'Subcategory','filters.all_subs':'All subcategories',
    'filters.city':'City','filters.all_cities':'All cities','filters.pmin':'Minimum price','filters.pmax':'Maximum price',
    'filters.type':'Listing type','filters.sell':'For sale','filters.seek':'Wanted','filters.show':'Show results','filters.reset':'Reset',
    'common.save':'Save','common.delete':'Delete listing','common.close':'Close','common.back':'Back'
  },
  ar: {
    'nav.home':'الرئيسية','nav.ads':'الإعلانات','nav.post':'أضف إعلانًا','nav.profile':'الملف الشخصي',
    'hdr.hello':'مرحبًا 👋','hdr.sub':'اعثر على ما تحتاجه في لحظات',
    'home.search_ph':'عمّ تبحث؟','home.search_btn':'بحث',
    'home.banner_t':'امنح أغراضك حياة ثانية 🌿','home.banner_s':'انشر إعلانك الأول في أقل من دقيقة.',
    'home.near':'بالقرب منك','cat.others':'المزيد','cat.all':'الكل','cat.loading':'جارٍ تحميل الفئات…',
    'cat.immobilier':'عقارات','cat.auto_moto':'مركبات','cat.emploi_services':'وظائف وخدمات','cat.ozamarket':'أوزا ماركت',
    'cat.locations_vacances':'إيجار وعطل','cat.baby_sitting':'رعاية الأطفال','cat.covoiturage':'مشاركة السيارة','cat.dons':'هدايا','cat.animaux':'حيوانات',
    'list.search_ph':'ابحث عن إعلان…','list.filters':'تصفية','list.clear':'مسح',
    'list.loading':'جارٍ تحميل الإعلانات…','list.none':'لا توجد إعلانات حاليًا.','list.error':'تعذّر تحميل الإعلانات في الوقت الحالي.',
    'list.more':'عرض المزيد من الإعلانات','list.loading_short':'جارٍ التحميل…','list.retry':'إعادة المحاولة',
    'price.unset':'السعر غير محدد','loc.unset':'الموقع غير محدد','common.cur':'€',
    'detail.desc':'الوصف','detail.specs':'المواصفات','detail.seller':'البائع','detail.similar':'إعلانات مشابهة',
    'detail.no_desc':'لا يوجد وصف متاح','detail.views':'مشاهدة','detail.ref':'المرجع','detail.pro':'محترف','detail.private':'فرد',
    'detail.no_phone':'رقم الهاتف غير متوفر','detail.gate':'🔒 سجّل الدخول لرؤية الرقم والتواصل مع البائع.',
    'detail.edit':'تعديل إعلاني','detail.send_msg':'💬 إرسال رسالة','detail.login_contact':'سجّل الدخول للتواصل',
    'auth.create':'إنشاء حساب','auth.login':'تسجيل الدخول','auth.logout':'تسجيل الخروج','auth.email':'البريد الإلكتروني','auth.password':'كلمة المرور',
    'auth.forgot':'نسيت كلمة المرور؟','auth.no_account':'ليس لديك حساب بعد؟','auth.login_hint':'سجّل الدخول للوصول إلى ملفك الشخصي',
    'auth.login_error':'تعذّر تسجيل الدخول.','auth.net':'خطأ في الاتصال.','net.error':'خطأ في الشبكة.',
    'profile.mine':'ملفي الشخصي','profile.pro':'مساحتي المهنية','profile.ads':'إعلاناتي','profile.msgs':'رسائلي',
    'post.title':'أضف إعلانًا','post.need_login':'يجب تسجيل الدخول لإضافة إعلان.',
    'post.add_photos':'أضف صورًا ({n} كحد أقصى)','post.first_photo':'الصورة الأولى ستكون الصورة الرئيسية',
    'post.f_title':'العنوان *','post.f_cat':'الفئة *','post.f_price':'السعر (€)','post.f_desc':'الوصف','post.f_city':'المدينة *','post.f_tel':'الهاتف (10 أرقام)',
    'post.choose':'اختر…','post.publish':'نشر الإعلان','post.publishing':'جارٍ النشر…',
    'post.err_title':'يجب أن يحتوي العنوان على 3 أحرف على الأقل.','post.err_cat':'اختر فئة.','post.err_city':'المدينة مطلوبة.',
    'post.err_tel':'يجب أن يتكون رقم الهاتف من 10 أرقام بالضبط.','post.err_price':'سعر غير صالح.',
    'post.published':'تم نشر الإعلان','post.sent':'تم إرسال الإعلان','post.view_mine':'عرض إعلاناتي','post.another':'إضافة إعلان آخر',
    'filters.title':'تصفية','filters.cat':'الفئة','filters.all_cats':'كل الفئات','filters.sub':'الفئة الفرعية','filters.all_subs':'كل الفئات الفرعية',
    'filters.city':'المدينة','filters.all_cities':'كل المدن','filters.pmin':'السعر الأدنى','filters.pmax':'السعر الأعلى',
    'filters.type':'نوع الإعلان','filters.sell':'للبيع','filters.seek':'مطلوب','filters.show':'عرض النتائج','filters.reset':'إعادة التعيين',
    'common.save':'حفظ','common.delete':'حذف الإعلان','common.close':'إغلاق','common.back':'رجوع'
  },
  es: {
    'nav.home':'Inicio','nav.ads':'Anuncios','nav.post':'Publicar','nav.profile':'Perfil',
    'hdr.hello':'Hola 👋','hdr.sub':'Encuentra lo que necesitas, al instante',
    'home.search_ph':'¿Qué estás buscando?','home.search_btn':'Buscar',
    'home.banner_t':'Una segunda vida para tus objetos 🌿','home.banner_s':'Publica tu primer anuncio en menos de un minuto.',
    'home.near':'Cerca de ti','cat.others':'Más','cat.all':'Todo','cat.loading':'Cargando categorías…',
    'cat.immobilier':'Inmobiliaria','cat.auto_moto':'Vehículos','cat.emploi_services':'Empleo y Servicios','cat.ozamarket':'OZAMarket',
    'cat.locations_vacances':'Alquileres y Vacaciones','cat.baby_sitting':'Canguro','cat.covoiturage':'Coche compartido','cat.dons':'Donaciones','cat.animaux':'Animales',
    'list.search_ph':'Buscar un anuncio…','list.filters':'Filtros','list.clear':'Borrar',
    'list.loading':'Cargando anuncios…','list.none':'Aún no hay anuncios.','list.error':'No se pueden cargar los anuncios en este momento.',
    'list.more':'Ver más anuncios','list.loading_short':'Cargando…','list.retry':'Reintentar',
    'price.unset':'Precio no especificado','loc.unset':'Ubicación no especificada','common.cur':'€',
    'detail.desc':'Descripción','detail.specs':'Características','detail.seller':'Vendedor','detail.similar':'Anuncios similares',
    'detail.no_desc':'Sin descripción disponible','detail.views':'visitas','detail.ref':'Ref.','detail.pro':'Profesional','detail.private':'Particular',
    'detail.no_phone':'Teléfono no indicado','detail.gate':'🔒 Inicia sesión para ver el número y contactar al vendedor.',
    'detail.edit':'Editar mi anuncio','detail.send_msg':'💬 Enviar un mensaje','detail.login_contact':'Inicia sesión para contactar',
    'auth.create':'Crear una cuenta','auth.login':'Iniciar sesión','auth.logout':'Cerrar sesión','auth.email':'Correo electrónico','auth.password':'Contraseña',
    'auth.forgot':'¿Olvidaste tu contraseña?','auth.no_account':'¿Aún no tienes cuenta?','auth.login_hint':'Inicia sesión para acceder a tu perfil',
    'auth.login_error':'No se pudo iniciar sesión.','auth.net':'Error de conexión.','net.error':'Error de red.',
    'profile.mine':'Mi Perfil','profile.pro':'Mi espacio profesional','profile.ads':'Mis anuncios','profile.msgs':'Mi Mensajería',
    'post.title':'Publicar un anuncio','post.need_login':'Debes iniciar sesión para publicar un anuncio.',
    'post.add_photos':'Añadir fotos (máx. {n})','post.first_photo':'La primera será la foto principal',
    'post.f_title':'Título *','post.f_cat':'Categoría *','post.f_price':'Precio (€)','post.f_desc':'Descripción','post.f_city':'Ciudad *','post.f_tel':'Teléfono (10 dígitos)',
    'post.choose':'Elegir…','post.publish':'Publicar el anuncio','post.publishing':'Publicando…',
    'post.err_title':'El título debe tener al menos 3 caracteres.','post.err_cat':'Elige una categoría.','post.err_city':'La ciudad es obligatoria.',
    'post.err_tel':'El teléfono debe tener exactamente 10 dígitos.','post.err_price':'Precio no válido.',
    'post.published':'Anuncio publicado','post.sent':'Anuncio enviado','post.view_mine':'Ver mis anuncios','post.another':'Publicar otro anuncio',
    'filters.title':'Filtros','filters.cat':'Categoría','filters.all_cats':'Todas las categorías','filters.sub':'Subcategoría','filters.all_subs':'Todas las subcategorías',
    'filters.city':'Ciudad','filters.all_cities':'Todas las ciudades','filters.pmin':'Precio mínimo','filters.pmax':'Precio máximo',
    'filters.type':'Tipo de anuncio','filters.sell':'Vendo','filters.seek':'Busco','filters.show':'Ver resultados','filters.reset':'Restablecer',
    'common.save':'Guardar','common.delete':'Eliminar el anuncio','common.close':'Cerrar','common.back':'Volver'
  }
};

const LANG_LOCALE = { fr:'fr-FR', en:'en-GB', ar:'ar', es:'es-ES' };
const LANG_NAMES  = { fr:'Français', en:'English', ar:'العربية', es:'Español' };

let LANG = localStorage.getItem('oz_lang') || (navigator.language || 'fr').slice(0, 2);
if (!I18N[LANG]) LANG = 'fr';

function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]);
  if (s === undefined) s = I18N.fr[key];
  if (s === undefined) return key;
  if (vars) for (const k in vars) s = s.replace('{' + k + '}', vars[k]);
  return s;
}

// Applique la langue aux éléments statiques : data-i18n (texte) et data-i18n-ph (placeholder)
function applyI18n() {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  const sel = document.getElementById('langSelect');
  if (sel) sel.value = LANG;
}

function setLang(l) {
  if (!I18N[l]) return;
  LANG = l;
  localStorage.setItem('oz_lang', l);
  applyI18n();
  // Re-rendu des parties dynamiques
  renderCats(); renderChips(); fillDeposerCategories();
  renderFilterSummary();
  loadListings(null, 'homeList');
  if (document.getElementById('s-annonces').classList.contains('active')) runSearch();
  if (document.getElementById('s-profil').classList.contains('active')) loadProfil();
  if (document.getElementById('s-deposer').classList.contains('active')) { resetDeposer(); updateDeposerGate(); }
}