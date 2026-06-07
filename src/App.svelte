<script>
  import NavBar from './components/NavBar/NavBar.svelte';
  import AboutMe from './components/AboutMe/AboutMe.svelte';
  import Gallery from './components/Gallery/Gallery.svelte';
  import Portfolio from './components/Portfolio/Portfolio.svelte';
  import Footer from './components/Footer/Footer.svelte';
</script>

<main class="app">
  <NavBar />
  <AboutMe />
  <Gallery />
  <Portfolio />
  <Footer />
</main>

<style>
  .app {
    min-height: 100vh;
    text-align: center;
  }
</style>
