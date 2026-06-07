<script>
  let screenName = $state('Siwat K.');

  const updateScreenName = () => {
    const width = window.innerWidth;

    if (width >= 1100) {
      screenName = 'Siwat - | Arm | - Kanjanapanitkun';
    } else if (width >= 576) {
      screenName = 'Siwat K. (Arm)';
    } else {
      screenName = 'Siwat K.';
    }
  };

  $effect(() => {
    updateScreenName();
    window.addEventListener('resize', updateScreenName);

    return () => {
      window.removeEventListener('resize', updateScreenName);
    };
  });
</script>

<nav class="nav">
  <div class="logo">{screenName}</div>
</nav>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px;
    color: #fff;
    background-color: #222;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .logo {
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 700;
    text-align: center;
  }
</style>
