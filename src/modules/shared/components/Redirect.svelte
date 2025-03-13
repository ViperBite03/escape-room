<script lang="ts">
  import Decoder from 'src/modules/shared/components/Decoder.svelte'
  import Page2 from 'src/modules/shared/components/Page2.svelte'
  import Call from 'src/modules/shared/components/Call.svelte'

  let page: number = 0
</script>

{#if page == 0}
  <Decoder bind:page />
{:else if page == 1}
  <Page2 bind:page />
{:else}
  <Call />
{/if}
