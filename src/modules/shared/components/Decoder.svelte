<script lang="ts">
  import Svg from './Svg.svelte'
  import Test from './Test.svelte'

  export let page: number

  let closed: boolean = false

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
    if (text == 'hola') {
      closed = true
    } else {
      value = ''
      text = ''
    }
  }
</script>

<style lang="scss">
  .decoder-screen {
    padding: 100px;
    height: 100vh;
    position: relative;

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
          font-size: 25px;

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

  {#if closed}
    <Test bind:page />
  {/if}
</div>
