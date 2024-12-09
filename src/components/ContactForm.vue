<script setup>

</script>

<template>
  <div class="container">
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
        <div class="subject">
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
        </div>
      </div>
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
  font-size: clamp(.5em, 5vw, 1.2em);
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
  width: 40%;
  margin-top: 1rem;
  display: block;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

div.input {
  justify-items: center;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (width > 1200px) {

input[type=submit] {
  width: 30%;
  justify-content: center;
  }
}
</style>