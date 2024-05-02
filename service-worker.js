// Service worker, tarayıcı tarafından yüklendiğinde çalışacak olan kod
self.addEventListener('install', function(event) {
    console.log('Service worker kuruldu');
  });
  
  // Service worker, etkinleştirildiğinde çalışacak olan kod
  self.addEventListener('activate', function(event) {
    console.log('Service worker etkinleştirildi');
  });
  
  // HTTP istekleri üzerinde kontrol sağlamak için 'fetch' olayını dinle
  self.addEventListener('fetch', function(event) {
    // Tarayıcı, bir ağ isteği yapmaya çalıştığında bu kod çalışacak
    console.log('Yeni bir istek yapıldı:', event.request);
  });