/* script.js */
function openQRCode(itemName) {
    // Replace this with actual QR Code URL for each item
    const qrCodeUrls = {
        'Gravata do Noivo': 'https://nubank.com.br/cobrar/1eugpz/6701e823-e730-40b4-ac23-c6c0044ec223',
        'Brinde da Noite de Núpcia': 'https://nubank.com.br/cobrar/1eugpz/6703020d-e5bb-4f2b-b456-c553fab08350',
        'Reserva Lua de Mel': 'https://nubank.com.br/cobrar/1eugpz/6703043a-f839-4fa5-8282-62af70fb99e4',
        'Kit Futuros Pais de Pet': 'https://nubank.com.br/cobrar/1eugpz/670304db-d314-4e7e-9db6-aee48f815570',
        'Aluguel de Bebê': 'https://nubank.com.br/cobrar/1eugpz/67030537-8f63-46c6-9106-73fb54a4943f',
        'Primeiro Churrasco Casados': 'https://nubank.com.br/cobrar/1eugpz/670305de-ec69-4cba-bcaf-1d4ca3e44ce6'
    };
    const qrCodeUrl = qrCodeUrls[itemName];
    if (qrCodeUrl) {
        window.open(qrCodeUrl, '_blank');
    } else {
        alert('QR Code não disponível para este item.');
    }
}