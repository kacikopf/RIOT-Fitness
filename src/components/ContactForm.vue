<script setup>

</script>

<template>
  <div class="container">
    <h1>We hear you!</h1>
    <p><span>Ask questions, share thoughts, or request your tour today.</span> We usually respond within 1-3 business days!</p>
    <form>
      <div class="row">
        <div class="fname">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
        </div>
      </div>
      <div class="row">
        <div class="lname">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        </div>
      </div>
      <div class="row">
        <div class="email">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email..">
        </div>
      </div>
      <div class="row">
        <div class="subject">
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
        </div>
      </div>
      <input type="checkbox" id="tour" name="tour" value="tour">
      <label for="tour"> I would like a tour of RIOT Fitness! </label>
      <div class="input row">
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<style scoped>
input[type=text], select, textarea{
  font-family: "Azo Sans", Helvetica, sans-serif;
  width: 100%;
  padding: 12px;
  border: 2px solid #272727;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

label {
  font-family: "Azo Sans", Helvetica, sans-serif;
  font-weight: bolder;
  font-size: clamp(.5em, 5vw, 1em);
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  font-family: "Azo Sans", Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #ee3f23;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  width: 65%;
  margin-top: 1rem;
  display: block;
}

.container {
  border-radius: 5px;
  background-color: #f3f3f3;
  padding: 20px;

  h1, p {
    text-align: center;

    span {
      font-weight: bold;
    }
  }
}

div.input {
  justify-items: center;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (width > 700px) {
  input[type=submit] {
    width: 40%
  }
}

@media screen and (width > 1200px) {

input[type=submit] {
  width: 30%;
  justify-content: center;
  }
}
</style>