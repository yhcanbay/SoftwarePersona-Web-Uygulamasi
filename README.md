# Görev Yöneticisi (Todo App) 📝

Modern web teknolojileri ile geliştirilmiş, kullanıcı dostu ve hızlı bir Görev Yöneticisi uygulamasıdır. Bu proje, kullanıcıların günlük görevlerini kolayca eklemesine, listelemesine, güncellemesine ve silmesine olanak tanır. 

Uygulama, verileri tarayıcınızın `localStorage` hafızasında tuttuğu için sayfayı yenileseniz dahi görevleriniz kaybolmaz.

## 🚀 Canlı Demo

Uygulamayı hemen denemek için aşağıdaki bağlantıya tıklayabilirsiniz:
👉 **[Canlı Demo (Vercel)](https://software-persona-web-uygulamasi-8sgo665lv-yhc2.vercel.app/)**

## ✨ Özellikler

- **Görev Ekleme:** Yeni görevleri hızlıca listenize ekleyin.
- **Listeleme:** Tüm görevlerinizi düzenli bir şekilde görüntüleyin.
- **Durum Güncelleme:** Görevleri tek bir tıkla "Tamamlandı" olarak işaretleyin.
- **Görev Düzenleme:** Var olan bir görevin ismini değiştirmek için üzerine çift tıklayın.
- **Görev Silme:** İhtiyacınız kalmayan görevleri listeden kaldırın.
- **Kalıcı Veri:** React `useEffect` ve `localStorage` kullanılarak veriler tarayıcıya kaydedilir.
- **Modern Tasarım:** Tailwind CSS ile hazırlanmış şık, responsive (mobil uyumlu) ve kullanıcı dostu arayüz.

## 🛠️ Kullanılan Teknolojiler

- **[React 19](https://react.dev/):** Kullanıcı arayüzü ve bileşen (component) mimarisi için.
- **[Vite](https://vitejs.dev/):** Hızlı ve modern frontend geliştirme ortamı (build tool) olarak.
- **[Tailwind CSS](https://tailwindcss.com/):** Modern ve esnek stil (CSS) işlemleri için.
- **[JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** Temel programlama dili.

## 📂 Proje Yapısı

\`\`\`text
src/
├── components/
│   ├── TodoForm.jsx     # Görev ekleme formu
│   ├── TodoItem.jsx     # Tekil görev bileşeni (Düzenleme, silme)
│   └── TodoList.jsx     # Görevlerin listelendiği ana alan
├── pages/
│   └── Home.jsx         # Ana sayfa, state (durum) ve LocalStorage yönetimi
├── App.jsx              # Kök bileşen
├── index.css            # Tailwind direktiflerinin bulunduğu ana CSS dosyası
└── main.jsx             # React uygulamasının başlatıldığı dosya
\`\`\`

## 💻 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Ön Koşullar
- Bilgisayarınızda [Node.js](https://nodejs.org/) (tercihen güncel LTS sürümü) yüklü olmalıdır.

### Adımlar

1. **Projeyi Klonlayın:**
   \`\`\`bash
   git clone https://github.com/kullanici-adiniz/repo-adiniz.git
   cd web-gelistirme-proje
   \`\`\`
   *(Not: Kendi Github repo linkinizi yukarıdaki komuta eklemeyi unutmayın.)*

2. **Bağımlılıkları Yükleyin:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Geliştirme Sunucusunu Başlatın:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. Tarayıcınızda [http://localhost:5173/](http://localhost:5173/) adresine giderek uygulamayı görüntüleyin.

## 👨‍💻 Geliştirici

Bu proje, **Yusuf Harun Canbay** tarafından eğitim programı kapsamında "Web Geliştirme; Javascript Proje Bilgisi" isterlerine uygun olarak geliştirilmiştir.
