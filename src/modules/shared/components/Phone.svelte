<script lang="ts">
  import Svg from './Svg.svelte'
  let isDown: boolean = false
  let phoneNum: string = ''

  export let page: number

  const enterNum = (index: number) => {
    phoneNum += index + 1
  }

  const deleteNum = () => {
    phoneNum = phoneNum.slice(0, -1)
  }

  const join = () => {
    const audio = new Audio('/assets/call.mp3')
    audio.volume = 0.5
    audio.play()
  }

  //672583491

  const verifyNum = () => {
    if (phoneNum === '672583491') {
      page = 2
      join()
    } else {
      phoneNum = ''
    }
  }
</script>

<style lang="scss">
  .phone-container {
    transition: 0.5s ease;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    position: absolute;
    right: 100px;
    bottom: -500px;

    &.active {
      transition: 0.5s ease;
      bottom: 50px;
    }

    .up {
      transition: 0.3s ease;
      transform: rotate(-90deg);

      &.active {
        transition: 0.3s ease;
        transform: rotate(90deg);
      }
    }

    .phone {
      position: relative;
      height: 550px;
      width: fit-content;

      img {
        height: 550px;
      }

      .content {
        position: absolute;
        background-color: white;
        height: 505px;
        border-radius: 25px;
        width: 230px;

        top: 0;
        bottom: 15px;
        left: 0;
        right: 0;
        margin: auto;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 50px;

        .text {
          font-size: 30px;
        }

        .numbers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          row-gap: 10px;
          column-gap: 20px;

          .num {
            transition: 0.3s ease;

            background-color: lightgray;
            width: 50px;
            aspect-ratio: 1;
            padding: 10px;
            border-radius: 100%;
            text-align: center;
            font-size: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 14px;

            &:active {
              transform: scale(0.8);
            }
          }

          .call {
            background-color: rgb(99, 216, 99);
            grid-area: 5 / 2 / 6 / 3;
            margin-top: 15px;
            padding-top: 10px;
          }

          .delete {
            grid-area: 5 / 3 / 6 / 4;
          }
        }
      }
    }
  }
</style>

<div class="phone-container" class:active={isDown}>
  <button class="up" onclick={() => (isDown = !isDown)} class:active={isDown}>
    <Svg name="arrowSlim" height="50" width="50" />
  </button>

  <div class="phone">
    <img src="/assets/phone.png" alt="" />

    <div class="content">
      <span class="text">+34 {phoneNum}</span>
      <div class="numbers">
        {#each Array(9) as _, i}
          <button class="num" onclick={() => enterNum(i)}>{i + 1}</button>
        {/each}
        <button class="num">*</button>
        <button class="num" onclick={() => enterNum(-1)}>0</button>
        <button class="num">#</button>

        <button class="num call" onclick={verifyNum}><Svg name="phone" fill="white" /></button>
        <button class="delete" onclick={deleteNum}><Svg name="delete" fill="var(--colorPrimary)" /></button>
      </div>
    </div>
  </div>
</div>
