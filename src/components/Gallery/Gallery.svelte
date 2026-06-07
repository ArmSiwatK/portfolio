<script>
  import styles from './Gallery.module.css';

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

<div class={styles.gallery}>
  {#each logos as logo (logo.name)}
    <div
      class={styles.logoItem}
      role="group"
      aria-label={logo.name}
      onmouseenter={() => hoveredLogo = logo.name}
      onmouseleave={() => hoveredLogo = null}
    >
      <img src={logo.imageSrc} alt={logo.name} class={styles.logoImage} />
      {#if hoveredLogo === logo.name}
        <div class={styles.logoName}>{logo.name}</div>
      {/if}
    </div>
  {/each}
</div>
