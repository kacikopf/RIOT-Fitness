<script setup>

</script>

<template>
  <section class="primary-template">

    <header>
      <div class="hero">
        <div class="hero-nav">
          <h1>RIOT FITNESS</h1>
          <span class="nav">
            <a href="#">About</a>
            <a href="#">Events &amp; Classes</a>
            <a href="#">Membership</a>
          </span>
        </div>

        <div class="nav-header">
          <p>Empowering women, <br/> redefining fitness</p>
          <button>Book a tour</button>
        </div>

      </div>
    </header>

    <section class="main">
      <slot></slot>
    </section>

    <footer>
      <aside>
        <div class="logo"><img src="../assets/RIOT-Logo.png" alt="RIOT-Fitness Logo"/></div>
        <form class="newsletter-form">
          <input type="text" placeholder="Enter your email address">
        </form>
        <p>Join our newsletter to stay up to date on RIOT Fitness<br/> news and events.</p>
      </aside>
      <div class="nav">
        <a href="#">Careers</a>
        <a href="#">Contact Us</a>
        <a href="#">Book a Tour</a>
        <a href="#">Schedule</a>
      </div>
    </footer>
    <section class="copyright">
      <p>© 2024 RIOT FITNESS. All right reserved.</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
    </section>
  </section>
</template>

<style scoped>

section.primary-template {
  //max-width: 900px;
  margin: 0 auto;
  background-color: white;
  //padding: 1rem;

  h1 {
    font-family: "Anisette Std", helvetica, sans-serif;
    margin: 3rem 0 .5rem 0;
    text-transform: uppercase;
  }

  a, p {
    margin: 0;
    font-family: "Azo Sans", Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    margin: 10px;
    font-size: .8rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 664px;
    background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("src/assets/RIOT-Fitness-Hero.jpg");
    background-size: cover;
    background-position: 20% 0;
    text-align: center;
    color: white;
    padding: 2rem;

    a {
      color: white;
    }
  }

  .nav-header {

    p {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: bold;
      padding: 1rem;
    }

    button {
      border: none;
      font-family: "Azo Sans", Helvetica, sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      padding: 10px;
      width: 200px;
      background-color: white;
    }
  }

  footer {
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 1rem 7rem 1rem 7rem;

    aside {

      .logo img {
        width: 300px;
        display: flex;
        margin: 0 auto;
        padding: 2rem 0 2rem 0;
      }

      .newsletter-form {
        text-align: center;

        input {
          border: none;
          background-color: #E6E6E6;
          padding: 20px;
          width: 400px;
          margin-bottom: 10px;
        }
      }

      p {
        text-align: center;
        font-size: 16px;
        margin-bottom: 2rem;
      }
    }

    a {
      color: black;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5px;
    }
  }

  .copyright {
    display: flex;
    flex-direction: row;
    padding: 1rem 7rem 1rem 7rem;
  }

  @media screen and (width > 1000px) {

    .hero {
      height: 850px;
      text-align: unset;

      .hero-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        span.nav {
          align-self: center;
        }
      }

      .logo {
        text-align: left;
      }


      h1 {
        margin: unset;
        font-size: 2rem;
      }

    }

    .nav {
      text-align: right;
    }

    .nav-header {

      p {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        padding: 1rem;
        text-align: right;

      }

      button {
        width: 250px;
        float: right;
        margin: 1rem;
      }
    }

    footer {
      flex-direction: row;
      justify-content: space-between;

      aside {
        justify-items: baseline;
      }

      img {
        padding: 5rem 0 5rem 0;
      }

      a {
        text-align: right;
        margin-right: 4rem;
        align-items: unset;
      }

      p {
        text-align: left;
      }

      .nav {
        padding: 2rem 0 2rem 0;
      }
    }
  }
}

</style>