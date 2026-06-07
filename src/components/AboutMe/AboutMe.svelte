<section class="about-section">
  <div class="about-text">
    <h2>Call me Arm!</h2>
    <p>
      I am learning software development. Being here means you're checking out
      my little portfolio! Let's see if me at this point can make you a good
      impression.
    </p>
  </div>
  <div class="about-photo">
    <img src="/images/profile.png" alt="Arm" />
  </div>
</section>

<style>
  .about-section {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    margin: 0 10%;
    padding: 50px;
    color: #fff;
  }

  .about-text {
    margin-right: 10%;
    text-align: initial;
  }

  .about-text h2 {
    margin-bottom: 10px;
    font-size: 3rem;
    font-weight: 700;
  }

  .about-text p {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  .about-photo img {
    max-width: 250px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(0, 0, 0);
  }

  @media (max-width: 1099px) {
    .about-section {
      flex-direction: column-reverse;
      padding: 50px 0;
    }

    .about-text {
      margin-right: 0;
      margin-bottom: 20px;
      text-align: center;
    }

    .about-photo img {
      margin-top: 20px;
    }
  }
</style>
