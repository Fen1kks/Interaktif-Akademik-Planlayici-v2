window.registerDepartment("ISE", {
    name: "Industrial Engineering",
    curriculum: [
      // FRESHMAN - TERM 1
      { id: "CHEM101", name: "Genel Kimya", credits: 3, prereqs: [], term: 1 },
      { id: "HUM103", name: "Uygarlık Tarihi", credits: 3, prereqs: [], term: 1 },
      { id: "MATH131", name: "Kalkülüs I", credits: 3, prereqs: [], term: 1 },
      { id: "PHYS101", name: "Fizik I", credits: 3, prereqs: [], term: 1 },
      { id: "ISE_RE1", name: "Seçmeli - Kısıtlı- 2", credits: 3, prereqs: [], term: 1 },
      { id: "ISE_RE2", name: "Seçmeli - Kısıtlı- 1", credits: 3, prereqs: [], term: 1 },

      // FRESHMAN - TERM 2
      { id: "ISE101", name: "Endüstri Mühendisliğine Giriş", credits: 3, prereqs: [], term: 2 },
      { id: "MATH132", name: "Kalkülüs II", credits: 3, prereqs: [], term: 2 },
      { id: "PHYS102", name: "Fizik II", credits: 3, prereqs: [], term: 2 },
      { id: "ISE_FE1", name: "Seçmeli - Serbest - 1", credits: 3, prereqs: [], term: 2 },
      { id: "ISE_FE2", name: "Seçmeli - Serbest - 2", credits: 3, prereqs: [], term: 2 },

      // SOPHOMORE - TERM 3
      { id: "ECON294", name: "Mühendisler için Ekonomi", credits: 3, prereqs: [], term: 3 },
      { id: "ES112", name: "Algoritmalar ve Bilgisayar Programlama", credits: 3, prereqs: [], term: 3 },
      { id: "MATH221", name: "Doğrusal Cebir", credits: 3, prereqs: [], term: 3 },
      { id: "MATH241", name: "Diferansiyel Denklemler", credits: 3, prereqs: [], term: 3 },
      { id: "MATH281", name: "Olasılık", credits: 3, prereqs: [], term: 3 },
      { id: "ISE_CE1", name: "Seçmeli - Zorunlu- 1", credits: 3, prereqs: [], term: 3 },

      // SOPHOMORE - TERM 4
      { id: "ISE214", name: "End. Müh. İçin Hesaplamalı Yöntemler", credits: 3, prereqs: [], term: 4 },
      { id: "ISE222", name: "Yöneylem Araştırması I", credits: 3, prereqs: [], term: 4 },
      { id: "ISE256", name: "End. Müh. için İstatistik", credits: 3, prereqs: [], term: 4 },
      { id: "ISE_RE3", name: "Seçmeli - Kısıtlı- 3", credits: 3, prereqs: [], term: 4 },
      { id: "ISE_CE2", name: "Seçmeli - Zorunlu- 2", credits: 3, prereqs: [], term: 4 },

      // JUNIOR - TERM 5
      { id: "HTR301", name: "Atatürk İlkeleri ve İnkılap Tarihi I", credits: 3, prereqs: [], term: 5 },
      { id: "ISE311", name: "Bilgi Teknolojileri", credits: 3, prereqs: [], term: 5 },
      { id: "ISE323", name: "Yöneylem Araştırması II", credits: 3, prereqs: [], term: 5 },
      { id: "ISE331", name: "Mühendisler için Finans", credits: 3, prereqs: [], term: 5 },
      { id: "ISE361", name: "Üretim Sistemleri Tasarımı", credits: 3, prereqs: [], term: 5 },
      { id: "ISE_RE4", name: "Seçmeli - Kısıtlı- 4", credits: 3, prereqs: [], term: 5 },

      // JUNIOR - TERM 6
      { id: "HTR302", name: "Atatürk İlkeleri ve İnkılap Tarihi II", credits: 3, prereqs: [], term: 6 },
      { id: "ISE316", name: "End. Müh. için Bilgisayar Uygulamaları", credits: 3, prereqs: [], term: 6 },
      { id: "ISE344", name: "Benzetim", credits: 3, prereqs: [], term: 6 },
      { id: "ISE362", name: "Tedarik Zinciri Yönetimi", credits: 3, prereqs: [], term: 6 },
      { id: "ISE_RE6", name: "Seçmeli - Kısıtlı- 6", credits: 3, prereqs: [], term: 6 },
      { id: "ISE_RE5", name: "Seçmeli - Kısıtlı- 5", credits: 3, prereqs: [], term: 6 },

      // SENIOR - TERM 7
      { id: "ISE400", name: "Yaz Stajı", credits: 3, prereqs: [], term: 7 },
      { id: "ISE401", name: "Sistem Dinamiği ve Modelleme", credits: 3, prereqs: [], term: 7 },
      { id: "ISE412", name: "End. Müh. için Veri Bilimi", credits: 3, prereqs: [], term: 7 },
      { id: "ISE451", name: "İstatistiksel Kalite Kontrolü", credits: 3, prereqs: [], term: 7 },
      { id: "ISE491", name: "Mühendislik Projesine Giriş", credits: 3, prereqs: [], term: 7 },
      { id: "ISE_RE7", name: "Seçmeli - Kısıtlı- 7", credits: 3, prereqs: [], term: 7 },
      { id: "ISE_FE3", name: "Seçmeli - Serbest - 3", credits: 3, prereqs: [], term: 7 },

      // SENIOR - TERM 8
      { id: "ISE402", name: "Sistem Tasarımı", credits: 3, prereqs: [], term: 8 },
      { id: "ISE432", name: "Karar Analizi", credits: 3, prereqs: [], term: 8 },
      { id: "ISE492", name: "Mühendislik Projesi", credits: 3, prereqs: [], term: 8 },
      { id: "ISE_EXT3", name: "Seçmeli - Ekstra- 3", credits: 3, prereqs: [], term: 8 },
      { id: "ISE_EXT4", name: "Seçmeli - Ekstra- 4", credits: 3, prereqs: [], term: 8 },
      { id: "ISE_RE8", name: "Seçmeli - Kısıtlı- 8", credits: 3, prereqs: [], term: 8 },
      { id: "ISE_EXT3_ALT", name: "Seçmeli - Ekstra- 3 (Alt)", credits: 3, prereqs: [], term: 8 }, // Renamed from duplicate Ekstra 3
      { id: "ISE_RE9", name: "Seçmeli - Kısıtlı- 9", credits: 3, prereqs: [], term: 8 },
      { id: "ISE_EXT2", name: "Seçmeli - Ekstra- 2", credits: 3, prereqs: [], term: 8 },
      { id: "ISE_EXT1", name: "Seçmeli - Ekstra- 1", credits: 3, prereqs: [], term: 8 }
    ]
});
