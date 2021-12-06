const publicKey = 'BLseatXtsMtHfHS-eEEo8MS_KAoB_SQqQ8Lzf4MW_qjoIw5uHfPQkMyNJhF7ZxeYBHKSdG2c0srssbDb9GC2Bj0';
//
const subscription = async () => {
   // Service worker 
   const register =  await navigator.serviceWorker.register('/worker.js', { scope: '/' });
   console.log('New services worker.', register); 
   //
   const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey)
   });

   console.log('New subscription.', subscription); 

   await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: { 'Content-Type': 'application/json' }
    });
    
    console.log('subscription sucessfull.')
};
//
subscription();
//

// 
const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
} 
