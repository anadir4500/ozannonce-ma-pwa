/* Clés supplémentaires : profil, mes annonces, messagerie, espace pro, demande de vitrine */
(function(){
const F = {
fr:{
 'common.err':'Erreur.','common.load_err':'Erreur de chargement.','common.phone':'Téléphone',
 'prof.load_fail':'Impossible de charger le profil.','prof.name':'Nom','prof.newpass':'Nouveau mot de passe','prof.newpass_ph':'Laisser vide pour ne pas changer','prof.updated':'Profil mis à jour.',
 'ads.none':"Vous n'avez pas encore d'annonce.",'ads.uncat':'Non catégorisé','ads.edit_title':"Modifier l'annonce",'ads.f_title':'Titre','ads.boost':'🚀 Booster cette annonce','ads.updated':'Annonce mise à jour.','ads.confirm_del':'Supprimer définitivement cette annonce ?','ads.del_err':'Erreur lors de la suppression.',
 'msg.none':'Aucune conversation pour le moment.','msg.chat':'Conversation','msg.city_unset':'Ville non renseignée','msg.since':'Membre depuis {d}','msg.active_ads':'{n} annonce(s) active(s)','msg.rating':'{avg}/5 ({n} avis)','msg.not_rated':'Pas encore noté','msg.empty':'Pas encore de messages.','msg.ph':'Écrivez votre message…','msg.send_err':"Erreur d'envoi.",
 'pro.none':"Vous n'avez pas encore de vitrine professionnelle.",'pro.create':'Créer ma vitrine','pro.status':'Statut','pro.plan':'Formule','pro.ads':'Annonces',
 'pro.f_name':"Nom de l'entreprise",'pro.f_sector':'Secteur','pro.f_zip':'Code postal','pro.f_addr':'Adresse','pro.f_email':'E-mail public','pro.f_web':'Site web',
 'pro.hours':'Horaires','pro.hours_ph':'Ex : 9h00 – 18h00','pro.save':'Enregistrer les modifications','pro.updated':'Vitrine mise à jour.','pro.view':'Voir ma vitrine',
 'day.lundi':'Lundi','day.mardi':'Mardi','day.mercredi':'Mercredi','day.jeudi':'Jeudi','day.vendredi':'Vendredi','day.samedi':'Samedi','day.dimanche':'Dimanche',
 'pst.brouillon':'En préparation','pst.actif':'En ligne','pst.suspendu':'Suspendue',
 'plan.gratuit':'Découverte','plan.pro':'Pro','plan.business':'Business','plan.entreprise':'Entreprise',
 'pd.title':'Créer ma vitrine','pd.intro':'Dites-nous qui vous êtes : nous préparons votre page et vous la présentons avant sa mise en ligne. Sans engagement.',
 'pd.f_ent':"Nom de l'entreprise *",'pd.f_contact':'Votre nom *','pd.f_email':'E-mail *','pd.f_plan':'Formule souhaitée',
 'pd.p_gratuit':'Découverte — gratuit','pd.p_pro':'Pro — offert pendant le lancement','pd.p_business':'Business — sur demande','pd.p_entreprise':'Entreprise — sur devis',
 'pd.f_vol':"Annonces en ligne aujourd'hui",'pd.vol_ph':'Ex. une trentaine, toutes plateformes confondues','pd.f_msg':'Autre chose à nous dire ?',
 'pd.err_req':"Le nom de l'entreprise et votre nom sont obligatoires.",'pd.sending':'Envoi…','pd.send':'Envoyer ma demande','pd.done_t':'Demande envoyée',
 'pd.done_body':'Nous revenons vers vous sous 48 heures ouvrées pour préparer votre vitrine.','pd.fail':"L'envoi n'a pas abouti.",
 'sect.0':'Agence immobilière','sect.1':'Garage / Concession auto','sect.2':'Artisan / BTP','sect.3':'Commerce','sect.4':'Services aux entreprises','sect.5':'Location saisonnière','sect.6':'Autre'
},
en:{
 'common.err':'Error.','common.load_err':'Loading error.','common.phone':'Phone',
 'prof.load_fail':'Unable to load the profile.','prof.name':'Name','prof.newpass':'New password','prof.newpass_ph':'Leave empty to keep the current one','prof.updated':'Profile updated.',
 'ads.none':"You don't have any listings yet.",'ads.uncat':'Uncategorized','ads.edit_title':'Edit listing','ads.f_title':'Title','ads.boost':'🚀 Boost this listing','ads.updated':'Listing updated.','ads.confirm_del':'Permanently delete this listing?','ads.del_err':'Error while deleting.',
 'msg.none':'No conversations yet.','msg.chat':'Conversation','msg.city_unset':'City not provided','msg.since':'Member since {d}','msg.active_ads':'{n} active listing(s)','msg.rating':'{avg}/5 ({n} reviews)','msg.not_rated':'Not rated yet','msg.empty':'No messages yet.','msg.ph':'Write your message…','msg.send_err':'Failed to send.',
 'pro.none':"You don't have a business page yet.",'pro.create':'Create my business page','pro.status':'Status','pro.plan':'Plan','pro.ads':'Listings',
 'pro.f_name':'Business name','pro.f_sector':'Sector','pro.f_zip':'Postal code','pro.f_addr':'Address','pro.f_email':'Public email','pro.f_web':'Website',
 'pro.hours':'Opening hours','pro.hours_ph':'E.g. 9:00 am – 6:00 pm','pro.save':'Save changes','pro.updated':'Business page updated.','pro.view':'View my business page',
 'day.lundi':'Monday','day.mardi':'Tuesday','day.mercredi':'Wednesday','day.jeudi':'Thursday','day.vendredi':'Friday','day.samedi':'Saturday','day.dimanche':'Sunday',
 'pst.brouillon':'In preparation','pst.actif':'Online','pst.suspendu':'Suspended',
 'plan.gratuit':'Discovery','plan.pro':'Pro','plan.business':'Business','plan.entreprise':'Enterprise',
 'pd.title':'Create my business page','pd.intro':'Tell us who you are: we prepare your page and present it to you before it goes live. No commitment.',
 'pd.f_ent':'Business name *','pd.f_contact':'Your name *','pd.f_email':'Email *','pd.f_plan':'Desired plan',
 'pd.p_gratuit':'Discovery — free','pd.p_pro':'Pro — free during launch','pd.p_business':'Business — on request','pd.p_entreprise':'Enterprise — custom quote',
 'pd.f_vol':'Listings online today','pd.vol_ph':'E.g. about thirty, across all platforms','pd.f_msg':'Anything else to tell us?',
 'pd.err_req':'The business name and your name are required.','pd.sending':'Sending…','pd.send':'Send my request','pd.done_t':'Request sent',
 'pd.done_body':'We will get back to you within 48 business hours to prepare your business page.','pd.fail':'Sending failed.',
 'sect.0':'Real estate agency','sect.1':'Garage / Car dealership','sect.2':'Craftsman / Construction','sect.3':'Retail','sect.4':'Business services','sect.5':'Seasonal rental','sect.6':'Other'
},
ar:{
 'common.err':'خطأ.','common.load_err':'خطأ في التحميل.','common.phone':'الهاتف',
 'prof.load_fail':'تعذّر تحميل الملف الشخصي.','prof.name':'الاسم','prof.newpass':'كلمة مرور جديدة','prof.newpass_ph':'اتركه فارغًا لعدم التغيير','prof.updated':'تم تحديث الملف الشخصي.',
 'ads.none':'ليس لديك أي إعلان بعد.','ads.uncat':'بدون فئة','ads.edit_title':'تعديل الإعلان','ads.f_title':'العنوان','ads.boost':'🚀 ترويج هذا الإعلان','ads.updated':'تم تحديث الإعلان.','ads.confirm_del':'هل تريد حذف هذا الإعلان نهائيًا؟','ads.del_err':'حدث خطأ أثناء الحذف.',
 'msg.none':'لا توجد محادثات حاليًا.','msg.chat':'محادثة','msg.city_unset':'المدينة غير محددة','msg.since':'عضو منذ {d}','msg.active_ads':'{n} إعلان نشط','msg.rating':'{avg}/5 ({n} تقييم)','msg.not_rated':'لم يتم التقييم بعد','msg.empty':'لا توجد رسائل بعد.','msg.ph':'اكتب رسالتك…','msg.send_err':'تعذّر الإرسال.',
 'pro.none':'ليست لديك واجهة مهنية بعد.','pro.create':'إنشاء واجهتي المهنية','pro.status':'الحالة','pro.plan':'الباقة','pro.ads':'الإعلانات',
 'pro.f_name':'اسم الشركة','pro.f_sector':'القطاع','pro.f_zip':'الرمز البريدي','pro.f_addr':'العنوان','pro.f_email':'البريد الإلكتروني العام','pro.f_web':'الموقع الإلكتروني',
 'pro.hours':'ساعات العمل','pro.hours_ph':'مثال: 9:00 – 18:00','pro.save':'حفظ التعديلات','pro.updated':'تم تحديث الواجهة المهنية.','pro.view':'عرض واجهتي المهنية',
 'day.lundi':'الاثنين','day.mardi':'الثلاثاء','day.mercredi':'الأربعاء','day.jeudi':'الخميس','day.vendredi':'الجمعة','day.samedi':'السبت','day.dimanche':'الأحد',
 'pst.brouillon':'قيد التحضير','pst.actif':'نشط','pst.suspendu':'معلّق',
 'plan.gratuit':'استكشاف','plan.pro':'احترافي','plan.business':'أعمال','plan.entreprise':'مؤسسات',
 'pd.title':'إنشاء واجهتي المهنية','pd.intro':'عرّفنا بنفسك: نُجهّز صفحتك ونعرضها عليك قبل نشرها. دون أي التزام.',
 'pd.f_ent':'اسم الشركة *','pd.f_contact':'اسمك *','pd.f_email':'البريد الإلكتروني *','pd.f_plan':'الباقة المطلوبة',
 'pd.p_gratuit':'استكشاف — مجاني','pd.p_pro':'احترافي — مجاني خلال فترة الإطلاق','pd.p_business':'أعمال — عند الطلب','pd.p_entreprise':'مؤسسات — بعرض سعر',
 'pd.f_vol':'الإعلانات المنشورة اليوم','pd.vol_ph':'مثال: حوالي ثلاثين على جميع المنصات','pd.f_msg':'هل تريد إخبارنا بشيء آخر؟',
 'pd.err_req':'اسم الشركة واسمك حقلان إلزاميان.','pd.sending':'جارٍ الإرسال…','pd.send':'إرسال طلبي','pd.done_t':'تم إرسال الطلب',
 'pd.done_body':'سنعود إليك خلال 48 ساعة عمل لتجهيز واجهتك المهنية.','pd.fail':'لم يتم الإرسال.',
 'sect.0':'وكالة عقارية','sect.1':'مرآب / وكالة سيارات','sect.2':'حرفي / بناء','sect.3':'تجارة','sect.4':'خدمات للشركات','sect.5':'إيجار موسمي','sect.6':'أخرى'
},
es:{
 'common.err':'Error.','common.load_err':'Error de carga.','common.phone':'Teléfono',
 'prof.load_fail':'No se puede cargar el perfil.','prof.name':'Nombre','prof.newpass':'Nueva contraseña','prof.newpass_ph':'Dejar vacío para no cambiarla','prof.updated':'Perfil actualizado.',
 'ads.none':'Aún no tienes ningún anuncio.','ads.uncat':'Sin categoría','ads.edit_title':'Editar el anuncio','ads.f_title':'Título','ads.boost':'🚀 Impulsar este anuncio','ads.updated':'Anuncio actualizado.','ads.confirm_del':'¿Eliminar definitivamente este anuncio?','ads.del_err':'Error al eliminar.',
 'msg.none':'Aún no hay conversaciones.','msg.chat':'Conversación','msg.city_unset':'Ciudad no indicada','msg.since':'Miembro desde {d}','msg.active_ads':'{n} anuncio(s) activo(s)','msg.rating':'{avg}/5 ({n} opiniones)','msg.not_rated':'Aún sin valoración','msg.empty':'Aún no hay mensajes.','msg.ph':'Escribe tu mensaje…','msg.send_err':'Error al enviar.',
 'pro.none':'Aún no tienes una ficha profesional.','pro.create':'Crear mi ficha profesional','pro.status':'Estado','pro.plan':'Plan','pro.ads':'Anuncios',
 'pro.f_name':'Nombre de la empresa','pro.f_sector':'Sector','pro.f_zip':'Código postal','pro.f_addr':'Dirección','pro.f_email':'Correo público','pro.f_web':'Sitio web',
 'pro.hours':'Horarios','pro.hours_ph':'Ej.: 9:00 – 18:00','pro.save':'Guardar los cambios','pro.updated':'Ficha profesional actualizada.','pro.view':'Ver mi ficha profesional',
 'day.lundi':'Lunes','day.mardi':'Martes','day.mercredi':'Miércoles','day.jeudi':'Jueves','day.vendredi':'Viernes','day.samedi':'Sábado','day.dimanche':'Domingo',
 'pst.brouillon':'En preparación','pst.actif':'En línea','pst.suspendu':'Suspendida',
 'plan.gratuit':'Descubrimiento','plan.pro':'Pro','plan.business':'Business','plan.entreprise':'Empresa',
 'pd.title':'Crear mi ficha profesional','pd.intro':'Cuéntanos quién eres: preparamos tu página y te la presentamos antes de publicarla. Sin compromiso.',
 'pd.f_ent':'Nombre de la empresa *','pd.f_contact':'Tu nombre *','pd.f_email':'Correo electrónico *','pd.f_plan':'Plan deseado',
 'pd.p_gratuit':'Descubrimiento — gratis','pd.p_pro':'Pro — gratis durante el lanzamiento','pd.p_business':'Business — bajo petición','pd.p_entreprise':'Empresa — con presupuesto',
 'pd.f_vol':'Anuncios en línea hoy','pd.vol_ph':'Ej.: unos treinta, en todas las plataformas','pd.f_msg':'¿Algo más que quieras decirnos?',
 'pd.err_req':'El nombre de la empresa y tu nombre son obligatorios.','pd.sending':'Enviando…','pd.send':'Enviar mi solicitud','pd.done_t':'Solicitud enviada',
 'pd.done_body':'Te responderemos en un plazo de 48 horas laborables para preparar tu ficha profesional.','pd.fail':'El envío no se completó.',
 'sect.0':'Agencia inmobiliaria','sect.1':'Taller / Concesionario','sect.2':'Artesano / Construcción','sect.3':'Comercio','sect.4':'Servicios a empresas','sect.5':'Alquiler vacacional','sect.6':'Otro'
}
};
for (const l in F) Object.assign(I18N[l], F[l]);

// t() avec valeur de repli si la clé n'existe pas (ex. nouveau statut/plan renvoyé par l'API)
window.tx = function(key, fallback){ const s = t(key); return s === key ? (fallback != null ? fallback : key) : s; };
})();