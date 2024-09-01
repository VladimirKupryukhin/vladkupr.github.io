<script setup>
</script>

<template>
  <main class="terminal-text">

    <div class="flex-vertical" style="sborder: 2px solid red;">
      <div>vlad@myWebsite:~$</div>
      <div>vlad@myWebsite:~$ whoami</div>

      <div id="intro-content" class="flex-horizontal flex-center" style="sborder: 2px solid green;">
        <div class="vlad-img-div" style="sborder: 2px solid yellow;">
          <img class="dashed-border vlad-img" src="../assets/images/vlad.png">  
        </div>

        <div class="flex-vertical section-split" style="sborder: 2px solid orange;">
          <pre class="ascii-hand flex-horizontal flex-center" style="sborder: 2px solid Green;" title="Art by Donovan Bake from https://www.asciiart.eu/people/body-parts/hand-gestures">
( _\    /_ )
 \ _\  /_ / 
  \ _\/_ /_ _
  |_____/_/ /|
  (  (_)__)J-)
  (  /`.,   /
   \/  ;   /
    | === |
            </pre>

          <div class="flex-vertical ">
            <div style="sborder: 2px solid pink;" class="sdashed-border flex-horizontal whoami-text flex-center">Hello there my fellow friend!</div>
            <div style="sborder: 2px solid pink;" class="sdashed-border whoami-text">I am a senior Computer Engineering student at the University of Washington Bothell</div>
          </div>


        </div>
      </div>

      <div id="divider" class="divider">
        
      </div>

      <div class="flex-vertical flex-center">
          <div class="flex-horizontal flex-center"><h2>Software skills at a glance</h2></div>
            <div class="flex-horizontal flex-center">
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

      <div class="flex-vertical flex-center">
          <div class="flex-horizontal flex-center"><h2>Hardware skills at a glance</h2></div>
            <div class="flex-horizontal flex-center">
              <div class="dashed-border">
                <img class="img-style" src="../assets/images/scope.jpg">
                <img class="img-style" src="../assets/images/function_gen.png">
                <img class="img-style" src="../assets/images/multimeter.png">
              </div>
          </div>
      </div>

    </div>

    <!--div class="flex-vertical">

      <div>vlad@myWebsite:~$</div>
      <div>vlad@myWebsite:~$ whoami</div>

      <div id="intro_section" class="flex-horizontal flex-center" style="borsder: 2px solid red;">
        <div style="bordser: 2px solid green;">
          <img class="dashed-border vlad-img" src="../assets/images/vlad.png">  
        </div>

        <div id="intro" class="section-split whoami-text" style="bosrder: 2px solid pink;">
            <pre class="ascii-hand" title="Art by Donovan Bake from https://www.asciiart.eu/people/body-parts/hand-gestures">
( _\    /_ )
 \ _\  /_ / 
  \ _\/_ /_ _
  |_____/_/ /|
  (  (_)__)J-)
  (  /`.,   /
   \/  ;   /
    | === |
            </pre>
            <div class="dashed-border">I am a senior Computer Engineering student at the University of Washington Bothell</div>
        </div>

      </div>
    </div-->


    <!--div class="terminal-text flex-vertical">
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

      <div class="dashed-border">
        <img class="vlad-img" src="../assets/images/vlad.png">
      </div>
      
      
    </div-->
  </main>
</template>


<style lang="scss">
@import '../assets/main.css';

.divider{
  margin-top: 20px;
  margin-bottom: 20px;
  height: 2px;
  border: dashed white;
}


.flex-horizontal {
  display: flex;
}

.ascii-hand{
  font-size:xx-large;
}

.flex-center{
  justify-content: center;
}

.vlad-img-div{
  width: fit-content;
  height: fit-content;
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
  height: 100px;
  margin: 5px;
}

.vlad-img{
  width: fit-content;
  /*height: 80dvh;*/
  height: 50em;
  
}

.content-container {
  display: flex;
}

.whoami-text{
  height: fit-content;
  font-size: larger;
}

@media only screen and (max-width: 640px){
  .content-container{
    display: flex;
    flex-direction: column;
  }
}
</style>
