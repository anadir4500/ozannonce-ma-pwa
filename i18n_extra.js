/* Clés supplémentaires : inscription, placeholders, erreurs communes */
(function(){
const X = {
fr:{'reg.nom':'Nom *','reg.prenom':'Prénom','reg.ph_nom':'Nom','reg.ph_prenom':'Prénom','reg.email':'Email *','reg.pass':'Mot de passe * (8 caractères min.)','reg.pass2':'Confirmer le mot de passe *',
 'reg.terms_pre':"J'accepte les ",'reg.terms_link':"conditions d'utilisation",'reg.terms_mid':' et la ','reg.privacy_link':'politique de confidentialité','reg.terms_post':'.',
 'reg.submit':"S'inscrire",'reg.have_account':"J'ai déjà un compte",'reg.signing':'Inscription…','reg.fail':"Erreur lors de l'inscription.",
 'reg.err_name':'Le nom doit contenir au moins 2 caractères.','err.email':'Veuillez entrer un email valide.','err.pass8':'Le mot de passe doit contenir au moins 8 caractères.','err.pass_match':'Les mots de passe ne correspondent pas.','err.terms':"Vous devez accepter les conditions d'utilisation.",
 'reg.done_t':'Compte créé !','reg.done_body':"Un email de confirmation a été envoyé à {email}. Cliquez sur le lien qu'il contient pour activer votre compte, puis connectez-vous.",
 'reg.email_warn':"L'envoi de l'email a peut-être échoué — contactez-nous si vous ne le recevez pas.",'reg.go_login':'Aller à la connexion',
 'ph.city':'Tapez une ville','ph.title':'Ex : Vélo électrique en très bon état','ph.price':'Laisser vide si non précisé','ph.desc':'Décrivez votre bien : état, caractéristiques…'},
en:{'reg.nom':'Last name *','reg.prenom':'First name','reg.ph_nom':'Last name','reg.ph_prenom':'First name','reg.email':'Email *','reg.pass':'Password * (8 characters min.)','reg.pass2':'Confirm password *',
 'reg.terms_pre':'I accept the ','reg.terms_link':'terms of use','reg.terms_mid':' and the ','reg.privacy_link':'privacy policy','reg.terms_post':'.',
 'reg.submit':'Sign up','reg.have_account':'I already have an account','reg.signing':'Signing up…','reg.fail':'Error during registration.',
 'reg.err_name':'The name must contain at least 2 characters.','err.email':'Please enter a valid email.','err.pass8':'The password must contain at least 8 characters.','err.pass_match':'Passwords do not match.','err.terms':'You must accept the terms of use.',
 'reg.done_t':'Account created!','reg.done_body':'A confirmation email has been sent to {email}. Click the link it contains to activate your account, then log in.',
 'reg.email_warn':"The email may not have been sent — contact us if you don't receive it.",'reg.go_login':'Go to login',
 'ph.city':'Type a city','ph.title':'E.g. Electric bike in very good condition','ph.price':'Leave empty if not specified','ph.desc':'Describe your item: condition, features…'},
ar:{'reg.nom':'اللقب *','reg.prenom':'الاسم الشخصي','reg.ph_nom':'اللقب','reg.ph_prenom':'الاسم الشخصي','reg.email':'البريد الإلكتروني *','reg.pass':'كلمة المرور * (8 أحرف على الأقل)','reg.pass2':'تأكيد كلمة المرور *',
 'reg.terms_pre':'أوافق على ','reg.terms_link':'شروط الاستخدام','reg.terms_mid':' و','reg.privacy_link':'سياسة الخصوصية','reg.terms_post':'.',
 'reg.submit':'إنشاء الحساب','reg.have_account':'لدي حساب بالفعل','reg.signing':'جارٍ التسجيل…','reg.fail':'حدث خطأ أثناء التسجيل.',
 'reg.err_name':'يجب أن يحتوي الاسم على حرفين على الأقل.','err.email':'يرجى إدخال بريد إلكتروني صالح.','err.pass8':'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل.','err.pass_match':'كلمتا المرور غير متطابقتين.','err.terms':'يجب قبول شروط الاستخدام.',
 'reg.done_t':'تم إنشاء الحساب!','reg.done_body':'تم إرسال رسالة تأكيد إلى {email}. انقر على الرابط الموجود فيها لتفعيل حسابك، ثم سجّل الدخول.',
 'reg.email_warn':'ربما لم يتم إرسال البريد الإلكتروني — تواصل معنا إذا لم تستلمه.','reg.go_login':'الانتقال إلى تسجيل الدخول',
 'ph.city':'اكتب اسم مدينة','ph.title':'مثال: دراجة كهربائية بحالة ممتازة','ph.price':'اتركه فارغًا إذا لم يُحدَّد','ph.desc':'صف غرضك: الحالة، المواصفات…'},
es:{'reg.nom':'Apellido *','reg.prenom':'Nombre','reg.ph_nom':'Apellido','reg.ph_prenom':'Nombre','reg.email':'Correo electrónico *','reg.pass':'Contraseña * (mín. 8 caracteres)','reg.pass2':'Confirmar contraseña *',
 'reg.terms_pre':'Acepto los ','reg.terms_link':'términos de uso','reg.terms_mid':' y la ','reg.privacy_link':'política de privacidad','reg.terms_post':'.',
 'reg.submit':'Registrarse','reg.have_account':'Ya tengo una cuenta','reg.signing':'Registrando…','reg.fail':'Error durante el registro.',
 'reg.err_name':'El nombre debe tener al menos 2 caracteres.','err.email':'Introduce un correo electrónico válido.','err.pass8':'La contraseña debe tener al menos 8 caracteres.','err.pass_match':'Las contraseñas no coinciden.','err.terms':'Debes aceptar los términos de uso.',
 'reg.done_t':'¡Cuenta creada!','reg.done_body':'Se ha enviado un correo de confirmación a {email}. Haz clic en el enlace que contiene para activar tu cuenta y luego inicia sesión.',
 'reg.email_warn':'Puede que el correo no se haya enviado — contáctanos si no lo recibes.','reg.go_login':'Ir al inicio de sesión',
 'ph.city':'Escribe una ciudad','ph.title':'Ej.: Bicicleta eléctrica en muy buen estado','ph.price':'Dejar vacío si no se especifica','ph.desc':'Describe tu artículo: estado, características…'}
};
for (const l in X) Object.assign(I18N[l], X[l]);
})();