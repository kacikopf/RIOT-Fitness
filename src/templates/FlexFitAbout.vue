<script setup>

</script>

<template>
  <section class="about-details">

    <div class="left-box">
      <img src="../assets/flexfit-couple.jpg" alt="Older couple at the gym smiling"/>
      <aside class="left-info">
        <h2>How FlexFit Works</h2>
        <p>We will consider your annual income as well as the number of adults and dependents in your household, and
          then determine assistance to align with your individual situation. If your family receives assistance through
          the county or other agency, please let us know.</p>
        <p>We will process your application in the order it is received. We will review your information and within ten
          (10) business days provide you with a decision via email, letter or phone call. We will also let you know if
          we need additional information.</p>
      </aside>
    </div>

    <div class="right-box">
      <img src="../assets/flexfit-tax-return.jpg" alt="Tax return document"/>
      <aside class="right-info">
        <h2>INCOME VERIFICATION GUIDELINES</h2>
        <p>Submit the previous year-end 1040 federal tax return for you and any adult in your household. Include
          additional documents showcasing financial support. If not required to file taxes, provide at least two (2)
          documents indicating yearly projected income, financial support, and proof of dependents. In the absence of
          current income verification or approved documentation, the application won't proceed.</p>
      </aside>
    </div>

    <div class="left-box">
      <img src="../assets/support-flexfit.jpg" alt="Three gym women smiling"/>
      <aside class="left-info">
        <h2>SUPPORT FLEXFIT</h2>
        <p>Round up your monthly membership fee for a tax-deductible donation to FlexFit, supporting fitness memberships
          for lower-income households. </p>
        <p>Contact a member advisor to add a donation to your monthly debit or make a one-time or monthly donation
          online.</p>
          <button>Donate Now</button>
      </aside>
    </div>

  </section>
</template>

<style scoped>
section.about-details {
  margin: 1rem 5rem 1rem 5rem;
  text-align: center;

  div.left-box {
    display: flex;
    flex-direction: column;
  }

  div.right-box {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: 50% 20%;
  }

  h2 {
    padding-top: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }
}

@media screen and (width > 1000px) {


  section.about-details {
    flex-direction: row;
    margin: 0 0 5rem 0;


    div.left-box {
      flex-direction: row;
      max-height: 400px;
      text-align: left;


      aside.left-info {
        margin: 0 5rem 0 5rem;
        align-content: center;
      }
    }

    div.right-box {
      flex-direction: row-reverse;
      max-height: 400px;
      text-align: right;

      img {
        box-shadow: -15px 15px #272727;
      }

      aside.right-info {
        margin: 0 5rem 0 5rem;
        align-content: center;
      }
    }

    img {
      width: 50%;
      object-fit: cover;
      margin: 1rem 0 1rem 0;
    }
  }
}
</style>