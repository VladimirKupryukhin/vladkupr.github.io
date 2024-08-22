<script setup>
</script>

<template>
  <main class="white-text">
    <div class="terminal-text flex-vertical">
      <div>vlad@myWebsite:~$</div>
      <div>vlad@myWebsite:~$ whoami</div>

      <div class="content-container">
        <div class="dashed-border">
          <img class="vlad-img" src="../assets/images/vlad.png">  
        </div>
        <div class="flex-vertical">
          <div id="intro" class="section-split">
            I am a senior Computer Engineering student at the University of Washington Bothell
          </div>
          <div id="basicInfo" class="section-split">
            <div class="content-left-right">
              <div>Name:</div>
              <div>Vladimir Kupryukhin</div>
            </div>
            <div class="content-left-right" >
              <div>Education:</div>
              <div>Computer Engineering (Half EE, Half CSS)</div>
            </div>
            <div class="content-left-right">
              <div>Email:</div>
              <div>vladimirkupryukhin@gmail.com</div>
            </div>
          </div>

          <div id="notable_pos" class="section-split">
            <div>Notable Positions</div>
            <div>-TrickFire Robotics Club President</div>
            <div>-TrickFire Robotics Club Software Lead</div>
          </div>

          <div id="target_industries" class="section-split">
            <div>Current Target Industries</div>
            <div>-Embedded Software Engineering</div>
            <div>-Robotics!</div>
            <div>-Anything Electrical</div>
          </div>

          <div>
            <div>Software skills at a glance</div>
            <div class="dashed-border">
              <img class="img-style" src="../assets/images/c-plus-plus-logo.png">
              <img class="img-style" src="../assets/images/docker-logo.png">
              <img class="img-style" src="../assets/images/git-logo.png">
              <img class="img-style" src="../assets/images/java-logo.png">
              <img class="img-style" src="../assets/images/ros-logo.png">
              <img class="img-style" src="../assets/images/python-logo.png">
            </div>
          </div>
          

        </div>
      </div>

      <!--div class="dashed-border">
        <img class="vlad-img" src="../assets/images/vlad.png">
      </div-->
      
      
    </div>
  </main>
</template>


<style>
@import '../assets/main.css';

.flex-horizontal {
  display: flex;
}

.section-split{
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

.img-style{
  width: fit-content;
  height: 50px;
  margin: 5px;
}

.vlad-img{
  width: fit-content;
  height: 80dvh;
  margin: 5px;
}

.content-container {
  display: flex;
}

@media only screen and (max-width: 640px){
  .content-container{
    display: flex;
    flex-direction: column;
  }
}
</style>
