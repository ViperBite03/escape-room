<script lang="ts">
  import Modal from './Modal.svelte'
  import Svg from './Svg.svelte'
  import Checkbox from './Checkbox.svelte'

  interface ITest {
    question: string
    answers: string[]
    correct: number
  }

  const test: ITest[] = [
    {
      question: '¿Cuál de los siguientes es un principio fundamental de la economía circular?',
      answers: [
        'Usar los recursos de forma lineal hasta agotarlos.',
        'Maximizar la vida útil de los productos y materiales.',
        'Minimizar el uso de productos reciclados.',
      ],
      correct: 2,
    },
    {
      question: '¿Qué es la "responsabilidad extendida del productor" en el contexto de la economía circular?',
      answers: [
        'La obligación de los consumidores de reciclar productos.',
        'La obligación de los fabricantes de asumir la gestión de los residuos generados por sus productos al final de su vida útil.',
        'La obligación de los gobiernos de regular la producción de residuos.',
      ],
      correct: 2,
    },
    {
      question: '¿Qué beneficios trae la economía circular para las empresas?',
      answers: [
        'Incremento de los costes debido al reciclaje.',
        'Reducción de la dependencia de recursos naturales y mejora de la sostenibilidad.',
        'Aumento de la producción de desechos industriales.',
      ],
      correct: 2,
    },
    {
      question: '¿Cuál de las siguientes acciones no está alineada con la economía circular?',
      answers: ['Reciclar materiales.', 'Comprar productos de un solo uso.', 'Reparar productos en lugar de desecharlos.'],
      correct: 2,
    },
    {
      question: '¿Qué es la "economía compartida" dentro de la economía circular?',
      answers: [
        'El alquiler de productos en lugar de comprarlos, compartiendo recursos entre varias personas.',
        'La venta de productos reciclados a otras empresas.',
        'El aumento de la producción de productos de bajo costo.',
      ],
      correct: 1,
    },
    {
      question: '¿Cuál es la relación entre economía circular y residuos?',
      answers: [
        'La economía circular busca minimizar los residuos a través de la reutilización y reciclaje.',
        'La economía circular fomenta la acumulación de residuos para generar energía.',
        'La economía circular depende completamente de la generación de nuevos residuos.',
      ],
      correct: 1,
    },
  ]

  let closed: boolean = false
  let checked: boolean = false
  let showTest: boolean = false

  let value: string = ''
  let text: string = ''

  const decode = () => {
    if (value) {
      let utf8Bytes = new Uint8Array(value.split(' ').map((num) => parseInt(num, 10)))
      text = new TextDecoder('utf-8').decode(utf8Bytes)
    } else {
      text = ''
    }
  }

  const login = () => {
    if (text == 'Enseñar a cuidar el medio ambiente es enseñar a cuidar la vida.') {
      closed = true
    } else {
      value = ''
      text = ''
    }
  }

  $: setTimeout(() => {
    showTest = checked
  }, 500)
</script>

<style lang="scss">
  .decoder-screen {
    padding: 100px;

    h1 {
      color: var(--colorPrimary);
      font-weight: bolder;
      font-size: 200px;
    }

    .decoder-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: end;

      .title {
        font-size: 45px;
        font-weight: bolder;
        color: var(--colorPrimary);
      }

      .action {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cage {
          display: flex;
          flex-direction: column;
          gap: 10px;

          &.right {
            align-items: flex-end;
          }

          .area {
            height: 200px;
            width: 600px;
            border-radius: 16px;
            border: 3px solid var(--colorPrimary);
            padding: 10px 15px;
          }

          textarea {
            background-color: var(--colorPrimary);
            color: white;
            font-size: 16px;
            resize: none;
          }

          .send {
            width: fit-content;
            padding: 5px 15px;
            border-radius: 100px;
            border: 3px solid var(--colorPrimary);
            font-weight: 600;
            color: var(--colorPrimary);
            font-size: 18px;
          }
        }
      }
    }

    .modal-content {
      padding: 10px 15px;
      display: flex;
      align-items: center;
      gap: 10px;

      .test {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>

<div class="decoder-screen">
  <h1>Solis.</h1>

  <div class="decoder-container">
    <div class="title">Decoder.</div>
    <div class="action">
      <div class="cage">
        <p class="area">{text}</p>
        <button class="send" on:click={login}>Login</button>
      </div>
      <Svg name="arrowRound" height="75" width="75" fill="var(--colorPrimary)" />
      <div class="cage right">
        <textarea class="area" name="" id="" bind:value></textarea>
        <button class="send" on:click={decode}>Decode</button>
      </div>
    </div>
  </div>

  <!--<Modal {closed}>
    <div class="modal-content">
      {#if !showTest}
        <Checkbox bind:value={checked} />
        <span>No soy un robot</span>
      {:else}
        <div class="test">
          <span>{test[0].question}</span>

          {#each test[0].answers as answer}
            <span>{answer}</span>
            <Checkbox />
          {/each}
        </div>
      {/if}
    </div>
  </Modal>-->
</div>
