<script lang="ts">
  const dialogue: string[] = [
    'Esto es raro, no pensé que funcionaría, pero aquí estoy, dejando un mensaje a mi yo del pasado…',
    'John de hace un año, no te confíes. Piensas que esto de la economía circular y los ODS no son más que chorradas, pero estás equivocado.',
    'Cuando Solis cumplió un año todo fue cuesta abajo y poco pudimos hacer para salvarla, quisimos hacer lo fácil de lo difícil. Fuimos codiciosos y eso nos condenó.',
    'Por favor, no escatimes en productos reciclables ni en fórmulas buenas para el medio ambiente. Lo barato sale muy, muy caro.',
    'Nos estamos cargando el planeta sin darnos cuenta, cuando los cambios eran irreversibles, ya era demasiado tarde.',
    'Querido John, salva a Solis, salva al mundo… Sálvate a ti.',
  ]

  let line: number = 0
  let end: boolean = false

  const interval = setInterval(() => {
    if (line < dialogue.length - 1) {
      line++
    } else {
      clearInterval(interval)
      end = true
    }
  }, 7000)
</script>

<style lang="scss">
  .call-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: black;

    display: flex;
    align-items: center;
    justify-content: center;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0.2;
    }

    .voice {
      width: 55%;
      height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .text {
        color: white;
        font-size: 40px;
        text-align: center;
      }
    }

    .end {
      transition: 1s ease-out;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 5;

      &.active {
        transition: 1s ease-out;
        background-color: black;
      }
    }
  }
</style>

<div class="call-container">
  <div class="end" class:active={end}></div>
  <img class="bg" src="https://media-public.canva.com/bH9wE/MAEH1CbH9wE/1/s2.jpg" alt="" />

  <div class="voice">
    <img src="https://i0.wp.com/nuacom.com/wp-content/uploads/2024/07/Wave-1.gif?fit=640%2C167&ssl=1" alt="" />
    <p class="text">"{dialogue[line]}"</p>
  </div>
</div>
