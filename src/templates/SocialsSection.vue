<script setup>

import SocialImages from "../components/SocialImages.vue";
</script>

<template>
  <section class="socials">
    <aside class="content">
      <h1>Join the Riot
        Community</h1>
      <p>Follow us on socials for daily motivation, updates, and the latest from the RIOT community!
        <span>#RIOTFitness</span></p>
      <div class="social-svg">
        <svg viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="#272727"/>
          <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill="#272727"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                fill="#272727"/>
        </svg>
        <svg viewBox="0 0 48 48">
          <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
              <rect width="48" height="48" fill="none"/>
              <rect width="48" height="48" fill="none"/>
            </g>
            <g id="icons_Q2" data-name="icons Q2">
              <path
                  d="M44,6.1V41.9a.3.3,0,0,1-.1.2,1.9,1.9,0,0,1-1.8,1.8H31.6V28.5h4.9c.3,0,.3,0,.4-.3l.3-2.5c.1-1,.2-2,.4-3s0-.3-.2-.3H31.6V18.5c0-.3.1-.7.1-1a1.8,1.8,0,0,1,1.6-1.6l1.3-.2h3c.2,0,.2,0,.2-.2V10.4c0-.1,0-.2-.2-.2H33a7.2,7.2,0,0,0-3.3.7A6,6,0,0,0,26.2,14a7.3,7.3,0,0,0-.8,3.6c-.1,1.5,0,3.1,0,4.7H20.3c-.2,0-.2.1-.2.2v5.7c0,.2,0,.2.2.2h5.1V43.8a.3.3,0,0,0-.1.2H5.9a1.9,1.9,0,0,1-1.8-1.8c-.1,0-.1-.1-.1-.2V6.1c0-.1,0-.2.1-.2A1.9,1.9,0,0,1,5.9,4.1H42.1a1.9,1.9,0,0,1,1.8,1.8Z"
                  fill="#272727"/>
            </g>
          </g>
        </svg>
      </div>
    </aside>
    <div class="img-gallery">
      <social-images></social-images>
    </div>
  </section>
</template>

<style scoped>
section.socials {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content {

    .social-svg {
      display: flex;
      flex-direction: row;
      width: 75px;
      gap: 1rem;
      margin: 0 auto;
    }
  }

  p {
    span {
      font-weight: bold;
      text-decoration: unset;
    }
  }
}

@media screen and (width > 1200px) {

  section.socials {
    flex-direction: row;
    text-align: left;
    align-items: center;
    margin: 7rem 0 2rem 0;

    .content {
      width: 500px;

      .social-svg {
        margin: unset;
      }
    }

    h1 {
      text-align: left;
    }

    .img-gallery {
      width: 800px;
    }

  }
}
</style>