export type Language = 'ar' | 'en';

export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  industry: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  summary: string;
  challenge: string;
  creativeDirection: string;
  designApproach: string;
  deliverables: string[];
  conceptNote: string;
}

export interface ServiceItem {
  index: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ApproachStep {
  index: string;
  title: string;
  duration: string;
  summary: string;
  focus: string;
}

export interface WhyItem {
  index: string;
  title: string;
  statement: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  projectRef: string;
}

export interface LocaleContent {
  brandName: string;
  metaDescription: string;
  tagline: string;
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
    langSwitchLabel: string;
    langSwitchAria: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    kicker: string;
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    scrollLabel: string;
    imageAlt: string;
    disciplines: string[];
    studioCaption: string;
  };
  work: {
    sectionLabel: string;
    heading: string;
    demoNote: string;
    viewCaseStudy: string;
    modalClose: string;
    modalIntro: string;
    modalChallenge: string;
    modalCreativeDirection: string;
    modalDesignApproach: string;
    modalDeliverables: string;
    modalCta: string;
    modalDemoBadge: string;
    projects: ProjectItem[];
  };
  services: {
    sectionLabel: string;
    heading: string;
    intro: string;
    deliverablesLabel: string;
    ctaLabel: string;
    items: ServiceItem[];
  };
  about: {
    sectionLabel: string;
    headline: string;
    paragraphs: string[];
    imageAlt: string;
    whyHeading: string;
    whyItems: WhyItem[];
  };
  approach: {
    sectionLabel: string;
    heading: string;
    subtitle: string;
    focusLabel: string;
    steps: ApproachStep[];
  };
  testimonials: {
    sectionLabel: string;
    heading: string;
    demoNote: string;
    items: TestimonialItem[];
  };
  contact: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    whatsappCta: string;
    whatsappMessage: string;
    whatsappUnconfiguredNotice: string;
    emailValue: string;
    copyEmail: string;
    copiedEmail: string;
    channelsDisclaimer: string;
    formTitle: string;
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      service: string;
      servicePlaceholder: string;
      description: string;
      descriptionPlaceholder: string;
    };
    serviceOptions: string[];
    submitCta: string;
    validation: {
      nameRequired: string;
      emailInvalid: string;
      serviceRequired: string;
      descriptionRequired: string;
    };
    success: {
      title: string;
      message: string;
      demoNotice: string;
      sendAnother: string;
    };
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    connectTitle: string;
    emailLabel: string;
    emailPlaceholderValue: string;
    copyright: string;
    demoDisclaimer: string;
    socials: { label: string; href: string; ariaLabel: string }[];
  };
}

