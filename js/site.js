function getWorkout() {
  const days = ["Off", "SE 3x10", "E", "SE 3x20", "E", "SE 3x30", "E"];
  const phaseStartDate = new Date("2023-05-08"); // Change this to the start date of your phase
  const today = new Date();
  const dayOfWeek = today.getDay();
  const weeksElapsed = Math.floor(
    (today - phaseStartDate) / (7 * 24 * 60 * 60 * 1000)
  );
  const currentWeek = (weeksElapsed % 3) + 1;
  let workout = days[dayOfWeek];
  if (workout.startsWith("SE")) {
    workout = workout.replace(/\d+x\d+/, `3x${10 * currentWeek}`);
    exercises.innerHTML = getSEExercises();
  } else if (workout.startsWith("E")) {
    exercises.innerHTML = "15-30 Minutes";
  }
  const workoutEl = document.getElementById("workout");
  workoutEl.textContent = workout;

  let workoutPlan = "Pre-Base Building Week " + (weeksElapsed + 1);
  document.getElementById("workoutPlan").innerHTML = workoutPlan;

  const quotes = [
    "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill",
    "“Believe you can and you're halfway there.” – Theodore Roosevelt",
    "“Strive not to be a success, but rather to be of value.” – Albert Einstein",
    "“I have not failed. I've just found 10,000 ways that won't work.” – Thomas Edison",
    "“The only way to do great work is to love what you do.” – Steve Jobs",
    "“Today I will do what others won't, so tomorrow I can accomplish what others can't.” – Jerry Rice",
    "“What seems impossible today will one day become your warm-up.”",
    "“Do something today that your future self will thank you for.”",
    "“Every new day is a new opportunity to improve yourself. Take it and make the most of it.”",
    "“Tough times don't last but tough people do.” – Robert Schuller",
    "“A little progress each day adds up to big results.”",
    "“You may not be there yet, but you are closer than you were yesterday.”",
    "“Strong people are harder to kill than weak people and are more useful in general.” – Mark Rippetoe",
    "“No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.” – Socrates",
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const motivationEl = document.getElementById("motivation");
  motivationEl.textContent = quote;

  const images = [
    "../img/motivation1.jpg",
    "../img/motivation2.jpg",
    "../img/motivation3.jpg",
    "../img/motivation4.jpg",
    "../img/motivation5.jpg",
  ];
  const image = images[Math.floor(Math.random() * images.length)];
  const imgEl = document.getElementById("motivation-img");
  imgEl.src = image;
}

function getSEExercises() {
  return "Overhead Press, Bent Over Row, Squat, Romanian Deadlift, KB Swings, Sit Ups"; // Replace this with your list of exercises
}

getWorkout();
