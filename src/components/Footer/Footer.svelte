<script>
  import { BriefcaseBusiness, CodeXml, FileText, Mail, Phone } from '@lucide/svelte';
</script>

<footer class="footer">
  <div class="footer-contact">
    <div class="footer-info">
      <span class="footer-icon">
        <Mail size={50} aria-hidden="true" />
      </span>
      <a href="mailto:arm.siwatk@gmail.com" class="footer-text">arm.siwatk@gmail.com</a>
    </div>
    <div class="footer-info">
      <span class="footer-icon">
        <Phone size={50} aria-hidden="true" />
      </span>
      <a href="tel:+66-92-260-7400" class="footer-text">+66-92-260-7400</a>
    </div>
  </div>
  <div class="footer-social">
    <a href="https://www.linkedin.com/in/arm-siwatk/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <span class="footer-icon">
        <BriefcaseBusiness size={50} aria-hidden="true" />
      </span>
    </a>
    <a href="https://github.com/ArmSiwatK" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <span class="footer-icon">
        <CodeXml size={50} aria-hidden="true" />
      </span>
    </a>
    <a href="https://drive.google.com/file/d/1pXCG6ZQdHg_pCxJek8t3UfePInzWTj5b/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume">
      <span class="footer-icon">
        <FileText size={50} aria-hidden="true" />
      </span>
    </a>
  </div>
</footer>

<style>
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5%;
    padding: 20px;
    color: #fff;
    background-color: #333;
  }

  .footer-contact,
  .footer-social {
    display: flex;
    flex-flow: row wrap;
  }

  .footer-info {
    display: flex;
    align-items: center;
    margin: 2.5% 0;
  }

  .footer-icon {
    display: inline-flex;
    flex: 0 0 auto;
    margin-right: 10px;
  }

  .footer-contact .footer-icon {
    margin: auto 32px;
  }

  .footer-social .footer-icon {
    margin: auto 48px;
  }

  .footer-text {
    color: #fff;
    font-size: 24px;
    text-decoration: none;
  }

  .footer-text:hover {
    color: #999;
  }

  .footer-social a {
    color: #fff;
    text-decoration: none;
  }

  .footer-social a:hover {
    color: #999;
  }

  @media (max-width: 1250px) {
    .footer {
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .footer-contact {
      justify-content: center;
    }

    .footer-text {
      font-size: 18px;
    }

    .footer-social .footer-icon {
      margin: 24px;
    }
  }
</style>
