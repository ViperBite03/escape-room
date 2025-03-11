<script lang="ts">
  import Svg from '@/modules/shared/components/Svg.svelte'
  import { onMount } from 'svelte'

  export let closed: boolean = true
  export let maxWidth: number = 500
  export let id: string = ''
  export let padding: boolean = false
  export let invisible: boolean = false
  export let onClose: Function = () => {}

  const close = () => {
    closed = true
    onClose()
  }

  let bodyOverflow: Function
  let HTMLModalContent: HTMLElement
  let headerShadow: boolean = false

  onMount(() => {
    bodyOverflow = () => {
      document.body.style.overflowY = closed ? 'auto' : 'hidden'
      document.body.style.paddingRight = closed ? '0px' : '10px'
    }

    if (HTMLModalContent) {
      HTMLModalContent.addEventListener('scroll', () => {
        headerShadow = HTMLModalContent.scrollTop > 0
      })
    }
  })

  $: {
    closed
    if (bodyOverflow && !invisible) bodyOverflow()
  }
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  $headerHeight: 65px;
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;

    &.closed {
      display: none;
    }

    .modal-background {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      z-index: -1;

      @include notDesktop {
        background-color: white;
      }
    }

    .modal {
      background-color: white;
      height: fit-content;
      width: fit-content;
      max-height: calc(100dvh - 40px);
      border-radius: var(--radius);
      display: flex;
      flex-direction: column;
      overflow: hidden;

      @include notDesktop {
        max-width: 100%;
        max-height: 100dvh;
        height: 100dvh;
        border: 0;
        border-radius: 0;
      }

      .modal-header {
        transition: 0.3s ease;
        position: relative;
        min-height: $headerHeight;
        display: flex;
        align-items: center;
        padding: 0 20px;
        font-weight: bold;
        flex-shrink: 0;
        z-index: 1;

        &.headerShadow {
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        }

        @include desktop {
          padding-right: 55px;
        }

        .close {
          transition: 0.3s ease;
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 0;
          padding: 20px;
          opacity: 0.4;

          &:hover {
            transition: 0.3s ease;
            opacity: 1;
          }
        }
      }

      .modal-content {
        max-height: calc(100dvh - $headerHeight - 40px);
        overflow-y: auto;

        &.padding {
          padding: 20px;
          padding-top: 0;
        }

        @include notDesktop {
          max-height: calc(100dvh - $headerHeight);
        }
      }
    }
  }
</style>

{#if invisible}
  <slot name="modal-content" />
{:else}
  <div class="modal-container" {id} class:closed>
    <button class="modal-background" on:click={close} aria-label="close"></button>
    <div class="modal" style="max-width: {maxWidth}px">
      <slot />
    </div>
  </div>
{/if}
