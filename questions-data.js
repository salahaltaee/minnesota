const allQuestions = [
  [
    "احب قراءة المقالات المتعلقه بالميكانيكا",
    "شهيتى للطعام جيده",
    "استيقظ فى معظم الايام نشطا ومرتاحا",
    "افضل ان اعمل كأمين مكتبه",
    "من السهل ان توقظنى الاصوات من نومى",
    "احب قراءة المقالات المتعلقه بالجرائم",
    "يداى وقدماى دافئة فى العادة",
    "حياتى اليومية مليئة بما يثير اهتمامى",
    "قدرتى على العمل هى هى لم تتغير عما كانت عليه من قبل",
    "اشعر كأن شيئاً يقف فى حلقى معظم الوقت"
  ],
  [
    "يجب أن يحاول الشخص أن يفهم أحلامه وأن يتخذ منها دليلا يرشده أو نذيرا يحذره",
    "استمتع بقراءة الروايات البوليسية",
    "عندما اؤدى عملى اكون فى حالة توتر شديد",
    "اصاب بالاسهال مرة فى الشهر أو أكثر",
    "افكر من حين لآخر فى اشياء هى من القبح بحيث لا يمكن التحدث عنها",
    "لاشك فى اننى مظلوم فى هذه الحياة",
    "والدى رجل طيب",
    "قليلا ما اصاب بالامساك",
    "عندما اتسلم عملا جديدا أحب أن اعرف من هو الشخص الذى اليه فى المركز",
    "اننى قانع بحياتى الجنسية كما هى الآن"
  ],
  [
    "تعاودنى رغبة شديدة احيانا فى ان اترك اسرتى وابتعد عنها",
    "تنتابنى احيانا نوبات من الضحك والبكاء لا استطيع مقاومتها",
    "اصاب احيانا بنوبات من الغثيان والقئ",
    "يبدو انه لا يوجد من يفهمنى",
    "أود ان أكون مغنياً",
    "اشعر عندما أكون فى مأزق أن من الافضل لى الا اتكلم",
    "تسيطر علىّ روح الشر فى بعض الاحيان",
    "عندما يسئ الى أحد أشعر بأن من الواجب أن ارد الاساءة بالاساءة",
    "اصاب بحموضة المعدة بشكل يضايقنى عدة ايام فى الاسبوع",
    "اشعر احيانا برغبه فى السب"
  ],
  [
    "تنتابنى الاحلام المزعجة مرة كل عدة ليالى",
    "أجد صعوبة فى ان اركز ذهنى فى عمل أو مهمة",
    "مررت بخبرات فى منتهى العجب والغرابة",
    "تنتابنى الكحة فى معظم الاوقات",
    "لو لم يضمر لى الناس العداوة لكنت أكثر نجاحا بكثير مما انا عليه",
    "قليلا ما ينتابنى القلق على صحتى",
    "لم يحدث لى قط اى اشكال بسبب سلوكى الجنسى",
    "ارتكبت بعض السرقات البسيطة فى فترة ما عندما كنت صغيراً فى السن",
    "اشعر احيانا برغبة فى تحطيم الاشياء",
    "افضل فى جميع الاوقات أن أجلس واسترسل فى احلام اليقظة على أن اقوم بأى عمل آخر"
  ],
  [
    "مرت بى فترات تقدر بالأيام وأحيانا بالأسابيع أو الاشهر فقدت فيها القدرة على الاهتمام بما حولى وذلك لأننى لم استطع مواصلة نشاطى",
    "اسرتى لا تميل الى العمل الذى اخترته",
    "نومى مضطرب وقلق",
    "اشعر فى معظم الاوقات بالآم فى جميع اجزاء رأسى",
    "لا اقول الصدق دائماً",
    "حكمى على االامور الآن افضل منه فى اى وقت مضى",
    "اشعر كل اسبوع أو أقل بسخونه تعم جسمى فجأه وذلك دون سبب ظاهر",
    "عندما أكون مع الناس يضايقنى أن اسمع أشياء جد غريبه",
    "حبذا لو تلغى معظ القوانين",
    "أشعر فى بعض الاحيان بأن روحى تفارق جسدى"
  ],
  [
    "صحتى الجسمية كصحة معظم أصدقائى فى الجودة",
    "أفضل أن أتجاهل أصداقاء المدرسة أو المعارف الذين لم أرهم منذ مدة طويلة الا إذا بادرونى هم بالكلام",
    "أعتقد أن رجل الدين يستطيع أن يشفى الأمراض عن طريق الصلاة ووضع يده على رأس المريض",
    "إن معظم الذين يعرفوننى يحبوننى",
    "لا تكاد تنتابنى أية آلام فى القلب أو فى الصدر",
    "عندما كنت صغيراً، فصت من المدرسة مرة أو أكثر بسبب تمردى وعصيانى",
    "اننى سهل الاختلاط بالناس",
    "اعتقد أن كل شئ يحدث وفقاً لما ذكره الأنبياء والرسل",
    "غالباً ما اضطررت إلى أن أتلقى أوامر ممن هو أقل منى معرفه",
    "لا اقرأ كل مقال افتتحاى فى الجريدة اليومية"
  ],
  [
    "لم أعش الحياة الصحيحة التى كان يجب أن أعيشها",
    "كثيراً ما أشعر فى بعض أجزاء جسمى بما يشبه الإحتراق أو القشعريرة أو التنميل او التخدير",
    "لم يحدث أن وجدت أية صعوبة فى ضبط عملية التبرز",
    "أثابر أحياناً على القيام بعمل ما إلى أن يفقد الآخرون صبرهم معى",
    "أحب والدى",
    "أرى حولى أشياء وحيوانات وناس لا يراهم غيرى",
    "أتمنى لو كنت سعيداً كما يبدو الآخرون",
    "لم يحدث لى تقريباً أن شعرت بألم فى خلف العنق",
    "أفضل دائما أن أكون مع أفراد فى نفس جنسى",
    "أحب أن أجتذب أفراد الجنس الآخر"
  ],
  [
    "أعتقد أن كثيراً من الناس يبالغون فى تصوير سوء حظهم كى ينالوا عطف الآخرين ومساعدتهم",
    "تنتابنى آلام فى المعدة كل بضعة أيام قلائل",
    "أعتقد أننى شخص مهم",
    "كثيراً ما وودت أن أكون بنتاً (وإذا كان المجيب أنثى: لم آسف أبداً على أننى خلقت بنتاً)",
    "ينتابنى الغضب أحياناً",
    "أشعر بالحزن والإنقباض فى معظم الأوقات",
    "أحب قراءة القصص الغرامية",
    "أحب الشعر",
    "ليس من السهل أن يجرح أحد شعورى",
    "أعاكس الحيوانات أحياناً"
  ],
  [
    "أميل إلى الأعمال الخشنة كالعمل فى الحقول والغابات",
    "من السهل أن أهزم فى المناقشة",
    "أعتقد أن هناك فرصة كبيرة للنجاح أمام كل شخص يستطيع أن يعمل بجد ويرغب فى ذلك",
    "أجد من الصعب على فى هذه الأيام أن أظل محتفظاً بأملى فى أننى سأرتقى",
    "أعجب إعجابا شديداً فى بعض الأحيان بالممتلكات الشخصية للآخرين الأحذية والقفازات الخ ..... لدرجة أننى أرغب فى العبث بها أو سرقتها بالرغم من أنها لا تصلح لى",
    "من المؤكد اننى قليل الثقة بنفسى",
    "أحب أن أكون بائع زهور",
    "أشعر على وجه العموم أن الحياة لها قيمة",
    "إقناع الناس بالصواب يتطلب مجهوداً كبيراً.",
    "أؤجل إلى الغد فى بعض الأحيان ما يجب أن أعمله اليوم"
  ],
  [
    "لا يضيرنى أن أكون موضوع مزاح",
    "أحب أن أشتغل بالتمريض",
    "أعتقد أن معظم الناس مستعدون لأن يكذبوا فى سبيل التفوق على غيرهم",
    "أعمل أشياء كثيرة أندم عليها فيما بعد",
    "أتردد على أماكن العبادة كل اسبوع تقريباً",
    "مشاجراتى قليلة جداً مع أفراد عائلتى",
    "تنتابنى أحياناً رغبة جامحة فى القيام بعمل يضر الآخرين أو يصدمهم",
    "أعتقد فى مجئ المهدى المنتظر أو فى عودة المسيح",
    "أحب أن أذهب إلى الحفلات أو الإجتماعات الأخرى التى أجد فيها الكثير من اللهو والصخب",
    "قابلت مشكلات لم استطع أن أقرر شيئاً بشأنها لكثرة ما كان لها من حلول"
  ],
  [
    "أعتقد أنه يجب أن يكون للمرأة من الحرية الجنسية مثل ما للرجل",
    "أشد المعارك عندى هى المعركة بينى وبين نفسى",
    "لا أشكو تقلصاً فى العضلات وإن فعلت فنادراً",
    "يبدو أننى لا اهتم بما يحدث لى",
    "يضايقنى أحياناً أن تسوء صحتى",
    "أشعر فى معظم الأحيان أننى قد ارتكبت خطأ أو أتيت شراً",
    "أشعر بالسعادة فى معظم الأوقات",
    "أشعر معظم الوقت بأن رأسى على وشك الإنفجار",
    "بعض الناس يصل حبهم للسيطرة إلى درجة أشعر معها برغبة فى مخالفتهم حتى ولو كان على حق",
    "بعض الناس يضمر لى فى نفسه شيئاً"
  ],
  [
    "لم أقم قط بعمل فيه خطر لمجرد الإثارة التى تترتب على ذلك",
    "غالباً ما أجد من الضرورى أن أدافع عما أعتقد أنه صواب",
    "أعتقد أنه من الواجب أن تفرض القوانين على الناس فرضاً",
    "أشعر غالباً بضغط شديد حول رأسى",
    "أعتقد فى الحياة الآخرة",
    "يزداد إستمتاعى بالمسابقات أو المبارايات عندما أراهن عليها",
    "أعتقد أن الناس أمناء لخوفهم أن يكتشف أمرهم",
    "كنت أحول إلى الناظر أحياناً بسبب تغيبى عن المدرسة",
    "لم يتغير صوتى عما كان عليه فلم يعد أسرع أو أبطاً أو أكثر حشرجة أو أحسن من ذى قبل",
    "لا أهتم بمراعاة آداب المائدة فى منزلى كما اهتم بمراعتها خارج المنزل"
  ],
  [
    "أعتقد أن هناك مؤامرة تدبر ضدى",
    "يبدو إننى لا أقل نباهة أو قدرة عن معظم الناس المحيطين بى",
    "أعتقد أن هناك من يتتبعنى",
    "معظم الناس يستخدمون وسائل ملتوية للحصول على كسب أو منفعة بدلاً من أن يتركوا الفرصة تضيع عليهم",
    "كثيراً ما تتعبنى معدتى",
    "أحب الروايات العاطفية العنيفة",
    "إننى أعرف من هو المسئول عن معظم متاعبى",
    "رؤية الدم لا تسبب لى الرعب",
    "لا أستطيع أن أرى فى أغلب الأحيان سبباً غضبى أو نقمتى على الحياة",
    "لم يحدث أن تقيأت دماً او سعلت دماً"
  ],
  [
    "لا تقلقنى فكرة الاصابة بالمرض",
    "أحب جمع الزهور وتربية النباتات المنزلية",
    "لم يحدث أن انغمست فى عادة من العادات الجنسية الشاذة",
    "تتوارد الأفكار فى ذهنى أحياناً بأسرع مما أستطع أن أعبر به",
    "من الجائز أن أدخل السينما دون أن أدفع ثمن التذكرة إذا تأكدت من أن أحداً لن يرانى",
    "غالباً ما أتساءل عن الأسباب المستترة التى تدفع الآخرين إلى معونتى",
    "أعتقد أن حياتى المنزية تعادل من حيث السعادة حياة معظم الناس الآخرين الذين أعرفهم",
    "النقد أو اللوم يجرحان شعورى إلى حد كبير",
    "أشعر فى بعض الأحيان كما لو كان من الضرورى أن أؤذى نفسى أو أى شخص آخر",
    "أحب أن أقوم بطهى الطعام"
  ],
  [
    "تحدد سلوكى إلى حد كبير التقاليد المحيطة بى",
    "أشعر فى بعض الأحيان شعوراً قوياً أننى عديم الفائدة",
    "كنت أنتمى فى طفولتى إلى جماعة (شلة) اتفقت على أن تتحد فى السراء والضراء",
    "أود أن التحق بالجيش",
    "أشعر أحياناً برغبة فى الاشتباك بالأيدى مع أى شخص",
    "تنتابنى رغبة ملحة فى التجول بحيث لا أشعر بالسعادة إلا عندما أنفذ هذه الرغبة فأتجول أو أسافر",
    "فقدت كثيراً من الفرص لأنى لم أستطع أن أبت فى الأمور بصورة قاطعة",
    "إننى أفقد صبرى إذا ما قاطعنى الناس أثناء إشتغالى بأمر هام",
    "من عاداتى ان أكب يومياتى",
    "أفضل الكسب على الخسارة فى اللعب"
  ],
  [
    "أعتقد أن بعض الناس يحاول أن يدس السم لى",
    "أنام فى معظم الليالى دون أن تضايقنى الأفكار",
    "كانت صحتى فى خلال السنوات القليلة الماضية جيدة على وجه العموم",
    "لم أصب مطلقاً بأية نوبة",
    "وزنى لا يزيد ولا ينقص",
    "مرت بى فترات كنت أقوم فيها بأفعال دون أن أعرف بعد ذلك ماذا كنت أفعل",
    "أشعر بأننى كثيراً ما عوقبت دون سبب",
    "أبكى بسهولة",
    "لم أعد أفهم ما أقرأ بنفس الدرجة التى كنت أفهم بها سابقاً",
    "لم أشعر فى يوم من الأيام بأننى أحسن مما أنا عليه الآن"
  ],
  [
    "أشعر أحياناً أن قمة رأسى رخوة (طرية)",
    "لا أقبل أن يستغلنى أحد إلى الحد الذى لا أجد معه مفراً من أن أعترف بذلك",
    "لا أتعب بسرعة",
    "حب أن أدرس الأشياء التى أشتغل بها وأن أقرأ عنها",
    "أحب أن أتعرف على الناس المهمين لأن ذلك يشعرنى بالأهمية",
    "أخاف عندما أطل من مكان عالِ",
    "لا يثيرنى أن يقع أحد أفراد عائلتى فى مأزق بسبب مخالفته للقانون",
    "أشعر أن عقلى مختل",
    "لا أخشى التعامل بالنقود",
    "لا يهمنى ما يظنه الناس عنى"
  ],
  [
    "يضايقنى أن أقوم بدور المهرج فى حفلة حتى ولو كان الأخرون يقومون بنفس الشئ",
    "كثيراً ما أضطر إلى أن أبذل مجهوداً كبيراً لأخفى ما قد يظهر من خجلى",
    "أحب المدرسة",
    "لم يحدث لى قط أن أغمى علىّ",
    "قلما حدث أن أصبت بدوخه",
    "لا أخاف الثعابين كثيراً",
    "أمى سيدة طيبة",
    "يبدو أن ذاكرتى لا بأس بها",
    "الأمور الجنسية تثير عندى القلق",
    "أجد صعوبة فى التحدث مع الناس إذا كانت معرفتى بهم حديثة"
  ],
  [
    "أشعر برغبة فى القيام بعمل مثير حين ينتابنى السأم أو الملل",
    "أخشى أن يطير صوابى",
    "إننى ضد مسألة إعطاء النقود للشحاذين",
    "أسمع فى العادة أصواتاً دون أن أعرف مصدرها",
    "سمعى لا يقل جودة عن سمع معظم الناس",
    "غالباً ما ألاحظ أن يداى ترتجفان عندما أحاول أن أقوم بعمل ما",
    "لم يحدث أن فقدت يداى إتزانهما أو مهارتهما",
    "أستطيع القراءة مدة طويلة دون أن تتعب عيناى",
    "أشعر فى معظم الأوقات بضعف عام",
    "قليلاً ما أصاب بالصداع"
  ],
  [
    "إننى أتصبب عرقاً عندما أحرج فى بعض الأحيان",
    "لم يحدث أن وجدت صعوبة فى حفظ توازنى فى المشى",
    "لا أشكو من نوبات الربو أو نوبات الزكام",
    "تحدث لى نوبات لا أستطيع فيها أن أسيطر على حركاتى أو على كلامى وإن كنت أشعر بما يدور حولى",
    "ليس كل من أعرفه أحبه",
    "أحب أن أزور الأماكن التى لم تسبق لى رؤيتها",
    "يحاول بعض الناس أن ينهبنى",
    "قليلاً ما أستغرق فى أحلام اليقظة",
    "يجب أن يتعلم الأطفال جميع الحقائق المتعلقة بالنواحى الجنسية",
    "أعتقد أن هناك من يحاول أن يسرق أفكارى أو نتائج أعمالى"
  ],
  [
    "أتمنى لو لم أكن خجولاً إلى هذا الحد",
    "أعتقد أننى شخص منحوس",
    "إذا كنت صحفياً فإننى أحب أن أنقل أخبار الدوائر المسرحية",
    "أود أن أكون صحفياً",
    "مرت على أوقات كان من المستحيل علىّ فيها أن أمنع نفسى عن سرقة أو خطف شئ",
    "أعتقد أننى أشد تديناً من معظم الناس",
    "أجد متعة فى أنواع كثيرة من الألعاب ووسائل الترويح",
    "أحب أن أغازل الجنس الآخر",
    "أعتقد أن ذنوبى لا يمكن أن تغفر",
    "كل شئ فى نظرى سواء"
  ],
  [
    "أستطيع أن أنام أثناء النهار ولكن ليس أثناء الليل",
    "أهلى يعاملونى كما يعامل الطفل لا كما يعامل الراشد",
    "أتحاشى أثناء المشى على رصيف الشارع مثلاً أن تسقط قدمى فى الشقوق الموجودة بين كل حجر وآخر",
    "لم يحدث أن أصبت بطفح جلدى سبب لى قلقاً",
    "تعاطيت المشروبات الروحية (الخمر) بكثرة",
    "هناك قليل جداً من الحب والتآخى فى عائلتى إذا قورنت بالعائلات الأخرى",
    "غالباً ما أجد نفسى ققاً على أمر من الأمور",
    "لا يضايقنى أن أرى الحيوانات تتعذب",
    "أود أن اكون مقاول مبانى",
    "أحب والدتى"
  ],
  [
    "أحب العلوم",
    "لا أجد صعوبة فى طلب المعونة من أصدقائى حتى ولو كنت لا أستطيع رد الجميل",
    "أحب الصيد حباً شديداً",
    "كثيراً ما اعترض والدى على نوع الأشخاص الذين أرافقهم",
    "أحب أن أدردش قليلاً من حين لآخر",
    "بعض أفراد اسرتى لهم عادات تضايقنى مضايقة شديدة",
    "قيل لى أننى أمشى أثناء النوم",
    "أشعر أحياناً أننى استطيع أن اتخذ القرارات بسهولة غير عادية",
    "أود الانتماء إلى أندية وهيئات عديدة",
    "لم يحدث لى قط أن شعرت بشدة خفقان قلبى أو اصبت بضيق فى التنفس"
  ],
  [
    "أحب التحدث فى الأمور الجنسية",
    "الهمت خطة فى الحياة تقوم على اساس أداء الواجب ولا أزال أتبعها بدقة",
    "أحياناً ما اعترضت طريق بعض الناس ومنعتهم من القيام بأعمال معينة لا لشئ إلا المبدأ",
    "أغضب بسهولة ولكن سرعان ما أعود إلى حالتى الطبيعية",
    "نشأت مستقلاً تمام الاستقلال ومتحرراً من سلطة العائلة",
    "كثيراً ما استغرق فى التفكير",
    "جميع أقاربى تقريباً يعطفون علىّ",
    "تمر بى فترات من عدم الاستقرار بحيث لا استطيع أن امكث طويلاً فى مقعدى",
    "فشلت فى الحب",
    "لا اهتم مطلقاً بمظهرى"
  ],
  [
    "أحلم عادة بأشياء أفضل أن احتفظ بها لنفسى",
    "لست عصبياً بدرجة أكبر مما عليه معظم الناس",
    "لا أشكو من آلام إلا قليلاً جداً لدرجة العدم",
    "يسئ الآخرون عادة فهم طريقتى فى التصرف",
    "والدى وعائلتى يبالغون فى تصوير عيوبى",
    "تظهر حبوب حمراء على رقبتى فى معظم الأوقات",
    "عندى من الأسباب ما يجعلنى أعارض بعض أفراد عائلتى",
    "أحياناً أشعر بسعادة وانشراح عظيمين بدون أى سبب، بل وعندما تكون الأمور سائرة على غير ما أشتهى",
    "أعتقد بوجود الشياطين ووجود الجحيم فى الحياة الأخرى",
    "لا ألوم أى شخص يحاول أن يحصل لنفسه على ما يمكن أن تقع عليه يداه فى هذا العالم"
  ],
  [
    "تصيبنى نوبات يتوقف فيها نشاطى ولا أشعر فيها بما يدور حولى",
    "أعتقد أن الناس لا يعبأون بما يحدث للآخرين",
    "أستطيع أن أبقى صلتى بأولئك الذين تصدر منهم أفعال أعتبرها خطأ",
    "أحب أن أكون مع مجموعة من الأشخاص يتبادل أفرادها النكات",
    "قد يحدث أن أعطى صوتى أحياناً لأشخاص لا أعرف عنهم إلا القليل",
    "الشئ الوحيد الذى يثير اهتمامى فى الجرائد أو المجلات هو الجزء الفكاهى",
    "أتوقع عادة أن أنجح فيما أقوم به",
    "أعتقد بوجود الله",
    "أجد من الصعب على أبدأ عملاً من الأعمال",
    "كنت فى متأخراً فى دراستى"
  ],
  [
    "لو كنت فناناً لوددت أن أرسم الزهور",
    "لا يضايقنى أننى لست أحسن شكلاً مما أنا عليه",
    "أعرق بسهولة حتى فى الجو البارد",
    "أنا واثق كل الثقة فى نفسى",
    "من الأسلم ألا يثق الانسان بأحد",
    "يهتاج شعورى مرة أو أكثر فى الاسبوع",
    "أجد صعوبة فى التفكير فى موضوعات مناسبة للحديث عندما أكون وسط مجموعة من الناس",
    "غالباً ما ينقذنى شئ مثير من حالات الانقباض التى أقع فيها",
    "يمكن بسهولة أن أخيف الناس منى وأفعل أحياناً ذلك للتسلية",
    "عندما أغادر المنزل لا ينتابنى الضيق أو الشك فى أن أكون قد تركت النوافذ مفتوحة أو الباب غير مغلق"
  ],
  [
    "إننى لا ألوم أى شخص يتسغل من يعرض نفسه للإستغلال",
    "أشعر فى بعض الأحيان أننى مملوء نشاطاً",
    "أفقد الاحساس فى منطقة أو أكثر من جلدى",
    "لم يضعف بصرى عما كان عليه من عدة سنوات",
    "أشعر أن شخصاً ما يسيطر على عقلى",
    "أجد متعة كبيرة مع الأطفال",
    "أعجب أحياناً بمهارة بعض النصابين لدرجة أننى أرجو لهم النجاح فيما يقومون به",
    "غالباً ما أشعر أن بعض الغرباء ينظرون إلى بعين النقد",
    "أشرب من الماء يومياً مقادير كبيرة بشكل غير عادى",
    "معظم الناس يكونون صداقاتهم على أساس احتمال الإفادة من أصدقائهم"
  ],
  [
    "لا أشعر غالباً بطنين أو رنين فى أذنى",
    "أشعر من حين لآخر بكراهية نحو أفراد أسرتى التى أحبها فى العادة",
    "لو كنت مخبراً صحفياً لوددت أن أنقل أخبار الرياضة",
    "إننى واثق من أن الناس يتكلمون عنى",
    "أضحك أحياناً من النكت التى قد تخرج عن حدود اللياقة",
    "إننى أسعد ما أكون عندما أكون وحيداً",
    "مخاوفى قليلة إذا قورنت بمخاوف أصدقائى",
    "تزعجنى نوبات من الإغماء والقئ",
    "يزداد اشمئزازى من القانون كلما وجدت بعض المجرمين قد نجا بفضل مهارة محامٍ قدير",
    "إننى أعمل تحت توتر عصبى عنيف"
  ],
  [
    "حدث أحياناً أن شعرت بأن شخصاً ما يدفعنى إلى القيام بأعمال عن طريق تنويمى",
    "لا أبدأ الناس عادة بالحديث ما لم يبدأونى هم",
    "أشعر أن شخصاً ما يحاول أن يؤثر على عقلى",
    "لم يحدث قط أن أصطدمت بالقانون",
    "أحب القصص الخيالية",
    "تمر على فترات أشعر فيها بانشراح دون ما سبب ظاهر",
    "أتمنى ألا تضايقنى الأفكار الجنسية",
    "إذا وجدت مجموعة من الناس أنها فى مأزق فالأفضل أن يتفقوا على قصة واحدة ويلتزموها جميعاً",
    "أعتقد أننى أعمق شعوراً من معظم الناس",
    "لم أحب فى أى فترة من فترات حياتى أن ألعب بالعرائس"
  ],
  [
    "الحياة صعبة لى فى معظم الأحيان",
    "لم يحدث أن وقعت فى مأزق لأسباب تتعلق بالسلوك الجنسى",
    "إننى شديد الحساسية بالنسبة لبعض الموضوعات لدرجة لا أستطيع التحدث فيها",
    "كنت أجد وأنا فى المدرسة أن من الصعب على أن أتحدث أمام الفصل",
    "أشعر فى معظم الأيام بالوحدة حتى ولو كنت مع آخرين",
    "إننى حاصل على كل ما أستحقه من العطف",
    "أرفض الإشتراك فى بعض الألعاب التى لا أجيدها",
    "أرغب بشدة أحياناً فى مغادرة المنزل",
    "أشعر بأننى أكوّن صداقاتى بنفس السرعة التى يكون بها الآخرون صداقاتهم",
    "إننى راضِ عن حياتى الجنسية بوجه عام"
  ],
  [
    "أرتكبت بعض السرقات البسيطة عندما كنت طفلاً صغيراً",
    "أكره وجود الناس حولى",
    "أعتقد أن الشخص الذى يترك أشياء ثمينة عرضة للسرقة يستحق من اللوم بقدر ما يستحقه اللص الذى يسرقها",
    "أفكر من حين لآخر فى أشياء من القبح بحيث لا يصح التحدث عنها",
    "أنا واثق من إننى مظلوم فى هذه الحياة",
    "أعتقد أن كل شخص تقريباً قد يكذب ليتجنب الوقوع فى المآزق",
    "إننى أكثر حساسية من معظم الناس",
    "حياتى اليومية مملوءة بما يثير اهتمامى",
    "معظم الناس يكره فى قرارة نفسه أن يساعد الآخرين",
    "كثير من أحلامى يتعلق بالأمور الجنسية"
  ],
  [
    "من السهل أن أحرج",
    "المال والعمل يثيران القلق عندى",
    "مررت بخبرات غاية فى الغرابة",
    "لم أقع فى حب أى شخص",
    "إن ما قام به بعض أفراد أسرتى أثار فى الفزع",
    "تعترينى من حين لآخر نوبات من الضحك والبكاء لا أستطيع السيطرة عيها",
    "كان أبى أو أمى يرغمنى عى الطاعة حتى ولو كنت أعلم أن الأمر الذى أطيعه غير معقول",
    "أجد صعوبة فى أن أركز ذهنىفى عمل او مهمة ما",
    "أحياناً ما أفقد قدرتى على الكلام أو يتغير صوتى حتى ولو لم أكن مصاباً ببرد",
    "لم يحدث أن أصبت بالشلل أو أصيبت عضلاتى بأى ضعف غير عادى"
  ],
  [
    "لو لم يضمر لى الناس العداوة لكنت أكثر نجاحاً بكثير مما أنا عليه الآن",
    "أحياناً ما يحتبس صوتى أو يتغير حتى لو لم أكن مصاباً ببرد",
    "يبدو أنه لا يوجد من يفهمنى",
    "أشم أحياناً روائح غريبة",
    "لا أستطيع أن أركز ذهنى فى موضوع واحد",
    "من السهل أن ينفذ صبرى مع الناس",
    "غالباً ما أشعر بالقلق على شئ أو شخص ما",
    "لا شك فى أن نصيبى من الأشياء المسببة للقلق فى هذه الحياة كان كبيراً",
    "أتمنى الموت فى معظم الأحيان",
    "يتهيج شعورى فى بعض الأحيان لدرجة أنه يتعذر علىّ النوم"
  ],
  [
    "يصبح سمعى أحياناً مرهفة لدرجة تضايقنى",
    "أنسى ما يقال لى فى الحال",
    "غالباً ما أتوقف وأفكر قبل أن أعمل حتى فى الأمور التافهة",
    "غالباً ما أعبر الطريق لاتحاشى مقابلة شخص ما",
    "أشعر أحياناً أن الأشياء ليست حقيقة واقعة",
    "عندى عادة عد الأشياء غير الهامة كلمات الكهرباء فى الطريق أو ما إلى ذلك",
    "ليس لى أعداء يريدون ضررى",
    "أميل إلى الحذر من الناس الذين يظهرون صداقة أكثر مما توقعت",
    "عندى أفكار غريبة غير عادية",
    "أسمع أصواتاً غريبة عندما أكون بمفردى"
  ],
  [
    "أقلق وأضطرب عندما أضطر إلى القيام برحلة صغيرة بعيداً عن المنزل",
    "حدث أن خفت من أمور أو من أشخاص كنت أعلم أنهم لا يستطيعون ان يضرونى",
    "لا أشعر بخوف من الدخول بمفردى فى حجرة بها أناس يتحدثون",
    "أخاف أن أستخدم سكيناً أو أى شئ حاد أو مدبب",
    "أجد متعة أحياناً فى إيذاء الأشخاص الذين أحبهم",
    "أجد صعوبة فى تركيز تفكيرى",
    "حدث أن امتنعت عدة مرات عن القيام بعمل ما لاعتقادى بضعف قدرتى على القيام به",
    "تطرأ على فكرى أحياناً فكرة تافهة وتظل تضايقنى عدة أيام",
    "يحدث فى كل يوم تقريباً ما يسبب لى الفزع",
    "أميل إلى أن آخذ الأشياء مأخذ الجد"
  ],
  [
    "إننى أكثر حساسية من معظم الناس",
    "حدث أحياناً أن استمتعت بإيذاء بعض أحيائى لى",
    "يقول الناس عنى أشياء مهينة ووضيعة",
    "لا أشعر بارتياح داخل المنزل",
    "أشعر فى معظم الآحيان بالوحدة حتى ولو كنت مع آخرين",
    "لو أعطيت الفرصة لاستطعت أن أقوم بأعمال جليلة الفائدة للعالم",
    "غالباً ما قابلت أشخاصاً من المفروض أنهم خبراء ولكنهم لم يكونوا أحسن منى",
    "عند سماعى بنجاح شخص أعرفه معرفة جيدة أشعر كما لو كان نجاحه فشلاً بانسبة لى",
    "لو أعطيت الفرصة لأصبحت زعيماً نافعاً للناس.",
    "لست أكثر حساسية من المعتاد"
  ],
  [
    "يخجلنى سماع الحكايات القبيحة",
    "يطلب الناس عادة أن تحترم حقوقهم بدرجة تفوق استعدادهم لاحترام حقوق الآخرين",
    "يبدو أحياناً أن عقلى يعمل ببطء أكثر من المعتاد",
    "أحاول أن أتذكر القصص المسلية لأرويها للآخرين",
    "أحب أن أقوم بمراهنات على مبالغ صغيرة",
    "فى الحفلات أميل إلى أن اكون بمفردى أو مع شخص واحد فقط بدلاً من أن أنضم إلى مجموعة كبيرة",
    "استمتع بالاجتماعات لمجرد رغبتى فى الوجود مع الناس",
    "استمتع بهياج الجماهير",
    "يبدو أن قلقى يزول عندما أوجد مع جماعة من الأصدقاء المرحين",
    "إننى لا أشارك الجماعة التى أنتمى اليها فى الكثير من الكلام أو الحديث عن الحديث"
  ],
  [
    "أجد من الصعب علىّ أن أتخلى ولو لفترة قصيرة عن عمل بدأته",
    "يخيب الناس عادة ظنى أو رجائى",
    "لا أجد صعوبة فى بدء التبول أو فى ضبطه",
    "كثيراً ما وجدت الناس يغارون من أفكارى الجيدة لمجرد أنهم لم يكونوا أسبق منى فى الوصول إليها",
    "أتحاشى قدر إمكانى أن أوجد وسط الجماهير",
    "لا يضيرنى أن أقابل الغرباء",
    "أميل إلى ترك ما أريد أن أفعله، إذا رأى الآخرون أنه أمر لا يستحق التنفيذ",
    "عندما أركب فى القطارات أو فى السيارات العامة فإننى أتحدث عادة إلى الركاب",
    "أشعر برغبة فى التسليم بسرعة عندما تسوء الأمور",
    "أحب الذهاب إلى حفلات الرقص"
  ],
  [
    "أحب أن أُعرف الناس بموقفى من الأمور",
    "مرت علىّ فترات كنت أشعر فيها بنشاط زائد لدرجة أننى لم أكن أشعر بحاجة إلى النوم لمدة أيام",
    "لا أشعر بحرج عندما أكون فى مجتمع ويطلب إلى أن أبدأ مناقشة أو أبدى رأيى فى شئ أعرفه معرفة جيدة",
    "أحب الاجتماعات والحفلات",
    "لا استطيع أو أواجه أزمة او صعوبة",
    "مرت بى فترات شعرت فيها بأن المشكلات قد أخذت تتراكم بشكل تعذر معه حلها",
    "كثيراً ما قلت لنفسى ياليتنى عدت طفلا مرة أخرى",
    "أتذكر أننى كنت أتصنع المرض لأنقذ نفسى من بعض المآزق",
    "أخاف من النار",
    "لا أخاف من الماء"
  ],
  [
    "أتريث عادة قبل البت فى أى من الأمور",
    "عظيم أن يعيش الانسان فى هذه الأيام التى تكثر فيها الأحداث",
    "كثيراً ما يسئ الناس فهم نواياى عندما أحاول أن أرشدهم أو أن أساعدهم",
    "لا أجد صعوبة فى بلع الطعام",
    "أحياناً ما أتحاشى شخصاً لأننى أخشى أن أفعل أو أقول شيئاً أندم عليه فيما بعد",
    "من عاداتى أن أكون هادئاً وليس من السهل استثارتى",
    "أستطيع أن اخفى ما أحس به إلى درجة أن بعض الناس قد يجرح شعورى دون أن يعلم ذلك",
    "أتعب نفسى أحياناً بسبب تحملى عملاً فوق طاقتى",
    "إنه يسرنى حقاً أن أتغلب على نصاب فى نفس الشئ الذى تخصص فيه",
    "لست قلقاً من الناحية الدينية"
  ],
  [
    "لا أخاف من زيارة الطبيب للكشف علىّ فى حالة المرض أو الإصابة",
    "أستحق أن أعاقب عقاباً شديداً عى ما ارتكبته من آثام",
    "تؤثر فى الخبرات المؤلمة لدرجة أننى لا أستطيع ان أطردها من ذهنى",
    "لا أحب أن اضطر للإسراع فى عملى",
    "يضايقنى أن يلاحظنى شخص ما أثناء العمل حتى ولو كنت أعرف أننى أستطيع أن أقوم بهذا العمل على اوجه الأكمل",
    "أتضايق عندما يحاول أحد أن يتخطى دورى لدرجة اننى لا أتمالك إلا أن أحدثه فى ذلك",
    "أعتقد فى بعض الأحيان أنه لا فائدة منى على وجه الاطلاق",
    "كثيراً ما هربت من المدرسة عندما كنت طفلاً",
    "مرت بى حالات دينية غريبة",
    "واحد أو أكثر من أفراد أسرتى عصبى جداً"
  ],
  [
    "أشعر بالحرج بسبب المهنة التى يشتغل بها واحد أو أكثر من أفراد أسرتى",
    "إننى من هواة صيد السمك",
    "أشعر بجوع معظم الوقت",
    "أحلم كثيراً",
    "أضطر أحياناً إلى أن أكون فظاً مع الأشخاص غير المؤدبين أو الذين يضايقون غيرهم",
    "أميل إلى الاهتمام بعدة هوايات مختلفة فى الوقت الواحد بدلاً من أن أتعلق بواحدة منها فقط لمدة طويلة",
    "أحب أن أقرأ المقالات الافتتاحية فى الصحف",
    "أحب أن أحضر المحاضرات التى تعالج مسائل جدية",
    "يجذبنى أفراد الجنس الآخر",
    "إن ما أتوقعه لنفسى من حظ عاثر يقلق بالى إلى حد كبير"
  ],
  [
    "أعتنق بشدة بعض الآراء السياسية",
    "كان لى فيما مضى رفاق من صنع الخيال",
    "أحب أن أشترك فى سباق السيارات",
    "أفضل أن أشتغل مع سيدات",
    "إننى متاكد من أن ديناً واحداً فقط هو الدين الصحيح",
    "لا مانع من أن يحتال الانسان على القانون بشرط ألا يخالفه فعلاً",
    "أكره بعض الأشخاص كراهية شديدة لدرجة أننى أسر فى داخل نفسى عندما يقعون فى شر أعمالهم",
    "الانتظار يقلقنى",
    "إن وجود شخص مكتئب أو بائس كفيل بأن يفسد على سعادتى ونشاطى",
    "أحب من النساء الطويلات"
  ],
  [
    "مرت بى فترات كنت لا أنام أثناءها من القلق",
    "قد أترك عملاً أرغب فى أدائه إذا ما رأى بعض الناس أننى لا أقوم به على الوجه الصحيح",
    "لا أحاول أن أصحح أحداً يعبر عن رأى خاطئ",
    "كنت أحب المواقف المثيرة عندما كنت صغيراً",
    "رجال البوليس أمناء عادة",
    "قد أخالف المبادئ المألوفة لكى أفوز على شخص يعارضنى",
    "يضايقنى الأشخاص الذين يراقبوننى فى الشارع أو الترام أو فى المحلات العامة",
    "لا أحب رؤية النساء وهن يدخن",
    "نادراً ما تعترينى نوبات من الاكتئاب أو اليأس",
    "عندما يقول شخص كلاماً تافهاً أو خطأ عن شئ أعرفه فإننى أحاول أن أصححه"
  ],
  [
    "أحب أن أنكت على الآخرين",
    "عندما كنت طفلاً لم أكن أهتم بأن أكون عضواً فى جماعة أو شلة",
    "فى إمكانى أن أكون سعيداً لو أقمت بمفردى فى كوخ منعزل",
    "يقال عنى عادة إننى سريع الغضب",
    "لا ينبغى أن يعاقب الشخص الذى يخالف قانوناً يعتقد انه غير معقول",
    "أعتقد أن الانسان لا ينبغى أن يذوق المسكرات",
    "كان ولى أمرى (أى أبى او زوج أمى ..... الخ) شديداً فى معاملته لى أثناء طفولتى.",
    "عندى عادات سيئة من القوة بحيث يصعب التغلب عليها.",
    "أتناول المسكرات باعتدال (أو لم أتناولها بتاتاً).",
    "أتمنى أن أتخلص من القلق الذى يصيبنى دائماً إذا قلت كلاماً يجرح شعور الآخرين."
  ],
  [
    "أشعر بأننى لا أستطيع أن أخبر أى شخص عن كل ما فى نفسى",
    "كنت مغرماً بلعبة الحجلة (أو االأولى أو الترنجيلة)",
    "لم أشاهد رؤيا إلاهية فى حياتى.",
    "كثيراً ما غيرت رأيى فى مهنتى.",
    "لا أتناول دواء أو منوماً إلا بأمر الطبيب.",
    "كثيراً ما أحفظ أرقاماً لا أهمية لها (مثل أرقام السيارات مثلاً)",
    "غالباً ما آسف على إننى غاضب ومتذمر إلى هذا الحد.",
    "البرق يخيفنى.",
    "الأمور الجنسية تثير اشمئزازى.",
    "كانت درجات سلوكى بالمدرسة رديئة باستمرار."
  ],
  [
    "أحب مشاهدة النار.",
    "أحب أن أبقى الناس دائماً فى شك من أمر ما سأقوم به فى المستقبل.",
    "مرات تبولى لا تزيد عن مرات تبول معظم الناس.",
    "عندما يضيق الخناق على أقول الصدق بالقدر الذى يحتمل ألا يضر.",
    "إننى رسول العناية الإلهية.",
    "إذا وقعت فى مأزق مع أحد الأصدقاء المتساويين معى فى المسئولية فإننى أفضل أن يقع اللوم كله علىّ، على أن أعترف عليه.",
    "لم يحدث قط أن إضطربت بشكل غير عادى بسبب المآزق التى يكون قد وقع فيها أى فرد من أفراد أسرتى.",
    "ليس هناك من معجزات فى نظرى سوى تلك الحيل التى يقوم بها بعض الأفراد.",
    "أخاف الظلام فى معظم الأحيان.",
    "ليس من السهل إغضابى."
  ],
  [
    "غالباً ما بدت لى خططى مملؤة بالصعاب لدرجة أن اضطررت إلى التخلى عنها.",
    "أعتقد بقيام الأنبياء والرسل بالمعجزات.",
    "لدى بعض العيوب الكبيرة التى لا أرى بداً من التسليم بها ومحاولة ضبطها بدلاً من محاولة التخلص منها.",
    "عندما يوجد الرجل مع المرأة يفكر عادة فى أمور جنسية.",
    "لم ألاحظ أبداً وجود أى دم فى بولى.",
    "كثيراً ما أسيئ فهمى عندما كنت أحاول أن أمنع شخصاً من إرتكاب خطأ ما وكان هذا يؤذى شعورى.",
    "أصلى كثيراً.",
    "أشعر بالعطف نحو أولئك الذين يغلب عليهم الاستغراق فى أحزانهم ومتاعبهم.",
    "أقرأ القرآن (أو التوارة أو الانجيل) عدة مرات فى الاسبوع.",
    "إننى أضيق بهؤلاء الذين يعتقدون بأن هناك دين واحد حق فقط."
  ],
  [
    "أشعر بالخوف عندما تخطر ببالى فكرة الزلزال.",
    "أفضل العمل الذى يتطلب منى أن أكون منتبهاً انتباهاً شديداً على العمل الذى يسمح لى بالتهاون.",
    "أخاف أن أجد نفسى فى مكان صغير مغلق.",
    "عندما أحاول أن أصلح شخصاً ما فإننى لا أتوانى عن أن أصارحه بكل شئ.",
    "لم يحدث قط أن رأيت الأشياء مزدوجة (أى أن شيئاً لم يبد لى قط على أنه شيئان بدون أن يكون فى استطاعتى إعادة رؤيته كشئ واحد مرة أخرى).",
    "تعجبنى قصص المغامرات.",
    "الصراحة محمودة دائماً.",
    "يجب أن أعترف بأنه قد إنتابنى قلق غير عادى على أشياء لم تكن فى الواقع ذات أهمية.",
    "إننى مستعد لأن أتقبل تماماً أى فكرة حسنة.",
    "أقوم عادة بتصريف أمورى بنفسى دون الإلتجاء إلى أحد."
  ],
  [
    "ترعبنى العواصف.",
    "ليس من عاداتى أن أعبر بقوة عن تأييدى أو استنكارى لأعمال الآخرين.",
    "لا أحاول أن أخفى عن شخص ما عدم تقديرى له أو إشفاقى عليه.",
    "يجب أن تضرب البغال أو تركل عندما تتوقف عن جر العربات.",
    "من السهل استثارتى.",
    "كثيراً – ما عملت تحت رئاسة أشخاص يهيئون الأمور بحيث ينسب إليهم الخير وينسب إلى غيرهم الشر.",
    "أعتقد أن حاسة الشم عندى ليست أقل منها عند معظم الناس.",
    "أجد من الصعوبة أحياناً أن أتمسك بحقوقى نظراً لتحفظى الشديد.",
    "القذارة تخيفنى أو تثير اشمئزازى.",
    "أعيش فى أحلام اليقظة حياة أصرح بها للآخرين."
  ],
  [
    "أكره الاستحمام.",
    "فى اعتقادى أن مصطفى كامل كان أعظم من عرابى.",
    "أحب النساء المسترجلات.",
    "تتوفر فى منزلنا الضروريات المعتادة (مثل الطعام الكافى والملبس ..... الخ).",
    "بعض أفراد عائلتى سريعو الغضب.",
    "لا أستطيع أن أتقن أى عمل.",
    "كثيراً ما شعرت بالإثم بسبب تظاهرى بالأسف على أشياء بدرجة أكبر مما أحس به فى الواقع.",
    "هناك بعض الخلل فى أعضائى التناسلية.",
    "من عاداتى أن أدافع بقوة عن آرائى.",
    "كثيراً ما أطلب النصيحة من الآخرين."
  ],
  [
    "لا أخاف من العنكبوت.",
    "لا يحمر وجهى من الخجل.",
    "لا أخشى أن تنتقل إلى الأمراض والجراثيم من مقابض الأبواب.",
    "تضطرب أعصابى عند رؤية حيوانات معينة.",
    "لا يبدو لى أى أمل فى المستقبل.",
    "العلاقات طيبة بين أفراد أسرتى والأقربين من أقاربى.",
    "لا يحمر وجهى بدرجة غير عادية (أى أكثر مما يحدث بالنسبة للآخرين).",
    "أحب أن أبس ملابس غالية.",
    "كثيراً ما أخشى أن يحمر وجهى خجلاً.",
    "يستطيع الآخرون بسهولة أن يحولونى عن رأيى حتى ولو كنت قد صممت بينى وبين نفسى على أن هذا هو رأيى النهائى فى موضوع ما."
  ],
  [
    "أستطيع أن أتحمل الآلام بالدرجة التى يستطيع أن يتحملها الآخرون.",
    "لا يضايقنى خروج غازات كثيرة من معدتى عن طريق الفم (لا يضايقنى أن أتجشأ كثيراً).",
    "كثيراً ما كنت آخر من يكف عن محاولة أداء عمل ما.",
    "أشعر بجفاف فى فمى طوال اوقت تقريباً.",
    "يغضبنى أن يستعجلنى الناس.",
    "أحب صيد الحيوانات المفترسة.",
    "أحب عمل الترزى أو خياط الترزى.",
    "لا أخاف الفيران.",
    "لم يصب وجهى بالشلل قط.",
    "يبدو أن جلدى حساس جداً للمس."
  ],
  [
    "لم يحدث قط أن كان برازى أسود اللون جافاً.",
    "يعترينى شعور عدة مرات فى الأسبوع بأن شيئاً مريعاً على وشك الحدوث.",
    "أشعر بالتعب معظم الوقت.",
    "أحياناً يراودنى حلم واحد بالذات مرة بعد أخرى.",
    "أحب قراءة التاريخ.",
    "المستقبل غامض لدرجة تجعل من العبث أن يقوم شخص برسم أى خطة للأمور الهامة.",
    "لا أشاهد الاستعراضات الجنسية أبداً ما دام فى استطاعتى أن أتجنب ذلك.",
    "لا أهتم مطلقاً بأى شئ رغم أن الأمور تسير بالنسبة لى على ما يرام.",
    "أحب أن أصلح قفل الباب.",
    "أحياناً أكون متأكداً من أن غيرى من الناس يستطيع أن يقرأ ما فى ذهنى."
  ],
  [
    "أحب قراءة موضوعات العلوم.",
    "أخاف عندما أجد نفسى وحيداً فى مكان متسع غير محدود.",
    "لو كنت فناناً لأحببت أن أرسم الأطفال.",
    "أشعر أحياناً بأننى على وشك الانهيار.",
    "إننى جد حريص على مظهرى فى الملبس.",
    "أحب أن أكون سكرتيراً خاصاً.",
    "أعتقد أن عدداً كبيراً من الناس يسلك سلوكاً جنسياً مشيناً.",
    "غالباً ما انزعجت فى منتصف الليل.",
    "أتضايق حين أنسى أين وضعت الأشياء.",
    "أحب ركوب الخيل."
  ],
  [
    "الشخص الذى تعلقت به أشد التعلق والذى أحببته أشد الحب كان امرأة (أم، عمة، أو أى أمرأة أخرى).",
    "أفضل قصص المغامرات على قصص الحب.",
    "أخاف من الوجود بمفردى فى الظلام.",
    "أشعر بدافع إلى القفز عندما أكون فى مكان عالِ.",
    "أحب الروايات السينمائية الغرامية."
  ]
];
