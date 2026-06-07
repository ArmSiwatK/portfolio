<script>
  import PortfolioItem from './PortfolioItem.svelte';

  const projects = [
    {
      title: 'Character Selection Mockup',
      gifSrc: '/images/demos/demo1.gif',
      appLink: 'https://three-character-selection.vercel.app/',
      repoLink: 'https://github.com/ArmSiwatK/Three-Character-Selection',
    },
    {
      title: 'Character Gallery',
      gifSrc: '/images/demos/demo2.gif',
      appLink: 'https://touhou-characters.vercel.app/',
      repoLink: 'https://github.com/ArmSiwatK/touhou-characters',
    },
    {
      title: 'Orange Cat CRUD Web App',
      gifSrc: '/images/demos/demo6.gif',
      appLink: 'https://orangecat.vercel.app/',
      repoLink: 'https://github.com/lethal1147/frontend-jsd4-groupE',
    },
    {
      title: 'Find Your Hat Challenge Project',
      gifSrc: '/images/demos/demo3.gif',
      appLink: 'https://replit.com/@SiwatArm/JavaScript-Find-My-Hat',
      repoLink: '',
    },
    {
      title: 'Play Multiple YouTube Videos',
      gifSrc: '/images/demos/demo4.gif',
      appLink: 'https://play-multiple-videos.vercel.app/',
      repoLink: 'https://github.com/ArmSiwatK/play-multiple-videos',
    },
    {
      title: "Bad Apple!! but they're Minecraft",
      gifSrc: '/images/demos/demo5.gif',
      appLink: 'https://youtu.be/n86O1YcHOuU',
      repoLink: '',
    },
  ];
</script>

<section class="portfolio">
  {#each projects as project (project.title)}
    <PortfolioItem {...project} />
  {/each}
</section>

<style>
  .portfolio {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
    margin: 5% 150px 0;
    color: #fff;
  }

  @media (max-width: 768px) {
    .portfolio {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      margin: 20% 0;
    }
  }
</style>
