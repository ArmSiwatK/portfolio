<script>
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

<article class="portfolio-item">
  <h3 class="portfolio-title">{title}</h3>
  <img src={gifSrc} alt={title} class="portfolio-gif" />
  <div class="portfolio-buttons">
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

<style>
  .portfolio-item {
    padding: 20px;
    background-color: #222;
    border-radius: 8px;
  }

  .portfolio-title {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .portfolio-gif {
    width: 100%;
    border-radius: 8px;
  }

  .portfolio-buttons button {
    margin: 5% 5% 2%;
    padding: 8px 16px;
    color: #fff;
    font-weight: 700;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  .portfolio-buttons button:hover {
    color: #222;
    background-color: #fff;
    border-color: #fff;
  }

  @media (max-width: 768px) {
    .portfolio-item {
      border-radius: 0;
    }
  }
</style>
