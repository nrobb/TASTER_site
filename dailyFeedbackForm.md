---
title: Daily Feedback Form
layout: default
---
<form class="form-horizontal" action="http://forms.brace.io/tasterproject@gmail.com" method="POST">
<fieldset>

<!-- Form Name -->
<legend>Daily Feedback Form</legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-6 control-label" for="id">Your ID number</label>  
  <div class="col-md-6">
  <input id="id" name="id" type="text" placeholder="id number" class="form-control input-md" required="">
  <span class="help-block">Your ID number will have been sent to you by email</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-6 control-label" for="timespent">How long did you play games for today?</label>  
  <div class="col-md-6">
  <input id="timespent" name="timespent" type="text" placeholder="e.g. 2 hours" class="form-control input-md" required="">
    
  </div>
</div>

<!-- Multiple Checkboxes (inline) -->
<div class="form-group">
  <label class="col-md-6 control-label" for="whichGames">Which games did you play today? (Select each game you played)</label>
  <div class="col-md-6">
    <label class="checkbox-inline" for="whichGames-0">
      <input type="checkbox" name="whichGames" id="whichGames-0" value="Tealy and Orangey">
        <img src="{{ site.url }}/images/tealy-and-orangey.png" style="width: 150px;" title="Tealy and Orangey" alt="Tealy and Orangey">
        <p>Tealy and Orangey</p>
    </label>
    <label class="checkbox-inline" for="whichGames-1">
      <input type="checkbox" name="whichGames" id="whichGames-1" value="Multitask 2">
        <img src="{{ site.url }}/images/multitask-2.png" style="width: 150px;" title="Multitask 2" alt="Multitask 2">
        <p>Multitask 2</p>
    </label>
    <label class="checkbox-inline" for="whichGames-2">
      <input type="checkbox" name="whichGames" id="whichGames-2" value="Lux Ahoy">
        <img src="{{ site.url }}/images/lux-ahoy.png" style="width: 150px;" title="Lux Ahoy" alt="Lux Ahoy">
        <p>Lux Ahoy</p>
    </label>
    <label class="checkbox-inline" for="whichGames-3">
      <input type="checkbox" name="whichGames" id="whichGames-3" value="UFO Run">
        <img src="{{ site.url }}/images/ufo-run.png" style="width: 150px;" title="UFO Run" alt="UFO Run">
        <p>UFO Run</p>
    </label>
    <label class="checkbox-inline" for="whichGames-4">
      <input type="checkbox" name="whichGames" id="whichGames-4" value="Fit it Quick">
        <img src="{{ site.url }}/images/fit-it-quick.png" style="width: 150px;" title="Fit it Quick" alt="Fit it Quick">
        <p>Fit it Quick</p>
    </label>
    <label class="checkbox-inline" for="whichGames-5">
      <input type="checkbox" name="whichGames" id="whichGames-5" value="Monument Valley">
      Monument Valley
    </label>
    <label class="checkbox-inline" for="whichGames-6">
      <input type="checkbox" name="whichGames" id="whichGames-6" value="99 Bricks Wizard Academy">
      99 Bricks Wizard Academy
    </label>
    <label class="checkbox-inline" for="whichGames-7">
      <input type="checkbox" name="whichGames" id="whichGames-7" value="Mole Kart">
      Mole Kart
    </label>
    <label class="checkbox-inline" for="whichGames-8">
      <input type="checkbox" name="whichGames" id="whichGames-8" value="Cordy 2">
      Cordy 2
    </label>
    <label class="checkbox-inline" for="whichGames-9">
      <input type="checkbox" name="whichGames" id="whichGames-9" value="Shu's Garden">
      Shu's Garden
    </label>
    <label class="checkbox-inline" for="whichGames-10">
      <input type="checkbox" name="whichGames" id="whichGames-10" value="LEGO Juniors Quest">
      LEGO Juniors Quest
    </label>
    <label class="checkbox-inline" for="whichGames-11">
      <input type="checkbox" name="whichGames" id="whichGames-11" value="Dr. Panda's Handyman - Free">
      Dr. Panda's Handyman - Free
    </label>
    <label class="checkbox-inline" for="whichGames-12">
      <input type="checkbox" name="whichGames" id="whichGames-12" value="Amazing Alex Free">
      Amazing Alex Free
    </label>
    <label class="checkbox-inline" for="whichGames-13">
      <input type="checkbox" name="whichGames" id="whichGames-13" value="Toca Builders">
      Toca Builders
    </label>
    <label class="checkbox-inline" for="whichGames-14">
      <input type="checkbox" name="whichGames" id="whichGames-14" value="Gravity Duck">
      Gravity Duck
    </label>
  </div>
