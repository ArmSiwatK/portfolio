<script>
  import styles from './Portfolio.module.css';

  let {
    title,
    gifSrc,
    appLink = '',
    repoLink = '',
  } = $props();

  let isMobile = $state(false);

  const updateViewport = () => {
    isMobile = window.innerWidth <= 768;
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  $effect(() => {
    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  });
</script>

<article class={styles.portfolioItem}>
  <h3 class={styles.portfolioTitle}>{title}</h3>
  <img src={gifSrc} alt={title} class={styles.portfolioGif} />
  <div class={styles.portfolioButtons}>
    {#if appLink}
      <button type="button" onclick={() => openLink(appLink)}>
        {isMobile ? 'View' : 'View Application'}
      </button>
    {/if}
    {#if repoLink}
      <button type="button" onclick={() => openLink(repoLink)}>
        {isMobile ? 'Repo' : 'GitHub Repository'}
      </button>
    {/if}
  </div>
</article>
