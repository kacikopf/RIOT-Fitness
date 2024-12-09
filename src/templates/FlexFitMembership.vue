<script setup>

</script>

<template>
  <section class="flex-fit">
    <aside class="content">
      <h1>FlEXFIT <br> <span>INCOME - ADJUSTED MEMBERSHIP</span></h1>
      <p>RIOT Fitness offers needs-based assistance to individuals and families that qualify financially, making access
        to membership affordable for all.</p>

      <h2>Applying is easy and confidential</h2>

      <p>How to apply:</p>
      <ol>
        <li>Print and complete the application. (You can also complete the fillable PDF application and then print it
          out.) The application must be completed in its entirety or it will not be considered.
        </li>
        <li>Make a copy of your most recent federal tax return or financial support documents. Please note we cannot
          process your application without proper income documentation.
        </li>
        <li>Bring the documents and your state-issued photo ID to the Member Services desk at RIOT Fitness</li>
      </ol>
      <h2>Have questions?</h2>
      <p>Give us a call or schedule an appointment to speak with a membership advisor today.</p>
      <div class="flexfit-buttons">
        <button class="white">Application (PDF)</button>
        <button>Income Documentation</button>
      </div>
    </aside>
    <div class="image">
      <img src="../assets/flexfit%20women.jpg" alt="Two women flexing and smiling"/>
    </div>
  </section>
</template>

<style scoped>

section.flex-fit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    ol {
      li {
        margin: 0 1rem 1rem 1rem;
      }
    }

    .flexfit-buttons {
      display: flex;
      flex-direction: column;
      margin-bottom: .5rem;

      button {
        margin: .5rem 0;
      }

      .white {
        background-color: #fff;
        color: #272727;
      }
    }

    h1 {
      span {
        font-size: .7em;
      }
    }

    h2 {
      text-transform: unset;
    }

    p {
      span {
        font-weight: bold;
      }
    }
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: 50% 20%;
  }
}

@media screen and (width > 700px) {
  section.flex-fit {
    .content {
      .flexfit-buttons {
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}

@media screen and (width > 1200px) {
  section.flex-fit {
    flex-direction: row;
    align-items: center;
    padding-bottom: 1rem;

    img {
      height: 700px;
      width: 400px;
    }

    .content {
      padding-right: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      align-items: flex-start;

      .flexfit-buttons {
        flex-direction: row;
      }

      p {
        font-size: 1rem;
        max-width: 85%;
      }
    }
  }
}
</style>