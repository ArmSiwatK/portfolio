<script>
  import styles from './NavBar.module.css';

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

<nav class={styles.nav}>
  <div class={styles.logo}>{screenName}</div>
</nav>
