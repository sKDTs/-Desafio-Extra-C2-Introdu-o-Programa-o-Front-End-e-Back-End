// Contadores animados
document.addEventListener('DOMContentLoaded', function(){
  const nums = document.querySelectorAll('.num');
  nums.forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(()=>{
      current += step;
      if(current >= target){
        el.textContent = target;
        clearInterval(interval);
      } else {
        el.textContent = current;
      }
    }, 20);
  });

  // Validação de formulário simples
  const form = document.getElementById('formContato');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();
    if(!nome || !email || !mensagem){
      msg.textContent = 'Preencha todos os campos.';
      msg.style.color = 'crimson';
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      msg.textContent = 'Informe um e-mail válido.';
      msg.style.color = 'crimson';
      return;
    }
    // Simula envio
    msg.textContent = 'Enviando...';
    msg.style.color = 'var(--muted)';
    setTimeout(()=>{
      msg.textContent = 'Mensagem enviada com sucesso! Obrigado.';
      msg.style.color = 'green';
      form.reset();
    },1000);
  });
});
