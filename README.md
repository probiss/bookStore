# bookStore
# My Book List App

![Uygulama Görüntüsü](/app-pictures/bookStore-1.png)

My Book List App, React, Vite, Node.js, Express, JavaScript, ve MongoDB kullanılarak geliştirilen bir kitap listeleme uygulamasıdır. Bu uygulama, kullanıcıların kitapları eklemelerine, düzenlemelerine ve silebilmelerine olanak tanır. Kitapların adı, yazarı ve basım yılı gibi temel bilgiler kaydedilir.

## Özellikler

- Kullanıcılar yeni kitaplar ekleyebilirler, her kitabın adını, yazarını ve basım yılını girebilirler.
- Eklenen kitaplar düzenlenebilir veya silinebilir.
- MongoDB veritabanı kullanılarak kitap verileri güvenli bir şekilde saklanır.
- Ek özellikler eklemek (örneğin kitap sayısı veya kitap resmi) için uygulamanızı kolayca genişletebilirsiniz.

## Proje Yapısı

Proje, istemci (frontend) ve sunucu (backend) olmak üzere iki ana bölümden oluşmaktadır:

- `client/`: React ve Vite ile geliştirilen istemci tarafı kodları.
- `server/`: Node.js ve Express ile geliştirilen sunucu tarafı kodları.
- `server/routes/`: API rotalarını içerir.
- `server/models/`: MongoDB şemasını ve modelini içerir.

## Nasıl Çalıştırılır

1. Proje depolarınızı yerel makinenize klonlayın:

   ```bash
   git clone https://github.com/probiss/bookStore.git
   ```

2. Backend klasörüne gidin ve bağımlılıkları yükleyin:

   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. Frontend klasörüne gidin ve bağımlılıkları yükleyin:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Uygulamanın yerelde çalıştığını görmek için tarayıcınızı http://localhost:5000 adresine giderek açın.

## Proje Görselleri
![Uygulama Görüntüsü](/app-pictures/bookStore-1.png)
![Uygulama Görüntüsü](/app-pictures/bookStore-2.png)
![Uygulama Görüntüsü](/app-pictures/bookStore-3.png)
![Uygulama Görüntüsü](/app-pictures/bookStore-4.png)
![Uygulama Görüntüsü](/app-pictures/bookStore-5.png)



## İletişim

Proje hakkında daha fazla bilgi veya geri bildirim için lütfen iletişime geçin: bulut.cihad@gmail.com

Cihat BULUT