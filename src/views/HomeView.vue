<script setup>
</script>

<template>
  <main class="terminal-text">

    <div class="flex-vertical" style="sborder: 2px solid red;">
      <div>vlad@myWebsite:~$</div>
      <div>vlad@myWebsite:~$ whoami</div>

      <div id="divider" class="divider"></div>

      <div id="intro-content" class="flex-horizontal flex-center" style="sborder: 2px solid green;">
        <div class="vlad-img-div" style="sborder: 2px solid yellow;">
          <img class="my-dashed-border vlad-img" src="../assets/images/vlad.png">
        </div>

        <div class="flex-vertical section-split" style="sborder: 2px solid orange;">
          <div class=" flex-horizontal flex-center">
            <pre class="ascii-hand" style="sborder: 2px solid Green;"
              title="Art by Donovan Bake from https://www.asciiart.eu/people/body-parts/hand-gestures">
( _\    /_ )
 \ _\  /_ / 
  \ _\/_ /_ _
  |_____/_/ /|
  (  (_)__)J-)
  (  /`.,   /
   \/  ;   /
    | === |
            </pre>
          </div>


          <div class="flex-vertical ">
            <div style="sborder: 2px solid pink;" class="sdashed-border flex-horizontal whoami-text flex-center">Hello
              there my fellow friend!</div>
            <div style="sborder: 2px solid pink;" class="sdashed-border whoami-text">I am a senior Computer Engineering
              student at the University of Washington Bothell</div>

            <div class="flex-vertical flex-center">
              <div class="flex-horizontal flex-center">
                <h2>Let's Connect!</h2>
              </div>
              <div class="flex-horizontal flex-center">
                <div class="my-dashed-border lets-connect-padding">
                  <a href="https://www.linkedin.com/in/vladimirkup/">
                    <img class="img-style" src="../assets/images/linked_in_small.png" >
                  </a>
                </div>
                <div class="my-dashed-border lets-connect-padding">
                  <a href="mailto: vladimirkupryukhin@gmail.com">
                    <img class="img-style" src="../assets/images/email_logo.png" >
                  </a>
                </div>
                <div class="my-dashed-border lets-connect-padding">
                  <a href="https://www.linkedin.com/in/vladimirkup/">
                    <img class="img-style" src="../assets/images/github_logo.png" >
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div id="divider" class="divider">

      </div>

      <div class="flex-vertical flex-center">
        <div class="flex-horizontal flex-center">
          <h2>Software Skills at a Glance</h2>
        </div>
        <div class="flex-horizontal flex-center">
          <div class="my-dashed-border">
            <img class="img-style" src="../assets/images/c-plus-plus-logo.png">
            <img class="img-style" src="../assets/images/docker-logo.png">
            <img class="img-style" src="../assets/images/git-logo.png">
            <img class="img-style" src="../assets/images/java-logo.png">
            <img class="img-style" src="../assets/images/ros_dots.png">
            <img class="img-style" src="../assets/images/python-logo.png">
          </div>
        </div>
      </div>

      <div class="flex-vertical flex-center">
        <div class="flex-horizontal flex-center">
          <h2>Hardware Skills at a Glance</h2>
        </div>
        <div class="flex-horizontal flex-center">
          <div class="my-dashed-border">
            <img class="img-style" src="../assets/images/scope.png">
            <img class="img-style" src="../assets/images/funcgen.png">
            <img class="img-style" src="../assets/images/dmm.png">
            <img class="img-style" src="../assets/images/pcb.png">
          </div>
        </div>
      </div>

      <div id="divider" class="divider"></div>

    </div>

  </main>
</template>


<style lang="scss">
@import '../assets/main.css';

.divider {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 10px;
  border: dashed white;
}


.flex-horizontal {
  display: flex;
}

.ascii-hand {
  font-size: xx-large;
}

.flex-center {
  justify-content: center;
}

.vlad-img-div {
  width: fit-content;
  height: fit-content;
}


.section-split {
  margin: 10px;
}

.lets-connect-padding{
  margin: 10px;
}

.content-left-right {
  display: flex;
  justify-content: space-between;
}

.flex-vertical {
  display: flex;
  flex-direction: column;
}

.img-style {
  width: fit-content;
  height: 100px;
  margin: 5px;
}

.vlad-img {
  width: fit-content;
  /*height: 80dvh;*/
  height: 40em;

}

.content-container {
  display: flex;
}

.whoami-text {
  height: fit-content;
  font-size: larger;
}

@media only screen and (max-width: 640px) {
  .content-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