export const CONTENT: Record<Language, LocaleContent> = {
  ar: {
    brandName: 'NOVA Studio',
    metaDescription:
      'نوفا ستوديو وكالة إبداعية رقمية متخصصة في تصميم وتطوير المواقع، بناء الهوية التجارية، تجربة المستخدم، والاستراتيجية الرقمية.',
    tagline: 'تجارب رقمية تتجاوز التوقعات.',
    nav: {
      work: 'الأعمال',
      services: 'الخدمات',
      about: 'عن نوفا',
      contact: 'تواصل معنا',
      cta: 'لنتحدث',
      langSwitchLabel: 'EN',
      langSwitchAria: 'التبديل إلى اللغة الإنجليزية',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
    },
    hero: {
      kicker: 'وكالة إبداعية رقمية · الهوية وتجارب الويب',
      headline: 'نصنع تجارب رقمية تدفع علامتك التجارية نحو المستقبل.',
      supporting:
        'نجمع بين الاستراتيجية والإبداع والتكنولوجيا لنصنع تجارب رقمية تترك أثراً حقيقياً.',
      primaryCta: 'ابدأ مشروعك',
      secondaryCta: 'استعرض الأعمال',
      scrollLabel: 'استكشف الأعمال',
      imageAlt: 'فضاء معماري داكن يعكس التوجه الإبداعي في نوفا ستوديو بإضاءة دافئة وطاولة حجرية',
      studioCaption: 'استوديو مستقل لتصميم الهويات والمنصات الرقمية',
      disciplines: [
        'تصميم وتطوير المواقع',
        'بناء الهوية التجارية',
        'تصميم تجربة وواجهات المستخدم',
        'الاستراتيجية الرقمية',
      ],
    },
    work: {
      sectionLabel: 'أعمال مختارة',
      heading: 'مفاهيم تصميمية تجمع بين الجرأة البصرية والوضوح الاستراتيجي.',
      demoNote: 'مفاهيم عرض افتراضية أُعدّت لاستعراض التوجه الإبداعي والتصميمي',
      viewCaseStudy: 'استعراض المفهوم التصميمي',
      modalClose: 'إغلاق',
      modalIntro: 'مقدمة المفهوم',
      modalChallenge: 'التحدي التصميمي',
      modalCreativeDirection: 'التوجه الإبداعي',
      modalDesignApproach: 'منهجية التصميم',
      modalDeliverables: 'المخرجات المقترحة',
      modalCta: 'ناقش مشروعاً مشابهاً',
      modalDemoBadge: 'مفهوم عرض افتراضي',
      projects: [
        {
          id: 'aura',
          index: '01',
          name: 'AURA',
          industry: 'الأزياء الفاخرة والتجارة الإلكترونية',
          category: 'متجر إلكتروني فاخر · هوية رقمية',
          year: '2026',
          image: '/src/assets/images/project_aura_fashion_1795263620796.jpg',
          imageAlt: 'عرض تحريري لدار أزياء أورا بإطلالات سوداء وعاجية بين أعمدة حجرية',
          imagePosition: 'object-[50%_20%]',
          summary:
            'مفهوم تجارة إلكترونية لدار أزياء معاصرة يمزج بين السرد التحريري الرفيع وسلاسة تجربة الشراء.',
          challenge:
            'تقع العديد من المتاجر الفاخرة بين طرفين: إما طابع استعراضي يبطئ التصفح، أو قوالب تقليدية تفقد القطع قيمتها البصرية.',
          creativeDirection:
            'أزياء معمارية بلون الفحم والعاج فوق خامات الترافرتين الطبيعية، مع تباين ضوئي حاد يبرز ملمس الأقمشة.',
          designApproach:
            'هيكلة الواجهة كأعداد مجلة فنية بإيقاع بصري هادئ، وتنقل واضح بين المجموعات، ومسار شراء من خطوتين دون تشتيت.',
          deliverables: [
            'الهوية الرقمية للدار',
            'هندسة تجربة التسوق وواجهات التفاعل',
            'نظام العرض التحريري للمجموعات الموسمية',
            'دليل الإخراج البصري للتصوير الرقمي',
          ],
          conceptNote:
            'مفهوم تصميمي افتراضي لعرض توجه نوفا ستوديو في قطاع الأزياء الفاخرة، ولا يمثل عميلاً فعلياً أو نتائج تجارية منشورة.',
        },
        {
          id: 'medora',
          index: '02',
          name: 'MEDORA',
          industry: 'الرعاية الصحية والعافية الرقمية',
          category: 'تجربة رقمية صحية · نظام تصميم',
          year: '2026',
          image: '/src/assets/images/project_medora_health_1795263621186.jpg',
          imageAlt: 'مساحة معمارية طبية هادئة لمفهوم ميدورا بالزجاج المضلع والألمنيوم المصقول',
          imagePosition: 'object-center',
          summary:
            'مفهوم منصة صحية رقمية يترجم الدقة الطبية إلى تجربة إنسانية مطمئنة وواضحة من اللحظة الأولى.',
          challenge:
            'المواقع الصحية التقليدية تبدو مزدحمة بالمعلومات ومتعبة بصرياً، مما يزيد من توتر المراجع أثناء البحث عن الخدمة المناسبة.',
          creativeDirection:
            'هدوء معماري مستوحى من العمارة السويسرية؛ درجات الحجر الدافئ والزجاج المضلع تعكس النقاء والدقة والشفافية.',
          designApproach:
            'بناء نظام تصميم ثنائي اللغة بتباين مريح للعين، وخطوط واضحة القراءة، ومسار مباشر لحجز الاستشارات ومتابعة المواعيد.',
          deliverables: [
            'استراتيجية التجربة الرقمية للمريض',
            'نظام تصميم ثنائي اللغة (عربي وإنجليزي)',
            'تجربة بوابة المراجع وحجز المواعيد',
            'إرشادات الهوية البصرية للقطاع الصحي',
          ],
          conceptNote:
            'مفهوم تصميمي افتراضي لعرض منهجية نوفا ستوديو في التجارب الصحية، ولا يمثل منشأة طبية قائمة.',
        },
        {
          id: 'velo',
          index: '03',
          name: 'VELO',
          industry: 'أسلوب الحياة والتنقل الحضري',
          category: 'علامة تجارية حديثة · موقع إطلاق',
          year: '2026',
          image: '/src/assets/images/project_velo_lifestyle_1795263620426.jpg',
          imageAlt: 'نموذج فيلو للتنقل الحضري باللون الأسود المطفي داخل جناح خرساني عند الغسق',
          imagePosition: 'object-center',
          summary:
            'مفهوم موقع إطلاق لعلامة أسلوب حياة حضري يجمع بين التصميم الصناعي الجريء والتفاعل الرقمي الغامر.',
          challenge:
            'إبراز الحرفية الهندسية لمنتج تنقل حديث بأسلوب ناضج ومقنع، بعيداً عن المبالغات الدعائية المعتادة.',
          creativeDirection:
            'ظلال خرسانية عند الغسق مع إضاءة حافة دقيقة تُظهر خطوط الهيكل المعدني الأسود وتمنح العلامة طابعاً معمارياً واثقاً.',
          designApproach:
            'تصميم تجربة إطلاق متدرجة تضع المنتج في مركز المشهد، مع استعراض تفاعلي للمواصفات ونموذج حجز مبكر مبسط.',
          deliverables: [
            'التوجيه الإبداعي والهوية البصرية',
            'صفحة الإطلاق التفاعلية',
            'إخراج المشاهد والتكوين البصري',
            'تصميم تجربة الحجز المسبق',
          ],
          conceptNote:
            'مفهوم تصميمي افتراضي لعرض قدرات الإطلاق الرقمي في نوفا ستوديو، وليس علامة تجارية مطروحة حالياً.',
        },
      ],
    },
    services: {
      sectionLabel: 'الخدمات',
      heading: 'قدرات إبداعية متكاملة لبناء حضور رقمي رفيع.',
      intro:
        'لا نعمل بالقوالب الجاهزة. كل مشروع يبدأ بقراءة عميقة للسوق والجمهور، ثم يُصاغ بهندسة بصرية وتقنية خاصة.',
      deliverablesLabel: 'نطاق العمل',
      ctaLabel: 'ابدأ مشروعاً في هذا المسار',
      items: [
        {
          index: '01',
          id: 'web-development',
          title: 'تصميم وتطوير المواقع',
          subtitle: 'منصات رقمية وصفحات إطلاق عالية الأداء',
          description:
            'نصمم ونطور مواقع وتطبيقات ويب سريعة الاستجابة، مبنية بكود نظيف وحركة متزنة تعكس جودة علامتك وتحفز التفاعل.',
          deliverables: [
            'مواقع العلامات التجارية والشركات',
            'صفحات الإطلاق التعريفية والتجارية',
            'تطوير الواجهات الأمامية بأعلى معايير السرعة',
          ],
        },
        {
          index: '02',
          id: 'brand-identity',
          title: 'بناء الهوية التجارية',
          subtitle: 'أنظمة بصرية متماسكة ذات شخصية متفردة',
          description:
            'نصوغ لغات بصرية متكاملة تمنح علامتك حضوراً واثقاً ومتسقاً عبر المنصات الرقمية ونقاط الاتصال المختلفة.',
          deliverables: [
            'الشعار والنظام البصري الكامل',
            'أدلة استخدام الهوية التجارية',
            'التوجيه الفني واختيار الخطوط',
          ],
        },
        {
          index: '03',
          id: 'ui-ux-design',
          title: 'تصميم واجهات وتجربة المستخدم',
          subtitle: 'وضوح وظيفي مقترن بجمال تحريري',
          description:
            'نصمم رحلات مستخدم بديهية وأنظمة تصميم قابلة للتوسع توازن بين سهولة الاستخدام والانطباع الجمالي الرفيع.',
          deliverables: [
            'أبحاث وتدفق رحلة المستخدم',
            'النماذج التفاعلية الأولية',
            'أنظمة التصميم العربية والإنجليزية',
          ],
        },
        {
          index: '04',
          id: 'digital-strategy',
          title: 'الاستراتيجية الرقمية',
          subtitle: 'رؤية واضحة تسبق التنفيذ البصري',
          description:
            'نحدد التموضع الرقمي، وهيكلة الرسائل، وخارطة الإطلاق لضمان أن كل قرار تصميمي يخدم أهداف النمو الفعلية.',
          deliverables: [
            'التموضع الرقمي للعلامة التجارية',
            'هيكلة المحتوى والرسائل الأساسية',
            'خارطة الإطلاق والتطوير المرحلي',
          ],
        },
      ],
    },
    about: {
      sectionLabel: 'عن نوفا ستوديو',
      headline: 'التصميم الجيد ليس مجرد مظهر، بل ميزة استراتيجية.',
      paragraphs: [
        'نوفا ستوديو مفهوم لوكالة إبداعية رقمية مستقلة يقوم على قناعة واضحة: العلامات الطموحة تستحق حضوراً رقمياً يعكس مكانتها الحقيقية، لا قوالب مكررة.',
        'نعمل بمنهجية تشاركية مع رواد الأعمال والشركات الناشئة والمؤسسات لتحويل الأفكار المعقدة إلى تجارب رقمية واضحة، سريعة، ومقنعة.',
      ],
      imageAlt: 'مكتب المدير الإبداعي يضم كتاب تصميم أسود ومسطرة معدنية وعينة حجر ترافرتين',
      whyHeading: 'لماذا نوفا',
      whyItems: [
        {
          index: '01',
          title: 'تفكير استراتيجي أولاً',
          statement: 'كل قرار تصميمي ينطلق من فهم السوق والجمهور قبل رسم أي عنصر بصري.',
        },
        {
          index: '02',
          title: 'تجارب مفصّلة بالكامل',
          statement: 'نرفض القوالب الجاهزة؛ كل علامة تحصل على بنية بصرية مصممة خصيصاً لها.',
        },
        {
          index: '03',
          title: 'دقة في التفاصيل الدقيقة',
          statement: 'من إيقاع الخط العربي إلى سلاسة التفاعل، التفاصيل هي ما يصنع الفارق.',
        },
        {
          index: '04',
          title: 'تطوير يتمحور حول الأداء',
          statement: 'واجهات خفيفة وسريعة التحميل، مهيأة لمحركات البحث ومختلف الشاشات.',
        },
        {
          index: '05',
          title: 'قيمة طويلة الأمد للعلامة',
          statement: 'نبني أسساً رقمية مرنة تنمو مع توسع أعمالك دون الحاجة لإعادة البناء.',
        },
      ],
    },
    approach: {
      sectionLabel: 'منهجية العمل',
      heading: 'أربع مراحل مدروسة من الاستكشاف إلى الإطلاق.',
      subtitle: 'مسار عمل واضح يحافظ على الزخم الإبداعي ودقة التنفيذ في كل خطوة.',
      focusLabel: 'محور المرحلة',
      steps: [
        {
          index: '01',
          title: 'الاستكشاف',
          duration: 'المرحلة الأولى',
          summary: 'نفهم أهداف المشروع، ونحلل المشهد التنافسي، ونستخلص جوهر العلامة التجارية.',
          focus: 'مواءمة الأهداف وتحليل السوق',
        },
        {
          index: '02',
          title: 'الاستراتيجية',
          duration: 'المرحلة الثانية',
          summary: 'نرسم خريطة تجربة المستخدم، وهيكلة المحتوى، والاتجاه الفني المقترح.',
          focus: 'هيكلة التجربة والتوجه البصري',
        },
        {
          index: '03',
          title: 'الإبداع',
          duration: 'المرحلة الثالثة',
          summary: 'نصمم الواجهات التفاعلية ونطور البنية الأمامية بكود نظيف وأداء عالٍ.',
          focus: 'التصميم التحريري والتطوير الأمامي',
        },
        {
          index: '04',
          title: 'الإطلاق',
          duration: 'المرحلة الرابعة',
          summary: 'نختبر التجربة عبر مختلف الشاشات واللغات لضمان إطلاق سلس ومتقن.',
          focus: 'ضمان الجودة والاعتماد النهائي',
        },
      ],
    },
    testimonials: {
      sectionLabel: 'انطباعات نموذجية',
      heading: 'نماذج توضيحية تعكس قيمة الشراكة الإبداعية.',
      demoNote: 'محتوى توضيحي افتراضي — لا يمثل تقييمات عملاء فعليين',
      items: [
        {
          id: 't1',
          quote:
            'التركيز لم يكن على تجميل الواجهة فحسب، بل على نقل روح الدار وتفاصيل الأقمشة بوضوح وهدوء من الشاشة الأولى.',
          name: 'لينا السديري',
          role: 'المديرة الإبداعية',
          company: 'دار أورا للأزياء',
          projectRef: 'نموذج توضيحي · AURA',
        },
        {
          id: 't2',
          quote:
            'البساطة والوضوح في تنظيم المعلومات غيّرت انطباع الزوار عن المنصة الصحية وجعلت خطوات حجز الموعد مباشرة ومريحة.',
          name: 'د. طارق المنصور',
          role: 'الشريك المؤسس',
          company: 'منصة ميدورا الصحية',
          projectRef: 'نموذج توضيحي · MEDORA',
        },
        {
          id: 't3',
          quote:
            'التكامل بين التوجيه البصري وسرعة التصفح منح صفحة الإطلاق حضوراً واثقاً يعكس جودة المنتج الهندسية.',
          name: 'فيصل العتيبي',
          role: 'قائد الهوية والعلامة',
          company: 'فيلو للتنقل الحضري',
          projectRef: 'نموذج توضيحي · VELO',
        },
      ],
    },
    contact: {
      sectionLabel: 'ابدأ الحوار',
      headline: 'دعنا نصنع شيئاً استثنائياً.',
      subtext:
        'تستعد لإطلاق مشروع جديد أو تطوير حضور علامتك الرقمي؟ شاركنا رؤيتك في النموذج التجريبي التالي.',
      whatsappCta: 'معاينة واتساب (تجريبي)',
      whatsappMessage: 'مرحباً فريق نوفا ستوديو، أود استكشاف تعاون رقمي جديد.',
      whatsappUnconfiguredNotice:
        'قناة واتساب في وضع العرض التجريبي حالياً. لتفعيل الرابط المباشر عند النشر، أضف متغير البيئة VITE_WHATSAPP_NUMBER.',
      emailValue: 'hello@novastudio.example',
      copyEmail: 'نسخ البريد النموذجي',
      copiedEmail: 'تم النسخ',
      channelsDisclaimer:
        'ملاحظة: بيانات التواصل المعروضة (البريد وواتساب) هي عناصر نموذجية للعرض ولا تتصل بحساب تشغيلي فعلي.',
      formTitle: 'نموذج نبذة المشروع (عرض تفاعلي)',
      fields: {
        name: 'الاسم الكامل',
        namePlaceholder: 'مثال: سارة القحطاني',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'name@company.com',
        service: 'الخدمة المطلوبة',
        servicePlaceholder: 'اختر التخصص المطلوب',
        description: 'وصف المشروع',
        descriptionPlaceholder: 'حدثنا باختصار عن فكرة مشروعك، الأهداف، والجدول الزمني المتوقع...',
      },
      serviceOptions: [
        'تصميم وتطوير المواقع',
        'بناء الهوية التجارية',
        'تصميم واجهات وتجربة المستخدم',
        'الاستراتيجية الرقمية',
        'باقة متكاملة (هوية + موقع)',
      ],
      submitCta: 'معاينة إرسال الطلب',
      validation: {
        nameRequired: 'يرجى كتابة الاسم الكامل.',
        emailInvalid: 'يرجى إدخال بريد إلكتروني بصيغة صحيحة.',
        serviceRequired: 'يرجى اختيار الخدمة المطلوبة من القائمة.',
        descriptionRequired: 'يرجى كتابة وصف مختصر للمشروع (١٠ أحرف على الأقل).',
      },
      success: {
        title: 'تمت معاينة الطلب محلياً',
        message:
          'تم التحقق من بيانات النموذج بنجاح في واجهة العرض التفاعلية. هذه محاكاة أمامية فقط للعرض التصميمي.',
        demoNotice:
          'تنبيه هام: لم يتم إرسال أي رسالة حقيقية أو حفظ بيانات على خادم خارجي لأن هذا الموقع نموذج عرض أمامي فقط.',
        sendAnother: 'تجربة إرسال نموذج جديد',
      },
    },
    footer: {
      tagline: 'تجارب رقمية تتجاوز التوقعات.',
      navigationTitle: 'التنقل',
      connectTitle: 'قنوات العرض',
      emailLabel: 'بريد نموذجي:',
      emailPlaceholderValue: 'hello@novastudio.example',
      copyright: '© ٢٠٢٦ NOVA Studio. عرض مفاهيمي للوكالة.',
      demoDisclaimer:
        'عرض بورتفوليو أمامي فقط — المشاريع والانطباعات وقنوات التواصل المعروضة هي نماذج مفاهيمية افتراضية.',
      socials: [
        { label: 'Behance', href: '#work', ariaLabel: 'عرض الأعمال (رابط داخلي توضيحي)' },
        { label: 'Instagram', href: '#about', ariaLabel: 'عن الاستوديو (رابط داخلي توضيحي)' },
        { label: 'LinkedIn', href: '#contact', ariaLabel: 'التواصل التجريبي (رابط داخلي توضيحي)' },
      ],
    },
  },
  en: {
    brandName: 'NOVA Studio',
    metaDescription:
      'NOVA Studio is a digital creative agency concept specializing in bespoke web design and development, brand identity, UI/UX design, and digital strategy.',
    tagline: 'Digital Experiences. Beyond Expectations.',
    nav: {
      work: 'Work',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      cta: "Let's Talk",
      langSwitchLabel: 'عربي',
      langSwitchAria: 'Switch language to Arabic',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      kicker: 'Digital Creative Agency · Brand & Web Flagships',
      headline: 'WE BUILD DIGITAL EXPERIENCES THAT MOVE BRANDS FORWARD.',
      supporting:
        'We combine strategy, creativity, and technology to create meaningful digital experiences.',
      primaryCta: 'Start a Project',
      secondaryCta: 'Selected Work',
      scrollLabel: 'Scroll to explore',
      imageAlt: 'NOVA Studio architectural interior featuring dark monolithic stone wall and warm travertine table',
      studioCaption: 'Independent creative studio for brand identity and web flagships',
      disciplines: [
        'Web Design & Development',
        'Brand Identity',
        'UI/UX Design',
        'Digital Strategy',
      ],
    },
    work: {
      sectionLabel: 'Selected Work',
      heading: 'Concept case studies pairing editorial rigor with clarity.',
      demoNote: 'Fictional concept studies crafted to demonstrate art direction and craft',
      viewCaseStudy: 'View Concept Study',
      modalClose: 'Close',
      modalIntro: 'Project Introduction',
      modalChallenge: 'The Challenge',
      modalCreativeDirection: 'Creative Direction',
      modalDesignApproach: 'Design Approach',
      modalDeliverables: 'Proposed Deliverables',
      modalCta: 'Discuss a Similar Project',
      modalDemoBadge: 'Fictional Concept Showcase',
      projects: [
        {
          id: 'aura',
          index: '01',
          name: 'AURA',
          industry: 'Luxury Fashion E-commerce',
          category: 'Luxury E-Commerce · Digital Flagship',
          year: '2026',
          image: '/src/assets/images/project_aura_fashion_1795263620796.jpg',
          imageAlt: 'AURA luxury fashion editorial campaign showcasing sculptural black and ivory tailoring against travertine stone',
          imagePosition: 'object-[50%_20%]',
          summary:
            'A digital flagship concept for a contemporary fashion house balancing editorial storytelling with effortless purchase flow.',
          challenge:
            'Luxury online storefronts frequently compromise either editorial atmosphere through rigid catalog grids or usability through heavy, slow layouts.',
          creativeDirection:
            'Sculptural charcoal and ivory tailoring photographed against raw travertine monoliths, pairing sharp directional light with generous negative space.',
          designApproach:
            'Paced like a curated print monograph: unhurried typography, tactile textile close-ups, and a calm two-step bag and checkout journey.',
          deliverables: [
            'Digital Flagship Identity',
            'E-commerce UI/UX Architecture',
            'Seasonal Lookbook Editorial System',
            'Digital Art Direction Guidelines',
          ],
          conceptNote:
            'Fictional concept showcase illustrating NOVA Studio art direction for luxury retail. Not an operational commercial client project.',
        },
        {
          id: 'medora',
          index: '02',
          name: 'MEDORA',
          industry: 'Healthcare Digital Experience',
          category: 'Healthcare Platform · Design System',
          year: '2026',
          image: '/src/assets/images/project_medora_health_1795263621186.jpg',
          imageAlt: 'MEDORA calm architectural healthcare space featuring fluted glass and brushed aluminum sculpture on limestone',
          imagePosition: 'object-center',
          summary:
            'A human-centered healthcare platform concept translating clinical precision into immediate calm and clarity.',
          challenge:
            'Conventional medical portals overwhelm patients with dense navigation and harsh visual noise at moments when reassurance matters most.',
          creativeDirection:
            'Inspired by Swiss architectural restraint: warm limestone tones, fluted glass translucency, and crisp typographic hierarchy.',
          designApproach:
            'A bilingual design system engineered for effortless readability, high-contrast accessibility, and a direct appointment booking flow.',
          deliverables: [
            'Patient Experience Strategy',
            'Bilingual Design System (RTL/LTR)',
            'Consultation Booking Flow',
            'Clinical Visual Identity Guidelines',
          ],
          conceptNote:
            'Fictional concept showcase illustrating NOVA Studio methodology for healthcare experiences. Not a live clinical provider.',
        },
        {
          id: 'velo',
          index: '03',
          name: 'VELO',
          industry: 'Premium Lifestyle Brand',
          category: 'Lifestyle Brand · Launch Experience',
          year: '2026',
          image: '/src/assets/images/project_velo_lifestyle_1795263620426.jpg',
          imageAlt: 'VELO matte black minimalist commuter silhouette framed inside a raw concrete architectural pavilion at dusk',
          imagePosition: 'object-center',
          summary:
            'A launch experience concept for an urban lifestyle brand uniting industrial craft with atmospheric digital storytelling.',
          challenge:
            'Presenting a contemporary commuter product to design-literate urban audiences without falling into loud, generic hardware clichés.',
          creativeDirection:
            'Brutalist dusk concrete framing matte anodized aluminum silhouettes with disciplined rim lighting and warm cream accents.',
          designApproach:
            'A staged product narrative centering the frame geometry, supported by clean technical specification reveals and an intuitive reservation flow.',
          deliverables: [
            'Brand Direction & Identity',
            'Interactive Launch Flagship',
            'Visual Composition & Art Direction',
            'Pre-Order Reservation Prototype',
          ],
          conceptNote:
            'Fictional concept showcase demonstrating NOVA Studio launch architecture. Not a currently shipping consumer product.',
        },
      ],
    },
    services: {
      sectionLabel: 'Services',
      heading: 'Focused disciplines for ambitious digital brands.',
      intro:
        'We do not assemble templates. Every engagement starts from market truth and ends in bespoke digital craft.',
      deliverablesLabel: 'Core Scope',
      ctaLabel: 'Discuss this discipline',
      items: [
        {
          index: '01',
          id: 'web-development',
          title: 'Web Design & Development',
          subtitle: 'Bespoke flagships and conversion landing pages',
          description:
            'Custom-engineered websites built with clean architecture, responsive precision, and purposeful motion that turns attention into action.',
          deliverables: [
            'Brand Flagship Websites',
            'High-Converting Landing Pages',
            'Modern Front-End Engineering',
          ],
        },
        {
          index: '02',
          id: 'brand-identity',
          title: 'Brand Identity',
          subtitle: 'Cohesive visual systems with lasting authority',
          description:
            'Distinctive visual identities, typographic systems, and art direction designed to command recognition across every medium.',
          deliverables: [
            'Visual Identity Systems',
            'Comprehensive Brand Guidelines',
            'Art Direction & Typography',
          ],
        },
        {
          index: '03',
          id: 'ui-ux-design',
          title: 'UI/UX Design',
          subtitle: 'Editorial clarity meets intuitive utility',
          description:
            'Human-centered product interfaces and scalable bilingual design systems crafted for effortless navigation and tactile polish.',
          deliverables: [
            'User Flows & Wireframing',
            'Interactive Prototypes',
            'Bilingual Design Systems',
          ],
        },
        {
          index: '04',
          id: 'digital-strategy',
          title: 'Digital Strategy',
          subtitle: 'Commercial direction before a single pixel',
          description:
            'Clear positioning, messaging architecture, and launch roadmaps ensuring every creative choice serves long-term brand equity.',
          deliverables: [
            'Digital Brand Positioning',
            'Content & Messaging Architecture',
            'Launch & Growth Roadmaps',
          ],
        },
      ],
    },
    about: {
      sectionLabel: 'About NOVA',
      headline: 'GOOD DESIGN IS NOT DECORATION. IT IS A STRATEGIC ADVANTAGE.',
      paragraphs: [
        'NOVA Studio is a digital creative agency concept built on a clear conviction: ambitious businesses deserve digital flagships that reflect their true caliber—never recycled templates.',
        'We partner closely with founders, startups, and established brands to transform complex propositions into calm, bold, and commercially sharp digital experiences.',
      ],
      imageAlt: 'Creative director desk featuring a black linen monograph book, steel ruler, and travertine stone sample',
      whyHeading: 'Why NOVA',
      whyItems: [
        {
          index: '01',
          title: 'Strategic thinking',
          statement: 'Every layout decision is anchored in market positioning and user intent.',
        },
        {
          index: '02',
          title: 'Custom-made experiences',
          statement: 'Zero recycled themes; each brand receives a bespoke visual architecture.',
        },
        {
          index: '03',
          title: 'Attention to detail',
          statement: 'From bilingual typography rhythm to micro-transitions, craft is non-negotiable.',
        },
        {
          index: '04',
          title: 'Performance-focused development',
          statement: 'Lean, accessible, fast-loading code engineered for every modern screen.',
        },
        {
          index: '05',
          title: 'Long-term brand value',
          statement: 'Scalable digital foundations built to grow alongside your business.',
        },
      ],
    },
    approach: {
      sectionLabel: 'Our Approach',
      heading: 'Four deliberate stages from insight to launch.',
      subtitle: 'A transparent, collaborative cadence balancing creative exploration with disciplined execution.',
      focusLabel: 'Primary Focus',
      steps: [
        {
          index: '01',
          title: 'Discover',
          duration: 'Stage 01',
          summary: 'We immerse ourselves in your business goals, audience behavior, and competitive landscape.',
          focus: 'Stakeholder alignment & market audit',
        },
        {
          index: '02',
          title: 'Strategize',
          duration: 'Stage 02',
          summary: 'We define the information architecture, messaging hierarchy, and visual art direction.',
          focus: 'Experience blueprint & visual direction',
        },
        {
          index: '03',
          title: 'Create',
          duration: 'Stage 03',
          summary: 'We craft bespoke interfaces and engineer responsive, high-performance front-end code.',
          focus: 'Editorial UI craft & production build',
        },
        {
          index: '04',
          title: 'Launch',
          duration: 'Stage 04',
          summary: 'We stress-test across viewports and languages before deploying a polished flagship.',
          focus: 'QA refinement & confident release',
        },
      ],
    },
    testimonials: {
      sectionLabel: 'Sample Perspectives',
      heading: 'Illustrative reflections on creative partnership.',
      demoNote: 'Illustrative sample testimonials — fictional demo content, not verified client reviews',
      items: [
        {
          id: 't1',
          quote:
            'The focus was never superficial decoration—it was translating the quiet confidence of our tailoring into every digital interaction.',
          name: 'Lina Al-Sudairi',
          role: 'Creative Director',
          company: 'AURA Fashion Concept',
          projectRef: 'Sample · AURA',
        },
        {
          id: 't2',
          quote:
            'Calm typographic restraint completely transforms how patients experience an online clinic. Booking feels direct and reassuring.',
          name: 'Dr. Tariq Al-Mansour',
          role: 'Co-Founder',
          company: 'MEDORA Health Concept',
          projectRef: 'Sample · MEDORA',
        },
        {
          id: 't3',
          quote:
            'Pairing disciplined art direction with immediate front-end responsiveness gives a product launch unmistakable authority.',
          name: 'Faisal Al-Otaibi',
          role: 'Brand Lead',
          company: 'VELO Mobility Concept',
          projectRef: 'Sample · VELO',
        },
      ],
    },
    contact: {
      sectionLabel: 'Start a Conversation',
      headline: "LET'S CREATE SOMETHING EXTRAORDINARY.",
      subtext:
        'Preparing a launch, repositioning your brand, or building a new digital flagship? Explore the interactive brief preview below.',
      whatsappCta: 'WhatsApp Preview (Demo)',
      whatsappMessage: 'Hello NOVA Studio team, I would like to explore a new digital project.',
      whatsappUnconfiguredNotice:
        'WhatsApp is currently in demo preview mode. Configure VITE_WHATSAPP_NUMBER prior to deployment to enable a live chat link.',
      emailValue: 'hello@novastudio.example',
      copyEmail: 'Copy demo email',
      copiedEmail: 'Copied',
      channelsDisclaimer:
        'Note: Contact channels shown here (placeholder email and demo WhatsApp link) are illustrative placeholders and not live operational endpoints.',
      formTitle: 'Project Brief (Interactive Demo)',
      fields: {
        name: 'Your Name',
        namePlaceholder: 'e.g. Sarah Al-Qahtani',
        email: 'Email Address',
        emailPlaceholder: 'name@company.com',
        service: 'Service Required',
        servicePlaceholder: 'Select primary discipline',
        description: 'Project Description',
        descriptionPlaceholder: 'Tell us about your goals, timeline, and what you want to build...',
      },
      serviceOptions: [
        'Web Design & Development',
        'Brand Identity',
        'UI/UX Design',
        'Digital Strategy',
        'Full Brand + Website Package',
      ],
      submitCta: 'Preview Inquiry Submission',
      validation: {
        nameRequired: 'Please enter your name.',
        emailInvalid: 'Please enter a valid email address.',
        serviceRequired: 'Please select a required service.',
        descriptionRequired: 'Please share a brief project description (at least 10 characters).',
      },
      success: {
        title: 'Demo Submission Recorded Locally',
        message:
          'Your project brief passed client-side validation in this interactive preview. This is a frontend-only demonstration.',
        demoNotice:
          'Important: No real email was sent and no data was transmitted to an external server.',
        sendAnother: 'Preview Another Brief',
      },
    },
    footer: {
      tagline: 'Digital Experiences. Beyond Expectations.',
      navigationTitle: 'Navigation',
      connectTitle: 'Demo Channels',
      emailLabel: 'Placeholder email:',
      emailPlaceholderValue: 'hello@novastudio.example',
      copyright: '© 2026 NOVA Studio. Agency Showcase Concept.',
      demoDisclaimer:
        'Frontend portfolio demonstration — showcased projects, testimonials, and contact channels are fictional concept placeholders.',
      socials: [
        { label: 'Behance', href: '#work', ariaLabel: 'Selected Work showcase anchor' },
        { label: 'Instagram', href: '#about', ariaLabel: 'About Studio section anchor' },
        { label: 'LinkedIn', href: '#contact', ariaLabel: 'Contact demo section anchor' },
      ],
    },
  },
};
