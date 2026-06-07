<script>
  const logos = [
    { imageSrc: '/images/logos/html5.png', name: 'HTML5' },
    { imageSrc: '/images/logos/css3.png', name: 'CSS3' },
    { imageSrc: '/images/logos/javascript.png', name: 'JavaScript' },
    { imageSrc: '/images/logos/react.png', name: 'React' },
    { imageSrc: '/images/logos/git.png', name: 'Git' },
    { imageSrc: '/images/logos/node.png', name: 'Node' },
    { imageSrc: '/images/logos/express.png', name: 'Express' },
    { imageSrc: '/images/logos/mongodb.png', name: 'MongoDB' },
    { imageSrc: '/images/logos/blender.png', name: 'Blender' },
  ];

  let hoveredLogo = $state(null);
</script>

<div class="gallery">
  {#each logos as logo (logo.name)}
    <div
      class="logo-item"
      role="group"
      aria-label={logo.name}
      onmouseenter={() => hoveredLogo = logo.name}
      onmouseleave={() => hoveredLogo = null}
    >
      <img src={logo.imageSrc} alt={logo.name} class="logo-image" />
      {#if hoveredLogo === logo.name}
        <div class="logo-name">{logo.name}</div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
    background-color: #1a1a1a;
  }

  .logo-item {
    position: relative;
    flex-basis: calc(100% / 10);
    overflow: hidden;
    background-color: #808080;
    border-radius: 8px;
  }

  .logo-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .logo-item:hover {
    border-radius: 8px 8px 0 0;
  }

  .logo-name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px 0;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    background-color: #1a1a1a;
  }

  @media (max-width: 768px) {
    .logo-item {
      flex-basis: calc(100% / 4);
    }
  }
</style>
