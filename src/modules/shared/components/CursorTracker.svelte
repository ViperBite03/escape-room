<script lang="ts">
  import { onMount } from 'svelte'

  let cursorTracker: HTMLElement
  let cursorTrackerBG: HTMLElement
  let cursorTrackerContainer: HTMLElement

  const backgroundImageURL = '/assets/3.png'
  const backgroundImageURLCursor = '/assets/2.png'

  let offsetTop = 0

  const calculateOffsetTop = () => {
    offsetTop = cursorTrackerContainer.getBoundingClientRect().top + window.scrollY
  }

  const onMouseMove = (ev: MouseEvent) => {
    const cursorSize = 200 // Tamaño de la lupa
    const posX = ev.pageX
    const posY = ev.pageY - offsetTop

    cursorTracker.style.transform = `translate(${posX}px, ${posY}px)`

    // Ajustar la imagen dentro de la lupa para que el efecto de rayos X sea preciso
    cursorTrackerBG.style.transform = `translate(${-(posX - cursorSize / 2)}px, ${-(posY - cursorSize / 2)}px)`
  }

  onMount(() => calculateOffsetTop())
</script>

<style lang="scss">
  .cursor-tracker-container {
    position: relative;
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
    overflow: hidden;

    .cursor-tracker {
      position: absolute;
      border-radius: 50%;
      width: 200px;
      height: 200px;
      overflow: hidden;
      box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.8);
      pointer-events: none;
      top: -100px;
      left: -100px;

      img {
        position: absolute;
        width: auto; // Asegúrate de que la imagen sea lo suficientemente grande
        height: auto;
        filter: brightness(150%);
      }
    }
  }
</style>

<div class="cursor-tracker-container" bind:this={cursorTrackerContainer}>
  <div class="cursor-tracker" bind:this={cursorTracker}>
    <img bind:this={cursorTrackerBG} src={backgroundImageURL} alt="bg" />
  </div>

  <img src={backgroundImageURLCursor} alt="bg2" />
</div>

<svelte:window on:mousemove={onMouseMove} on:scroll={calculateOffsetTop} on:resize={calculateOffsetTop} />