</div>

<!-- Multiple Radios (inline) -->
<div class="form-group">
  <label class="col-md-6 control-label" for="dailyFav">Which game did you enjoy most today? (Select just one game)</label>
  <div class="col-md-6"> 
    <label class="radio-inline" for="dailyFav-0">
      <input type="radio" name="dailyFav" id="dailyFav-0" value="Tealy and Orangey" required="">
      Tealy and Orangey
    </label> 
    <label class="radio-inline" for="dailyFav-1">
      <input type="radio" name="dailyFav" id="dailyFav-1" value="Multitask 2" required="">
      Multitask 2
    </label> 
    <label class="radio-inline" for="dailyFav-2">
      <input type="radio" name="dailyFav" id="dailyFav-2" value="Lux Ahoy" required="">
      Lux Ahoy
    </label> 
    <label class="radio-inline" for="dailyFav-3">
      <input type="radio" name="dailyFav" id="dailyFav-3" value="UFO Run" required="">
      UFO Run
    </label> 
    <label class="radio-inline" for="dailyFav-4">
      <input type="radio" name="dailyFav" id="dailyFav-4" value="Fit it Quick" required="">
      Fit it Quick
    </label> 
    <label class="radio-inline" for="dailyFav-5">
      <input type="radio" name="dailyFav" id="dailyFav-5" value="Monument Valley" required="">
      Monument Valley
    </label> 
    <label class="radio-inline" for="dailyFav-6">
      <input type="radio" name="dailyFav" id="dailyFav-6" value="99 Bricks Wizard Academy" required="">
      99 Bricks Wizard Academy
    </label> 
    <label class="radio-inline" for="dailyFav-7">
      <input type="radio" name="dailyFav" id="dailyFav-7" value="Mole Kart" required="">
      Mole Kart
    </label> 
    <label class="radio-inline" for="dailyFav-8">
      <input type="radio" name="dailyFav" id="dailyFav-8" value="Cordy 2" required="">
      Cordy 2
    </label> 
    <label class="radio-inline" for="dailyFav-9">
      <input type="radio" name="dailyFav" id="dailyFav-9" value="Shu's Garden" required="">
      Shu's Garden
    </label> 
    <label class="radio-inline" for="dailyFav-10">
      <input type="radio" name="dailyFav" id="dailyFav-10" value="LEGO Juniors Quest" required="">
      LEGO Juniors Quest
    </label> 
    <label class="radio-inline" for="dailyFav-11">
      <input type="radio" name="dailyFav" id="dailyFav-11" value="Dr. Panda's Handyman - Free" required="">
      Dr. Panda's Handyman - Free
    </label> 
    <label class="radio-inline" for="dailyFav-12">
      <input type="radio" name="dailyFav" id="dailyFav-12" value="Amazing Alex Free" required="">
      Amazing Alex Free
    </label> 
    <label class="radio-inline" for="dailyFav-13">
      <input type="radio" name="dailyFav" id="dailyFav-13" value="Toca Builders" required="">
      Toca Builders
    </label> 
    <label class="radio-inline" for="dailyFav-14">
      <input type="radio" name="dailyFav" id="dailyFav-14" value="Gravity Duck" required="">
      Gravity Duck
    </label>
  </div>
</div>

<!-- Button (Double) -->
<div class="form-group">
  <label class="col-md-4 control-label" for="dailyFeedbackSendButton"></label>
  <div class="col-md-8">
    <button id="dailyFeedbackSendButton" type="submit" name="dailyFeedbackSendButton" class="btn btn-primary">Send</button>
    <button id="dailyFeedbackResetButton" type="reset" name="dailyFeedbackResetButton" class="btn btn-default">Reset</button>
  </div>
</div>

</fieldset>
</form>
