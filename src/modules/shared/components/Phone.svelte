<script lang="ts">
  import Svg from './Svg.svelte'
  let isUp: boolean = false
</script>

<style lang="scss">
  .phone-container {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    &.active {
      margin-top: 200px;
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
        height: 525px;
        border-radius: 16px;
        width: 235px;

        top: 0;
        bottom: 15px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: -1;

        display: flex;
        align-items: center;
        justify-content: center;

        .numbers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          row-gap: 10px;
          column-gap: 20px;

          .num {
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
          }
        }
      }
    }
  }
</style>

<div class="phone-container" class:active={isUp}>
  <button class="up" on:click={() => (isUp = !isUp)}>
    <Svg name="arrowSlim" height="50" width="50" />
  </button>

  <div class="phone">
    <img src="/assets/phone.png" alt="" />

    <div class="content">
      <div class="numbers">
        {#each Array(9) as _, i}
          <div class="num">{i + 1}</div>
        {/each}
        <div class="num">*</div>
        <div class="num">0</div>
        <div class="num">#</div>
      </div>
    </div>
  </div>
</div>
