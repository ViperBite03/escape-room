<script lang="ts">
  import Checkbox from './Checkbox.svelte'

  export let page: number = 0

  let checked: boolean = false
  let showTest: boolean = false

  let index: number = 0

  interface ITest {
    question: string
    answers: { question: string; value: boolean }[]
    correct: number
  }

  const test: ITest[] = [
    {
      question: '¿Cuál de los siguientes es un principio fundamental de la economía circular?',
      answers: [
        { question: 'Usar los recursos de forma lineal hasta agotarlos.', value: false },
        { question: 'Maximizar la vida útil de los productos y materiales.', value: false },
        { question: 'Minimizar el uso de productos reciclados.', value: false },
      ],
      correct: 1,
    },
    {
      question: '¿Qué es la "responsabilidad extendida del productor" en el contexto de la economía circular?',
      answers: [
        { question: 'La obligación de los consumidores de reciclar productos.', value: false },
        {
          question:
            'La obligación de los fabricantes de asumir la gestión de los residuos generados por sus productos al final de su vida útil.',
          value: false,
        },
        { question: 'La obligación de los gobiernos de regular la producción de residuos.', value: false },
      ],
      correct: 1,
    },
    {
      question: '¿Qué beneficios trae la economía circular para las empresas?',
      answers: [
        { question: 'Incremento de los costes debido al reciclaje.', value: false },
        { question: 'Reducción de la dependencia de recursos naturales y mejora de la sostenibilidad.', value: false },
        { question: 'Aumento de la producción de desechos industriales.', value: false },
      ],
      correct: 1,
    },
    {
      question: '¿Cuál de las siguientes acciones no está alineada con la economía circular?',
      answers: [
        { question: 'Reciclar materiales.', value: false },
        { question: 'Comprar productos de un solo uso.', value: false },
        { question: 'Reparar productos en lugar de desecharlos.', value: false },
      ],
      correct: 1,
    },
    {
      question: '¿Qué es la "economía compartida" dentro de la economía circular?',
      answers: [
        { question: 'El alquiler de productos en lugar de comprarlos, compartiendo recursos entre varias personas.', value: false },
        { question: 'La venta de productos reciclados a otras empresas.', value: false },
        { question: 'El aumento de la producción de productos de bajo costo.', value: false },
      ],
      correct: 0,
    },
    {
      question: '¿Cuál es la relación entre economía circular y residuos?',
      answers: [
        { question: 'La economía circular busca minimizar los residuos a través de la reutilización y reciclaje.', value: false },
        { question: 'La economía circular fomenta la acumulación de residuos para generar energía.', value: false },
        { question: 'La economía circular depende completamente de la generación de nuevos residuos.', value: false },
      ],
      correct: 0,
    },
  ]

  $: setTimeout(() => {
    showTest = checked
  }, 500)
</script>

<style lang="scss">
  .modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 25px;

    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    .test {
      display: flex;
      flex-direction: column;
      gap: 20px;

      width: fit-content;
      height: fit-content;

      max-width: 875px;

      background-color: white;
      border-radius: 16px;
      padding: 20px 30px;

      .answers {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
</style>

<div class="modal-content">
  <div class="test">
    {#if !showTest}
      <Checkbox bind:value={checked} label="No soy un robot" />
    {:else}
      <span>{test[index]?.question}</span>

      <div class="answers">
        {#if index === 0}
          <Checkbox label={test[index].answers[0].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
          <Checkbox label={test[index].answers[1].question} on:inputChange={() => setTimeout(() => (index = 1), 500)} />
          <Checkbox label={test[index].answers[2].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
        {:else if index === 1}
          <Checkbox label={test[index].answers[0].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
          <Checkbox label={test[index].answers[1].question} on:inputChange={() => setTimeout(() => (index = 2), 500)} />
          <Checkbox label={test[index].answers[2].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
        {:else if index === 2}
          <Checkbox label={test[index].answers[0].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
          <Checkbox label={test[index].answers[1].question} on:inputChange={() => setTimeout(() => (index = 3), 500)} />
          <Checkbox label={test[index].answers[2].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
        {:else if index === 3}
          <Checkbox label={test[index].answers[0].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
          <Checkbox label={test[index].answers[1].question} on:inputChange={() => setTimeout(() => (index = 4), 500)} />
          <Checkbox label={test[index].answers[2].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
        {:else if index === 4}
          <Checkbox label={test[index].answers[0].question} on:inputChange={() => setTimeout(() => (index = 5), 500)} />
          <Checkbox label={test[index].answers[1].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
          <Checkbox label={test[index].answers[2].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
        {:else if index === 5}
          <Checkbox label={test[index].answers[0].question} on:inputChange={() => setTimeout(() => (page = 1), 500)} />
          <Checkbox label={test[index].answers[1].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
          <Checkbox label={test[index].answers[2].question} on:inputChange={() => setTimeout(() => (index = 0), 500)} />
        {/if}
      </div>
    {/if}
  </div>
</div>
