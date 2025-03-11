<script lang="ts">
  import Svg from '@/modules/shared/components/Svg.svelte'
  import { onMount } from 'svelte'

  interface IOption {
    title: string
    value?: string
    subOptions?: string[]
  }

  export let value: string | { option: string; subOption: string } | any
  export let options: IOption[] | string[]
  export let isOpen: boolean = false
  export let icon: string = 'person'
  export let placeholder: string = 'Selecciona una opción'
  export let minWidth: string = '0'

  const isSimple = typeof options[0] === 'string'

  let HTMLSelect: HTMLElement
  let HTMLDropdown: HTMLElement

  const selectOption = (option, subOption: string = '') => {
    if (isSimple) {
      value = option
    } else {
      value = {
        option,
        subOption,
      }
    }

    isOpen = false
  }

  const clean = () => {
    value = ''
    isOpen = false
  }

  const closeOutside = (ev: Event) => HTMLSelect?.contains(ev.target) || (isOpen = false)

  onMount(() => {
    const top = HTMLDropdown.getBoundingClientRect().top
    const availableHeight = window.innerHeight - top - 70 //offsetBorrarTodo
    const options: HTMLElement = HTMLDropdown.children[0] as HTMLElement
    options.style.maxHeight = `${availableHeight}px`
  })
</script>

<style lang="scss">
  @use 'src/sass/mixins.scss' as *;
  .select {
    position: relative;
    width: 100%;
    height: 65px;

    .selected {
      transition: 0.3s ease;
      border: 1px solid var(--colorBorder);
      background-color: var(--colorSecondary);
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0 15px;
      width: 100%;
      height: 65px;
      cursor: pointer;

      .selected-option {
        display: flex;
        flex-direction: column;
        text-align: left;
        font-size: 14px;
      }

      .placeholder {
        color: var(--colorText2);
        font-size: 14px;
      }

      .selected-option,
      .placeholder {
        width: 100%;
      }

      :global(svg) {
        flex-shrink: 0;
      }
    }

    .bold {
      font-weight: bold;
    }

    .dropdown {
      position: absolute;
      margin-top: 10px;
      width: 100%;
      border: 1px solid var(--colorBorder);
      border-radius: var(--radius);
      background-color: var(--colorSecondary);
      overflow: hidden;
      z-index: 2;
      visibility: hidden;

      &.isOpen {
        visibility: visible;
      }

      .options {
        overflow-y: auto;

        @include notDesktop {
          max-height: 300px;
        }
      }

      .option,
      .suboption {
        display: block;
        padding: 10px;
        padding-right: 20px;
        padding-left: 15px;
        width: 100%;
        cursor: pointer;
        user-select: none;
        text-align: left;

        &:hover {
          background-color: var(--colorNeutral);
        }
      }
    }

    .clean {
      border-top: 1px solid var(--colorBorder);
      color: var(--colorText2);
      font-size: 14px;
    }
  }
</style>

<div class="select" bind:this={HTMLSelect} style="min-width: {minWidth}px">
  <button class="selected" on:click={() => (isOpen = !isOpen)}>
    {#if icon}
      <Svg name={icon} className="selected-svg" fill="var(--colorPrimary)" />
    {/if}

    <div class="selected-option">
      {#if isSimple}
        <span class="bold"> {value} </span>
      {:else}
        <span class="bold"> {value.option} </span>
        <span>{value.subOption}</span>
      {/if}

      {#if (isSimple && !value) || (!isSimple && !value.option && !value.subOption)}
        <span class="placeholder">{placeholder}</span>
      {/if}
    </div>

    <Svg name="arrow" />
  </button>

  <div class="dropdown" class:isOpen bind:this={HTMLDropdown}>
    <div class="options" data-lenis-prevent>
      {#each options as option}
        {#if typeof option === 'string'}
          <button class="option" on:click={() => selectOption(option)}>{option}</button>
        {:else}
          <button class="option" class:bold={option.subOptions} on:click={() => selectOption(option.title)}>{option.title}</button>

          {#each option.subOptions as subOption}
            <button class="suboption" on:click={() => selectOption(option.title, subOption)}>{subOption}</button>
          {/each}
        {/if}
      {/each}
    </div>
    <button class="option clean" on:click={clean}> Borrar selección </button>
  </div>
</div>

<svelte:window on:click={closeOutside} />
