import { Treatment, CaseStudy, Certification, Review, BlogPost, FaqItem } from "../types";

export const DENTIST_INFO = {
  name: "Dt. Ümit Narin",
  title: "Estetik Diş Hekimliği ve İmplantoloji Uzmanı",
  bio: "Dt. Ümit Narin, Ege Üniversitesi Diş Hekimliği Fakültesi'nden mezun olduktan sonra, estetik diş hekimliği ve cerrahi implantoloji alanlarında yurt içi ve yurt dışındaki prestijli akademilerde eğitimlerini tamamlamıştır. 12 yılı aşkın klinik deneyimiyle, özellikle gülüş tasarımı, lamine veneer, zirkonyum kaplama ve modern implant tedavileri konusunda uzmanlaşmıştır. Hasta odaklı tedavi felsefesini benimseyen Dt. Narin, her hastasına en yeni dijital diş hekimliği teknolojileriyle, konforlu ve ağrısız bir tedavi süreci sunmayı hedeflemektedir.",
  experienceYears: 12,
  completedTreatments: "8,500+",
  patientSatisfaction: "%99.4",
  clinicAddress: "Fırat, 21070 Kayapınar/Diyarbakır",
  clinicPhone: "+90 (546) 430 97 08",
  clinicEmail: "info@umitnarin.com",
  clinicMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.1033194490547!2d40.131480175613945!3d37.928016671947184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40751f04f431cb27%3A0x749cfe3d9abd35db!2zTWluZURlbnQtU2HEn2zEsWs!5e0!3m2!1str!2str!4v1779282820501!5m2!1str!2str",
  workingHours: [
    { day: "Pazartesi - Cuma", hours: "09:00 - 19:00" },
    { day: "Cumartesi", hours: "09:00 - 15:00" },
    { day: "Pazar", hours: "Kapalı (Sadece Acil Randevular)" },
  ],
};

