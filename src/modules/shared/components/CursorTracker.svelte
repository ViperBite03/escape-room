<script lang="ts">
  import { onMount } from 'svelte'

  let cursorTracker: HTMLElement
  let cursorTrackerBG: HTMLElement
  let cursorTrackerContainer: HTMLElement

  const backgroundImageURL = '/assets/2.png'
  const backgroundImageURLCursor = '/assets/1b.png'

  let offsetTop = 0
  let offsetLeft = 0

  const calculateOffsetTop = () => {
    offsetTop = cursorTrackerContainer.getBoundingClientRect().top + window.scrollY
    offsetLeft = cursorTrackerContainer.getBoundingClientRect().left + window.scrollX - 285
  }

  const onMouseMove = (ev: MouseEvent) => {
    const cursorSize = 100 // Tamaño de la lupa
    const posX = ev.pageX - offsetLeft
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
    overflow: hidden;

    .cursor-tracker {
      position: absolute;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      overflow: hidden;
      box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.8);
      pointer-events: none;
      top: -50px;
      left: -50px;

      img {
        position: absolute;
        filter: brightness(150%);
      }
    }

    .image {
      height: 735px;
    }
  }
</style>

<div class="cursor-tracker-container" bind:this={cursorTrackerContainer}>
  <div class="cursor-tracker" bind:this={cursorTracker}>
    <img class="image" bind:this={cursorTrackerBG} src={backgroundImageURL} alt="bg" />
  </div>

  <img class="image" src={backgroundImageURLCursor} alt="bg2" />
</div>

<svelte:window on:mousemove={onMouseMove} on:scroll={calculateOffsetTop} on:resize={calculateOffsetTop} />
