# 🎓 Mühendislik öğrencileri için İnteraktif Akademik Planlayıcı & GPA Hesaplayıcı

## 🚀 Canlı Demo

Projeyi hemen dene: [İnteraktif Akademik Planlayıcı](https://fen1kks.github.io/Interaktif-Akademik-Planlayici/)

## 📝 Kısa Özet

Makine Mühendisliği öğrencileri için özel olarak geliştirilmiş; ders ön koşullarını görselleştiren, akademik rotanızı planlamanızı sağlayan ve gelecekteki not ortalamanızı simüle eden interaktif bir web aracı.

## 🤝 Katkıda Bulunma

Yeni bir bölüm eklemek veya mevcut bölümleri geliştirmek ister misiniz? [CONTRIBUTING.md](CONTRIBUTING.md) dosyasında detaylı rehber bulabilirsiniz.

## ❓ Neden Bu Proje?

Ders seçim dönemlerinde hangi dersin hangisine bağlı olduğunu (prerequisite) takip etmek karmaşık olabiliyor. Excel tabloları arasında kaybolmak yerine, tüm müfredatı birbirine bağlı canlı bir ağaç yapısında görmek, öğrencilerin akademik yollarını çizmelerini kolaylaştırır.

## ✨ Öne Çıkan Özellikler

### 🎯 Temel Özellikler

- **🔗 İnteraktif Ön Koşul Ağacı:** Bir dersin üzerine geldiğinizde, o derse bağlı olan veya o dersin açtığı tüm dersleri dinamik oklarla görselleştirir.
- **🧮 Akıllı GPA Simülasyonu:** Geçmiş derslerinizi ve almayı planladığınız derslerin notlarını girerek kümülatif ortalamanızı (CGPA) anlık olarak hesaplayın.
- **🔒 Kilit Sistemi (Logic Lock):** Henüz ön koşulunu vermediğiniz bir dersi seçmenizi engelleyerek hatalı program yapma riskini ortadan kaldırır.
- **💾 LocalStorage Teknolojisi:** Üyelik gerektirmez! Tüm verileriniz sadece kendi tarayıcınızda saklanır ve sayfayı yenilediğinizde kaybolmaz.
- **🎨 Gelişmiş Tema Sistemi:** Göz yormayan "Karanlık Mod", ferah "Aydınlık Mod" ve özel "Rose" teması seçenekleriyle kişiselleştirilebilir deneyim.

### 🎓 Ön Koşul Sistemi

- **⚡ Eş Koşul (Co-requisite) Desteği:** Laboratuvar ve teorik dersler gibi birlikte alınması gereken dersleri otomatik olarak tanır ve uyarır.
- **⚠️ Zayıf Ön Koşul (Weak Prerequisite):** Dersi geçmiş olmanız gerekmez; sadece almış olmanız (FF olsa bile) yeterlidir.
- **🔢 Sayısal Ön Koşul (Count Pattern):** "En az 5 adet ME3XX dersi" gibi esnek ön koşul kurallarını destekler.

### 📚 Seçmeli Ders Sistemi

- **🌐 500+ Serbest Seçmeli:** Üniversite genelinde sunulan tüm serbest seçmeli dersler tek havuzda.
- **🔧 Teknik Seçmeliler:** Bölümler arası ortak teknik seçmeli havuzu (ES310, MTH424, CSE480, vb.).
- **💡 Dinamik Kredi Sistemi:** Seçtiğiniz dersin kredisi otomatik olarak slot'a yansır (3, 4, veya 2 kredi).
- **🎯 Akıllı Filtreleme:** Her bölüm kendi özel seçmeli havuzlarını kullanır, tekrar eden dersler otomatik filtrelenir.

### 🏛️ Desteklenen Bölümler

- **Makine Mühendisliği (ME)** - Tam destek
- **Bilgisayar Mühendisliği (CSE)** - Tam destek
- **Elektrik-Elektronik Mühendisliği (EE)** - Tam destek
- **Kimya Mühendisliği (CHBE)** - Tam destek
- **Biyomedikal Mühendisliği (BME)** - Tam destek
- **Genetik ve Biyomühendislik (GBE)** - Tam destek
- **Endüstri Mühendisliği (ISE)** - Tam destek
- **Malzeme Bilimi ve Nanoteknoloji (MSN)** - Tam destek

## 🛠️ Kullanılan Teknolojiler

- **HTML5 & CSS3** - Modern HSL Renk Paleti, Flexbox/Grid Layout
- **Vanilla JavaScript (ES6+)** - Spread Syntax, Arrow Functions, LocalStorage API
- **SVG** - Dinamik Bezier Eğrileri ile Ok Çizimi
- **Modüler Mimari** - Bölüm bazlı veri dosyaları, merkezi havuz sistemi

## 🏗️ Veri Mimarisi

Proje, **merkezi havuz sistemi** ile %80 kod tekrarını azaltır:

- **`z_common.js`** - Ortak havuzlar (İngilizce, Programlama, Teknik Seçmeliler, 500+ Serbest Seçmeli)
- **`z_registry.js`** - Bölüm kayıt sistemi
- **`data/[dept].js`** - Her bölümün özel müfredatı ve seçmeli havuzları
- **Spread Syntax Kullanımı** - `...window.commonTechnicalElectives` ile merkezi havuzdan miras alma
- **Akıllı Deduplication** - `.filter()` ile tekrar eden derslerin otomatik elenmesi

## 🗺️ Gelecek Planları (Roadmap)

- **🔄 Çift Anadal (ÇAP) Sistemi:** İki farklı bölümün ders programını aynı anda görüntüleme ve çakışma kontrolü.


---

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**
