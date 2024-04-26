const container = document.querySelector('.container')
const qrCodeBtn = document.querySelector('#qr-form button')
const qrCodeInput = document.querySelector('#qr-form input')
const qrcCodeImg = document.querySelector('#qr-code img')


// Eventos
//Gerar qrcode
function generateQrCode(){
  const qrCodeInputValue = qrCodeInput.value

  console.log(qrCodeInputValue)

  if(!qrCodeInputValue) return;

  qrCodeBtn.innerHTML = 'Gerando QR Code...'
  qrcCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

  qrcCodeImg.addEventListener('load', () => {
    container.classList.add('active')
    qrCodeBtn.innerHTML = 'QR Code gerado com sucesso '
  })
}

qrCodeBtn.addEventListener('click', () => {
  generateQrCode();
});

qrCodeInput.addEventListener('keydown', (e) => {
  if(e.code === "Enter"){
    generateQrCode()
  }
});

//limpar area qrcode
qrCodeInput.addEventListener('keyup', () =>{
  if(!qrCodeInput.value){
    container.classList.remove('active')
    qrCodeBtn.innerHTML = 'Gerar QR Code'
  }
})