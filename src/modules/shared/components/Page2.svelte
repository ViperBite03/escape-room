<script lang="ts">
  import Switch from './Switch.svelte'
  import CursorTracker from 'src/modules/shared/components/CursorTracker.svelte'
  import Phone from 'src/modules/shared/components/Phone.svelte'

  let light: boolean = true

  export let page: number

  function toggleLight(event) {
    light = !event.detail.checked
  }
</script>

<style lang="scss">
  .page-body {
    height: 100vh;
    width: 100%;
    position: relative;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 75px;
      font-weight: bold;
      color: var(--colorPrimary);
      position: absolute;
      top: 50px;
      left: 50px;

      display: flex;
      flex-direction: column;
    }

    img {
      height: 735px;
    }

    &.active {
      background: radial-gradient(circle, rgba(31, 0, 85, 1) 0%, rgba(0, 0, 0, 1) 100%);
    }
  }
</style>

<div class="page-body" class:active={!light}>
  <div class="title">
    Solis. <span style="font-size: 16px; margin-left: 25px;">Quizás necesites una perspectiva más amplia para verlo todo...</span>
  </div>
  {#if light}
    <img src="/assets/1.png" alt="" />
  {:else}
    <CursorTracker />
  {/if}
  <Switch checked={light} on:change={toggleLight} />
  <Phone bind:page />
</div>
