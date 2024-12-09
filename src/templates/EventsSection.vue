<script setup>

</script>

<template>
  <section class="events">
    <h1>Upcoming Events</h1>

    <div class="left-box">
      <img class="mindful-workshop" src="../assets/mindfulness-workshop.jpg" alt="Group of women meditating"/>
      <aside class="left-info">
        <h2>Mindfulness & Meditation Workshop</h2>
        <h5>November 25th, 10:00 - 11:00am</h5>
        <p>Take a break from the hustle and learn techniques to calm your mind and reduce stress in this guided session.
          Perfect for beginners, this workshop will help you build a mindfulness practice to improve both mental clarity
          and emotional well-being.</p>
        <button>Register</button>
      </aside>
    </div>

    <div class="right-box">
      <img src="../assets/women-jiujitsu.jpg" alt="Two women doing jiu jitsu"/>
      <aside class="right-info">
        <h2>Self-Defense Seminar for Beginners</h2>
        <h5>December 8th, 6:00 - 8:00pm</h5>
        <p>Gain confidence and essential self-defense skills in this hands-on workshop led by experienced instructors.
          Learn practical techniques to protect yourself in real-world situations, empowering you with the tools to feel
          safe and in control.</p>
        <button>Register</button>
      </aside>
    </div>

    <div class="left-box">
      <img src="../assets/mentalhealth-fitness-panel.jpg" alt="Older woman meditating"/>
      <aside class="left-info">
        <h2>Mental Health & Fitness Panel</h2>
        <h5>December 12th, 7:00 - 8:30pm</h5>
        <p>Join experts for a discussion on the powerful connection between mental health and physical fitness. Learn
          how exercise can improve mental clarity, reduce stress, and boost your emotional resilience in this
          informative and supportive panel.</p>
        <button>Register</button>
      </aside>
    </div>

    <div class="right-box">
      <img class="zumba-class" src="../assets/zumba-party.jpg" alt="Zumba class"/>
      <aside class="right-info">
        <h2>Holiday Zumba Party</h2>
        <h5>December 21st, 6:00 - 7:30pm</h5>
        <p>Celebrate the season with a high-energy Zumba class! Dance your way into the holidays with fun, festive moves
          set to upbeat music. Whether you’re a seasoned dancer or a first-timer, this class is all about letting loose
          and having fun!</p>
        <button>Register</button>
      </aside>
    </div>

    <div class="left-box">
      <img src="../assets/new-year-kickofff.jpg" alt="Four women high-fiving"/>
      <aside class="left-info">
        <h2>New Year, New You Kickoff Event</h2>
        <h5>January 1st, 9:00 - 11:00am</h5>
        <p>Start the year off strong with our special New Year’s event designed to jumpstart your fitness journey. Enjoy
          motivating workouts, a community meet-up, and tips for staying on track with your health goals in 2024.</p>
        <button>Register</button>
      </aside>
    </div>

  </section>
</template>

<style scoped>
section.events {
  margin: 1rem 5rem 1rem 5rem;
  text-align: center;

  div.left-box {
    display: flex;
    flex-direction: column;

    img.mindful-workshop {
      object-position: 0 10%;
    }
  }

  div.right-box {
    display: flex;
    flex-direction: column;

    img.zumba-class {
      object-position: 0 10%;
    }
  }

  img {
    width: 100%;
  }

  h2 {
    padding-top: 2rem;
  }

  h5 {
    margin: 0;
  }

  p {
    margin-bottom: 1rem;
  }
}

@media screen and (width > 1000px) {


  section.events {
    flex-direction: row;
    margin: 0 0 2rem 0;


    div.left-box {
      flex-direction: row;
      max-height: 350px;
      text-align: left;


      aside.left-info {
        margin: 0 5rem 0 5rem;
        align-content: center;
      }
    }

    div.right-box {
      flex-direction: row-reverse;
      max-height: 350px;
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