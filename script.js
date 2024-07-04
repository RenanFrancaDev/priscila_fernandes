const triggers = document.querySelectorAll(".container_questionarios");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", handleClick);
});

function handleClick(event) {
  const trigger = event.currentTarget;
  trigger.classList.toggle("open");
}

// 1. Adicione um event listener de click no elemento <div> que será o trigger do accordion:

// ```js
// const trigger = document.querySelector('.container_questionarios');

// trigger.addEventListener('click', handleClick);
// ```

// 2. Crie uma função para lidar com o click e toggle entre classes de open/close:

// ```js
// function handleClick() {
//   trigger.classList.toggle('open');
// }
// ```

// 3. Adicione CSS para esconder/mostrar o conteúdo quando a classe for toggleada:

// ```css
// .container_questionarios {
//   height: 0;
//   overflow: hidden;
// }

// .container_questionarios.open {
//   height: auto;
// }
// ```
