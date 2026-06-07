<script>
  import { BriefcaseBusiness, CodeXml, FileText, Mail, Phone } from '@lucide/svelte';
  import styles from './Footer.module.css';
</script>

<footer class={styles.footer}>
  <div class={styles.footerContact}>
    <div class={styles.footerInfo}>
      <Mail class={styles.footerIcon} size={50} aria-hidden="true" />
      <a href="mailto:arm.siwatk@gmail.com" class={styles.footerText}>arm.siwatk@gmail.com</a>
    </div>
    <div class={styles.footerInfo}>
      <Phone class={styles.footerIcon} size={50} aria-hidden="true" />
      <a href="tel:+66-92-260-7400" class={styles.footerText}>+66-92-260-7400</a>
    </div>
  </div>
  <div class={styles.footerSocial}>
    <a href="https://www.linkedin.com/in/arm-siwatk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <BriefcaseBusiness class={styles.footerIcon} size={50} aria-hidden="true" />
    </a>
    <a href="https://github.com/ArmSiwatK" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <CodeXml class={styles.footerIcon} size={50} aria-hidden="true" />
    </a>
    <a href="https://drive.google.com/file/d/1pXCG6ZQdHg_pCxJek8t3UfePInzWTj5b/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
      <FileText class={styles.footerIcon} size={50} aria-hidden="true" />
    </a>
  </div>
</footer>