export const TREATMENTS: Treatment[] = [
  {
    id: "implant-tedavisi",
    name: "İmplant Tedavisi",
    shortDesc: "Eksik dişlerin yerine, çene kemiğine yerleştirilen titanyum vidalarla ömürlük ve son derece doğal diş konforu.",
    longDesc: "İmplant tedavisi, kaybedilen dişlerin estetik ve fonksiyonel olarak geri kazandırılması amacıyla çene kemiğine yapay diş kökü yerleştirilmesi işlemidir. Doğal dişlerle mükemmel bir uyum ve en yüksek çiğneme gücü sağlar.",
    icon: "ShieldAlert",
    duration: "1 Seans (Cerrahi) + 3 Ay Kaynama Süresi",
    recovery: "3-5 Gün hafif çiğneme kısıtlaması",
    details: [
      "3D Bilgisayarlı Çene Tomografisi ile planlama",
      "Ağrısız ve steril cerrahi operasyon",
      "İçeriğinde %100 biyo-uyumlu titanyum çiviler",
      "Dikişsiz implant cerrahisi seçeneği (Flapless)"
    ],
    whatIsThis: "İmplant tedavisi, herhangi bir sebeple kaybedilen doğal dişlerin kökünü taklit etmesi amacıyla titanyum alaşım malzemelerden üretilen yapay diş köklerinin çene kemiğine yerleştirilmesi cerrahi prosedürüdür. Bu köklerin üzerine yerleştirilen sabit veya hareketli protezler sayesinde hastalarımız çiğneme, konuşma ve estetik gülüş özelliklerini tıpkı kendi dişleri gibi geri kazanırlar.",
    whoIsItFor: [
      "Tek diş veya çoklu diş kayıpları yaşayan hastalar",
      "Yarıda kalmış protezler yerine sabit protez konforu arayanlar",
      "Köprü uygulaması için sağlıklı komşu dişlerini aşındırmak istemeyenler",
      "Çene kemiği gelişimi tamamlanmış (18 yaş üzeri) ve yeterli kemik hacmine sahip hastalar",
      "Genel sağlık durumu cerrahi işleme elverişli olan bireyler"
    ],
    processSteps: [
      "Radyolojik Ön Teşhis: 3D Bilgisayarlı Çene Tomografisi vasıtasıyla kemik boyutu, yoğunluğu ve sinir kanallarının mesafesi milimetrik tespit edilir.",
      "Cerrahi Planlama: İmplantların açısı ve milimetrik pozisyonları bilgisayar ortamında planlanır, gerekirse dikişsiz cerrahi plak şablonları hazırlanır.",
      "İmplant Yerleşimi: Lokal anestezi altında (veya hasta talebine göre sedasyonla) titanyum vidalar steril şartlarda hassasiyetle kemiğe yerleştirilir.",
      "Osteointegrasyon (Kaynama Süreci): Titanyumun kemik dokusuyla biyolojik olarak kaynaşması için hastaya göre 2 ila 3 ay süreyle beklenir.",
      "Protez Yapımı: Kaynaşma sonrası diş eti şekillendirici takılır, hassas ölçü alınır ve Cad-Cam teknolojisiyle işlenmiş zirkonyum/porselen diş kuronları yerleştirilir."
    ],
    sessionCount: "Cerrahi yerleşim aşaması tek bir seansta tamamlanır (implant başına ortalama 15 dakika). Bekleme sürecinin ardından ölçü ve yapıştırma aşamaları için 2-3 kısa seans gerekir.",
    specialFaqs: [
      {
        question: "İmplant cerrahisi ağrılı bir işlem midir?",
        answer: "Hayır. Operasyon lokal anestezi altında tamamen uyuşuk vaziyette yürütülür. Anestezi etkisi geçtikten sonra oluşabilecek hafif sızılar ise hekimimizin önereceği standart ağrı kesicilerle kolaylıkla kontrol altına alınır."
      },
      {
        question: "Vücudun implantı kabul etmeme riski var mıdır?",
        answer: "Titanyum tamamen biyolojik olarak uyumlu, alerjik reaksiyon uyandırmayan tescilli bir metaldir. Uygun kemik analizi ve doğru steril klinik şartlarda yapıldığında implant başarı oranı %98'in üzerindedir."
      }
    ]
  },
  {
    id: "dis-beyazlatma",
    name: "Diş Beyazlatma",
    shortDesc: "Klinik ortamında, güvenli lazer teknolojisi veya evde özel plaklarla diş tonunuzu 4 ila 8 tona kadar açın.",
    longDesc: "Zamanla kahve, çay, sigara kullanımı veya yaşlanmaya bağlı oluşan renklenmelerin, özel beyazlatma jelleri ve modern ışık kaynakları ile güvenli bir şekilde giderilmesidir.",
    icon: "Activity",
    duration: "1 Seans (45 Dakika)",
    recovery: "Hemen (İlk 48 saat hassasiyet takibi)",
    details: [
      "Klinik ortamında hekim gözetiminde lazerle beyazlatma (Office Bleaching)",
      "Diş minesine zarar vermeyen sertifikalı jeller",
      "Kişiye özel koruyucu diş eti bariyeri uygulaması",
      "Kalıcı sonuçlar için kişiye özel ev tipi beyazlatma plakları desteği"
    ],
    whatIsThis: "Diş beyazlatma (Bleaching), dişlerin gözenekli mine tabakasında biriken koyu renkli organik ve inorganik maddelerin, hekim gözetimindeki özel sertifikalı karbamid veya hidrojen peroksit jeller ve tescilli mavi ışık kaynaklarıyla çözülmesi işlemidir. Diş yüzeyini zımparalamadan, kimyasal renk pigmentlerini açarak dişe gerçek doğal ışıltısını geri kazandırır.",
    whoIsItFor: [
      "Çay, kahve, asitli içecekler ve sigara kullanımı sebebiyle yoğun lekelenmesi olanlar",
      "Kanal tedavisi görmüş tekil dişlerde zamanla gri-kahverengi renk değişimi yaşayanlar",
      "Yaş ilerlemesine bağlı olarak genel diş tonunun sarardığını fark edenler",
      "Diş teli tedavisi tamamlanmış ve dişlerine estetik bir parlaklık kazandırmak isteyen hastalar"
    ],
    processSteps: [
      "Dental Hijyen: Plak ve tortular temizlenir, diş taşı temizliği yapılarak tertemiz bir diş yüzeyi elde edilir.",
      "İzolasyon: Dudaklar ve yanaklar retraktörle uzaklaştırılır; diş etlerinin zarar görmemesi için ışıkla sertleşen sıvı koruyucu baraj uygulanır.",
      "Jel Uygulama: Özel beyazlatma aktifi hassasiyetle dişlerin ön yüzeylerine tabakalandırılır.",
      "Lazer/Işık Aktivasyonu: Diş yapısına uygun dalga boyundaki tescilli beyazlatma ışığı ile jel 15'er dakikalık 3 periyot halinde aktive edilir.",
      "Arındırma & Koruma: Dişler yıkanır, florür desteği ve hassasiyet azaltıcı kremlerle işlem keyifle sonlandırılır."
    ],
    sessionCount: "Klinik ortamında gerçekleştirilen Ofis tipi beyazlatma tek bir seansta (yaklaşık 45-60 dakika) tamamlanır. Çok derin renklenmelerde nadiren ikinci seansa ihtiyaç duyulabilir.",
    specialFaqs: [
      {
        question: "Diş beyazlatma minesini aşındırır veya inceltir mi?",
        answer: "Hayır. Klinik şartlarında uygulanan onaylı jeller diş minesi üzerinde aşındırma yapmaz; sadece mine gözeneklerindeki yabancı boyar maddeleri oksijenle çözerek beyazlama sağlar."
      },
      {
        question: "Beyazlatma sonrası nelere dikkat etmeliyiz?",
        answer: "İlk 48-72 saat 'beyaz diyet' uygulanmalıdır. Bu süreçte salçalı yemekler, vişne suyu, şarap, çay, kahve ve sigara gibi yoğun renk içeren ürünlerden kesinlikle uzak durulmalıdır."
      }
    ]
  },
  {
    id: "ortodonti",
    name: "Ortodonti",
    shortDesc: "Braket sistemleriyle dişlerdeki çapraşıklık, aralıklar ve çene kapanış bozukluklarının ideal anatomiye getirilmesi.",
    longDesc: "Ortodonti, dişlerin çene kemiği üzerindeki yerleşim bozukluklarını, çapraşıklıkları ve çeneler arası ilişkileri metal veya safir estetik braketler yardımıyla tedavi eden uzmanlık dalıdır.",
    icon: "Heart",
    duration: "12-24 Ay (Vakaya göre)",
    recovery: "İlk hafta hafif alışma süreci",
    details: [
      "Klasik metal braketler veya estetik seramik/safir braketler",
      "Kişiye özel çene ortopedisi analizi",
      "Alt ve üst çene kapanış ilişkilerinin restorasyonu",
      "Dişlerin kemik içinde güvenli hareketini sağlayan hafif kuvvetler"
    ],
    whatIsThis: "Ortodonti, dişlerin ve çenelerin konum bozukluklarını düzeltmeyi amaçlayan geleneksel diş hekimliği uzmanlık alanıdır. Braketler (teller) aracılığıyla dişlere sürekli ve hafif kuvvetler uygulanarak dişlerin çene kemiği içerisinde milimetrik olarak hareket etmesi ve ideal estetik sıraya, ideal ısırma kuvveti dengesine ulaşması sağlanır.",
    whoIsItFor: [
      "Dişlerinde çapraşıklık, dönüklük veya üst üste binme olan hastalar",
      "Dişleri arasında estetik dışı aralıklar (diastema) bulunanlar",
      "Çene kapanışında uyumsuzluk yaşayanlar (alt çenenin çok önde veya geride olması)",
      "Konuşma, çiğneme veya kelimeleri telaffuz etmede diş yapısına bağlı sorunlar yaşayan her yaş grubu"
    ],
    processSteps: [
      "Klinik & Radyolojik Analiz: Ağız içi tarama, yüz fotoğrafları çekilir, panoramik ve sefalometrik röntgenlerle çene kemiği analizleri yapılır.",
      "Çürük & Diş Eti Hazırlığı: Tel takılmadan önce ağızdaki tüm çürükler tedavi edilmeli ve diş etleri tamamen sağlıklı hale getirilmelidir.",
      "Braketlerin Yapıştırılması: Özel yapıştırıcı ajanlar yardımıyla metal veya estetik seramik braketler diş yüzeylerine tek tek yapıştırılıp sabitlenir.",
      "Ark Tellerinin Geçirilmesi: Braketlerin içinden esnek teller geçirilerek hafif kuvvet döngüsü başlatılır.",
      "Aylık Kontroller ve Aktivasyon: Ortalama 4-5 haftada bir teller sıkılaştırılır, elastikler ayarlanır ve diş hareketi hekim tarafından adım adım yönetilir."
    ],
    sessionCount: "Ortodonti uzun soluklu bir tedavidir. Vakanın durumuna göre 12 ila 24 ay arasında sürer ve aylık 1 kez olmak üzere rutin kontrol seansları gerektirir.",
    specialFaqs: [
      {
        question: "Yetişkin yaşta diş teli takılabilir mi?",
        answer: "Evet. Ortodontik tedavilerde yaş sınırı yoktur. Çene kemiği ve diş etleri sağlıklı olduğu sürece her yaştaki yetişkine başarıyla tel tedavisi yapılabilir."
      },
      {
        question: "Diş teli takılırken veya sonrasında ağrı olur mu?",
        answer: "Braketlerin ilk takıldığı gün ve aylık kontrolleri takip eden ilk 2-3 gün dişlerde baskı hissi ve yemek yerken hafif hassasiyet normaldir, ardından dokular tamamen alışır."
      }
    ]
  },
  {
    id: "seffaf-plak-tedavisi",
    name: "Şeffaf Plak Tedavisi",
    shortDesc: "Metal teller olmadan, tamamen görünmez kişiye özel şeffaf plak serileriyle (Invisalign vb.) modern telsiz ortodonti.",
    longDesc: "Diş çapraşıklıklarını metal teller yerine, dışarıdan kesinlikle fark edilmeyen hafif ve konforlu plaklarla düzelten, konuşmayı etkilemeyen yeni nesil telsiz tedavi yöntemi.",
    icon: "Layers",
    duration: "6-15 Ay (Hafif-orta vakalarda)",
    recovery: "Hemen günlük yaşama devam",
    details: [
      "iTero 3D ağız içi tarayıcılarla dijital planlama",
      "ClinCheck simülasyonu ile daha tedaviye başlamadan bitiş sonucunu görme",
      "Yemek yerken, diş fırçalarken plakları çıkarabilme özgürlüğü",
      "Konforlu, acısız ve sosyal yaşantıyı etkilemeyen tasarım"
    ],
    whatIsThis: "Şeffaf plak tedavisi (Invisalign vb.), diş çapraşıklığı ve aralıklarının düzeltilmesinde metal braket ve tel sistemlerini tamamen ortadan kaldıran, bilgisayarlı CAD/CAM teknolojisiyle hastaya özel üretilen, şeffaf polimer malzemeden yapılan takıp çıkarılabilir plak serileridir. Diş yüzeyine ataşman adı verilen küçük estetik çıkıntılar yerleştirilerek plakların dişleri milimetrik kontrolle doğru yerlerine itmesi sağlanır.",
    whoIsItFor: [
      "İş ve sosyal hayatı gereği tel görüntüsünü kesinlikle tercih etmeyen profesyoneller",
      "Rutin fırçalama ve diş ipi kullanımını tellerin engellemesini istemeyenler",
      "Tel batması, yara veya alerjik braket reaksiyonlarından kaçınan hassas hastalar",
      "Hafif, orta veya bazı ileri seviye çapraşıklık şikayeti olan bireyler"
    ],
    processSteps: [
      "Dijital Ağız Tarama: Dişlerinizin 3D sanal modeli iTero tarayıcıyla saniyeler içinde çıkarılır.",
      "ClinCheck Planlaması: Hekimimiz her dişe özel mikron düzeyinde hareket planlar. Tedavi simülasyonu ile dişlerin haftalık ilerleyişi ve nihai estetik görünüm bilgisayar ekranında hastaya gösterilir.",
      "Plak Setlerinin Üretimi: Onaylanan tasarım Amerika/Avrupa laboratuvarlarında tescilli akıllı malzemelerle basılarak klinikle buluşur.",
      "Ataşman Uygulaması: Plakların dişi kavrayabilmesi için diş renginde ufak kompozit noktacıklar yerleştirilir ve ilk plak setleri teslim edilir.",
      "Kullanım ve Rutin Değişim: Hasta plakları günde en az 20-22 saat takar, her 7-10 günde bir sıradaki yeni plağa bağımsız olarak geçer."
    ],
    sessionCount: "Toplam tedavi süresi vakaya bağlı olarak 6 ila 15 ay arasında sürer. Kontroller 6-8 haftada bir gerçekleştirildiği için şehir dışı veya yurt dışı hastalar için son derece uygundur.",
    specialFaqs: [
      {
        question: "Plaklar konuşmamı bozar mı, pelteklik yapar mı?",
        answer: "İlk plak takıldığında dilde 1-2 günlük kısa bir adaptasyon süreci dışında konuşmanızı kesinlikle etkilemez; sunumlarda, toplantılarda keyifle kullanabilirsiniz."
      },
      {
        question: "Sıcak içecekler içerken plakları çıkartmak gerekir mi?",
        answer: "Evet. Aşırı sıcak çay veya kahve plakların termoplastik yapısını bozabilir. Sıcak içecekler tüketileceğinde plaklar çıkarılmalı, ılık/soğuk su içerken ise takılı kalabilir."
      }
    ]
  },
  {
    id: "zirkonyum-kaplama",
    name: "Zirkonyum Kaplama",
    shortDesc: "Metal desteksiz, yüksek dayanıklılık, tam doku dostu yapı ve üstün ışık geçirgenliği sunan kronlar.",
    longDesc: "Geleneksel metal destekli porselenlerin aksine, alt yapıda zirkonyum beyaz metalinin kullanıldığı kaplamalardır. Diş eti sınırında gri gölgeleme yapmaz, tamamen biyolojik olarak uyumludur ve mükemmel bir direnç gösterir.",
    icon: "Sparkles",
    duration: "2-3 Seans",
    recovery: "Hemen",
    details: [
      "Dokularla bio-uyumlu, alerji yapmayan ham madde",
      "Metal altyapı içermeyen modern sistem",
      "Yüksek çiğneme kuvvetine dayanıklı arka bölge kullanımı",
      "Doğal diş şeffaflığı ve renk derinliği"
    ],
    whatIsThis: "Zirkonyum kaplama, diş dokularına tam uyumlu, beyaz renkli ve ışık geçirgenliği son derece yüksek olan zirkonyum dioksit kristalinin altyapı olarak kullanıldığı estetik kron kaplamadır. Geleneksel porselen kaplamaların altındaki gri metal plakları ortadan kaldırarak diş eti sınırında mor renk yansımasını engeller ve doğal diş minesi derinliğini birebir yansıtır.",
    whoIsItFor: [
      "Dişlerinde aşırı madde kaybı, büyük dolgular veya kırıklar olanlar",
      "Eski metal destekli köprü ve kaplamalarından dolayı estetik kaygısı ve morarma yaşayanlar",
      "Çapraşık veya aralıklı olup ortodontiyi tercih etmeyen estetik düzeltme arayan hastalar",
      "Kanal tedavisi sonrasında aşırı kırılgan hale gelen ve kuron desteği gerektiren dişler",
      "Metal alerjisi olan ve biyolojik uyumlu malzeme isteyen bireyler"
    ],
    processSteps: [
      "Diş Hazırlığı: Lokal anestezi uygulanarak kaplanacak dişler estetik ölçülerde çevrelerinden hafifçe küçültülür.",
      "Dijital Kayıt: 3D kameralar ile dijital ölçü hassas mikron seviyelerinde alınır, hiçbir ölçü kaşığı veya bulantı hissi yaşanmaz.",
      "Geçici Kuronlar: Dişlerin soğuk sıcaktan hassasiyet yapmaması ve estetik durması için aynı gün geçici kaplamalar yapıştırılır.",
      "CAD-CAM Tasarım ve Kazıma: Zirkonyum bloklar bilgisayar destekli tasarım cihazlarımızda hastanın yüz yapısına göre milimetrik sıfır hata ile işlenir.",
      "Prova ve Simantasyon (Kalıcı Yapıştırma): Dişe prova edilen zirkonyum kronlar, renk ve uyumu kusursuz olduğunda özel yapıştırıcılarla sabitlenir."
    ],
    sessionCount: "Zirkonyum kaplama tedavisi çoğunlukla 2-3 seans sürer ve 5 ila 7 gün içerisinde baştan sona tamamlanıp kalıcı olarak yapıştırılır.",
    specialFaqs: [
      {
        question: "Zirkonyum kaplama zamanla renk değiştirir mi, sararır mı?",
        answer: "Hayır. Zirkonyum porselen pürüzsüz glaze edilmiş bir yüzeye sahip olduğundan üzerinde sigara, kahve, çay lekeleri tutunamaz ve ilk günkü parlak beyazlığını ömür boyu muhafaza eder."
      },
      {
        question: "Kaplama yapılan dişlerimin altında sonradan çürüme olur mu?",
        answer: "Zirkonyum kaplamalar CAD-CAM sistemle dişe tam mikron boyutta oturduğundan arada boşluk kalmaz. İyi bir ağız bakımı ile kaplama altındaki orijinal dişleriniz güvenle korunur."
      }
    ]
  },
  {
    id: "gulus-tasarimi",
    name: "Gülüş Tasarımı",
    shortDesc: "Yüz hatlarınıza ve karakterinize en uygun, doğal ve estetik gülüşün dijital teknolojilerle tasarlanması.",
    longDesc: "Gülüş tasarımı (Hollywood Smile), hastanın ağız, diş ve dudak yapısının bir bütün halinde estetik prensiplere göre yeniden yapılandırılmasıdır. Dijital tarayıcılar ve fotoğraf analizleri kullanılarak tamamen kişiye özel bir tasarım oluşturulur.",
    icon: "Award",
    duration: "2-3 Seans",
    recovery: "Hemen sosyal hayata dönüş",
    details: [
      "Dijital 3D ağız içi tarama",
      "Kişiselleştirilmiş mock-up (geçici tasarım uygulama)",
      "Minimal aşındırmalı kaplama veya laminalar",
      "Dudak çizgisi ve pembe estetik (diş eti düzenlemesi)"
    ],
    whatIsThis: "Gülüş tasarımı (Hollywood Smile), dişlerin, diş etlerinin, dudakların ve yüz hatlarının birbiriyle olan geometrik ve oransal ilişkisinin estetik kriterler (altın oran) çerçevesinde dijital yazılımlarla planlanması ve hastaya en yakışan doğal gülüş formunun saptanıp yapılması sürecidir. Diş eti boyu ayarlamalarından lamine veneer yapraklara kadar entegre birçok sanatsal dokunuşu barındırır.",
    whoIsItFor: [
      "Gülümserken dişlerinin renginden, boyutundan veya asimetrisinden mutsuz olanlar",
      "Konuşurken veya gülerken diş etleri aşırı görünen (Gummy Smile) hastalar",
      "Ön dişlerinde kırık, aşınma, çatlak veya şekilsizlik olan kişiler",
      "Yüz hatlarıyla uyum sağlayan daha genç, enerjik ve parlak bir yüz ifadesi kazanmak isteyenler"
    ],
    processSteps: [
      "Stüdyo Kaydı & Fotoğraflama: Özel klinik stüdyomuzda hastanın gülerken, konuşurken yüksek çözünürlüklü fotoğrafları ve videoları farklı açılardan çekilir.",
      "Dijital Tasarım: Fotoğraflar bilgisayar programına tanımlanarak göz bebekleri, çene hattı ve dudak kavisleriyle uyumlu diş boyları sanal olarak oluşturulur.",
      "Mock-Up (Önizleme Seansı): Hazırlanan sanal tasarım, özel geçici materyallerle hastanın orijinal dişlerine hiçbir zarar vermeden ağzına uygulanır. Hasta tedavi sonucunu dişleri kesilmeden aynada doğrudan görerek onay verir.",
      "Lazer Pembe Estetik: Gerekirse diş etleri seviyelenerek asimetriler lazerle kansız ve dikişsiz eşitlenir.",
      "Kalıcı Restorasyonlar: Onaylanan formlarda lamine veneer (yaprak porselen) veya ultralight zirkonyum kaplamalar hassasiyetle yapıştırılır."
    ],
    sessionCount: "Gülüş tasarımı planlama dahil genellikle 3 seans sürer. Tedavi süresi vakanın kapsamına göre 7-10 gündür.",
    specialFaqs: [
      {
        question: "Gülüş tasarımı yapıldıktan sonra konuşmam değişir mi?",
        answer: "Hayır. Tasarım aşamasında konuşma fonksiyon sesleri dikkate alınır ve mock-up aşamasında test edilir. Bu sayede hiçbir konuşma bozukluğu riski taşımadan mükemmel gülüşe erişirsiniz."
      },
      {
        question: "Lamine veneer (yaprak porselen) dişlerden kolayca düşer mi?",
        answer: "Hayır. Lamine porselenler diş minesi ile kimyasal olarak bütünleşen üstün adeziv yapıştırma teknolojilerine sahiptir. Doğal diş minesinden ayırt edilemeyecek güçte yapışır ve düşmez."
      }
    ]
  },
  {
    id: "kanal-tedavisi",
    name: "Kanal Tedavisi",
    shortDesc: "Derin çürük veya travma almış dişleri kurtarmak için modern endodontik döner aletlerle ağrısız temizleme.",
    longDesc: "Dişin canlı dokusu olan pulpanın (sinirlerin) iltihaplandığı durumlarda, kanalın mikroplanmış dokulardan arındırılması, dezenfekte edilmesi ve biyo-uyumlu kanal dolgu maddeleriyle hermetik olarak kapatılması işlemidir.",
    icon: "Scissors",
    duration: "1 Seans (Çoklu köklerde bazen 2 seans)",
    recovery: "24-48 saat çiğnemede hafif hassasiyet",
    details: [
      "Gelişmiş dijital apeks bulucular (Apex Locator)",
      "Mikroskop/büyüteç altında hassas çalışma",
      "Ağrısız lokal anestezi teknikleri",
      "Doğal dişi ağızda tutarak kemik erimesini önleme"
    ],
    whatIsThis: "Kanal tedavisi (Endodonti), ilerlemiş diş çürüğü, diş çatlağı veya travma gibi sebeplerle dişi besleyen damar ve sinir paketinin (pulpa) enfekte olduğu durumlarda, bu sinirlerin enfeksiyon alanından temizlenip hermetik (sızdırmaz) bir şekilde doldurulmasıdır. Amacı, ağrıya ve apselere yol açan iltihabı kuruturken dişi çekmekten kurtararak çene kemiğinde muhafaza etmektir.",
    whoIsItFor: [
      "Gece uykudan uyandıran, zonklayan tarzda şiddetli diş ağrısı olanlar",
      "Sıcak ve soğuk besinlere karşı dakikalarca geçmeyen aşırı sızlı hassasiyet hissedenler",
      "Çiğneme veya diş üzerine basma esnasında keskin ağrı duyanlar",
      "Diş çevresindeki diş etinde iltihaplı fistül (sivilce benzeri yapı) veya yüz bölgesinde şişlik gelişen hastalar"
    ],
    processSteps: [
      "Görüntüleme & Röntgen: Dişin kök uçlarındaki kemik yıkımı ve kanal boyu dijital röntgenle net olarak saptanır.",
      "Anestezi: Dişin çevresindeki sinirler lokal anestezi ile tamamen uyuşturulur; işlem esnasında ağrı engellenir.",
      "Temizlik: Dişteki çürük dokular temizlenir, pulpa odasına girilerek iltihaplı sinir lifleri mikro-endodontik döner aletlerle çıkarılır.",
      "Genişletme & Yıkama: Kök kanalları özel solüsyonlarla yıkanarak tüm bakteriler mekanik ve kimyasal olarak yok edilir. Dijital Apex bulucu makinelerle kök ucu tam saptanır.",
      "Hermetik Dolum: Sızdırmazlık sağlayan biyo-uyumlu gütaperka malzemesiyle kanallar doldurulur; üzerine estetik kompozit dolgu veya gerekli görülürse kuron kaplama restorasyonu yapılır."
    ],
    sessionCount: "Akut ağrılı canlı dişlerde genellikle tek seansta (30-45 dklik süreçte) başarıyla biter. İleri derece apseli veya enfeksiyonlu dişlerde ise dezenfektan ilaç koyarak 2 seans planlanabilir.",
    specialFaqs: [
      {
        question: "Kanal tedavisi yapılan diş ölü mü sayılır, ne kadar yaşar?",
        answer: "Dişin siniri alındığı için sıcak soğuğu hissetmez ancak çene kemiğine tutunmaya ve çiğnemeye katkı sağlamaya devam eder. İyi yapılan bir kanal tedavili diş ömür boyu ağızda hizmet edebilir."
      },
      {
        question: "Kanal tedavisi yapılırken acı hisseder miyim?",
        answer: "Kesinlikle hayır. Modern lokal anestezikler dişin sinir iletimini tamamen keser. Tedavi sırasında en ufak bir sızlama hissetmezsiniz; hastalarımızın önemli bir kısmı seans sırasında uyumaktadır."
      }
    ]
  },
  {
    id: "cocuk-dis-hekimligi",
    name: "Çocuk Diş Hekimliği",
    shortDesc: "Süt ve genç kalıcı dişlerin sağlığı için koruyucu tedaviler, flor uygulamaları ve fobi oluşturmayan eğlenceli yaklaşım.",
    longDesc: "Pedodonti, 0-13 yaş grubu çocukların sağlıklı diş gelişimlerini takip eden, koruyucu tedaviler, yer tutucular ve çocuklara özel dolgular gibi ağız sağlığı hizmetlerini sunan diş hekimliği dalıdır. Amacımız çocuklara diş hekimi fobisi yaşatmamaktır.",
    icon: "Smile",
    duration: "1 Seans",
    recovery: "Hemen",
    details: [
      "Çürük önleyici florid jel uygulamaları",
      "Derin diş oluklarını kapatan Fissür Örtücü (Sealant)",
      "Erken süt dişi çekimlerinde çene gelişimini koruyan yer tutucular",
      "Oyunlaştırılmış, diş hekimi korkusunu yenen özel seanslar"
    ],
    whatIsThis: "Çocuk Diş Hekimliği (Pedodonti), doğumdan ergenlik çağına kadar geçen süreçte çocukların ağız-diş sağlığını koruyan, süt dişlerindeki çürükleri tedavi eden ve daimi dişlerin sürmesini gelişimsel olarak takip eden branştır. Çocukların diş hekimiyle ilk deneyimlerinin korkusuz, travmasız ve eğlenceli geçmesi hedeflenir.",
    whoIsItFor: [
      "0-13 yaş arası koruyucu, önleyici ve gelişimsel diş takibi gereken tüm çocuklar",
      "Süt dişlerinde çürük, apse veya ağrı şikayeti olan minik hastalar",
      "Diş gıcırdatma veya parmak emme gibi tırnak yeme alışkanlığı olan çocuklar",
      "Diş hekimi korkusu olup geleneksel yöntemlerle koltuğa oturamayan fobili çocuklar"
    ],
    processSteps: [
      "Uyum & Oyun Seansı: Çocuk hastamızla muayene öncesi tanışılır; aletler 'rüzgar üfleyen fil', 'diş ojesi' gibi hikayeleştirilerek korku tamamen engellenir.",
      "Önleyici Bakım Planı: Beslenme alışkanlıkları ve fırçalama sıklığı analiz edilerek çocuğun çürük risk grubu belirlenir.",
      "Fissür Örtücü (Diş Aşısı): Azı dişlerinin üzerindeki girintili derin oluklar çürümeye vakit kalmadan sıvı kompozit örtücülerle kapatılır.",
      "Florid Uygulaması: Diş minesini asit ve bakterilere karşı 4 kat güçlendiren flor vernik/jel uygulaması saniyeler içinde sürülür.",
      "Tedavi & Yer Tutucu: Eğer çürük oluşmuşsa çocuk dolgusu tamamlanır; erken çekilmiş süt dişinin boşluğunu korumak için yer tutucu aparey takılır."
    ],
    sessionCount: "Çocuklarda dikkat süresi sınırlı olduğundan seans süreleri çok kısa (ortalama 15-20 dakika) tutulur ve çoğunlukla tek seansta dolgu/koruyucu işlemler bitirilir.",
    specialFaqs: [
      {
        question: "Süt dişleri nasılsa dökülecek, dolgu yaptırmak gerekli mi?",
        answer: "Evet, son derece önemlidir. Süt dişleri çocuğun sağlıklı beslenmesini, konuşmasını sağlar ve en önemlisi altından gelecek kalıcı dişlerin yerini korur. Tedavi edilmeyen süt dişleri alttaki kalıcı dişi de enfekte edebilir."
      },
      {
        question: "İlk diş muayenesi ne zaman yapılmalıdır?",
        answer: "Dünya Sağlık Örgütü ve pedodontistler, bebeğin ilk süt dişi sürdükten sonra (yaklaşık 6. ay - 1. yaş arası) ilk diş kontrolünün yapılmasını önermektedir."
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "vaka-gulus-tasarimi",
    category: "gulus",
    title: "Estetik Gülüş Tasarımı (Full Ağız Lamina)",
    description: "Ön dişlerdeki asimetri, sararma ve hafif çapraşıklık şikayeti ile başvuran hastamıza 10 adet üst lamine veneer uygulandı.",
    processInfo: "Dijital tarama yapıldı, mock-up ile hastanın onayı alındı. 5 gün içerisinde porselen laminalar dişe zarar vermeden uygulandı.",
    duration: "5 Gün",
    patientAge: 29,
    tags: ["Lamina Veneer", "Gülüş Tasarımı", "Pembe Estetik"],
    beforeImage: "https://picsum.photos/seed/dentalbefore1/600/400",
    afterImage: "https://picsum.photos/seed/dentalafter1/600/400",
    visualType: "Önce / Sonra"
  },
  {
    id: "vaka-beyazlatma",
    category: "beyazlatma",
    title: "Lazer Destekli Ofis Tipi Beyazlatma",
    description: "Yoğun kahve-çay tüketimine bağlı dişlerinde A3.5 seviyesinde koyuluk olan hastanın renk tonu B1 (en doğal beyaz ton) seviyesine getirildi.",
    processInfo: "Diş etleri özel bariyerle korundu, %37'lik beyazlatma jeli diş yüzeyine uygulandı ve 3 seans x 15 dakika lazer ışını tabi tutuldu.",
    duration: "1 Seans",
    patientAge: 34,
    tags: ["Diş Beyazlatma", "Ofis Tipi", "Hassasiyet Yok"],
    beforeImage: "https://picsum.photos/seed/dentalbefore2/600/400",
    afterImage: "https://picsum.photos/seed/dentalafter2/600/400",
    visualType: "Önce / Sonra"
  },
  {
    id: "vaka-implant",
    category: "implant",
    title: "Tek Diş Eksikliği İmplant ve Zirkonyum Kron",
    description: "Sağ üst birinci küçük azı dişinin kaybı nedeniyle oluşan boşluk, dikişsiz cerrahi implant ve üzerine zirkonyum kaplama ile giderildi.",
    processInfo: "Çene tomografisiyle milimetrik ölçüm yapıldı, kemik içi implant yerleştirildi. 3 aylık OSSTELL osteointegrasyon ölçümünden sonra kron takıldı.",
    duration: "3 Ay (Toplam)",
    patientAge: 42,
    tags: ["İmplant", "Zirkonyum", "Dikişsiz Cerrahi"],
    beforeImage: "https://picsum.photos/seed/dentalbefore3/600/400",
    afterImage: "https://picsum.photos/seed/dentalafter3/600/400",
    visualType: "Tedavi sonrası gülüş"
  },
  {
    id: "vaka-zirkonyum",
    category: "zirkonyum",
    title: "Ön Bölge 4 Diş Zirkonyum Kron Değişimi",
    description: "Daha önce yapılmış metal destekli, diş eti sınırında mor renk bırakmış ve mat görünüm sunan kaplamalar sökülerek, biyo-uyumlu zirkonyum ile yenilendi.",
    processInfo: "Eski morarmış kaplama artıkları kaldırıldı, diş etleri zirkonyuma uyumlandırılarak iyileştirildi, estetik zirkonyum kronlar yapıştırıldı.",
    duration: "7 Gün",
    patientAge: 38,
    tags: ["Zirkonyum Kaplama", "Doğal Işık Geçirgenliği", "Diş Eti Estetiği"],
    beforeImage: "https://picsum.photos/seed/dentalbefore4/600/400",
    afterImage: "https://picsum.photos/seed/dentalafter4/600/400",
    visualType: "Önce / Sonra"
  },
  {
    id: "vaka-ortodonti",
    category: "ortodonti",
    title: "Şeffaf Plaklar (Invisalign) İle Çapraşıklık Tedavisi",
    description: "Tel kullanmak istemeyen yetişkin hastamızın ön dişlerindeki çapraşıklık telsiz, tamamen şeffaf plaklarla restore edildi.",
    processInfo: "Dijital tarama ile tedavi sonu 3D olarak hastaya gösterildi. Her 2 haftada bir değişen 18 adet şeffaf plak serisi uygulandı.",
    duration: "9 Ay",
    patientAge: 26,
    tags: ["Invisalign", "Şeffaf Plak", "Telsiz Ortodonti"],
    beforeImage: "https://picsum.photos/seed/dentalbefore5/600/400",
    afterImage: "https://picsum.photos/seed/dentalafter5/600/400",
    visualType: "Tedavi süreci"
  }
];

export const CLINIC_PHOTOS = [
  {
    id: "clinic-1",
    title: "Modern Tedavi Odası",
    desc: "En son teknolojiye sahip ergonomik diş üniti ve dijital görüntüleme sistemleri.",
    imageUrl: "https://picsum.photos/seed/clinic1/800/600"
  },
  {
    id: "clinic-2",
    title: "Bekleme ve Resepsiyon Alanı",
    desc: "Ziyaretlerinizde kendinizi evinizde hissetmeniz için ferah ve konforlu bekleme salonu.",
    imageUrl: "https://picsum.photos/seed/clinic2/800/600"
  },
  {
    id: "clinic-3",
    title: "Dijital 3D Ağız İçi Tarama Sistemi",
    desc: "Ölçü kaşığı olmadan, saniyeler içinde dişlerinizin 3D modelini çıkaran CAD/CAM cihazımız.",
    imageUrl: "https://picsum.photos/seed/clinic3/800/600"
  },
  {
    id: "clinic-4",
    title: "Sterilizasyon ve Hijyen Ünitesi",
    desc: "Sağlığınızı en üst düzeyde koruyan, Avrupa standartlarında otoklav ve sterilizasyon zinciri.",
    imageUrl: "https://picsum.photos/seed/clinic4/800/600"
  },
  {
    id: "clinic-5",
    title: "Panoramik Röntgen ve Tomografi Odası",
    desc: "Doğru teşhis ve milimetrik tedavi planlaması için düşük radyasyonlu tomografi sistemimiz.",
    imageUrl: "https://picsum.photos/seed/clinic5/800/600"
  },
  {
    id: "clinic-6",
    title: "Çocuk Randevu & Eğlence Köşesi",
    desc: "Küçük kahramanlarımızın muayene öncesi keyifle vakit geçirebilecekleri özel oyun alanı.",
    imageUrl: "https://picsum.photos/seed/clinic6/800/600"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Ege Üniversitesi Diş Hekimliği Fakültesi Mezuniyeti",
    institution: "Ege Üniversitesi",
    year: 2014,
    description: "Diş hekimliği lisans eğitimi ve yüksek lisans birleşik programı başarısı.",
    type: "sertifika"
  },
  {
    id: "cert-2",
    title: "İleri Estetik ve Gülüş Tasarımı Akademisi",
    institution: "EDAD (Estetik Dişhekimliği Akademisi Derneği)",
    year: 2017,
    description: "Lamine veneer ve adeziv restorasyonlarda ileri seviye teori ve pratik eğitimi.",
    type: "sertifika"
  },
  {
    id: "cert-3",
    title: "Oral Implantology Cerrahi Uzmanlık Sertifikası",
    institution: "International Congress of Oral Implantologists (ICOI)",
    year: 2019,
    description: "İleri düzey implant cerrahisi ve kemik ogmentasyonu sertifikalı programı.",
    type: "sertifika"
  },
  {
    id: "cert-4",
    title: "Digital Smile Design (DSD) Certified Clinic Specialist",
    institution: "DSD Christian Coachman Academy",
    year: 2020,
    description: "Ağız içi tarayıcılarla dijital diş hekimliği ve yapay zeka gülüş analizi uzmanlığı.",
    type: "sertifika"
  },
  {
    id: "cert-5",
    title: "Uluslararası Estetik Diş Hekimliği Kongresi (EDAD)",
    institution: "EDAD Derneği",
    year: 2023,
    description: "Kompozit tabakalama teknikleri ve aşınmış diş tedavilerinde 'En İyi Olgu Sunumu' Ödülü.",
    type: "kongre"
  },
  {
    id: "cert-6",
    title: "Nobel Biocare Implantology Rehabilitation Specialist",
    institution: "Nobel Biocare Training Center (Zürih)",
    year: 2021,
    description: "Sıfır kemik kaybı ve All-on-4 / All-on-6 hızlı protez cerrahisi üzerine pratik eğitimi.",
    type: "sertifika"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    patientName: "Ahmet Hakan Kırma",
    treatment: "Gülüş Tasarımı",
    comment: "Ümit Bey'e internetteki vaka yorumları üzerinden ulaştım. Ön dişlerimdeki ayrıklıklardan çok utanıyordum. Kendisi o kadar güler yüzlü ve açıklayıcı yaklaştı ki ilk andan itibaren güvendim. Dişlerime lamine yapıldı, artık çok rahat gülüyorum. Klinik de son derece hijyenik.",
    rating: 5,
    date: "12 Mart 2026",
    isVerified: true
  },
  {
    id: "rev-2",
    patientName: "Berrin Karaöz",
    treatment: "İmplant ve Diş Eti Tedavisi",
    comment: "Korkarak gittiğim implant tedavisinden hiç acı çekmeden çıktım. Ümit Bey operasyonu saniyeler içinde, dikişsiz yaptı diyebilirim. Çalışanların nezaketi, kliniğin ferahlığı mükemmel. Diş hekimi korkusu olan herkese tavsiye ederim.",
    rating: 5,
    date: "02 Nisan 2026",
    isVerified: true
  },
  {
    id: "rev-3",
    patientName: "Caner Yıldırım",
    treatment: "Diş Beyazlatma",
    comment: "Lazerli beyazlatma işlemi yaptırdım. Sadece 45 dakikada sigara sarılıkları tamamen kayboldu ve bembeyaz oldu. İşlem sırasında da sonrasında da iddia edildiği gibi aşırı bir sızlama yaşamadım. Hekimimin eli çok hafifti.",
    rating: 5,
    date: "28 Nisan 2026",
    isVerified: true
  },
  {
    id: "rev-4",
    patientName: "Selin Göktaş",
    treatment: "Kanal Tedavisi ve Kompozit Dolgu",
    comment: "Sancıyla geldiğim klinikten sevinçle ayrıldım. Kanal tedavisi olurken uyuya kalacağımı hiç tahmin etmezdim! Ağrıyı anında kestiler, muayene odasında çalan müzik bile insanı sakinleştiriyor. Ümit Bey'e minnettarım.",
    rating: 5,
    date: "10 Mayıs 2026",
    isVerified: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Diş Beyazlatma Zararlı mı?",
    slug: "dis-beyazlatma-zararli-mi",
    summary: "Halk arasında diş beyazlatma işlemlerinin diş minesine zarar verdiği inanışı yaygındır. Peki işin aslı nedir? Uzmanından yanıtlar.",
    content: "Diş beyazlatma (bleaching), tescilli ve sertifikalı beyazlatma ajanlarının klinik ortamında hekim kontrolünde kullanılması durumunda **kesinlikle diş minesine kalıcı bir zarar vermez**. İşlem sırasında kullanılan jeller, diş minesinin gözenekli yapısına sızarak buradaki renk pigmentlerini oksijenle parçalar. \n\nDişin genel anatomisinde herhangi bir aşınma veya delinme oluşmaz. Sadece tedavi sonrasındaki ilk 24-48 saat dişlerde soğuk-sıcak hassasiyeti yaşanması normaldir; bu durum geçicidir. Hekim kontrolü dışında, merdiven altı ürünlerle veya karbonat/limon gibi asidik doğal karışımlarla evde dişleri zımparalamak ise mineyi çizer ve kalıcı hasarlar bırakır. Beyazlatmayı mutlaka uzman bir diş hekimine danışarak yaptırmalısınız.",
    readTime: "4 dk okuma",
    category: "Estetik Diş Hekimliği",
    publishDate: "15 Nisan 2026",
    author: "Dt. Ümit Narin",
    tags: ["Diş Beyazlatma", "Estetik Diş", "Ağız Bakımı"]
  },
  {
    id: "blog-2",
    title: "İmplant Terapisi Kimlere Uygulanır?",
    slug: "implant-tedavisi-kimlere-uygulanir",
    summary: "Eksik dişlerin tamamlanmasında altın standart olan implantlar hakkında bilmeniz gerekenler: Kemik yapısı, sistemik hastalıklar ve yaş sınırı.",
    content: "İmplant tedavisi, büyüme ve kemik gelişimini tamamlamış (genellikle 18 yaş üzeri), çene kemiği hacmi titanyum vidayı desteklemeye elverişli olan her diş eksikliği yaşayan bireye uygulanabilir.\n\nHasta şeker veya tansiyon hastası olsa dahi, eğer bu hastalıklar ilaçlarla kontrol altında ise ve kan değerleri stabilse implant yapılmasında hiçbir sakınca yoktur. Kemik erimesi olan hastalarda ise gelişmiş yapay kemik tozları (kemik grefti) eklenerek öncelikle güçlü bir çene zemini oluşturulur ve ardından implant başarıyla yerleştirilir. Sadece baş boyun bölgesine aktif radyoterapi alanlarda..." ,
    readTime: "5 dk okuma",
    category: "İmplantoloji",
    publishDate: "02 Mayıs 2026",
    author: "Dt. Ümit Narin",
    tags: ["İmplant", "Diş Eksikliği", "Çene Tedavisi"]
  },
  {
    id: "blog-3",
    title: "Kanal Tedavisi Ağrılı mıdır?",
    slug: "kanal-tedavisi-agrili-midir",
    summary: "Kanal tedavisinden korkanlar için müjde: Modern anestezi teknikleri ve milimetrik makinelerle tedavi artık tamamen ağrısız gerçekleşiyor.",
    content: "Toplumda 'kanal tedavisi çok acıtır' şeklinde kökleşmiş bir korku vardır. Ancak gerçek bunun tam tersidir: **Kanal tedavisi ağrıyı başlatmak için değil, mevcut dişteki şiddetli zonklama ağrısını bitirmek için yapılır.**\n\nGünümüzde kullanılan bilgisayarlı lokal anestezi yöntemleri ve yüksek etkiye sahip solüsyonlar sayesinde, tedavi süresince hasta en ufak bir sızı bile hissetmez. Hatta gelişmiş döner alet sistemleri sayesinde, işlem geçmişe göre çok daha hızlı (çoğu zaman tek bir seansta ve yarım saatte) başarıyla tamamlanır. Tedavi bittikten sonra dişin canlı siniri kalmadığı için ağrı tamamen kaybolur.",
    readTime: "3 dk okuma",
    category: "Endodonti",
    publishDate: "10 Mayıs 2026",
    author: "Dt. Ümit Narin",
    tags: ["Kanal Tedavisi", "Ağrısız Tedavi", "Diş Kurtarma"]
  },
  {
    id: "blog-4",
    title: "Diş Taşı Temizliği Ne Sıklıkla Yapılmalı?",
    slug: "dis-tasi-temizligi-ne-siklikla-yapilmali",
    summary: "Tartar temizliği dişleri gevşetir mi? Temizlik sıklığı ve evde tartarları önleme yöntemleri ile ilgili doğru bilinen yanlışlar.",
    content: "Diş taşı (tartar), tükürüğümüzdeki minerallerle birleşen bakteri plağının diş yüzeylerinde kireçlenmesiyle oluşur ve diş fırçasıyla temizlenemez. Temizlenmeyen diş taşları diş etlerinin çekilmesine, kanamaya ve nihayetinde dişlerin sallanarak dökülmesine (periodontitis) sebep olur.\n\nİdeal olarak, her bireyin **6 ayda bir** düzenli diş muayenesi ve hekim gözetiminde diş taşı temizliği (detertraj) yaptırması gerekir. Diş taşı temizliği dişleri gevşetmez, aksine dişleri saran kemikleri koruyarak sağlamlaştırır. Temizliğin hemen ardından oluşan hafif hassasiyet birkaç günde geçer ve sağlıklı pembe diş etlerine kavuşulur.",
    readTime: "4 dk okuma",
    category: "Koruyucu Diş Hekimliği",
    publishDate: "18 Mayıs 2026",
    author: "Dt. Ümit Narin",
    tags: ["Diş Taşı", "Diş Eti Sağlığı", "Ağız Kokusu"]
  },
  {
    id: "blog-5",
    title: "Gülüş Tasarımı Nedir?",
    slug: "gulus-tasarimi-nedir",
    summary: "Sadece beyaz dişler yetmez; dudak, diş eti ve yüz simetrisi ile uyumu yakalayan entegre estetik tedavi süreci.",
    content: "Gülüş tasarımı, kişinin gülümsediği anda görünen diş, diş eti ve dudak koordinasyonunu, ideal altın oran prensiplerine göre bilgisayar ortamında planlayıp hayata geçirme sürecidir. \n\nTasarım yapılırken kişinin cinsiyeti, yüz şekli, göz bebeklerinin hizası, ten rengi ve hatta gülme karakteri analiz edilir. Örneğin, kadınlarda daha yuvarlak hatlı ve dinamik ön dişler tasarlanırken; erkeklerde daha köşeli ve maskülen formlar tercih edilir. Gülüş tasarımı sadece porselen laminalarla değil, bazen küçük bir diş eti lazer düzeltmesi (pembe estetik) ve beyazlatma ile de minimal şekilde tamamlanabilir.",
    readTime: "5 dk okuma",
    category: "Estetik Diş Hekimliği",
    publishDate: "20 Mayıs 2026",
    author: "Dt. Ümit Narin",
    tags: ["Gülüş Tasarımı", "Hollywood Smile", "Lamine Porselen"]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Randevu almadan muayene olabilir miyim?",
    answer: "Kliniğimizde her hastamıza yeterli vakit ayırabilmek ve bekleme sürelerini en aza indirmek amacıyla randevu sistemiyle çalışmaktayız. Ancak şiddetli ağrı, kırılma veya travma gibi acil durumlarda gün içinde arayarak durumunuzu bildirdiğiniz takdirde, acil müdahale odamızda size en kısa sürede yardımcı olmaktayız."
  },
  {
    id: "faq-2",
    question: "İmplant tedavisi ne kadar sürer?",
    answer: "İmplantın çene kemiğine yerleştirilmesi cerrahi seansı, tek bir implant için yaklaşık 15-20 dakikadır ve lokal anestezi altında tamamen ağrısız gerçekleşir. Operasyondan sonra implantın kemikle kaynaşması (osteointegrasyon) için ortalama 3 ay beklenir. Bu sürenin sonunda birer hafta arayla 2 seansta porselen veya zirkonyum kalıcı dişiniz takılır. Toplam süreç yaklaşık 3-3.5 aydır. Gerekirse geçici dişlerle bu süreci dişsiz kalmadan geçirebilirsiniz."
  },
  {
    id: "faq-3",
    question: "Diş beyazlatma kalıcı mı?",
    answer: "Klinikte lazer aktivasyonlu olarak yaptığımız profesyonel beyazlatmaların etkisi, beslenme ve ağız hijyeni alışkanlıklarınıza bağlı olarak ortalama 1.5 ila 3 yıl arasında kalıcılık gösterir. Tedavi sonrasında kahve, çay, asitli içecekler ve sigara tüketiminin sınırlandırılması, günde iki kez fırçalama yapılması süreyi uzatır. Ayrıca 1-2 yılda bir yapılacak kısa bir pekiştirme seansıyla elde edilen beyazlık ömür boyu korunabilir."
  },
  {
    id: "faq-4",
    question: "Tedavi ücretleri nasıl belirlenir?",
    answer: "Diş hekimliği tedavileri tamamen kişiye özeldir. Kullanılacak malzemenin türü (zirkonyum, implant markası, dolgu boyutu), diş etlerinizin durumu ve gerekli ek tedaviler (kanal tedavisi, kemik tozu vb.) her hastada değiştiğinden, muayene ve radyolojik analiz yapılmadan net bir fiyat verilmesi etik ve doğru değildir. Türk Dişhekimleri Birliği (TDB) taban fiyat tarifesi klinik baz fiyatlarımızı belirler. İlk muayenemizde tüm maliyet ve detaylı tedavi planı tarafınıza şeffaf şekilde sunulur."
  },
  {
    id: "faq-5",
    question: "Acil diş ağrısı için başvurabilir miyim?",
    answer: "Evet, akut pulpa iltihabı (şiddetli zonklayan gece ağrısı), apse kaynaklı şişlik veya kaza sonucu diş kırılmaları acil durum kapsamındadır. Kliniğimiz mesai saatlerinde acil vakalara öncelik verir. Telefon hattımızdan veya acil WhatsApp butonumuzdan bizi arayarak durumunuzu bildirirseniz, randevusuz olsanız dahi ağrınızı dindirecek acil müdahaleyi yapmak üzere ekibimiz sizi hemen kabul edecektir."
  }
];
