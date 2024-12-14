<script setup>
defineProps({
      image: {
        type: String,
        required: true,
      },

      header: {
        type: String,
        required: true,
      },

      button: {
        type: String,
        required: true,
      }
    }
)

import ScrollingText from "../components/ScrollingText.vue";
import Home from "../pages/Home.vue";
import Schedule from "../pages/Schedule.vue";
</script>

<template>
  <section class="primary-template">

    <header>
      <div class="hero"
           :style="'background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(../src/assets/' + image + ');'">
        <div class="hero-nav">
          <router-link :to="{ name: 'Home' } "><h1>RIOT FITNESS</h1></router-link>
          <span class="nav">
            <router-link :to="{ name: 'About' }">About</router-link>
            <router-link :to="{ name: 'Schedule' }">Events & Classes</router-link>
            <router-link :to="{ name: 'Membership' }">Memberships</router-link>
            <router-link :to="{name: 'Contact'}">Contact</router-link>
          </span>
        </div>

        <div class="nav-header">
          <h2 class="header" v-html="header"></h2>
          <button class="button" v-html="button"></button>
        </div>

      </div>
    </header>

    <ScrollingText></ScrollingText>

    <section class="main">
      <slot></slot>
    </section>


    <scrolling-text></scrolling-text>
    <footer>
      <aside>
        <div class="logo">
          <svg viewBox="0 0 1247.36 273.31">
            <g id="Content">
              <path class="cls-4"
                    d="M466.32,188.1l-62.79-68.23h-55.45v68.23h-51.1V4.89h168.26c35.07,0,64.97,18.21,64.97,56.27,0,34.52-25.55,54.37-57.9,56h-8.15l70.4,70.95h-68.23ZM453.27,43.49h-105.2v39.96h107.1c14.41,0,25.01-6.25,25.01-20.66,0-12.5-10.87-19.3-26.91-19.3Z"/>
              <path class="cls-4" d="M591.6,188.1V4.89h51.1v183.21h-51.1Z"/>
              <path class="cls-4"
                    d="M830.8,193c-65.78,0-133.19-26.64-133.19-96.5S764.75,0,830.8,0s133.2,26.91,133.2,96.5-66.6,96.5-133.2,96.5ZM830.8,37.78c-48.39,0-79.37,21.48-79.37,58.72s30.99,58.71,79.37,58.71,78.83-21.2,78.83-58.71-30.99-58.72-78.83-58.72Z"/>
              <path class="cls-4" d="M1143.66,45.67v142.44h-50.83V45.67h-102.21V4.89h255.25v40.77h-102.21Z"/>
              <path class="cls-1" d="M302.93,240.92v28.13h-5.96v-55.76h58.66v5.21h-52.7v17.13h52.7v5.29h-52.7Z"/>
              <path class="cls-1" d="M450.69,269.05v-55.76h5.96v55.76h-5.96Z"/>
              <path class="cls-1" d="M587.45,218.5v50.55h-5.87v-50.55h-32.93v-5.21h71.65v5.21h-32.84Z"/>
              <path class="cls-1"
                    d="M778.4,270.46h-.74l-59.65-47.07v45.67h-5.96v-57.17h.74l59.65,47.16v-45.75h5.96v57.17Z"/>
              <path class="cls-1"
                    d="M876.04,269.05v-55.76h58.66v5.21h-52.7v16.71h52.7v5.13h-52.7v23.5h52.7v5.21h-58.66Z"/>
              <path class="cls-1"
                    d="M1057.81,270.54c-9.85,0-20.52-1.08-29.54-5.29l1.57-5.13c8.03,3.89,18.2,5.21,27.96,5.21,12.33,0,27.05-2.4,27.05-12.24,0-7.11-8.27-8.94-25.89-10.51-18.78-1.57-30.28-4.22-30.28-15.22s14.89-15.56,33.09-15.56c9.68,0,19.61,1.16,27.22,4.47l-1.49,5.13c-7.78-3.31-16.55-4.38-25.73-4.38-10.09,0-26.97,1.24-26.97,9.93,0,6.37,6.95,8.44,24.49,10.01,18.37,1.49,31.6,3.72,31.6,15.47,0,14.39-17.54,18.12-33.09,18.12Z"/>
              <path class="cls-1"
                    d="M1212.77,270.54c-9.85,0-20.52-1.08-29.54-5.29l1.57-5.13c8.03,3.89,18.2,5.21,27.96,5.21,12.33,0,27.05-2.4,27.05-12.24,0-7.11-8.27-8.94-25.89-10.51-18.78-1.57-30.28-4.22-30.28-15.22s14.89-15.56,33.09-15.56c9.68,0,19.61,1.16,27.22,4.47l-1.49,5.13c-7.78-3.31-16.55-4.38-25.73-4.38-10.09,0-26.97,1.24-26.97,9.93,0,6.37,6.95,8.44,24.49,10.01,18.37,1.49,31.6,3.72,31.6,15.47,0,14.39-17.54,18.12-33.09,18.12Z"/>
              <path class="cls-4"
                    d="M105.72,73.03c-5.54,3.83-11.87,6.19-17.9,9.13-8.51,4.15-16.46,9.48-23.52,15.79l-2.2-2.2L4.25,37.91V4.89h33.32l65.38,65.37s1.38,1.39,2.76,2.76Z"/>
              <path class="cls-4"
                    d="M268.41,235.4v33.65h-32.69s-69.03-70.35-69.03-70.35c0,0-.83-.83-1.67-1.68,12.34-11.09,27.09-15.73,34.9-31.43.3.3.61.6.61.6l67.87,69.2Z"/>
              <path class="cls-2"
                    d="M169.57,188.45c-9.02,7.86-18.8,15.05-29.89,19.55-10.93,4.43-23.28,6.07-34.61,2.87-22.89,14.57-39.24,36.93-56.22,58.18H4.25v-55.99c3.34-2.79,6.66-5.62,9.92-8.5,13.64-12.07,26.47-25.34,36.55-40.44,6.43-6.65,8.55-16.35,9.51-25.57.97-9.36,1.1-19.02,4.77-27.67,4.69-11.02,14.59-18.99,25.04-24.84,10.45-5.85,21.78-10.06,32.01-16.27,1.71-1.05,3.42-2.15,5.34-2.7,6.1-1.78,12.51,2.53,15.83,7.95,3.32,5.42,4.51,11.83,6.81,17.75,3.47,8.93,9.5,16.76,12.35,25.91.03.12.08.24.11.37.82,2.87.98,6.41-.75,8.5-.6.74-1.45,1.3-2.57,1.58-1.02.26-2.08.19-3.11-.02-9.11-1.82-16.67-8.24-21.92-15.84-5.06-7.31-8.26-15.71-11.4-24.03-2.05,4.6-4.22,9.36-8.04,12.65-2.74,2.36-6.14,3.79-9.16,5.77-8.39,5.51-13.98,15.32-23.53,18.39,8.7-1.28,16.96-5.34,23.3-11.43,5.09,21.17,4.9,43.59-.54,64.67,6.39-6.57,9.8-15.94,9.13-25.08,6.73,11.69,10.01,25.31,9.35,38.77.87-14.08.37-28.23-1.49-42.21,2.5,2.51,5.83,4.18,9.33,4.71-1.38,4.64-1.82,9.82.27,14.19,2.08,4.37,7.26,7.48,11.86,5.99,2.61,10.85,16.23,17.46,26.36,12.78Z"/>
              <path class="cls-4"
                    d="M156.22,124.54c1.25,1.03,2.56,1.95,3.96,2.73,1.6.89,3.6-.3,3.52-2.13-.11-2.59-.77-5.18-1.77-7.59-1.46-3.53-3.27-6.27-5.54-9.34,0,0-.25-.34-.5-.67-.23-.31-.57-.5-.95-.53-1.05-.1-2.23.15-3.27.43-1.62.44-3.37.97-4.29,2.37-.78,1.19-.75,2.78-.26,4.11s1.4,2.48,2.3,3.58c2.06,2.51,4.29,4.98,6.79,7.04Z"/>
              <path class="cls-2"
                    d="M190.96,166.31c.33-.92.57-1.88.67-2.86.36-3.68-1.38-7.39-4.14-9.86-2.48,2.79-5.12,5.88-8.54,7.38-7.8,3.4-17.31,7.2-25.26,10.25-1.37,2.8-.85,6.35,1.06,8.82.68.88,1.54,1.65,2.57,2.07,1.12.46,2.37.48,3.58.47,5.71-.07,11.49-.89,16.72-3.16s9.92-6.12,12.5-11.21c.31-.62.6-1.25.83-1.91Z"/>
              <path class="cls-2"
                    d="M189.79,132.51s.02.09.03.13c.63,2.36,1.26,4.8.83,7.2-.9,4.96-5.88,7.93-10.4,10.16-8.19,4.04-16.53,7.76-25,11.17-5.31,2.13-15.44,8.03-18.3,4.42-2.89-3.65,6.86-13.13,11.44-17.55,5.16-4.98,10.36-10,16.43-13.82,6.07-3.82,13.14-6.4,20.3-5.98.92.05,1.87.17,2.64.67,1.19.77,1.66,2.23,2.03,3.6Z"/>
              <path class="cls-2"
                    d="M137.88,125.46c1.73,1.95,3.55,3.82,5.64,5.36,1.87,1.38,4,2.49,6.23,3.08,1.54.41,3.14.56,4.73.38-4.61,2.05-8.9,4.82-12.66,8.19-2.94,2.63-7.31,2.88-10.55.63-2.09-1.45-4.17-2.92-6.25-4.39-.59-.62-1.54-1.67-1.29-2.12,2.85-5.25,6.49-10.07,10.76-14.25.08-.08.16-.15.27-.18.21-.05.39.13.53.29.86,1,1.71,2.02,2.59,3.01Z"/>
              <path class="cls-2"
                    d="M178.27,94.52c.58.12,1.13.33,1.65.65,1.61.98,2.52,2.76,3.29,4.48,1.24,2.78,2.32,5.82,1.81,8.82-.64,3.72-3.61,6.61-6.8,8.64-3.11,1.97-6.57,3.4-9.48,5.64.15-2.37-.74-4.58-1.61-6.73-1.72-4.24-3.44-8.48-5.15-12.73-.11-.27-.22-.56-.14-.83.07-.24.25-.42.44-.58,2.85-2.57,6.1-4.68,9.61-6.23,2-.88,4.33-1.56,6.39-1.12Z"/>
              <path class="cls-2"
                    d="M159.31,71.03c1.1.38,2.17.88,3.21,1.42,2.82,1.48,5.54,3.42,7.09,6.2,1.55,2.78,1.65,6.56-.45,8.96-.87,1-2.04,1.68-3.1,2.48-1.21.91-2.31,1.91-3.4,2.78-2.56,2.05-6.34.82-7.41-2.28,0-.01,0-.02-.01-.03-2-4.66-1.82-5.06-3.27-9.92-.78-2.61-1.56-5.22-2.34-7.82-.05-.15-.09-.32-.04-.47.04-.14.16-.24.27-.33,1.73-1.43,4.1-1.91,6.33-1.69,1.07.11,2.11.36,3.13.71Z"/>
              <path class="cls-2"
                    d="M112.64,114.46c1.38,2.93,2.07,6.21,3.19,9.28.37,1.01.81,2.02,1.53,2.82.73.79,1.8,1.34,2.86,1.19,1.56-.22,2.54-1.75,3.39-3.08,1.78-2.78,3.95-5.31,6.43-7.5-3.14-2.77-5.48-6.45-6.64-10.48-3.93.36-7.78,1.51-11.27,3.35-.57.3-1.2.76-1.14,1.4.03.29.21.55.37.79.48.71.9,1.46,1.26,2.23Z"/>
              <path class="cls-4"
                    d="M135.52,152.08c-1.39,3.67-3.05,7.23-4.99,10.63l-.49.98-40.18-40.18c6.29-3.51,16.42-11.44,16.42-11.44-.41,7.31,3.1,14.28,7.3,20.27,5.71,8.14,13.03,15.34,21.95,19.74Z"/>
              <polygon class="cls-4" points="268.41 151.48 268.41 269.05 150.85 269.05 268.41 151.48"/>
              <polygon class="cls-4" points="5.85 122.47 5.85 4.89 123.41 4.89 5.85 122.47"/>
              <polygon class="cls-3"
                       points="268.41 4.89 268.41 151.48 268.41 269.05 4.25 269.05 4.25 4.89 123.41 4.89 268.41 4.89"/>
            </g>
          </svg>
        </div>
        <form class="newsletter-form">
          <input type="text" placeholder="Enter your email address">
        </form>
        <p>Join our newsletter to stay up to date on RIOT Fitness news and events.</p>
      </aside>
      <div class="nav">
        <a>Careers</a>
        <router-link :to="{name: 'Contact'}">Contact Us</router-link>
        <router-link :to="{name: 'Contact'}">Book a Tour</router-link>
        <router-link :to="{ name: 'Schedule' }">Schedule</router-link>
      </div>
    </footer>
    <section class="copyright">
      <a>©2024 RIOT FITNESS. All right reserved. Privacy Policy. Terms of Service</a>
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
    //font-family: "Anisette Std", helvetica, sans-serif;
    //margin: 3rem 0 .5rem 0;
    //text-transform: uppercase;
  }

  a {
    text-transform: uppercase;
    margin: 10px;
  }

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 664px;
    background-size: cover;
    background-position: 20% 50%;
    text-align: center;
    color: white;
    padding: 2rem 2rem 1rem 2rem;

    a {
      color: white;

      &.router-link-active {
        color: #f17a8e;
        font-weight: bold;
        //text-decoration: 2px underline #ffffff;
      }
    }
  }

  .nav-header {
    text-align: center;
    margin: 10px;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: bold;
      padding: 1rem;
    }

    button {
      background-color: white;
      outline: unset;
      margin: 1rem;
      color: #272727;
    }
  }

  footer {
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    margin: 1rem 7rem 1rem 7rem;

    aside {


      .logo svg {
        width: 300px;
        display: flex;
        margin: 0 auto;
        padding: 2rem 0 2rem 0;

        .cls-1 {
          stroke: #f17a8e;
          stroke-width: 5px;
        }

        .cls-1, .cls-2 {
          fill: #f17a8e;
        }

        .cls-1, .cls-3 {
          stroke-miterlimit: 10;
        }

        .cls-4 {
          fill: #ee3f23;
        }

        .cls-3 {
          fill: none;
          stroke: #ee3f23;
          stroke-width: 15px;
        }
      }

      .newsletter-form {
        text-align: center;

        input {
          border: none;
          background-color: #E6E6E6;
          padding: 20px;
          width: 250px;
          margin-bottom: 10px;
        }
      }

      p {
        text-align: center;
        font-size: 12px;
        margin-bottom: 2rem;
      }
    }

    .nav {
      a {
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
      }
    }
  }

  .copyright {
    padding: 1rem 6.5rem 1rem 6.5rem;
    align-content: center;
    text-align: center;

    a {
      text-align: center;
      text-transform: unset;
      font-size: 10px;
    }
  }

  @media screen and (width > 1200px) {

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
      text-align: right;

      h2 {
        font-size: 2rem;
      }

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
        margin: 1rem 0 1rem 1rem;
      }
    }

    footer {
      flex-direction: row;
      justify-content: space-between;


      input {
        width: 400px;
      }

      aside {
        justify-items: baseline;
      }

      img {
        padding: 5rem 0 5rem 0;
      }

      a {
        text-align: right;
        //margin-right: 2rem;
        align-items: unset;
      }

      p {
        text-align: left;
      }

      .nav {
        padding: 2rem 0 2rem 0;

        a {
          align-items: flex-end;

        }
      }
    }

    .copyright {
      text-align: left;
    }
  }
}

</style>
